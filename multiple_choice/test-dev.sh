#!/bin/bash
# Test script to run dev-runner and verify it works

echo "=== Cleaning up old processes ==="
pkill -9 -f "node scripts/dev-runner.js" 2>/dev/null || true
pkill -9 -f "npx.*vite" 2>/dev/null || true
pkill -9 -f "node.*dist/server.js" 2>/dev/null || true
sleep 1

echo "=== Starting dev-runner ==="
node scripts/dev-runner.js > dev-runner-test.log 2>&1 &
DEV_PID=$!
echo "Dev runner PID: $DEV_PID"

echo "=== Waiting 8 seconds for startup ==="
sleep 8

echo "=== Checking processes ==="
ps aux | grep -E "[n]ode.*vite|[n]ode.*dist/server.js|[n]ode scripts/dev-runner" || echo "No relevant processes found"

echo ""
echo "=== Testing server endpoints ==="
echo "Testing root..."
curl -s -I http://localhost:3001/ | head -5

echo ""
echo "Testing API..."
curl -s http://localhost:3001/api/tests | jq -r 'keys[]' 2>/dev/null || echo "API call failed"

echo ""
echo "Testing /src/main.ts..."
curl -s -I http://localhost:3001/src/main.ts | grep -E "HTTP|Content-Type"

echo ""
echo "=== Dev runner log (last 50 lines) ==="
tail -50 dev-runner-test.log

echo ""
echo "=== Cleaning up ==="
kill $DEV_PID 2>/dev/null || true
pkill -9 -f "npx.*vite" 2>/dev/null || true
pkill -9 -f "node.*dist/server.js" 2>/dev/null || true
sleep 1

echo "=== Test complete ===" 
