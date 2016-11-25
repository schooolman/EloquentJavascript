// -------------------------------------------- //
// ---------Chpater One examples--------------- //
// -------------------------------------------- //

var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log("luigi owes me, " + luigisDebt);

// ---------------

var one = 1, two = 2;
// console.log(one + two);

// ---------------

// alert("good morning");

// ---------------

console.log(Math.max(2,4), " math max function returns");
console.log(Math.min(2,4) + 100, " math min returns");

// ---------------

for (var current = 20; ; current++){
  if(current % 7 === 0)
  break;
}
console.log(current);

// ---------------
// -- chap two exercises
// ---------------

// hashtag pyramid
var pyramid = "";
for(var i = 1; i <= 7; i++){
  pyramid += "#";
  console.log(pyramid);
}


//FizzBuzz ---

for(var i = 1; i <= 100; i++){
  if(i%3 ===0 && i%5 === 0){
    console.log("FizzBuzz");
  } else if(i%3 === 0){
    console.log("Fizz");
  }else if(i%5 === 0){
    console.log("buzz");
  } else {
    console.log(i);
  }
}

//ChessBoard
var size = 20;
var chessBoardString = "";
var lineNumber = false;

for(i = 0; i <= size; i++ ){
  if(i < size){
    for(var line = 1; line <= size + 1; line++ ){
      if(line <= size){
        if(lineNumber === false){
          if(line%2 === 0){
          chessBoardString += ".";
        } else {
          chessBoardString += "#";
        }

      } else if(lineNumber === true){
          if(line%2 === 0){
          chessBoardString += "#";
        } else {
          chessBoardString += ".";
        }
     }
   }  else {
        chessBoardString += "\n";
        lineNumber =! lineNumber;
      }
    }
  } else {
    printBoard();
  }
}

function printBoard(){
  console.log(chessBoardString);
}
