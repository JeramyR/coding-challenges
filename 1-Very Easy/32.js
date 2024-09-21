

//title: Four Passengers and a Driver

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/Eu3Q3dGe47c2YssKq

//Description:
//A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.
//Examples
//carsNeeded(5) ➞ 1
//
//carsNeeded(11) ➞ 3
//
//carsNeeded(0) ➞ 0
//Notes
//It's likely there will be a few people left over and some cars won't be filled to max capacity.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(carsNeeded(0), 0)
//Test.assertEquals(carsNeeded(1), 1)
//Test.assertEquals(carsNeeded(4), 1)
//Test.assertEquals(carsNeeded(5), 1)
//Test.assertEquals(carsNeeded(6), 2)
//Test.assertEquals(carsNeeded(18), 4)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Check String for Spaces

//tags: strings,validation

//url: https://edabit.com/challenge/RAoedjZwcGFhvRTru

//Description:
//Create a function that returns true if a string contains any spaces.
//Examples
//hasSpaces("hello") ➞ false
//
//hasSpaces("hello, world") ➞ true
//
//hasSpaces(" ") ➞ true
//
//hasSpaces("") ➞ false
//
//hasSpaces(",./!@#") ➞ false
//Notes
//An empty string does not contain any spaces.
//Try doing this without RegEx.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hasSpaces("Foo"), false)
//Test.assertEquals(hasSpaces("Foo bar"), true)
//Test.assertEquals(hasSpaces("Foo "), true)
//Test.assertEquals(hasSpaces(" Foo"), true)
//Test.assertEquals(hasSpaces(" "), true)
//Test.assertEquals(hasSpaces(""), false)
//Test.assertEquals(hasSpaces(",./;'[]-="), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Kinetic Energy

//tags: math,numbers,physics

//url: https://edabit.com/challenge/7q8sSTcvE9ayzTef8

//Description:
//Kinetic energy can be calculated with the following formula:
//
//m is mass in kg
//v is velocity in m/s
//KE is kinetic energy in J
//Return the Kinetic Energy in Joules, given the mass and velocity. For the purposes of this challenge, round answers to the nearest integer.
//Examples
//kineticEnergy(60, 3) ➞ 270
//
//kineticEnergy(45, 10) ➞ 2250
//
//kineticEnergy(63.5, 7.35) ➞ 1715
//Notes
//Expect only positive numbers for inputs.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(kineticEnergy(60, 3), 270)
//Test.assertEquals(kineticEnergy(45, 10), 2250)
//Test.assertEquals(kineticEnergy(63.5, 7.35), 1715)
//Test.assertEquals(kineticEnergy(0, 7.35), 0)
//Test.assertEquals(kineticEnergy(88.4, 0), 0)
//Test.assertEquals(kineticEnergy(3.333, 5.4), 49)

