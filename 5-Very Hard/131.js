

//title: Strong Password

//tags: strings,validation

//url: https://edabit.com/challenge/XYDCXdCn6bqaT6SJm

//Description:
//Create a function that determines the minimum number of characters needed to make a strong password.
//A password is considered strong if it satisfies the following criteria:
//Its length is at least 6.
//It contains at least one digit.
//It contains at least one lowercase English character.
//It contains at least one uppercase English character.
//It contains at least one special character: !@#$%^&*()-+
//Types of characters in a form you can paste into your solution:
//const numbers = "0123456789"
//const lower = "abcdefghijklmnopqrstuvwxyz"
//const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//const special = "!@#$%^&*()-+"
//Examples
//strongPassword(“Ed1”) ➞ 3
//
//strongPassword(“#Edabit”) ➞ 1
//
//strongPassword("W1llth!spass?") ➞ 0
//Notes
//Try solving this without RegEx.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(strongPassword("#Edabit"), 1)
//Test.assertEquals(strongPassword("Cr3ateAStr0ng1"), 1)
//Test.assertEquals(strongPassword("CreateAStrongOne"), 2)
//Test.assertEquals(strongPassword("willthispass"), 3)
//Test.assertEquals(strongPassword("w1llth!spass?"), 1)
//Test.assertEquals(strongPassword("W1llth!spass?"), 0)
//Test.assertEquals(strongPassword("1sth!"), 1)
//Test.assertEquals(strongPassword("sth!"), 2)
//Test.assertEquals(strongPassword("bd"), 4)
//Test.assertEquals(strongPassword("d"), 5)
//Test.assertEquals(strongPassword("[?"), 4)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Fibonacci String

//tags: recursion,strings

//url: https://edabit.com/challenge/aEWotdg3r6eB2QLWK

//Description:
//A Fibonacci string is a precedence of the Fibonacci series. It works with any two characters of the English alphabet (as opposed to the numbers 0 and 1 in the Fibonacci series) as the initial items and concatenates them together as it progresses similarly to that of the Fibonacci series. See examples for more details.
//Examples
//fibStr(3, ["j", "h"]) ➞ "j, h, hj"
//
//fibStr(5, ["e", "a"]) ➞ "e, a, ae, aea, aeaae"
//
//fibStr(6, ["n", "k"]) ➞ "n, k, kn, knk, knkkn, knkknknk"
//Notes
//All values for n will be at least 2.
//It is expected from the challenge-takers to come up with a solution using the concept of recursion or the so-called recursive approach.
//You can read more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge or unless otherwise.
//A recursive approach is prone to Uncaught RangeError or exceeding the maximum call size of the stack, deal with it accordingly and appropriately.
//An iterative version of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(fibStr), false, "Recursion is required!")
//​
//let [actualParam, expectedParam] = [
//  [
//    [3, ['j', 'h']],
//    [5, ['e', 'a']],
//    [6, ['n', 'k']],
//    [7, ['f', 'c']],
//    [9, ['b', 'a']],
//    [11, ['z', 'x']],
//    [12, ['t', 'd']]
//  ], [
//    "j, h, hj",
//    "e, a, ae, aea, aeaae",
//    "n, k, kn, knk, knkkn, knkknknk",
//    "f, c, cf, cfc, cfccf, cfccfcfc, cfccfcfccfccf",
//    "b, a, ab, aba, abaab, abaababa, abaababaabaab, abaababaabaababaababa, abaababaabaababaababaabaababaabaab",
//    "z, x, xz, xzx, xzxxz, xzxxzxzx, xzxxzxzxxzxxz, xzxxzxzxxzxxzxzxxzxzx, xzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxz, xzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxzx, xzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxzxzxxzxzxxzxxzxzxxzxxz",
//    "t, d, dt, dtd, dtddt, dtddtdtd, dtddtdtddtddt, dtddtdtddtddtdtddtdtd, dtddtdtddtddtdtddtdtddtddtdtddtddt, dtddtdtddtddtdtddtdtddtddtdtddtddtdtddtdtddtddtdtddtdtd, dtddtdtddtddtdtddtdtddtddtdtddtddtdtddtdtddtddtdtddtdtddtddtdtddtddtdtddtdtddtddtdtddtddt, dtddtdtddtddtdtddtdtddtddtdtddtddtdtddtdtddtddtdtddtdtddtddtdtddtddtdtddtdtddtddtdtddtddtdtddtdtddtddtdtddtdtddtddtdtddtddtdtddtdtddtddtdtddtdtd"
//]]
//for (let i in actualParam) Test.assertEquals(fibStr(...actualParam[i]), expectedParam[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Get the Lucky Number

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/27dNMsHnQc5LgWvQM

//Description:
//A lucky number is a number of a sequence generated by a sieve algorithm: if a number in the positive integers series survives to the sieve filtering algorithm, it's lucky and survives, otherwise it disappears from the sequence.
//First you must obtain an array of numbers, from 1 to the needed size.
//First number is 1 and it survives: next to him there is number 2, that becomes the sieve's filter: every second number in the list (counting from 1) has to be filtered (as to say every even number).
//After this step, the next number to survive after 1 is 3: eliminate every third number in the list (counting from 1).
//After this step, the next number to survive after 3 is 7: eliminate every seventh number in the list.
//Repeat the steps incrementing the filter condition at every step (as to say that the sieve filter of a new step is equal to the first number greater than the previous step last lucky number) until there are no numbers to eliminate in the list.
//See the example below for a given size = 25 and nth = 5.
//Step 1: Generate a list from 1 to size.
//
//1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
//
//Step 2: First sieve filter is 2: every second number from the start has to be eliminated.
//
//1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
//
//Step 3: Sieve filter is now 3: every third number from the start has to be eliminated.
//
//1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25
//
//Step 4: Sieve filter is now 7: every seventh number from the start has to be eliminated.
//
//1, 3, 7, 9, 13, 15, 19, 21, 25
//
//Step 5: Sieve filter is now 9: every ninth number has to be eliminated, but our list now contains only 8 numbers and so the algorithm ends. The nth number of the sequence is 13.
//In the animation below, you can see the progressive sieving process for a list of 120 numbers: purple filling is for eliminated numbers, red is for lucky ones.
//
//Given a size being the dimension of the starting array, write a function that returns the nth number of the resulting sequence after the sieving process.
//Examples
//getLuckyNumber(25, 5) ➞ 13
//// Same set and procedure as in example in above instructions.
//
//getLuckyNumber(3, 2) ➞ 3
//// Original set = 1, 2, 3
//// After first step = 1, 3
//// No more steps possibles (filter is for every third element, length of set is 2)
//// The second (nth) element is 3
//
//getLuckyNumber(120, 13) ➞ 49
//// Same set as in animated gif in above instructions.
//Notes
//Check Resources tab for more info on lucky numbers.
//Every given size and nth are valid parameters to return a lucky number, there are no exceptions to handle.
//Despite this sieve has similarities with the "Sieve of Eratosthenes" used for retrieving prime numbers in the ancient Greece, it is more related to the ancient Josephus permutations challenge (as in this exercise or this one): is it in fact usually called "The Josephus Flavius Sieve".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getLuckyNumber(25, 5), 13, "Example #1")
//Test.assertEquals(getLuckyNumber(3, 2), 3, "Example #2")
//Test.assertEquals(getLuckyNumber(120, 13), 49, "Example #3")
//Test.assertEquals(getLuckyNumber(350, 27), 127)
//Test.assertEquals(getLuckyNumber(700, 40), 201)
//Test.assertEquals(getLuckyNumber(1000, 57), 303)
//Test.assertEquals(getLuckyNumber(5000, 90), 535)

