//built-in methods for arrays in JavaScript
//The forEach() method
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

//The filter() method
const nums = [0,10,20,30,40,50];
nums_filtered = nums.filter( function(num) {
    return num > 20;
})
nums_filtered.forEach(appendIndex);

//The map() method
nums_mapped = nums.filter( function(num) {
    return num / 10
})
nums_mapped.forEach(appendIndex);


//Working with Objects in JavaScript
//forEach method
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)


//Working with Maps in JavaScript
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
console.log(bestBoxers.get(2));

//Working with Sets in JavaScript
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);


