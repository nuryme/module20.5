//practice task 1
/*
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const colorReverse= [];
for(const color of colors) {
    colorReverse.unshift(color);
}
console.log(colorReverse)   *;/

//practice task 2
/*
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = []
for(const number of numbers) {
    if(number % 2 === 0) {
        evenNumbers.push(number);
    }
}
console.log(evenNumbers)    */

//practice task 3
/*
const numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
console.log(numbers.join(''));  */

//practice task 4
const statement = 'I am a hard working person';
const reversedStatement = statement.split(' ').reverse().join(' ');
console.log(reversedStatement)