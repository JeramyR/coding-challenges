

//title: Bridge Shuffle

//tags: arrays,loops

//url: https://edabit.com/challenge/8ZkrgupsQxf6f9xXR

//Description:
//Create a function to bridge shuffle two arrays. To bridge shuffle, you interleave the elements from both arrays in an alternating fashion, like so:
//Array 1 = ["A", "A", "A"]
//Array 2 = ["B", "B", "B"]
//
//Shuffled Array = ["A", "B", "A", "B", "A", "B"]
//This can still work with two arrays of uneven length. We simply tack on the extra elements from the longer array, like so:
//Array 1 = ["C", "C", "C", "C"]
//Array 2 = ["D"]
//
//Shuffled Array = ["C", "D", "C", "C", "C"]
//Create a function that takes in two arrays and returns the bridge-shuffled array.
//Examples
//bridgeShuffle(["A", "A", "A"], ["B", "B", "B"]) ➞ ["A", "B", "A", "B", "A", "B"]
//
//bridgeShuffle(["C", "C", "C", "C"], ["D"]) ➞ ["C", "D", "C", "C", "C"]
//
//bridgeShuffle([1, 3, 5, 7], [2, 4, 6]) ➞ [1, 2, 3, 4, 5, 6, 7]
//Notes
//Elements in both arrays can be strings or integers.
//If two arrays are of unequal length, add the additional elements of the longer array to the end of the shuffled array.
//Always start your shuffle with the first element of Array 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(bridgeShuffle(['A', 'A', 'A'], ['B', 'B', 'B']), ['A', 'B', 'A', 'B', 'A', 'B'])
//Test.assertSimilar(bridgeShuffle(['C', 'C', 'C', 'C'], ['D']), ['C', 'D', 'C', 'C', 'C'])
//Test.assertSimilar(bridgeShuffle([1, 3, 5, 7], [2, 4, 6]), [1, 2, 3, 4, 5, 6, 7])
//Test.assertSimilar(bridgeShuffle([10, 9, 8], [1, 2, 3, 4]), [10, 1, 9, 2, 8, 3, 4])
//Test.assertSimilar(bridgeShuffle(['h', 'h', 'h'], ['a', 'a', 'a']), ['h', 'a', 'h', 'a', 'h', 'a'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: RGB to Hex Color Converter

//tags: arrays,objects,strings

//url: https://edabit.com/challenge/dLfz4nn5GYL8cLsGM

//Description:
//Create a function that converts color in RGB format to Hex format.
//Examples
//rgbToHex("rgb(0, 128, 192)") ➞ "#0080c0"
//
//rgbToHex("rgb(45, 255, 192)") ➞ "#2dffc0"
//
//rgbToHex("rgb(0, 0, 0)") ➞ "#000000"
//Notes
//The Hex format should be displayed in lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rgbToHex("rgb(0, 128, 192)"), "#0080c0")
//Test.assertEquals(rgbToHex("rgb(45, 255, 192)"), "#2dffc0")
//Test.assertEquals(rgbToHex("rgb(255, 255, 255)"), "#ffffff")
//Test.assertEquals(rgbToHex("rgb(192, 192, 192)"), "#c0c0c0")
//Test.assertEquals(rgbToHex("rgb(255, 0, 0)"), "#ff0000")
//Test.assertEquals(rgbToHex("rgb(0, 0, 255)"), "#0000ff")
//Test.assertEquals(rgbToHex("rgb(0, 0, 0)"), "#000000")
//Test.assertEquals(rgbToHex("rgb(11, 12, 13)"), "#0b0c0d")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Extract a Value between Two Values

//tags: regex

//url: https://edabit.com/challenge/ZqLdW8smjmTQcLyHc

//Description:
//Create a function that returns a RegEx that can be used to extract a value between two values. The two arguments are values that encapsule the value we want to extract.
//Examples
//"The red Car is fast".match(extractValueRegExp("The "," is fast"))[0] ➞ "red Car"
//
//"We'll meet at 5am at the Circus".match(extractValueRegExp("We'll meet at "," at the Circus"))[0] ➞ "5am"
//
//"I want a Lollipop".match(extractValueRegExp("want "," Lollipop"))[0] ➞ "a"
//Notes
//You must to use lookaheads and lookbehinds (see Resources for details).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//console.log('Checking for lookbehind')
//Test.assertEquals(/\(\?\<\=/.test(extractValueRegExp.toString()),true,'you have to use positive lookbehind')
//console.log('Checking for lookahead')
//Test.assertEquals(/\(\?\=/.test(extractValueRegExp.toString()),true,'you have to use positive lookahead')
//Test.assertEquals("This is what you have become!".match(extractValueRegExp("This is what "," have become."))[0],'you')
//Test.assertEquals("We are at the Zoo".match(extractValueRegExp("We "," at the Zoo"))[0], "are")
//Test.assertEquals("I want a Lollipop".match(extractValueRegExp("want "," Lollipop"))[0],'a')
//Test.assertEquals("The red Car is fast".match(extractValueRegExp("The red Car is ",""))[0],'fast')
//Test.assertEquals("I was a fast learner too, but then i started doing heroin".match(extractValueRegExp("I was a fast "," too, but then i started doing heroin"))[0],'learner')

