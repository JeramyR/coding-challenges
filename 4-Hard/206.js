

//title: Broken Bridge

//tags: arrays,higher_order_functions,validation

//url: https://edabit.com/challenge/tQNGydfWqZueRgmDC

//Description:
//A broken bridge can be represented by 1s and 0s, where contiguous 0s represent holes. You can walk across a bridge with a hole with a maximum width of 1, but any holes bigger than that you must fix first. For example, the bridge below is walkeable:
//[1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1]
//This bridge is not:
//[1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
//You own several wooden planks, each with different widths. You can patch the holes on the bridge with these planks. More specifically, a plank size n can fill a n-sized hole. If you had a plank of size 2, the un-walkeable bridge above could be filled in:
//[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
//But even if you only had a plank of size 1, you could still transform the unwalkeable bridge into a walkeable one:
//[1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
//Write a function that takes in a broken bridge, an array of plank sizes, and returns true if the bridge can be patched up enough to walk over, and false otherwise.
//Examples
//canPatch([1, 0, 0, 0, 0, 0, 0, 1], [5, 1, 2]) ➞ true
//// You can use the 5 plank to transform the 6 hole to a 1 hole.
//// Leftover planks [1, 2] are okay.
//
//canPatch([1, 0, 0, 0, 0, 0, 0, 1], [4, 1, 2, 3, 4]) ➞ false
//// None of your planks are long enough (you can't combine them).
//
//canPatch([1, 0, 0, 1, 1, 0, 0, 0, 1], [1, 2]) ➞ true
//
//canPatch([1, 0, 0, 1, 1, 0, 0, 0, 1], [1, 1]) ➞ false
//Notes
//Individual planks may NOT be combined to form a longer plank.
//Leftover planks are okay.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canPatch([1, 0, 0, 1], [1]), true)
//Test.assertEquals(canPatch([1, 0, 0, 1], [1, 2]), true)
//Test.assertEquals(canPatch([1, 0, 0, 1], []), false)
//Test.assertEquals(canPatch([1, 0, 1, 1], []), true)
//Test.assertEquals(canPatch([1, 0, 1, 0, 1, 0, 1, 0, 1], []), true)
//Test.assertEquals(canPatch([1, 0, 0, 0, 0, 0, 0, 1], [5, 1, 2]), true)
//Test.assertEquals(canPatch([1, 0, 0, 0, 0, 0, 0, 1], [4, 1, 2, 3, 4]), false)
//Test.assertEquals(canPatch([1, 0, 0, 1, 0, 0, 1, 0, 0, 1], [1, 1]), false)
//Test.assertEquals(canPatch([1, 0, 0, 1, 0, 0, 1, 0, 0, 1], [1, 1, 1]), true)
//Test.assertEquals(canPatch([1, 0, 0, 1, 1, 0, 0, 0, 1], [1, 2]), true)
//Test.assertEquals(canPatch([1, 0, 0, 1, 1, 0, 0, 0, 1], [1, 1]), false)
//Test.assertEquals(canPatch([1, 0, 0, 1, 1, 1, 0, 0, 1], [1, 1]), true)
//Test.assertEquals(canPatch([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1], [1, 3, 1]), true)
//Test.assertEquals(canPatch([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1], [1, 3, 1, 5, 5]), true)
//Test.assertEquals(canPatch([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1], [1, 2, 2]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Letter Shifting

//tags: algorithms,logic,strings

//url: https://edabit.com/challenge/Fp8mhnDaA79bkERjh

//Description:
//Create a function that takes a string and shifts the letters by an amount n but not the whitespace.
//Examples
//shiftLetters("Boom", 2) ➞ "omBo"
//
//shiftLetters("This is a test",  4) ➞ "test Th i sisa"
//
//shiftLetters("A B C D E F G H", 5) ➞  "D E F G H A B C"
//Notes
//Keep the case as it is.
//n can be larger than the total number of letters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(shiftLetters("Made by Harith Shah", 15), "adeb yH arithS hahM");
//Test.assertEquals(shiftLetters("Boom", 1), "mBoo");
//Test.assertEquals(shiftLetters("The most addictive way to learn", 19), "add icti vewaytole arn Th emost");
//Test.assertEquals(shiftLetters("This is a test", 13), "stTh is i sate");
//Test.assertEquals(shiftLetters("Shift the letters", 1), "sShif tth eletter");
//Test.assertEquals(shiftLetters("A B C D E F G H", 4), "E F G H A B C D");
//Test.assertEquals(shiftLetters("Edabit helps you learn in bitesize chunks", 39), "unksEd abith elp syoul ea rninbite sizech");
//Test.assertEquals(shiftLetters("To be or not to be", 6), "ot to be Tob eo rn");
//Test.assertEquals(shiftLetters("Made by Harith Shah", 18), "ahMa de byHari thSh");
//Test.assertEquals(shiftLetters("Boom", 0), "Boom");
//Test.assertEquals(shiftLetters("The most addictive way to learn", 5), "lea rnTh emostaddi cti ve wayto");
//Test.assertEquals(shiftLetters("This is a test", 9), "isis at e stTh");
//Test.assertEquals(shiftLetters("Shift the letters", 3), "ersSh ift thelett");
//Test.assertEquals(shiftLetters("A B C D E F G H", 10), "G H A B C D E F");
//Test.assertEquals(shiftLetters("Birds of a Feather Flock Together", 32), "therB ir d sofaFea therF lockToge");
//Test.assertEquals(shiftLetters("Talk the Talk", 1), "kTal kth eTal");
//​
//// By Harith Shah

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the LCM of Three Numbers

//tags: algorithms,arrays,math,numbers

//url: https://edabit.com/challenge/yHDcevx6KfjqiXcMg

//Description:
//Create a function that takes an array of three numbers and returns the Least Common Multiple (LCM).
//The LCM is the smallest positive number that is a multiple of two or more numbers. In our case, we are dealing with three numbers.
//Multiples of 3 are: 3, 6, 9, 12, and so on.
//Multiples of 4 are: 4, 8,12, and so on.
//Multiples of 12 are: 12, 24, 36, and so on.
//Thus, the least common multiple of 3, 4, and 12 is 12.
//Examples
//lcmThree([5, 7, 13]) ➞ 455
//
//lcmThree([104, 105, 107]) ➞ 1168440
//
//lcmThree([19, 47, 43]) ➞ 38399
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(lcmThree([5, 7, 13]), 455)
//Test.assertSimilar(lcmThree([104, 105, 107]), 1168440)
//Test.assertSimilar(lcmThree([19, 47, 43]), 38399)
//Test.assertSimilar(lcmThree([3, 4, 12]), 12)
//Test.assertSimilar(lcmThree([6, 16, 348]), 1392)
//Test.assertSimilar(lcmThree([97, 103, 301]), 3007291)
//Test.assertSimilar(lcmThree([97, 997, 301]), 29109409)

