/**
 * To calculate the result of the passing object
 * @param {object} args
 */
function calculate(args) {
  try {
    return eval(`${args.n1} ${args.op} ${args.n2}`);
  } catch (err) {
    return "Not supported";
  }
}
console.log(calculate({n1: 2, n2: 3, op: "+"})); // expected output: 5
console.log(calculate({n1: 5, n2: 2, op: "-"})); // expected output: 3
console.log(calculate({n1: 1, n2: 6, op: "x"})); // expected output: 'Not supported'
