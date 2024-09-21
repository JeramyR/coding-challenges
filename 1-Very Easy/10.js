

//title: Boolean to String Conversion

//tags: bit_operations,conditions,logic,strings

//url: https://edabit.com/challenge/KSTkFSnaYBJdo6PHx

//Description:
//Create a function that takes a boolean variable flag and returns it as a string.
//Examples
//boolToString(true) ➞ "true"
//
//boolToString(false) ➞ "false"
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(boolToString(true), "true")
//Test.assertEquals(boolToString(false), "false")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Using Arrow Functions

//tags: data_structures,language_fundamentals

//url: https://edabit.com/challenge/QkvDge63crdGnMfvM

//Description:
//Create a function that returns the given argument, but by using an arrow function.
//An arrow function is constructed like so:
//arrowFunc=(/*parameters*/)=>//code here
//Examples
//arrowFunc(3) ➞ 3
//
//arrowFunc("3") ➞ "3"
//
//arrowFunc(true) ➞ true
//Notes
//Check the Resources tab for more information on arrow functions.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//if(!(String(arrowFunc).includes('=>'))){
//  Test.assertEquals(0,1,"Your code does not use an arrow function")
//}
//​
//Test.assertEquals(arrowFunc(3),3)
//Test.assertEquals(arrowFunc("3"),"3")
//Test.assertEquals(arrowFunc(true),true)
//Test.assertEquals(arrowFunc("test"),"test")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Frames Per Second

//tags: algorithms,language_fundamentals,math,numbers

//url: https://edabit.com/challenge/d9suvbchE2bnHNQuK

//Description:
//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
//Examples
//frames(1, 1) ➞ 60
//
//frames(10, 1) ➞ 600
//
//frames(10, 25) ➞ 15000
//Notes
//FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(frames(1, 1), 60)
//Test.assertEquals(frames(10, 1), 600)
//Test.assertEquals(frames(10, 25), 15000)
//Test.assertEquals(frames(500, 60), 1800000)
//Test.assertEquals(frames(0, 60), 0)
//Test.assertEquals(frames(99, 1), 5940)
//Test.assertEquals(frames(419, 70), 1759800)
//Test.assertEquals(frames(52, 33), 102960)

