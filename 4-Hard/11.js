

//title: Word to Bitstring to Boolean Array

//tags: arrays,objects,strings

//url: https://edabit.com/challenge/9JcSwa4dN5PEmdBEg

//Description:
//Create a function that converts a word to a bitstring and then to a boolean array based on the following criteria:
//Locate the position of the letter in the English alphabet (from 1 to 26).
//Odd positions will be represented as 1 and even positions will be represented as 0.
//Convert the represented positions to boolean values, 1 for true and 0 for false.
//Store the conversions into an array.
//Examples
//toBoolArray("deep") ➞ [false, true, true, false]
//// deep converts to 0110
//// d is the 4th alphabet - 0
//// e is the 5th alphabet - 1
//// e is the 5th alphabet - 1
//// p is the 16th alphabet - 0
//
//toBoolArray("loves") ➞ [false, true, false, true, true]
//
//toBoolArray("tesh") ➞ [false, true, true, false]
//Notes
//The letter A is at position 1 and Z at 26.
//All input strings are in lowercase letters of the English alphabet.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expectedParam] = [
//  [
//    "charming", "exquisite", "admire", "deep", "loves", "tesh",
//    "xavier", "adores", "tesha", "esquire", "randomize", "exotic"
//  ],
//  [
//    [true, false, true, false, true, true, false, true],
//    [true, false, true, true, true, true, true, false, true],
//    [true, false, true, true, false, true],
//    [false, true, true, false],
//    [false, true, false, true, true],
//    [false, true, true, false],
//    [false, true, false, true, true, false],
//    [true, false, true, false, true, true],
//    [false, true, true, false, true],
//    [true, true, true, true, true, false, true],
//    [false, true, false, false, true, true, true, false, true],
//    [true, false, true, false, true, true],
//  ]
//]
//for (let i in actualParam) Test.assertSimilar(toBoolArray(actualParam[i]), expectedParam[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Convert "Zero" and "One" to "1" and "0"

//tags: arrays,formatting,logic,loops

//url: https://edabit.com/challenge/iKRmj2Q6GQHkAXXxf

//Description:
//Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.
//Examples
//textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"
//
//textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"
//
//textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"
//
//textToNumberBinary("zero one zero one zero one zero three") ➞ ""
//
//textToNumberBinary("one one") ➞ ""
//Notes
//You must return the result as a string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(textToNumberBinary('one one one one zero zero zero zero'), "11110000")
//Test.assertEquals(textToNumberBinary('one Zero zero one zero zero one one one one one zero oNe one one zero one zerO'), "1001001111101110")
//Test.assertEquals(textToNumberBinary('one zero one'), "")
//Test.assertEquals(textToNumberBinary('one zero zero one zero ten one one one one two'), "10010111")
//Test.assertEquals(textToNumberBinary('One zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero'), "1001011101100001011101100001011101100001011101100001011101100001")
//Test.assertEquals(textToNumberBinary('TWO one zero one one zero one zero'), "")
//Test.assertEquals(textToNumberBinary('TWO one zero one one zero one zero one'), "10110101")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return the Most Expensive Piece of Jewellery

//tags: objects

//url: https://edabit.com/challenge/x2LS9YvyK38uH8B7J

//Description:
//You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.
//Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".
//Examples
//mostExpensive ({
//  "Diamond Earrings": 980,
//  "Gold Watch": 250,
//  "Pearl Necklace": 4650
//}) ➞  "The most expensive one is the Pearl Necklace"
//
//mostExpensive({
//  "Silver Bracelet": 280,
//  "Gemstone Earrings": 180,
//  "Diamond Ring": 3500
//}) ➞ "The most expensive one is the Diamond Ring"
//Notes
//There will always be at least one item in the object.
//There will always be only one highest priced item (i.e. there will not be two items with the joint highest value).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mostExpensive({'Diamond Earrings': 980, 'Gold Watch': 250, 'Pearl Necklace': 4650}), "The most expensive one is the Pearl Necklace")
//Test.assertSimilar(mostExpensive({'Silver Bracelet': 280,'Gemstone Earrings': 180, 'Diamond Ring': 3500}), "The most expensive one is the Diamond Ring")
//Test.assertEquals(mostExpensive({'Simple Gold Ring': 310, 'Silver Anklet': 110, 'Crystal Bracelet': 190}), "The most expensive one is the Simple Gold Ring")

