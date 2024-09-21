

//title: Remove the First and Last Characters

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/Wq3Q5ewau9Fu2GN9i

//Description:
//Create a function that removes the first and last characters from a string.
//Examples
//removeFirstLast("hello") ➞ "ell"
//
//removeFirstLast("maybe") ➞ "ayb"
//
//removeFirstLast("benefit") ➞ "enefi"
//
//removeFirstLast("a") ➞ "a"
//Notes
//If the string is 2 or fewer characters long, return the string itself (See Example #4).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(removeFirstLast("hello"), "ell")
//Test.assertEquals(removeFirstLast("benefit"), "enefi")
//Test.assertEquals(removeFirstLast("wordy"), "ord")
//Test.assertEquals(removeFirstLast("maybe"), "ayb")
//Test.assertEquals(removeFirstLast("to"), "to")
//Test.assertEquals(removeFirstLast("a"), "a")
//Test.assertEquals(removeFirstLast(""), "")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Even and Last

//tags: arrays,logic,math,numbers

//url: https://edabit.com/challenge/pKSS2rNDiXh4MoNpe

//Description:
//Given an array of integers arr, return the sum of all the integers that have an even index, multiplied by the integer at the last index.
//If the sequence is empty, you should return 0.
//Examples
//evenLast([2, 3, 4, 5]) ➞ 30
//// numbers at even index = 2, 4
//// number at last index = 5
//// 2*5 + 4*5 = 10 + 20 = 30
//
//evenLast([1, 3, 3, 1, 10]) ➞ 140
//
//evenLast([]) ➞ 0
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(evenLast([2, 3, 4, 5]), 30)
//Test.assertEquals(evenLast([]), 0)
//Test.assertEquals(evenLast([2, 2, 2, 2]), 8)
//Test.assertEquals(evenLast([1, 3, 3, 1, 10]), 140)
//Test.assertEquals(evenLast([-11, 3, 3, 1, 10]), 20)
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Retrieve the Subreddit

//tags: regex,strings

//url: https://edabit.com/challenge/WT5MGmgaP3jvx8qpt

//Description:
//Create a function to extract the name of the subreddit from its URL.
//Examples
//subReddit("https://www.reddit.com/r/funny/") ➞ "funny"
//
//subReddit("https://www.reddit.com/r/relationships/") ➞ "relationships"
//
//subReddit("https://www.reddit.com/r/mildlyinteresting/") ➞ "mildlyinteresting"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(subReddit("https://www.reddit.com/r/relationships/"), "relationships")
//Test.assertEquals(subReddit("https://www.reddit.com/r/mildlyinteresting/"), "mildlyinteresting")
//Test.assertEquals(subReddit("https://www.reddit.com/r/funny/"), "funny")
//Test.assertEquals(subReddit("https://www.reddit.com/r/CrappyDesign/"), "CrappyDesign")
//Test.assertEquals(subReddit("https://www.reddit.com/r/confession/"), "confession")
//Test.assertEquals(subReddit("https://www.reddit.com/r/AskMen/"), "AskMen")
//Test.assertEquals(subReddit("https://www.reddit.com/r/comics/"), "comics")
//Test.assertEquals(subReddit("https://www.reddit.com/r/lifehacks/"), "lifehacks")
//Test.assertEquals(subReddit("https://www.reddit.com/r/wholesomememes/"), "wholesomememes")
//Test.assertEquals(subReddit("https://www.reddit.com/r/iamverysmart/"), "iamverysmart")
//Test.assertEquals(subReddit("https://www.reddit.com/r/starterpacks/"), "starterpacks")
//Test.assertEquals(subReddit("https://www.reddit.com/r/awww/"), "awww")

