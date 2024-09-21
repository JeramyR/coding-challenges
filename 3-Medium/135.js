

//title: Basic Statistics: Median

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/PdooZppJkpCGiJHCf

//Description:
//The median of a group of numbers is the middle number when the group is sorted. If the size of the group is even, the median is the average of the middle two numbers. Given a sorted array of numbers, return the median (rounded to one decimal place if the median isn't an integer).
//Examples
//median([1, 2, 4, 5, 6, 8, 8, 8, 10]) ➞ 6
//
//median([2, 2, 6, 8, 8, 10, 10]) ➞ 8
//
//median([1, 2, 2, 4, 7, 8, 9, 10]) ➞ 5.5
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(median([3, 4, 4, 5, 6, 8]), 4.5)
//Test.assertEquals(median([1, 4, 4, 9, 9, 10]), 6.5)
//Test.assertEquals(median([1, 2, 4, 4, 4, 7, 7, 9, 10]), 4)
//Test.assertEquals(median([1, 7, 8, 8, 10, 10, 10]), 8)
//Test.assertEquals(median([2, 3, 3, 3, 3, 5]), 3.0)
//Test.assertEquals(median([1, 1, 3, 4, 6, 6, 6, 7, 10]), 6)
//Test.assertEquals(median([3, 4, 6, 6, 6, 7, 9, 10, 10]), 6)
//Test.assertEquals(median([3, 3, 4, 5, 6, 6, 7, 9]), 5.5)
//Test.assertEquals(median([3, 4, 4, 6, 9, 9, 9]), 6)
//Test.assertEquals(median([3, 4, 4, 5, 7, 8]), 4.5)
//Test.assertEquals(median([2, 4, 4, 5, 5, 8, 8, 9, 10]), 5)
//Test.assertEquals(median([4, 5, 5, 6, 8, 10]), 5.5)
//Test.assertEquals(median([1, 4, 4, 5, 8, 9]), 4.5)
//Test.assertEquals(median([1, 4, 8, 8, 8, 8, 9, 10]), 8.0)
//Test.assertEquals(median([1, 1, 2, 2, 10, 10]), 2.0)
//Test.assertEquals(median([3, 4, 4, 5, 7, 8, 9]), 5)
//Test.assertEquals(median([1, 1, 2, 2, 2, 4, 5, 6, 8]), 2)
//Test.assertEquals(median([2, 4, 5, 5, 7, 7, 9, 10]), 6.0)
//Test.assertEquals(median([1, 3, 4, 8, 8, 10, 10]), 8)
//Test.assertEquals(median([1, 1, 4, 5, 5, 9, 9, 10]), 5.0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (21): Sign Your Name Again

//tags: objects

//url: https://edabit.com/challenge/H5rAoCQBjyB4woTPY

//Description:
//It's the police again. They need more signatures. You should also sign each room list separately. However, the document they sent is incomplete as there is only one room present. As a good citizen that you are, you sign it nevertheless.
//This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't use a return statement, it is already included.
//The function receives an object with one nested object as an argument. Your task is:
//on the root object: prevent any kind of changes.
//on the nested object: prevent new properties from being added BUT allow for existing properties to be changed.
//Examples
//const obj = {
//  kitchen: {
//    knives: 500,
//    stereo: 200,
//    signature: ""
//  },
//signature: "Rocky Balboa"
//}
//
//signAgain(obj) {
//  // add your code here
//
//  obj.signature = "Terminator"
//  obj.extraProperty = "not possible"
//  obj.kitchen.piano = 1000
//  obj.kitchen.signature = "Rocky Balboa"
//  return obj
//
//} ➞ {
//  kitchen: {
//    knives: 500,
//    stereo: 200,
//    signature: "Rocky Balboa", //only this field was changed
//  },
//  signature: "Rocky Balboa"
//}
//Notes
//For simplicity sake, there's only one nested object.
//If you have suggestions on how to present or further test this challenge please leave a comment.
//This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const random = Test.randomNumber()
//const obj = {
//  kitchen: {
//    knives: 500,
//    stereo: random,
//    signature: ""
//  },
//  signature: "Rocky Balboa"
//}
//​
//const result = {
//  kitchen: {
//    knives: 500,
//    stereo: random,
//    signature: "Rocky Balboa"
//  },
//  signature: "Rocky Balboa"
//};
//​
//Test.assertSimilar(signAgain(obj), result)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: How Close to the Speed of Light?

//tags: algebra,math,physics

//url: https://edabit.com/challenge/9QHYZtK6k9PpQhMaR

//Description:
//An ultrarelativistic particle is one whose speed v is very close to the speed of light c (or equivalently, one whose β = v/c is very close to 1). But a number like 0.9999999999999999999 is inconvenient to work with: calculators round it to 1, and trying to write it in scientific notation does the same (because any 9 you stop at gets rounded up by the following 9). It's better to work with the quantity (1 - β) instead.
//Fortunately, we don't need to deal directly with β to calculate an ultrarelativistic particle's (1 - β). There are some other wieldier quantities that we can use to approximate (1 - β) with great precision. One of them is the particle's rapidity φ, which is related to β by the equation:
//tanh φ = β
//(where tanh is the hyperbolic tangent function).
//For an ultrarelativistic particle, the rapidity lets us approximate (1 - β) like this:
//1 - β ≈ sech(2φ)
//(where sech is the hyperbolic secant).
//Write a function that takes an ultrarelativistic particle's rapidity (a number) and uses the approximation formula given above to return the particle's (1 - β) to three significant figures. The output should be a string in scientific notation, formatted like "6.63e-34".
//Examples
//howCloseToC(3.14) ➞ "3.75e-3"
//
//howCloseToC(42) ➞ "6.61e-37"
//
//howCloseToC(355) ➞ "8.95e-309"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(howCloseToC(3.14), "3.75e-3")
//Test.assertEquals(howCloseToC(42), "6.61e-37")
//Test.assertEquals(howCloseToC(355), "8.95e-309")

