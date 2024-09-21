

//title: Morse Code Decoded

//tags: arrays,conditions,loops

//url: https://edabit.com/challenge/i94xogDsjvsKep64Q

//Description:
//Create a function that takes a string (morse code) as an argument and returns an unencrypted string.
//Examples
//decodeMorse(".... . .-.. .--.   -- .   -.-.--") ➞ "HELP ME !"
//
//decodeMorse("-.-. .... .- .-.. .-.. . -. --. .") ➞ "CHALLENGE"
//
//decodeMorse(". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. .") ➞ "EDABBIT CHALLENGE"
//The following object can be used for coding:
//morseToDots = {
//  ".-":"A", "-...":"B", "-.-.":"C", "-..":"D", ".":"E", "..-.":"F",
//  "--.":"G", "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
//  "--":"M", "-.":"N", "---":"O", ".--.":"P", "--.-":"Q", ".-.":"R",
//  "...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
//  "-.--":"Y", "--..":"Z", "-----":"0", ".----":"1", "..---":"2",
//  "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7",
//  "---..":"8", "----.":"9", "-.-.--":"!", "   ":" ", "..--..":"?",
//  ".-.-.-":".", ".----.":""", "---...":":", "--..--":", ", " ":""
//}
//Notes
//Return values are all uppercase.
//Input string can have digits.
//Input string can have some special chararacters (e.g. comma, colon, apostrophe, period, question mark, exclamation mark).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(decodeMorse(". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. ."), "EDABBIT CHALLENGE")
//Test.assertEquals(decodeMorse(".... . .-.. .--.   -- .   -.-.--"), "HELP ME !")
//Test.assertEquals(decodeMorse("-.-. .... .- .-.. .-.. . -. --. ."), "CHALLENGE")
//Test.assertEquals(decodeMorse(".----   .- .--. .--. .-.. .   .- -. -..   .....   -.-. .... . .-. .-. -.-- --..--   --...   ... .- -. -.. .-- .. -.-. .... . ... --..--   ..---   - .- -... .-.. . ... --..--   ----.   .. -. ...- .. - . -..   --. ..- -.-- ...   -.-.--   - .... .- - .----. ...   ... ---   -.-. --- --- .-.. .-.-.- .-.-.- .-.-.-"), "1 APPLE AND 5 CHERRY, 7 SANDWICHES, 2 TABLES, 9 INVITED GUYS ! THAT'S SO COOL...")
//Test.assertEquals(decodeMorse("-.. .. -..   -.-- --- ..-   --. --- -   -- -.--   -- .- .. .-..   ..--.."), "DID YOU GOT MY MAIL ?")
//Test.assertEquals(decodeMorse("- .-- ---   - .... .. -. --. ...   - ---   -.- -. --- .--   ---...   ..   ..-. --- .-. --. . -   - .... . --   ---... -.-."), "TWO THINGS TO KNOW : I FORGET THEM :C")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mega Milestones

//tags: formatting,numbers,strings

//url: https://edabit.com/challenge/qRMvxck4QDrjzSWrD

//Description:
//Given an number, return a string which contains varying amounts of the word 'MEGA' depending on the given number's order of magnitude.
//If the number is less than 100, return "not a mega milestone".
//Otherwise, start with the string "MEGA milestone".
//For every order of magnitude over 100 that the number is, add the word "MEGA" to the start of the string.
//See the examples below for further clarification!
//Examples
//howMuchMega(54) ➞ "not a mega milestone"
//
//howMuchMega(143) ➞ "MEGA milestone"
//
//howMuchMega(1000) ➞ "MEGA MEGA milestone"
//
//howMuchMega(9999.9) ➞ "MEGA MEGA milestone"
//
//howMuchMega(10000) ➞ "MEGA MEGA MEGA milestone"
//Notes
//Large negative numbers can also be considered as MEGA, so use the absolute values.
//You can expect decimal numbers as well as whole numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(howMuchMega(54), "not a mega milestone")
//Test.assertEquals(howMuchMega(143), "MEGA milestone")
//Test.assertEquals(howMuchMega(1000), "MEGA MEGA milestone")
//Test.assertEquals(howMuchMega(9999.9), "MEGA MEGA milestone")
//Test.assertEquals(howMuchMega(-9999.9), "MEGA MEGA milestone")
//Test.assertEquals(howMuchMega(10000), "MEGA MEGA MEGA milestone")
//Test.assertEquals(howMuchMega(710005), "MEGA MEGA MEGA MEGA milestone")
//Test.assertEquals(howMuchMega(0), "not a mega milestone")
//Test.assertEquals(howMuchMega(387482), "MEGA MEGA MEGA MEGA milestone")
//Test.assertEquals(howMuchMega(20850088393226388232424), "MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA MEGA milestone")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Balanced Brackets

//tags: logic,strings,validation

//url: https://edabit.com/challenge/6NSvSLWWix84rRqpD

//Description:
//Write a function that takes a string of brackets and checks whether they're balanced or not.
//The sequence is balanced if:
//It contains no unmatched brackets.
//The subset of brackets enclosed within the confines of a matched pair of brackets is also balanced.
//Examples
//isBalanced("{[()]}") ➞ true
//
//isBalanced("[()]{}") ➞ true
//
//isBalanced("{[([)]]}") ➞ false
//Notes
//Return undefined if no input is given.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isBalanced('()'), true)
//Test.assertEquals(isBalanced('{[()]}'), true)
//Test.assertEquals(isBalanced('{{[[(())]]}}'), true)
//Test.assertEquals(isBalanced('{{[[(())[]]]}}'), true)
//Test.assertEquals(isBalanced('[()]{}{[()()]()}'), true)
//Test.assertEquals(isBalanced('{[([)]]}'), false)
//Test.assertEquals(isBalanced('{[('), false)
//Test.assertEquals(isBalanced('])}'), false)
//Test.assertEquals(isBalanced('[[]'), false)
//Test.assertEquals(isBalanced('{)(}'), false)
//Test.assertEquals(isBalanced('{{[[([())]]]}}'), false)
//Test.assertEquals(isBalanced(), undefined)

