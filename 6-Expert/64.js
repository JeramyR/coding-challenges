

//title: The Mysterious Number 6174

//tags: math,numbers

//url: https://edabit.com/challenge/988Y5LdWPqvnv2Dzn

//Description:
//The number 6174 is a really mysterious number. At first glance, it might not seem so obvious. But as we are about to see, anyone who can subtract can uncover the mystery that makes 6174 so special.
//In 1949 the mathematician D. R. Kaprekar devised a process now known as Kaprekar's operation. First choose a four digit number where the digits are not all the same (that is not 1111, 2222, and so on). Then rearrange the digits to get the largest and smallest numbers these digits can make. Finally, subtract the smallest number from the largest to get a new number, and carry on repeating the operation for each new number.
//It is a simple operation, but Kaprekar discovered it led to a surprising result: When we reach 6174 the operation repeats itself, returning 6174 every time. In fact, you reach 6174 for all four digit numbers that don't have all the digits the same. It's marvellous. Kaprekar's operation is so simple but uncovers such an interesting result.
//Objective
//Create a function that takes a four digit number as an argument and returns the numbers of iterations needed to reach the number 6174, as well as a print of each iteration. If the number is a repdigit, the function must return a message to the user.
//Important
//If in any iteration you have a 1-digit, 2-digits or 3-digits number, add leading zeros for the calculations and the prints. Please see example below where n = 1.
//Based on the point mentioned before, you can expect, for example, that the numbers 1 and 1000 will lead to the same iterations.
//Examples
//Kaprekar(1234) ➞
//"---------- The Mysterious Number 6174 ----------
//
//Number of iterations: 3
//
//Iterations:
//
//Iteration Nr. 1: 4321 - 1234 = 3087
//Iteration Nr. 2: 8730 - 0378 = 8352
//Iteration Nr. 3: 8532 - 2358 = 6174
//
//------------------------------------------------"
//
//
//Kaprekar(2005) ➞
//"---------- The Mysterious Number 6174 ----------
//
//Number of iterations: 7
//
//Iterations:
//
//Iteration Nr. 1: 5200 - 0025 = 5175
//Iteration Nr. 2: 7551 - 1557 = 5994
//Iteration Nr. 3: 9954 - 4599 = 5355
//Iteration Nr. 4: 5553 - 3555 = 1998
//Iteration Nr. 5: 9981 - 1899 = 8082
//Iteration Nr. 6: 8820 - 0288 = 8532
//Iteration Nr. 7: 8532 - 2358 = 6174
//
//------------------------------------------------"
//
//
//Kaprekar(8888) ➞
//"---------- The Mysterious Number 6174 ----------
//
//Error, n cannot be a repdigit.
//
//------------------------------------------------"
//
//
//Kaprekar(1) ➞
//"---------- The Mysterious Number 6174 ----------
//
//Number of iterations: 5
//
//Iterations:
//
//Iteration Nr. 1: 1000 - 0001 = 0999
//Iteration Nr. 2: 9990 - 0999 = 8991
//Iteration Nr. 3: 9981 - 1899 = 8082
//Iteration Nr. 4: 8820 - 0288 = 8532
//Iteration Nr. 5: 8532 - 2358 = 6174
//
//------------------------------------------------"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(Kaprekar(1234), '\n---------- The Mysterious Number 6174 ----------\n' +
//'\nNumber of iterations: 3\n' + 
//'\nIterations:\n' +
//'\n' +
//'Iteration Nr. 1: 4321 - 1234 = 3087\n' +
//'Iteration Nr. 2: 8730 - 0378 = 8352\n' +
//'Iteration Nr. 3: 8532 - 2358 = 6174\n' +
//'\n------------------------------------------------')
//​
//Test.assertEquals(Kaprekar(2005), '\n---------- The Mysterious Number 6174 ----------\n' +
//'\nNumber of iterations: 7\n' + 
//'\nIterations:\n' +
//'\n' +
//'Iteration Nr. 1: 5200 - 0025 = 5175\n' +
//'Iteration Nr. 2: 7551 - 1557 = 5994\n' +
//'Iteration Nr. 3: 9954 - 4599 = 5355\n' +
//'Iteration Nr. 4: 5553 - 3555 = 1998\n' +
//'Iteration Nr. 5: 9981 - 1899 = 8082\n' +
//'Iteration Nr. 6: 8820 - 0288 = 8532\n' +
//'Iteration Nr. 7: 8532 - 2358 = 6174\n' +
//'\n------------------------------------------------')
//​
//Test.assertEquals(Kaprekar(1), '\n---------- The Mysterious Number 6174 ----------\n' +
//'\nNumber of iterations: 5\n' + 
//'\nIterations:\n' +

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Consecutive Number Series

//tags: numbers,recursion,sorting,strings,validation

//url: https://edabit.com/challenge/2sH6c6oyRn3K6DWiF

//Description:
//Write a function that will return true if a given string (divided and grouped into a size) will contain a set of consecutive numbers (regardless of orientation: whether ascending or descending), otherwise, return false.
//Examples
//isConsecutive("121314151617") ➞ true
//// Contains a set of consecutive ascending numbers
//// if grouped into 2's : 12, 13, 14, 15, 16, 17
//
//isConsecutive("123124125") ➞ true
//// Contains a set of consecutive ascending numbers
//// if grouped into 3's : 123, 124, 125
//
//isConsecutive("32332432536") ➞ false
//// Regardless of the grouping size, the numbers can't be consecutive.
//
//isConsecutive("326325324323") ➞ true
//// Contains a set of consecutive descending numbers
//// if grouped into 3's : 326, 325, 324, 323
//
//isConsecutive("667666") ➞ true
//// Consecutive descending numbers: 667 and 666.
//
//isConsecutive("999897959493") ➞ false
//Notes
//A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
//An iterative version of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const isRecursive = src => (`${src}`.match(RegExp(`${src.name}`, 'gm')) || []).length > +(/function/.test(src))
//Test.assertNotEquals(isRecursive(isConsecutive), false, "Recursion is required!")
//​
//let [actualParam, expected] = [
//  [
//    "121314151617", "123124125", "667666", "23242526", "444445", "1234567", "123412351236",
//    "57585960616263", "500001500002500003", "919920921", "12341235123612371238", "326325324323",
//    "54321", "56555453", "32332432536", "2324256", "1235", "121316", "12131213", "90090190290",
//    "35236237238", "999897959493", "171615141312119", "1716171819181920", "273274273274"
//  ], [
//    true, true, true, true, true, true, true, true, true, true, true, true, true, true,
//    false, false, false, false, false, false, false, false, false, false, false
//  ]
//]
//for (let i in actualParam) Test.assertEquals(isConsecutive(actualParam[i]), expected[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Spartans Decipher

//tags: algorithms,cryptography,logic,strings

//url: https://edabit.com/challenge/Yed48fdvYtLrARMAa

//Description:
//In Spartans Cipher, encoding is done by writing the text horizontally, across the strap in the plaintext word of a message. In ancient times, Spartans and Greeks invented interesting way of encryption called Scytale. The detailed description of the encoding algorithm is provided by Mubashir in his challenge. You are encouraged to solve that one first.
//In this challenge, the function is given the encoded message and the number of slides. Create a reversed solution to retrieve the original message.
//Examples
//spartansDecipher("Ms t euhSaC biclo aryed", 6) ➞ "Mubashir Scytale Code"
//
//spartansDecipher("M  baai aaEirmn tndteag tda  z", 8) ➞ "Matt and Edabit are amazing"
//Notes
//Strip white spaces on the right of the resulting string, because they were added during the encoding.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(spartansDecipher("Ms t euhSaC biclo aryed", 6), "Mubashir Scytale Code")
//Test.assertEquals(spartansDecipher("M  baai aaEirmn tndteag tda  z", 8), "Matt and Edabit are amazing")
//Test.assertEquals(spartansDecipher("E lepf evSl h cngH dethge merhaenwac il yikiosl", 8), "Evgeny SH will make decipher of this challenge")
//Test.assertEquals(spartansDecipher("HENTEIDTLAEAPMRCMUAK", 4), "HELPMEIAMUNDERATTACK")
//Test.assertEquals(spartansDecipher("", 99), "")
//Test.assertEquals(spartansDecipher("TcnmrzhkFpTyeBoshDQrxOeouoJvLgiwuea.", 6), "TheQuickBrownFoxJumpsOverTheLazyDog.")
//Test.assertEquals(spartansDecipher("Wobtalkrneyiesi cpla tcoi gtiomntuondegoe ge   .M  laa aPhin Ttyak chttseeoa!h  mln", 7), "Writing Python code has become like typing an email to a colleague. Thanks to Matt!")
//Test.assertEquals(spartansDecipher("Tu w hgoeEeun d r aa4aTrb6tVeiti, tho d. nbo i ui nitn as g", 5), "The 46th inauguration is on TV, but we are doing Edabit.")
//​
//// Author : Evgeny SH

