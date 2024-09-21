

//title: Smallest Transform

//tags: arrays,scope

//url: https://edabit.com/challenge/ejzLBYvAtAiKk9HnP

//Description:
//Create a function that returns the smallest number of changes it takes to transform one number into one with identical digits. A step is incrementing or decrementing a digit by one.
//Examples
//smallestTransform(399) ➞ 6
//// 399 transformed to 999 in 6 steps.
//
//smallestTransform(1234) ➞ 4
//// 1234 can be transformed to either 2222 or 3333 using 4 steps.
//
//smallestTransform(153) ➞ 4
//
//smallestTransform(33338) ➞ 5
//
//smallestTransform(7777) ➞ 0
//Notes
//If a number already has identical digits, return 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(smallestTransform(399), 6)
//Test.assertEquals(smallestTransform(1234), 4)
//Test.assertEquals(smallestTransform(153), 4)
//Test.assertEquals(smallestTransform(33338), 5)
//Test.assertEquals(smallestTransform(7777), 0)
//Test.assertEquals(smallestTransform(977), 2)
//Test.assertEquals(smallestTransform(589), 4)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse Coding Challenge #2

//tags: math,numbers

//url: https://edabit.com/challenge/YxtBN5uCTSCqoZofd

//Description:
//This is a reverse coding challenge.
//Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.
//Examples
//3 ➞ 21
//
//9 ➞ 2221
//
//17 ➞ 22221
//
//24 ➞ 22228
//Notes
//If you get stuck, check the Comments for help.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mysteryFunc(3), 21)
//Test.assertEquals(mysteryFunc(9), 2221)
//Test.assertEquals(mysteryFunc(15), 2227)
//Test.assertEquals(mysteryFunc(17), 22221)
//Test.assertEquals(mysteryFunc(19), 22223)
//Test.assertEquals(mysteryFunc(24), 22228)
//Test.assertEquals(mysteryFunc(35), 222223)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Magic Function

//tags: closures,functional_programming,higher_order_functions,language_fundamentals

//url: https://edabit.com/challenge/nhW7dXvLWrQoepyFs

//Description:
//Create a function that calls an object property with procedural like style.
//Examples
//magic.replace("azerty", "a", "A") ➞ "Azerty"
//
//magic.length("hello word") ➞ 10
//
//magic.trim("  javascript is awesome  ") ➞ "javascript is awesome"
//
//magic.normalize("éèê", "NFD") ➞ e ́  e ̀  e ̂
//
//magic.slice([1, 2, 3, 4, 5], 2, 4) ➞ [ 3, 4 ]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(magic.trim("  javascript is awesome  "), "javascript is awesome");
//Test.assertEquals(magic.length("hello word"), 10);
//Test.assertEquals(magic.slice([1, 2, 3, 4, 5], 2, 4)[0], 3);
//Test.assertEquals(magic.slice([1, 2, 3, 4, 5], 2, 4)[1], 4);
//Test.assertEquals(magic.replace("azerty", "a","A"), "Azerty");

