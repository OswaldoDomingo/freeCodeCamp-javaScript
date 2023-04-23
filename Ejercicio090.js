const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
console.log(myDog);
/*
 {
  name: 'Happy Coder',
  legs: 4,
  tails: 1,
  friends: [ 'freeCodeCamp Campers' ],
  bark: 'woof'
}
 */


delete myDog.tails;

console.log(myDog);
/*
 {
  name: 'Happy Coder',
  legs: 4,
  friends: [ 'freeCodeCamp Campers' ],
  bark: 'woof'
}
 */

