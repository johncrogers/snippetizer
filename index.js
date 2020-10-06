const { readFileSync, readdirSync, writeFileSync } = require("fs");

function replaceQuotes(line) {
  return line
    .split("")
    .map((char) => {
      if (char === '"') {
        return "'";
      } else {
        return char;
      }
    })
    .join("");
}

const convertFileContentsIntoSnippet = (fileName, filePath) => {
  try {
    const trimmedName = fileName.split(".")[0];
    return [
      `    "${trimmedName}": {`,
      `      "prefix": "${trimmedName}",`,
      `      "body": [`,
      ...readFileSync(filePath, {
        encoding: "utf8",
      })
        .split("\n")
        .map((line) => `        "${replaceQuotes(line)}",`),
      `      ],`,
      `    },`,
    ].join("\n");
  } catch (error) {
    console.error("File could not be converted.", error);
  }
};

const collectSnippets = (directory) =>
  [
    "{",
    ...readdirSync(directory).map((fileName) =>
      convertFileContentsIntoSnippet(
        fileName,
        `${__dirname}/${directory}/${fileName}`
      )
    ),
    "}",
  ].join("\n");

const writeSnippetsForFileType = (fileType) => {
  writeFileSync(
    `./output/${fileType}.json`,
    collectSnippets(`samples/${fileType}`)
  );
};

const generateAllSnippets = () => {
  readdirSync("./samples").forEach((fileType) => {
    writeSnippetsForFileType(fileType);
  });
};

generateAllSnippets();
