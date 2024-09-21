

//title: Implementation Linked List

//tags: arrays,data_structures

//url: https://edabit.com/challenge/SAjCvAiKyqTEhrbJe

//Description:
//Implement a LinkedList function.
//Method to Implementation
//addFirst(n): Add an item to the head of the list.
//addLast(n): Add an item to the tail of the list.
//deleteFirst(): delete the head of the list.
//deleteLast(): remove the tail of the list
//contains(value): return a boolean as to whether a particular value is in the list
//indexOf(value): return the "index" of the passed-in value.
//Note that all inputs will be valid. That is, deleteFirst and deleteLast will never be called on an empty list, and the value searched for with indexOf will always exist within the given list.
//Examples
//list.addFirst(10) ➞ "[10]"
//
//list.addLast(20) ➞ "[10, 20]"
//
//list.addFirst(30) ➞ "[30, 10, 20]"
//
//list.deleteLast() ➞ "[10, 20, 30]"
//Notes
//Pay special attention to the toString() function that's supplied in the test tab! Your submission will fail if you don't.
//Feel free to write this as an ES6 class instead.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//var actual = new LinkedList();
//actual.addLast(10);
//actual.addLast(20);
//actual.addFirst(5);
//actual.addLast(30);
//​
//Test.assertEquals(actual.toString(), "[5, 10, 20, 30]")
//Test.assertEquals(actual.contains(10), true)
//Test.assertEquals(actual.indexOf(10), 1)
//​
//actual.deleteLast();
//​
//Test.assertEquals(actual.toString(), "[5, 10, 20]")
//​
//actual.addLast(50);
//​
//Test.assertEquals(actual.toString(), "[5, 10, 20, 50]")
//Test.assertEquals(actual.indexOf(50), 3)
//​
//actual.deleteLast()
//Test.assertEquals(actual.contains(5), false);
//Test.assertEquals(actual.toString(), "[10, 20, 50]")
//​
//actual.deleteFirst();
//Test.assertEquals(actual.contains(10), false);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Ordering People in a Line

//tags: arrays,loops

//url: https://edabit.com/challenge/cN9jtK2jdAGmFKqDt

//Description:
//Create a function that takes in the size of the line and the number of people waiting and places people in an S-shape ordering. The demonstration below will make it clear:
//// Ordering numbers 1-15 in a [5,3] space.
//
//orderPeople([5, 3], 15) ➞ [
//  [1, 2, 3],
//  [6, 5, 4],
//  [7, 8, 9],
//  [12, 11, 10],
//  [13, 14, 15]
//]
//If there is extra room, leave those spots blank with a 0 filler.
//// Ordering numbers 1-5 in a [4, 3] space.
//
//orderPeople([4, 3], 5) ➞ [
//  [1, 2, 3],
//  [0, 5, 4],
//  [0, 0, 0],
//  [0, 0, 0]
//]
//If there are too many people for the given dimensions, return "overcrowded".
//orderPeople([4, 3], 20) ➞ "overcrowded"
//Examples
//orderPeople([3, 3], 8) ➞ [
//  [1, 2, 3],
//  [6, 5, 4],
//  [7, 8, 0]
//]
//
//orderPeople([2, 4], 5) ➞ [
//  [1, 2, 3, 4],
//  [0, 0, 0, 5]
//]   
//
//orderPeople([2, 4], 10) ➞ "overcrowded"
//Notes
//Always start the ordering on the upper-left corner.
//If the S-shape concept doesn't make sense, try writing down some of these examples on a piece of paper and tracing a pencil through the numbers in order.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(orderPeople([5, 3], 15), [
//  [1, 2, 3],
//  [6, 5, 4],
//  [7, 8, 9],
//  [12, 11, 10],
//  [13, 14, 15]
//])
//​
//Test.assertSimilar(orderPeople([4, 3], 5), [
//  [1, 2, 3],
//  [0, 5, 4],
//  [0, 0, 0],
//  [0, 0, 0]
//])
//​
//Test.assertSimilar(orderPeople([3, 3], 8), [
//  [1, 2, 3],
//  [6, 5, 4],
//  [7, 8, 0]
//])
//​
//Test.assertSimilar(orderPeople([2, 4], 5), [
//  [1, 2, 3, 4],
//  [0, 0, 0, 5]
//])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort the String

//tags: algorithms,sorting,strings

//url: https://edabit.com/challenge/QfmeAthGsfRhWpsZ8

//Description:
//Create a function that takes a string consisting of lowercase letters, uppercase letters and numbers and returns the string sorted in the same way as the examples below.
//Examples
//sorting("eA2a1E") ➞ "aAeE12"
//// Don't repeat letters.
//
//sorting("Re4r") ➞ "erR4"
//
//sorting("6jnM31Q") ➞ "jMnQ136"
//
//sorting("846ZIbo") ➞ "bIoZ468"
//Notes
//Don't repeat letters (numbers can be repeated).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sorting("eA2a1E"), "aAeE12")
//Test.assertSimilar(sorting("Re4r"), "erR4")
//Test.assertSimilar(sorting("6jnM31Q"), "jMnQ136")
//Test.assertSimilar(sorting("f5Eex"), "eEfx5")
//Test.assertSimilar(sorting("846ZIbo"), "bIoZ468")
//Test.assertSimilar(sorting("2lZduOg1jB8SPXf5rakC37wIE094Qvm6Tnyh"), "aBCdEfghIjklmnOPQrSTuvwXyZ0123456789")

