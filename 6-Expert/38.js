

//title: Poker Hand Ranking

//tags: conditions,data_structures,games

//url: https://edabit.com/challenge/AtCTnf62Xa3hWaFtJ

//Description:
//In this challenge, you have to establish which kind of Poker combination is present in a deck of five cards. Every card is a string containing the card value (with the upper-case initial for face-cards) and the lower-case initial for suits, as in the examples below:
//"Ah" ➞ Ace of hearts
//"Ks" ➞ King of spades
//"3d" ➞ Three of diamonds
//"Qc" ➞ Queen of clubs
//There are 10 different combinations. Here's the list, in order of importance:
//Name	Description
//Royal Flush	A, K, Q, J, 10, all with the same suit.
//Straight Flush	Five cards in sequence, all with the same suit.
//Four of a Kind	Four cards of the same rank.
//Full House	Three of a Kind with a Pair.
//Flush	Any five cards of the same suit, not in sequence.
//Straight	Five cards in a sequence, but not of the same suit.
//Three of a Kind	Three cards of the same rank.
//Two Pair	Two different Pair.
//Pair	Two cards of the same rank.
//High Card	No other valid combination.
//Given an array hand containing five strings being the cards, implement a function that returns a string with the name of the highest combination obtained, accordingly to the table above.
//Examples
//pokerHandRanking(["10h", "Jh", "Qh", "Ah", "Kh"]) ➞ "Royal Flush"
//
//pokerHandRanking(["3h", "5h", "Qs", "9h", "Ad"]) ➞ "High Card"
//
//pokerHandRanking(["10s", "10c", "8d", "10d", "10h"]) ➞ "Four of a Kind"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(pokerHandRanking(["10h", "Jh", "Qh", "Ah", "Kh"]), "Royal Flush")
//Test.assertEquals(pokerHandRanking(["3h", "5h", "Qs", "9h", "Ad"]), "High Card")
//Test.assertEquals(pokerHandRanking(["10s", "10c", "8d", "10d", "10h"]), "Four of a Kind")
//Test.assertEquals(pokerHandRanking(["4h", "9s", "2s", "2d", "Ad"]), "Pair")
//Test.assertEquals(pokerHandRanking(["10s", "9s", "8s", "6s", "7s"]), "Straight Flush")
//Test.assertEquals(pokerHandRanking(["10c", "9c", "9s", "10s", "9h"]), "Full House")
//Test.assertEquals(pokerHandRanking(["8h", "2h", "8s", "3s", "3c"]), "Two Pair")
//Test.assertEquals(pokerHandRanking(["Jh", "9h", "7h", "5h", "2h"]), "Flush")
//Test.assertEquals(pokerHandRanking(["Ac", "Qc", "As", "Ah", "2d"]), "Three of a Kind")
//Test.assertEquals(pokerHandRanking(["Ad", "Kd", "Qd", "Jd", "9d"]), "Flush")
//Test.assertEquals(pokerHandRanking(["10h", "Jh", "Qs", "Ks", "Ac"]), "Straight")
//Test.assertEquals(pokerHandRanking(["3h", "8h", "2s", "3s", "3d"]), "Three of a Kind")
//Test.assertEquals(pokerHandRanking(["4h", "Ac", "4s", "4d", "4c"]), "Four of a Kind")
//Test.assertEquals(pokerHandRanking(["3h", "8h", "2s", "3s", "2d"]), "Two Pair")
//Test.assertEquals(pokerHandRanking(["8h", "8s", "As", "Qh", "Kh"]), "Pair")
//Test.assertEquals(pokerHandRanking(["Js", "Qs", "10s", "Ks", "As"]), "Royal Flush")
//Test.assertEquals(pokerHandRanking(["Ah", "3s", "4d", "Js", "Qd"]), "High Card")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse a Linked List

//tags: data_structures,higher_order_functions,recursion

//url: https://edabit.com/challenge/EthHvCiRXs8uzoGZJ

//Description:
//A linked list is a special type of data structure where a given item in the list - called a node - has one or two pointers to other nodes in the list. The linked list is either:
//Singly-Linked: Each node points to the next node in the list only, but not back to the previous node.
//Doubly-Linked: Each node points to both the next node and the previous node.
//For example, consider the singly-linked list represented by the array [1, 2, 3, 4]
// 1 --> 2--> 3 --> 4
//Note that from node 3, for example, you can follow its pointer to node 4, but you cannot travel from node 3 back to node 2!
// ... 2 <-x- 3
//Because there is no pointer from node 3 to node 2, 3 is "unaware" of its previous node (node 2).
//Reverse a linked list.
//To get the Super Mega Awesome Challenge prize (not really), you must also do the following:
//Reverse the list in place. For you CS types, that means O(1) auxiliary space. For you non-CS types, imagine that you do not have much extra space to store another "copy" of your linked list.
//
//Use a prototype method added to the included LinkedList class. If you do include a prototype method, note that this will take precedence over any "non-prototype" methods!
//Note that not doing these will still pass the challenge: these just earn extra coolness points!
//Finally, please note that you MUST return the reversed linked list at the end of the function (however you do it!)
//Examples
//[1, 2, 3, 4] ➞ [4, 3, 2, 1]
//
//[8, 6, 7, 5, 3, 0, 9] ➞ [9, 0, 3, 5, 7, 6, 8]
//
//["a", "b", "c", "e"] ➞ ["e" ,"c", "b", "a"]
//Tips
//Your initial linked list will be created with new LinkedList(arr), where arr is a list of items such as [1,2,3,4].
//The linked list has three helper methods
//insertHead(v): Inserts a new node with value v at the head of the list.
//insertTail(v): Inserts a new node with value v at the tail of the list.
//print(): Traverses the list (head to tail), pushes each value into an array, returns the array.
//It also has two default properties:
//head: the current head of the list. Default null.
//tail: the default tail of the list. Default null. Note that if the list is exactly one node long, the tail will equal the head!
//Generally speaking, if you're doing the reversing in place, you'll need to figure out a way to "reverse" those one-way pointers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const LLCands = [{
//    val: [1, 2, 3, 4],
//    msg:'A simple Linked List'
//}, {
//    val: [8, 6, 7, 5, 3, 0, 9],
//    msg: 'A slightly more complicated list'
//}, {
//    val: [1, 1, 3, 8],
//    msg:'The code is strong with this one'
//}, {
//    val: ['a', 'b', 'c', 'e'],
//    msg:'Letters should work!'
//}, {
//    val: ['r', 'a', 'c', 'e', 'c','a', 'r'],
//    msg: 'Palindromes are pretty fun too...'
//}, {
//    val: Array(20).fill(1).map(q => Math.floor(Math.random() * 99)),
//    msg:'Even a random array works!'
//}], 
//      fs = require('fs'),
//      codeLocked = `//Don't change this code! Don't do it!
//class Node{
//  constructor(v){
//    this.val=v;
//    this.next=null;

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Length of Sorting Cycle

//tags: language_fundamentals,sorting

//url: https://edabit.com/challenge/JYvEhPmdPNroCuw6E

//Description:
//Given an element in an array, write a function to determine the length of a particular element's sorting cycle. Given one element in the array, a sorting cycle is the number of swaps it takes so that the last displaced swapped item is back in its correct order.
//What is the length of 9's sorting cycle?
//[1, 9, 8, 4, 7, 2, 6, 3, 5]
//[1, 5, 8, 4, 7, 2, 6, 3, 9]  // 9 swaps with 5; 9 is in its correct spot.
//[1, 7, 8, 4, 5, 2, 6, 3, 9]  // 5 replaces 7; 5 is in its correct spot.
//[1, 6, 8, 4, 5, 2, 7, 3, 9]  // 7 replaces 6; 7 is in its correct spot.
//[1, 2, 8, 4, 5, 6, 7, 3, 9]  // 6 replaces 2; 6 is in its correct spot and 2 is in it's correct spot - done!
//9's cycle is of length 4. Notice how every number included in the swap (9, 5, 7, 6, and 2) are all in their rightful places. This is because each of these numbers are in the same sorting cycle.
//Here is another example. Using the same array above, what is the length of 8's sorting cycle?
//[1, 9, 8, 4, 7, 2, 6, 3, 5]
//
//[1, 9, 3, 4, 7, 2, 6, 8, 5] // 8 replaces 3; 8 and 3 are both in their correct spots.
//8's cycle is of length 1.
//Examples
//cycleLength([1, 5, 4, 3, 2, 6], 4) ➞ 1
//
//cycleLength([1, 6, 7, 2, 4, 3, 8, 9, 5], 7) ➞ 7
//
//cycleLength([43, 81, 88, 93, 17, 32, 19, 11], 93) ➞ 5
//
//cycleLength([1, 6, 7, 2, 4, 3, 8, 9, 5], 1) ➞ 0
//Notes
//Output 0 if the element is already in its correct order (see example #4).
//If this question is confusing, think about it in this way:
//Normally, swapping two numbers to place the first number in the correct order does not place the second number in its correct order. In other words, it's a single-party beneficial sort.
//The sorting cycle ends when a swap leads to a mutually beneficial sort, e.g. swapping two numbers leads the first AND the second number to be put to their rightful places.
//This question is tricky — see the Comments for a hint if you're stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cycleLength([1, 5, 4, 3, 2, 6], 4), 1)
//Test.assertEquals(cycleLength([1, 5, 4, 3, 2, 6], 6), 0)
//Test.assertEquals(cycleLength([1, 5, 4, 3, 2, 6], 5), 1)
//Test.assertEquals(cycleLength([1, 4, 2, 3, 5], 4), 2)
//Test.assertEquals(cycleLength([11, 44, 22, 31, 50], 44), 2)
//Test.assertEquals(cycleLength([1, 6, 7, 2, 4, 3, 8, 9, 5], 7), 7)
//Test.assertEquals(cycleLength([43, 81, 88, 93, 17, 32, 19, 11], 93), 5)
//Test.assertEquals(cycleLength([1, 6, 7, 2, 4, 3, 8, 9, 5], 1), 0)
//Test.assertEquals(cycleLength([1, 6, 7, 2, 4, 3, 9, 8, 5], 6), 6)
//Test.assertEquals(cycleLength([1, 6, 7, 2, 4, 3, 9, 8, 5], 5), 6)
//Test.assertEquals(cycleLength([1, 6, 7, 2, 4, 3, 9, 8, 5], 2), 6)
//Test.assertEquals(cycleLength([1, 6, 7, 2, 4, 3, 9, 8, 5], 3), 6)

