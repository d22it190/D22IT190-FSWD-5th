const fs = require('fs');

function compareFiles(FILE1Path, FILE2Path) {
  const FILE1Lines = fs.readFileSync(FILE1Path, 'utf8').split('\n');
  const FILE2Lines = fs.readFileSync(FILE2Path, 'utf8').split('\n');

  if (FILE1Lines.length > FILE2Lines.length) {
    console.log(`${FILE1Path} is larger than ${FILE2Path}`);
  } else if (FILE2Lines.length > FILE1Lines.length) {
    console.log(`${FILE2Path} is larger than ${FILE1Path}`);
  } else {
    console.log('Both files have the same number of lines.');
  }

  console.log('Differing lines:');
  for (let i = 0; i < FILE1Lines.length && i < FILE2Lines.length; i++) {
    if (FILE1Lines[i] !== FILE2Lines[i]) {
      console.log(`Line ${i + 1}:`);
      console.log(`${FILE1Path}: ${FILE1Lines[i].trim()}`);
      console.log(`${FILE2Path}: ${FILE2Lines[i].trim()}`);
      console.log();
    }
  }

  if (FILE1Lines.length !== FILE2Lines.length) {
    const additionalLines = FILE1Lines.length > FILE2Lines.length ? FILE1Lines : FILE2Lines;
    const FILE = FILE1Lines.length > FILE2Lines.length ? FILE1Path : FILE2Path;
    console.log('Additional lines:');
    for (let i = Math.min(FILE1Lines.length, FILE2Lines.length); i < additionalLines.length; i++) {
      console.log(`Line ${i + 1}:`);
      console.log(`${FILE}: ${additionalLines[i].trim()}`);
      console.log();
    }
  }
}

// Usage example
compareFiles('file1.txt', 'file2.txt');
