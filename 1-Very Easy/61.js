

//title: Get the File Name

//tags: arrays,language_fundamentals,regex

//url: https://edabit.com/challenge/mN98zKeSSLnXwKz8C

//Description:
//Create a function that returns the selected filename from a path. Include the extension in your answer.
//Examples
//getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"
//
//getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"
//
//getFilename("ffprobe.exe") ➞ "ffprobe.exe"
//Notes
//Tests will include both absolute and relative paths.
//For simplicity, all paths will include forward slashes.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"), "edabit.txt")
//Test.assertEquals(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"), "Beethoven_5.mp3")
//Test.assertEquals(getFilename("ffprobe.exe"), "ffprobe.exe")
//Test.assertEquals(getFilename("Music/Drafts/unfinished2.midi"), "unfinished2.midi")
//Test.assertEquals(getFilename("C:/Users/chad/OneDrive/Desktop/Atom.lnk"), "Atom.lnk")
//Test.assertEquals(getFilename("senoron/OneDrive/Desktop/DDLC-1.1.1-pc/lib/windows-i686/DDLC.exe"), "DDLC.exe")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum Greater Than Five

//tags: arrays,language_fundamentals,math

//url: https://edabit.com/challenge/zHutBxQaWvzhzGgxL

//Description:
//Write a function that returns the sum of elements greater than 5, in the given array .
//Examples
//sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77
//
//sumFive([1, 2, 3, 4]) ➞ 0
//
//sumFive([10, 12, 28, 47, 55, 100]) ➞ 252
//Notes
//Find all the elements greater than 5, not the elements greater than or equal to 5.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumFive([1,5,20,30,4,9,18]), 77)
//Test.assertEquals(sumFive([1,2,3,4]), 0)
//Test.assertEquals(sumFive([10,12,28,47,55,100]), 252)
//Test.assertEquals(sumFive([25,44,6,4,3,36]), 111)
//Test.assertEquals(sumFive([5,2,150,187,254,0]), 591)
//Test.assertEquals(sumFive([1000,2500,2,4,500,400]), 4400)
//Test.assertEquals(sumFive([125.5,147.2,548.6,2.3,1.5]), 821.3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Even or Odd?

//tags: algorithms,arrays,language_fundamentals,numbers

//url: https://edabit.com/challenge/9mKB2XJJ9gYgjms4Z

//Description:
//Given an array of integers, determine whether the sum of its elements is even or odd.
//The return value should be a string ("odd" or "even").
//If the input array is empty, consider it as an array with a zero ([0]).
//Examples
//evenOrOdd([0]) ➞ "even"
//
//evenOrOdd([1]) ➞ "odd"
//
//evenOrOdd([]) ➞ "even"
//
//evenOrOdd([0, 1, 5]) ➞ "even"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(evenOrOdd([0]), 'even')
//Test.assertEquals(evenOrOdd([1]), 'odd')
//Test.assertEquals(evenOrOdd([]), 'even')
//Test.assertEquals(evenOrOdd([0, 1, 5]), 'even')
//Test.assertEquals(evenOrOdd([0, 1, 3]), 'even')
//Test.assertEquals(evenOrOdd([1023, 1, 2]), 'even')
//Test.assertEquals(evenOrOdd([0, -1, -5]), 'even')
//Test.assertEquals(evenOrOdd([0, -1, -3]), 'even')
//Test.assertEquals(evenOrOdd([-1023, 1, -2]), 'even')
//Test.assertEquals(evenOrOdd([0, 1, 2]), 'odd')
//Test.assertEquals(evenOrOdd([0, 1, 4]), 'odd')
//Test.assertEquals(evenOrOdd([1023, 1, 3]), 'odd')
//Test.assertEquals(evenOrOdd([0, -1, 2]), 'odd')
//Test.assertEquals(evenOrOdd([0, 1, -4]), 'odd')
//Test.assertEquals(evenOrOdd([-1023, -1, 3]), 'odd')

