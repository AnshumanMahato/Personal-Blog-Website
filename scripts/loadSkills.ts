const fs = require("fs");
const path = require("path");

function main() {
  let skills: string[] = [];

  skills = fs
    .readdirSync(path.join(__dirname, "../public/assets/skill-icons"))
    .filter((file: string) => {
      const regex = new RegExp(/^.*\.(?:svg)$/i);
      return regex.test(file);
    });

  fs.writeFileSync(
    path.join(__dirname, "../app/lib/skills.json"),
    JSON.stringify(skills, null, 2)
  );

  console.log("Skills loaded successfully!");
}

main();
