const fs = require("fs");
const path = require("path");
let newFile = "";
const files = fs.readdirSync(__dirname);
const txtFiles = files.filter((file) => file.split(".")[1] === "txt");
txtFiles.forEach((file, index) => {
  const linesToRead = index + 1;
  const filePath = path.join(__dirname, file);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const lines = fileContent.split("\n");
  for (let i = 0; i < linesToRead && i < lines.length; i++) {
    newFile += lines[i] + "\n";
  }
});

fs.writeFileSync("output.txt", newFile);
