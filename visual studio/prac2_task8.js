const fs = require('fs');
const path = require('path');

// Function to create file/folder structure recursively
function createStructure(rootPath, structure) {
  for (const item of structure) {
    const itemPath = path.join("/", item.name);

    if (item.type === 'file') {
      fs.writeFileSync(itemPath, item.content || '');
      console.log(`Created file: ${itemPath}`);
    } else if (item.type === 'folder') {
      fs.mkdirSync(itemPath);
      console.log(`Created folder: ${itemPath}`);
      createStructure(itemPath, item.children);
    }
  }
}

// Read the JSON file
const jsonFilePath = 'structure.json';
const structureData = fs.readFileSync(jsonFilePath, 'utf-8');
const structure = JSON.parse(structureData);

// Specify the root path where the structure will be created
const rootPath = 'FSWD1';

// Create the file/folder structure
createStructure(rootPath, structure);

