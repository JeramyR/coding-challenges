

//title: Give Me the Even Numbers

//tags: loops,math,numbers

//url: https://edabit.com/challenge/BK7ydsgqXKggohdc6

//Description:
//Create a function that takes two parameters (start, stop), and returns the sum of all even numbers in the range.
//Examples
//sumEvenNumsInRange(10, 20) ➞ 90
//// 10, 12, 14, 16, 18, 20
//
//sumEvenNumsInRange(51, 150) ➞ 5050
//
//sumEvenNumsInRange(63, 97) ➞ 1360
//Notes
//Remember that the start and stop values are inclusive.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumEvenNumsInRange(51, 150), 5050)
//Test.assertEquals(sumEvenNumsInRange(70, 100), 1360)
//Test.assertEquals(sumEvenNumsInRange(99, 110), 630)
//Test.assertEquals(sumEvenNumsInRange(63, 97), 1360)
//Test.assertEquals(sumEvenNumsInRange(10, 20), 90)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ES6: Destructuring Objects II

//tags: language_fundamentals,objects

//url: https://edabit.com/challenge/qdXDFPcM7RDdN4M9h

//Description:
//const obj =  { one : 1, two : 2 }
//
//var { one, two } = obj
//We can assign variables by the same name properties of objects, but what if I wanted to assign obj.one to a different name like anotherOne?
//Use ES6 object destructuring to assign obj.one to the variable anotherOne. Variable two needs to remain assigned to obj.two. Ignore the .toString() function (used for validation).
//Notes
//If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab, look at some examples and come back to try the challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//eval(str)
//​
//const validString = (str) => {
//  return /\{.*(one).*:.*anotherOne.*(two).*\}.*\=/.test(str) ? "valid" : "not valid" 
//}
// 
//Test.assertEquals(validString(str), "valid", "You must assign the variable anotherOne with object destructuring")
//Test.assertEquals(anotherOne, 1, "The variable anotherOne must equal 1")
//Test.assertEquals(two, 2, "The variable two must equal 2")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Binary to Decimal Converter

//tags: loops,math,numbers

//url: https://edabit.com/challenge/8bNad58igHWorsf6S

//Description:
//You are given one input: an array containing eight 1's and/or 0's. Write a function that takes an 8 bit binary number and converts it to decimal.
//Examples
//binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]) ➞ 255
//
//binaryToDecimal([0, 0, 0, 0, 0, 0, 0, 0]) ➞ 0
//
//binaryToDecimal([1, 0, 1, 1, 1, 1, 0, 0]) ➞ 188
//Notes
//Return an integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(binaryToDecimal([1, 1, 1, 1, 1, 1, 1, 1]), 255)
//Test.assertEquals(binaryToDecimal([0, 0, 0, 0, 0, 0, 0, 0]), 0)
//Test.assertEquals(binaryToDecimal([1, 0, 1, 1, 1, 1, 0, 0]), 188)
//Test.assertEquals(binaryToDecimal([1, 0, 1, 1, 0, 1, 0, 1]), 181)

