

//title: Fix the Error / Comparing Arrays (Part #2)

//tags: arrays,bugs,validation

//url: https://edabit.com/challenge/MWRiXba7bvi792SmQ

//Description:
//Create a function that returns true if two arrays sharing the same length have identical numerical values at every index, and false otherwise.
//To solve this question, your friend initially wrote the following code (see this challenge):
//function checkEquals(arr1, arr2) {
//  if (arr1 === arr2) {
//    return true
//   } else {
//    return false
//   }
//}
//If you're unsure why the above code doesn't work, I recommend doing that challenge first.
//Your friend did some more research and he fixed the code into the following:
//function checkEquals(arr1, arr2) {
//  if (arr1.join("") === arr2.join("")) {
//    return true
//   } else {
//    return false
//   }
//}
//It works in most cases, but on some cases it fails. This confuses him, can you spot the error and fix it?
//Examples
//checkEquals([1, 2], [1, 3]) ➞ false
//
//checkEquals([1, 2], [1, 2]) ➞ true
//
//checkEquals([4, 5, 6], [4, 5, 6]) ➞ true
//
//checkEquals([4, 7, 6], [4, 5, 6]) ➞ false
//
//checkEquals([1, 12], [11, 2]) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// JavaScript
//// test cases
//let actual = [checkEquals([1, 2], [1, 2]), checkEquals([1, 2], [1, 3]), 
//             checkEquals([11, 2], [1, 12]), checkEquals([34, 56, 98], [34, 56, 98]),
//             checkEquals([1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7], [11, 12, 13, 14, 15, 16, 17]),
//             checkEquals([11, 12, 15, 16, 19], [11, 13, 15, 1, 6, 19, 20]), 
//              checkEquals([11, 12, 13, 14, 15, 16], [11, 12, 13, 14, 15, 16]), checkEquals([123, 45, 6, 78, 90], [1234, 5678, 90]),
//             checkEquals([23, 26, 78, 934], [94, 26, 78, 934]), checkEquals([], []),
//             checkEquals([9, 87, 1, 23], [98, 7, 12, 3])]
//​
//// results
//let expected = [true, false, false, true, false, false, true, false, false, true, false]
//​
//// messages
//let message = ["", "", "Are you sure this is true?", "", "Should return false", "", "", "", "", "", ""]
//​
//// run tests
//for (i in actual){
//  Test.assertEquals(actual[i], expected[i], message[i])
//}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Word Endings

//tags: arrays,higher_order_functions,loops,strings

//url: https://edabit.com/challenge/hwWLHcDoPZmXcGHyd

//Description:
//Create a function that adds a string ending to each member in an array.
//Examples
//addEnding(["clever", "meek", "hurried", "nice"], "ly")
//➞ ["cleverly", "meekly", "hurriedly", "nicely"]
//
//addEnding(["new", "pander", "scoop"], "er")
//➞ ["newer", "panderer", "scooper"]
//
//addEnding(["bend", "sharpen", "mean"], "ing")
//➞ ["bending", "sharpening", "meaning"]
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(addEnding(['clever', 'meek', 'hurried', 'nice'], 'ly'), ['cleverly', 'meekly', 'hurriedly', 'nicely'])
//Test.assertSimilar(addEnding(['new', 'pander', 'scoop'], 'er'), ['newer', 'panderer', 'scooper'])
//Test.assertSimilar(addEnding(['bend', 'sharpen', 'mean'], 'ing'), ['bending', 'sharpening', 'meaning'])
//Test.assertSimilar(addEnding(['bend', 'tooth', 'mint'], 'y'), ['bendy', 'toothy', 'minty'])
//Test.assertSimilar(addEnding(['bend', 'tooth', 'mint'], 'ier'), ['bendier', 'toothier', 'mintier'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Missing Third Angle

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/djyXcJZAuezrSXJ4j

//Description:
//You are given 2 out of 3 angles in a triangle, in degrees.
//Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
//An acute angle is less than 90 degrees.
//A right angle is exactly 90 degrees.
//An obtuse angle is greater than 90 degrees (but less than 180 degrees).
//For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.
//Examples
//missingAngle(27, 59) ➞ "obtuse"
//
//missingAngle(135, 11) ➞ "acute"
//
//missingAngle(45, 45) ➞ "right"
//Notes
//The sum of angles of any triangle is always 180 degrees.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(missingAngle(27, 59), "obtuse")
//Test.assertEquals(missingAngle(135, 11), "acute")
//Test.assertEquals(missingAngle(45, 45), "right")
//Test.assertEquals(missingAngle(45, 15), "obtuse")
//Test.assertEquals(missingAngle(31, 100), "acute")
//Test.assertEquals(missingAngle(35, 55), "right")

