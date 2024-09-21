

//title: Decimal Range Function

//tags: algebra,data_structures,numbers

//url: https://edabit.com/challenge/zkaCzfxLoPWwtvspN

//Description:
//Create a function that can take 1, 2, or 3 arguments 1 being start, 2 being stop and 3 being step and returns an array. This should be able to return float values.
//Examples
//Default Values Start = 0, Step = 1
//drange(1.2, 5.9, 0.45) ➞ [1.20, 1.65, 2.10, 2.55, 3.00, 3.45, 3.90, 4.35, 4.80, 5.25, 5.70]
//// start = 1.2 stop = 5.9 and step = 0.45
////1.2, 1.2+0.45=1.65,1.65+0.45=2.1,...,5.7 Should be less than 5.9
//
//drange(10) ➞ [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//// start = 0 ,  stop = 10  and step = 1
////0,0+1=1,...,9                          Should be less than 10.
//
//drange(1, 7, 1.2) ➞ [1.0, 2.2, 3.4, 4.6, 5.8]
//// start = 1  stop = 7 and step = 1.2
//// 1, 1+1.2=2.2, 2.2 + 1.2=3.4,...5.8   Should be less than 7.
//Notes
//Always round values to the number with the most decimal digits (e.g. in the first example, the answer should always be rounded to 2 digits. In the second, it should be rounded to 0 digits and the third, 1 digit).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(drange(1.2, 5.9, 0.45), [1.2, 1.65, 2.1, 2.55, 3, 3.45, 3.9, 4.35, 4.8, 5.25, 5.7])
//Test.assertSimilar(drange(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
//Test.assertSimilar(drange(1, 7, 1.2), [1, 2.2, 3.4, 4.6, 5.8])
//Test.assertSimilar(drange(3, 10), [3, 4, 5, 6, 7, 8, 9])
//Test.assertSimilar(drange(0.112, 13, 3.27), [0.112, 3.382, 6.652, 9.922])
//​
//// Author : Psycho Begz

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ABACABA Pattern

//tags: geometry,recursion

//url: https://edabit.com/challenge/ny6ErMLiGWeL6up3v

//Description:
//The ABACABA pattern is a recursive fractal pattern that shows up in many places in the real world (such as in geometry, art, music, poetry, number systems, literature and higher dimensions).
//Create a function that takes a number n as an argument and returns a string that represents the full pattern.
//Examples
//abacabaPattern(1) ➞ "A"
//
//abacabaPattern(2) ➞ "ABA"
//
//abacabaPattern(3) ➞ "ABACABA"
//Notes
//Result should always be uppercase.
//Check the Resources tab for more info on the ABACABA pattern.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const message = "Unmatched."
//Test.assertEquals(abacabaPattern(1), "A", message)
//Test.assertEquals(abacabaPattern(2), "ABA", message)
//Test.assertEquals(abacabaPattern(3), "ABACABA", message)
//Test.assertEquals(abacabaPattern(4), "ABACABADABACABA", message)
//Test.assertEquals(abacabaPattern(5), "ABACABADABACABAEABACABADABACABA", message)
//Test.assertEquals(abacabaPattern(6), "ABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABA", message)
//Test.assertEquals(abacabaPattern(7), "ABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABA", message)
//Test.assertEquals(abacabaPattern(8), "ABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAHABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABA", message)
//Test.assertEquals(abacabaPattern(9), "ABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAHABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAIABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAHABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABAGABACABADABACABAEABACABADABACABAFABACABADABACABAEABACABADABACABA", message)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Learn Lodash: _.find, Find a Value in an Array or Object

//tags: arrays,functional_programming,objects

//url: https://edabit.com/challenge/2nPyx6CwKTso69Hbj

//Description:
//According to the lodash documentation, _.find Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
//Arguments
//collection (Array or Object): The collection to inspect.
//[predicate=_.identity] function, object, array or string
//[fromIndex=0] (number): The index to search from.
//Recreate lodash's _.find using vanilla JavaScript.
//The difference between lodash _.find and the JavaScript find method is that the JavaScript method can only be applied to arrays and can only receive a callback function like so: array.find(d => d.isTheBest). The lodash find method can be called on both arrays and objects and can receive a function, an object, or an array which it uses to perform the search.
//Like so:
//_.find(array, {isTheBest: true})
//
//_.find(array, "isBest")
//
//_.find(array, ["isBest", true])
//Examples
//var users = [
//  { "user": "barney",  "age": 36, "active": true },
//  { "user": "fred",    "age": 40, "active": false },
//  { "user": "pebbles", "age": 1,  "active": true }
//]
//
//find(users, function(o) { return o.age < 40; }) ➞ object for "barney"
//
//find(users, { "age": 1, "active": true }) ➞ object for "pebbles"
//
//find(users, ["active", false]) ➞ object for "fred"
//
//find(users, "active") ➞ object for "barney"
//Notes
//Do not attempt to import lodash; you are simply writing your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//vehicles = [
//  { make: "toyota", color: "red", engine: "v6", type: "hatchback", year: 2018, mileage: 113312, isUsed: true },
//  { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 123532, isUsed: true },
//  { make: "mazda", color: "grey", engine: "v8", type: "sedan", year: 2021, mileage: 0, isUsed: false },
//  { make: "ford", color: "green", engine: "v8", type: "truck", year: 2008, mileage: 25467, isUsed: true },
//];
//​
//vehiclesAsObject = {
//  stall1: { make: "toyota", color: "red", engine: "v6", type: "hatchback", year: 2018, mileage: 113312, isUsed: true },
//  stall2: { make: "ford", color: "blue", engine: "v4", type: "car", year: 2012, mileage: 123532, isUsed: true },
//  stall3: { make: "mazda", color: "grey", engine: "v8", type: "sedan", year: 2021, mileage: 0, isUsed: false },
//  stall4: { make: "ford", color: "green", engine: "v8", type: "truck", year: 2008, mileage: 25467, isUsed: true },
//};
//​
//Test.assertSimilar(
//  find(vehicles, (d) => d.color === "red"),
//  { make: "toyota", color: "red", engine: "v6", type: "hatchback", year: 2018, mileage: 113312, isUsed: true }
//);
//​
//Test.assertSimilar(
//  find(vehicles, (d) => d.color === "green" && d.year === 2008),
//  { make: "ford", color: "green", engine: "v8", type: "truck", year: 2008, mileage: 25467, isUsed: true }
//);
//​
//Test.assertSimilar(find(vehicles, ["type", "sedan"]), {

