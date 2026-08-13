import os from 'os';
import {bytesToSize} from './FreeMemeory.mjs';

console.log('System Information:');
console.log('Operating System:', os.type());
console.log('Platform:', os.platform());
console.log('Release:', os.release());
console.log('Total Memory:', bytesToSize(os.totalmem()));
console.log('Free Memory:', bytesToSize(os.freemem()));
console.log('CPU Architecture:', os.arch());
console.log('Number of CPUs:', os.cpus().length);