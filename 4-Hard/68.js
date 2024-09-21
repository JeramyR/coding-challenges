

//title: No Good Numbers

//tags: conditions,language_fundamentals

//url: https://edabit.com/challenge/eaf8EaFRPwKNGqwZF

//Description:
//A positive number's population is the sum of 1's in its binary representation.
//An evil number has an even numbered population.
//An odious number has an odd numbered population.
//A number is pernicious if its population is a prime number.
//Create a function that takes a number as an argument and returns a sorted array of all its descriptors ("Evil", "Odious", or "Pernicious").
//Examples
//howBad(7) ➞ ["Odious", "Pernicious"]
//// 7 in binary is "111".
//// 1 + 1 + 1 = 3 in "111" means "Odious" should be added to the array answer.
//// 3 is a prime number, meaning "Pernicious" should also be added.
//
//howBad(17) ➞ ["Evil", "Pernicious"]
//// 17 in binary is "10001".
//// 1 + 1 = 2 in "10001" means "Evil" should be added to the array answer.
//// 2 is a prime number, meaning "Pernicious" should also be added.
//
//howBad(23) ➞ ["Evil"]
//// 23 in binary is "10111".
//// Four 1's in "10111" means "Evil" should be added to the array answer.
//// 4 is not a prime number, meaning "Pernicious" should not be added.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(howBad(7), ['Odious','Pernicious'])
//Test.assertSimilar(howBad(97), ['Odious','Pernicious'])
//Test.assertSimilar(howBad(66), ['Evil','Pernicious'])
//Test.assertSimilar(howBad(77), ['Evil'])
//Test.assertSimilar(howBad(128), ['Odious'])
//Test.assertSimilar(howBad(666), ['Odious','Pernicious'], "666 is not evil after all!")
//Test.assertSimilar(howBad(987654321), ['Odious','Pernicious'])
//Test.assertSimilar(howBad(98765), ['Evil'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of v0w3ls

//tags: language_fundamentals,logic,math,numbers

//url: https://edabit.com/challenge/PrvFxnBvedPweuK2E

//Description:
//Create a function that takes a string and returns the sum of vowels, where some vowels are considered numbers.
//Vowel	Number
//A	4
//E	3
//I	1
//O	0
//Examples
//sumOfVowels("Let\'s test this function.") ➞ 8
//
//sumOfVowels("Do I get the correct output?") ➞ 10
//
//sumOfVowels("I love edabit!") ➞ 12
//Notes
//Vowels are case-insensitive (e.g. A = 4 and a = 4).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumOfVowels('Let\'s test this function.'), 8,'\"Let\'s test this function.\"\n')
//Test.assertEquals(sumOfVowels('Do I get the correct output?'), 10,'\"Do I get the correct output?\"\n')
//Test.assertEquals(sumOfVowels('I love edabit!'), 12,'\"I love edabit!\"\n')
//Test.assertEquals(sumOfVowels('Will you still need me, will you still feed me when I\'m 64?'), 26,'\"Will you still need me, will you still feed me when I\'m 64?\"\n')
//Test.assertEquals(sumOfVowels('The greatest glory in living lies not in never falling, but in rising every time we fall.'), 52,'\"The greatest glory in living lies not in never falling, but in rising every time we fall.\"\n')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Anonymous Name

//tags: arrays,loops,strings

//url: https://edabit.com/challenge/mDtrDtY3JCPmEv9jt

//Description:
//You are in the process of creating a chat application and want to add an anonymous name feature. This anonymous name feature will create an alias that consists of two capitalized words beginning with the same letter as the users first name.
//Create a function that determines if the array of users is mapped to an array of anonymous names correctly.
//Examples
//isCorrectAliases(["Adrian M.", "Harriet S.", "Mandy T."], ["Amazing Artichoke", "Hopeful Hedgehog", "Marvelous Mouse"]) ➞ true
//
//isCorrectAliases(["Rachel F.", "Pam G.", "Fred Z.", "Nancy K."]) ➞ ["Reassuring Rat", "Peaceful Panda", "Fantastic Frog", "Notable Nickel"] ➞ true
//
//isCorrectAliases(["Beth T."]), ["Brandishing Mimosa"]) ➞ false
//// Both words in "Brandishing Mimosa" should begin with a "B" - "Brandishing Beaver" would do the trick.
//Notes
//Both words in the alias should be capitalized.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isCorrectAliases(['Adrian M.', 'Harriet S.', 'Mandy T.'], ['Amazing Artichoke', 'Hopeful Hedgehog', 'Marvelous Mouse']), true)
//Test.assertEquals(isCorrectAliases(['Rachel F.', 'Pam G.', 'Fred Z.', 'Nancy K.'], ['Reassuring Rat', 'Peaceful Panda', 'Fantastic Frog', 'Notable Nickel']), true)
//Test.assertEquals(isCorrectAliases(['Beth T.'], ['Brandishing Mimosa']), false)
//Test.assertEquals(isCorrectAliases(['Mick S.', 'Sam R.', 'Val W.'], ['Magnificent Mint', 'Sly Serpent', 'Victorious Viceroy']), true)
//Test.assertEquals(isCorrectAliases(['Bella T.', 'Tom H.', 'Ben C.'], ['Beautiful Barn', 'Talented Tapestry', 'Cool Bamboo']), false)
//Test.assertEquals(isCorrectAliases(['Bella T.', 'Tom H.', 'Ben C.'], ['Beautiful Barn', 'Talented Tapestry', 'Bountiful Bamboo']), true)

