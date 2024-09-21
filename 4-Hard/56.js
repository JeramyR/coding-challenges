

//title: Spaces Apart

//tags: arrays,conditions

//url: https://edabit.com/challenge/e7zybZvYMof9YhDat

//Description:
//Create a function that takes an arr and returns the sum of the numbers between two "1"s.
//Examples
//spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]) ➞ 14
//
//spaceApart(["1", 9, 20, 38, "1"]) ➞ 67
//
//spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]) ➞ "invalid"
//Notes
//Return "invalid" if:
//A negative number exists inside arr.
//The number of "1"s does not equal 2.
//Ignore any other string inside arr.
//Note that "1" is not 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(spaceApart([1, 0, 1, "1", 4, 3, 2, 3, 2, "1"]), 14)
//Test.assertEquals(spaceApart(["1", 9, 20, 38, "1"]), 67)
//Test.assertEquals(spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]), "invalid")
//Test.assertEquals(spaceApart(["1"]), "invalid")
//Test.assertEquals(spaceApart([4, 3, "1", "2", 4, "1", "2", "9"]), 4)
//Test.assertEquals(spaceApart(["1", -593, 1, "1", 4, 3, 2, 33, 2]), "invalid")
//Test.assertEquals(spaceApart(["2", "a", 1, "1", 1, 3, 49, "1"]), 53)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Oddly or Evenly Positioned

//tags: arrays,functional_programming,validation

//url: https://edabit.com/challenge/fWkrdJb6EJrHsP7Sm

//Description:
//Create a function that returns the characters from an array or string r on odd or even positions, depending on the specifier s. The specifier will be "odd" for items on odd positions (1, 3, 5, ...) and "even" for items on even positions (2, 4, 6, ...).
//Examples
//charAtPos([2, 4, 6, 8, 10], "even") ➞ [4, 8]
//// 4 & 8 occupy the 2nd & 4th positions
//
//charAtPos("EDABIT", "odd") ➞ "EAI"
//// "E", "A" and "I" occupy the 1st, 3rd and 5th positions
//
//charAtPos(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "odd") ➞ ["A", "B", "T", "A", "I", "Y"]
//Notes
//Arrays are zero-indexed, so, index+1 = position or position-1 = index.
//There will not be an empty string or an empty array.
//A slightly different version of this challenge can be found here.
//A recursive version of this challenge can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(charAtPos([2,4,6,8,10],"even"), [4,8])
//Test.assertSimilar(charAtPos([1,2,3,4,5,6,7,8,9,10],"odd"), [1,3,5,7,9])
//Test.assertEquals(charAtPos("EDABIT","even"), "DBT")
//Test.assertEquals(charAtPos("EDABIT","odd"),  "EAI")
//Test.assertEquals(charAtPos("QWERTYUIOP","even"), "WRYIP")
//Test.assertEquals(charAtPos("POIUYTREWQ","odd"), "PIYRW")
//Test.assertEquals(charAtPos("ASDFGHJKLZ","odd"), "ADGJL")
//Test.assertEquals(charAtPos("ASDFGHJKLZ","even"), "SFHKZ")
//Test.assertSimilar(charAtPos(["!","@","#","$","%","^","&","*","(",")"],"odd"), ["!","#","%","&","("])
//Test.assertSimilar(charAtPos([")","(","*","&","^","%","$","#","@","!"],"odd"), [")","*","^","$","@"])
//Test.assertSimilar(charAtPos(["A","R","B","I","T","R","A","R","I","L","Y"],"odd"), ["A","B","T","A","I","Y"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Learn Lodash: _.dropWhile, Drop Item From Array Until Condition Is Met

//tags: arrays,objects

//url: https://edabit.com/challenge/HwLxxuwRqntMN3pm4

//Description:
//According to the lodash documentation, _.dropwWhile Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until the predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
//This is different than filter because it checks each item until the condition is met, like filtering until it finds a match, and then stops running the check and returns the rest of the array even if there are items in it that further down might meet the condition.
//Arguments
//array (Array): The array to check.
//predicate: A function that will be run on each iteration.
//Real World Example
//You work in a car dealership. A man comes and says he doesn't believe that electric vehicles exist. You intend to prove him wrong. You go to the lot and check the first vehicle. It takes gas... the guy is getting cocky so you check the second vehicle and it also takes gas. Finally, you check the third vehicle and it is electric.
//You've dropped the first two items while they are not electric, even though there may be gas vehicles further down the line you have proven your point and in this case, would return the list of remaining vehicles.
//Examples
//var users = [
//  { "user": "barney",  "active": false },
//  { "user": "fred",    "active": false },
//  { "user": "pebbles", "active": true }
//]
//
//dropWhile(users, function(o) { return !o.active; })
// ➞ [{ "user": "pebbles", "active": true }]
//Notes
//Do not attempt to import lodash; you are simply writing your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const users = [
//  { user: "barney", active: false },
//  { user: "fred", active: false },
//  { user: "donny", active: true },
//  { user: "carl", active: false },
//  { user: "linda", active: false },
//  { user: "luke", active: false },
//  { user: "Steve", active: false },
//  { user: "Lyle", active: false },
//  { user: "pebbles", active: true },
//];
//​
//Test.assertSimilar(
//  dropWhile(users, function (o) {
//    return !o.active;
//  }),
//  [
//    {
//      user: "donny",
//      active: true,
//    },
//    {
//      user: "carl",
//      active: false,
//    },

