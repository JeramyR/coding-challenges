

//title: Get Notes Distribution

//tags: arrays,objects

//url: https://edabit.com/challenge/WyEL2YcemhrS4waEE

//Description:
//Create a function that takes an array of students and returns an object representing their notes distribution. Keep in mind that all invalid notes should not be counted in the distribution. Valid notes are: 1, 2, 3, 4, 5
//Example
//getNotesDistribution([
//  {
//    "name": "Steve",
//    "notes": [5, 5, 3, -1, 6]
//  },
//  {
//    "name": "John",
//    "notes": [3, 2, 5, 0, -3]
//  }
//] ➞ {
//  5: 3,
//  3: 2,
//  2: 1
//})
//Notes
//Try doing that with filter + reduce.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const objectsAreEqual = (actual, expected) => Object.keys(expected).every(
//  key => actual[key] === expected[key]
//)
//const areEqual = (actual, expected, compare) => expected.every(
//  (item, index) => compare(actual[index], item)
//)
//const sets = [
//  [['Jacek', [5, 4, 3, -1, 0]], ['Ewa', [3, 3, 3, 6]], ['Zygmunt', [1, 2, 3]]],
//  [['Jacek', []], ['Ewa', []], ['Zygmunt', [6, 1, 2, 3]]],
//  []
//].map(
//  set => ({ 
//    actual: getNotesDistribution(
//      set.map(([name, notes]) => ({ name, notes }))
//    ), 
//    expected: set.map(([,notes]) => notes).reduce((result, next) => result.concat(next), []).filter(
//      note => note > 0 && note < 6
//    ).reduce(
//      (result, next) => {
//        result[next] = (result[next] || 0) + 1
//        return result
//      },
//      {}
//    )
//  })   

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Validating a Set in the Set Game

//tags: games,objects,validation

//url: https://edabit.com/challenge/278bzxEFeTKNiKXfM

//Description:
//In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:
//Have the same color or different colors.
//Have the same number or different numbers.
//Have the same shades or different shades.
//Have the same shape or different shapes.
//The four properties are:
//Colors: red, purple, green
//Numbers: 1, 2, 3
//Shades: empty, lined, full
//Shapes: squiggle, oval, diamond
//Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.
//Here is an example of a set:
//[
//  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//  { color: "red", number: 2, shade: "lined", shape: "diamond" },
//  { color: "red", number: 3, shade: "full", shape: "oval" }
//]
//
//// "Same" properties: color
//// "Different" properties: numbers, shading and shapes
//The following is not a set:
//[
//  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//  { color: "red", number: 2, shade: "lined", shape: "diamond" },
//  { color: "purple", number: 3, shade: "full", shape: "oval" }
//]
//
//// Colors are not all identical, but not all different.
//Examples
//isSet([
//  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
//  { color: "green", number: 2, shade: "empty", shape: "diamond" },
//  { color: "green", number: 3, shade: "empty", shape: "oval" }
//]) ➞ true
//
//isSet([
//  { color: "purple", number: 1, shade: "full", shape: "oval" },
//  { color: "green", number: 1, shade: "full", shape: "oval" },
//  { color: "red", number: 1, shade: "full", shape: "oval" }
//]) ➞ true
//
//isSet([
//  { color: "purple", number: 3, shade: "full", shape: "oval" },
//  { color: "green", number: 1, shade: "full", shape: "oval" },
//  { color: "red", number: 3, shade: "full", shape: "oval" }
//]) ➞ false
//Notes
//A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property.
//You can play Set by checking the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isSet(
//[{color: "red", number: 1, shade: "lined", shape: "squiggle"}, 
//{color: "red", number: 1, shade: "lined", shape: "diamond"}, 
//{color: "red", number: 1, shade: "lined", shape: "squiggle"}]
//), false)
//​
//Test.assertEquals(isSet(
//[{color: "red", number: 1, shade: "lined", shape: "squiggle"}, 
//{color: "red", number: 1, shade: "lined", shape: "diamond"}, 
//{color: "red", number: 1, shade: "lined", shape: "oval"}]
//), true)
//​
//Test.assertEquals(isSet(
//[{color: "red", number: 1, shade: "empty", shape: "squiggle"}, 
//{color: "red", number: 1, shade: "lined", shape: "diamond"}, 
//{color: "red", number: 1, shade: "lined", shape: "oval"}]
//), false)
//​
//Test.assertEquals(isSet(
//[{color: "red", number: 1, shade: "empty", shape: "squiggle"}, 
//{color: "red", number: 2, shade: "lined", shape: "diamond"}, 
//{color: "red", number: 3, shade: "full", shape: "oval"}]
//), true)
//​
//Test.assertEquals(isSet(

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Splitting Objects Inside an Array

//tags: arrays,loops,objects

//url: https://edabit.com/challenge/FrFkH5BPnqz4pYpqD

//Description:
//You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.
//Examples
//splitBunches([
//  { name: "grapes", quantity: 2 }
//]) ➞ [
//  { name: "grapes", quantity: 1 },
//  { name: "grapes", quantity: 1 }
//]
//
//
//splitBunches([
//  { name: "currants", quantity: 1 },
//  { name: "grapes", quantity: 2 },
//  { name: "bananas", quantity: 2 }
//]) ➞ [
//  { name: "currants", quantity: 1},
//  { name: "grapes", quantity: 1 },
//  { name: "grapes", quantity: 1 },
//  { name: "bananas", quantity: 1 },
//  { name: "bananas", quantity: 1 }
//]
//Notes
//The input array will never be empty.
//Objects will always have a name and quantity over 0.
//The returned object should have each fruit in the same order as the original.

//code area
///////////////////////////////////////////////////////////////////////////
// const splitBunches = input => {
//     console.log(input)
// }


//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(splitBunches([{ name: 'bananas', quantity: 1 }]), [{ name: 'bananas', quantity: 1 }])
// Test.assertSimilar(splitBunches([{ name: 'bananas', quantity: 2 }]), [{ name: 'bananas', quantity: 1 }, { name: 'bananas', quantity: 1 }])
//Test.assertSimilar(splitBunches([{ name: 'bananas', quantity: 2 }, { name: 'grapes', quantity: 2 }]), [{ name: 'bananas', quantity: 1 }, { name: 'bananas', quantity: 1 }, { name: 'grapes', quantity: 1 }, { name: 'grapes', quantity: 1 }])
//Test.assertSimilar(splitBunches([{ name: 'cherry tomatoes', quantity: 3}, { name: 'bananas', quantity: 1 }, { name: 'grapes', quantity: 2 }, { name: 'cherry tomatoes', quantity: 3}]), [{ name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}, { name: 'bananas', quantity: 1 }, { name: 'grapes', quantity: 1 }, { name: 'grapes', quantity: 1 }, { name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}, { name: 'cherry tomatoes', quantity: 1}])

