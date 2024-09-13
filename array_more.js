const friends = ["elon", "bill", "mark", "waren"];
/*
// for(const friend of friends){
//     console.log(friend)
// }
for(let i = 0; i < 10; i++) {
    console.log(i);
    console.log(friends[i]);
}
for(let i = 0; i < friends.length; i++) {
    console.log(i);
    console.log(friends[i]);
}
const numbers = [34, 36, 978, 23, 97, 234, 123]
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    }       */
/*
   let i = 0;
   while(i < friends.length) {
       console.log(friends[i]);
       i++;
}   */
//-----------------    reverse()
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const rev_numbers = []
console.log(friends.reverse());
for(const num of numbers) {
    console.log(num);
    rev_numbers.push(num);
    console.log(rev_numbers);
    rev_numbers.unshift(num);
    console.log(rev_numbers);  //another way of doing reverse
}   */
/*
const reverse = []
for(let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    reverse.unshift(num);
    console.log(reverse);
}
//---------------- reverse side
for(let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    console.log(num);
    reverse.push(num);
    console.log(reverse);
}   */
const persons = ['rakib', 'sakib', 'dakib', 'nakib', 'bakib', 'akib'];
const sortedPersons = persons.sort();
console.log(sortedPersons);
//---------------- sort()
/*
1. Ascending ------> smaller to larger
2. Descending ------> larger to smaller
*/
const numbers = [2, 8, 4, 9, 5];
const numbes_asc = numbers.sort();
console.log(numbes_asc);
const numbers_new = [23, 13, 9, 11, 34];
const numbers_new_asc = numbers_new.sort();
console.log(numbers_new_asc);
const numbers_sort1 = numbers_new.sort(function(a, b) { return a - b; })
console.log(numbers_sort1);
const numbers_sort2 = numbers_new.sort(function(a, b) { return b - a; })
console.log(numbers_sort2);