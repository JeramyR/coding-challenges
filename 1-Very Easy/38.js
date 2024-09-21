

//title: Front 3 - Slice Check Repeat Concatenate

//tags: conditions,strings

//url: https://edabit.com/challenge/2tGbjoawAoP5rKGjy

//Description:
//Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.
//Examples
//frontThree("Python") ➞ "PytPytPyt"
//
//frontThree("Cucumber") ➞ "CucCucCuc"
//
//frontThree("bioshock") ➞ "biobiobio"
//Notes
//Don't forget to return the result.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(frontThree('Python'), 'PytPytPyt', 'Simple string#1') 
//Test.assertEquals(frontThree('Chocolate'), 'ChoChoCho', 'Simple strin#2') 
//Test.assertEquals(frontThree('duh'), 'duhduhduh', '3 characters string')  
//Test.assertEquals(frontThree('Sportsmanship'), 'SpoSpoSpo', 'Generic string') 
//Test.assertEquals(frontThree('ab'), 'ababab', '2 characters string')
//Test.assertEquals(frontThree('a'), 'aaa', '1 characters string')  
//Test.assertEquals(frontThree(''), '', 'Empty string')
//​
//// Author : serf

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Extract City Facts

//tags: language_fundamentals,objects,strings

//url: https://edabit.com/challenge/FzDAgSR84zeyRa278

//Description:
//Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
//name
//population
//continent
//The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
//Examples
//cityFacts({
//  name: "Paris",
//  population: "2,140,526",
//  continent: "Europe"
//}) ➞ "Paris has a population of 2,140,526 and is situated in Europe"
//
//cityFacts({
//  name: "Tokyo",
//  population: "13,929,286",
//  continent: "Asia"
//}) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
//Notes
//Don't add a period at the end.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cityFacts({name: 'Manila', population: '1,780,148', continent: 'Asia'}), 'Manila has a population of 1,780,148 and is situated in Asia')
//Test.assertEquals(cityFacts({name: 'Melbourne', population: '4,936,349', continent: 'Australia'}), 'Melbourne has a population of 4,936,349 and is situated in Australia')
//Test.assertEquals(cityFacts({name: 'Kampala', population: '1,507,080', continent: 'Africa'}), 'Kampala has a population of 1,507,080 and is situated in Africa')
//Test.assertEquals(cityFacts({name: 'Buenos Aires', population: '2,891,082', continent: 'South America'}), 'Buenos Aires has a population of 2,891,082 and is situated in South America')
//Test.assertEquals(cityFacts({name: 'Vancouver', population: '631,486', continent: 'North America'}), 'Vancouver has a population of 631,486 and is situated in North America')
//Test.assertEquals(cityFacts({name: 'Berlin', population: '3,748,148', continent: 'Europe'}), 'Berlin has a population of 3,748,148 and is situated in Europe')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return Types

//tags: algorithms,arrays,higher_order_functions,loops,sorting

//url: https://edabit.com/challenge/QWmvQsrSuQRmEN8ne

//Description:
//Create a function that takes an array and returns the types of values (data types) in a new array.
//Examples
//arrayValuesTypes([1, 2, "null", []])
//➞ ["number", "number", "string", "object"]
//
//arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
//➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
//
//arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
//➞ ["number", "string", "string", "object", "object", "boolean", "number"]
//Notes
//Check the Resources tab for help if needed.
//Remember Arrays & Null in JS are treated as object, hence the examples

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(arrayValuesTypes([1, 10]), ['number', 'number']);
//Test.assertSimilar(arrayValuesTypes([["hello" , 1]  , 10]), ['object', 'number']);
//Test.assertSimilar(arrayValuesTypes(["shashwat", 10, 90]), ['string', 'number', 'number']);
//Test.assertSimilar(arrayValuesTypes([[], true]), ['object', 'boolean']);
//Test.assertSimilar(arrayValuesTypes([false, false, "true"]), ['boolean', 'boolean', "string"]);
//Test.assertSimilar(arrayValuesTypes([1, 10]), ['number', 'number']);
//Test.assertSimilar(arrayValuesTypes([undefined, null]), ['undefined', 'object']);
//Test.assertSimilar(arrayValuesTypes([function(){let x =10;}, 10]), ['function', 'number']);
//​
///* 
//  Shashwat Verma twitter/zippytyro
//  10 tests to pass in total
//*/

