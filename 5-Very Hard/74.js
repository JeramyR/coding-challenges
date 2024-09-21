

//title: Almost Sorted Sequence

//tags: arrays,sorting,validation

//url: https://edabit.com/challenge/z9JujCTeTM69ssLZa

//Description:
//An almost-sorted sequence is a sequence that is strictly increasing or strictly decreasing if you remove a single element from the array (no more, no less). Write a function that returns true if an array is almost-sorted, and false otherwise.
//For example, if you remove 80 from the first example, it is perfectly sorted in ascending order. Similarly, if you remove 7 from the second example, it is perfectly sorted in descending order.
//Examples
//almostSorted([1, 3, 5, 9, 11, 80, 15, 33, 37, 41] ) ➞ true
//
//almostSorted([6, 5, 4, 7, 3]) ➞ true
//
//almostSorted([6, 4, 2, 0]) ➞ false
//// Sequence is already sorted.
//
//almostSorted([7, 8, 9, 3, 10, 11, 12, 2]) ➞ false
//// Requires removal of more than 1 item.
//Notes
//Completely sorted arrays should return false.
//Arrays will always be > 3 in length (to remove ambiguity).
//Numbers in each input array will be unique - don't worry about "ties".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(almostSorted([1, 3, 5, 9, 11, 80, 15, 33, 37, 41]), true, 'remove 80 should work')
//Test.assertEquals(almostSorted([6, 5, 4, 7, 3]), true, 'remove 7 should work')
//Test.assertEquals(almostSorted([6, 4, 2, 0]), false, 'numbers should not be completely sorted')
//Test.assertEquals(almostSorted([7, 8, 9, 3, 10, 11, 12, 2]), false)
//Test.assertEquals(almostSorted([9, 1, 8, 2]), true, 'remove 1 should work')
//Test.assertEquals(almostSorted([1, 3, 9, 44, 15, 17, 33]), true, 'remove 44 should work')
//Test.assertEquals(almostSorted([5, 4, 3, 2, -1, 0]), true, 'remove -1 should work')
//Test.assertEquals(almostSorted([5, 2, 3, 4]), true, 'remove 5 should work')
//Test.assertEquals(almostSorted([8, 3, 7, 4, 9]), false)
//Test.assertEquals(almostSorted([-3, -4, -5, -7]), false, 'numbers should not be completely sorted')
//Test.assertEquals(almostSorted([5, 6, 7, 8]), false, 'numbers should not be completed sorted')
//Test.assertEquals(almostSorted([9, 1, 8, 2, 7, 3]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Pattern and Write the Function

//tags: cryptography,numbers

//url: https://edabit.com/challenge/YZRQ94ccwgKLhm85E

//Description:
//By looking at the inputs and outputs below, try to figure out the pattern and write a function to execute it for any number.
//Examples
//func(3456) ➞ 2
//
//func(89265) ➞ 5
//
//func(97) ➞ 12
//
//func(2113) ➞ -9
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(func(3456), 2)
//Test.assertEquals(func(89265), 5)
//Test.assertEquals(func(97), 12)
//Test.assertEquals(func(2113), -9)
//Test.assertEquals(func(55), 6)
//Test.assertEquals(func(785428), -2)
//Test.assertEquals(func(439), 7)
//Test.assertEquals(func(55654), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: New Driving License

//tags: arrays,logic,sorting

//url: https://edabit.com/challenge/W3yNHjZdzie2fo2Er

//Description:
//You have to get a new driver's license. You show up at the office at the same time as four other people. The office says they will see everyone in alphabetical order and it takes 20 minutes for them to process each new license. All of the agents are available now, and they can each see one customer at a time. How long will it take for you to walk out with your new license?
//Your input will be a string of your name me, an integer of the number of available agents, and a string of the other four names separated by spaces others.
//Return the number of minutes it will take to get your license.
//Examples
//license("Eric", 2, "Adam Caroline Rebecca Frank") ➞ 40
//// As you are in the second group of people.
//
//license("Zebediah", 1, "Bob Jim Becky Pat") ➞ 100
//// As you are the last person.
//
//license("Aaron", 3, "Jane Max Olivia Sam") ➞ 20
//// As you are the first.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(license("Zebediah", 1, "Bob Jim Becky Pat"), 100)
//Test.assertEquals(license("Eric", 2, "Adam Caroline Rebecca Frank"), 40)
//Test.assertEquals(license("Aaron", 3, "Jane Max Olivia Sam"), 20)
//Test.assertEquals(license("Zebediah", 4, "Bob Jim Becky Pat"), 40)
//Test.assertEquals(license("Zebediah", 5, "Bob Jim Becky Pat"), 20)

