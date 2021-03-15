var sum = 0;

function addThree() {
  sum = sum + 3;
  console.log("sum of addThree: ", sum);
}

function addFive() {
    sum = sum + 5;
    console.log("sum of addFive: ", sum);
}

addThree();
addFive();

module.exports = {
  addThree,
  addFive,
};
