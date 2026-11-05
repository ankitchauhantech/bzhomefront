// Auto-installs dependencies if node_modules is missing, so `npm run dev` just works.
const { existsSync } = require("fs");
const { execSync } = require("child_process");
if (!existsSync("node_modules/next")) {
  console.log("📦 Installing dependencies (first run)...");
  execSync("npm install", { stdio: "inherit" });
}
