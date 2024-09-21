

//title: No Conditionals?

//tags: control_flow,logic

//url: https://edabit.com/challenge/WjXHgXLAvMxNvD6h2

//Description:
//Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.
//Examples
//flip(1) ➞ 0
//
//flip(0) ➞ 1
//Notes
//Try completing this challenge without using any:
//Conditionals
//Ternary operators
//Negations
//Bit operators

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(flip(0), 1)
//Test.assertEquals(flip(1), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (20): Sign Your Name

//tags: objects

//url: https://edabit.com/challenge/xRcgQHtfLbxomYb33

//Description:
//The police send you the electronic statement again for you to sign. This time you are able to sign it and, to speed up bureaucracy, you try to sign for your spouse as well. Unfortunately, the document is still protected against new entries...
//This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't use a return statement, it is already included. Your task is, given an object, prevent new properties from being added to that object, but you should still be able to change the value of the existing properties.
//Examples
//const obj = { yourSignature: "" };
//
//signYourName( obj ) {
//  // write your code here
//
//
//  obj.yourSignature = "Whatever";
//  obj.spouseSignature = "Nice Try";
//  return obj;
//
//} ➞ { yourSignature: "Whatever" }
//Notes
//If you have suggestions on how to present or further test this challenge please leave a comment.
//This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(signYourName({yourSignature: ""}), {yourSignature: "Whatever"})

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Number Split

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/xsi99TwpGyFC8KS6d

//Description:
//Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
//Examples
//numberSplit(4) ➞ [2, 2]
//
//numberSplit(10) ➞ [5, 5]
//
//numberSplit(11) ➞ [5, 6]
//
//numberSplit(-9) ➞ [-5, -4]
//Notes
//All numbers will be integers.
//You can expect negative numbers too.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(numberSplit(4), [2, 2])
//Test.assertSimilar(numberSplit(10), [5, 5])
//Test.assertSimilar(numberSplit(11), [5, 6])
//Test.assertSimilar(numberSplit(0), [0, 0])
//Test.assertSimilar(numberSplit(1), [0, 1])
//Test.assertSimilar(numberSplit(-4), [-2, -2])
//Test.assertSimilar(numberSplit(-5), [-3, -2])
//Test.assertSimilar(numberSplit(-9), [-5, -4])

