const a = process.argv[2];
const b = process.argv[3];

console.log(a === b);

console.log(((a % 7) === 0) && ((b % 7) === 0));