

//title: Does the Object Contain a Given Key?

//tags: language_fundamentals,objects,validation

//url: https://edabit.com/challenge/jJS3yokQmu4etN5qs

//Description:
//Write a function that returns true if a hash contains the specified key, and false otherwise.
//Examples
//hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false
//
//hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false
//
//hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hasKey({ pot: 1, tot: 2, not: 3 }, "not"), true)
//Test.assertEquals(hasKey({ craves: true, midnight: true, snack: true }, "morning"), false)
//Test.assertEquals(hasKey({ a: 44, b: 45, c: 46 }, "d"), false)
//Test.assertEquals(hasKey({ a: "z", b: "y", c: "x" }, "c"), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Broken Bridge

//tags: language_fundamentals,strings,validation

//url: https://edabit.com/challenge/YjkNx49pk7Eois9pi

//Description:
//Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).
//Examples
//isSafeBridge("####") ➞ true
//
//isSafeBridge("## ####") ➞ false
//
//isSafeBridge("#") ➞ true
//Notes
//You can expect the bridge's ends connecting it to its surrounding.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isSafeBridge("####"), true)
//Test.assertEquals(isSafeBridge("## ####"), false)
//Test.assertEquals(isSafeBridge("#"), true)
//Test.assertEquals(isSafeBridge("# #"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Between Words

//tags: strings,validation

//url: https://edabit.com/challenge/j63YSGGK9xoLiXCKF

//Description:
//Write a function that takes three string arguments (first, last, and word) and returns true if word is found between first and last in the dictionary, otherwise false.
//Examples
//isBetween("apple", "banana", "azure") ➞ true
//
//isBetween("monk", "monument", "monkey") ➞ true
//
//isBetween("bookend", "boolean", "boost") ➞ false
//Notes
//All letters will be in lowercase.
//All three words will be different.
//Remember that the string word is in the middle.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isBetween("apple", "banana", "azure"), true)
//Test.assertEquals(isBetween("bookcase", "zebra", "squid"), true)
//Test.assertEquals(isBetween("shrapnel", "tapenade", "tally"), true)
//Test.assertEquals(isBetween("monk", "monument", "monkey"), true)
//Test.assertEquals(isBetween("oath", "ostrich", "osteoporosis"), true)
//Test.assertEquals(isBetween("ostracize", "ostrich", "open"), false)
//Test.assertEquals(isBetween("bookend", "boolean", "boost"), false)
//Test.assertEquals(isBetween("tamer", "tanner", "timid"), false)
//Test.assertEquals(isBetween("rhino", "sorcerer", "quote"), false)
//Test.assertEquals(isBetween("body", "lung", "ace"), false)

