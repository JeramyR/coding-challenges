

//title: Average Date

//tags: arrays,dates,math

//url: https://edabit.com/challenge/kBDrADkw28RHim74Q

//Description:
//Create a function that given an array of dates returns the average date in string form.
//Examples
//averageDate([]) ➞ null
//
//averageDate([
//  new Date(Date.UTC(1970, 0, 1))
//]) ➞ "1970-01-01T00:00:00.000Z"
//
//averageDate([
//  new Date(Date.UTC(1970, 0, 1)),
//  new Date(Date.UTC(1971, 0, 1))
//]) ➞ "1970-07-02T12:00:00.000Z"
//Notes
//For the return value you can use the .toISOString() method.
//If dates is an empty array return null.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(averageDate([]), null)
//​
//Test.assertEquals(
//  averageDate([new Date(Date.UTC(1970, 0, 1))]),
//  '1970-01-01T00:00:00.000Z'
//)
//​
//Test.assertEquals(
//  averageDate([new Date(Date.UTC(1970, 0, 1)), new Date(Date.UTC(1971, 0, 1))]),
//  '1970-07-02T12:00:00.000Z'
//)
//​
//Test.assertEquals(
//  averageDate([new Date(Date.UTC(1970, 0, 1)), new Date(Date.UTC(1970, 0, 1))]),
//  '1970-01-01T00:00:00.000Z'
//)
//​
//Test.assertEquals(
//  averageDate([
//    new Date(Date.UTC(1970, 0, 1)),
//    new Date(Date.UTC(1971, 0, 1)),
//    new Date(Date.UTC(1972, 0, 1)),
//  ]),
//  '1971-01-01T00:00:00.000Z'
//)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: First Tuesday of the Month

//tags: dates,math,numbers

//url: https://edabit.com/challenge/yB5zHFP6ofxXeQfK4

//Description:
//Every month, Microny™️ (a big entertainment corporation) publishes a few free videogames on their web store. You are working on a script that will notify you whenever the new games are available for download. There is not a fixed date for the new releases, but you know that it happens every first Tuesday of every month.
//Write a function that, given a year and a month, returns a string with the date of when the new games will be available.
//Examples
//firstTuesdayOfTheMonth(1997, 1) ➞ "1997-01-07"
//
//firstTuesdayOfTheMonth(2021, 2) ➞ "2021-02-02"
//
//firstTuesdayOfTheMonth(2020, 3) ➞ "2020-03-03"
//Notes
//Months are given as numbers starting at 1 = January.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(firstTuesdayOfTheMonth(1997, 1), '1997-01-07');
//Test.assertEquals(firstTuesdayOfTheMonth(2021, 2), '2021-02-02');
//Test.assertEquals(firstTuesdayOfTheMonth(2020, 3), '2020-03-03');
//Test.assertEquals(firstTuesdayOfTheMonth(1998, 4), '1998-04-07');
//Test.assertEquals(firstTuesdayOfTheMonth(1992, 5), '1992-05-05');
//Test.assertEquals(firstTuesdayOfTheMonth(2009, 6), '2009-06-02');
//Test.assertEquals(firstTuesdayOfTheMonth(1987, 7), '1987-07-07');
//Test.assertEquals(firstTuesdayOfTheMonth(2026, 8), '2026-08-04');
//Test.assertEquals(firstTuesdayOfTheMonth(2020, 9), '2020-09-01');
//Test.assertEquals(firstTuesdayOfTheMonth(2009, 10), '2009-10-06');
//Test.assertEquals(firstTuesdayOfTheMonth(1998, 11), '1998-11-03');
//Test.assertEquals(firstTuesdayOfTheMonth(1981, 12), '1981-12-01');

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Primorial

//tags: algorithms,loops,numbers

//url: https://edabit.com/challenge/86Dbfov3HDpKTArwo

//Description:
//A Primorial is a product of the first n prime numbers (e.g. 2 x 3 x 5 = 30). 2, 3, 5, 7, 11, 13 are prime numbers. If n was 3, you'd multiply 2 x 3 x 5 = 30 or Primorial = 30.
//Create a function that returns the Primorial of a number.
//Examples
//primorial(1) ➞ 2
//
//primorial(2) ➞ 6
//
//primorial(8) ➞ 9699690
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(primorial(1), 2)
//Test.assertEquals(primorial(2), 6)
//Test.assertEquals(primorial(3), 30)
//Test.assertEquals(primorial(8), 9699690)

