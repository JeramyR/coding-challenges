

//title: ES6: Destructuring Arrays I

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/sWAEoTbXA4bexBPb6

//Description:
//You can assign variables from arrays like this:
//const arr = [1, 2, 3, 4, 5, 6]
//let a = arr[0]
//let b = arr[1]
//
//console.log(a) // outputs 1
//console.log(b) // outputs 2
//With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.
//Notes
//Check the Resources tab for examples.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const arr = [1, 2, 3, 4, 5, 6]
//​
//function test(x) {
// return x === arr[0] || x === arr[1] ? true : false 
//}
//​
//Test.assertEquals(test(a), true, "Variable a does not equal 1")
//Test.assertEquals(test(b), true, "Variable b does not equal 2")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Inches to Feet

//tags: language_fundamentals,math

//url: https://edabit.com/challenge/fZqTozX8XHZxqcdA8

//Description:
//Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
//Examples
//inchesToFeet(324) ➞ 27
//
//inchesToFeet(12) ➞ 1
//
//inchesToFeet(36) ➞ 3
//Notes
//If inches are under 12, return 0.
//12 inches = 1 foot.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(inchesToFeet(12), 1) 
//Test.assertEquals(inchesToFeet(360), 30) 
//Test.assertEquals(inchesToFeet(3612), 301)
//Test.assertEquals(inchesToFeet(324), 27)
//Test.assertEquals(inchesToFeet(3012), 251)
//Test.assertEquals(inchesToFeet(11), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: I`d Like a New Shade of Blue, Please

//tags: math,numbers

//url: https://edabit.com/challenge/2rjHtbg32PrtZdF66

//Description:
//I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.
//n is the number of square meters I can paint.
//w and h are the widths and heights of a single wall in meters.
//Examples
//howManyWalls(100, 4, 5) ➞ 5
//
//howManyWalls(10, 15, 12) ➞ 0
//
//howManyWalls(41, 3, 6) ➞ 2
//Notes
//Don't count a wall if I don't manage to finish painting all of it before I run out of paint.
//All walls will have the same dimensions.
//All numbers will be positive integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(howManyWalls(100, 4, 5), 5)
//Test.assertEquals(howManyWalls(10, 15, 12), 0)
//Test.assertEquals(howManyWalls(41, 3, 6), 2)
//Test.assertEquals(howManyWalls(50, 11, 5), 0)
//Test.assertEquals(howManyWalls(1, 1, 1), 1)
//​
//// Author: Joshua Señoron

