// REFACTOR CODE TO REMOVE REPEATED STATEMENTS:


const sequence = "|/-\|/-\|/-\|";

let index = 100;

for (const char of sequence) {

  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, index
  );

  index += 200;
};

//-----------------------------------------
/*
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 1700);
*/