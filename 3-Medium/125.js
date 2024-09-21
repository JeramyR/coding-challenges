

//title: Stretched Words

//tags: formatting,loops,strings

//url: https://edabit.com/challenge/X4WDm4ZroqPZpiqgA

//Description:
//Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.
//Examples
//unstretch("ppoeemm") ➞ "poem"
//
//unstretch("wiiiinnnnd") ➞ "wind"
//
//unstretch("ttiiitllleeee") ➞ "title"
//
//unstretch("cccccaaarrrbbonnnnn") ➞ "carbon"
//Notes
//Final strings won't include words with double letters (e.g. "passing", "lottery").

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(unstretch('llossttttt'), 'lost')
//Test.assertEquals(unstretch('cccccaaaaannnnne'), 'cane')
//Test.assertEquals(unstretch('hhoooneestttt'), 'honest')
//Test.assertEquals(unstretch('ppppooowwddddeeerrrr'), 'powder')
//Test.assertEquals(unstretch('eexxpppppeeccctt'), 'expect')
//Test.assertEquals(unstretch('rrrrepooooorrttt'), 'report')
//Test.assertEquals(unstretch('pppaaaaattteeeennnntt'), 'patent')
//Test.assertEquals(unstretch('mmmeeemoooryy'), 'memory')
//Test.assertEquals(unstretch('vvvvviiiiisssuuaaalll'), 'visual')
//Test.assertEquals(unstretch('eeeennnnsuuurrre'), 'ensure')
//Test.assertEquals(unstretch('iiinncclludddddeee'), 'include')
//Test.assertEquals(unstretch('ttteestiffffyyy'), 'testify')
//Test.assertEquals(unstretch('ggrrrrraaaaavvvvviiitttyyyy'), 'gravity')
//Test.assertEquals(unstretch('cccuuuultttttuuuuurreee'), 'culture')
//Test.assertEquals(unstretch('qquaalliiifffyy'), 'qualify')
//Test.assertEquals(unstretch('iiinnccoooonnnnnggggrrrrruuuuooouuuuusss'), 'incongruous')
//Test.assertEquals(unstretch('eeeennnnttiiiitlllleeeeemmeennnttttt'), 'entitlement')
//Test.assertEquals(unstretch('aaaaassstttttooniiiiissshhiiinnnnnggg'), 'astonishing')
//Test.assertEquals(unstretch('cccccoiinnnncccciidddenncee'), 'coincidence')
//Test.assertEquals(unstretch('prrrrreeeppppaaaarrrrraaattiionn'), 'preparation')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx: Character Classes XI ⁠- \s

//tags: regex

//url: https://edabit.com/challenge/EAsFHZYmxirxzLTsh

//Description:
//You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
//Here are a list of the characters classes in JavaScript:
//., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
//You probably know already know the string method trim(). It will remove all of the leading and trailing whitespaces in a string.
//Create a regular expression that will function like the trim() method. Your regex will work together with this function: string.replace(REGEXP, ""). You must use the \s character class in your expression.
//Example
//const str = "    Hello World    "
//// "Hello World"
//
//const str = "    We need more space   "
//// "We need more space"
//Notes
//Check the Resources tab for details on character classes if you're stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str1 = "    Hello World    "
//const str2 = "    We need more space   "
//const str3 = " I    want more  room    "
//​
//const validate = (REGEXP) => {
//   if(!/\\s/.test(String(REGEXP))) return () => "required"
//   return function testReg(str) {
//     return str.replace(REGEXP, "")
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//Test.assertNotEquals(testExp(str1), "required", "You are required to use a \s character class in your expression.")
//Test.assertSimilar(testExp(str1), "Hello World")
//Test.assertSimilar(testExp(str2), "We need more space")
//Test.assertSimilar(testExp(str3), "I    want more  room")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ASCII Charts (Part 1: Progress Bar)

//tags: formatting,strings

//url: https://edabit.com/challenge/dPAzqLybypQdJKkKm

//Description:
//Given a character and a value between 0 and 100, return a string that represents a simple progress bar.
//The value represents a percentage.
//The bar should begin and end with "|"
//Repeat the character to fill the bar, with each character equivalent to 10%
//Use spaces to pad the bar to a length of 10 characters.
//A single space comes after the bar, then a message with the % of completion (e.g. "Progress: 60%")
//If the value is 100, the message should be "Completed!".
//Examples
//progressBar("#", 0) ➞ "|          | Progress: 0%"
//
//progressBar("=", 40) ➞ "|====      | Progress: 40%"
//
//progressBar("#", 60) ➞ "|######    | Progress: 60%"
//
//progressBar(">", 100) ➞ "|>>>>>>>>>>| Completed!"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(progressBar("=", 10), "|=         | Progress: 10%")
//Test.assertEquals(progressBar("#", 90), "|######### | Progress: 90%")
//Test.assertEquals(progressBar("*", 100), "|**********| Completed!")
//Test.assertEquals(progressBar("#", 50), "|#####     | Progress: 50%")
//Test.assertEquals(progressBar("*", 60), "|******    | Progress: 60%")
//Test.assertEquals(progressBar("#", 100), "|##########| Completed!")
//Test.assertEquals(progressBar("*", 60), "|******    | Progress: 60%")
//Test.assertEquals(progressBar("=", 30), "|===       | Progress: 30%")
//Test.assertEquals(progressBar(">", 70), "|>>>>>>>   | Progress: 70%")
//Test.assertEquals(progressBar("=", 40), "|====      | Progress: 40%")
//Test.assertEquals(progressBar(">", 20), "|>>        | Progress: 20%")
//Test.assertEquals(progressBar("*", 0), "|          | Progress: 0%")
//Test.assertEquals(progressBar("=", 60), "|======    | Progress: 60%")
//Test.assertEquals(progressBar(">", 90), "|>>>>>>>>> | Progress: 90%")
//Test.assertEquals(progressBar("*", 80), "|********  | Progress: 80%")
//Test.assertEquals(progressBar("#", 20), "|##        | Progress: 20%")
//Test.assertEquals(progressBar("*", 30), "|***       | Progress: 30%")
//Test.assertEquals(progressBar("=", 70), "|=======   | Progress: 70%")
//Test.assertEquals(progressBar("=", 0), "|          | Progress: 0%")
//Test.assertEquals(progressBar(">", 100), "|>>>>>>>>>>| Completed!")

