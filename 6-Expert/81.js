

//title: Block Pusher

//tags: arrays,games,loops

//url: https://edabit.com/challenge/sQ6KnsgJjiniZ32yd

//Description:
//Create a function which returns the state of a board after n moves. There are different types of blocks on the board, which are represented as strings.
//> is a pusher which moves right every turn, and pushes a block to the right if it occupies the same space as it.
//'#' is a block which can be pushed by the pusher. If a block is pushed onto another block, then the other block also joins the push chain!
//'-' is an empty space, which a block can be pushed into.
//Note that the pusher can push any number of blocks at a time, but is always stopped if the push chain hits the end of the list.
//Examples
//blockPushing(['-', '>', '#', '-', '#', '-', '-', '-'], 1) ➞ ['-', '-', '>', '#', '#', '-', '-', '-']
//
//blockPushing(['>', '#', '-', '#', '-', '-', '#'], 10) ➞ ['-', '-', '-', '>', '#', '#', '#']
//
//blockPushing(['>', '-', '>', '#', '-', '-', '#', '-'], 2) ➞ ['-', '-', '>', '-', '>', '#', '#', '-']
//
//blockPushing(['>', '>', '>', '-'], 3) ➞ ['-', '>', '>', '>']
//Notes
//There may be more than one pusher at a time on the board.
//Pushers are solid blocks, so a push chain of pushers should also stop when hitting the end of the list.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(blockPushing(['-', '>', '#', '-', '#', '-', '-', '-'], 1), ['-', '-', '>', '#', '#', '-', '-', '-'])
//Test.assertSimilar(blockPushing(['>', '#', '-', '#', '-', '-', '#'], 10), ['-', '-', '-', '>', '#', '#', '#'])
//Test.assertSimilar(blockPushing(['>', '-', '>', '#', '-', '-', '#', '-'], 2), ['-', '-', '>', '-', '>', '#', '#', '-'])
//Test.assertSimilar(blockPushing(['>', '>', '>'], 3), ['>', '>', '>'])
//Test.assertSimilar(blockPushing(['>'], 4), ['>'])
//Test.assertSimilar(blockPushing(['-'], 2), ['-'])
//Test.assertSimilar(blockPushing(['#'], 10), ['#'])
//Test.assertSimilar(blockPushing(['#', '-', '#', '#'], 53), ['#', '-', '#', '#'])
//Test.assertSimilar(blockPushing(['#', '-', '-', '>', '-', '-'], 3), ['#', '-', '-', '-', '-', '>'])
//Test.assertSimilar(blockPushing(['#', '>', '#', '-', '-', '>', '>', '-', '#', '-', '-'], 2), ['#', '-', '-', '>', '#', '-', '-', '>', '>', '#', '-'])
////Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Character Recognition ⁠— What`s the Time?

//tags: arrays,data_structures,strings

//url: https://edabit.com/challenge/WFHMJuYwrJ8XSALhg

//Description:
//As a programmer in a forensic laboratory, you have been asked to write a function to decode a bitmap image of a digital clock to determine what time it was when the image was created. The bitmap image has been converted to a string of binary digits 0 or 1 where 0 represents a white background pixel and 1 represents a black pixel. You must convert this binary string into a time in hours and minutes in the form hh:mm (e.g. 09:47).
//The clock face shows the time in a black on white background where each character is three cells wide and five cells deep. Notice there is a space between the numbers represented by a column of blank cells:
//
//
//
//Each image is 17 bits wide by 5 bits deep. Each row is encoded as a 17 character string of 1s and 0s and the five rows are then concatenated into an 85 character string which is passed to your function. For example, the above image is encoded as follows:
//row 1 = "11100100001110111"
//row 2 = "10101100100010100"
//row 3 = "10100100001110111"
//row 4 = "10100100100010001"
//row 5 = "11101110001110111"
//
//bitmap -> "1110010000111011110101100100010100101001000011101111010010010001000111101110001110111"
//If you examine the above rows maps carefully, you should be able to see the clock digits in the pattern of 1, The first three columns show the number 0, this is followed by a column of all 0 representing a space between the numbers, then comes another three columns representing the number 1, then three columns representing the character :, then three columns representing 3, a column of zeroes representing a space and finally three columns representing the number 5. The resulting time is 01:35.
//Example
//whatsTheTime("1110010000111011110101100100010100101001000011101111010010010001000111101110001110111") ➞ "01:35"
//Notes
//There are no errors in the encoding, so you don't need to check for near matches.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const tests = [
//    [ '1110010000111011110101100100010100101001000011101111010010010001000111101110001110111', '01:35' ],
//    [ '1110111000101010010100010101010100101011100011101111010100010001010111101110000010111', '02:46' ],
//    [ '0100111000111011111000010100010101010000100011101110100001010100000111100010001110001', '17:29' ],
//    [ '1110111000111011100100010101000101111011100011101111000001010001010111101110001110111', '23:58' ]
//]
//for (test of tests) {
//  Test.assertEquals(whatsTheTime(test[0]), test[1]);
//}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Postfix Notation (Part 2: Infix to Postfix)

//tags: logic,math

//url: https://edabit.com/challenge/zMFPww26fHYGor3Zv

//Description:
//Given a string representing an infix expression, return the postfix equivalent. The operands stay in their original order, and any parentheses are removed. Only the operator order is changed. Operands and operators will be separated by a single space, with the exception of parentheses (see examples).
//Examples
//infixToPostfix("7 + 3") ➞ "7 3 +"
//
//infixToPostfix("(8 + 4) / 4") ➞ "8 4 + 4 /"
//
//infixToPostfix("4 * (5 - (7 + 2))") ➞ "4 5 7 2 + - *"
//
//infixToPostfix("3 + 4 ** 2") ➞ "3 4 2 ** +"
//Notes
//Converting infix expressions to postfix expressions is an example of operator-precedence parsing, the most famous of which is Dijkstra's "shunting-yard" algorithm (see the resources tab for more information).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(infixToPostfix("8 + 1"), "8 1 +")
//Test.assertEquals(infixToPostfix("9 / 3"), "9 3 /")
//Test.assertEquals(infixToPostfix("8 + 2 * 5"), "8 2 5 * +")
//Test.assertEquals(infixToPostfix("(8 + 2) * 5"), "8 2 + 5 *")
//Test.assertEquals(infixToPostfix("1 + 2 + 3 + 4 + 5"), "1 2 + 3 + 4 + 5 +")
//Test.assertEquals(infixToPostfix("3 * (12 / (32 / 8))"), "3 12 32 8 / / *")
//Test.assertEquals(infixToPostfix("2 + 3 * 1 - 9"), "2 3 1 * + 9 -")
//Test.assertEquals(infixToPostfix("(3 + 4) * 2 / 7"), "3 4 + 2 * 7 /")
//Test.assertEquals(infixToPostfix("4 * (5 - (7 + 2))"), "4 5 7 2 + - *")
//Test.assertEquals(infixToPostfix("(10 + 8 - 3 * 4) / 6"), "10 8 + 3 4 * - 6 /")
//Test.assertEquals(infixToPostfix("13 + (6 + 7 - 8 / (4 * 9))"), "13 6 7 + 8 4 9 * / - +")
//Test.assertEquals(infixToPostfix("(5 - 7) * (6 + 9)"), "5 7 - 6 9 + *")
//Test.assertEquals(infixToPostfix("(6 + 2) * 5 - 8 / 4"), "6 2 + 5 * 8 4 / -")
//Test.assertEquals(infixToPostfix("9 * 2 + 3 - 12"), "9 2 * 3 + 12 -")
//Test.assertEquals(infixToPostfix("6 - (4 + 18 / (2 + 7))"), "6 4 18 2 7 + / + -")
//Test.assertEquals(infixToPostfix("3 * (10 + 5)"), "3 10 5 + *")
//Test.assertEquals(infixToPostfix("(8 + 1 + 3) * 7 - 6"), "8 1 + 3 + 7 * 6 -")
//Test.assertEquals(infixToPostfix("(3 + 2) * (15 / 3 - 8)"), "3 2 + 15 3 / 8 - *")
//Test.assertEquals(infixToPostfix("10 / (7 - (8 / 4)) * 6 + 3 - (5 * 4)"), "10 7 8 4 / - / 6 * 3 + 5 4 * -")
//Test.assertEquals(infixToPostfix("(6 - 45) / (3 + 12) * 6 / 2"), "6 45 - 3 12 + / 6 * 2 /")

