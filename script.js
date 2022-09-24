// snake = 1
// water = 2
// gun = 3

let playAgain = true;

alert("SNAKE | WATER | GUN");
alert("Rules :- Enter 1 for Snake, 2 for Water and 3 for Gun");
while (playAgain) {
  let num1 = prompt("enter");
  num1 = parseInt(num1);
  let num2 = Math.floor(Math.random() * 3) + 1;

  if (num1 == 1 && num2 == 2) {
    alert(`Computer chose water.. Player Won`);
  }
  else if (num1 == 1 && num2 == 3) {
    alert("Computer chose Gun.. Computer Won");
  }
  else if (num1 == 2 && num2 == 1) {
    alert("Computer chose Snake.. Computer Won");
  }
  else if (num1 == 2 && num2 == 3) {
    alert("Computer chose Gun.. Player won");
  }
  else if (num1 == 3 && num2 == 1) {
    alert("Computer chose Snake.. Player won");
  }
  else if (num1 == 3 && num2 == 2) {
    alert("Computer chose water.. Computer won");
  }
  else if (num1 == num2) {
    alert("tie");
  }
  else{
    alert("enter valid input");
  }

  playAgain = confirm("Play Again?");
}