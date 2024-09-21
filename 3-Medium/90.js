

//title: First Before Second Letter

//tags: strings,validation

//url: https://edabit.com/challenge/ozRsLB9QpRkzuLSXJ

//Description:
//You are given three inputs: a string, one letter, and a second letter.
//Write a function that returns true if every instance of the first letter occurs before every instance of the second letter.
//Examples
//firstBeforeSecond("a rabbit jumps joyfully", "a", "j") ➞ true
//// every instance of "a" occurs before every instance of "j"
//
//firstBeforeSecond("knaves knew about waterfalls", "k", "w") ➞  true
//
//firstBeforeSecond("happy birthday", "a", "y") ➞ false
//// the "a" in "birthday" occurs after the "y" in "happy"
//
//firstBeforeSecond("precarious kangaroos", "k", "a") ➞ false
//Notes
//All strings will be in lower case.
//All strings will contain the first and second letters at least once.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(firstBeforeSecond("a rabbit jumps joyfully", "a", "j"), true)
//Test.assertEquals(firstBeforeSecond("knaves knew about waterfalls", "k", "w"), true)
//Test.assertEquals(firstBeforeSecond("maria makes money", "m", "o"), true)
//Test.assertEquals(firstBeforeSecond("the hostess made pecan pie", "h", "p"), true)
//Test.assertEquals(firstBeforeSecond("barry the butterfly flew away", "b", "f"), true)
//Test.assertEquals(firstBeforeSecond("moody muggles", "m", "g"), true)
//Test.assertEquals(firstBeforeSecond("happy birthday", "a", "y"), false)
//Test.assertEquals(firstBeforeSecond("precarious kangaroos", "k", "a"), false)
//Test.assertEquals(firstBeforeSecond("maria makes money", "m", "i"), false)
//Test.assertEquals(firstBeforeSecond("taken by the beautiful sunrise", "u", "s"), false)
//Test.assertEquals(firstBeforeSecond("sharp cheddar biscuit", "t", "s"), false)
//Test.assertEquals(firstBeforeSecond("moody muggles", "m", "o"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: GCD and LCM ( Part 1)

//tags: math,numbers

//url: https://edabit.com/challenge/M7PGwcinRM9ntmqPS

//Description:
//Create a function that takes two numbers as arguments and returns the Greatest Common Divisor (GCD) of the two numbers.
//Examples
//gcd(3, 5) ➞ 1
//
//gcd(14, 28) ➞ 14
//
//gcd(4, 18) ➞ 2
//Notes
//The GCD is the highest number that can divide both arguments without a remainder.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(gcd(6, 10), 2)
//Test.assertEquals(gcd(17, 85), 17)
//Test.assertEquals(gcd(18, 153), 9)
//Test.assertEquals(gcd(14, 14), 14)
//Test.assertEquals(gcd(6, 31), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: String Match by Two Letters

//tags: arrays,language_fundamentals,strings

//url: https://edabit.com/challenge/tWEsR6BY3qRFP3L8r

//Description:
//Create a function that takes two strings, a and b. Return the number of times the two strings contain the same two letters at the same index. The two letters must appear at consecutive indices.
//For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3, since the "bb", "ii", and "iz" appear at the same place in both strings.
//Examples
//strMatchBy2char("yytaazz", "yyjaaz") ➞ 3
//
//strMatchBy2char("edabit", "ed") ➞ 1
//
//strMatchBy2char("", "") ➞ 0
//Notes
//Don't forget to return the result.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(strMatchBy2char('jjcAAzz', 'jjBAAz'), 3, "Some matches")  
//Test.assertEquals(strMatchBy2char('ABcd', 'ABcD'), 2, "case matters")       
//Test.assertEquals(strMatchBy2char('ABc', 'Ajc'), 0, "No matches")       
//Test.assertEquals(strMatchBy2char('edabit', 'ed'), 1, "B in A")       
//Test.assertEquals(strMatchBy2char('ed', 'edabit'), 1, "A in B")       
//Test.assertEquals(strMatchBy2char('e', 'edabit'), 0, "1 char is not a match")       
//Test.assertEquals(strMatchBy2char('', 'edabit'), 0, "Empty string check")         
//Test.assertEquals(strMatchBy2char('AABBccDD', 'ABBBjjD'), 1, "Random string")     
//Test.assertEquals(strMatchBy2char('AAjjAAjj', 'iAjjAi'), 3, "Random string")    
//Test.assertEquals(strMatchBy2char('iAjjAi', 'AAjjAAjj'), 3, "Random string")
//​
//// Author: Serf

