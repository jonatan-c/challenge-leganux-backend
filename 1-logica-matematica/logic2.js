let calculateMaxEvenSum = function (array) {

  let order = array.sort((a, b) => -a + b);
  let orderPositive = order.filter((x) => x >= 0);

  let maxEvenSum = 0;
  for (let i = 0; i < orderPositive.length; i++) {
    maxEvenSum += orderPositive[i];
  }

  for (let j = orderPositive.length - 1; j < 10; j--) {
    if (maxEvenSum % 2 === 0) {
      return maxEvenSum;
    } else {
      maxEvenSum -= orderPositive[j];
    }
  }

  return maxEvenSum; //23
};

let writeTheArrayToEvaluate= [2, 3, 6, -5, 10, 1, 1]

console.log(calculateMaxEvenSum(writeTheArrayToEvaluate));

