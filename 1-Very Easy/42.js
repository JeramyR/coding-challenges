

//title: Default Mood

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/DdAkLaw4eyuWgCMmF

//Description:
//Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
//Examples
//moodToday("happy") ➞ "Today, I am feeling happy"
//
//moodToday("sad") ➞ "Today, I am feeling sad"
//
//moodToday() ➞ "Today, I am feeling neutral"
//Notes
//Check the Resources tab for some helpful information.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(moodToday("happy"), "Today, I am feeling happy")
//Test.assertEquals(moodToday("sad"), "Today, I am feeling sad")
//Test.assertEquals(moodToday("very happy"), "Today, I am feeling very happy")
//Test.assertEquals(moodToday("rather empty inside"), "Today, I am feeling rather empty inside")
//Test.assertEquals(moodToday("confused"), "Today, I am feeling confused")
//Test.assertEquals(moodToday(), "Today, I am feeling neutral")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Destructuring Assignment

//tags: interview,language_fundamentals,logic,objects

//url: https://edabit.com/challenge/4KL8sW5Gi63ei3fjp

//Description:
//You can assign variables from arrays like this:
//arr = [1, 2, 3, 4, 5, 6, 7, 8]
//first = arr[0]
//second = arr[1]
//third = arr[2]
//other = arr.slice(3)
//
//console.log(first) ➞ outputs 1
//console.log(second) ➞ outputs 2
//console.log(third) ➞ outputs 3
//console.log(other) ➞ outputs [4, 5, 6, 7, 8]
//However, this is long and tedious. Instead, we can use Object Destructuring to create all those variables in one line. Your task: Create variables first, second, third and other from the given array using Destructuring Assignment (check the Resources tab for some examples).
//Examples
//first ➞ 1
//
//second ➞ 2
//
//third ➞ 3
//
//other ➞ [4, 5, 6, 7, 8]
//Your task is to unpack the arr writeyourcodehere into four variables, first, second, third, and other.
//Notes
//Your solution should be just One Line of code.
//If your solution is longer than one line of code, please check the Resources tab.
//Another version of this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(first, 1)
//Test.assertSimilar(second, 2)
//Test.assertSimilar(third, 3)
//Test.assertSimilar(other, [4,5,6,7,8])
//​
//// Author: Mubashir Hassan

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Repeat String

//tags: conditions,language_fundamentals,logic,strings

//url: https://edabit.com/challenge/DBC7uCaN3yA4uGFQN

//Description:
//Create a function that takes a string txt and a number n and returns the repeated string n number of times.
//If given argument txt is not a string, return Not A String !!
//Examples
//repeatString("Mubashir", 2) ➞ "MubashirMubashir"
//
//repeatString("Matt", 3) ➞ "MattMattMatt"
//
//repeatString(1990, 7) ➞ "Not A String !!"
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(repeatString("Mubashir", 2), "MubashirMubashir")
//Test.assertEquals(repeatString("Matt", 3), "MattMattMatt")
//Test.assertEquals(repeatString(1990, 7), "Not A String !!")
//Test.assertEquals(repeatString("*", 3), "***")
//Test.assertEquals(repeatString("Hello", 11), "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello")
//Test.assertEquals(repeatString("243624", 22), "243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624243624")
//Test.assertEquals(repeatString([],3), "Not A String !!")
//Test.assertEquals(repeatString({},3), "Not A String !!")
//Test.assertEquals(repeatString(24,3), "Not A String !!")
//Test.assertEquals(repeatString(true,3), "Not A String !!")
//Test.assertEquals(repeatString("Hello",0), "")
//// Mubashir

