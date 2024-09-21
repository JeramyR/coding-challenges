

//title: Funny Numbers

//tags: functional_programming,logic,math,numbers

//url: https://edabit.com/challenge/dwktbd4JZPMEHAj7k

//Description:
//Mubashir was playing with some numbers. He observed some funny numbers.
//Funny Numbers
//89 --> 8¹ + 9² = 89 * 1
//
//695 --> 6² + 9³ + 5⁴ = 1390 = 695 * 2
//
//46288 --> 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
//Create a function which takes a number n and a positive integer p and returns a positive integer k, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
//In other words, is there an integer k such as:
//(a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ... ) = n * k
//// A given number = n
//// A given positive integer = p
//// Digits of the given number = a, b, c, d ...
//// A positive integer = k
//Your function should return null if k is not found.
//Examples
//funnyNumbers(89, 1) ➞ 1
//// since 8¹ + 9² = 89 = 89 * 1
//
//funnyNumbers(92, 1) ➞ null
//// since there is no k such as 9¹ + 2² equals 92 * k
//
//funnyNumbers(695, 2) ➞ 2
//// 6² + 9³ + 5⁴= 1390 = 695 * 2
//Notes
//Given number and power will always >=1

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(funnyNumbers(89, 1), 1)
//Test.assertEquals(funnyNumbers(92, 1), null)
//Test.assertEquals(funnyNumbers(46288, 3), 51)
//Test.assertEquals(funnyNumbers(114, 3), 9)
//Test.assertEquals(funnyNumbers(46288, 5), null)
//Test.assertEquals(funnyNumbers(135, 1), 1)
//Test.assertEquals(funnyNumbers(175, 1), 1)
//Test.assertEquals(funnyNumbers(518, 1), 1)
//Test.assertEquals(funnyNumbers(598, 1), 1)
//Test.assertEquals(funnyNumbers(1306, 1), 1)
//Test.assertEquals(funnyNumbers(2427, 1), 1)
//Test.assertEquals(funnyNumbers(2646798, 1), 1)
//Test.assertEquals(funnyNumbers(3456789, 1), null)
//Test.assertEquals(funnyNumbers(3456789, 5), null)
//Test.assertEquals(funnyNumbers(198, 1), 3)
//Test.assertEquals(funnyNumbers(249, 1), 3)
//Test.assertEquals(funnyNumbers(1377, 1), 2)
//Test.assertEquals(funnyNumbers(1676, 1), 1)
//Test.assertEquals(funnyNumbers(695, 2), 2)
//Test.assertEquals(funnyNumbers(1878, 2), 19)
//Test.assertEquals(funnyNumbers(7388, 2), 5)
//Test.assertEquals(funnyNumbers(47016, 2), 1)
//Test.assertEquals(funnyNumbers(542186, 2), 1)
//Test.assertEquals(funnyNumbers(261, 3), 5)
//Test.assertEquals(funnyNumbers(1385, 3), 35)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Letters Formed from the Longest Word

//tags: strings,validation

//url: https://edabit.com/challenge/D4KLn64XNGdrxR63Z

//Description:
//Write a function that returns true if all the strings in an array can be formed by using only the characters from the longest string.
//Examples
//canForm(["mast", "manifest", "met", "fan"]) ➞ true
//
//canForm(["may", "master", "same", "reams"]) ➞ false
//
//canForm(["may", "same", "reams", "mastery"]) ➞ true
//Notes
//There will only be one unique longest string.

//code area
///////////////////////////////////////////////////////////////////////////
const canForm = arr => {
    for (let i = 0; i < arr.length; i++) {

    }
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(canForm(["mast", "manifest", "met", "fan"]), true)
//Test.assertEquals(canForm(["may", "master", "same", "reams"]), false)
//Test.assertEquals(canForm(["may", "same", "reams", "mastery"]), true)
//Test.assertEquals(canForm(["kerfuffle", "fluke", "fluff", "ruffle", ]), true)
//Test.assertEquals(canForm(["monument", "momento", "moment", "tome"]), false)
//Test.assertEquals(canForm(["shape", "shapers", "raps", "saps"]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse LEGO Yoda

//tags: formatting,strings

//url: https://edabit.com/challenge/etjdtp5KGC2vYP6fn

//Description:
//Create a function that takes a string with at least one sentence in it and returns a string with the part(s) after the comma at the beginning of the sentence(s).
//Examples
//reverseLegoYoda("Hit you with my stick, I shall.")
//➞ "I shall hit you with my stick."
//
//reverseLegoYoda("Rejected me, my crush has. Ketamine, I need.")
//➞ "My crush has rejected me. I need ketamine."
//
//reverseLegoYoda("An alien, I am. Holding me captive in Area 51, the government is.")
//➞ "I am an alien. The government is holding me captive in Area 51."
//Notes
//Pay close attention to letter cases.
//Sentences will always end with a period.
//There will always be exactly one comma in each of the sentences.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reverseLegoYoda("Hit you with my stick, I shall."), "I shall hit you with my stick.")
//Test.assertEquals(reverseLegoYoda("Rejected me, my crush has. Ketamine, I need."), "My crush has rejected me. I need ketamine.")
//Test.assertEquals(reverseLegoYoda("An alien, I am. Holding me captive in Area 51, the government is."), "I am an alien. The government is holding me captive in Area 51.")

