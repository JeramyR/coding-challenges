

//title: Count the Arguments

//tags: functional_programming,language_fundamentals

//url: https://edabit.com/challenge/Mtke2HhuFwBkFi6Ty

//Description:
//Create a function that returns the number of arguments it was called with.
//Examples
//numArgs() ➞ 0
//
//numArgs("foo") ➞ 1
//
//numArgs("foo", "bar") ➞ 2
//
//numArgs(true, false) ➞ 2
//
//numArgs({}) ➞ 1
//Notes
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numArgs(), 0)
//Test.assertEquals(numArgs('foo'), 1)
//Test.assertEquals(numArgs('foo', 'bar'), 2)
//Test.assertEquals(numArgs(null, null), 2)
//Test.assertEquals(numArgs('foo', 'bar', 5, null), 4)
//Test.assertEquals(numArgs(false), 1)
//Test.assertEquals(numArgs('foo', {}), 2)
//Test.assertEquals(numArgs('foo', 'bar', {}), 3)
//Test.assertEquals(numArgs([], [], {}), 3)
//Test.assertEquals(numArgs('foo', 'bar', true, null, 0), 5)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Bug: Returning the Container

//tags: bugs,conditions,control_flow,logic

//url: https://edabit.com/challenge/kAfeaiu7QrXp4RfSX

//Description:
//The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.
//The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...
//Examples
//getContainer("Bread") ➞ "bag"
//
//getContainer("Beer") ➞ "bottle"
//
//getContainer("Candy") ➞ "plastic"
//
//getContainer("Cheese") ➞ null
//Notes
//Think about what the object's packaging should be.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getContainer("Bread"), "bag")
//Test.assertEquals(getContainer("Milk"), "bottle")
//Test.assertEquals(getContainer("Beer"), "bottle")
//Test.assertEquals(getContainer("Eggs"), "carton")
//Test.assertEquals(getContainer("Candy"), "plastic")
//Test.assertEquals(getContainer("Cheese"), null)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Many Operators!

//tags: language_fundamentals,math

//url: https://edabit.com/challenge/7Qx4M32b94h3P4dyt

//Description:
//Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.
//Examples
//operate(1, 2, "+") ➞ 3
//// 1 + 2 = 3
//
//operate(7, 10, "-") ➞ -3
//// 7 - 10 = -3
//
//operate(20, 10, "%") ➞ 0
//// 20 % 10 = 0
//Notes
//There will not be any divisions by zero.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(operate(1, 1, "+"), 2)
//Test.assertEquals(operate(1, 1, "-"), 0)
//Test.assertEquals(operate(1, 1, "*"), 1)
//Test.assertEquals(operate(1, 1, "/"), 1)
//Test.assertEquals(operate(1, 1, "%"), 0)
//Test.assertEquals(operate(2, 1, "+"), 3)
//Test.assertEquals(operate(2, 1, "-"), 1)
//Test.assertEquals(operate(2, 1, "*"), 2)
//Test.assertEquals(operate(2, 1, "/"), 2)
//Test.assertEquals(operate(2, 1, "%"), 0)

