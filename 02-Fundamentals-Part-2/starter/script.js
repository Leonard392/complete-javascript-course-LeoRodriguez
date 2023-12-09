'use strict';


 let hasDriversLicense = false;
 const passTest = true;

 if (passTest) hasDriversLicense = true;
 if (hasDriversLicense) console.log("I can drive");


const interface = 22;
 const private = 543;

 function logger(){
     console.log("My Name is Leo");
 }

// calling  running  invoking function 
 logger();
 logger();
 logger();

 function fruitProcessor(apples, oranges){
     console.log(apples, oranges);
     const juice = 'Juice with ' + apples + ' apples and '
      + oranges + ' oranges.';
     return juice;
 }

 const appleJuice =fruitProcessor(5, 0);
 console.log(appleJuice);

 const appleOrangeJuice = fruitProcessor(2,4);
 console.log(appleOrangeJuice);


// Function Declaration
 function calcAge1(birthYear){
     return  2037 - birthYear;
 }

 const age1 = calcAge1(1989);
 console.log(age1);


// Function expression
 const calcAge2 = function (birthYear){
     return  2037 - birthYear;
 };
 console.log(calcAge2(1991));

 // Arrow Function

 const calcAge3 = birthYear => 2037 - birthYear;
 const age3 = calcAge3(1991);
 console.log(age3);

 const yearsUntilRetirement = (birthYear, firstName) => {
     const age = 2037 - birthYear;
     const retirement = 65 - age;
     return firstName + " retires in " + retirement + " years."
 }

 console.log(yearsUntilRetirement(1991, "Luis"));
 console.log(yearsUntilRetirement(1980, "Luke"));


 function cutFruitPieces(fruit){
     return fruit * 4;
 }


 function fruitProcessor(apples, oranges){
     const applePieces = cutFruitPieces(apples);
     const orangePieces = cutFruitPieces(oranges);

     console.log(apples, oranges);
     const juice = 'Juice with ' + applePieces + ' pieces of apples and '
      + orangePieces + ' pieces of oranges.';
     return juice;
 }

 console.log(fruitProcessor(2,3));


 const friend1 = 'Michael';
 const friend2 = 'Steven';
 const friend3 = 'Peter';

 const friends = ['Michael', 'Steven', 'Peter'];
 console.log(friends);

 const years = new Array(1991, 1980, 1989);

 console.log(friends[0]);
 console.log(friends[2]);

 console.log(friends.length);
 console.log(friends[friends.length - 1]);

 friends[2] = 'Jay';
 console.log(friends);

 const Leo = ['Leo', 'Rodriguez', 2024 - 2001, 'student', friends];
 console.log(Leo);




 //Add elements
 const friends = ['Michael', 'Steven', 'Peter'];
 const newLength = friends.push('Jay');
 console.log(friends);
 console.log(newLength);


 friends.unshift('John');
 console.log(friends);

 // Remove elemnets

 friends.pop(); last
 console.log(friends);

 friends.shift(); first
 console.log(friends);

 function calcTip(bill){
     let tip = 0;
     if (bill<=300 && bill>=50){
         return tip = bill *0.15;
     } else{
         return tip = bill *0.2;
     }
 }

 console.log(calcTip(100));

 let bills = [125,555,44];

 let tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

 let totals = [bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2]];


 const leo = {
     firstName: 'Leo',
     lastName: 'Rodriguez',
     birthYear: 2001,
     job: 'student',
     friends: ['John', 'Louis', 'Ramoncito'],
     hasDriverLicense: true,

     calcAge: function(birthYear){
         return 2023 - birthYear;
     }
 };

 console.log(leo);
 console.log(leo.firstName + " has 3 friends, and his best friend is " + leo.friends[0]);

 console.log(leo["calcAge"](2001));

