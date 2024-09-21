

//title: Slope to Angle Conversion

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/GwACHhzxHvTggemSy

//Description:
//Given a slope of a line, calculate and return the value of the angle of line (relative to the y -axis). For example, a horizontal line would be 90 degrees.
//Examples
//convert(1) ➞ 45
//
//convert(0) ➞ 90
//
//convert(-1) ➞ 135
//Notes
//All values returned should be in degrees.
//All values returned should be rounded to the nearest whole number.
//The value to return must be strictly between 0 and 180.
//All inputs will be valid integer values.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(convert(0), 90)
//Test.assertEquals(convert(1), 45)
//Test.assertEquals(convert(-1), 135)
//Test.assertEquals(convert(3), 18)
//Test.assertEquals(convert(100), 1)
//Test.assertEquals(convert(-20), 177)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: 88 Piano Keys

//tags: algorithms,math,numbers,validation

//url: https://edabit.com/challenge/sh67Jcu2yy35JXWNW

//Description:
//Create a function that takes a number (key) as an argument and returns an array containing 4 strings:
//The name of the key (the note).
//The color of the key (Black or White).
//The octave the note is in.
//The corresponding frequency of the note.
//You can look at the Wikipedia page (check the Resources tab) to find out what the index is for the piano keys, where the octave numbers are and most importantly, how to calculate the frequency of the note, round the frequency to the nearest hundreth. Ignore the shaded parts of the piano (on the Wikipedia page).
//Examples
//pianoKeys(1) ➞ ["A", "0", "White", "27.50"]
//
//pianoKeys(60) ➞ ["G♯/A♭", "5", "Black", "830.61"]
//
//pianoKeys(0) ➞ false
//Notes
//There are 88 keys, 1 - 88, so there is no 0th key or anything above 88.
//Try not to put the frequencies in a giant array but to calculate them.
//Calculate the frequencies from A notes, they are rounded by nature (e.g. 440 Hz).
//If the key isn't in the range 1 - 88, return false.
//Tip: White keys don't have sharps ♯ or flats ♭ in their note name.
//Tip: Copy & paste the note names from Wikipedia, then you have the right ♯ and ♭ 's.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(pianoKeys(1), ['A', '0', 'White', '27.50'])
//Test.assertSimilar(pianoKeys(15), ['B', '1', 'White', '61.74'])
//Test.assertSimilar(pianoKeys(0), false)
//Test.assertSimilar(pianoKeys(17), ['C♯/D♭', '2', 'Black', '69.30'])
//Test.assertSimilar(pianoKeys(88), ['C', '8', 'White', '4186.01'])
//Test.assertSimilar(pianoKeys(100), false)
//Test.assertSimilar(pianoKeys(60), ['G♯/A♭', '5', 'Black', '830.61'])
//Test.assertSimilar(pianoKeys(4), ['C', '1', 'White', '32.70'])
//Test.assertSimilar(pianoKeys(71), ['G', '6', 'White', '1567.98'])
//Test.assertSimilar(pianoKeys(16), ['C', '2', 'White', '65.41'])
//Test.assertSimilar(pianoKeys(29), ['C♯/D♭', '3', 'Black', '138.59'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is the Array Circular?

//tags: arrays,sorting

//url: https://edabit.com/challenge/TfL5ffvWoEgsoRhuP

//Description:
//Write a function that determines if an array is circular. An array is circular if its subarrays can be reordered such that each subarray's last element is equal to the next subarray's first element.
//For example, the array [[1, 1, 1], [9, 2, 3, 4], [4, 1], [1, 2, 5, 7, 9]] is circular because we can re-arrange the elements to create the following array:
//[[9, 2, 3, 4], [4, 1], [1, 1, 1], [1, 2, 5, 7, 9]]
//Examples
//isCircular([[9, 8], [6, 9, 1], [8, 4, 2], [1, 9], [2, 1, 6]]) ➞ true
//// Can be reordered: [[9, 8], [8, 4, 2], [2, 1, 6], [6, 9, 1], [1, 9]]
//
//isCircular([[1, 1], [1, 2]]) ➞ false
//
//isCircular([[2, 1], [1, 2]]) ➞ true
//
//isCircular([[2, 1], [1, 2], [2, 1], [1, 3, 1], [1, 4, 4]]) ➞ false
//Notes
//In a circular re-ordering, the last subarray's last element must be identical to the first subarray's first element.
//Subarrays will contain at least one element.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isCircular([[9, 8], [6, 9, 1], [8, 4, 2], [1, 9], [2, 1, 6]]), true)
//Test.assertEquals(isCircular([[1, 2, 7], [7, 9, 3], [3], [3, 4], [4, 2, 1]]), true)
//Test.assertEquals(isCircular([[1, 2], [2, 3], [3, 4], [4, 5]]), false)
//Test.assertEquals(isCircular([[9, 9], [9, 2], [2, 9], [9, 5], [5, 9], [9, 6], [6, 9]]), true)
//Test.assertEquals(isCircular([[1, 2], [4, 1], [3, 4], [2, 3]]), true)
//Test.assertEquals(isCircular([[1, 1], [1, 2]]), false)
//Test.assertEquals(isCircular([[6, 7, 8, 9], [1, 2, 3, 4, 5, 6], [6, 6, 9], [9, 0, 1]]), false)
//Test.assertEquals(isCircular([[2, 1], [1, 2]]), true)
//Test.assertEquals(isCircular([[2, 1], [1, 2], [2, 1], [1, 3, 1], [1, 4, 4]]), false)

