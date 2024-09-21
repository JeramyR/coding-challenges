

//title: Sum of an Array of Times

//tags: algorithms,arrays,loops

//url: https://edabit.com/challenge/BP82XMfoRoREMRxLw

//Description:
//Create a function that takes an array of strings representing times ('hours:minutes:seconds') and returns their sum as an array of integers ([hours, minutes, seconds]).
//Examples
//timeSum(["1:23:45"]) ➞ [1, 23, 45]
//
//timeSum(["1:03:45", "1:23:05"]) ➞ [2, 26, 50]
//
//timeSum(["5:39:42", "10:02:08", "8:26:33"]) ➞ [24, 8, 23]
//Notes
//If the input is an empty array, return [0, 0, 0].

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(
//  timeSum([]),
//  [0, 0, 0],
//  'Should work with an empty array'
//);
//Test.assertSimilar(
//  timeSum(['1:23:45']),
//  [1, 23, 45],
//  'Should work with a single time'
//);
//Test.assertSimilar(
//  timeSum(['1:03:45', '1:23:05']),
//  [2, 26, 50],
//  'Should work with leading zeroes in minutes/seconds'
//);
//Test.assertSimilar(
//  timeSum(['1:23:45', '0:00:00']),
//  [1, 23, 45],
//  'Should not break if a value is 0:00:00'
//);
//Test.assertSimilar(
//  timeSum(['18:54:02', '0:26:28', '11:48:22', '22:26:16', '7:17:05', '8:01:44', '0:35:24', '16:25:11', '9:11:24', '18:30:46', '3:31:51', '16:55:32', '17:59:00', '11:29:30', '3:19:58', '9:12:27', '22:03:34', '1:06:12', '0:44:07', '4:47:46', '10:38:00', '14:26:51', '10:09:07', '5:08:29', '5:29:57', '22:15:03', '20:52:28', '8:42:20', '17:36:32', '9:36:17']),
//  [329, 41, 43],
//  'Should work with large arrays totaling more than 60 hours'
//);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Keeping Count

//tags: arrays,language_fundamentals,loops,numbers

//url: https://edabit.com/challenge/TCEYq7KYJE3ogvt9j

//Description:
//Given a number, create a function which returns a new number based on the following rules:
//For each digit, replace it by the number of times it appears in the number.
//The final instance of the number will be an integer, not a string.
//The following is a working example:
//digitCount(136116) ➞ 312332
//// The number 1 appears thrice, so replace all 1s with 3s.
//// The number 3 appears only once, so replace all 3s with 1s.
//// The number 6 appears twice, so replace all 6s with 2s.
//Examples
//digitCount(221333) ➞ 221333
//
//digitCount(136116) ➞ 312332
//
//digitCount(2) ➞ 1
//Notes
//Each test will have a positive whole number in its parameter.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(digitCount(221333), 221333)
//Test.assertEquals(digitCount(136116), 312332)
//Test.assertEquals(digitCount(2), 1)
//Test.assertEquals(digitCount(3410515780), 1122222112)
//Test.assertEquals(digitCount(24677734541), 13133313131)
//Test.assertEquals(digitCount(79825929634), 13121323111)
//Test.assertEquals(digitCount(36123594675), 22112211212)
//Test.assertEquals(digitCount(62849835970), 11212211211)
//Test.assertEquals(digitCount(29081455325), 21111133123)
//Test.assertEquals(digitCount(94717270184), 12323131212)
//Test.assertEquals(digitCount(72017589759), 31113212322)
//Test.assertEquals(digitCount(53569357419), 32312231112)
//Test.assertEquals(digitCount(33879999825), 22214444211)
//Test.assertEquals(digitCount(33600360627), 33333333311)
//Test.assertEquals(digitCount(12594580129), 22221211222)
//Test.assertEquals(digitCount(36852564216), 13122231213)
//Test.assertEquals(digitCount(34415793631), 32221113132)
//Test.assertEquals(digitCount(76384607724), 32112213312)
//Test.assertEquals(digitCount(8604519582), 2111211221)
//Test.assertEquals(digitCount(70209476552), 22221121222)
//Test.assertEquals(digitCount(20036302062), 34422243423)
//Test.assertEquals(digitCount(77674727011), 55151515122)
//Test.assertEquals(digitCount(17597066090), 12122322323)
//Test.assertEquals(digitCount(79082080537), 21321323112)
//Test.assertEquals(digitCount(30187177000), 14213233444)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sharing is Caring

//tags: arrays,numbers

//url: https://edabit.com/challenge/t5w3KeLXzs5ChWDMo

//Description:
//Given an array of numbers, create a function that removes 25% from every number in the array except the smallest number, and adds the total amount removed to the smallest number.
//Examples
//showTheLove([4, 1, 4]) ➞ [3, 3, 3]
//
//showTheLove([16, 10, 8]) ➞ [12, 7.5, 14.5]
//
//showTheLove([2, 100]) ➞ [27, 75]
//Notes
//There will only be one smallest number in a given array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(showTheLove([4, 1, 4]), [3, 3, 3,])
//Test.assertSimilar(showTheLove([16, 10, 8]), [12, 7.5, 14.5])
//Test.assertSimilar(showTheLove([2, 100]), [27, 75])
//Test.assertSimilar(showTheLove([75, 64, 55]), [56.25, 48.0, 89.75])
//Test.assertSimilar(showTheLove([84, 94, 26, 80, 16]), [63.0, 70.5, 19.5, 60.0, 87.0])
//Test.assertSimilar(showTheLove([55, 27]), [41.25, 40.75])
//Test.assertSimilar(showTheLove([13, 80, 75, 45, 11]), [9.75, 60.0, 56.25, 33.75, 64.25])
//Test.assertSimilar(showTheLove([48, 28, 18]), [36.0, 21.0, 37.0])
//Test.assertSimilar(showTheLove([17, 9]), [12.75, 13.25])
//Test.assertSimilar(showTheLove([38, 23, 31, 16]), [28.5, 17.25, 23.25, 39.0])
//Test.assertSimilar(showTheLove([54, 62, 59]), [84.25, 46.5, 44.25])
//Test.assertSimilar(showTheLove([44, 46]), [55.5, 34.5])
//Test.assertSimilar(showTheLove([21, 97, 45, 58]), [71.0, 72.75, 33.75, 43.5])
//Test.assertSimilar(showTheLove([43, 9]), [32.25, 19.75])
//Test.assertSimilar(showTheLove([53, 0, 14, 58]), [39.75, 31.25, 10.5, 43.5])
//Test.assertSimilar(showTheLove([16, 19, 42, 43, 6]), [12.0, 14.25, 31.5, 32.25, 36.0])
//Test.assertSimilar(showTheLove([26, 17, 28, 31, 79]), [19.5, 58.0, 21.0, 23.25, 59.25])
//Test.assertSimilar(showTheLove([47, 57, 18, 2, 72]), [35.25, 42.75, 13.5, 50.5, 54.0])
//Test.assertSimilar(showTheLove([27, 77]), [46.25, 57.75])
//Test.assertSimilar(showTheLove([22, 52]), [35.0, 39.0])
//Test.assertSimilar(showTheLove([85, 49, 60, 78, 6]), [63.75, 36.75, 45.0, 58.5, 74.0])
//Test.assertSimilar(showTheLove([96, 38]), [72.0, 62.0])
//Test.assertSimilar(showTheLove([29, 73, 81]), [67.5, 54.75, 60.75])
//Test.assertSimilar(showTheLove([51, 46, 81, 85]), [38.25, 100.25, 60.75, 63.75])
//Test.assertSimilar(showTheLove([26, 48, 84, 70, 8]), [19.5, 36.0, 63.0, 52.5, 65.0])

