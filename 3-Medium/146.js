

//title: Merge Two Arrays

//tags: arrays,formatting,loops

//url: https://edabit.com/challenge/kaNYPQQWHSX4zGNhj

//Description:
//Create a function that takes two arrays and combines them by alternatingly taking elements from each array in turn.
//The arrays may be of different lengths, with at least one character / digit.
//The first array will contain string characters (lowercase, a-z).
//The second array will contain integers (all positive).
//Examples
//mergeArrays(["f", "d", "w", "t"], [5, 3, 7, 8])
//➞ ["f", 5, "d", 3, "w", 7, "t", 8]
//
//mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"])
//➞ [1, "a", 2, "b", 3, "c", "d", "e", "f"]
//
//mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])
//➞ ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]), ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5])
//Test.assertSimilar(mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"]), [1, "a", 2, "b", 3, "c", "d", "e", "f"])
//Test.assertSimilar(mergeArrays(["f", "d", "w", "t"], [5, 3, 7, 8]), ["f", 5, "d", 3, "w", 7, "t", 8])
//Test.assertSimilar(mergeArrays([4, 54, 7, 87], ["t", "d", "t"]), [4, "t", 54, "d", 7, "t", 87])
//Test.assertSimilar(mergeArrays(["c"], [3]), [ "c", 3 ])
//Test.assertSimilar(mergeArrays([4, 3, 2, 1], ["r", "d"]), [ 4, "r", 3, "d", 2, 1 ])
//Test.assertSimilar(mergeArrays(["u", "k", "c"], [2, 8, 30]), ["u", 2, "k", 8, "c", 30])
//Test.assertSimilar(mergeArrays(["e"], [1, 2, 3, 4, 5, 6, 7]), ["e", 1, 2, 3, 4, 5, 6, 7])
//Test.assertSimilar(mergeArrays([1, 2, 3, 4, 5, 6, 7], ["e"]), [1, "e", 2, 3, 4, 5, 6, 7])
//Test.assertSimilar(mergeArrays([123, 456], ["c", "b", "a"]), [123, "c", 456, "b", "a"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Replacing Letters with Hashes

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/2kentanhDPfDNfXG4

//Description:
//Write a function that replaces all letters within a specified range with the hash symbol #.
//Examples
//replace("abcdef", "c-e") ➞ "ab###f"
//
//replace("rattle", "r-z") ➞ "#a##le"
//
//replace("microscopic", "i-i") ➞ "m#croscop#c"
//
//replace("", "a-z") ➞ ""
//Notes
//The range will always be in order, a.k.a. for m-n, character m will always come before or equal n.
//Strings will be in lower case letters only.
//Return an empty string if the input is an empty string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(replace("abcdef", "c-e"), "ab###f")
//Test.assertEquals(replace("rattle", "r-z"), "#a##le")
//Test.assertEquals(replace("microscopic", "i-i"), "m#croscop#c")
//Test.assertEquals(replace("bountiful", "a-o"), "##u#t##u#")
//Test.assertEquals(replace("zebra", "a-z"), "#####")
//Test.assertEquals(replace("mount", "a-e"), "mount")
//Test.assertEquals(replace("", "a-z"), "")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count Number of Instances

//tags: classes,language_fundamentals,objects

//url: https://edabit.com/challenge/7PA4jhWqDYJT4ixLp

//Description:
//Create a class named User and create a way to check the number of users (number of instances) that were created, so that the value can be accessed as a class attribute.
//Examples
//u1 = new User("johnsmith10")
//User.userCount ➞ 1
//
//u2 = new User("marysue1989")
//User.userCount ➞ 2
//
//u3 = new User("milan_rodrick")
//User.userCount ➞ 3
//Make sure that the usernames are accessible via the instance attribute username.
//u1.username ➞ "johnsmith10"
//
//u2.username ➞ "marysue1989"
//
//u3.username ➞ "milan_rodrick"
//Notes
//Feel free to check out the resources provided in the Resources tab for some helpful information on JavaScript classes!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(User.userCount, 0)
//​
//const u1 = new User("johnsmith10")
//Test.assertEquals(User.userCount, 1)
//Test.assertEquals(u1.username, "johnsmith10")
//​
//​
//const u2 = new User("marysue1989")
//Test.assertEquals(User.userCount, 2)
//Test.assertEquals(u2.username, "marysue1989")
//​
//const u3 = new User("milan_rodrick")
//Test.assertEquals(User.userCount, 3)
//Test.assertEquals(u3.username, "milan_rodrick")
//​
//const user4 = new User("joshua_senoron")
//Test.assertEquals(User.userCount, 4)
//Test.assertEquals(user4.username, "joshua_senoron")
//​
//const user10 = new User("LuckyLootCrate123")
//Test.assertEquals(User.userCount, 5)
//Test.assertEquals(user10.username, "LuckyLootCrate123")

