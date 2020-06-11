"use strict";
const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
    }
  };
  robot.recharge();

//   const result = confirm('Are you');
//   console.log(result);
 
// const answer = +prompt("dfdf?", "");
//  console.log(answer+ 5);

const answers = [];

answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your surname?', '');
answers[2] = prompt('How old are yoy?', '');

console.log(typeof(answers));