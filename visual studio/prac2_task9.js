const fs = require('fs');
const path = require('path');

// Create a file
fs.writeFile('example.txt', 'This is a sample file.', (err) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log('File created successfully.');

    // Read the file
    fs.readFile('example.txt', 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('File content:', data);

        // Append content to the file
        fs.appendFile('example.txt', '\nThis is appended content.', (err) => {
          if (err) {
            console.error('Error appending to file:', err);
          } else {
            console.log('Content appended successfully.');

            // Read the file again to see the appended content
            fs.readFile('example.txt', 'utf-8', (err, data) => {
              if (err) {
                console.error('Error reading file:', err);
              } else {
                console.log('Updated file content:', data);
                 // Rename a file
                 fs.rename('example.txt', 'new-example.txt', (err) => {
                    if (err) {
                      console.error('Error renaming file:', err);
                    } else {
                      console.log('File renamed successfully.');

                // Delete the file
                fs.unlink('new-example.txt', (err) => {
                  if (err) {
                    console.error('Error deleting file:', err);
                  } else {
                    console.log('File deleted successfully.');

                   

                        // List files/directories in a directory
                        const directoryPath = '.';
                        fs.readdir(directoryPath, (err, files) => {
                          if (err) {
                            console.error('Error listing files:', err);
                          } else {
                            console.log(`Files in ${directoryPath}:`);
                            files.forEach((file) => {
                              console.log(file);
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});

