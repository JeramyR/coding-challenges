

//title: Number of Covered Integers

//tags: arrays,higher_order_functions

//url: https://edabit.com/challenge/Jaox8TDLREobGf9oJ

//Description:
//Write a function that returns the total number of integers covered from an array of intervals (inclusive). In other words, return the number of different integers in the arrays.
//Examples
//coveredIntegers([[80, 81], [1, 2], [9, 11]]) ➞ 7
//// Seven integers are covered: 1, 2, 9, 10, 11, 80, 81
//
//coveredIntegers([[3, 6], [4, 6], [5, 6]]) ➞ 4
//
//coveredIntegers([[1, 2], [1, 2]]) ➞ 2
//Notes
//Intervals may overlap, be subintervals of each other, or be identical.
//For each interval [l, u], l and u will be integers, and l <= u will always be true.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(coveredIntegers([[80, 81], [1, 2], [9, 11]]), 7)
//Test.assertEquals(coveredIntegers([[3, 6], [4, 6], [5, 6]]), 4)
//Test.assertEquals(coveredIntegers([[1, 2], [1, 2]]), 2)
//Test.assertEquals(coveredIntegers([[1, 11]]), 11)
//Test.assertEquals(coveredIntegers([[8, 9], [102, 104]]), 5)
//Test.assertEquals(coveredIntegers([[1, 1], [5, 5], [8, 8]]), 3)
//Test.assertEquals(coveredIntegers([[0, 5], [5, 5], [8, 8]]), 7)
//Test.assertEquals(coveredIntegers([[1, 5], [3, 5], [4, 6], [5, 7]]), 7)
//Test.assertEquals(coveredIntegers([[-3, 10], [-2, 9], [-1, 8], [0, 7], [1, 6], [2, 5], [3, 4]]), 14)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Repeating Cycle

//tags: arrays,validation

//url: https://edabit.com/challenge/9opuZaXyTKcwKMb6C

//Description:
//Below is an example of a repeating cycle.
//isRepeatingCycle([1, 2, 3, 1, 2], 3) => true
//// Since the first two elements of [1, 2, 3] equals [1, 2]
//Below is an example of a non-repeating cycle.
//isRepeatingCycle([1, 2, 3, 1, 3], 3) => false
//// Since [1, 2, 3] != [1, 3]
//You are tasked with writing a function that takes in two inputs:
//An array of integers.
//The length of each cycle.
//Return the boolean value true if the array is a repeating cycle, and false if the array is a non-repeating cycle.
//Examples
//isRepeatingCycle([1, 2, 3, 1, 2, 3, 1], 3) ➞ true
//
//isRepeatingCycle([1, 2, 3, 4, 2, 3, 1], 4) ➞ false
//
//isRepeatingCycle([1, 2, 1, 2, 2], 2) ➞ false
//
//isRepeatingCycle([1, 1, 1, 1], 3) ➞ true
//Notes
//All cycles begin with the first element of the array.
//Return true if the cycle length is greater than the array length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isRepeatingCycle([1, 2, 3, 1, 2, 3, 1], 3), true);
//Test.assertEquals(isRepeatingCycle([1, 2, 3, 4, 2, 3, 1], 4), false);
//Test.assertEquals(isRepeatingCycle([1, 2, 1, 2, 2], 2), false);
//Test.assertEquals(isRepeatingCycle([1, 1, 1, 1], 3), true, "Trivially repeating, since array is identical.");
//Test.assertEquals(isRepeatingCycle([1, 2, 1, 9], 4), true, "Trivially repeating, since the cycle length = length of the array.");
//Test.assertEquals(isRepeatingCycle([1, 1, 3, 1, 1], 7), true, "Cycle length exceeds array length, so trivially true.");
//Test.assertEquals(isRepeatingCycle([1, 2, 1, 2, 1, 2, 1], 3), false);
//Test.assertEquals(isRepeatingCycle([1, 2, 1, 2, 1, 2, 1], 2), true);
//Test.assertEquals(isRepeatingCycle([1, 2, 1, 2, 1, 2, 1], 4), true);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mayan Long Count

//tags: dates,formatting,math

//url: https://edabit.com/challenge/7d9iv4QuC7egSzqQG

//Description:
//Ever heard about 13.0.0.0.0 and the end of the world? The Maya civilization used to record the passed days from their mythological creation date (11 August 3114BC in the proleptic Gregorian calendar is the most accredited date) with a system that nowadays is called "The Long Count".
//Days were recorded in a 5-place counter with a mixed base20 and base18 system. Starting from the left the names and values of the counter-places are:
//Baktun = 20 Katun = 144000 days (from 1 to 13)
//Katun = 20 Tun = 7200 days (from 0 to 19)
//Tun = 18 Uinal = 360 days (from 0 to 19)
//Uinal = 20 Kin = 20 days (from 0 to 17)
//Kin = 1 day (from 0 to 19)
//A complete calendar cycle is equal to 1872000 days (13 Baktun).
//The initial total Kin number is equal to the passed days from starting point to the date of interest less 365. Then, for every counter place, the value is obtained dividing the Kin by the corresponding counter-place days value (144000 for Baktun, 7200 for Katun, and so on) with the Kin that at every step becomes the remainder of the division.
//Given a date as a string you must return a string representing the Mayan Long Count Date, joining the values of Baktun, Katun, Tun, Uinal and Kin with a dot between them.
//Examples
//getMayanDate("2012, 12, 21") ➞ "13.0.0.0.0"
//// Whole part of 1872000 passed days / Baktun = 13, Kin (remainder) is 0
//
//getMayanDate("1776, 7, 4") ➞ "12.8.0.1.13"
//// Whole part of 1785633 passed days / Baktun = 12, Kin (remainder) is 57633
//// Whole part of Kin / Katun = 8, Kin is now 33.
//// Whole part of Kin / Tun = 0, Kin is  33.
//// Whole part of Kin / Uinal = 1, Kin is 13.
//
//getMayanDate("1200, 1, 1") ➞ "10.18.15.3.8"
//Notes
//The starting date is already in the Code tab.
//Remember to subtract 365 days from the total passed days before starting calculations.
//Kin is literally a variable that changes at every step.
//Given dates are in the "YYYY, MM, DD" format.
//In the Resources tab you can find more info about the Mayan Long Count and a tool for calculate it given any date.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getMayanDate("2012, 12, 21"), "13.0.0.0.0", "Example #1")
//Test.assertEquals(getMayanDate("1776, 7, 4"), "12.8.0.1.13", "Example #2")
//Test.assertEquals(getMayanDate("1200, 1, 1"), "10.18.15.3.8", "Example #3")
//Test.assertEquals(getMayanDate("1985, 8, 20"), "12.18.12.4.15")
//Test.assertEquals(getMayanDate("1945, 6, 12"), "12.16.11.8.16")
//Test.assertEquals(getMayanDate("348, 3, 8"), "8.15.10.17.8")
//Test.assertEquals(getMayanDate("2407, 3, 25"), "13.19.19.17.19")

