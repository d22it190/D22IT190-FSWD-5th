const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to create a backup of a file
function createBackup(filePath) {
  // Generate a timestamp for the backup file
  const timestamp = new Date().toISOString().replace(/:/g, '');

  // Generate the backup file name
  const backupFileName = path.basename(filePath) + '-' + timestamp + '.bak';
  const backupFilePath = path.join(path.dirname(filePath), backupFileName);

  // Copy the original file to the backup file
  fs.copyFile(filePath, backupFilePath, (err) => {
    if (err) {
      console.error('Error creating backup:', err);
    } else {
      console.log(`Backup created: ${backupFilePath}`);
    }
    rl.close();
  });
}

// Function to restore a file from backup
function restoreBackup(backupFilePath, originalFilePath) {
  fs.copyFile(backupFilePath, originalFilePath, (err) => {
    if (err) {
      console.error('Error restoring backup:', err);
    } else {
      console.log(`Backup restored: ${originalFilePath}`);
    }
    rl.close();
  });
}

// Prompt the user for backup or restore operation
rl.question('Choose an operation (backup/restore): ', (operation) => {
  if (operation === 'backup') {
    rl.question('Enter the path of the file to backup: ', (filePath) => {
      createBackup(filePath);
    });
  } else if (operation === 'restore') {
    rl.question('Enter the path of the backup file: ', (backupFilePath) => {
      rl.question('Enter the path to restore the file: ', (originalFilePath) => {
        restoreBackup(backupFilePath, originalFilePath);
      });
    });
  } else {
    console.log('Invalid operation.');
    rl.close();
  }
});

