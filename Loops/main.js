// for(var i = 0; i < 10; i++){
//     console.log(i);
// }


// var myArr = ["Araz", "Qudret", "Vusal", "Murad", "Ibrahim"]

// for (var index = 0; index < myArr.length; index++) {
//     console.log(myArr[index]);
// }


// var number = 5
// var result = 1;

// for(var j = 1; j <= number; j ++){ 
//     result *= j // result = result * j
// }

// console.log(result);


// var users = [
//     {
//         name: "Qudret",
//         age: 29
//     },
//     {
//         name: "Vusal",
//         age: 19
//     },
//     {
//         name: "Murad",
//         age: 15
//     },
//     {
//         name: "Araz",
//         age: 50
//     },
// ]

// for(var index = 0; index < users.length; index++)
// {
//     console.log(`${users[index].name} ${users[index].age} yasdadi.`);
// }



// var count = 0;

// while (count != 5) { // 5 != 5 False
//     count++   
//     console.log(count);
// }


// var randNumber = Math.floor(Math.random() * 11); // 5
// var number = 5
// var count = 0

// while (true) {
//     count++
//     console.log(randNumber);
//     if (number == randNumber) { 
//         break;
//     }
//     randNumber = Math.floor(Math.random() * 11); 

// }

// console.log(`${number} ededini ${count} defeye tapdiniz.`);


// var findedNumbers = []

// var randNumber = Math.floor(Math.random() * 11);
// var count = 0

// while (count != 5) {
//     if (!findedNumbers.includes(randNumber)) { 
//         findedNumbers.push(randNumber)
//         count++
//     }
//     randNumber = Math.floor(Math.random() * 11);
// }

// console.log(findedNumbers);



// var lotoNumbers = []

// for (var i = 1; i <= 90; i++) {
//     lotoNumbers.push(i)
// }

// var randNumber = Math.floor(Math.random() * lotoNumbers.length + 2); // lotoNumbers.length = 89 + 1 = 90 + 1
// var count = 0



// while (count != 90) {
//     console.log(lotoNumbers[randNumber]);
//     lotoNumbers.splice(randNumber, 1)
//     randNumber = Math.floor(Math.random() * lotoNumbers.length + 1);
//     count++
// }

// console.log(lotoNumbers);



// var randNumber = Math.floor(Math.random() * 11);
// var number = 5

// var myArr = [3, 5, 9]


// for (var a = 0; a < myArr.length; a++) {
//     var count = 0
//     while (true) {
//         count++
//         if (randNumber == myArr[a]) {
//             break;
//         }
//         randNumber = Math.floor(Math.random() * 11);
//     }
//     console.log(`${myArr[a]} ededini ${count} defeye tapdiniz.`);
// }