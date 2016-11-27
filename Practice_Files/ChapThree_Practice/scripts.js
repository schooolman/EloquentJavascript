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
