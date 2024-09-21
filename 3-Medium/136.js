

//title: No Yelling

//tags: recursion,regex,strings

//url: https://edabit.com/challenge/rKeYpxFeRQRP2Afg7

//Description:
//Create a function that transforms sentences ending with multiple question marks ? or exclamation marks ! into a sentence only ending with one without changing punctuation in the middle of the sentences.
//Examples
//noYelling("What went wrong?????????") ➞ "What went wrong?"
//
//noYelling("Oh my goodness!!!") ➞ "Oh my goodness!"
//
//noYelling("I just!!! can!!! not!!! believe!!! it!!!") ➞ "I just!!! can!!! not!!! believe!!! it!"
//// Only change repeating punctuation at the end of the sentence.
//
//noYelling("Oh my goodness!") ➞ "Oh my goodness!"
//// Do not change sentences where there exists only one or zero exclamation marks/question marks.
//
//noYelling("I just cannot believe it.") ➞ "I just cannot believe it."
//Notes
//Only change ending punctuation - keep the exclamation marks or question marks in the middle of the sentence the same (see third example).
//Don't worry about mixed punctuation (no cases that end in something like ?!??!).
//Keep sentences that do not have question/exclamation marks the same.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(noYelling("What went wrong?????????"), "What went wrong?")
//Test.assertEquals(noYelling("Oh my goodness!!!"), "Oh my goodness!")
//Test.assertEquals(noYelling("WHAT!"), "WHAT!")
//Test.assertEquals(noYelling("WHAT?"), "WHAT?")
//Test.assertEquals(noYelling("Oh my goodness!"), "Oh my goodness!")
//Test.assertEquals(noYelling("I just cannot believe it."), "I just cannot believe it.")
//Test.assertEquals(noYelling("I just!!! can!!! not!!! believe!!! it!!!"), "I just!!! can!!! not!!! believe!!! it!")
//Test.assertEquals(noYelling("That's a ton!! of cheese!!!!"), "That's a ton!! of cheese!")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: International Greetings

//tags: formatting,objects

//url: https://edabit.com/challenge/83sWemMhpG6pScXKp

//Description:
//Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.
//const GUEST_LIST = {
//  Randy: "Germany",
//  Karla: "France",
//  Wendy: "Japan",
//  Norman: "England",
//  Sam: "Argentina"
//}
//Write a function that takes in a name and returns a name tag, that should read:
//"Hi! I'm [name], and I'm from [country]."
//If the name is not in the object, return:
//"Hi! I'm a guest."
//Examples
//greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."
//
//greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."
//
//greeting("Monti") ➞ "Hi! I'm a guest."
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(greeting("Randy"), "Hi! I'm Randy, and I'm from Germany.")
//Test.assertEquals(greeting("Sam"), "Hi! I'm Sam, and I'm from Argentina.")
//Test.assertEquals(greeting("Monti"), "Hi! I'm a guest.")
//Test.assertEquals(greeting("Trudy"), "Hi! I'm a guest.")
//Test.assertEquals(greeting("Wendy"), "Hi! I'm Wendy, and I'm from Japan.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Common Divisor of Array

//tags: algebra,algorithms,math,numbers

//url: https://edabit.com/challenge/rSZmP2dWjEK8Gqcih

//Description:
//Write a function that returns the greatest common divisor of all array elements. If the greatest common divisor is 1, return 1.
//Examples
//gcd([10, 20, 40]) ➞ 10
//
//gcd([1, 2, 3, 100]) ➞ 1
//
//gcd([1024, 192, 2048, 512]) ➞ 64
//Notes
//Array elements are always greater than 0.
//There is a minimum of two array elements given.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(gcd([10, 20, 40]), 10)
//Test.assertEquals(gcd([7, 11]), 1)
//Test.assertEquals(gcd([156, 84, 60, 1188, 252]), 12)
//Test.assertEquals(gcd([1, 2, 3, 4, 5]), 1)
//Test.assertEquals(gcd([777, 77, 7, 14]), 7)
//Test.assertEquals(gcd([20, 20, 40, 100]), 20)
//Test.assertEquals(gcd([731, 43, 473, 2623]), 43)

