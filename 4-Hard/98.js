

//title: Star Shorthand

//tags: formatting,loops,regex,strings

//url: https://edabit.com/challenge/skaEqSDppmQqApNQu

//Description:
//Write a function that converts a string into star shorthand. If a character is repeated n times, convert it into character*n.
//Examples
//toStarShorthand("abbccc") ➞ "ab*2c*3"
//
//toStarShorthand("77777geff") ➞ "7*5gef*2"
//
//toStarShorthand("abc") ➞ "abc"
//
//toStarShorthand("") ➞ ""
//Notes
//Leave lone occurrences of a character as is.
//Return an empty string if given an empty string input.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(toStarShorthand("abbccc"), "ab*2c*3")
//Test.assertEquals(toStarShorthand("haaaappyyyyy"), "ha*4p*2y*5")
//Test.assertEquals(toStarShorthand("77777geff"), "7*5gef*2")
//Test.assertEquals(toStarShorthand("11223344"), "1*22*23*24*2")
//Test.assertEquals(toStarShorthand("abc"), "abc")
//Test.assertEquals(toStarShorthand(""), "")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Get Students with Names and Notes Average

//tags: arrays,objects

//url: https://edabit.com/challenge/aZiwEFEdFvWoBvDWS

//Description:
//Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.
//Examples
//[
//  { name: "John", notes: [3, 5, 4]}
//] ➞ [
//  { name: "John", avgNote: 4 }
//]
//Notes
//Try doing it with an arrow function.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const objectsAreEqual = (actual, expected) => Object.keys(expected).every(
//  key => actual[key] === expected[key]
//)
//const areEqual = (actual, expected, compare) => expected.every(
//  (item, index) => compare(actual[index], item)
//)
//const sets = [
//  [['Jacek', [5, 4, 3]], ['Ewa', [3, 3, 3]], ['Zygmunt', [1, 2, 3]]],
//  [['Jacek', []], ['Ewa', []], ['Zygmunt', [1, 2, 3]]],
//  []
//].map(
//  set => ({ 
//    actual: getStudentsWithNamesAndAvgNote(
//      set.map(([name, notes]) => ({ name, notes }))
//    ), 
//    expected: set.map(
//      ([name, notes]) => ({ 
//      name, 
//      avgNote: notes.reduce(
//       (total, next) => total + next, 
//       0
//      ) / (notes.length || 1) 
//    }))
//  })   
//).forEach(

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Ones and Zeroes

//tags: loops,regex,strings,validation

//url: https://edabit.com/challenge/sasbE2MCNAtmEWeeq

//Description:
//Write a function that returns true if every consecutive sequence of ones is followed by a consecutive sequence of zeroes of the same length.
//Examples
//sameLength("110011100010") ➞ true
//
//sameLength("101010110") ➞ false
//
//sameLength("111100001100") ➞ true
//
//sameLength("111") ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sameLength('10'), true)
//Test.assertEquals(sameLength('1010'), true)
//Test.assertEquals(sameLength('1100'), true)
//Test.assertEquals(sameLength('10101110001100'), true)
//Test.assertEquals(sameLength('1111000010101100'), true)
//​
//Test.assertEquals(sameLength('1001'), false)
//Test.assertEquals(sameLength('101001'), false)
//Test.assertEquals(sameLength('101'), false)
//Test.assertEquals(sameLength('10010'), false)
//Test.assertEquals(sameLength('110'), false)
//Test.assertEquals(sameLength('11001'), false)
//Test.assertEquals(sameLength('11100011000'), false)

