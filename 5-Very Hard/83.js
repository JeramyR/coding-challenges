

//title: Widen the Streets!

//tags: arrays,formatting,strings

//url: https://edabit.com/challenge/RzNT8CdBWJPW3WBPX

//Description:
//Given an array of strings depicting a row of buildings, create a function which sets the gap between buildings as a given amount.
//Examples
//widenStreets([
//  "###   ## #",
//  "### # ## #",
//  "### # ## #",
//  "### # ## #",
//  "### # ## #"
//], 3) ➞ [
//  "###       ##   #",
//  "###   #   ##   #",
//  "###   #   ##   #",
//  "###   #   ##   #",
//  "###   #   ##   #"
//]
//
//widenStreets([
//  "## ### ###",
//  "## ### ###",
//  "## ### ###",
//  "## ### ###"
//], 2) ➞ [
//  "##  ###  ###",
//  "##  ###  ###",
//  "##  ###  ###",
//  "##  ###  ###"
//]
//
//widenStreets([
//  "# # # # #"
//], 2) ➞ [
//  "#  #  #  #  #"
//]
//Notes
//Buildings may be different sizes.
//There will always be a starting gap size of one character.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(widenStreets([
//  "# # # # #"
//], 2), [
//  "#  #  #  #  #"
//])
//​
//Test.assertSimilar(widenStreets([
//  "###   ## #",
//  "### # ## #",
//  "### # ## #",
//  "### # ## #",
//  "### # ## #"
//], 3), [
//  "###       ##   #",
//  "###   #   ##   #",
//  "###   #   ##   #",
//  "###   #   ##   #",
//  "###   #   ##   #"
//])
//​
//Test.assertSimilar(widenStreets([
//  "## ### ###",
//  "## ### ###",
//  "## ### ###",
//  "## ### ###"

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Flat Array Depth Nesting

//tags: arrays,loops,recursion

//url: https://edabit.com/challenge/jThp2fAGWuwffsokZ

//Description:
//Create a function that can nest a flat array to represent an incremental depth level sequence.
//Examples
//incrementalDepth([1, 2]) ➞ [1, [2]]
//
//incrementalDepth([1, 2, 3, 4, 5]) ➞ [1, [2, [3, [4, [5]]]]]
//
//incrementalDepth([1, 3, 2, 6]) ➞ [1, [3, [2, [6]]]]
//
//incrementalDepth(["dog", "cat", "cow"]) ➞ ["dog", ["cat", ["cow"]]]
//Notes
//The elements do not matter to the function, you should increment by index.
//Expect the array length to be from 2-20.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(incrementalDepth([1, 2]), [1, [2]])
//Test.assertSimilar(incrementalDepth(["dog", "cat", "cow"]), ["dog", ["cat", ["cow"]]])
//Test.assertSimilar(incrementalDepth([1, 3, 2, 6]), [1, [3, [2, [6]]]])
//Test.assertSimilar(incrementalDepth(
//  [undefined, null, null, null, null]),
//  [undefined, [null, [null, [null, [null]]]]]
//);
//Test.assertSimilar(incrementalDepth(" ".repeat(20).split("")), [
//  " ",
//  [
//    " ",
//    [
//      " ",
//      [
//        " ",
//        [
//          " ",
//          [
//            " ",
//            [
//              " ",
//              [
//                " ",
//                [
//                  " ",

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Kempner Function

//tags: higher_order_functions,math,numbers,recursion

//url: https://edabit.com/challenge/tcdEnEJPA6gXg3XXP

//Description:
//The Kempner Function, applied to a composite number, permits to find the smallest integer greater than zero whose factorial is exactly divided by the number.
//kempner(6) ➞ 3
//
//1! = 1 % 6 > 0
//2! = 2 % 6 > 0
//3! = 6 % 6 === 0
//
//kempner(10) ➞ 5
//
//1! = 1 % 10 > 0
//2! = 2 % 10 > 0
//3! = 6 % 10 > 0
//4! = 24 % 10 > 0
//5! = 120 % 10 === 0
//A Kempner Function applied to a prime will always return the prime itself.
//kempner(2) ➞ 2
//kempner(5) ➞ 5
//Given an integer n, implement a Kempner Function.
//Examples
//kempner(6) ➞ 3
//
//kempner(10) ➞ 5
//
//kempner(2) ➞ 2
//Notes
//Try solving this recursively, with an approach oriented to higher-order functions.
//If you need to get more confident with recursion and factorials, try this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(kempner(6), 3, "Instructions: first example.")
//Test.assertEquals(kempner(10), 5, "Instructions: second example.")
//Test.assertEquals(kempner(2), 2, "Instructions: third example")
//Test.assertEquals(kempner(21), 7)
//Test.assertEquals(kempner(1), 1)
//Test.assertEquals(kempner(4), 4)
//Test.assertEquals(kempner(13), 13)
//Test.assertEquals(kempner(29), 29)
//Test.assertEquals(kempner(68), 17)
//Test.assertEquals(kempner(71), 71)
//Test.assertEquals(kempner(100), 10)

