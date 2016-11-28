// -------------------------------------------- //
// ---------Chpater Three examples--------------//
// -------------------------------------------- //

var square = function(x){
  return x * x;
};

console.log(square(33));

//------------------------------------

var x = "outside";

var f1 = function() {
  var x = "inside f1";
};

f1();

console.log(x);

var f2 = function(){
  x = "inside f2";
};

f2();
console.log(x);

//------------------------------------

function greet(who) {
  console.log("hello " + who);
}

greet("harry");
console.log("Bye Felicia");
//------------------------------------

function power(base, exponent) {
  if(exponent === 0)
    return 1;
  else
    return base * power(base, exponent -1);
}

console.log(power(2, 3));


//------------------------------------

// exercises

//------------------------------------


//Creating a minimum value function

function minNumber(valOne, valTwo){

  if(valOne > valTwo){
    return valTwo;
  } else if(valTwo > valOne) {
    return valOne;
  } else {
    return "numbers are equal.";
  }
}

console.log(minNumber(3, 9));
console.log(minNumber(8, 4));
console.log(minNumber(4, 4));
