const path = require('path');
const fs = require('fs');

// Example file paths
const filePath1 = '/file11.txt';
const filePath2 = '/file12.txt';

// Get absolute paths for the files
const absolutePath1 = path.resolve(filePath1);
const absolutePath2 = path.resolve(filePath2);

// Check if the absolute paths refer to the same file
const isSameFile = fs.existsSync(absolutePath1) &&
  fs.existsSync(absolutePath2) &&
  fs.statSync(absolutePath1).ino === fs.statSync(absolutePath2).ino;

// Display the result
if (isSameFile) {
  console.log('The file paths refer to the same file.');
} else {
  console.log('The file paths refer to different files.');
}