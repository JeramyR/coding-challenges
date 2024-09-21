

//title: One Odd and One Even

//tags: numbers,validation

//url: https://edabit.com/challenge/d3ZmD3EiNdECFyyPR

//Description:
//Given a two digit number, return true if that number contains one even and one odd digit.
//Examples
//oneOddOneEven(12) ➞ true
//
//oneOddOneEven(55) ➞ false
//
//oneOddOneEven(22) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(oneOddOneEven(10), true)
//Test.assertEquals(oneOddOneEven(11), false)
//Test.assertEquals(oneOddOneEven(12), true)
//Test.assertEquals(oneOddOneEven(13), false)
//Test.assertEquals(oneOddOneEven(14), true)
//Test.assertEquals(oneOddOneEven(15), false)
//Test.assertEquals(oneOddOneEven(16), true)
//Test.assertEquals(oneOddOneEven(17), false)
//Test.assertEquals(oneOddOneEven(18), true)
//Test.assertEquals(oneOddOneEven(19), false)
//Test.assertEquals(oneOddOneEven(20), false)
//Test.assertEquals(oneOddOneEven(21), true)
//Test.assertEquals(oneOddOneEven(22), false)
//Test.assertEquals(oneOddOneEven(23), true)
//Test.assertEquals(oneOddOneEven(24), false)
//Test.assertEquals(oneOddOneEven(25), true)
//Test.assertEquals(oneOddOneEven(26), false)
//Test.assertEquals(oneOddOneEven(27), true)
//Test.assertEquals(oneOddOneEven(28), false)
//Test.assertEquals(oneOddOneEven(29), true)
//Test.assertEquals(oneOddOneEven(30), true)
//Test.assertEquals(oneOddOneEven(31), false)
//Test.assertEquals(oneOddOneEven(32), true)
//Test.assertEquals(oneOddOneEven(33), false)
//Test.assertEquals(oneOddOneEven(34), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Orthogonal Vector

//tags: language_fundamentals,math,validation

//url: https://edabit.com/challenge/qJGDCEZRoGRPt3viu

//Description:
//Create a function that takes two vectors as arrays and checks if the two vectors are orthogonal or not. The return value is boolean. Two vectors a and b are orthogonal if their dot product is equal to zero.
//Examples
//isOrthogonal([1, 2], [2, -1]) ➞ true
//
//isOrthogonal([3, -1], [7, 5]) ➞ false
//
//isOrthogonal([1, 2, 0], [2, -1, 10]) ➞ true
//Notes
//The two arrays will be of same length.
//Check out the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isOrthogonal([7, 8], [7, -6]), false)
//Test.assertEquals(isOrthogonal([-13, -26], [-8, 4]), true)
//Test.assertEquals(isOrthogonal([1, 2], [2, -1]), true)
//Test.assertEquals(isOrthogonal([2, 4, 1], [2, 1, -8]), true)
//Test.assertEquals(isOrthogonal([1, 2, 0], [2, -1, 10]), true)
//Test.assertEquals(isOrthogonal([3, 8, 9], [16, 17, -18]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ES6: Destructuring Objects IV

//tags: language_fundamentals,objects

//url: https://edabit.com/challenge/JQRbpfn6WpEksA2tu

//Description:
//const obj =  { first: "James", last: "Baker", alias: "JB"  }
//
//var { first = "John", last = "Doe", alias } = obj
//
//console.log(nickname) // outputs nickname is not defined
//There may be times where we would like the property name to be different from the object property names we receive and also give those new property names a default value.
//Question
//Use ES6 object destructuring to rename the variable alias to nickname and give nickname a default value of "JD". Ignore the .toString() function (used for validation).
//Notes
//Use double quotes for "JD".
//If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//eval(str)
//​
//const validString = (str) => {
//  return /\{.*alias.*\:.*nickname.*\=.*\"JD\".*\}/.test(str) ? "valid" : "not valid" 
//}
//  
//Test.assertEquals(validString(str), "valid", "You must rename alias to nickname and give it a default value of JD")
//Test.assertEquals(first, "James", "The variable first does not equal James")
//Test.assertEquals(last, "Baker", "The variable last does not equal Baker")
//Test.assertEquals(nickname, "JD", "The variable nickname does not equal JD")

