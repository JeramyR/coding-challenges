

//title: Hamming Distance

//tags: loops,strings

//url: https://edabit.com/challenge/vCtepsfrE7Nts2a9j

//Description:
//Hamming distance is the number of characters that differ between two strings.
//To illustrate:
//String1: "abcbba"
//String2: "abcbda"
//
//Hamming Distance: 1 - "b" vs. "d" is the only difference.
//Create a function that computes the hamming distance between two strings.
//Examples
//hammingDistance("abcde", "bcdef") ➞ 5
//
//hammingDistance("abcde", "abcde") ➞ 0
//
//hammingDistance("strong", "strung") ➞ 1
//Notes
//Both strings will have the same length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hammingDistance("abcde", "bcdef"), 5)
//Test.assertEquals(hammingDistance("abcde", "abcde"), 0)
//Test.assertEquals(hammingDistance("strong", "strung"), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fix the Error: Filtering out Empty Arrays

//tags: arrays,bugs

//url: https://edabit.com/challenge/4weFPnpgS2S5aw4aN

//Description:
//I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:
//function removeEmptyArrays(arr) {
//  return arr.filter(x => x !== [])
//}
//However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.
//Examples
//// What I want:
//removeEmptyArrays(["a", "b", []]) ➞ ["a", "b"]
//removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, 4]
//
//// What I am getting:
//removeEmptyArrays(["a", "b", []]) ➞ ["a", "b", []]
//removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, [], 4]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(removeEmptyArrays(['a', 'b', []]), ['a', 'b'])
//Test.assertSimilar(removeEmptyArrays([1, 2, [], 4]), [1, 2, 4])
//Test.assertSimilar(removeEmptyArrays([[], [], [], []]), [])
//Test.assertSimilar(removeEmptyArrays([1, 2, 3, 4]), [1, 2, 3, 4])
//Test.assertSimilar(removeEmptyArrays([1, [], [], 4]), [1, 4])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RegEx: Character Classes IX ⁠- \w

//tags: regex,strings

//url: https://edabit.com/challenge/AS2NGeGLnwWbMr5SP

//Description:
//You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
//Here is a list of the character classes in JavaScript:
//., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
//There is a hidden word in this string:
//const str = "**^&$Regular#$%Expressions$%$$%^**"
//Write the regular expression that reveals the hidden word. You have to remove all of the special characters to reveal the word. Use the character class \w in your expression.
//Notes
//Check the Resources tab for details on character classes if you're stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str = "**^&$Regular#$%Expressions$%$$%^**"
//​
//const validate = (REGEXP) => {
//   if(!/\\w/.test(String(REGEXP))) return () => "required"
//   return function testReg(str) {
//     return str.match(REGEXP).join("")
//   }
//}
//​
//const testExp = validate(REGEXP)
//console.log(testExp(str))
//​
//Test.assertNotEquals(testExp(str), "required", "You are required to use a \w character class in your expression.")
//Test.assertSimilar(testExp(str), "RegularExpressions")

