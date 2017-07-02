let sum = 0;
for (val of process.argv.splice(2)) {
  sum += Number(val);
}
console.log(sum);
