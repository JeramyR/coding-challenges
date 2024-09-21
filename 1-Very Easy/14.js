

//title: Multiple of 100

//tags: algebra,conditions,math,validation

//url: https://edabit.com/challenge/qMr6wYGr6NaXAPQGF

//Description:
//Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
//Examples
//divisible(1) ➞ false
//
//divisible(1000) ➞ true
//
//divisible(100) ➞ true
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(divisible(1), false)
//Test.assertEquals(divisible(100), true)
//Test.assertEquals(divisible(1000), true)
//Test.assertEquals(divisible(111000), true)
//Test.assertEquals(divisible(-1), false, "Don't forget negatives.")
//Test.assertEquals(divisible(0), true, "Cover the 0 cases.")
//Test.assertEquals(divisible(-100), true, "-100 is divisible by 100.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Length of a String

//tags: language_fundamentals,recursion,strings

//url: https://edabit.com/challenge/4MSbtYFBiRtxHEkY8

//Description:
//Write a function that returns the length of a string. Make your function recursive.
//Examples
//length("apple") ➞ 5
//
//length("make") ➞ 4
//
//length("a") ➞ 1
//
//length("") ➞ 0
//Notes
//Check the Resources tab for info on recursion.

//code area
///////////////////////////////////////////////////////////////////////////
const length = (str, count = 0) => {
  if (str[count] === undefined) {
    console.log(count)
    return count;
  }
  length(str, count + 1);
}
//////////////////////////////////////////////////////////////////////////

//tests:

// length('shipment')
// length('apple')
// length('make')
// length('a')
// length('')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Divides Evenly

//tags: math,numbers,validation

//url: https://edabit.com/challenge/JfB9mWmbwYHbupxCB

//Description:
//Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
//Examples
//dividesEvenly(98, 7) ➞ true
//// 98/7 = 14
//
//dividesEvenly(85, 4) ➞ false
//// 85/4 = 21.25
//Notes
//a will always be greater than or equal to b.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(dividesEvenly(98, 7), true)
//Test.assertEquals(dividesEvenly(87, 49), false)
//Test.assertEquals(dividesEvenly(34, 14), false)
//Test.assertEquals(dividesEvenly(78, 6), true)
//Test.assertEquals(dividesEvenly(30, 4), false)
//Test.assertEquals(dividesEvenly(87, 73), false)
//Test.assertEquals(dividesEvenly(74, 7), false)
//Test.assertEquals(dividesEvenly(87, 29), true)
//Test.assertEquals(dividesEvenly(48, 24), true)
//Test.assertEquals(dividesEvenly(99, 20), false)
//Test.assertEquals(dividesEvenly(98, 49), true)
//Test.assertEquals(dividesEvenly(100, 6), false)
//Test.assertEquals(dividesEvenly(64, 4), true)
//Test.assertEquals(dividesEvenly(70, 35), true)
//Test.assertEquals(dividesEvenly(38, 38), true)
//Test.assertEquals(dividesEvenly(29, 3), false)
//Test.assertEquals(dividesEvenly(20, 8), false)
//Test.assertEquals(dividesEvenly(66, 50), false)
//Test.assertEquals(dividesEvenly(95, 1), true)
//Test.assertEquals(dividesEvenly(58, 2), true)

