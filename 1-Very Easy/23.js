

//title: To the Power of _____

//tags: logic,loops,math,numbers

//url: https://edabit.com/challenge/H25aG5aAdmFcMpBsg

//Description:
//Create a function that takes a base number and an exponent number and returns the calculation.
//Examples
//calculateExponent(5, 5) ➞ 3125
//
//calculateExponent(10, 10) ➞ 10000000000
//
//calculateExponent(3, 3) ➞ 27
//Notes
//All test inputs will be positive integers
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(calculateExponent(5,5), 3125)
//Test.assertEquals(calculateExponent(3,3), 27)
//Test.assertEquals(calculateExponent(10,10), 10000000000)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return the Last Element in an Array

//tags: arrays,language_fundamentals,validation

//url: https://edabit.com/challenge/7JBTN4TbaxJQMdX9W

//Description:
//Create a function that accepts an array and returns the last item in the array.
//Examples
//getLastItem([1, 2, 3]) ➞ 3
//
//getLastItem(["cat", "dog", "duck"]) ➞ "duck"
//
//getLastItem([true, false, true]) ➞ true
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getLastItem(['Cat', 'Dog', 'Duck']), 'Duck')
//Test.assertEquals(getLastItem([1, 2, 3]), 3)
//Test.assertEquals(getLastItem([undefined]))
//Test.assertEquals(getLastItem([true, false, false, true]), true)
//Test.assertEquals(getLastItem([7, 'String', false, undefined, null]), null)
//Test.assertEquals(getLastItem([false]), false)
//Test.assertEquals(getLastItem([undefined, undefined, undefined]), undefined)
//Test.assertEquals(getLastItem([1, 2, 3, 56, 87, 23, 65, 45]), 45)
//Test.assertEquals(getLastItem(['Apple', 'Orange', undefined]), undefined)
//Test.assertEquals(getLastItem([true, false, 'Apple']), 'Apple')
//Test.assertEquals(getLastItem([null, null, null]), null)
//Test.assertEquals(getLastItem([1]), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: String and Number Conversions

//tags: language_fundamentals,numbers,strings

//url: https://edabit.com/challenge/svGRKq2Z7SnZiqYwy

//Description:
//You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.
//Examples:
//intToString(4) ➞ "4"
//
//stringToInt("4") ➞ 4
//
//intToString(29348) ➞ "29348"
//Notes
//You will get bonus points if you manage to solve this without using toString, parseInt or parseFloat.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let flag = true;
//function toggleFlag() {
//  flag = false;
//}
//oldToString = Object.prototype.toString;
//Number.prototype.toString = function() {
//  toggleFlag();
//  return "" + this
//}
//oldParseInt = parseInt;
//parseInt = function() {
//  toggleFlag();
//  return oldParseInt(...arguments);
//}
//oldParseFloat = parseFloat;
//parseFloat = function() {
//  toggleFlag();
//  return oldParseFloat(...arguments);
//}
//​
//Test.assertEquals(intToString(4), '4')
//Test.assertEquals(intToString(65), '65')
//Test.assertEquals(intToString(29348), '29348')
//Test.assertEquals(intToString(49583908545), '49583908545')
//​

