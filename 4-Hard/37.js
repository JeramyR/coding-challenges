

//title: All Rotations of a String

//tags: arrays,loops,strings

//url: https://edabit.com/challenge/XoBFQ9CJDBFEKEAj9

//Description:
//Create a left rotation and a right rotation function that returns all the left rotations and right rotations of a string.
//Examples
//leftRotations("abc") ➞ ["abc", "bca", "cab"]
//
//rightRotations("abc") ➞ ["abc", "cab", "bca"]
//
//leftRotations("abcdef") 
//➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]
//
//rightRotations("abcdef") 
//➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(leftRotations("abc"), 
//    ["abc", 
//    "bca", 
//    "cab"])
//​
//Test.assertSimilar(leftRotations("abcdef"),
//    ["abcdef", 
//    "bcdefa", 
//    "cdefab", 
//    "defabc", 
//    "efabcd", 
//    "fabcde"])
//​
//Test.assertSimilar(leftRotations("himalaya"), 
//    ["himalaya", 
//    "imalayah", 
//    "malayahi", 
//    "alayahim", 
//    "layahima", 
//    "ayahimal", 
//    "yahimala", 
//    "ahimalay"])
//​
//Test.assertSimilar(leftRotations("aab"), 
//    ["aab", 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Metaprogramming: Making a Test Case

//tags: higher_order_functions,scope,strings,validation

//url: https://edabit.com/challenge/9tJ97HK3c4Koy3KsF

//Description:
//You are given two values a and b of identical type: numbers, strings or arrays. The result will be:
//The sum of a and b if the parameters are numbers.
//a = 1 | b = 1 ➞ Result = 2
//The join in a single string of a and b if the parameters are strings.
//a = "1" | b = "1" ➞ Result = "11"
//The concatenation of the values of a and b in a single array if the parameters are arrays.
//a = ["String"] | b = ["String"] ➞ Result = ["String", "String"]
//In any case, you don't have to simply return the result. This challenge will be a little different from usual because your function is going to return the same Test Case that verifies the correctness of your function!
//When you try to solve a challenge your function is passed to a Test function, that accepts three parameters: your function with its related parameters, the expected result, and an optional comment (not used in this exercise).
//There are two different types for a Test function:
//Test.assertEquals(yourFunctionName(firstParameter, ..., lastParameter), result)
//This is used when the value type of the expected result is primitive (numbers, strings, booleans or special values like undefined, null and NaN).
//Test.assertSimilar(yourFunctionName(firstParameter, ..., lastParameter), result)
//This is used when the value type of the expected result is an object (arrays or object literals).
//You must return a string containing the Test function that verifies the correctness of the result that you got. See the examples below for a better explanation.
//Examples
//createTest(1, 1) ➞ 'Test.assertEquals(createTest(1, 1), 2)'
//// Parameters are numbers, so result will be their sum: Test function verifies equality.
//
//createTest("a", "b") ➞ 'Test.assertEquals(createTest("a", "b"), "ab")'
//// Parameters are strings, so result will be their join: Test function verifies equality.
//
//createTest(["String"], ["String"]) ➞ 'Test.assertSimilar(createTest(["String"], ["String"]), ["String", "String"])'
//// Parameters are arrays, so result will be the concatenation of the values inside the arrays: Test function verifies similarity.
//Notes
//When parameters, results or values inside arrays are strings, they need the double quotation marks " around them in the returned string.
//Look at Tests tab if you need help!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(createTest("a", "b"), 'Test.assertEquals(createTest("a", "b"), "ab")')
//Test.assertEquals(createTest("Te", "st"), 'Test.assertEquals(createTest("Te", "st"), "Test")')
//Test.assertEquals(createTest("1", "1"), 'Test.assertEquals(createTest("1", "1"), "11")')
//Test.assertEquals(createTest(1, 1), 'Test.assertEquals(createTest(1, 1), 2)')
//Test.assertEquals(createTest(99, 1), 'Test.assertEquals(createTest(99, 1), 100)')
//Test.assertEquals(createTest(0, 0), 'Test.assertEquals(createTest(0, 0), 0)')
//Test.assertEquals(createTest([1], [1]), 'Test.assertSimilar(createTest([1], [1]), [1, 1])')
//Test.assertEquals(createTest(["1"], ["1"]), 'Test.assertSimilar(createTest(["1"], ["1"]), ["1", "1"])')
//Test.assertEquals(createTest(["String"], ["String"]), 'Test.assertSimilar(createTest(["String"], ["String"]), ["String", "String"])')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: What`s the Missing Letter?

//tags: loops,strings,validation

//url: https://edabit.com/challenge/t6HFLEYD2e7ePxAu5

//Description:
//Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).
//If there are no missing letters in the string, return "No Missing Letter".
//Examples
//missingLetter("abdefg") ➞ "c"
//
//missingLetter("mnopqs") ➞ "r"
//
//missingLetter("tuvxyz") ➞ "w"
//
//missingLetter("ghijklmno") ➞ "No Missing Letter"
//Notes
//The given string will never have more than one missing letter.

//code area
////////////////////////////////////////////////////////////////
const missingLetter = inputStr => {
    let charCode = 0

    for (let i = 0; i < inputStr.length - 1; i++) {
        if (inputStr.charCodeAt(i) + 1 !== inputStr.charCodeAt(i + 1)) {
            charCode = inputStr.charCodeAt(i) + 1
        }
    }
    return charCode === 0 ? "No Missing Letter" : String.fromCharCode(charCode)
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(missingLetter("abdefg"), "c", "Example #1")
// Test.assertEquals(missingLetter("mnopqs"), "r", "Example #2")
// Test.assertEquals(missingLetter("tuvxyz"), "w", "Example #3")
// Test.assertEquals(missingLetter("jlm"), "k")
// Test.assertEquals(missingLetter("rsu"), "t")
// Test.assertEquals(missingLetter("eghij"), "f")
// Test.assertEquals(missingLetter("qrtuv"), "s")
// Test.assertEquals(missingLetter("ghijklmno"), "No Missing Letter", "Example #4")
// Test.assertEquals(missingLetter("xyz"), "No Missing Letter")

