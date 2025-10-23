const express = require('express');
const path = require('path');
const open = require('open');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`
🚀 Coderbyte Assessment Server Started!

📍 Server running at: http://localhost:${PORT}
🎯 Assessment Type: Easy Level 1
⏱️  Duration: 30 minutes
📊 Questions: 17 programming challenges

Opening browser automatically...
    `);

    // Automatically open the browser
    open(`http://localhost:${PORT}`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Assessment server shutting down...');
    process.exit(0);
});