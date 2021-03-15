function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

randomRangeNumber(2, 10);
console.log(randomRangeNumber(2, 10));

module.exports = randomRangeNumber;
