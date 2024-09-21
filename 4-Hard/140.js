

//title: Learn Lodash: _.camelCase, Turn a String to camelCase

//tags: regex,strings

//url: https://edabit.com/challenge/fdfdgjo6vFYSunMdr

//Description:
//According to the lodash documentation, _.camelCase turns a string into camelcase. Your task is to recreate lodash's camel case with your own function using vanilla JavaScript.
//There is already a camel case challenge on Edabit but lodash's version is much more robust. It can tell if a string is already camel case and if so it just returns the string. It can also handle numbers and capitalized letters that are next to one another.
//Use Case
//Sometimes I want to create a new variable with a name that is a combination of other variable names. Say I want to know user1's date of birth and I have two variables, user1 and dateOfBirth. If I combine them I get user1dateOfBirth which is an invalid format for my application. I would use _.startCase("user1" + "dateOfBirth") and I would get user1DateOfBirth.
//Examples
//camelCase("Foo Bar") ➞ "fooBar"
//
//camelCase("--foo-bar--") ➞ "fooBar"
//
//camelCase("__FOO_BAR__") ➞ "fooBar"
//Notes
//Do not attempt to import lodash; you are simply writing your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(camelCase("fooBar"), "fooBar")
//Test.assertEquals(camelCase("Foo      Bar"), "fooBar")
//Test.assertEquals(camelCase("--foo-bar--"), "fooBar")
//Test.assertEquals(camelCase("__FOO_BAR__-"), "fooBar")
//Test.assertEquals(camelCase("foo123Bar"), "foo123Bar")
//Test.assertEquals(camelCase("foo123Bar"), "foo123Bar")
//Test.assertEquals(camelCase("foo_Bar"), "fooBar")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Battle Game

//tags: games,numbers

//url: https://edabit.com/challenge/5N2g3vGhjhy2QcviD

//Description:
//You were bored, so you decided to try out a new game you recently downloaded. There are five types of characters, each with their own level of attack power, defense, and speed. There are also five types of armor, weapons, and boots. Each type of item has a different cost of gold and a different level of attack power, defense or speed.
//Create a function that takes the type of character and the amount of gold. The function should return the maximum amount of attack power possible, the maximum amount of defense possible, and the maximum speed possible in an array, in that order.
//Examples
//maxStats("Robot", 160) ➞ [210, 220, 26]
//
//maxStats("Fairy", 50) ➞ [91, 120, 22]
//
//maxStats("Warrior", 70) ➞ [210, 211, 14]
//Notes
//Calculate the attack power, defense, and speed seperately. Do not calculate combinations of items.
//Check the Resources tab for the array of characters and items.
//Hint: Add the character's stats to the items' stats for the result.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(maxStats("Robot", 160), [210, 220, 26])
//Test.assertSimilar(maxStats("Knight", 80), [160, 180, 15])
//Test.assertSimilar(maxStats("Giant", 200), [210, 300, 19])
//Test.assertSimilar(maxStats("Fairy", 90), [111, 160, 25])
//Test.assertSimilar(maxStats("Warrior", 110), [230, 131, 20])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Farthest Hamming Anagrams

//tags: conditions,strings,validation

//url: https://edabit.com/challenge/exX3Y9T68wGvLEPHL

//Description:
//An anagram is a word, x, formed by rearranging the letters that make up another word, y, and using up all the letters in y at the same frequency. For example, "dear" is an anagram of "read" and "plead" is an anagram of "paled".
//The Hamming distance between two strings is the number of positions at which they differ. Hamming distances can only be calculated for strings of equal length.
//let s1 = "eleven"
//
//let s2 = "twelve"
//They only have the third position (index 2) in common, giving them a Hamming distance of 5.
//As anagrams are of identical length, the Hamming distance between them can be calculated.
//let s1 = "read"
//
//let s2 = "dear"
//These strings differ at the first and last positions, giving them a Hamming distance of 2. "Plead" and "paled" have a Hamming distance of 3.
//Create a function that takes two strings, and returns:
//true if they are anagrams of each other and their Hamming distance is equal to their length (i.e. no letters in the same positions).
//false if they aren't anagrams, or
//Their Hamming distance if they are anagrams with >=1 letter at the same index.
//Examples
//maxHam("dear", "read") ➞ 2
//
//maxHam("dare", "read") ➞ true
//
//maxHam("solemn", "molest") ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(maxHam('dare','read'), true)
//Test.assertEquals(maxHam('dear','read'), 2)
//Test.assertEquals(maxHam('naive','ravine'), false)
//Test.assertEquals(maxHam('observe','verbose'), 6)
//Test.assertEquals(maxHam('mister','remits'), true)
//Test.assertEquals(maxHam('pirates','traipse'), true)
//Test.assertEquals(maxHam('petal','leapt'), 4)
//Test.assertEquals(maxHam('solemn','molest'), false)
//Test.assertEquals(maxHam('solemn','melons'), 5)
//Test.assertEquals(maxHam('solemn','lemons'), true)
//Test.assertEquals(maxHam('emigrants','streaming'), true)
//Test.assertEquals(maxHam('teardrop','predated'), false)

