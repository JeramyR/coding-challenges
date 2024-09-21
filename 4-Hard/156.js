

//title: Is a String Stretched?

//tags: strings,validation

//url: https://edabit.com/challenge/gmpe3wEi64PmrwFMK

//Description:
//Write a function that returns true if the first string is the second string stretched, and false otherwise. A stretch is to repeat each character in a string the same number of times.
//Examples
//isStretched("pppaaannndddaaa", "panda") ➞ true
//
//isStretched("sssshhiipp", "ship") ➞ false
//
//isStretched("magnet", "magnet") ➞ true
//
//isStretched("magneto", "magnet") ➞ false
//Notes
//Both strings must contain the same letters in order for the stretch to be valid.
//All strings will be in lower case letters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isStretched("pppaaannndddaaa", "panda"), true)
//Test.assertEquals(isStretched("hheelllloo", "hello"), true)
//Test.assertEquals(isStretched("magnet", "magnet"), true)
//Test.assertEquals(isStretched("eeeeemmmmmoooootttttiiiiiooooonnnnn", "emotion"), true)
//Test.assertEquals(isStretched("sssshhiipp", "ship"), false)
//Test.assertEquals(isStretched("cccaaannnddooorrr", "candor"), false)
//Test.assertEquals(isStretched("relationshiipp", "relationship"), false)
//Test.assertEquals(isStretched("magneto", "magnet"), false)
//Test.assertEquals(isStretched("maggnet", "magnet"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Maya Number System

//tags: formatting,math,numbers

//url: https://edabit.com/challenge/n6ts9wQi6Dcb6bmP7

//Description:
//Maya numeral system was vigesimal (base 20) and positional: units, tens, hundreds (and so on) were read as descendant progressive powers of 20, instead of 10 like we do with our decimal system. Some examples:
//- 39 => (1 x 20¹) + (19 x 20º)
//- 815 => (2 x 20²) + (0 x 20¹) + (15 x 20º)
//- 16125 => (2 x 20³) + (0 x 20²) + (6 x 20¹) + (5 x 20º)
//Every digit (as to say the number to be multiplied for the power of 20) was symbolized with a combination of pebbles (dots), woodsticks (lines) and shells (used for the number 0) following a base5 system. See the table below:
//
//You must implement a function that, given a non-negative integer, returns an array of strings, with each string representing the symbolized single digit.
//Symbols to use are "@" for shells, "—" for lines and "o" for dots. Dots have to be placed before the lines.
//Examples
//// Be careful, spaces between symbols are placed only for better
//// readability! Don't use spaces in returned strings.
//
//mayaNumber(39) ➞ ["o", "o o o o — — —"]
//
//mayaNumber(815) ➞ ["o o", "@", "— — —"]
//
//mayaNumber(16125) ➞ ["o o", "@", "o —", "—"]
//Notes
//Check the Resources tab for more info on Maya numerals (and Maya arithmetic).
//All given integers are valid, no exceptions to handle.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(mayaNumber(39), ["o", "oooo———"], "Example #1")
//Test.assertSimilar(mayaNumber(815), ["oo", "@", "———"], "Example #2")
//Test.assertSimilar(mayaNumber(16125), ["oo", "@", "o—", "—"], "Example #3")
//Test.assertSimilar(mayaNumber(0), ["@"])
//Test.assertSimilar(mayaNumber(1985), ["oooo", "oooo———", "—"])
//Test.assertSimilar(mayaNumber(86420), ["——", "o———", "o", "@"])
//Test.assertSimilar(mayaNumber(13579), ["o", "ooo——", "ooo———", "oooo———"])
//Test.assertSimilar(mayaNumber(666), ["o", "ooo——", "o—"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Combined Array Sequence

//tags: arrays,logic,validation

//url: https://edabit.com/challenge/oX9kdz2h6pQH7NJ2m

//Description:
//The goal is to test if a consecutive sequence is formed. A consecutive sequence is defined as sequence of incrementing numbers (e.g. 1, 2, 3 or 5, 6, 7, 8). The twist is that you have to consider the combination of arrays as shown.
//[3 5 1 -5 ]  =>  [3+4  5+3  1+8  15-5]  =  [7 8 9 10]  =>  true
//[4 3 8 15]
//Also important is that the arrays can be of different sizes, where excess numbers in the longer one will be paired with 0s from the other one.
//[2 2 2  ]  =>  [2+5  2+6  2+7  10+0]  = [ 7 8 9 10]  =>  true
//[5 6 7 10]
//Notes
//Each array has at least two elements.
//Try the harder version.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hasConsecutiveSeries([1, 2, 3], [1, 1, 1]), true)
//Test.assertEquals(hasConsecutiveSeries([1, 2, 3], [1, 2, 1]), false)
//Test.assertEquals(hasConsecutiveSeries([4, 6, -5, 8, 4], [-2, -3, 9, -3, 2]), true)
//Test.assertEquals(hasConsecutiveSeries([12, 3], [0, 10, 14, 15, 16]), true)
//Test.assertEquals(hasConsecutiveSeries([8, 6, 10], [25, 28, 25, 26, 28, 29]), false)
//Test.assertEquals(hasConsecutiveSeries([11, 5, 3], [-2, 5, 8, 12]), true)
//Test.assertEquals(hasConsecutiveSeries([11, 5, 3], [-2, 5, 8, 11]), false)

