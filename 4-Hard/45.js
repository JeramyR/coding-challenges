

//title: Smiley Faces :)

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/eCmEgrKNtnfhpssQp

//Description:
//You will be given a string of characters containing only the following characters: ():
//Create a function that returns a number based on the number of sad and smiley faces there are.
//The happy faces :) and (: are worth 1.
//The sad faces :( and ): are worth -1.
//Working Example
//happinessNumber(":):(") ➞ -1
//// The first 2 characters are :)        +1      Total: 1
//// The next 2 are ):                    -1      Total: 0
//// The last 2 are :(                    -1       Total: -1
//Examples
//happinessNumber(":):(") ➞ -1
//
//happinessNumber("(:)") ➞ 2
//
//happinessNumber("::::") ➞ 0
//Notes
//All test cases will be valid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(happinessNumber(':):('), -1)
//Test.assertEquals(happinessNumber('(:)'), 2)
//Test.assertEquals(happinessNumber('::::'), 0)
//Test.assertEquals(happinessNumber(':)::(()::'), -2)
//Test.assertEquals(happinessNumber('))):'), -1)
//Test.assertEquals(happinessNumber(':):)('), 1)
//Test.assertEquals(happinessNumber(':(:(:()):'), -2)
//Test.assertEquals(happinessNumber('()((:())):'), -1)
//Test.assertEquals(happinessNumber(':(:)'), 1)
//Test.assertEquals(happinessNumber('(:):(:)(('), 2)
//Test.assertEquals(happinessNumber(':(:(:'), 0)
//Test.assertEquals(happinessNumber(')())(()'), 0)
//Test.assertEquals(happinessNumber(':()):'), -2)
//Test.assertEquals(happinessNumber('():(('), -2)
//Test.assertEquals(happinessNumber('::::(():('), -3)
//Test.assertEquals(happinessNumber(')(():((::'), -1)
//Test.assertEquals(happinessNumber('(::):('), 0)
//Test.assertEquals(happinessNumber('):()::('), -4)
//Test.assertEquals(happinessNumber(':::(:('), -1)
//Test.assertEquals(happinessNumber(')((:'), 1)
//Test.assertEquals(happinessNumber('(:::(:('), 0)
//Test.assertEquals(happinessNumber('))(:(:'), 1)
//Test.assertEquals(happinessNumber('::))(:('), 1)
//Test.assertEquals(happinessNumber('(((())))'), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Convert String to camelCase

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/xt4CMLpfFRuDTsJgC

//Description:
//Create a function that converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
//Examples
//toCamelCase("A-B-C") ➞ "ABC"
//
//toCamelCase("the-stealth-warrior") ➞ "theStealthWarrior"
//
//toCamelCase("The_Stealth_Warrior") ➞ "TheStealthWarrior"
//Notes
//An empty string as input "" should return an empty string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "Did not return correct value")
//Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "Did not return correct value")
//Test.assertEquals(toCamelCase("A-B-C"), "ABC", "Did not return correct value.")
//Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Secret Bases of Words

//tags: formatting,numbers,strings

//url: https://edabit.com/challenge/fxMe9pKFgfHgujahQ

//Description:
//In this challenge, you have to find the numeric value of a given word. Instead of the usual sum of Unicode values, you have to convert the whole word into a decimal number from a base equal to ten plus the position in the alphabet of the "highest" letter of the word (counting from a = 1 to z = 26).
//Given a word, implement a function that returns an integer being the decimal value obtained after the conversion from the word specific base, accordingly to the instructions above.
//Examples
//wordToDecimal("Edabit") ➞ 351010469
//// The highest letter of "Edabit" in the alphabet is "T"
//// "T" is the 20th letter of the alphabet: adding 10 the result is 30
//// "Edabit" in base-30 is equal to 351010469 in base-10
//
//wordToDecimal("JavaScript") ➞ 680575028284221
//// The highest letter of "JavaScript" in the alphabet is "v"
//// "v" is the 22nd letter of the alphabet: adding 10 the result is 32
//// "JavaScript" in base-32 is equal to 680575028284221 in base-10
//
//wordToDecimal("ZERO") ➞ 1652100
//// The highest letter of "ZERO" in the alphabet is "Z"
//// "Z" is the 26th letter of the alphabet: adding 10 the result is 36
//// "ZERO" in base-36 is equal to 1652100 in base-10
//Notes
//The bases that accept letters in their representation are those starting from 11 (using 10 digits and 1 letter) up to 36 (using 10 digits and 26 letters).
//JS Note: This challenge is thinked and designed to avoid results bigger than the max safe integer representable in JS, so that the BigInt() method will be not necessary to pass it.
//Every given word will be a valid one made of just letters, either lowercased or uppercased.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(wordToDecimal("Edabit"), 351010469, "Example #1")
//Test.assertEquals(wordToDecimal("JavaScript"), 680575028284221, "Example #2")
//Test.assertEquals(wordToDecimal("ZERO"), 1652100, "Example #3")
//Test.assertEquals(wordToDecimal("oNe"), 15589)
//Test.assertEquals(wordToDecimal("TwO"), 32661)
//Test.assertEquals(wordToDecimal("THRee"), 23973734)
//Test.assertEquals(wordToDecimal("Four"), 470886)
//Test.assertEquals(wordToDecimal("fIVe"), 510958)
//Test.assertEquals(wordToDecimal("SIx"), 33013)
//Test.assertEquals(wordToDecimal("seven"), 29851095)
//Test.assertEquals(wordToDecimal("eigHt"), 11840939)

