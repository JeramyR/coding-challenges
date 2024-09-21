

//title: Moving to the End

//tags: arrays,higher_order_functions

//url: https://edabit.com/challenge/PooaCaiDfY2t229bE

//Description:
//Write a function that moves all elements of one type to the end of the array.
//Examples
//moveToEnd([1, 3, 2, 4, 4, 1], 1) ➞ [3, 2, 4, 4, 1, 1]
//// Move all the 1s to the end of the array.
//
//moveToEnd([7, 8, 9, 1, 2, 3, 4], 9) ➞ [7, 8, 1, 2, 3, 4, 9]
//
//moveToEnd(["a", "a", "a", "b"], "a") ➞ ["b", "a", "a", "a"]
//Notes
//Keep the order of the un-moved items the same.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(moveToEnd([1, 3, 2, 4, 4, 1], 1), [3, 2, 4, 4, 1, 1])
//Test.assertSimilar(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9), [7, 8, 1, 2, 3, 4, 9])
//Test.assertSimilar(moveToEnd([7, 7, 7, 6, 6, 6, 6], 7), [6, 6, 6, 6, 7, 7, 7])
//Test.assertSimilar(moveToEnd(["a", "c", "c", "c", "b", "c"], "b"), ["a", "c", "c", "c", "c", "b"])
//Test.assertSimilar(moveToEnd(["a", "c", "c", "c", "b", "c"], "c"), ["a", "b", "c", "c", "c", "c"])
//Test.assertSimilar(moveToEnd(["a", "a", "a", "b"], "a"), ["b", "a", "a", "a"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse Titling

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/NWvmFHPQnG4wuuJqt

//Description:
//Your stereotypical titleCase() function in JavaScript might capitalize the first letter of every word in a given sentence, leaving all the other letters as lowercase.
//The goal of this challenge, however, is to create a reverseTitle() function, which achieves the complete opposite! Make the first letter of every word lowercase, and the rest uppercase!
//Examples
//reverseTitle("this is a title") ➞ "tHIS iS a tITLE"
//
//reverseTitle("BOLD AND BRASH!") ➞ "bOLD aND bRASH!"
//
//reverseTitle("Elephants dance about bravely in Thailand") ➞ "eLEPHANTS dANCE aBOUT bRAVELY iN tHAILAND"
//Notes:
//This was originally translated from a Python version of this question. Unfortunately, I forgot to write down the original question's URL, so if you spot it... let me know!
//For extra credit (not really), convert the given function to a prototype method!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const isProto = !!(String && String.prototype.reverseTitle);
//​
//if (isProto) {
//    console.log('Using prototype method!')
//    Test.assertEquals("this is a title".reverseTitle(), "tHIS iS a tITLE")
//    Test.assertEquals("Bold and Brash!".reverseTitle(), "bOLD aND bRASH!")
//    Test.assertEquals("Elephants Dance About Bravely in Thailand".reverseTitle(), "eLEPHANTS dANCE aBOUT bRAVELY iN tHAILAND")
//    Test.assertEquals("bRing it On!!!".reverseTitle(), "bRING iT oN!!!")
//    Test.assertEquals("Dot Dot Dot...".reverseTitle(), "dOT dOT dOT...")
//    Test.assertEquals("...".reverseTitle(), "...")
//    Test.assertEquals("a Fine day".reverseTitle(), "a fINE dAY")
//    Test.assertEquals("An Important Document".reverseTitle(), "aN iMPORTANT dOCUMENT")
//    Test.assertEquals("Paper 1 is a thesis.".reverseTitle(), "pAPER 1 iS a tHESIS.")
//    Test.assertEquals("king of spades".reverseTitle(), "kING oF sPADES")
//    Test.assertEquals("Alphanumerically Brilliant Crowds".reverseTitle(), "aLPHANUMERICALLY bRILLIANT cROWDS")
//    Test.assertEquals("123456789".reverseTitle(), "123456789")
//    Test.assertEquals("a b c d e f g h i j k".reverseTitle(), "a b c d e f g h i j k")
//    Test.assertEquals("better LATE than NEVER".reverseTitle(), "bETTER lATE tHAN nEVER")
//} else {
//    Test.assertEquals(reverseTitle("this is a title"), "tHIS iS a tITLE")
//    Test.assertEquals(reverseTitle("Bold and Brash!"), "bOLD aND bRASH!")
//    Test.assertEquals(reverseTitle("Elephants Dance About Bravely in Thailand"), "eLEPHANTS dANCE aBOUT bRAVELY iN tHAILAND")
//    Test.assertEquals(reverseTitle("bRing it On!!!"), "bRING iT oN!!!")
//    Test.assertEquals(reverseTitle("Dot Dot Dot..."), "dOT dOT dOT...")
//    Test.assertEquals(reverseTitle("..."), "...")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Iterated Square Root

//tags: loops,math,numbers

//url: https://edabit.com/challenge/FFdZPWBpBWvBjuGdr

//Description:
//The iterated square root of a number is the number of times the square root function must be applied to bring the number strictly under 2.
//Given an integer, return its iterated square root. Return "invalid" if it is negative.
//Examples
//iSqrt(1) ➞ 0
//
//iSqrt(2) ➞ 1
//
//iSqrt(7) ➞ 2
//
//iSqrt(27) ➞ 3
//
//iSqrt(256) ➞ 4
//
//iSqrt(-1) ➞ "invalid"
//Notes
//Idea for iterated square root by Richard Spence.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(iSqrt(1), 0, "Example 1")
//Test.assertEquals(iSqrt(2), 1, "Example 2")
//Test.assertEquals(iSqrt(7), 2, "Example 3")
//Test.assertEquals(iSqrt(27), 3, "Example 4")
//Test.assertEquals(iSqrt(256), 4, "Example 5")
//Test.assertEquals(iSqrt(-1), "invalid", "Example 6")
//Test.assertEquals(iSqrt(25), 3)
//Test.assertEquals(iSqrt(59), 3)
//Test.assertEquals(iSqrt(113), 3)
//Test.assertEquals(iSqrt(253), 3)
//Test.assertEquals(iSqrt(965), 4)
//Test.assertEquals(iSqrt(999), 4)
//Test.assertEquals(iSqrt(2746), 4)
//Test.assertEquals(iSqrt(2872), 4)
//Test.assertEquals(iSqrt(4069), 4)
//Test.assertEquals(iSqrt(6575), 4)
//Test.assertEquals(iSqrt(7985), 4)
//Test.assertEquals(iSqrt(8385), 4)
//Test.assertEquals(iSqrt(16943), 4)
//Test.assertEquals(iSqrt(26749), 4)
//Test.assertEquals(iSqrt(34665), 4)
//Test.assertEquals(iSqrt(44591), 4)
//Test.assertEquals(iSqrt(50320), 4)
//Test.assertEquals(iSqrt(66343), 5)
//Test.assertEquals(iSqrt(69420), 5)

