const readline = require('readline');
const fs = require('fs');

// Create an interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const employees = [];

function promptForEmployeeInfo() {
  rl.question('Enter employee name (or type "exit" to finish): ', (name) => {
    if (name.toLowerCase() === 'exit') {
      
      writeEmployeeDataToFile();
    } else {
      rl.question('Enter employee age: ', (age) => {
        rl.question('Enter employee position: ', (position) => {
          
          const employee = {
            name: name,
            age: parseInt(age),
            position: position
          };
         
          employees.push(employee);
          
          promptForEmployeeInfo();
        });
      });
    }
  });
}

function writeEmployeeDataToFile() {
  const data = JSON.stringify(employees, null, 2);

  fs.writeFile('employee-data.json', data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Employee data has been saved to employee-data.json');
    }
    rl.close();
  });
}

promptForEmployeeInfo();
