

//title: Character Code Math

//tags: algorithms,language_fundamentals,math,numbers

//url: https://edabit.com/challenge/wA6A7XCN2Nkmrddvq

//Description:
//Turn each character in a string str into its ASCII character code and join them together to create a number.
//For example, for string "abc", the number is 979899. We will call this number "num1".
//"abc" ➞ "a" = 97, "b" = 98, "c" = 99 ➞ 979899
//Then replace any incidence of the number 7 with the number 1, and call this number "num2":
//num1 = 979899
//
//num2 = 919899
//Return the difference between the sum of the digits in num1 and num2:
//  (9 + 7 + 9 + 8 + 9 + 9)
//- (9 + 1 + 9 + 8 + 9 + 9)
//-------------------------
//         ➞  6
//Examples
//calc("ABCDabcd") ➞ 12
//
//calc("cdefgh") ➞ 0
//
//calc("ifkhchlhfde") ➞ 6
//Notes
//Lowercase and uppercase characters have different ASCII character codes.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(calc('ABCDabcd'), 12)
//Test.assertEquals(calc('cdefgh'), 0)
//Test.assertEquals(calc('ifkhchlhfde'), 6) 
//Test.assertEquals(calc('aaaaaddddrijkl'), 36) 
//Test.assertEquals(calc('abcdefghijklmnopqrstuvwxyz'), 18)
//Test.assertEquals(calc('AABBCC'), 12) 
//Test.assertEquals(calc('ABCDEFGH'), 24) 
//Test.assertEquals(calc('anmatmudtr'), 18) 
//Test.assertEquals(calc('suwvete'), 6) 
//Test.assertEquals(calc('edabit'), 6) 
//Test.assertEquals(calc('EDABIT'), 6) 
//Test.assertEquals(calc('SLOWLLLY'), 36) 
//Test.assertEquals(calc('COMEnananan'), 42) 
//Test.assertEquals(calc('coupdetat'), 12) 
//Test.assertEquals(calc('arsenal'), 12) 
//Test.assertEquals(calc('byoaaasglrrsA'), 18) 
//Test.assertEquals(calc('byoglrrsA'), 0) 
//Test.assertEquals(calc('eyyyhenDDDUEN'), 6) 
//Test.assertEquals(calc('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 78) 
//Test.assertEquals(calc('zyxwvutsrqpon'), 6) 
//Test.assertEquals(calc('ZYXWVUTSR'), 6)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Function to Arrow Function

//tags: logic,strings

//url: https://edabit.com/challenge/G9pQikEexb3GDyGK3

//Description:
//Create a function that takes an empty function as a string and returns the function as a arrow function.
//Examples
//"function test(a) {}" ➞  "const test = (a) =>"
//
//"function twoArgs(a,b) {}" ➞ "const twoArgs = (a,b) =>"
//
//"function restArgs(...a) {}" ➞  "const restArgs = (...a) =>"
//Notes
//Functions can have multiple arguments.
//The arrow function must be assigned to a const.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(toArrow(`function test(a) {}`), `const test = (a) =>`)
//Test.assertEquals(toArrow(`function twoArgs(a,b) {}`), `const twoArgs = (a,b) =>`)
//Test.assertEquals(toArrow(`function restArgs(...a) {}`), `const restArgs = (...a) =>`)
//Test.assertEquals(toArrow(`function restArgsArg(...a,b) {}`), `const restArgsArg = (...a,b) =>`)
//Test.assertEquals(toArrow(`function threeArgs(a,b,c) {}`), `const threeArgs = (a,b,c) =>`)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Complete the Binary Number

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/HpmC7qQpLeGqj6RCg

//Description:
//Create a function which adds zeros to the start of a binary string, so that its length is a multiple of 8.
//Examples
//completeBinary("1100") ➞ "00001100"
//
//completeBinary("1101100") ➞ "01101100"
//
//completeBinary("110010100010") ➞ "0000110010100010"
//Notes
//Return the same string if its length is already a multiple of 8.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(completeBinary("1100"), "00001100")
//Test.assertEquals(completeBinary("1101100"), "01101100")
//Test.assertEquals(completeBinary("110010100010"), "0000110010100010")
//Test.assertEquals(completeBinary("1001110001111011100101"), "001001110001111011100101")
//Test.assertEquals(completeBinary("111101100011001111100111010001001110010101011001000000001101100"), "0111101100011001111100111010001001110010101011001000000001101100")
//Test.assertEquals(completeBinary("1100110111000000010000110011001"), "01100110111000000010000110011001")
//Test.assertEquals(completeBinary("011001100101100100100001110101110"), "0000000011001100101100100100001110101110")
//Test.assertEquals(completeBinary("10000010100000011"), "000000010000010100000011")
//Test.assertEquals(completeBinary("0010100101011110000000101010010"), "00010100101011110000000101010010")
//Test.assertEquals(completeBinary("1111000010000101010011001110110000"), "0000001111000010000101010011001110110000")
//Test.assertEquals(completeBinary("100111110111011110101100"), "100111110111011110101100")
//Test.assertEquals(completeBinary("1111011011010101000001010001000011110000001100100001111110111110001100"), "001111011011010101000001010001000011110000001100100001111110111110001100")
//Test.assertEquals(completeBinary("000101011101010110000011100011000001001111001001000101111101011"), "0000101011101010110000011100011000001001111001001000101111101011")
//Test.assertEquals(completeBinary("01000000011101110001100011101111111011100110011"), "001000000011101110001100011101111111011100110011")
//Test.assertEquals(completeBinary("0001001100011100111101000111111011001001111100100000"), "00000001001100011100111101000111111011001001111100100000")
//Test.assertEquals(completeBinary("11011111000001001000"), "000011011111000001001000")
//Test.assertEquals(completeBinary("111011100010111000"), "000000111011100010111000")
//Test.assertEquals(completeBinary("11000011100111000001110100"), "00000011000011100111000001110100")
//Test.assertEquals(completeBinary("010001100100001110000001001000000001111111101010010111"), "00010001100100001110000001001000000001111111101010010111")
//Test.assertEquals(completeBinary("110101101100010110010000100100110110010010000000101000110101010101100"), "000110101101100010110010000100100110110010010000000101000110101010101100")
//Test.assertEquals(completeBinary("1010"), "00001010")
//Test.assertEquals(completeBinary("11010010010"), "0000011010010010")
//Test.assertEquals(completeBinary("1010010101001010011000110101101101100011100010111101110110"), "0000001010010101001010011000110101101101100011100010111101110110")
//Test.assertEquals(completeBinary("10011101001100001"), "000000010011101001100001")
//Test.assertEquals(completeBinary("1011001110011101010011101110001000010011011"), "000001011001110011101010011101110001000010011011")

