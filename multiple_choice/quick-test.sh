#!/bin/bash
set -e

echo "=== Quick Dev Test ==="
echo ""

echo "1. Cleaning up..."
pkill -9 -f "dev-runner" 2>/dev/null || true
pkill -9 -f "vite" 2>/dev/null || true
pkill -9 -f "dist/server" 2>/dev/null || true
sleep 2

echo "2. Starting dev-runner in background..."
npm run dev > /tmp/dev-runner-test.log 2>&1 &
DEV_PID=$!
echo "   PID: $DEV_PID"

echo "3. Waiting 10 seconds for startup..."
for i in {10..1}; do
    echo -n "$i... "
    sleep 1
done
echo ""

echo "4. Checking if server is running on port 3001..."
if curl -s -f http://localhost:3001/ > /dev/null 2>&1; then
    echo "   ✅ Server is responding!"
else
    echo "   ❌ Server is NOT responding"
    echo ""
    echo "=== Dev Runner Log ==="
    cat /tmp/dev-runner-test.log
    kill $DEV_PID 2>/dev/null || true
    exit 1
fi

echo "5. Testing API endpoint..."
if curl -s -f http://localhost:3001/api/tests > /dev/null 2>&1; then
    echo "   ✅ API is working!"
else
    echo "   ❌ API is NOT working"
fi

echo "6. Checking Content-Type for /src/main.ts..."
CONTENT_TYPE=$(curl -s -I http://localhost:3001/src/main.ts 2>/dev/null | grep -i "content-type" || echo "")
if echo "$CONTENT_TYPE" | grep -q "javascript"; then
    echo "   ✅ /src/main.ts served as JavaScript!"
else
    echo "   ⚠️  Content-Type: $CONTENT_TYPE"
fi

echo ""
echo "=== Last 30 lines of dev-runner log ==="
tail -30 /tmp/dev-runner-test.log

echo ""
echo "=== Test complete! ==="
echo "Server is running. Press Ctrl+C to stop, or run: kill $DEV_PID"
echo "View at: http://localhost:3001"
