

//title: Maximum Weight Allowed

//tags: language_fundamentals,math,validation

//url: https://edabit.com/challenge/J3aRjEJoJoJ5yGBgR

//Description:
//Create a function that returns true if the combined weight of a car car and the weight of the passengers p in the car is less than the maximum weight maxWeight the car is allowed to carry. Otherwise, return false. The weight of the car and the weight of the passengers are given in pounds. The maximum weight is given in kilograms.
//Examples
//weightAllowed(3000, [150, 201, 75, 88, 195], 1700) ➞ true
//
//weightAllowed(3200, [220, 101, 115, 228, 15], 1700) ➞ false
//
//weightAllowed(2900, [225, 171, 300, 274, 191], 1850) ➞ true
//Notes
//1 pound = 0.453592 kilogram

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(weightAllowed(3000, [150, 201, 75, 88, 195], 1700), true);
//Test.assertEquals(weightAllowed(3200, [220, 101, 115, 228, 15], 1700), false);
//Test.assertEquals(weightAllowed(2900, [225, 171, 300, 274, 191], 1850), true);
//Test.assertEquals(weightAllowed(3550, [180, 201, 140, 99, 204], 1980), false);
//Test.assertEquals(weightAllowed(4500, [157, 154, 75, 88, 190], 2400), true);
//Test.assertEquals(weightAllowed(4000, [150, 200, 79, 80, 159], 2000), false);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Secret Function 2.0

//tags: language_fundamentals,regex,strings

//url: https://edabit.com/challenge/eKNJGfjAAYgEsCerC

//Description:
//Create a function based on the input and output. Look at the examples, there is a pattern.
//Examples
//secret("div*2") ➞ "<div></div><div></div>"
//
//secret("p*1") ➞ "<p></p>"
//
//secret("li*3") ➞ "<li></li><li></li><li></li>"
//Notes
//Input is a string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(secret("div*2"),`<div></div><div></div>`)
//Test.assertEquals(secret("p*1"),`<p></p>`)
//Test.assertEquals(secret("li*3"),`<li></li><li></li><li></li>`)
//Test.assertEquals(secret("h1*4"),`<h1></h1><h1></h1><h1></h1><h1></h1>`)
//Test.assertEquals(secret("ul*2"),`<ul></ul><ul></ul>`)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return Sole Element in a Set

//tags: language_fundamentals,objects

//url: https://edabit.com/challenge/CRzAffaQgfeATa2Yk

//Description:
//Given a set containing an element, return the sole element.
//Examples
//const first = new Set();
//first.add(1); 
//elementSet(first) ➞ 1
//
//const second = new Set();
//second.add("apple"); 
//elementSet(second) ➞ "apple"
//
//const third  = new Set();
//third.add(false); 
//elementSet(third) ➞ false
//Notes
//Set elements may be a string, boolean or number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const first = new Set();
//first.add(1); 
//Test.assertEquals(elementSet(first),1)
//​
//const second = new Set();
//second.add("apple");
//Test.assertEquals(elementSet(second),"apple")
//​
//const third  = new Set();
//third.add(false);
//Test.assertEquals(elementSet(third),false)

