

//title: Clockwise Cipher

//tags: algorithms,cryptography,logic,strings

//url: https://edabit.com/challenge/nWj5kRgxnieP9i8Fn

//Description:
//In Clockwise Cipher, encoding is done by placing message characters in the corner cells of a square and moving in a clockwise direction.
//Create a function that takes an argument message, and returns the encoded message.
//There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
//message = "Mubashir Hassan"
//
//clockwiseCipher(message) ➞ "Ms ussahr nHaaib"
//Step 1: Form a square large enough to fit all the message characters. Given message can fit in a 4 x 4 square.
//Step 2: Starting with the top-left corner, place message characters in the corner cells moving in a clockwise direction. After the first cycle is complete, continue placing characters in the cells following the last one in its respective row/column. When the outer cells are filled, continue for the remaining inner squares:
//M	s		u
//s	s	a	h
//r		n	H
//a	a	i	b
//Step 3: Return encoded message Rows-wise:
//eMessage = "Ms ussahr nHaaib"
//Example for a 5 x 5 Square
//[ 1  5  9 13  2]
//[16 17 21 18  6]
//[12 24 25 22 10]
//[ 8 20 23 19 14]
//[ 4 15 11  7  3]
//Examples
//clockwiseCipher("Mubashir Hassan") ➞ "Ms ussahr nHaaib"
//
//clockwiseCipher("Matt MacPherson") ➞ "M ParsoMc nhteat"
//
//clockwiseCipher("Edabit is amazing") ➞ "Eisadng  tm    i   zbia a"
//Notes
//Fill up any unused cells with a space character.
//Message can contain spaces and special characters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(clockwiseCipher("Mubashir Hassan"), "Ms ussahr nHaaib")
//Test.assertEquals(clockwiseCipher("Matt MacPherson"), "M ParsoMc nhteat")
//Test.assertEquals(clockwiseCipher("Edabit is amazing"), "Eisadng  tm    i   zbia a")
//Test.assertEquals(clockwiseCipher("Started from the bottom now we're here"), "Stf  tt nweroet    eree    tmr   eb   h'wormohoda")
//Test.assertEquals(clockwiseCipher("I am so clever that sometimes I don't understand a single word of what I'm saying"), "I cehsts  dtdt ioselerfa  lesI'amder dhngy aatsosi taovno w wni 'g nrun mImmt eoa")
//Test.assertEquals(clockwiseCipher("Even though I walk through the darkest valley, I will fear no evil, for you are with me"), "E uIlhghavesay laottdvifyawllgtnh   mo, ue     owktl     r raI    eirh e teur, eove fi l rnk  o whhe")
//Test.assertEquals(clockwiseCipher("If life seems jolly rotten there's something you've forgotten, and that's to laugh and smile and dance and sing. When you're feeling in the dumps, don't be silly chumps. Just purse your lips and whistle, that's the thing!"), "Iisslreh'oh 'ffgonnhs gnm  ctf ani nu l tdd,eunpso syu.s,nd gd pu rpnhrnWalte utlt'heyb  ossgswth!ih i'lneaehat   ss fhetuelitg nedmidstoo u   a,i iim 'etes  losthaiot.d Jpcle' udymasmenneryhg ev e anl  att  tolreone r tyjee ")
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Consecutive Number Series

//tags: arrays,loops,numbers,sorting,validation

//url: https://edabit.com/challenge/3kqmmTPHjB67ieK3t

//Description:
//Write a function that will return true if a given string (divided and grouped into a size) will contain a set of consecutive numbers (regardless of orientation: whether ascending or descending), otherwise, return false.
//Examples
//isConsecutive("121314151617") ➞ true
//// Contains a set of consecutive ascending numbers
//// if grouped into 2's : 12, 13, 14, 15, 16, 17
//
//isConsecutive("123124125") ➞ true
//// Contains a set of consecutive ascending numbers
//// if grouped into 3's : 123, 124, 125
//
//isConsecutive("32332432536") ➞ false
//// Regardless of the grouping size, the numbers can't be consecutive.
//
//isConsecutive("326325324323") ➞ true
//// Contains a set of consecutive descending numbers
//// if grouped into 3's : 326, 325, 324, 323
//
//isConsecutive("667666") ➞ true
//// Consecutive descending numbers: 667 and 666.
//
//isConsecutive("999897959493") ➞ false
//Notes
//A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
//A recursive version of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expected] = [
//  [
//    "121314151617", "123124125", "667666", "23242526", "444445", "1234567", "123412351236",
//    "57585960616263", "500001500002500003", "919920921", "12341235123612371238", "326325324323",
//    "54321", "56555453", "32332432536", "2324256", "1235", "121316", "12131213", "90090190290",
//    "35236237238", "999897959493", "171615141312119", "1716171819181920", "273274273274"
//  ], [
//    true, true, true, true, true, true, true, true, true, true, true, true, true, true,
//    false, false, false, false, false, false, false, false, false, false, false
//  ]
//]
//for (let i in actualParam) Test.assertEquals(isConsecutive(actualParam[i]), expected[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Tic-Tac-Toe

//tags: arrays,games,validation

//url: https://edabit.com/challenge/JgjQDgNp4nQuMv2LA

//Description:
//Create a function that takes a Tic-tac-toe board and returns "X" if the X's are placed in a way that there are three X's in a row or returns "O" if there are three O's in a row.
//Examples
//whoWon([
//  ["O", "X", "O"],
//  ["X", "X", "O"],
//  ["O", "X", "X"]
//]) ➞ "X"
//
//whoWon([
//  ["O", "O", "X"],
//  ["X", "O", "X"],
//  ["O", "X", "O"]
//]) ➞ "O"
//
//whoWon([
//  ["O", "O", "X"],
//  ["X", "X", "O"],
//  ["O", "X", "O"]
//]) ➞ "Tie"
//Notes
//All places on the board will have either "X" or "O".
//If both "X" and "O" win, return "Tie".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(whoWon([
//    ["X", "O", "X"],
//    ["X", "O", "O"],
//    ["X", "X", "O"]
//]), "X")
//​
//Test.assertEquals(whoWon([
//    ["O", "X", "O"],
//    ["X", "X", "O"],
//    ["O", "X", "X"]
//]), "X")
//​
//Test.assertEquals(whoWon([
//    ["X", "X", "O"],
//    ["O", "X", "O"],
//    ["X", "O", "O"]
//]), "O")
//​
//Test.assertEquals(whoWon([
//    ["X", "X", "X"],
//    ["O", "X", "O"],
//    ["X", "O", "O"]
//]), "X")
//​
//Test.assertEquals(whoWon([

