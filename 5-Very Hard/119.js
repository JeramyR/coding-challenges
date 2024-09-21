

//title: Coconut Communication

//tags: loops,strings

//url: https://edabit.com/challenge/zoWgne3McC6zdRYdZ

//Description:
//"coconuts" has 8 letters.
//A byte in binary has 8 bits.
//A byte can represent a character.
//We can use the word "coconuts" to communicate with each other in binary if we use upper case letters as 1s and lower case letters as 0s.
//Create a function that translates a word in plain text, into Coconut.
//Worked Example
//The binary for "coconuts" is
//01100011 01101111 01100011 01101111 01101110 01110101 01110100 01110011
//c         o        c       o       n        u        t       s
//
//Since 0s are lowercase and 1s are uppercase, we can map the binary like this.
//cOConuTS cOCoNUTS cOConuTS cOCoNUTS cOCoNUTs cOCOnUtS cOCOnUts cOCOnuTS
//
//coconut_translator("coconuts") ➞ "cOConuTS cOCoNUTS cOConuTS cOCoNUTS cOCoNUTs cOCOnUtS cOCOnUts cOCOnuTS"
//Examples
//coconutTranslator("Hi") ➞ "cOcoNuts cOCoNutS"
//
//coconutTranslator("edabit") ➞ "cOConUtS cOConUts cOConutS cOConuTs cOCoNutS cOCOnUts"
//
//coconutTranslator("123") ➞ "coCOnutS coCOnuTs coCOnuTS"
//Notes
//All inputs will be strings.
//Make sure to separate the coconuts with spaces.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(coconutTranslator("Hi"), "cOcoNuts cOCoNutS")
//Test.assertEquals(coconutTranslator("edabit"), "cOConUtS cOConUts cOConutS cOConuTs cOCoNutS cOCOnUts")
//Test.assertEquals(coconutTranslator("123"), "coCOnutS coCOnuTs coCOnuTS")
//Test.assertEquals(coconutTranslator("coconuts"), "cOConuTS cOCoNUTS cOConuTS cOCoNUTS cOCoNUTs cOCOnUtS cOCOnUts cOCOnuTS")
//Test.assertEquals(coconutTranslator(""), "")
//​
//// Original Python Challenge by Joshua Señoron.

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Chocolates Parcel

//tags: algorithms,functional_programming,logic

//url: https://edabit.com/challenge/7e3mGcRbxCXFz4aNH

//Description:
//Mubashir needs to assemble a parcel of ordered chocolates. He got two types of chocolates:
//Small chocolates (2 grams each)
//Big chocolates (5 grams each)
//Create a function that takes three parameters: Number of small available chocolates nSmall, number of big chocolates available nBig and desired weight (in grams) of the final parcel order.
//The function should return the required number of small chocolates to achieve the goal. The function should return -1 if the goal cannot be achieved by any possible combinations of small and big chocolates.
//Examples
//chocolatesParcel(4, 1, 13) ➞ 4
//// 4 small chocolates = 8 grams
//// 1 big chocolate = 5 grams
//// 8 + 5 = 13 grams
//// Required number of small chocolates = 4
//
//chocolatesParcel(4, 1, 14) ➞ -1
//// You can not make any combination to reach 14 grams.
//
//chocolatesParcel(2, 1, 7) ➞ 1
//// 1 big chocolate = 5 grams
//// 1 small chocolates = 2 grams
//// 5 + 2 = 7 grams
//// Required number of small chocolates = 1
//Notes
//Maximize the use of big chocolates that are available to achieve the desired goal. And only then should you proceed to use the small chocolates.
//You can't break chocolates into small pieces.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(chocolatesParcel(0, 1, 5), 0)
//Test.assertEquals(chocolatesParcel(3, 1, 6), 3)
//Test.assertEquals(chocolatesParcel(3, 0, 7), -1)
//Test.assertEquals(chocolatesParcel(2, 1, 9), 2)
//Test.assertEquals(chocolatesParcel(58, 156, 283), 4)
//Test.assertEquals(chocolatesParcel(3, 1000, 5012), -1)
//Test.assertEquals(chocolatesParcel(1, 1, 1), -1)
//Test.assertEquals(chocolatesParcel(1, 1, 8), -1)
//Test.assertEquals(chocolatesParcel(4, 1, 12), -1)
//Test.assertEquals(chocolatesParcel(10, 400, 2004), 2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Palindrome Descendant

//tags: arrays,higher_order_functions,recursion,validation

//url: https://edabit.com/challenge/HXRsxLL6vBqJtKeQu

//Description:
//A number may not be a palindrome, but its descendant can be. A number's direct child is created by summing each pair of adjacent digits to create the digits of the next number.
//For instance, 123312 is not a palindrome, but its next child 363 is, where: 3 = 1 + 2; 6 = 3 + 3; 3 = 1 + 2.
//Create a function that returns true if the number itself is a palindrome or any of its descendants down to the first 2 digit number (a 1-digit number is trivially a palindrome).
//Examples
//palindromedescendant(11211230) ➞ true
//// 11211230 ➞ 2333 ➞ 56 ➞ 11
//
//palindromeDescendant(13001120) ➞ true
//// 13001120 ➞ 4022 ➞ 44
//
//palindromeDescendant(23336014) ➞ true
//// 23336014 ➞ 5665
//
//palindromeDescendant(11) ➞ true
//// Number itself is a palindrome.
//Notes
//Numbers will always have an even number of digits.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(palindromeDescendant(11211230), true)
//Test.assertEquals(palindromeDescendant(13001120), true)
//Test.assertEquals(palindromeDescendant(23336014), true)
//Test.assertEquals(palindromeDescendant(11), true)
//Test.assertEquals(palindromeDescendant(1122), false)
//Test.assertEquals(palindromeDescendant(332233), true)
//Test.assertEquals(palindromeDescendant(10210112), true)
//Test.assertEquals(palindromeDescendant(9735), false)
//Test.assertEquals(palindromeDescendant(97358817), false)

