

//title: IndexOf and LastIndexOf

//tags: algorithms,functional_programming,regex,strings

//url: https://edabit.com/challenge/5TFPM2uorcu5nHnbv

//Description:
//Your task is to recreate two functions from String.object (indexOf() and lastIndexOf()).
//str.indexOf(searchValue[, fromIndex])
//This function will accept a string and regex as searched value, take a look at target string and return the first index if there is a match.
//searchValue is a string or a regex object representing the value to be searched.
//fromIndex is an optional parameter indicating the starting point (beginning from left) of your search.
//If any value matches, return the first index found, else return -1.
//str.lastIndexOf(searchValue[, fromIndex])
//This function is the same as indexOf except it will return the last index if there is a match.
//searchValue is a string or a regex object representing the value to be searched.
//fromIndex is an optional parameter indicating the index of beginning of matched strings.
//For example, with regex you can try to find all matches in the string but the lastIndexOf function must return the index of the character at the fromIndex parameter or lower.
//If any value matches, return the last index found, else return -1.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const strList = ["edabit challenge edabit","edabitibade","challengesChallengeschallenges","Hello Worlddlrow olleh\n."]
//Test.assertEquals(strList[0].indexOf(''),0);
//Test.assertEquals(strList[0].indexOf('eda'),0);
//Test.assertEquals(strList[0].indexOf('eda',1),17);
//Test.assertEquals(strList[0].indexOf('e',1),12);
//Test.assertEquals(strList[0].indexOf('e'),0);
//Test.assertEquals(strList[0].indexOf('edabit challenge'),0);
//Test.assertEquals(strList[1].indexOf('biti',1),3);
//Test.assertEquals(strList[1].indexOf('biti',-1),3);
//Test.assertEquals(strList[1].indexOf('biti',3),3);
//Test.assertEquals(strList[1].indexOf('biti',4),-1);
//Test.assertEquals(strList[1].indexOf('b'),3);
//Test.assertEquals(strList[1].indexOf('b',4),7);
//Test.assertEquals(strList[2].indexOf(/cha/),0);
//Test.assertEquals(strList[2].indexOf(/cha/,1),20);
//Test.assertEquals(strList[2].indexOf(/cha/i,1),10);
//Test.assertEquals(strList[2].indexOf(/[cha]{3}/gi),0);
//Test.assertEquals(strList[2].indexOf(/[Cse]{3}/),8);
//Test.assertEquals(strList[2].indexOf(/[sse]{3}/),-1);
//Test.assertEquals(strList[3].indexOf(/Hello world/),-1);
//Test.assertEquals(strList[3].indexOf(/Hello World/), 0);
//Test.assertEquals(strList[3].indexOf(/(?:Olleh\.\.?)/), -1);
//Test.assertEquals(strList[3].indexOf(/(?:olleh\.?)/), 17);
//Test.assertEquals(strList[3].indexOf(/[eo]ll/), 1);
//Test.assertEquals(strList[3].indexOf(/[ow] ?[ow]/), 14);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Palindrome Phrase

//tags: logic,recursion,strings,validation

//url: https://edabit.com/challenge/NmmKFQWA9dzWz5can

//Description:
//A palindrome is a series of letters or numbers that reads equivocally backwards. Write a recursive function that determines whether a given string is a palindrome or not.
//Examples
//isPalindrome("Go hang a salami, I'm a lasagna hog!") ➞ true
//
//isPalindrome("This phrase, surely, is not a palindrome!") ➞ false
//
//isPalindrome("Eva, can I see bees in a cave?") ➞ true
//Notes
//Symbols and special characters should be ignored.
//You are expected to solve this challenge via recursion.
//You can check on the Resources tab for more details about recursion.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(isPalindrome), false, "Recursion is required!")
//​
//let [strVector, resVector] = [
//  [
//    "Maneuquenam", "Not a palindrome", "A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!",
//    "Go hang a salami, I'm a lasagna hog!", "This phrase is really this!", "Red rum, sir, is murder.",
//    "Big step on no pets, Gib!", "One true fortune, but no!", "Don't nod.", "I did, did I?", "My gym.",
//    "Top spot.", "Was it a cat I saw?", "No lemon, no melon.", "Eva, can I see bees in a cave?",
//    "Can I be iconic?", "Madam I'm Adam.", "The man on the moon are them.", "Sit on a potato pan, Otis.",
//    "Truly, a classic cadillac!", "Able was I, ere I saw Elba.", "Step on no pets!"
//  ], [
//    true, false, true, true, false, true, true, false, true, true, true,
//    true, true, true, true, false, true, false, true, false, true, true
//  ]
//]
//for (let i in strVector) Test.assertEquals(isPalindrome(strVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Dates of Easter

//tags: algorithms,math

//url: https://edabit.com/challenge/TxJNFWzAk4cgGQqWT

//Description:
//The Christian holiday of Easter Sunday is a movable feast. It can occur on any date from March 22 to April 25. The date depends on the timing between the Paschal Full Moon and the spring equinox. It wasn't until the late 19th century that a formula was developed to accurately predict Easter's date for a given year.
//Your task is to use this formula, also known as Butcher's Algorithm, to write a function that will return the date of Easter for any year after 1600. See the Resources tab for a detailed description of the algorithm.
//Examples
//easterDate(1600) ➞ "April 2"
//
//easterDate(2020) ➞ "April 12"
//
//easterDate(1853) ➞ "March 27"
//
//easterDate(3535) ➞ "April 14"
//Notes
//Before 1600 the Julian calendar was used in most countries. The algorithm we're using is based on the Gregorian calendar, which is still in use today.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(easterDate(1715), "April 21")
//Test.assertEquals(easterDate(1758), "March 26")
//Test.assertEquals(easterDate(1872), "March 31")
//Test.assertEquals(easterDate(1899), "April 2")
//Test.assertEquals(easterDate(1900), "April 15")
//Test.assertEquals(easterDate(1944), "April 9")
//Test.assertEquals(easterDate(1989), "March 26")
//Test.assertEquals(easterDate(2000), "April 23")
//Test.assertEquals(easterDate(2070), "March 30")
//Test.assertEquals(easterDate(2099), "April 12")
//Test.assertEquals(easterDate(6009), "April 12")
//Test.assertEquals(easterDate(9999), "March 28")

