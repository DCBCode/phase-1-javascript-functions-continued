function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  const fn = function () {
    console.log("Yet more razzling");
  }; //=> undefined
  fn; //=> ƒ () { console.log("Yet more razzling") }
  fn(); // "Yet more razzling"
  const assert = require('assert');

  function mondayWork(activity = "go to the office") {
    return "This Monday, I will " + activity + ".";
  }
  
  assert.equal(mondayWork('work from home'), "This Monday, I will work from home.");
  function wrapAdjective(symbol) {
    return function(adj) {
      return `You are ${symbol}${adj}${symbol}!`;
    };
  }