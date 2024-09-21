

//title: Recomposing Strings

//tags: arrays,formatting,regex,strings

//url: https://edabit.com/challenge/nLRGjd2LeAECKykZz

//Description:
//In this challenge, the goal is recomposing scrambled strings made of two or more words.
//Every string has to be reversed not in its totality, but by vowels or consonants clusters in the order they are found; after splitting the string in groups, and reversing every group with more than a letter, you'll obtain the correct sequence:
//String = "KiKdaola"
//
//Separation vowels/consonants = K  i  Kd  ao  l  a
//
//Reversing the groups = K  i  dK  oa  l  a
//
//New string = KidKoala
//Now, you have to insert a space between the words. A word starts with a capital letter:
//String = "KidKoala"
//
//Result = "Kid Koala"
//Given a string, implement a function that returns, in turn, a new correct string, following the above instructions.
//Examples
//recompose("KiKdaola") ➞ "Kid Koala"
//
//recompose("BaosdrOCfanada") ➞ "Boards Of Canada"
//// B  ao  sdr  O  Cf  a  n  a  d  a
//// B  oa  rds  O  fC  a  n  a  d  a
//
//recompose("hCemicarBlohtesr") ➞ "Chemical Brothers"
//// hC  e  m  i  c  a  rBl  o  ht  e  sr
//// Ch  e  m  i  c  a  lBr  o  th  e  rs
//Notes
//Every given string will be valid, containing only letters and at least two words (identified by the capital letters).
//Remember to reverse the clusters of letters and not the entire string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(recompose("KiKdaola"), "Kid Koala", "Example in Instructions")
//Test.assertEquals(recompose("BaosdrOCfanada"), "Boards Of Canada", "Example #2")
//Test.assertEquals(recompose("hCemicarBlohtesr"), "Chemical Brothers", "Example #3")
//Test.assertEquals(recompose("MuosOeMnasr"), "Mouse On Mars")
//Test.assertEquals(recompose("AhpewTxin"), "Aphex Twin")
//Test.assertEquals(recompose("MassivAettakc"), "Massive Attack")
//Test.assertEquals(recompose("DeosItOffeYdnuoYaeh"), "Does It Offend You Yeah")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Learn Lodash (14) _.countBy, Count Items in an Array

//tags: arrays,objects

//url: https://edabit.com/challenge/whHvvEDo67GDB7d9T

//Description:
//According to the lodash documentation, _.countBy creates an object composed of keys generated from the results of running each element of collection thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. The iteratee is invoked with one argument: (value).
//Recreate lodash's _.countBy with your own function using vanilla JavaScript.
//Input
//collection (Array or Object): The collection to iterate over.
//[iteratee=_.identity] (Function or string): The iteratee to check the keys and count them.
//Returns an object the counted values.
//Real Life Scenario
//You work at a car dealership. Your boss asks you to count the cars in the lot according to color. You come back to him and say there are 5 red ones, two blue ones and a green one. The color to search is the iteratee and the parking lot is the object or array you are searching. He might also give you a function to check the cars which could be, count the cars with milieage over 100,000 kilometers. You come back and say "true": 3, "false": 4 essentially 3 cars are over 100k and 4 cars are under.
//Examples
//houses = [
//   {
//    stories: 2,
//    door: "blue"
//   },
//   {
//    stories: 3,
//    door: "blue"
//   },
//   {
//    stories: 2,
//    door: "green"
//   }
//]
//
//countBy(houses, "door") ➞  { blue: 2, green: 1 }
//Notes
//Do not attempt to import lodash; you are simply writing your own version.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const noLodash = (f) => /[_]/g.test(f.toString());
//​
//Test.assertNotEquals(noLodash(countByValue), true, "Do not use lodash, please write your own version");
//​
//vehicles = [
//  { make: "toyota", color: "red", engine: "v6", type: "hatchback", year: 2018, mileage: 113312, isUsed: true },
//  { make: "toyota", color: "blue", engine: "v6", type: "hatchback", year: 2018, mileage: 324312, isUsed: true },
//  { make: "toyota", color: "yellow", engine: "v6", type: "hatchback", year: 2018, mileage: 113452, isUsed: false },
//  { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
//  { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
//  { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
//  { make: "mazda", color: "grey", engine: "v8", type: "sedan", year: 2021, mileage: 0, isUsed: false },
//  { make: "ford", color: "green", engine: "v8", type: "truck", year: 2008, mileage: 25467, isUsed: true },
//];
//​
//vehiclesAsObject = {
//  stall1: { make: "toyota", color: "red", engine: "v6", type: "hatchback", year: 2018, mileage: 113312, isUsed: true },
//  stall2: { make: "toyota", color: "blue", engine: "v6", type: "hatchback", year: 2018, mileage: 324312, isUsed: true },
//  stall3: { make: "toyota", color: "yellow", engine: "v6", type: "hatchback", year: 2018, mileage: 113452, isUsed: false },
//  stall4: { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
//  stall5: { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
//  stall6: { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 0, isUsed: true },
//  stall7: { make: "mazda", color: "grey", engine: "v8", type: "sedan", year: 2021, mileage: 0, isUsed: false },
//  stall8: { make: "ford", color: "green", engine: "v8", type: "truck", year: 2008, mileage: 25467, isUsed: true },
//};

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Numbers Transformation

//tags: logic,math,numbers,validation

//url: https://edabit.com/challenge/mrteErHiwHpWGo2vo

//Description:
//Mubashir (as always) needs your help to complete his assignment.
//You are given two positive integers n and m. You have to perform some basic mathematical operations on n to obtain m. These are your options:
//(n-1)/2   - if (n-1) is divisible by 2
//n/2       - if n is divisible by 2
//n*2
//Create a function that returns the minimum number of steps required to transform n into m.
//Examples
//numberTransform(2, 8) ➞ 2
//// 2 * 2 = 4
//// 4 * 2 = 8
//
//numberTransform(9, 2) ➞ 2
//// (9-1) / 2 = 4
//// 4 / 2 = 2
//
//numberTransform(1024, 1024) ➞ 0
//Notes
//m will always be a power of 2.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numberTransform(1, 1), 0)
//Test.assertEquals(numberTransform(2, 4), 1)
//Test.assertEquals(numberTransform(3, 8), 4)
//Test.assertEquals(numberTransform(4, 16), 2)
//Test.assertEquals(numberTransform(4, 1), 2)
//Test.assertEquals(numberTransform(1, 4), 2)
//Test.assertEquals(numberTransform(1024, 1024), 0)
//Test.assertEquals(numberTransform(2048, 1024), 1)
//Test.assertEquals(numberTransform(2048, 2), 10)
//Test.assertEquals(numberTransform(4096, 2), 11)
//Test.assertEquals(numberTransform(4096, 1), 12)
//// Mubashir

