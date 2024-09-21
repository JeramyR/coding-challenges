

//title: Converting Objects to Arrays

//tags: arrays,language_fundamentals,objects

//url: https://edabit.com/challenge/pPNAs5PvB3WvnDwDM

//Description:
//Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
//Examples
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
//
//toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
//
//toArray({}) ➞ []
//Notes
//Return an empty array if the object is empty.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(toArray({ a: 1, b: 2 }), [["a", 1], ["b", 2]])
//Test.assertSimilar(toArray({ foo: 33, bar: 45, baz: 67 }), [["foo", 33], ["bar", 45], ["baz", 67]])
//Test.assertSimilar(toArray({ shrimp: 15, tots: 12 }), [["shrimp", 15], ["tots", 12]])
//Test.assertSimilar(toArray({}), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Concatenate Variable Number of Input Arrays

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/Hs4TpDHX57Rqegmgg

//Description:
//Create a function that concatenates n input arrays, where n is variable.
//Examples
//concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
//
//concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
//
//concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
//
//concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
//Notes
//Arrays should be concatenated in order of the arguments.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(concat([1, 2, 3], [4, 5], [6, 7]), [1, 2, 3, 4, 5, 6, 7])
//Test.assertSimilar(concat([1], [2], [3], [4], [5], [6], [7]), [1, 2, 3, 4, 5, 6, 7])
//Test.assertSimilar(concat([1, 2], [3, 4]), [1, 2, 3, 4])
//Test.assertSimilar(concat([4, 4, 4, 4, 4]), [4, 4, 4, 4, 4])
//Test.assertSimilar(concat(['a'], ['b', 'c']), ['a', 'b', 'c'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: All About Anonymous Functions: Adding Suffixes

//tags: closures,higher_order_functions,language_fundamentals

//url: https://edabit.com/challenge/Ra85gzkCTtXrNyCag

//Description:
//Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
//Examples
//add_ly = add_suffix("ly")
//
//add_ly("hopeless") ➞ "hopelessly"
//add_ly("total") ➞ "totally"
//
//add_less = add_suffix("less")
//
//add_less("fear") ➞ "fearless"
//add_less("ruth") ➞ "ruthless"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//add_ly = add_suffix("ly") 
//add_less = add_suffix("less") 
//add_ing = add_suffix("ing") 
//​
//​
//Test.assertEquals(add_ly("hopeless"), "hopelessly")
//Test.assertEquals(add_ly("total"), "totally")
//​
//Test.assertEquals(add_less("fear"), "fearless")
//Test.assertEquals(add_less("ruth"), "ruthless")
//​
//Test.assertEquals(add_ing("cheer"), "cheering")
//Test.assertEquals(add_ing("book"), "booking")

