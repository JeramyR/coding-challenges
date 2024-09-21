

//title: Cuban Prime

//tags: language_fundamentals,math

//url: https://edabit.com/challenge/TrPA4gmaeFoNLnySd

//Description:
//Create a function to check whether a given number is Cuban Prime. A cuban prime is a prime number that is a solution to one of two different specific equations involving third powers of x and y. For this challenge we are only concerned with the cuban numbers from the first equation. We ignore the cuban numbers from the second equation.
//Equation Form
//p = (x^3 - y^3)/(x - y), x  = y + 1, y > 0
//... and the first few cuban primes from this equation are 7, 19, 37, 61, 127, 271.
//Examples
//cubanPrime(7) ➞ "7 is cuban prime"
//
//cubanPrime(9) ➞ "9 is not cuban prime"
//
//cubanPrime(331) ➞ "331 is cuban prime"
//
//cubanPrime(40) ➞ "40 is not cuban prime"
//Notes
//The inputs are positive integers only.
//Check the Resources for help.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cubanPrime(7), "7 is cuban prime")
//Test.assertEquals(cubanPrime(11), "11 is not cuban prime")
//Test.assertEquals(cubanPrime(40), "40 is not cuban prime")
//Test.assertEquals(cubanPrime(15), "15 is not cuban prime")
//Test.assertEquals(cubanPrime(271), "271 is cuban prime")
//Test.assertEquals(cubanPrime(919), "919 is cuban prime")
//Test.assertEquals(cubanPrime(1801), "1801 is cuban prime")
//Test.assertEquals(cubanPrime(30), "30 is not cuban prime")
//Test.assertEquals(cubanPrime(721), "721 is not cuban prime")
//Test.assertEquals(cubanPrime(217), "217 is not cuban prime")
//Test.assertEquals(cubanPrime(4447), "4447 is cuban prime")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mangle the String

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/yLqEK5hZ8SGYe5TNR

//Description:
//Create a function that takes a string and replaces every letter with the letter following it in the alphabet ("c" becomes "d", "z" becomes "a", "b" becomes "c", etc). Then capitalize every vowel (a, e, i, o, u) and return the new modified string.
//Examples
//mangle("Fun times!") ➞ "GvO Ujnft!"
//
//mangle("The quick brown fox.") ➞ "UIf rvjdl cspxO gpy."
//
//mangle("Omega") ➞ "Pnfhb"
//Notes
//If a letter is already uppercase, return it as uppercase (regardless of being a vowel).
//"y" is not considered a vowel.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mangle("Fun times!"), "GvO Ujnft!")
//Test.assertEquals(mangle("The quick brown fox."), "UIf rvjdl cspxO gpy.")
//Test.assertEquals(mangle("Omega"), "Pnfhb")
//Test.assertEquals(mangle("I will never be this young again. Ever. Oh damn… I just got older."), "J xjmm Ofwfs cf UIjt zpvOh bhbjO. Fwfs. PI EbnO… J kvtU hpU pmEfs.")
//Test.assertEquals(mangle("Should we start class now, or should we wait for everyone to get here?"), "TIpvmE xf tUbsU dmbtt Opx, ps tIpvmE xf xbjU gps fwfszpOf Up hfU Ifsf?")
//Test.assertEquals(mangle("Check back tomorrow; I will see if the book has arrived."), "DIfdl cbdl Upnpsspx; J xjmm tff jg UIf cppl Ibt bssjwfE.")
//Test.assertEquals(mangle("The lake is a long way from here."), "UIf mblf jt b mpOh xbz gspn Ifsf.")
//Test.assertEquals(mangle("It was getting dark, and we weren’t there yet."), "JU xbt hfUUjOh Ebsl, bOE xf xfsfO’U UIfsf zfU.")
//Test.assertEquals(mangle("The mysterious diary records the voice."), "UIf nztUfsjpvt Ejbsz sfdpsEt UIf wpjdf.")
//Test.assertEquals(mangle("Cats are good pets, for they are clean and are not noisy."), "DbUt bsf hppE qfUt, gps UIfz bsf dmfbO bOE bsf OpU Opjtz.")
//Test.assertEquals(mangle("abcz"), "bcdA", "Don't forget that \"z\" becomes \"a\"!")
//Test.assertEquals(mangle("ABCZ"), "BCDA", "If a letter is already uppercase, return it as uppercase.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Natural Emptiness

//tags: arrays,math,numbers,recursion

//url: https://edabit.com/challenge/v8kd5jW9SG3uHZWNd

//Description:
//In abstract set theory, a construction due to von Neumann represents the natural numbers by sets, as follows:
//0 = [ ] is the empty set
//1 = 0 ∪ [ 0 ] = [ 0 ] = [ [ ] ]
//2 = 1 ∪ [ 1 ] = [ 0, 1 ] = [ [ ], [ [ ] ] ]
//n = n−1 ∪ [ n−1 ] = ...
//Write a function that receives an integer n and produces the representing set.
//Examples
//repSet(0) ➞ []
//
//repSet(1) ➞ [[]]
//
//repSet(2) ➞ [[], [[]]]
//
//repSet(3) ➞ [[], [[]], [[], [[ ]]]]
//Notes
//Make sure to use array brackets [,].
//A neat feature of this representation is that n < m precisely if the set representing n is contained in the set representing m.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(repSet(0), [])
//Test.assertSimilar(repSet(1), [[]])
//Test.assertSimilar(repSet(2), [[],[[]]])
//Test.assertSimilar(repSet(3), [[], [[]], [[],[[ ]]]])
//Test.assertSimilar(repSet(5), [[], [[]], [[], [[]]], [[], [[]], [[], [[]]]], [[], [[]], [[], [[]]], [[], [[]], [[], [[]]]]]])
//Test.assertSimilar(repSet(7), [[], [[]], [[], [[]]], [[], [[]], [[], [[]]]], [[], [[]], [[], [[]]], [[], [[]], [[], [[]]]]], [[], [[]], [[], [[]]], [[], [[]], [[], [[]]]], [[], [[]], [[], [[]]], [[], [[]], [[], [[]]]]]], [[], [[]], [[], [[]]], [[], [[]], [[], [[]]]], [[], [[]], [[], [[]]], [[], [[]], [[], [[]]]]], [[], [[]], [[], [[]]], [[], [[]], [[], [[]]]], [[], [[]], [[], [[]]], [[], [[]], [[], [[]]]]]]]])

