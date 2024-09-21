

//title: Triangular Number Sequence

//tags: algebra,algorithms,loops,math

//url: https://edabit.com/challenge/RMZiERz2cbjmbXruY

//Description:
//This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:
//1, 3, 6, 10, 15
//This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.
//Write a function that returns the number of dots when given its corresponding triangle number of the sequence.
//Examples
//triangle(1) ➞ 1
//
//triangle(6) ➞ 21
//
//triangle(215) ➞ 23220
//Notes
//Check the Resources for info on triangular number sequence.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(triangle(1), 1)
//Test.assertEquals(triangle(2), 3)
//Test.assertEquals(triangle(3), 6)
//Test.assertEquals(triangle(8), 36)
//Test.assertEquals(triangle(2153), 2318781)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Make a Circle with OOP

//tags: classes,geometry,math,objects

//url: https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ

//Description:
//Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).
//For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.
//Examples
//let circy = new Circle(11)
//circy.getArea()
//
//// Should return 380.132711084365
//let circy = new Circle(4.44)
//circy.getPerimeter()
//
//// Should return 27.897342763877365
//Notes
//Don't worry about floating point precision - I've factored in the chance that your answer may be more or less accurate than mine. This is more of a tutorial than a challenge so the topic covered may be considered advanced, yet the challenge is more simple - so if this challenge gets labelled as easy, don't worry too much.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//function round(number) {
//  var factor = Math.pow(10, 5);
//  return Math.round(number * factor) / factor;
//}
//let circo = new Circle(20);
//Test.assertEquals(round(circo.getArea()), 1256.63706);
//Test.assertEquals(round(circo.getPerimeter()), 125.66371);
//let circo1 = new Circle(2);
//Test.assertEquals(round(circo1.getArea()), 12.56637);
//Test.assertEquals(round(circo1.getPerimeter()), 12.56637);
//let circo2 = new Circle(4.4);
//Test.assertEquals(round(circo2.getArea()), 60.82123);
//Test.assertEquals(round(circo2.getPerimeter()),  27.64602);
//let randomInt = round(Math.floor(Math.random() * Math.floor(200)));
////scroll down for spoilers that are hard to use
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Convenience Store

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/erFxBbqzZPSegMwnc

//Description:
//Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
//To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
//Examples
//changeEnough([2, 100, 0, 0], 14.11) ➞ false
//
//changeEnough([0, 0, 20, 5], 0.75) ➞ true
//
//changeEnough([30, 40, 20, 5], 12.55) ➞ true
//
//changeEnough([10, 0, 0, 50], 3.85) ➞ false
//
//changeEnough([1, 0, 5, 219], 19.99) ➞ false
//Notes
//quarter: 25 cents / $0.25
//dime: 10 cents / $0.10
//nickel: 5 cents / $0.05
//penny: 1 cent / $0.01

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(changeEnough([2, 100, 0, 0], 14.11), false);
//Test.assertEquals(changeEnough([0, 0, 20, 5], 0.75), true);
//Test.assertEquals(changeEnough([30, 40, 20, 5], 12.55), true);
//Test.assertEquals(changeEnough([10, 0, 0, 50], 13.85), false);
//Test.assertEquals(changeEnough([1, 0, 5, 219], 19.99), false);
//Test.assertEquals(changeEnough([1, 0, 2555, 219], 127.75), true);
//Test.assertEquals(changeEnough([1, 335, 0, 219], 35.21), true);

