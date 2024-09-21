

//title: Reverse Coding Challenge #1

//tags: loops,strings

//url: https://edabit.com/challenge/ifZ3cDoGZN7gNtRWZ

//Description:
//This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.
//Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.
//Examples
//"A4B5C2" ➞ "AAAABBBBBCC"
//
//"C2F1E5" ➞ "CCFEEEEE"
//
//"T4S2V2" ➞ "TTTTSSVV"
//
//"A1B2C3D4" ➞ "ABBCCCDDDD"
//Notes
//If you get stuck, check the Comments for help.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mysteryFunc("A4B5C2"), "AAAABBBBBCC")
//Test.assertEquals(mysteryFunc("C2F1E5"), "CCFEEEEE")
//Test.assertEquals(mysteryFunc("T4S2V2"), "TTTTSSVV")
//Test.assertEquals(mysteryFunc("A1B2C3D4"), "ABBCCCDDDD")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Encode Morse

//tags: arrays,conditions,loops

//url: https://edabit.com/challenge/qktP97jpm5arY2yEA

//Description:
//Create a function that takes a string as an argument and returns the Morse code equivalent.
//Examples
//encodeMorse("EDABBIT CHALLENGE") ➞ ". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. ."
//
//encodeMorse("HELP ME !") ➞ ".... . .-.. .--.   -- .   -.-.--"
//Notes
//Ouput should be International Morse Code, and use the standard conventions for symbols not defined inside the ITU recommendation (see Resources).
//Input value can be lower or upper case.
//Input string can have digits.
//Input string can have some special characters (e.g. comma, colon, apostrophe, period, question mark, exclamation mark).
//One space " " is expected after each character, except the last one.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(encodeMorse("EDABBIT CHALLENGE"),". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. .");
//Test.assertEquals(encodeMorse("HELP ME !"),".... . .-.. .--.   -- .   -.-.--");
//Test.assertEquals(encodeMorse("CHALLENGE"),"-.-. .... .- .-.. .-.. . -. --. .");
//Test.assertEquals(encodeMorse( "1 APPLE AND 5 CHERRY, 7 SANDWICHES, 2 TABLES, 9 INVITED GUYS ! THAT'S SO COOL..."),".----   .- .--. .--. .-.. .   .- -. -..   .....   -.-. .... . .-. .-. -.-- --..--   --...   ... .- -. -.. .-- .. -.-. .... . ... --..--   ..---   - .- -... .-.. . ... --..--   ----.   .. -. ...- .. - . -..   --. ..- -.-- ...   -.-.--   - .... .- - .----. ...   ... ---   -.-. --- --- .-.. .-.-.- .-.-.- .-.-.-");
//Test.assertEquals(encodeMorse("did you got my mail ?"),"-.. .. -..   -.-- --- ..-   --. --- -   -- -.--   -- .- .. .-..   ..--..");
//Test.assertEquals(encodeMorse("TWO THInGS TO KNOW : i FORGeT THeM :C"),"- .-- ---   - .... .. -. --. ...   - ---   -.- -. --- .--   ---...   ..   ..-. --- .-. --. . -   - .... . --   ---... -.-.");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: GCD

//tags: math,recursion

//url: https://edabit.com/challenge/kPLz93JtyjK77LFDP

//Description:
//Write a function that calculates the GCD (Greatest Common Divisor) of two numbers recursively.
//Examples
//gcd(10, 20) ➞ 10
//
//gcd(1, 3) ➞ 1
//
//gcd(5, 7) ➞ 1
//
//gcd(2, 6) ➞ 2
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(gcd(10, 20), 10)
//Test.assertEquals(gcd(1, 3), 1)
//Test.assertEquals(gcd(5, 7), 1)
//Test.assertEquals(gcd(2, 6), 2)
//Test.assertEquals(gcd(13, 39), 13)
//Test.assertEquals(gcd(50, 5), 5)
//Test.assertEquals(gcd(70, 35), 35)
//Test.assertEquals(gcd(100, 8), 4)
//Test.assertEquals(gcd(11, 45), 1)

