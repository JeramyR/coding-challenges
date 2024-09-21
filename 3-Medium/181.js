

//title: Find the Vertex of a Quadratic

//tags: algebra,math

//url: https://edabit.com/challenge/37fqtDceJcgb2zAGt

//Description:
//Every quadratic curve y = a x² + b x + c has a vertex point: the turning point where the curve stops heading down and starts going up.
//Given the values a, b and c, you need to return the coordinates of the vertex. Return your answers rounded to 2 decimal places.
//Examples
//findVertex(1, 0, 25)  ➞ [0, 25]
//// The vertex of y=x²+25 is at (0, 25).
//
//findVertex(-1, 0, 25) ➞ [0, 25]
//// The vertex of y=-x²+25 is at (0, 25).
//
//findVertex(1, 10, 4) ➞ [-5, -21]
//// The vertex of y=x²+10x+4 is at (-5, -21).
//Notes
//See Resources if you're not sure how to find the x or y coordinates of the vertex.
//a will always be non-zero.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(findVertex(-1,0,25), [0,25])
//Test.assertSimilar(findVertex(1,10,25), [-5,0])
//Test.assertSimilar(findVertex(8, 4, 0),[ -0.25, -0.5 ])
//Test.assertSimilar(findVertex(4, -200, 1000),[25,-1500])
//Test.assertSimilar(findVertex(1, -50, -1000),[25,-1625])
//Test.assertSimilar(findVertex(-1, 20, 600), [10,700])
//Test.assertSimilar(findVertex(5, 1, 20),[-0.1,19.95])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Crypto Wars: Missing Number

//tags: arrays,cryptography,logic,numbers

//url: https://edabit.com/challenge/XWvtA5y9wux4HAwR8

//Description:
//Our fleet managed to get one of the enemy's top-secret codes from the remains of its fallen ship. The codes were immediately sent over to our code-breaking base over at Bleckley Park ;) for analysis. The team found that each code contains 25 numbers with one missing. The missing number corresponds to a letter in the English alphabet. Your job is to find a more efficient Method of decrypting the messages by digitizing the process.
//Write a function that takes an array, detects the missing number (in the array), and returns its corresponding letter.
//Examples
//decrypt([19, 12, 14, 21, 22, 3, 11, 20, 9, 16, 24, 17, 2, 10, 13, 18, 7, 8, 4, 5, 1, 6, 25, 23, 26]) ➞ "O"
//// The missing number is 15.
//
//decrypt([24, 12, 2, ..., 25]) ➞ "N"
//// The missing number is 14.
//
//decrypt([24, 12, 2, ..., 25]) ➞ "P"
//// The missing number is 16.
//Notes
//The array will only contain positive integers from 1 to 26 with one missing.
//There will be no duplicate numbers.
//Return the capital letter.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(decrypt([21, 2, 5, 25, 7, 20, 15, 3, 6, 9, 16, 19, 1, 4, 11, 22, 10, 13, 12, 18, 24, 17, 23, 14, 26]), "H")
//Test.assertEquals(decrypt([22, 7, 2, 15, 10, 4, 11, 25, 1, 8, 23, 12, 17, 16, 14, 13, 3, 21, 20, 6, 19, 9, 24, 18, 26]), "E")
//Test.assertEquals(decrypt([17, 3, 15, 6, 21, 7, 18, 5, 13, 23, 24, 16, 8, 19, 25, 2, 9, 11, 22, 10, 20, 14, 1, 4, 26]), "L")
//Test.assertEquals(decrypt([8, 6, 23, 4, 25, 13, 7, 19, 15, 3, 14, 5, 21, 11, 1, 2, 24, 18, 22, 16, 9, 20, 10, 17, 26]), "L")
//Test.assertEquals(decrypt([19, 12, 14, 21, 22, 3, 11, 20, 9, 16, 24, 17, 2, 10, 13, 18, 7, 8, 4, 5, 1, 6, 25, 23, 26]), "O")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Learn Lodash: matchesProperty, Check if an Object Contains a Key Value Pair

//tags: objects

//url: https://edabit.com/challenge/uSfPtCRcjhE9daPok

//Description:
//Write your own version of the lodash _.matchesProperty function using vanilla JavaScript. matchesProperty returns a function that that compares the given object and a path, which is a key-value pair, then determines if the object includes the pair.
//For instance, when using the regular JavaScript find method you would write it like so:
//arrayOfCars.find(car => car.year === 2020)
//Because the matchesProperty function returns a function it can be used to replace the callback function written in the find method. Using matchesProperty it could look like this:
//arrayOfCars.find(matchesProperty("year", 2020))
//This is a helper function that is often used by other more advanced lodash functions that want to check for a match. As we write more lodash functions we will need this helper.
//This is very similar to the matches function. The only difference is the way the arguments are passed in, matches requires an object, matchesProperty requires two strings representing a key value pair.
//Arguments
//path (Array or String): The path key-value pair you are using to see if it is included in the object.
//returns: A new function.
//Examples
//const objects = [
//  { "a": 1, "b": 2, "c": 3 },
//  { "a": 4, "b": 5, "c": 6 }
//]
//_.find(objects, _.matchesProperty("a", 4))
//➞ [{ "a": 4, "b": 5, "c": 6 }]
//Notes
//Do not attempt to import lodash; you are simply writing your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const _ = require('lodash')
//​
//​
//const noLodash = (f) => /[_|require|lodash]/g.test(f.toString());
//Test.assertNotEquals(noLodash(matchesProperty_myVersion), false, "Do not use lodash, please write your own version");
//​
//const cars = [
//  { make: "mazda", year: 2020, color: "red", isUsed: false },
//  { make: "mazda", year: 2018, color: "blue", isUsed: true },
//  { make: "toyota", year: 2018, color: "blue", isUsed: true },
//  { make: "toyota", year: 2017, color: "grey", isUsed: true },
//  { make: "ford", year: 2017, color: "grey", isUsed: true },
//  { make: "for", year: 2020, color: "red", isUsed: false },
//];
//​
//Test.assertSimilar(cars.filter(_.matchesProperty("color", "blue")), cars.filter(matchesProperty_myVersion("color", "blue")));
//Test.assertSimilar(cars.filter(_.matchesProperty("isUsed", true)), cars.filter(matchesProperty_myVersion("isUsed", true)));
//Test.assertSimilar(cars.find(_.matchesProperty("make", 'ford')), cars.find(matchesProperty_myVersion("make", 'ford')));
//Test.assertSimilar(cars.find(_.matchesProperty("year", 2017)), cars.find(matchesProperty_myVersion("year", 2017)));

