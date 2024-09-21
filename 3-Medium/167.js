

//title: ES6: Destructuring Objects VII

//tags: bugs,formatting,language_fundamentals,objects

//url: https://edabit.com/challenge/5cahgiMrJ6M52XbNa

//Description:
//In normal object literals you can create dynamic property names by using computed values:
//let key = "name"
//let foo = {[key]: "bar"}
//
//console.log(foo.name); // "bar"
//However, in object destructuring it works a little different:
//let key = "foo"
//let {[key]: "foo"} = {foo: "Jessie"}
//
//console.log(foo)  // Invalid destructuring assignment target
//The error above is caused by the literal string "foo". You cannot rename variables this way. You can read the MDN Docs Computed object property names and destructuring section to find the correct way.
//Fix the function so console.log(foo) returns Jessie. Leave all variable names unchanged. Ignore the .toString() function (used for validation).
//Example
//console.log(foo) ➞ "Jessie"
//Notes
//If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//eval(str)
//​
//function testStructure() {
//  return  /\{.*\[.*key.*\].*\:.*(?!\")foo/.test(str) ? "valid" : "not valid"  
//}  
//​
//console.log("console.log(foo) outputs " + foo)
//​
//Test.assertEquals(testStructure(), "valid", "Assigning foo outside the template string is not allowed.")
//Test.assertEquals(foo, "Jessie")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Subset Validation

//tags: higher_order_functions,validation

//url: https://edabit.com/challenge/4LA4kWtJGXpG3SJhA

//Description:
//Write a function that returns true if all subsets in a list belong to a given set.
//Examples
//validateSubsets([[1, 2], [2, 3], [1, 3]], [1, 2, 3]) ➞ true
//
//validateSubsets([[1, 2, 3], [2], [3], []], [1, 2, 3]) ➞ true
//
//validateSubsets([[1, 2], [2, 3], [1, 4]], [1, 2, 3]) ➞ false
//
//validateSubsets([[1, 2, 3, 4]], [1, 2, 3]) ➞ false
//Notes
//The empty set and the set itself are both valid subsets of a set (we are not talking about proper subsets here).
//The set and the subset will each have unique elements.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(validateSubsets([[1, 2], [2, 3], [1, 3]], [1, 2, 3]), true)
//Test.assertEquals(validateSubsets([[1, 2, 3], [2], [3], []], [1, 2, 3]), true)
//Test.assertEquals(validateSubsets([[1, 2], [2, 3], [1, 4]], [1, 2, 3]), false)
//Test.assertEquals(validateSubsets([[1, 2, 3, 4]], [1, 2, 3]), false)
//Test.assertEquals(validateSubsets([['a', 'b'], ['b', 'c'], ['a', 'c']], ['a', 'b', 'c']), true)
//Test.assertEquals(validateSubsets([['a', 'b', 'c'], ['b'], ['c'], []], ['a', 'b', 'c']), true)
//Test.assertEquals(validateSubsets([['a', 'b'], ['b', 'c'], ['a', 'd']], ['a', 'b', 'c']), false)
//Test.assertEquals(validateSubsets([['a', 'b', 'c', 'd']], ['a', 'b', 'c']), false)
//Test.assertEquals(validateSubsets([[true, false], [true]], [true, false]), true)
//Test.assertEquals(validateSubsets([[true], [false], []], [true, false]), true)
//Test.assertEquals(validateSubsets([[true], [true, false]], [true]), false)
//Test.assertEquals(validateSubsets([[false]], [true]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Chemical Reactions

//tags: conditions,logic,math,numbers

//url: https://edabit.com/challenge/BoNtunu5X2q2iSHrs

//Description:
//Mubashir was testing how atoms can react in their ionic state during nuclear fusion. He observed that atoms can introduce different elements with Hydrogen at high temperatures and inside a pressurized chamber. During his experiment, elements started precipitating inside the chamber. Help him find the total number of molecules of Water H2O, Carbon Dioxide CO2 and Methane CH4 generated during this process.
//Given the number of atoms of carbon, hydrogen and oxygen, calculate the molecules in the following order:
//1. Hydrogen reacts with Oxygen = H2O
//2. Carbon reacts with Oxygen   = CO2
//3. Carbon reacts with Hydrogen = CH4
//Examples
//chemicalReactions(45, 11, 100) ➞ [5, 45, 0]
//// 10 atoms of hydrogen + 5 atoms of oxygen = 5 molecules of H2O
//// 45 atoms of carbon + 90 atoms of oxygen = 45 molecules of CO2
//// 1 hydrogen atom + 0 carbon atoms = 0 molecules of CH4
//
//chemicalReactions(113, 0, 52) ➞ [0, 26, 0]
//
//chemicalReactions(939, 3, 694) ➞ [1, 346, 0]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(chemicalReactions(45, 11, 100), [5, 45, 0])
//Test.assertSimilar(chemicalReactions(354, 1023230, 0), [0, 0, 354])
//Test.assertSimilar(chemicalReactions(939, 3, 694), [1, 346, 0])
//Test.assertSimilar(chemicalReactions(215, 41, 82100), [20, 215, 0])
//Test.assertSimilar(chemicalReactions(113, 0, 52), [0, 26, 0])

