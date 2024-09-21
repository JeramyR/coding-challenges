

//title: Validate Phone Numbers

//tags: regex,strings,validation

//url: https://edabit.com/challenge/LQvRrzwHzc2BAXBQx

//Description:
//Write a function that returns true if the phone number is in a valid format. Valid formats are as follows:
//With Country Code	Without Country Code
//+1-892-445-7663	892-445-7663
//1-892-445-7663	(892) 445-7663
//1 (892) 445-7663	892.567.8901
//1.892.567.8901	1/892/567/8901
//1 892 567 8901	892/567/8901
//18925678901	892 567 8901
//Examples
//validate("578-332-1114") ➞ true
//
//validate("57-332-1114") ➞ false
//
//validate("577 332  1114") ➞ false
//// More than one space in between digits clusters.
//
//validate("57 332 1114") ➞ false
//// Unacceptable digit cluster length.
//
//validate("157%332-1114") ➞ false
//// Unacceptable delimiter.
//Notes
//The country code will always be +1 or 1.
//Each phone number will contain either 10 or 11 digits (depending on whether the country code exists).
//There must either be exactly one space, a delimiter, or no space at all between the digit clusters.
//You do not have to worry about extensions.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(validate("+1-892-445-7663"), true)
//Test.assertEquals(validate("1-892-445-7663"), true)
//Test.assertEquals(validate("1 (892) 445-7663"), true)
//Test.assertEquals(validate("1.892.567.8901"), true)
//Test.assertEquals(validate("1/892/567/8901"), true)
//Test.assertEquals(validate("1 892 567 8901"), true)
//Test.assertEquals(validate("18925678901"), true)
//Test.assertEquals(validate("892-445-7663"), true)
//Test.assertEquals(validate("(892) 445-7663"), true)
//Test.assertEquals(validate("892.567.8901"), true)
//Test.assertEquals(validate("892/567/8901"), true)
//Test.assertEquals(validate("892 567 8901"), true)
//Test.assertEquals(validate("8925678901"), true)
//Test.assertEquals(validate("89-445-7663"), false, "Invalid digit clusters.")
//Test.assertEquals(validate("(892) 4454-7663"), false, "Invalid digit clusters.")
//Test.assertEquals(validate("892  567 8901"), false, "Additional space.")
//Test.assertEquals(validate("892?567?8901"), false, "Invalid delimiter.")
//Test.assertEquals(validate("!1-892-567-8901"), false, "Invalid international code.")
//Test.assertEquals(validate("(8924) 445-7663"), false, "Invalid digit clusters.")
//Test.assertEquals(validate("12 892 445-7663"), false, "Invalid international code.")
//Test.assertEquals(validate("1&892&445-7663"), false, "Invalid delimiter.")
//Test.assertEquals(validate("894-445-766"), false, "Invalid digit clusters.")
//Test.assertEquals(validate("894 445 766"), false, "Invalid digit clusters.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Level Order Traversal

//tags: data_structures,logic,loops

//url: https://edabit.com/challenge/o7WSAxLni29m6iKBQ

//Description:
//Given a Binary Search Tree (BST) implementation, complete the traverse function which is present in the BST class. Here you have to perform the level-order traversal on BST which is another term for Breadth First Traversal.
//Examples
//traverse() ➞  [10, 4, 20, 1, 5]
//
//      10
//      /   \
//    4    20
//  /  \
//1    5
//
//traverse() ➞ [100, 70, 200, 34, 80, 300]
//
//       100
//       /    \
//    70    200
//  /    \          \
//34   80      300
//Notes
//Make sure you don't modify the code that is already in the Code tab. Only complete the traverse() function and return an array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Author: Shreeansh
//​
//const b = new BST()
//b.insert(100)
//b.insert(200)
//b.insert(70)
//b.insert(34)
//b.insert(80)
//b.insert(85)
//b.insert(85)
//b.insert(111)
//Test.assertSimilar(b.traverse(), [100, 70, 200, 34, 80, 111, 85, 85])
//​
//const b1 = new BST()
//b1.insert(1)
//Test.assertSimilar(b1.traverse(), [1])
//​
//const b2 = new BST()
//b2.insert(100)
//b2.insert(25)
//b2.insert(22)
//b2.insert(75)
//b2.insert(122)
//b2.insert(111)
//b2.insert(112)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse Polish Notation

//tags: algebra,algorithms

//url: https://edabit.com/challenge/vhD8xhcFfCJdi4BMs

//Description:
//Create a function to emulate a Reverse Polish Notation calculator.
//Examples
//rpn([1, 2, "*", 4,5, "*" , "+"]) ➞ 22
//
//rpn([1,1,"+"]) ➞ 2
//
//rpn([16,16, "/" ]) ➞ 1
//Notes
//Learn more about Reverse Polish Notation in Resources.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rpn([1, 2, "*", 4, 5, "*", "+"]), 22)
//Test.assertEquals(rpn([1, 1, "+"]), 2)
//Test.assertEquals(rpn([16, 16, "/"]), 1)
//Test.assertEquals(rpn([7, 6, "-"]), 1)
//Test.assertEquals(rpn([1, 2, 3, 4, 5, 6, "+", "+", "+", "+", "+"]), 21)
//Test.assertEquals(rpn([1]), 1)
//Test.assertEquals(rpn([12345, 12344, "-"]), 1)
//Test.assertEquals(rpn([1, 7, "*"]), 7)
//Test.assertEquals(rpn([1, 5, "+", 2, "/"]), 3)
//Test.assertEquals(rpn([111, 222, "+", 333, "-"]), 0)
//Test.assertEquals(rpn([1, 2, "-"]), -1)
//Test.assertEquals(rpn([1, 1, "/", 2, "+", 2, "*", 3, "/"]), 2)
//Test.assertEquals(rpn([9, 9, "*", 6, 6, "*", "-", 9, "/"]), 5)
//Test.assertEquals(rpn([15, 15, "*"]), 225)
//Test.assertEquals(rpn([1, 1, 1, 1, 1, 1, "+", "+", "+", "+", "+"]), 6)
//​
//// Author : mkjlong

