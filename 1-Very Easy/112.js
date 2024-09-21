

//title: Fix the Error: Vowel Edition

//tags: bugs,regex,strings

//url: https://edabit.com/challenge/KgNMGbXXst7ZdWchR

//Description:
//Your friend is trying to write a function that removes all vowels from a string. They write:
//function removeVowels(str) {
//  return str.replace(/[aeiou]/, "")
//}
//However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.
//Examples
//removeVowels("candy") ➞ "cndy"
//
//removeVowels("hello") ➞ "hllo"
//// The "e" is removed, but the "o" is still there!
//
//removeVowels("apple") ➞ "pple"
//Notes
//All letters will be lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(removeVowels("ben"), "bn")
//Test.assertEquals(removeVowels("many"), "mny")
//Test.assertEquals(removeVowels("candy"), "cndy")
//Test.assertEquals(removeVowels("hello"), "hll")
//Test.assertEquals(removeVowels("apple"), "ppl")
//Test.assertEquals(removeVowels("fever"), "fvr")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Smaller String Number

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/uRtubbXsDHLwAz5RS

//Description:
//Create a function that returns the smaller number.
//Examples
//smallerNum("21", "44") ➞ "21"
//
//smallerNum("1500", "1") ➞ "1"
//
//smallerNum("5", "5") ➞ "5"
//Notes
//Numbers will be represented as strings, and your output should also be a string.
//If both numbers tie, return either number.
//Numbers will be positive.
//Bonus: See if you can do this without converting to integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(smallerNum("21", "44"), "21")
//Test.assertEquals(smallerNum("153", "367"), "153")
//Test.assertEquals(smallerNum("1500", "16"), "16")
//Test.assertEquals(smallerNum("100", "23"), "23")
//Test.assertEquals(smallerNum("1500", "1"), "1")
//Test.assertEquals(smallerNum("5", "5"), "5")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Convert Number to String of Dashes

//tags: loops,numbers,strings

//url: https://edabit.com/challenge/3cBe8af7yG2rzLEA2

//Description:
//Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
//Examples
//Go(1) ➞ "-"
//
//Go(5) ➞ "-----"
//
//Go(3) ➞ "---"
//Notes
//You will be provided integers ranging from 1 to 60.
//Don't forget to return your result as a string.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(Go(1),"-")
//Test.assertEquals(Go(2),"--")
//Test.assertEquals(Go(3),"---")
//Test.assertEquals(Go(4),"----")
//Test.assertEquals(Go(5),"-----")
//Test.assertEquals(Go(6),"------")
//Test.assertEquals(Go(7),"-------")
//Test.assertEquals(Go(8),"--------")
//Test.assertEquals(Go(9),"---------")
//Test.assertEquals(Go(10),"----------")
//Test.assertEquals(Go(11),"-----------")
//Test.assertEquals(Go(12),"------------")
//Test.assertEquals(Go(13),"-------------")
//Test.assertEquals(Go(14),"--------------")
//Test.assertEquals(Go(15),"---------------")
//Test.assertEquals(Go(16),"----------------")
//Test.assertEquals(Go(17),"-----------------")
//Test.assertEquals(Go(18),"------------------")
//Test.assertEquals(Go(19),"-------------------")
//Test.assertEquals(Go(20),"--------------------")
//Test.assertEquals(Go(21),"---------------------")
//Test.assertEquals(Go(22),"----------------------")
//Test.assertEquals(Go(23),"-----------------------")
//Test.assertEquals(Go(24),"------------------------")
//Test.assertEquals(Go(25),"-------------------------")

