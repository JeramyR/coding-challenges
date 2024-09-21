

//title: Early Birds

//tags: arrays,numbers,regex,strings

//url: https://edabit.com/challenge/oPcmocNP9BDwbN43L

//Description:
//A Natural Number String Sequence is a string containing all numbers, starting from 0, joined without spaces or other delimitators between them.
//"01234567891011121314151617181920..."
//If you think of the sequence as an array, any number has a natural position index it occupies within a string long enough to contain it based on the real position in the numeric sequence. Looking at the example above, numbers from 0 to 9 are equals to their index position in the string; starting from 10, every number has a string natural index position different from itself (number 10 has a position of 10|11 because it has two digits, number 11 has a position of 12|13, and so on).
//When a number appears in the sequence before its natural position is an Early Bird. Suppose that we want to know if number 12 is an Early Bird in the above example sequence:
//01234567891011121314151617181920
//_!!___________!!________________
//Natural position index of 12 is |14, 15| (after 11 and before 13 in the numeric sequence), but, if we look closely at the sequence, it appears before its natural position, at index |1, 2| (after 0 and before 3): 12 is then an Early Bird number (and the first to appear, also).
//You are given two integers as parameters: range is the ending number of the string sequence to generate, and n is the number to analyze. You must implement a function that returns an array that contains the position indexes of n (with every position index being an array in turn), and the string "Early Bird!" as the last element of the array only if n is an Early Bird. If n it's not an Early Bird and the returned array has to contain just the array with its natural position index.
//Examples
//isEarlyBird(20, 14) ➞ [[18, 19]]
//
//isEarlyBird(20, 12) ➞ [[1, 2], [14, 15], "Early Bird!"]
//
//isEarlyBird(101, 101) ➞ [[10, 11, 12], [193, 194, 195], "Early Bird!"]
//Notes
//In every given case, the range will be high enough to obtain the natural position of the number, don't worry about exceptions handling.
//The given number n will be greater than 9 for every case, as trivially every single-digit number appears at the same index in the numeric sequence and in the string sequence.
//The position indexes have to be in the order they appear in the string sequence.
//The string at the end of the array has to be present only if n is an Early Bird.
//Check the Resources tab for more info on this sequence.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(isEarlyBird(20, 12), [[1, 2], [14, 15], 'Early Bird!'], "Example in Instructions tab")
//Test.assertSimilar(isEarlyBird(20, 14), [[18, 19]])
//Test.assertSimilar(isEarlyBird(101, 101), [[10, 11, 12], [193, 194, 195], 'Early Bird!'])
//Test.assertSimilar(isEarlyBird(50, 34), [[3, 4], [58, 59], [77, 78], 'Early Bird!'])
//Test.assertSimilar(isEarlyBird(212, 156), [[358, 359, 360]])
//Test.assertSimilar(isEarlyBird(400, 240), [[610, 611, 612]])
//Test.assertSimilar(isEarlyBird(900, 888), [[166, 167, 168], [2554, 2555, 2556], [2555, 2556, 2557], [2556, 2557, 2558], 'Early Bird!'])
//Test.assertSimilar(isEarlyBird(1200, 745), [[1263, 1264, 1265], [1613, 1614, 1615], [2125, 2126, 2127], 'Early Bird!'])
//Test.assertSimilar(isEarlyBird(2000, 666), [[122, 123, 124], [1888, 1889, 1890], [1889, 1890, 1891], [1890, 1891, 1892], [5555, 5556, 5557], 'Early Bird!'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Dead End Number Sequence

//tags: loops,numbers

//url: https://edabit.com/challenge/JYswmLAoomJ9Fhpou

//Description:
//This number sequence can start with any positive integer n. s is the sum of the individual digits in n. If s divides into n evenly then the next term of the series is n//s. Otherwise the next term is n*s. Eventually the series will reach a dead end with two numbers alternating: 58, 754, 12064, 928, 17632, 928, 17632. This series has a length of 5 with 17632 as the last term.
//Compose a function that takes a positive integer and returns its series length and its last term.
//Examples
//deadEnd(5) ➞ [2, 1]
//
//deadEnd(11) ➞ [7, 11440]
//
//deadEnd(123456789) ➞ [2, 5555555505]
//
//deadEnd(35161) ➞ [39, 154838313273413215779502672965210112000]
//
//deadEnd(101) ➞ [9, 136804096]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(deadEnd(1), [1, 1])
//Test.assertSimilar(deadEnd(9), [2, 1])
//Test.assertSimilar(deadEnd(1000), [1, 1000])
//Test.assertSimilar(deadEnd(999), [3, 370])
//Test.assertSimilar(deadEnd(38), [12, 174813842944])
//Test.assertSimilar(deadEnd(93), [9, 217])
//Test.assertSimilar(deadEnd(11615819), [74, 1354959139828966431926720346323206635520])
//Test.assertSimilar(deadEnd(100000001), [15, 220258825732])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Books and Book Ends

//tags: higher_order_functions,regex,strings

//url: https://edabit.com/challenge/TkbyvmeqbGpSsHLq8

//Description:
//Suppose a pair of identical characters serve as book ends for all characters in between them. Write a function that returns the total number of unique characters (books, so to speak) between all pairs of book ends.
//The function will look like:
//countUniqueBooks("stringSequence", "bookEnd")
//Examples
//countUniqueBooks("AZYWABBCATTTA", "A") ➞ 4
//
//// 1st bookend group: "AZYWA" : 3 unique books: "Z", "Y", "W"
//// 2nd bookend group: "ATTTA": 1 unique book: "T"
//// "ABBCA" not included since the first "A" was used in the 1st bookend group.
//
//countUniqueBooks("$AA$BBCATT$C$$B$", "$") ➞ 3
//
//countUniqueBooks("ZZABCDEF", "Z") ➞ 0
//Notes
//No book characters will be identical to the bookend character.
//There will always be an even number of bookends.
//Once a bookend is used to complete a pair, a new bookend must be found to create another pair.
//Return 0 if bookends contain zero books.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countUniqueBooks("AZYWABBCATTTA", "A"), 4)
//Test.assertEquals(countUniqueBooks("$AA$BBCATT$C$$B$", "$"), 3)
//Test.assertEquals(countUniqueBooks("ZZABCDEF", "Z"), 0)
//Test.assertEquals(countUniqueBooks("A#BBCD##GGA##!#", "#"), 6)
//Test.assertEquals(countUniqueBooks("&AAAAAAAAAAAA&", "&"), 1)
//Test.assertEquals(countUniqueBooks("&&&&&&&&", "&"), 0)
//Test.assertEquals(countUniqueBooks("&A&&&&&&C&", "&"), 2)
//Test.assertEquals(countUniqueBooks("&A&33333&C&", "&"), 2)
//Test.assertEquals(countUniqueBooks("&3&3&3&", "&"), 1)
//Test.assertEquals(countUniqueBooks("&4&3&3&", "&"), 2)
//Test.assertEquals(countUniqueBooks("&AA&", "A"), 0)
//Test.assertEquals(countUniqueBooks("AZAAABDZCCZZ", "Z"), 3)
//Test.assertEquals(countUniqueBooks("AZAAABDZCCZZ", "A"), 1)

