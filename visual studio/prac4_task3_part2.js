const path = require('path');

function extractFileExtension(filePath) {
  const fileExtension = path.extname(filePath);
  console.log('Extracted File Extension:', fileExtension);
}

// Example usage:
const filePath = '/file11.txt';

extractFileExtension(filePath);
