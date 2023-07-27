const os = require('os');

function displayUserInfo() {
  const username = os.userInfo().username;
  const homeDir = os.homedir();
  const platform = os.platform();
  
  console.log('Username:', username);
  console.log('Home Directory:', homeDir);
  console.log('Platform:', platform);
}

displayUserInfo();