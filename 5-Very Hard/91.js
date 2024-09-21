

//title: Difference Cipher

//tags: arrays,cryptography,loops,strings

//url: https://edabit.com/challenge/vzvh4papXafwAWSNS

//Description:
//It's time to send and receive secret messages.
//Create a single function that takes a string or an array and returns a coded or decoded message.
//The first letter of the string, or the first element of the array represents the Character Code of that letter. The next elements are the differences between the characters: e.g. A +3 --> C or z -1 --> y.
//Examples
//difCiph("Hello") ➞ [72, 29, 7, 0, 3]
//// H = 72, the difference between the H and e is 29 (upper- and lowercase).
//// The difference between the two l's is obviously 0.
//
//difCiph([ 72, 33, -73, 84, -12, -3, 13, -13, -68 ]) ➞ "Hi there!"
//
//difCiph("Sunshine") ➞ [83, 34, -7, 5, -11, 1, 5, -9]
//Notes
//The input of the function will always be a string or an array with numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(difCiph("How are you?"), [72, 39, 8, -87, 65, 17, -13, -69, 89, -10, 6, -54])
//Test.assertSimilar(difCiph("?"), [63])
//Test.assertSimilar(difCiph([84, 20,  -3,  -69,  78,  -9,  4,  -2,  1,  -6,  13,  6,  -3,  1,  -83,  65,  17,  -13,  -69,  83,  1,  -2,  -17,  13,  -7,  -2,  -55,  0 ]), "The neighbours are strange..")
//Test.assertSimilar(difCiph("It's a secret!"), [73, 43, -77, 76, -83, 65, -65, 83, -14, -2, 15, -13, 15, -83 ])
//Test.assertSimilar(difCiph([79, -4 ]), "OK")
//Test.assertSimilar(difCiph([84, 27,  -2,  2,  3,  0,  -3,  8,  -75,  -12,  19,  -19,  80,  -3,  -77,  73,  5,  -78,  84,  -12,  -3,  -69,  71,  -6,  17,  -14,  1,  9,  -64 ]), "Tomorrow, 3 pm in the garden.")
//Test.assertSimilar(difCiph(difCiph("Double test!")), "Double test!")
//Test.assertSimilar(difCiph("Sunshine"), [83, 34, -7, 5, -11, 1, 5, -9])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Queen Threat

//tags: arrays,games,loops

//url: https://edabit.com/challenge/mmFp6DWPRgfgkjmbX

//Description:
//Create a function that takes a character from a to h as the column number and an integer from 1 to 8 as the row number which together represent the location of a queen on a normal-sized chess board. Return this two dimensional 8x8 array.
//This array must consist of zeroes and ones. The ones are placed in positions where the queen can move in one move and zeroes represent positions on the board where it cannot.
//Examples
//checkBoard("a", 1) ➞ [
//  [1, 0, 0, 0, 0, 0, 0, 1],
//  [1, 0, 0, 0, 0, 0, 1, 0],
//  [1, 0, 0, 0, 0, 1, 0, 0],
//  [1, 0, 0, 0, 1, 0, 0, 0],
//  [1, 0, 0, 1, 0, 0, 0, 0],
//  [1, 0, 1, 0, 0, 0, 0, 0],
//  [1, 1, 0, 0, 0, 0, 0, 0],
//  [0, 1, 1, 1, 1, 1, 1, 1]
//]
//
//checkBoard("h", 4) ➞ [
//  [0, 0, 0, 1, 0, 0, 0, 1],
//  [0, 0, 0, 0, 1, 0, 0, 1],
//  [0, 0, 0, 0, 0, 1, 0, 1],
//  [0, 0, 0, 0, 0, 0, 1, 1],
//  [1, 1, 1, 1, 1, 1, 1, 0],
//  [0, 0, 0, 0, 0, 0, 1, 1],
//  [0, 0, 0, 0, 0, 1, 0, 1],
//  [0, 0, 0, 0, 1, 0, 0, 1]
//]
// 
//checkBoard("c", 8) ➞ [
//  [1, 1, 0, 1, 1, 1, 1, 1],
//  [0, 1, 1, 1, 0, 0, 0, 0],
//  [1, 0, 1, 0, 1, 0, 0, 0],
//  [0, 0, 1, 0, 0, 1, 0, 0],
//  [0, 0, 1, 0, 0, 0, 1, 0],
//  [0, 0, 1, 0, 0, 0, 0, 1],
//  [0, 0, 1, 0, 0, 0, 0, 0],
//  [0, 0, 1, 0, 0, 0, 0, 0]
//]
//Notes
//The queens' current position is a zero as it is impossible to move to this position during one turn, because the queen is already there.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(checkBoard('a', 5), 
//  [
//    [1, 0, 0, 1, 0, 0, 0, 0],
//    [1, 0, 1, 0, 0, 0, 0, 0],
//    [1, 1, 0, 0, 0, 0, 0, 0],
//    [0, 1, 1, 1, 1, 1, 1, 1],
//    [1, 1, 0, 0, 0, 0, 0, 0],
//    [1, 0, 1, 0, 0, 0, 0, 0],
//    [1, 0, 0, 1, 0, 0, 0, 0],
//    [1, 0, 0, 0, 1, 0, 0, 0]
//  ])
//Test.assertSimilar(checkBoard('f', 1), 
//  [
//    [0, 0, 0, 0, 0, 1, 0, 0],
//    [0, 0, 0, 0, 0, 1, 0, 0],
//    [1, 0, 0, 0, 0, 1, 0, 0],
//    [0, 1, 0, 0, 0, 1, 0, 0],
//    [0, 0, 1, 0, 0, 1, 0, 0],
//    [0, 0, 0, 1, 0, 1, 0, 1],
//    [0, 0, 0, 0, 1, 1, 1, 0],
//    [1, 1, 1, 1, 1, 0, 1, 1]
//  ])
//Test.assertSimilar(checkBoard('d', 8), 
//  [
//    [1, 1, 1, 0, 1, 1, 1, 1],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Track the Robot (Part 3)

//tags: algorithms,logic,loops

//url: https://edabit.com/challenge/WRB33HsHBFDEfx4EA

//Description:
//A robot moves around a 2D grid. At the start, it is at [0, 0], facing east. It is controlled by a sequence of instructions:
//. means take one step forwards in the current direction.
//< means turn 90 degrees anticlockwise.
//> means turn 90 degrees clockwise.
//Your job is to process the instructions and return the final position of the robot.
//Example
//For example, if the robot is given the sequence of instructions ..<.<., then:
//Step 1: . It still faces east, and is at [1, 0].
//Step 2: . It still faces east, and is at [2, 0].
//Step 3: < It now faces north, and is still at [2, 0].
//Step 4: . It still faces north, and is at [2, 1].
//Step 5: < It now faces west, and is still at [2, 1].
//Step 6: . It still faces west, and is now at [1, 1].
//So, trackRobot("..<.<.") returns [1, 1].
//Notes
//The instruction strings will only contain the three valid characters ., < or >.
//You will always be passed a string (but the string might be empty).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(trackRobot("..<.<."),[ 1, 1 ],"Example")
//Test.assertSimilar(trackRobot(".".repeat(100)),[100,0])
//Test.assertSimilar(trackRobot("<>>>><><<<><>>>><><<<><>>><>"),[ 0, 0 ])
//Test.assertSimilar(trackRobot(".<..<...<....<.....<......"),[ 3, 4 ])
//Test.assertSimilar(trackRobot(">>.."),[ -2, 0 ])
//Test.assertSimilar(trackRobot("..<<..>>..<<..>>.."),[ 2, 0 ])
//Test.assertSimilar(trackRobot(".>".repeat(5000)),[ 0, 0 ])

