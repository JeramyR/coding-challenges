

//title: Planetary Weight Converter

//tags: math,objects,physics

//url: https://edabit.com/challenge/CaWc84kuPBzCMEcR3

//Description:
//In this challenge, you have to convert a weight weighed on a planet of the Solar System to the corresponding weight on another planet.
//To convert the weight, you have to divide it by the gravitational force of the planet on which is weighed and multiply the result (the mass) for the gravitational force of the other planet. See the table below for a list of gravitational forces:
//weight on planetA / gravitational force of planetA * gravitational force of planetB
//Planet	m/s²
//Mercury	3.7
//Venus	8.87
//Earth	9.81
//Mars	3.711
//Jupiter	24.79
//Saturn	10.44
//Uranus	8.69
//Neptune	11.15
//Given a weight weighed on planetA, return the converted value for planetB rounded to the nearest hundredth.
//Examples
//spaceWeights("Earth", 1, "Mars") ➞ 0.38
//
//spaceWeights("Earth", 1, "Jupiter") ➞ 2.53
//
//spaceWeights("Earth", 1, "Neptune") ➞ 1.14
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(spaceWeights("Earth", 1, "Mars"), 0.38, "Example #1")
//Test.assertEquals(spaceWeights("Earth", 1, "Jupiter"), 2.53, "Example #2")
//Test.assertEquals(spaceWeights("Earth", 1, "Neptune"), 1.14, "Example #3")
//Test.assertEquals(spaceWeights("Jupiter", 100, "Mercury"), 14.93)
//Test.assertEquals(spaceWeights("Venus", 75, "Jupiter"), 209.61)
//Test.assertEquals(spaceWeights("Uranus", 10, "Saturn"), 12.01)
//Test.assertEquals(spaceWeights("Mars", 120, "Mercury"), 119.64)
//Test.assertEquals(spaceWeights("Neptune", 1421, "Earth"), 1250.23)
//Test.assertEquals(spaceWeights("Jupiter", 33, "Mercury"), 4.93)
//Test.assertEquals(spaceWeights("Saturn", 555, "Venus"), 471.54)
//Test.assertEquals(spaceWeights("Jupiter", 3.141592, "Earth"), 1.24)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Narcissistic Numbers

//tags: language_fundamentals,numbers,validation

//url: https://edabit.com/challenge/wNh9NaWY6EvA7sPDQ

//Description:
//A number is narcissistic when the sum of its digits, with each digit raised to the power of digits quantity, is equal to the number itself.
//153 ➞ 3 digits ➞ 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 ➞ Narcissistic
//84 ➞ 2 digits ➞ 8² + 4² = 64 + 16 = 80 ➞ Not narcissistic
//Given a positive integer n, implement a function that returns true if the number is narcissistic, and false if it's not.
//Examples
//isNarcissistic(8208) ➞ true
//// 8⁴ + 2⁴ + 0⁴ + 8⁴ = 8208
//
//isNarcissistic(22) ➞ false
//// 2² + 2² = 8
//
//isNarcissistic(9) ➞ true
//// 9¹ = 9
//Notes
//Trivially, any number in the 1-9 range is narcissistic and any two-digit number is not.
//Curious fact: Only 88 numbers are narcissistic.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isNarcissistic(6), true)
//Test.assertEquals(isNarcissistic(1741725), true)
//Test.assertEquals(isNarcissistic(66), false)
//Test.assertEquals(isNarcissistic(65239), false)
//Test.assertEquals(isNarcissistic(886243), false)
//Test.assertEquals(isNarcissistic(92727), true)
//Test.assertEquals(isNarcissistic(472335975), true)
//Test.assertEquals(isNarcissistic(42300981), false)
//Test.assertEquals(isNarcissistic(548834), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Simple Circle Collision Detection

//tags: algebra,algorithms,games,math

//url: https://edabit.com/challenge/qMKzp256C9Ng9pGYc

//Description:
//Create a function that returns true if the given circular areas are intersecting, otherwise return false. The circles are given as two arrays containing the values in the following order:
//Radius of the circle.
//Center position on the x-axis.
//Center position on the y-axis.
//Examples
//isCircleCollision([10, 0, 0], [10, 10, 10]) ➞ true
//
//isCircleCollision([1, 0, 0], [1, 10, 10]) ➞ false
//Notes
//You can expect useable input and positive radii.
//The given coordinates are the centers of the circles.
//We are looking for intersecting areas, not intersection outlines.
//Check the Resources tab for help.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isCircleCollision([10, 0, 0], [10, 10, 10]), true)
//Test.assertEquals(isCircleCollision([10, 0, 0], [5, 0, 0]), true)
//Test.assertEquals(isCircleCollision([1, 0, 0], [1, 0, 0]), true)
//Test.assertEquals(isCircleCollision([5, 0, 0], [5, 10, 10]), false)
//Test.assertEquals(isCircleCollision([1, 0, 0], [1, 10, 10]), false)

