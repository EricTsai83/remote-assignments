// Complete the function below to show a delayed result in the console.
// Hint: You should use window.setTimeout() for time scheduling.
/**
 *
 * @param {int} n1
 * @param {int} n2
 * @param {int} delayTime - millisecond
 * @param {delayedResultCallback} callback
 */
function delayedResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    if (typeof callback === "function") {
      callback(n1 + n2);
    }
  }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function (result) {
  window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds
