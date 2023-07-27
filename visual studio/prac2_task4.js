const fs = require('fs');


fs.readFile('student-data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }


  const students = data.split('\n');
  const filteredStudents = students.filter((student) => {
    const [name, cgpa] = student.split(',');
    return name.includes('HI') && parseFloat(cgpa) > 7;
  });


  console.log('Students with name containing "MA" and CGPA > 7:');
  console.log(filteredStudents);

})
