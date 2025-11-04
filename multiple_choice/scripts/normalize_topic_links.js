// normalize_topic_links.js
// Scans assessment files and centralizes mdn links into metadata.topicLinks
// and converts per-question topic objects to arrays of topicName strings.

const fs = require('fs');
const path = require('path');

const assessmentsDir = path.join(__dirname, '..', 'assessments');

function findAssessmentFiles (dir) {
    const results = [];
    const items = fs.readdirSync(dir);
    for (const it of items) {
        const full = path.join(dir, it);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
            results.push(...findAssessmentFiles(full));
        } else if (/assessment\d+\.js$/.test(it)) {
            results.push(full);
        }
    }
    return results;
}

function normalizeFile (filePath) {
    // require the file to get metadata and questions
    delete require.cache[require.resolve(filePath)];
    const data = require(filePath);
    const { metadata, questions } = data;

    // collect unique topicName -> refLink
    const map = new Map();
    questions.forEach(q => {
        if (q.topic && Array.isArray(q.topic.topics)) {
            q.topic.topics.forEach(t => {
                if (typeof t === 'string') return; // already normalized
                if (t && t.topicName) {
                    if (!map.has(t.topicName)) map.set(t.topicName, t.refLink || null);
                }
            });
        }
    });

    const topicLinks = Array.from(map.entries()).map(([topicName, refLink]) => ({ topicName, refLink }));

    // attach into metadata as topicLinks (but don't overwrite if already present)
    metadata.topicLinks = topicLinks;

    // normalize each question: replace topic.topics entries with topicName strings
    questions.forEach(q => {
        if (q.topic && Array.isArray(q.topic.topics)) {
            q.topic.topics = q.topic.topics.map(t => (typeof t === 'string' ? t : t.topicName));
        }
    });

    // serialize back to file as JS module
    const out = [];
    out.push('// ' + path.basename(filePath) + ' - AUTO-GENERATED topics and assessmentId');
    out.push('const metadata = ' + JSON.stringify(metadata, null, 4) + ';');
    out.push('');
    out.push('const questions = ' + JSON.stringify(questions, null, 4) + ';');
    out.push('');
    out.push('module.exports = { metadata, questions };');

    fs.writeFileSync(filePath, out.join('\n') + '\n', 'utf8');
    console.log('Normalized:', path.relative(process.cwd(), filePath));
}

function main () {
    const files = findAssessmentFiles(assessmentsDir);
    if (files.length === 0) {
        console.error('No assessment files found in', assessmentsDir);
        process.exit(1);
    }
    files.forEach(normalizeFile);
}

if (require.main === module) main();
