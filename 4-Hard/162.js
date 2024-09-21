

//title: Body Mass Index

//tags: math,strings

//url: https://edabit.com/challenge/rfjyk42gRWu2RBHhm

//Description:
//Body Mass Index (BMI) is found by taking your weight in kilograms and dividing by the square of your height in meters. The BMI categories are:
//Underweight: <18.5
//Normal weight: 18.5–24.9
//Overweight: 25–29.9
//Obesity: BMI of 30 or greater
//Create a function that will accept weight and height (in kilos, pounds, meters, or inches) and return the BMI and the associated category. Round the BMI to nearest tenth.
//Examples
//BMI("205 pounds", "73 inches") ➞ "27.0 Overweight"
//
//BMI("55 kilos", "1.65 meters") ➞ "20.2 Normal weight"
//
//BMI("154 pounds", "2 meters") ➞ "17.5 Underweight"
//Notes
//1 inch = 0.0254 meter
//1 pound = 0.453592 kilo

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(BMI("53.3 kilos","1.7 meters"), "18.4 Underweight")
//Test.assertEquals(BMI("76.8 kilos","1.6 meters"), "30.0 Obesity")
//Test.assertEquals(BMI("53.5 kilos","1.7 meters"), "18.5 Normal weight")
//Test.assertEquals(BMI("155 pounds","73 inches"), "20.4 Normal weight")
//Test.assertEquals(BMI("175 pounds","70 inches"), "25.1 Overweight")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Word Game Using First/Last Letter

//tags: arrays,games,strings

//url: https://edabit.com/challenge/pgN9GtB8GacdGAcDy

//Description:
//Create a function that takes an array of player 1's words p1 and an array of player 2's words p2. Player 1 will always play first and will give a word. Player 2 must then give another word that begins with the end letter of the last word used. The first player to use a duplicate word, or use a word that does not begin with the last word's end, loses.
//Examples
//wordGame(["edabit", "yellow", "growing"], ["tangy", "wedding", "round"]) ➞ "Player 1 wins!"
//// Round does not begin with "g".
//
//wordGame(["edabit", "yellow", "growing", "dart", "tangy"], ["tangy", "wedding", "ground", "toast", "yellow"]) ➞ "Player 2 wins!"
//// Although player 2 repeated "yellow", player 1 repeated "tangy" first.
//
//wordGame(["edabit", "yellow", "growing"], ["tangy", "wedding", "ground"]) ➞ "Game Continues..."
//// No winner yet.
//Notes
//All words will be lowercase and there will be equal words used by each player, regardless of whether a player has won.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(wordGame(["edabit", "yellow", "growing"], ["tangy", "wedding", "ground"]), "Game continues...")
//Test.assertEquals(wordGame(["edabit", "yellow", "rowing"], ["tangy", "wedding", "ground"]), "Player 2 wins!")
//Test.assertEquals(wordGame(["edabit", "yellow", "growing"], ["tangy", "wedding", "round"]), "Player 1 wins!")
//Test.assertEquals(wordGame(["edabit", "yellow", "growing", "dart"], ["tangy", "wedding", "ground", "tangy"]), "Player 1 wins!")
//Test.assertEquals(wordGame(["edabit", "yellow", "growing", "dart", "tangy"], ["tangy", "wedding", "ground", "toast", "yellow"]), "Player 2 wins!")
//Test.assertEquals(wordGame(['banana', 'elephant', 'orange', 'elope',  'tiger',  'elipse', 'elevate',  'trust',  'time'], ['apple',  'tornado',  'ewe',  'event',  'rose', 'eradicate',  'eat',  'tonight',  'love']), "Player 1 wins!")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sentence Searcher

//tags: loops,regex,strings

//url: https://edabit.com/challenge/cLpDSS2HwAq86wgyv

//Description:
//Create a function that returns the whole of the first sentence which contains a specific word. Include the full stop at the end of the sentence.
//Examples
//const str = "I have a cat. I have a mat. Things are going swell."
//
//sentenceSearcher(str, "have") ➞ "I have a cat."
//
//sentenceSearcher(str, "MAT") ➞ "I have a mat."
//
//sentenceSearcher(str, "things") ➞ "Things are going swell."
//
//sentenceSearcher(str, "flat") ➞ ""
//Notes
//Sentences will always end with a period.
//Your function should not be case sensitive.
//Return an empty string if the word isn't found in the sentence.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const txt = "I have a cat. I have a mat. Things are going swell."
//​
//Test.assertEquals(sentenceSearcher(txt, "cat"), "I have a cat.")
//Test.assertEquals(sentenceSearcher(txt, "MAT"), "I have a mat.")
//Test.assertEquals(sentenceSearcher(txt, "Have"), "I have a cat.")
//Test.assertEquals(sentenceSearcher(txt, "swell"), "Things are going swell.")
//Test.assertEquals(sentenceSearcher(txt, "things"), "Things are going swell.")
//Test.assertEquals(sentenceSearcher(txt, "flat"), "")
//​
//// Author: Joshua Señoron

