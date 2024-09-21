

//title: Don`t Roll Doubles!

//tags: algorithms,arrays,games,loops

//url: https://edabit.com/challenge/chy94ZtNqzAHMSXoW

//Description:
//John is playing a dice game. The rules are as follows.
//Roll two dice.
//Add the numbers on the dice together.
//Add the total to your overall score.
//Repeat this for three rounds.
//But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!
//Create a function which takes in a matrix as input, and return John's score after his game has ended.
//Examples
//diceGame([[1, 2], [3, 4], [5, 6]]) ➞ 21
//
//diceGame([[1, 1], [5, 6], [6, 4]]) ➞ 0
//
//diceGame([[4, 5], [4, 5], [4, 5]]) ➞ 27
//Notes
//Ignore all other arrays in the matrix if a throw happens to be doubles and go straight to returning 0.
//John only has two dice and will always give you outcomes for three rounds.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(diceGame([[1, 2], [3, 4], [5, 6]]), 21)
//Test.assertEquals(diceGame([[1, 1], [5, 6], [6, 4]]), 0)
//Test.assertEquals(diceGame([[4, 5], [4, 5], [4, 5]]), 27)
//Test.assertEquals(diceGame([[1, 3], [4, 3], [5, 2]]), 18)
//Test.assertEquals(diceGame([[1, 3], [4, 3], [5, 5]]), 0)
//Test.assertEquals(diceGame([[1, 3], [4, 4], [5, 2]]), 0)
//Test.assertEquals(diceGame([[5, 6], [5, 6], [5, 6]]), 33)
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Upper or Lower Case

//tags: loops,strings

//url: https://edabit.com/challenge/GYfnaQhSmZWLEMx6P

//Description:
//Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.
//Examples
//stepsToConvert("abC") ➞ 1
//// "abC" converted to "abc" in 1 step
//
//stepsToConvert("abCBA") ➞ 2
//// "abCBA" converted to "ABCBA" in 2 steps
//
//stepsToConvert("aba") ➞ 0
//
//stepsToConvert("abaCCC") ➞ 3
//Notes
//Return 0 if empty string.
//Return 0 if the string is already entirely in one case.
//Only alphabetic characters.
//Input has no spaces.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(stepsToConvert('abC'), 1);
//Test.assertEquals(stepsToConvert('abCBA'), 2);
//Test.assertEquals(stepsToConvert('aba'), 0);
//Test.assertEquals(stepsToConvert('ABA'), 0);
//Test.assertEquals(stepsToConvert('abaCCC'), 3);
//Test.assertEquals(stepsToConvert('abaaCCCDE'), 4);
//Test.assertEquals(stepsToConvert('CCaaCCaaCa'), 5);
//Test.assertEquals(stepsToConvert(''), 0, 'Return 0 if empty string.');

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Twitter Link Finder

//tags: formatting,regex

//url: https://edabit.com/challenge/zCkag8556FAjJ6W4L

//Description:
//Your job is to make a "Twitter link" regular expression rx. This RegEx searches a tweet to find the @handle and the #handle.
//The function is already written in the Tests tab, so you only need to provide the RegEx variable in the Code tab.
//Only return the @ and # handles.
//Examples
//tweet("Visit us at @edabit") ➞ "@edabit"
//
//tweet("Follow @JavaScript") ➞ "@JavaScript"
//
//tweet("#Honesty is the best @policy!!") ➞ "#Honesty @policy"
//Notes
//Make sure the RegEx doesn't return . , ! ?, etc.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const tweet = str => str.match(rx).join` `;
//​
//[
//[ 'Visit us at @edabit', '@edabit' ],
//[ 'This is #definitely, the @second test', '#definitely @second' ],
//[ '#Finally, a test!', '#Finally' ],
//[ '#Paris is the capital of #France.', '#Paris #France' ],
//[ 'The @committee consists of #eminent #jurists.',
//  '@committee #eminent #jurists'],
//[ '#Honesty is the best @policy!!', '#Honesty @policy' ],
//[ '@RonaldRoss was awarded the Nobel Prize for his work on the transmission of #malaria.',
//  '@RonaldRoss #malaria'],
//[ 'Follow @JavaScript', '@JavaScript' ]]
//  .forEach(x => Test.assertEquals(tweet(x[0]), x[1]));

