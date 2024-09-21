

//title: Sum of Digits of a Positive Integer

//tags: algorithms,bugs,recursion

//url: https://edabit.com/challenge/qQisvy6FCgvPuMpWz

//Description:
//An instructor has given her student an assignment to calculate the sum of the digits of a positive integer using recursion.The student came up with the solution but the solution does not seem to be correct. Help her fix the error.
//Examples
//sumDigit(111) ➞ 3
//// 1 + 1 + 1 = 3
//
//sumDigit(222) ➞ 6
//// 2 + 2 + 2 = 6
//
//sumDigit(333) ➞ 9
//// 3 + 3 + 3 = 9
//Notes
//Input is a positive integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumDigit(111),3)
//Test.assertEquals(sumDigit(222),6)
//Test.assertEquals(sumDigit(333),9)
//Test.assertEquals(sumDigit(444),12)
//Test.assertEquals(sumDigit(555),15)
//Test.assertEquals(sumDigit(666),18)
//Test.assertEquals(sumDigit(777),21)
//Test.assertEquals(sumDigit(888),24)
//Test.assertEquals(sumDigit(999),27)
//Test.assertEquals(sumDigit(1111),4)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Word Nests

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/yDQnwtscs6sRi27we

//Description:
//A word nest is created by taking a starting word, and generating a new string by placing the word inside itself. This process is then repeated.
//Nesting 3 times with the word "incredible":
//start  = incredible
//first  = incre|incredible|dible
//second = increin|incredible|credibledible
//third  = increinincr|incredible|ediblecredibledible
//The final nest is "increinincrincredibleediblecredibledible" (depth = 3).
//Given a starting word and the final word nest, return the depth of the word nest.
//Examples
//wordNest("floor", "floor") ➞ 0
//
//wordNest("code", "cocodccococodededeodeede") ➞ 5
//
//wordNest("incredible", "increinincrincredibleediblecredibledible") ➞ 3
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(wordNest("engagement", "engenengagemengagemeengagementntentgagementagement"), 4)
//Test.assertEquals(wordNest("passage", "passpassageage"), 1)
//Test.assertEquals(wordNest("factory", "ffacfactofactfafactoryctoryoryrytoryactory"), 5)
//Test.assertEquals(wordNest("deny", "ddededdddenyenyenyenynynyeny"), 6)
//Test.assertEquals(wordNest("jinx", "jijijjijjijijjinxinxnxnxinxnxinxnxnx"), 8)
//Test.assertEquals(wordNest("deal", "dedddealealealal"), 3)
//Test.assertEquals(wordNest("paradox", "parparaparadoxdoxadox"), 2)
//Test.assertEquals(wordNest("meet", "mmememmeeteeteteteet"), 4)
//Test.assertEquals(wordNest("last", "lalastst"), 1)
//Test.assertEquals(wordNest("silence", "sisilsisilencelenceencelence"), 3)
//Test.assertEquals(wordNest("inflate", "inflate"), 0)
//Test.assertEquals(wordNest("ruin", "rurrurrrrrrururuinininuinuinuinuinuininuinin"), 10)
//Test.assertEquals(wordNest("episode", "episoepisepisepiepiepiepisoepisodedesodesodesodeodeodede"), 7)
//Test.assertEquals(wordNest("dictate", "dictadicdidictdiddictadictadictateteteictatectateatectatetatete"), 8)
//Test.assertEquals(wordNest("caller", "callcacacalccallcacaccallerallerllerllererallerlerllerllerer"), 9)
//Test.assertEquals(wordNest("sweater", "sweatsweswsweatereateraterer"), 3)
//Test.assertEquals(wordNest("measure", "measumememeasumemmeasmmeasureeasureureeasureasurereasureasurere"), 8)
//Test.assertEquals(wordNest("relieve", "relierelierelrelierrelieveelieveveieveveve"), 5)
//Test.assertEquals(wordNest("home", "hohohohhohohhhohhomeomemeomeomememeomemememe"), 10)
//Test.assertEquals(wordNest("profession", "profesprofessionsion"), 1)
//Test.assertEquals(wordNest("continuous", "contcontcontinuoconcocontinuousntinuoustinuoususinuousinuous"), 5)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Card Counting (BlackJack)

//tags: algebra,conditions,games,loops

//url: https://edabit.com/challenge/3kzhTP7nEwcaKP82H

//Description:
//In BlackJack, cards are counted with -1, 0, 1 values:
//2, 3, 4, 5, 6 are counted as +1
//7, 8, 9 are counted as 0
//10, J, Q, K, A are counted as -1
//Create a function that counts the number and returns it from the array of cards provided.
//Examples
//count([5, 9, 10, 3, "J", "A", 4, 8, 5]) ➞ 1
//
//count(["A", "A", "K", "Q", "Q", "J"]) ➞ -6
//
//count(["A", 5, 5, 2, 6, 2, 3, 8, 9, 7]) ➞ 5
//Notes
//String inputs will always be upper case.
//You do not need to consider case sensitivity.
//If the argument is empty, return 0.
//No input other than: 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(count([5, 9, 10, 3, 'J', 'A', 4, 8, 5]), 1, 'Example 1')
//Test.assertEquals(count(['A', 'A', 'K', 'Q', 'Q', 'J']), -6, 'Example 2')
//Test.assertEquals(count(['A', 5, 5, 2, 6, 2, 3, 8, 9, 7]), 5, 'Example 3')
//Test.assertEquals(count([2, 2, 2, 2, 2, 2, 2, 2]), 8)
//Test.assertEquals(count([]), 0)
//Test.assertEquals(count(['A', 'A', 'A', 'A', 'A', 'A', 'A']), -7)
//Test.assertEquals(count(['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2]), 0)

