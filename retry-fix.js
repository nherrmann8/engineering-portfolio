const { execSync } = require('child_process');
const fs = require('fs');

const MAX_ATTEMPTS = 5;
let attemptCount = 0;

function getLastCommitMessage() {
  return execSync('git log -1 --pretty=%B').toString().trim();
}

function modifyCode(lastRequest) {
  const prompt = `The last change failed testing. Modify the website code to fix it. Here’s the last request: ${lastRequest}`;
  const apiKey = 'YOUR_OPENAI_API_KEY';

  const response = execSync(`curl -X POST "https://api.openai.com/v1/completions" \
    -H "Authorization: Bearer ${apiKey}" \
    -H "Content-Type: application/json" \
    -d '{"model": "gpt-4", "prompt": "${prompt}", "max_tokens": 400}'`);

  return JSON.parse(response.toString()).choices[0].text;
}

function main() {
  const lastRequest = getLastCommitMessage();

  while (attemptCount < MAX_ATTEMPTS) {
    const newCode = modifyCode(lastRequest);
    fs.writeFileSync('script.js', newCode);

    execSync('git add script.js');
    execSync(`git commit -m "Self-Iteration Fix Attempt ${attemptCount + 1}"`);
    execSync('git push');

    attemptCount++;

    // Run Playwright tests again to check if it works
    try {
      execSync('playwright test homepage.spec.js', { stdio: 'inherit' });
      console.log("✅ Update Passed! No further iterations needed.");
      return;
    } catch (error) {
      console.log(`❌ Attempt ${attemptCount} failed. Retrying...`);
    }
  }

  console.log("⚠️ Max attempts reached. Stopping iteration.");
}

main();
