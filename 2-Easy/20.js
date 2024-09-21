

//title: Sort Numbers in Descending Order

//tags: formatting,numbers,sorting

//url: https://edabit.com/challenge/yaXQvCzAXJLe37Qie

//Description:
//Create a function that takes any non-negative number as an argument and return it with its digits in descending order. Descending order is when you sort from highest to lowest.
//Examples
//sortDescending(123) ➞ 321
//
//sortDescending(1254859723) ➞ 9875543221
//
//sortDescending(73065) ➞ 76530
//Notes
//You can expect non-negative numbers for all test cases.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sortDescending(123), 321)
//Test.assertEquals(sortDescending(670276097), 977766200)
//Test.assertEquals(sortDescending(2619805), 9865210)
//Test.assertEquals(sortDescending(81294), 98421)
//Test.assertEquals(sortDescending(0000000), 0000000)
//Test.assertEquals(sortDescending(321), 321)
//Test.assertEquals(sortDescending(628904), 986420)
//Test.assertEquals(sortDescending(289327560), 987653220)
//Test.assertEquals(sortDescending(6456), 6654)
//Test.assertEquals(sortDescending(444111888555333), 888555444333111)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Transform into an Array with No Duplicates

//tags: arrays,loops

//url: https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd

//Description:
//A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.
//[1, 3, 3, 5, 5, 5]
//// original array
//
//[1, 3, 5]
//// original array transformed into a set
//Create a function that sorts an array and removes all duplicate items from it.
//Examples
//set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]
//
//set([4, 4, 4, 4]) ➞ [4]
//
//set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
//
//set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
//Notes
//For this question, output an array, not a set. These are two distinctly different data structures in JavaScript (although they can be converted from one to the other).
//See resources for a hint if you get stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(set([1, 3, 3, 5, 5]), [1, 3, 5])
//Test.assertSimilar(set([4, 4, 4, 4]), [4])
//Test.assertSimilar(set([5, 7, 8, 9, 10, 15]), [5, 7, 8, 9, 10, 15])
//Test.assertSimilar(set([5, 9, 9]), [5, 9])
//Test.assertSimilar(set([1, 2, 3, 4, 5, 5, 6, 6, 7]), [1, 2, 3, 4, 5, 6, 7])
//Test.assertSimilar(set([1, 1, 2, 2, 2]), [1, 2])
//Test.assertSimilar(set(['A', 'A', 'A', 'A']), ['A'])
//Test.assertSimilar(set(['A', 'B', 'C', 'D']), ['A', 'B', 'C', 'D'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Say "Hello" Say "Bye"

//tags: conditions,control_flow,strings

//url: https://edabit.com/challenge/kLa2w7m4h849k8rmW

//Description:
//Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.
//Examples
//sayHelloBye("alon", 1) ➞ "Hello Alon"
//
//sayHelloBye("Tomi", 0) ➞ "Bye Tomi"
//
//sayHelloBye("jose", 0) ➞ "Bye Jose"
//Notes
//The name you return must be capitalized.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sayHelloBye("jose", 1), "Hello Jose")
//Test.assertEquals(sayHelloBye("barry", 1), "Hello Barry")
//Test.assertEquals(sayHelloBye("jon", 0), "Bye Jon")
//Test.assertEquals(sayHelloBye("khloy", 1), "Hello Khloy")
//Test.assertEquals(sayHelloBye("sara", 0), "Bye Sara")
//Test.assertEquals(sayHelloBye("Jon", 0), "Bye Jon")
//Test.assertEquals(sayHelloBye("Matt", 1), "Hello Matt")

