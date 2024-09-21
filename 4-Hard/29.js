

//title: Digits Sum Root

//tags: math,numbers,recursion,strings

//url: https://edabit.com/challenge/4aiWPfNZfpJTZDPSX

//Description:
//Create a function that takes a number and returns one digit that is the result of summing all the digits of the input number. When the sum of the digits consists of more than one digit, repeat summing until you get one digit.
//Examples
//rootDigit(123) ➞ 6
//// 1 + 2 + 3 = 6
//
//rootDigit(999888777) ➞ 9
//
//rootDigit(1238763636555555555555) ➞ 6
//Notes
//Recursion is allowed.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rootDigit(999888777), 9)
//Test.assertEquals(rootDigit(1111177999888777999888777999888777n), 1)
//Test.assertEquals(rootDigit(1238763636555555555555n), 6)
//Test.assertEquals(rootDigit(1238222222222222222263612387636361238763636n), 7)
//Test.assertEquals(rootDigit(0), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx: Character Classes VIII ⁠- \d

//tags: formatting,language_fundamentals,regex

//url: https://edabit.com/challenge/RkjYq6Bnr24ucHtay

//Description:
//You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
//Here are a list of the characters classes in JavaScript:
//., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
//Extract the addresses from this string:
//const str = "123 Redding Dr. 1560 Knoxville Ave. 3030 Norwalk Dr. 5 South St."
//
//// ["123 Redding Dr.", "1560 Knoxville Ave.", "3030 Norwalk Dr.", "5 South St."]
//Write the regular expression that matches all street addresses. All street addresses begin with a number. Use the character class \d in your expression.
//Notes
//Check the Resources tab for details on character classes if you're stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str = "123 Redding Dr. 1560 Knoxville Ave. 3030 Norwalk Dr. 5 South St."
//​
//const validate = (REGEXP) => {
//   if(!/\\d/.test(String(REGEXP))) return () => "required"
//   return function testReg(str) {
//     return str.match(REGEXP)
//   }
//}
//​
//const testExp = validate(REGEXP)
//console.log(testExp(str))
//​
//Test.assertNotEquals(testExp(str), "required", "You are required to use a \d character class in your expression.")
//Test.assertSimilar(testExp(str), ["123 Redding Dr.", "1560 Knoxville Ave.", "3030 Norwalk Dr.", "5 South St."])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Who Left the Array?

//tags: arrays,validation

//url: https://edabit.com/challenge/yQGTggivy7eadXwBN

//Description:
//You are given two arrays. The elements in arr1 threw a party and started to mix around. However, one of the elements got lost! Your task is to return the element which was lost.
//Examples
//missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]) ➞ 2
//
//missing([true, true, false, false, true], [false, true, false, true]) ➞ true
//
//missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]) ➞ "ugly"
//Notes
//Assume that the first array always contains 1 or more elements.
//Elements are always lost.
//An element can also have duplicates.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]), 2)
//Test.assertEquals(missing(['Jane', 'is', 'pretty', 'ugly'], ['Jane', 'is', 'pretty']), 'ugly')
//Test.assertEquals(missing([true, true, false, false, true], [false, true, false, true]), true)

