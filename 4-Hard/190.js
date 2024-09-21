

//title: Happy Numbers

//tags: arrays,loops,numbers

//url: https://edabit.com/challenge/Qoqaohvgh4Mi3bpjj

//Description:
//You are given an array of 0s and 1s, like the one below:
//[0, 1, 0, 0, 0, 1, 1, 1, 0, 1]
//
//// The first element, a 0, and the last element, a 1 are both unhappy.
//// The second element, a 1 is unhappy.
//// The second-to-last element, a 0 is unhappy.
//// All other numbers in this array are happy.
//A 1 is unhappy if the digit to its left and the digit to its right are both 0s. A 0 is unhappy if the digit to its left and the digit to its right are both 1s. If a number has only one neighbor, it is unhappy if its only neighbor is different. Otherwise, a number is happy.
//Write a function that takes in an array of 0s and 1s and outputs the portion of numbers which are happy. The total portion of numbers which are happy can be represented as:
//portion of happy numbers = (happy 0s + happy 1s) / total numbers
//In the example above, 0.6 is the number of happy numbers.
//Examples
//portionHappy([0, 1, 0, 1, 0]) ➞ 0
//
//portionHappy([0, 1, 1, 0]) ➞ 0.5
//
//portionHappy([0, 0, 0, 1, 1]) ➞ 1
//
//portionHappy([1, 0, 0, 1, 1]) ➞ 0.8
//Notes
//Remember: a 0 border number is unhappy if its only neighbor is a 1 and vice versa.
//An array will contain at least two elements.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(portionHappy([0, 1, 0, 1, 0]), 0)
//Test.assertEquals(portionHappy([0, 1, 1, 0]), 0.5)
//Test.assertEquals(portionHappy([0, 0, 0, 1, 1]), 1)
//Test.assertEquals(portionHappy([1, 0, 0, 1, 1]), 0.8)
//Test.assertEquals(portionHappy([1, 1, 1, 1, 1]), 1)
//Test.assertEquals(portionHappy([1, 1, 0, 0, 1, 1]), 1)
//Test.assertEquals(portionHappy([1, 1, 0, 0, 0, 1, 1]), 1)
//Test.assertEquals(portionHappy([1, 0, 0, 0, 1]), 0.6)
//Test.assertEquals(portionHappy([1, 0, 1, 0, 0, 0]), 0.5)
//Test.assertEquals(portionHappy([1, 1]), 1)
//Test.assertEquals(portionHappy([1, 0]), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Not a Simple Increment

//tags: algorithms,logic,loops,numbers

//url: https://edabit.com/challenge/XtdTxLB47nD2Cq5jk

//Description:
//Create a function that takes three integer parameters: a number n, number of iterations, and step. You have to implement an algorithm, which increases the given number as explained below:
//n = 143726, iterations = 16, step = 3
//simpleIncrement(n, iterations, step) ➞ 243826
//Step 1: We start from the first digit and increment the 4th digit because the step is 3.
//s - Starting Position
//* - current increased position
//
//Position: s - - - - - ➞ - - - * - -
//Number:   1 4 3 7 2 6 ➞ 1 4 3 8 2 6
//Step 2: Repeat step #1 with the updated starting position.
//s - Starting Position
//* - current increased position
//
//Position: - - - s - - ➞ * - - - - -
//Number:   1 4 3 8 2 6 ➞ 2 4 3 8 2 6
//Remember, if the number overflows, the current position gets shifted to the right.
//9 9 9 ➞ - - p   // before overflow position will be at 3rd digit
//1 0 0 0 ➞ - - - p   // after overflow position will be at 4th digit
//More examples on overflow:
//9 ➞ 10
//799 ➞ 800 (If you increased the second 9) or 809 (if you increased the first 9)
//99000 ➞ 100000 (If you increased the second 9) or 109000 (if you increased the first 9)
//Examples
//simpleIncrement(1673, 2, 16) ➞ 3673
//
//simpleIncrement(99, 99, 99) ➞ 198
//
//simpleIncrement(99, 99, 98) ➞ 4734
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const tests = [
//    [1673, 2, 16, 3673],
//    [99, 99, 99, 198],
//    [99, 99, 98, 4734],
//    [5, 156, 15, 20996],
//    [1, 1, 1, 2],
//    [1, 10, 1, 20],
//    [1, 10, 10, 11],
//    [50, 10, 0, 150],
//    [123, 123, 123, 300090],
//    [12523, 122, 433, 6535854],
//    [9, 9000, 100, 1854892466545716]
//];
//describe("Check kar yar", function () {
//    for (const [n, iterations, step, answer] of tests) {
//        it(`given number:${n}, iterations:${iterations}, step: ${step}`, function () {
//            Test.assertEquals(simpleIncrement(n, iterations, step), answer);
//        });
//    } 
//});

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Water Balloon

//tags: arrays,loops

//url: https://edabit.com/challenge/rj2fNpjobWZksHrdZ

//Description:
//Once a water balloon pops, is soaks the area around it. The ground gets drier the further away you travel from the balloon.
//The effect of a water balloon popping can be modeled using an array. Create a function that takes an array which takes the pre-pop state and returns the state after the balloon is popped. The pre-pop state will contain at most a single balloon, whose size is represented by the only non-zero element.
//Examples
//pop([0, 0, 0, 0, 4, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4, 3, 2, 1, 0]
//
//pop([0, 0, 0, 3, 0, 0, 0]) ➞ [0, 1, 2, 3, 2, 1, 0]
//
//pop([0, 0, 2, 0, 0]) ➞ [0, 1, 2, 1, 0]
//
//pop([0]) ➞ [0]
//Notes
//Length of input array is always odd.
//The input array will always be the exact length it takes for there to be exactly one border zero.
//If the input array consists only of zeroes, return the same array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(pop([0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0]), [0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0])
//Test.assertSimilar(pop([0, 0, 0, 0, 4, 0, 0, 0, 0]), [0, 1, 2, 3, 4, 3, 2, 1, 0])
//Test.assertSimilar(pop([0, 0, 0, 3, 0, 0, 0]), [0, 1, 2, 3, 2, 1, 0])
//Test.assertSimilar(pop([0, 0, 2, 0, 0]), [0, 1, 2, 1, 0])
//Test.assertSimilar(pop([0, 1, 0]), [0, 1, 0])
//Test.assertSimilar(pop([0]), [0])

