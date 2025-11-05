export function sum(...numbersToSum) {
  if (numbersToSum.some((num) => typeof num !== "number")) {
    throw "Not all numbers are of type number";
  }
  return numbersToSum.reduce((sum, num) => sum + num, 0);
}

export function twoSum(number) {
  return sum(number, 2);
}
