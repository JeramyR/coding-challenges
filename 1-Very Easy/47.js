

//title: Nth Even Number

//tags: language_fundamentals,math,numbers

//url: https://edabit.com/challenge/Yj2QWQG7oHREM6DRo

//Description:
//Create a function that takes a number n and returns the nth even number beginning with 0 as the first.
//Examples
//nthEven(1) ➞ 0
//// 0 is first even number
//
//nthEven(2) ➞ 2
//// 2 is second even number
//
//nthEven(100) ➞ 198
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nthEven(1), 0)
//Test.assertEquals(nthEven(2), 2)
//Test.assertEquals(nthEven(3), 4)
//Test.assertEquals(nthEven(100), 198)
//Test.assertEquals(nthEven(1298734), 2597466)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Testing K^K == N?

//tags: bit_operations,math,numbers,validation

//url: https://edabit.com/challenge/giAxQu4vjMRc7dJ2u

//Description:
//Write a function that returns true if k^k == n for input (n, k) and return false otherwise.
//Examples
//kToK(4, 2) ➞ true
//
//kToK(387420489, 9) ➞ true
//// 9^9 == 387420489
//
//kToK(3124, 5) ➞ false
//
//kToK(17, 3) ➞ false
//Notes
//The ^ operator refers to exponentiation operation, not the bitwise XOR operation.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(kToK(4, 2), true)
//Test.assertEquals(kToK(387420489, 9), true)
//Test.assertEquals(kToK(302875106592253, 13), true)
//​
//Test.assertEquals(kToK(3124, 5), false)
//Test.assertEquals(kToK(17, 3), false)
//Test.assertEquals(kToK(823544, 7), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ES6: Destructuring Objects III

//tags: language_fundamentals,objects

//url: https://edabit.com/challenge/pXWouZHLLhW7ggGBo

//Description:
//const obj =  { two : 2 }
//
//var { one, two } = obj
//
//console.log(one) // outputs undefined
//Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).
//Notes
//If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//eval(str)
//​
//const validString = (str) => {
//  return /\{.*(one).*\=.*1.*(two).*\}.*\=/.test(str) ? "valid" : "not valid" 
//}
// 
//Test.assertEquals(validString(str), "valid", "You must give the variable one a default value")
//Test.assertEquals(one, 1, "The variable one must equal 1")
//Test.assertEquals(two, 2, "The variable two must equal 2")

