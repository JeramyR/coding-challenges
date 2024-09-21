

//title: Convert to Hex

//tags: logic,loops,strings

//url: https://edabit.com/challenge/jBf8Nq259tBEgsz4X

//Description:
//Create a function that takes a string's characters as ASCII and returns each character's hexadecimal value as a string.
//Examples
//toHex("hello world") ➞ "68 65 6c 6c 6f 20 77 6f 72 6c 64"
//
//toHex("Big Boi") ➞ "42 69 67 20 42 6f 69"
//
//toHex("Marty Poppinson") ➞ "4d 61 72 74 79 20 50 6f 70 70 69 6e 73 6f 6e"
//Notes
//Each byte must be seperated by a space.
//All alpha hex characters must be lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(toHex("Big Boi"), "42 69 67 20 42 6f 69")
//Test.assertEquals(toHex("Marty Poppinson"), "4d 61 72 74 79 20 50 6f 70 70 69 6e 73 6f 6e")
//Test.assertEquals(toHex("abcdefghi"), "61 62 63 64 65 66 67 68 69")
//Test.assertEquals(toHex("oh dear"), "6f 68 20 64 65 61 72")
//Test.assertEquals(toHex("i hate C#"), "69 20 68 61 74 65 20 43 23")
//Test.assertEquals(toHex("i love C++ , not really"), "69 20 6c 6f 76 65 20 43 2b 2b 20 2c 20 6e 6f 74 20 72 65 61 6c 6c 79")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Positive Integer Into Base 2, 8 and 16

//tags: logic,recursion

//url: https://edabit.com/challenge/RkhnJZcFk9aqHJegN

//Description:
//Create a function that takes a positive integer number (one of base2, base8, or base16) and converts the integer into the given base and returns a string using recursion.
//Examples
//integerToString(10 , 2) ➞ "1010"
//// Base = 2
//
//integerToString(1642 , 8) ➞ "3152"
//// Base = 8
//
//integerToString(212 , 16) ➞ "d4"
//// Base = 16
//Notes
//Input is a positive integer and base = 2, 8, or 16.
//Please use recursion to solve this.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(integerToString(10, 2), "1010")
//Test.assertEquals(integerToString(1642, 8), "3152")
//Test.assertEquals(integerToString(102, 2), "1100110")
//Test.assertEquals(integerToString(212, 16), "d4")
//Test.assertEquals(integerToString(18, 2), "10010")
//Test.assertEquals(integerToString(3162, 16), "c5a")
//Test.assertEquals(integerToString(10, 8), "12")
//Test.assertEquals(integerToString(162, 8), "242")
//Test.assertEquals(integerToString(27, 2), "11011")
//Test.assertEquals(integerToString(4321, 16), "10e1")
//Test.assertEquals(integerToString(1622, 16), "656")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Ping Pong!

//tags: algorithms,arrays,games

//url: https://edabit.com/challenge/S7oxczk4Rtu99kaZ8

//Description:
//A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).
//Given an array of Ping!, create a function that inserts Pong! in between each element. Also:
//If win equals true, end the list with Pong!.
//If win equals false, end with Ping! instead.
//Examples
//pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]
//
//pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]
//
//pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
//Notes
//You will always return the ball (i.e. the Pongs are yours).
//Player 1 serves the ball and makes Ping!.
//Return an array of strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(pingPong(["Ping!", "Ping!", "Ping!"], true), ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"])
//Test.assertSimilar(pingPong(["Ping!", "Ping!"], false), ["Ping!", "Pong!", "Ping!"])
//Test.assertSimilar(pingPong(["Ping!"], true) , ["Ping!", "Pong!"])
//​
//// made by @Joshua Señoron

