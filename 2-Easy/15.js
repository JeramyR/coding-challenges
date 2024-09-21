

//title: Sort an Array by String Length

//tags: algorithms,arrays,sorting

//url: https://edabit.com/challenge/Gz27eKkMcLarzE5Rj

//Description:
//Create a function that takes an array of strings and return an array, sorted from shortest to longest.
//Examples
//sortByLength(["Google", "Apple", "Microsoft"])
//➞ ["Apple", "Google", "Microsoft"]
//
//sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
//➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
//
//sortByLength(["Turing", "Einstein", "Jung"])
//➞ ["Jung", "Turing", "Einstein"]
//Notes
//All test cases contain arrays with strings of different lengths, so you won't have to deal with multiple strings of the same length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sortByLength(["Google", "Apple", "Microsoft"]), ["Apple", "Google", "Microsoft"])
//Test.assertSimilar(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]), ["Raphael", "Leonardo", "Donatello", "Michelangelo"])
//Test.assertSimilar(sortByLength(["Turing", "Einstein", "Jung"]), ["Jung", "Turing", "Einstein"])
//Test.assertSimilar(sortByLength(["Tatooine", "Hoth", "Yavin", "Dantooine"]), ["Hoth", "Yavin", "Tatooine", "Dantooine"])
//Test.assertSimilar(sortByLength(["Mario", "Bowser", "Link"]), ["Link", "Mario", "Bowser"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (10): Calculate Difference

//tags: arrays,loops,objects

//url: https://edabit.com/challenge/8s2jy9hR2TAeQinKD

//Description:
//The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.
//Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.
//Examples
//calculateDifference({ "baseball bat": 20 }, 5) ➞ 15
//
//calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11
//
//calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
//Notes
//The object will always contain items (no empty objects).
//The sum of the items will always be greater than the limit.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const random = Test.randomNumber()
//const obj = { skate: 20000, painting: 30000, shoes: 1 }
//const obj2 = { "baseball bat": 31}
//const obj3 = {stereo: 110, pillow: random}
//Test.assertEquals(calculateDifference(obj, 50000),1)
//Test.assertEquals(calculateDifference(obj2, 10),21)
//Test.assertEquals(calculateDifference(obj3, 100), obj3.stereo + obj3.pillow - 100)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is the Average of All Elements a Whole Number?

//tags: arrays,loops,math,validation

//url: https://edabit.com/challenge/arzsQcGsstJxHAnGi

//Description:
//Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
//Examples
//isAvgWhole([1, 3]) ➞ true
//
//isAvgWhole([1, 2, 3, 4]) ➞ false
//
//isAvgWhole([1, 5, 6]) ➞ true
//
//isAvgWhole([1, 1, 1]) ➞ true
//
//isAvgWhole([9, 2, 2, 5]) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isAvgWhole([3, 5, 9]), false);
//Test.assertEquals(isAvgWhole([1, 1, 1, 1]), true);
//Test.assertEquals(isAvgWhole([1, 2, 3, 4, 5]), true);
//Test.assertEquals(isAvgWhole([5, 2, 4]), false);
//Test.assertEquals(isAvgWhole([11, 22]), false);
//Test.assertEquals(isAvgWhole([4, 1, 7, 9, 2, 5, 7, 2, 4]), false);

