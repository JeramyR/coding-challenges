

//title: Chain Reaction (Part #3)

//tags: arrays,games

//url: https://edabit.com/challenge/u9256ZwPXbg8Aj5Wp

//Description:
//This is a direct sequel to Chain Reaction (Part #2), which was an easier particular case of this challenge (my suggestion is to try that one first).
//As in the previous part, you will be given a rectangular array representing a "map" with three types of spaces:
//"+" bombs: when activated, their explosion activates any bombs directly above, below, left, or right of the "+" bomb.
//"x" bombs: when activated, their explosion activates any bombs placed in any of the four diagonal directions next to the "x" bomb.
//Empty spaces "0".
//The goal is simple: given a map, return the minimum number of bombs that need to be set off for all bombs to be destroyed by the chain reaction.
//Let's look at some examples:
//[["+", "x"]]
//For the map above, the answer is 1: to explode both bombs one can pick the '+' bomb. However, note that picking the 'x' bomb does not work.
//[
//  ["+", "0", "x"],
//  ["x", "x", "x"]
//]
//For the map above, the answer is 2: one can either pick the two 'x' bombs on the right column or the center and right 'x' bombs in the bottom row. No other choice will work.
//[
//  ["x", "x", "x"],
//  ["x", "+", "x"],
//  ["x", "x", "x"]
//]
//For the map above, the answer is 4: pick the four 'x' bombs in the corners. No other choice works.
//[
//  ["x", "x", "+"],
//  ["+", "0", "+"],
//  ["+", "x", "x"]
//]
//For the map above, the answer is 1: any bomb other than the "x" bombs in the top left and bottom right will work.
//Examples
//minBombsNeeded([
//  ["+", "x"]
//]) ➞ 1
//
//minBombsNeeded([
//  ["+", "0", "x"],
//  ["x", "x", "x"]
//]) ➞ 2
//
//minBombsNeeded([
//  ["x", "x", "x"],
//  ["x", "+", "x"],
//  ["x", "x", "x"]
//]) ➞ 4
//
//minBombsNeeded([
//  ["x", "x", "+"],
//  ["+", "0", "+"],
//  ["+", "x", "x"]
//]) ➞ 1
//Notes
//Note that both "+" and "x" bombs have an "explosion range" of 1.
//Many strategies that worked for part #2 will fail in this one.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(minBombsNeeded([['+', 'x']]), 1)
//Test.assertEquals(minBombsNeeded([['x', '+']]), 1)
//Test.assertEquals(minBombsNeeded([['+', 'x', '+']]), 2)
//Test.assertEquals(minBombsNeeded([['x', '+', 'x']]), 1)
//​
//Test.assertEquals(minBombsNeeded(
//[['+', 'x'],
// ['x', 'x']])
//, 1)
//​
//Test.assertEquals(minBombsNeeded(
//[['x', 'x'],
// ['x', 'x']])
//, 2)
//​
//Test.assertEquals(minBombsNeeded(
//[['+', 'x'],
// ['x', '+']])
//, 2)
//​
//Test.assertEquals(minBombsNeeded(
//[['x', '+'],
// ['+', 'x']])
//, 2)
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Integer Division

//tags: numbers,recursion

//url: https://edabit.com/challenge/LgtPsasXbKQ9K46FN

//Description:
//Create a function that returns the integral part from the result of a division between two numbers. This process of division can be achieved via repetitive subtraction, thus, it can be done recursively.
//Examples
//divide(10, 2) ➞ 5
//
//divide(-51, -4) ➞ 12
//
//divide(3, 9) ➞ 0
//
//divide(-21, 5) ➞ -4
//
//divide(1024, 7) ➞ 146
//
//divide(273, -6) ➞ -45
//Notes
//There will be no zero-values for the divisor.
//You're expected to solve this challenge using a recursive approach.
//You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge.
//If you think recursion is fun, you can find a collection of those challenges here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertEquals(recursive(divide), true)
//Test.assertNotEquals(recursive(divide), false, "Recursion is required!")
//​
//let [numVector, resVector] = [[
//  [10, 2], [-51, -4], [3, 9], [-21, 5], [1024, 7], [273, -6], [0, 4]],
//  [5, 12, 0, -4, 146, -45, 0]]
//for (let i in numVector) Test.assertEquals(divide(...numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sticky Keys Typing

//tags: conditions,logic,strings,validation

//url: https://edabit.com/challenge/Xh5eFAn7tKQtDiwnB

//Description:
//Someone is typing on the sticky keyboard. Occasionally a key gets stuck and more than intended number of characters of a particular letter is being added into the string. The function input contains original and typed strings. Determine if the typed string has been made from the original. Return true if it is and false if the typed string cannot have been made from the original.
//Examples
//isLongPressed("alex", "aaleex") ➞ true
//
//isLongPressed("saeed", "ssaaedd") ➞ false
//
//isLongPressed("leelee", "lleeelee") ➞ true
//
//isLongPressed("Tokyo", "TTokkyoh") ➞ false
//
//isLongPressed("laiden", "laiden") ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isLongPressed("alex", "aaleex"), true)
//Test.assertEquals(isLongPressed("saeed", "ssaaedd"), false)
//Test.assertEquals(isLongPressed("leelee", "lleeelee"), true)
//Test.assertEquals(isLongPressed("Tokyo", "TTokkyoh"), false)
//Test.assertEquals(isLongPressed("laiden", "laiden"), true)
//Test.assertEquals(isLongPressed("He rose to prominence following his starring role as Michael Scofield in the Fox series Prison Break", "Hee rose to prominence following his starring role as Michael Scofield in  the Foxx series Prisons Break"), false)
//Test.assertEquals(isLongPressed("Posts identified as harmful by the algorithm can be referred to human moderators, who choose whether to take further action", "Possts identifiedd ass harmmmmful byy the algorithhm caaaan be referrrrred to human mmmoderators,, wwhoo chooose whettheer too take furrther actiiionn"), true)
//Test.assertEquals(isLongPressed("Manufacturers spend huge sums developing their latest four-wheeled fantasies, laden with up-to-the-minute electronic gizmos, which apparently will do everything for you except brush your teeth.", "Manufacturers spend huge sums developing their latest ffour-wheeled fantasies, ladeen with up--to-the--minute electronic gizmos, whiich apparently willl ddo everything for you exept brush your teeth.."), false)
//Test.assertEquals(isLongPressed("Four years ago, Volkswagen was a very different company.", "Four years ago Volkswagen waas a veery differentt company."), false)
//Test.assertEquals(isLongPressed("She threw his clothes out the window.", "Shhe ttttthrew hiis ccclothes   ouut thee winnndowww."), true)

