

//title: Data Structures (2): Binary Search

//tags: algorithms,arrays,data_structures,interview

//url: https://edabit.com/challenge/SxSLmEjtx2EBsEsm5

//Description:
//Binary search is the fastest method to search a sorted array.
//Imagine you are an undercover agent and you're at a cocktail party hosted by the bad guys. You sneak into the drug lord's office looking for an important document. Fortunately, the drug lord has organized his files by number from lowest to highest. You know the number of the file you are looking for is 3412. Since there are thousands of files and you have very limited time you wouldn't start at 0 and check each one. This would be the iterative approach. Instead, you would look halfway through the stack and see what number it is, if it's less than 3412 you know that everything below it won't contain the file for so you discard the bottom pile and search the top. Each time looking in the middle and discarding the half that won't contain the number you are looking for. This is a binary search.
//Your challenge is to write a function that searches a sorted array and returns the index of the number you are searching for.
//"BUT WAIT!!!" you say...
//"Why don't I just used findIndex, or indexOf to get the index?" you ask.
//Because both of those are iterative. They have a time complexity of O(n), in our spy scenario that is too long, they will find you searching the files and you'll go swimming with the fishes. The binary search has a time complexity of O(logN). Meaning it is substantially faster.
//Arguments
//Array: The array over which you searching.
//Number: The number whose index you want to return.
//Returns Index || -1: If the number is found the index is returned, otherwise it returns -1.
//Examples
//binary([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ➞ 2
//
//binary([11, 12, 21, 23, 40, 40, 42, 43, 54, 57, 92] ➞ 31
//
//binary([11, 12, 21, 23, 40, 40, 42, 43, 54, 57, 92] ➞ 40
//Notes
//This is part of my Data Structures series. A collection of common coding interview challenges used to test one's understanding of data structures.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const noArrayMethods = (f) => /(findIndex)|(indexOf)/g.test(f.toString())
//Test.assertNotEquals(noArrayMethods(binary), true, "Please don't use array prototype methods")
//​
//Test.assertSimilar(binary([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), 2)
//Test.assertSimilar(
//  binary([176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162], 107),
//  15
//)
//Test.assertSimilar(binary([1, 1, 1, 3, 3, 5, 6, 7, 8, 9], 5), 5)
//Test.assertSimilar(binary([1, 3, 3, 4, 4, 6, 6, 7, 7, 9], 8), -1)
//Test.assertSimilar(binary([0, 1, 2, 3, 4, 5, 6, 7, 9], 6), 6)
//Test.assertSimilar(
//  binary([10, 17, 21, 27, 31, 32, 4, 42, 44, 45, 55, 57, 57, 60, 69, 72, 74, 79, 88, 89, 91, 96], 44),
//  8
//)
//Test.assertSimilar(binary([11, 12, 21, 23, 40, 40, 42, 43, 54, 57, 92], 31), -1)
//Test.assertSimilar(
//  binary([16, 18, 24, 27, 3, 33, 45, 5, 51, 52, 57, 67, 70, 71, 72, 77, 8, 80, 83, 87, 93, 99], 80),
//  17
//)
//Test.assertSimilar(
//  binary([11, 13, 17, 19, 22, 23, 25, 36, 39, 39, 40, 46, 48, 51, 56, 77, 82, 83, 87, 89, 91, 98], 89),
//  19
//)
//Test.assertSimilar(

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Current Streak

//tags: dates,games,loops,objects

//url: https://edabit.com/challenge/QxdWqug8d8vkMtobH

//Description:
//Create a function that takes the current day (e.g. "2019-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).
//Examples
//currentStreak("2019-09-23", [
//  {
//    "date": "2019-09-18"
//  },
//  {
//    "date": "2019-09-19"
//  },
//  {
//    "date": "2019-09-21"
//  },
//  {
//    "date": "2019-09-22"
//  },
//  {
//    "date": "2019-09-23"
//  }
//]) ➞ 3
//
//currentStreak("2019-09-25", [
//  {
//    "date": "2019-09-16"
//  },
//  {
//    "date": "2019-09-17"
//  },
//  {
//    "date": "2019-09-21"
//  },
//  {
//    "date": "2019-09-22"
//  },
//  {
//    "date": "2019-09-23"
//  }
//]) ➞ 0
//Notes
//The array of dates is sorted chronologically.
//The today parameter will always be greater than or equal to the last date in the array.
//An empty array should return 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(currentStreak("1985-03-19", [
//  {
//    "date": "1985-03-19"
//  }
//]), 1)
//​
//Test.assertEquals(currentStreak("2019-09-23", [
//  {
//    "date": "2019-09-18"
//  },
//  {
//    "date": "2019-09-19"
//  },
//  {
//    "date": "2019-09-21"
//  },
//  {
//    "date": "2019-09-22"
//  },
//  {
//    "date": "2019-09-23"
//  }
//]), 3)
//​
//Test.assertEquals(currentStreak("2019-09-30", [

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Longest Streak

//tags: dates,games,loops,objects

//url: https://edabit.com/challenge/xvKFpQ6vzuY8dH9fn

//Description:
//Create a function that takes an array of date objects and return the "longest streak" (i.e. number of consecutive days in a row).
//Example
//longestStreak([
//  {
//    "date": "2019-09-18"
//  },
//  {
//    "date": "2019-09-19"
//  },
//  {
//    "date": "2019-09-20"
//  },
//  {
//    "date": "2019-09-26"
//  },
//  {
//    "date": "2019-09-27"
//  },
//  {
//    "date": "2019-09-30"
//  }
//]) ➞ 3
//Notes
//An empty array should return 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(longestStreak([
//  {
//    "date": "1985-03-19"
//  }
//]), 1)
//​
//Test.assertEquals(longestStreak([
//  {
//    "date": "2019-09-18"
//  },
//  {
//    "date": "2019-09-19"
//  },
//  {
//    "date": "2019-09-20"
//  },
//  {
//    "date": "2019-09-26"
//  },
//  {
//    "date": "2019-09-27"
//  },
//  {
//    "date": "2019-09-30"
//  }

