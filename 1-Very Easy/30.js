

//title: Find the Index (Part #2)

//tags: arrays,language_fundamentals,recursion

//url: https://edabit.com/challenge/z6Pxiw289JtaE2ndL

//Description:
//Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
//Examples
//search([1, 2, 3, 4], 3) ➞ 2
//
//search([2, 4, 6, 8, 10], 8) ➞ 3
//
//search([1, 3, 5, 7, 9], 11) ➞ -1
//Notes
//If the item is not present, return -1.
//The given array is ordered.

//code area
///////////////////////////////////////////////////////////////////////////
const search = (arr, value, count = 0) => {
  if (arr[count] === undefined) {
    console.log('index:', -1)
    return;
  }
  if (arr[count] === value) {
    console.log('index:', count)
    return count;
  }
  search(arr, value, count + 1);
}
//////////////////////////////////////////////////////////////////////////

// search([1, 2, 3, 4], 3) // 2
// search([2, 4, 6, 8, 10], 10) // 4
// search([1, 3, 5, 7, 9], 3) // 1
// search([1, 5, 7, 11, 25, 100, 200, 350], 100) // 5
// search([1, 5, 7, 11, 25, 100, 200, 350], 1) // 0
// search([1, 5, 7, 11, 25, 100, 200, 350], 10) // -1

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Word Numbers!

//tags: conditions,loops,numbers,strings

//url: https://edabit.com/challenge/ghkYG7dnSKd5NWoyt

//Description:
//Create a function that returns a number, based on the string provided. Here is a list of all digits:
//String	Number
//"one"	1
//"two"	2
//"three"	3
//"four"	4
//"five"	5
//"six"	6
//"seven"	7
//"eight"	8
//"nine"	9
//"zero"	0
//Examples
//word("one") ➞ 1
//
//word("two") ➞ 2
//
//word("nine") ➞ 9
//Notes
//All numbers will be single digit positive integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(word("zero"), 0)
//Test.assertEquals(word("one"), 1)
//Test.assertEquals(word("two"), 2)
//Test.assertEquals(word("three"), 3)
//Test.assertEquals(word("four"), 4)
//Test.assertEquals(word("five"), 5)
//Test.assertEquals(word("six"), 6)
//Test.assertEquals(word("seven"), 7)
//Test.assertEquals(word("eight"), 8)
//Test.assertEquals(word("nine"), 9)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Check if an Array Contains a Given Number

//tags: arrays,language_fundamentals,validation

//url: https://edabit.com/challenge/SwyjHvkqwwQ2iJsoS

//Description:
//Write a function to check if an array contains a particular number.
//Examples
//check([1, 2, 3, 4, 5], 3) ➞ true
//
//check([1, 1, 2, 1, 1], 3) ➞ false
//
//check([5, 5, 5, 6], 5) ➞ true
//
//check([], 5) ➞ false
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(check([1, 2, 3, 4, 5], 3), true)
//Test.assertEquals(check([1, 1, 2, 1, 1], 3), false)
//Test.assertEquals(check([1, 1, 2, 1, 5, 4, 7], 7), true)
//Test.assertEquals(check([1, 1, 2, 1, 5, 4, 7], 8), false)
//Test.assertEquals(check([5, 5, 5, 6], 5), true)
//Test.assertEquals(check([], 5), false)

