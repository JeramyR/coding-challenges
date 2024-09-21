

//title: Recreate C#`s String.Format

//tags: formatting,strings

//url: https://edabit.com/challenge/RsagoaDZKCNZjogAF

//Description:
//Recreate C#'s String.Format where the first argument is the string template and all subsequent arguments are the values for the corresponding placeholders in the template.
//Examples
//String.Format("{0}{1}{2}{1}{0}",  "k",  "a", "y") ➞ "kayak"
//
//String.Format("Palindromes are {0}", "fun") ➞ "Palindromes are fun"
//
//String.Format("Hello {0}.\nGeneral {1}",  "there",  "Kenobi") ➞ "Hello there.\nGeneral Kenobi"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(String.Format("Hello {0}.\nGeneral {1}", "there", "Kenobi"), "Hello there.\nGeneral Kenobi")
//Test.assertEquals(String.Format("{0}{1}{2}{3}{2}{1}{0}", "r", "a", "c", "e"), "racecar")
//Test.assertEquals(String.Format("{0}{1}{2}{1}{0}", "k", "a", "y"), "kayak")
//Test.assertEquals(String.Format("Palindromes are {0}", "fun"), "Palindromes are fun")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Minimum and Maximum Value in BST

//tags: arrays,data_structures,language_fundamentals

//url: https://edabit.com/challenge/kr6rM8pvePADHG9Ez

//Description:
//Given a Binary Search Tree (BST) implementation, complete the minimum, and maximum function which is present in the BST class. Here you have to find the max value, min value of the whole tree.
//Examples
//data = [10, 4 , 20 , 1 , 5]
//
//maximum()  ➞ 20
//      10
//      /   \
//    4    20
//  /  \
//1    5
//
//data = [100, 70, 200, 34, 80, 300]
//
//minimum() ➞ 34
//
//       100
//       /    \
//    70    200
//  /    \          \
//34   80      300
//Notes
//Maximum and Minimum value of the whole tree.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Special Thanks to Shreeansh for test cases and data.
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
//Test.assertEquals(b.minimum(), 34)
//Test.assertEquals(b.maximum(), 200)
//​
//const b1 = new BST()
//b1.insert(1)
//Test.assertEquals(b1.maximum(), 1)
//Test.assertEquals(b1.minimum(), 1)
//​
//const b2 = new BST()
//b2.insert(100)
//b2.insert(25)
//b2.insert(22)
//b2.insert(75)
//b2.insert(122)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Roundabout

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/oXBcQsTa6bXoKwY6b

//Description:
//You are driving in a roundabout. At the moment you enter, you don't know which one of the exits you have to take. At the moment your GPS (or the person next to you) shouts that you should leave the roundabout, there's a moment of time where you need to react, turn on your indicator light, and exit the roundabout.
//Assuming the roundabouts are of equal size, the exits are equally spaced and you're driving at the same speed, you need to figure out the exit you're taking. Your function will get the amount of exits of the roundabout. You're entering the roundabout on "Exit 0".
//The next input will be the amount of degrees where you get the command to leave the roundabout. The time you have to react will be 30 degrees on the roundabout, so you cannot exit immediately.
//Examples
//roundabout(4, 50) ➞ "Exit 1"
//
//roundabout(4, 320) ➞ "Exit 0"
//
//roundabout(6, 60) ➞ "Exit 2"
//Notes
//You'll be driving clockwise within the roundabout.
//Sometimes you have to take the roundabout more than once.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(roundabout(4, 50), "Exit 1")
//Test.assertEquals(roundabout(3, 180), "Exit 2")
//Test.assertEquals(roundabout(6, 360), "Exit 1")
//Test.assertEquals(roundabout(3, 100), "Exit 2")
//Test.assertEquals(roundabout(5, 100), "Exit 2")
//Test.assertEquals(roundabout(4, 320), "Exit 0")
//Test.assertEquals(roundabout(2, 180), "Exit 0")
//Test.assertEquals(roundabout(6, 250), "Exit 5")
//Test.assertEquals(roundabout(4, 61), "Exit 2")
//Test.assertEquals(roundabout(3, 0), "Exit 1")
//Test.assertEquals(roundabout(4, 500), "Exit 2")
//Test.assertEquals(roundabout(3, 68), "Exit 1")
//Test.assertEquals(roundabout(5, 40), "Exit 1")
//Test.assertEquals(roundabout(6, 60), "Exit 2")

