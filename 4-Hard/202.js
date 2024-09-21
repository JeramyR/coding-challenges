

//title: Sort the Dates

//tags: dates,sorting,strings

//url: https://edabit.com/challenge/KWNt5yhvxtEJRMwJZ

//Description:
//In this challenge, sort an array containing a series of dates given as strings. Each date is given in the format DD-MM-YYYY_HH:MM:
//"12-02-2012_13:44"
//The priority of criteria used for sorting will be:
//Year
//Month
//Day
//Hours
//Minutes
//Given an array arr and a string type, implement a function that returns:
//if type is equal to "ASC", the array arr sorted in ascending order.
//if type is equal to "DSC", the array arr sorted in descending order.
//Examples
//sortDates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "ASC") ➞ [
//  "10-02-2016_12:30", "10-02-2018_12:15", "10-02-2018_12:30"
//]
//
//sortDates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "DSC") ➞ [
//  "10-02-2018_12:30", "10-02-2018_12:15", "10-02-2016_12:30"
//]
//
//sortDates(["09-02-2000_10:03", "10-02-2000_18:29", "01-01-1999_00:55"], "ASC") ➞ [
//  "01-01-1999_00:55", "09-02-2000_10:03", "10-02-2000_18:29"
//]
//Notes
//Remember: the date is in the format DD-MM-YYYY_HH:MM.
//You can expect only valid formatted dates, without exceptions to handle.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const dates1 = [
//  "18-10-2016_12:09", "01-12-2017_20:32", "18-10-2016_12:04",
//  "19-10-2017_16:20", "18-10-2017_16:19", "18-10-2016_16:19"
//];
//​
//Test.assertSimilar(sortDates(dates1, "ASC"), [
//  "18-10-2016_12:04",
//  "18-10-2016_12:09",
//  "18-10-2016_16:19",
//  "18-10-2017_16:19",
//  "19-10-2017_16:20",
//  "01-12-2017_20:32",
//]);
//​
//Test.assertSimilar(sortDates(dates1, "DSC"), [
//  "01-12-2017_20:32",
//  "19-10-2017_16:20",
//  "18-10-2017_16:19",
//  "18-10-2016_16:19",
//  "18-10-2016_12:09",
//  "18-10-2016_12:04"
//]);
//​
//const dates2 = [
//  "11-02-2011_00:01", "21-04-2013_11:43", "02-09-2018_11:00",

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Numbers That are Also Writers

//tags: conditions,loops,numbers,validation

//url: https://edabit.com/challenge/LZcvkTGzhNfvxukPP

//Description:
//If a number is autobiographical, then the number's digits describe itself. The first digit is the amount of times the digit 0 appears, the second digit is the amount of times the digit 1 appears, the third digit is the amount of times the digit 2 appears, etc. This repeats for all digits of the number. The number 6210001000 is autobiographical, because it has six 0's, two 1's, one 2, zero 3's, zero 4's, zero 5's, one 6, zero 7's, zero 8's, and zero 9's.
//Create a function that takes an integer n and returns whether or not n is an autobiographical number.
//Examples
//isAutobiographical(6210001000) ➞ true
//
//isAutobiographical(12345) ➞ false
//
//isAutobiographical(1210) ➞ true
//// one 0, two 1's, one 2, zero 3's
//
//isAutobiographical(638) ➞ false
//
//isAutobiographical(0) ➞ false
//// claims no zeroes, however zero is the first digit
//Notes
//Numbers with more than 10 digits should always return false (9 is the highest digit in base 10, so you can't go higher than 9,999,999,999).
//n is always >= 0 and is always an integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isAutobiographical(6210001000), true)
//Test.assertEquals(isAutobiographical(12345), false)
//Test.assertEquals(isAutobiographical(1210), true)
//Test.assertEquals(isAutobiographical(638), false)
//Test.assertEquals(isAutobiographical(0), false)
//Test.assertEquals(isAutobiographical(10 ** 10), false)
//Test.assertEquals(isAutobiographical(2020), true)
//Test.assertEquals(isAutobiographical(3211000), true)
//Test.assertEquals(isAutobiographical(3434343), false)
//Test.assertEquals(isAutobiographical(2100), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Actual Memory Size of your USB Flash Drive

//tags: algebra,math,strings

//url: https://edabit.com/challenge/GQ44dqdme5jFSWRSd

//Description:
//Create a function that takes the memory size (ms is a string type) as an argument and returns the actual memory size.
//Examples
//actualMemorySize("32GB") ➞ "29.76GB"
//
//actualMemorySize("2GB") ➞ "1.86GB"
//
//actualMemorySize("512MB") ➞ "476MB"
//Notes
//The actual storage loss on a USB device is 7% of the overall memory size!
//If the actual memory size was greater than 1 GB, round your result to two decimal places.
//If the memory size after adjustment is smaller then 1 GB, return the result in MB.
//For the purposes of this challenge, there are 1000 MB in a Gigabyte.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(actualMemorySize("256MB"), "238MB")
//Test.assertEquals(actualMemorySize("512MB"), "476MB")
//Test.assertEquals(actualMemorySize("2GB"), "1.86GB")
//Test.assertEquals(actualMemorySize("8GB"), "7.44GB")
//Test.assertEquals(actualMemorySize("16GB"), "14.88GB")
//Test.assertEquals(actualMemorySize("32GB"), "29.76GB")
//Test.assertEquals(actualMemorySize("1GB"), "930MB")

