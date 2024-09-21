

//title: Learn Lodash: _.groupBy, Group Items in Array or Object by Given Value

//tags: arrays,objects

//url: https://edabit.com/challenge/eJ8vzsdDcKNy97Kbu

//Description:
//Challenge: write your own version of groupBy called myGroupBy using vanilla JavaScript that can do the same thing as the lodash version.
//The lodash helper function, groupBy, recieves an array and groups the items of the array into an object according to a given criteria. A real life example would be if you had a parking lot of cars you could group them by color. Then you would put the reds ones in one place and the blue ones in another. The array represents the parking lot and the object represents the postitions you've placed the cars in.
//Arguments
//collection (Array or Object): The collection to iterate over.
//[iteratee=_.identity] (Function or String or Object): The iteratee to transform keys.
//Returns
//(Object): Returns the composed aggregate object.
//Examples
//groupBy(["one", "two", "three"], "length"); returns  { "3": ["one", "two"], "5": ["three"] }
//Notes
//Where lodash shines is its versitility. This function can receive a string, an object or a function and return an answer. This makes it difficult for us to write our version in vanilla JS as we have to account for so many different types of inputs.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const _ = require("lodash")
//const noLodash = (f) => /[_]/g.test(f.toString());
//Test.assertNotEquals(noLodash(myGroupBy), true, "Do not use lodash, please write your own version");
//​
//​
//vehicles = [
//  { make: "toyota", color: "red", engine: "v6", type: "hatchback", year: 2018, mileage: 113312, isUsed: true },
//  { make: "toyota", color: "blue", engine: "v6", type: "hatchback", year: 2018, mileage: 324312, isUsed: true },
//  { make: "toyota", color: "yellow", engine: "v6", type: "hatchback", year: 2018, mileage: 113452, isUsed: false },
//  { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
//  { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
//  { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
//  { make: "mazda", color: "grey", engine: "v8", type: "sedan", year: 2021, mileage: 0, isUsed: false },
//  { make: "ford", color: "green", engine: "v8", type: "truck", year: 2008, mileage: 25467, isUsed: true },
//];
//​
//vehiclesAsObject = {
//  stall1: { make: "toyota", color: "red", engine: "v6", type: "hatchback", year: 2018, mileage: 113312, isUsed: true },
//  stall2: { make: "toyota", color: "blue", engine: "v6", type: "hatchback", year: 2018, mileage: 324312, isUsed: true },
//  stall3: { make: "toyota", color: "yellow", engine: "v6", type: "hatchback", year: 2018, mileage: 113452, isUsed: false },
//  stall4: { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
//  stall5: { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
//  stall6: { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
//  stall7: { make: "mazda", color: "grey", engine: "v8", type: "sedan", year: 2021, mileage: 0, isUsed: false },
//  stall8: { make: "ford", color: "green", engine: "v8", type: "truck", year: 2008, mileage: 25467, isUsed: true },

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Generate an Array of 15 Palindrome Numbers

//tags: algorithms,arrays,loops,numbers

//url: https://edabit.com/challenge/Ggh7GYrLKvWHqyk59

//Description:
//In this challenge, you have to find the last 15 palindromes of all numbers starting from ten and up to a given limit, including the limit in the search.
//Given an integer limit being the upper limit of the range of interest, implement a function that returns the last 15 palindromes numbers lower or equal to limit as an array sorted ascendingly.
//Examples
//generatePalindromes(151) ➞ [
//  11, 22, 33, 44, 55,
//  66, 77, 88, 99, 101,
//  111, 121, 131, 141, 151
//]
//
//generatePalindromes(600) ➞ [
//  454, 464, 474, 484, 494,
//  505, 515, 525, 535, 545,
//  555, 565, 575, 585, 595
//]
//
//generatePalindromes(999999) ➞ [
//  985589, 986689, 987789, 988889, 989989,
//  990099, 991199, 992299, 993399, 994499,
//  995599, 996699, 997799, 998899, 999999
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(generatePalindromes(151), [11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111, 121, 131, 141, 151], "Example #1")
//Test.assertSimilar(generatePalindromes(600), [454, 464, 474, 484, 494, 505, 515, 525, 535, 545, 555, 565, 575, 585, 595], "Example #2")
//Test.assertSimilar(generatePalindromes(999999), [985589, 986689, 987789, 988889, 989989, 990099, 991199, 992299, 993399, 994499, 995599, 996699, 997799, 998899, 999999], "Example #3")
//Test.assertSimilar(generatePalindromes(3443), [2002, 2112, 2222, 2332, 2442, 2552, 2662, 2772, 2882, 2992, 3003, 3113, 3223, 3333, 3443])
//Test.assertSimilar(generatePalindromes(13000), [11511, 11611, 11711, 11811, 11911, 12021, 12121, 12221, 12321, 12421, 12521, 12621, 12721, 12821, 12921])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Simple Dance

//tags: arrays,sorting

//url: https://edabit.com/challenge/gdtY2MiMS5Syb7Wqw

//Description:
//You will be given an array of dancing couples, with the woman first and man second, as well as a parameter "men" or "women".
//If the parameter is "men", the men reverse their positions (first moves to last, last moves to first, etc), while women keep their positions.
//If the parameter is "women", the women reverse their positions, while men keep their positions.
//Examples
//dance([
//  [Ana, Bob],
//  [Amy, Josh],
//  [Lisa, Tim]
//], men) ➞ [
//  [Ana, Tim],
//  [Amy, Josh],
//  [Lisa, Bob]
//]
//
//dance([
//  [Ana, Bob],
//  [Amy, Josh],
//  [Lisa, Tim]
//], women) ➞ [
//  [Lisa, Bob],
//  [Amy, Josh],
//  [Ana, Tim]
//]
//Notes
//Input arrays will always be the same length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(dance([["Ana", "Mark"], ["Lisa", "John"]], "women"), [["Lisa", "Mark"], ["Ana", "John"]])
//Test.assertSimilar(dance([["Ana", "Bob"], ["Amy", "Josh"], ["Catty", "Mark"]], "men"), [["Ana", "Mark"], ["Amy", "Josh"], ["Catty", "Bob"]])
//Test.assertSimilar(dance([["Ana", "Bob"], ["Amy", "Josh"], ["Catty", "Mark"]], "women"), [["Catty", "Bob"], ["Amy", "Josh"], ["Ana", "Mark"]])
//Test.assertSimilar(dance([["w1", "m1"], ["w2", "m2"], ["w3", "m3"], ["w4", "m4"], ["w5", "m5"], ["w6", "m6"]], "men"), [["w1", "m6"], ["w2", "m5"], ["w3", "m4"], ["w4", "m3"], ["w5", "m2"], ["w6", "m1"]])
//Test.assertSimilar(dance([["w1", "m1"], ["w2", "m2"], ["w3", "m3"], ["w4", "m4"], ["w5", "m5"], ["w6", "m6"]], "women"), [["w6", "m1"], ["w5", "m2"], ["w4", "m3"], ["w3", "m4"], ["w2", "m5"], ["w1", "m6"]])
//​
//// Author: Luis Pereira

