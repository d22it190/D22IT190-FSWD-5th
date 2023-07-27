const os = require('os');
function displayMemoryInfo()
{
const totalMemory = os.totalmem();
console.log('Total Memory:', formatBytes(totalMemory));
const freeMemory = os.freemem();
console.log('Free Memory:', formatBytes(freeMemory));
const percentFreeMemory = ((freeMemory / totalMemory) *
100).toFixed(2);
console.log('Percentage of Free Memory:', percentFreeMemory +
'%');
}
function formatBytes(bytes)
{
const units = ['B', 'KB', 'MB', 'GB', 'TB'];
let size = bytes;
let unitIndex = 0;
while (size >= 1024 && unitIndex < units.length - 1)
{
size /= 1024;
unitIndex++;
}
return size.toFixed(2) + ' ' + units[unitIndex];
}
displayMemoryInfo();