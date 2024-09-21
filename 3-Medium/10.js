

//title: Fix the Error: Value vs. Reference Types

//tags: bugs,validation

//url: https://edabit.com/challenge/3jZyJTfsXTXXwAQkA

//Description:
//Create a function that returns true if two arrays contain identical values, and false otherwise.
//To solve this question, your friend writes the following code:
//function checkEquals(arr1, arr2) {
//if (arr1 === arr2) {
//  return true
// } else {
//  return false
// }
//}
//But testing the code, you see that something is not quite right. Running the code yields the following results:
//checkEquals([1, 2], [1, 3]) ➞ false
//// Good so far...
//
//checkEquals([1, 2], [1, 2]) ➞ false
//// Yikes! What happened?
//Rewrite your friend's code so that it correctly checks if two arrays are equal. To be equal, the arrays must have the same elements in the same order. The tests below should pass:
//Examples
//checkEquals([1, 2], [1, 3]) ➞ false
//
//checkEquals([1, 2], [1, 2]) ➞ true
//
//checkEquals([4, 5, 6], [4, 5, 6]) ➞ true
//
//checkEquals([4, 7, 6], [4, 5, 6]) ➞ false
//
//checkEquals([4, 7, 6], [4, 6, 7]) ➞ false
//Notes
//Hint: This has to do with value vs. reference types.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(checkEquals([1, 2], [1, 3]), false)
//Test.assertEquals(checkEquals([1, 2], [1, 2]), true)
//Test.assertEquals(checkEquals([4, 5, 6], [4, 5, 6]), true)
//Test.assertEquals(checkEquals([4, 7, 6], [4, 5, 6]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: All About Anonymous Functions: Adding

//tags: closures,higher_order_functions,language_fundamentals

//url: https://edabit.com/challenge/q4FkAnRFwDq5LXqkf

//Description:
//Write a function that returns an anonymous function, which adds n to its input
//Examples
//adds1 = addsNum(1)
//
//adds1(3) ➞ 4
//adds1(5.7) ➞ 6.7
//
//adds10 = addsNum(10)
//
//adds10(44) ➞ 54
//adds10(20) ➞ 30
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//adds1 = addsNum(1)
//adds10 = addsNum(10)
//adds5neg = addsNum(-5)
//adds0 = addsNum(0)
//​
//Test.assertEquals(adds1(3), 4)
//Test.assertEquals(adds1(5.7), 6.7)
//Test.assertEquals(adds10(44), 54)
//Test.assertEquals(adds10(20), 30)
//​
//Test.assertEquals(adds5neg(0), -5)
//Test.assertEquals(adds5neg(77), 72)
//Test.assertEquals(adds0(77), 77)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fix the Error: Flattening an Array

//tags: arrays,bugs

//url: https://edabit.com/challenge/MXChCnzCSBobgY4Ex

//Description:
//I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].
//Here is my code:
//function flatten(arr) {
//  arr2 = [];
//  for (let i = 0; i < arr.length; i++) {
//    arr2.concat(arr[i]);
//  }
//  return arr2;
//}
//But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.
//Examples
//flatten([[1, 2], [3, 4]]) ➞ []
//// Expected: [1, 2, 3, 4]
//
//flatten([["a", "b"], ["c", "d"]]) ➞ []
//// Expected: ["a", "b", "c", "d"]
//
//flatten([[true, false], [false, false]]) ➞ []
//// Expected: [true, false, false, false]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(flatten([[1, 2], [3, 4]]), [1, 2, 3, 4])
//Test.assertSimilar(flatten([['a', 'b'], ['c', 'd']]), ['a', 'b', 'c', 'd'])
//Test.assertSimilar(flatten([[true, false], [false, false]]), [true, false, false, false])

