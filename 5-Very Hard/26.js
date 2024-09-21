

//title: Strings & Frets

//tags: algorithms,numbers

//url: https://edabit.com/challenge/9c5nHopKXkZH6zXij

//Description:
//Write a function that gets a string number and a fret of a 6-string guitar in 'standard tuning' and return the corresponding note. For this challenge we use a 24 fret model.
//The notes are:
//C, C#/Db, D, D#/Eb, E, F, F#/Gb, G, G#/Ab, A, A#/Bb, B
//Try not to use a 2 dimensional array. Look at the image on the bottom to see the note names on the guitar neck.
//Examples
//stringFret(2, 10) ➞ "A"
//
//stringFret(0, 16) ➞ "Invalid input"
//
//stringFret(2, 19) ➞ "F#/Gb"
//
//stringFret(3, 0) ➞ "G"
//Notes
//If the string or fret number isn't correct return "Invalid input".
//24 frets on the guitar neck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(stringFret(2, 10), "A")
//Test.assertEquals(stringFret(6, 3), "G")
//Test.assertEquals(stringFret(1, 18), "A#/Bb")
//Test.assertEquals(stringFret(0, 16), "Invalid input")
//Test.assertEquals(stringFret(3, 1), "G#/Ab")
//Test.assertEquals(stringFret(5, 3), "C")
//Test.assertEquals(stringFret(5, 25), "Invalid input")
//Test.assertEquals(stringFret(6, 13), "F")
//Test.assertEquals(stringFret(4, 18), "G#/Ab")
//Test.assertEquals(stringFret(5, 0), "A")
//Test.assertEquals(stringFret(4, 6), "G#/Ab")
//Test.assertEquals(stringFret(4, 20), "A#/Bb")
//Test.assertEquals(stringFret(7, 10), "Invalid input")
//Test.assertEquals(stringFret(5, 0), "A")
//Test.assertEquals(stringFret(3, 14), "A")
//Test.assertEquals(stringFret(2, 19), "F#/Gb")
//Test.assertEquals(stringFret(4, 5), "G")
//Test.assertEquals(stringFret(6, 10), "D")
//Test.assertEquals(stringFret(2, 10), "A")
//Test.assertEquals(stringFret(3, 0), "G")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Super Reduced String

//tags: algorithms,regex

//url: https://edabit.com/challenge/PgkSgWqNZBwXTFgby

//Description:
//Steve has a string of lowercase characters in range ascii[["a".."z"]]. He wants to reduce the string to its shortest length by doing a series of operations. In each operation, he selects a pair of adjacent lowercase letters that match, and he deletes them. For instance, the string aab could be shortened to b in one operation.
//Steve’s task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, return "Empty String".
//Case
//superReducedString("aaabccddd") ➞ "abd"
//Explanation:
//"aaabccddd" -> "abccddd" -> "abddd" -> "abd"
//Examples
//superReducedString("cccxllyyy") ➞ "cxy"
//
//superReducedString("aa") ➞ "Empty String"
//
//superReducedString("baab") ➞ "Empty String"
//
//superReducedString("fghiiijkllmnnno") ➞ "fghijkmno"
//
//superReducedString("chklssstt") ➞ "chkls"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(superReducedString("zzzhhnnttti"), "zti")
//Test.assertEquals(superReducedString("nnncqwerhhhou"), "ncqwerhou")
//Test.assertEquals(superReducedString("abbccddfghiaklmno"), "afghiaklmno")
//Test.assertEquals(superReducedString("bccddb"), "Empty String")
//Test.assertEquals(superReducedString(""), "Empty String")
//Test.assertEquals(superReducedString("qqq"), "q")
//Test.assertEquals(superReducedString("rthiioouusss"), "rths")
//Test.assertEquals(superReducedString("acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj"), "acdqgacdqj")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Most Common Last Vowel

//tags: algorithms,strings

//url: https://edabit.com/challenge/ewhZdFfjk6bNy9LtC

//Description:
//Create a function that takes in a sentence as input and returns the most common last vowel in the sentence as a single character string.
//Examples
//commonLastVowel("Hello World!") ➞ "o"
//
//commonLastVowel("Watch the characters dance!") ➞ "e"
//
//commonLastVowel("OOI UUI EEI AAI") ➞ "i"
//Notes
//There will only be one common last vowel in each sentence.
//If the word has one vowel, treat the vowel as the last one even if it is at the start of the word.
//The question asks you to compile all of the last vowels of each word and returns the vowel in the list which appears most often.
//y won't count as a vowel.
//Return outputs in lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(commonLastVowel("Hello World!"), "o")
//Test.assertEquals(commonLastVowel("Watch the characters dance!"), "e")
//Test.assertEquals(commonLastVowel("OOI UUI EEI AAI"), "i")
//Test.assertEquals(commonLastVowel("amy and acts"), "a")
//Test.assertEquals(commonLastVowel("munch munch munch tasty tasty brunch"), "u")

