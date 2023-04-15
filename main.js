// // 1:

// var a = ['*','*','*','*','*'];
// var z = '';
// for (var x in a) {
//   z =  z + a[x];
//   console.log(z);
// }

// // 2:

// var a = [1, 2, 3, 4, 5];
// var z = '';
// for (var x in a) {
//   z =   a[x] + z;
//   console.log(z);
// }

/*
// 1: answer
0:
a[0] = z = ""+ 1;
z ="1"

1:
a[1] = z = "1" + 2
z = "12"

// 2: answer
0:
a[0] = 1 + '';
z = '1';

1:
a[1] = 2 + '1'



*/

// var a = [1, 2, 3, 4, 5];
// var z = '';
// for (var x of a) {
//   z +=  x + ' ';
//   console.log(z);
// }

// var a = 1
// function four(){
//   if(true){     var a = 4   }
//   console.log(a)
// }

// console.log(a);

// const  Student =  function(name,rollno){
//   this.name = name;
//   this.rollno = rollno;
//   // this.greet = function(){
//   //   console.log('hi');
//   // }
// }
// Student.prototype.greet = function(){
//   console.log('hi');
// }

// const john = new Student('bd',1234);
// console.log(john.__proto__);
// console.log(john.__proto__ === Student.prototype);

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

console.log(booker);
