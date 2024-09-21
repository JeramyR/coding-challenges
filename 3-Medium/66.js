

//title: Clear the Fog

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/cHNEFGeQrH3nonwJw

//Description:
//Create a function which returns the word in the string, but with all the fog letters removed. However, if the string is clear from fog, return "It's a clear day!".
//Examples
//clearFog("sky") ➞ "It's a clear day!"
//
//clearFog("fogfogFFfoooofftogffreogffesGgfOogfog") ➞ "trees"
//
//clearFog("fogFogFogffoObirdsanffodthebffoeffoesGGGfOgFog") ➞ "birdsandthebees"
//Notes
//Hidden words won't include the letters f, o or g.
//Hidden words are always in lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(clearFog("fogfogfffoooofftreesggfoogfog"), "trees")
//Test.assertEquals(clearFog("foooffFGGGGofoogfosgfogfkygfogfogfoooggg"), "sky")
//Test.assertEquals(clearFog("ffogfogoggofobirdsandthebeesfOGgoffog"), "birdsandthebees")
//Test.assertEquals(clearFog("fogfoofgfogfgplgfogfanefogofgoffgo"), "plane")
//Test.assertEquals(clearFog("fogofogoofgfffogthesgofogooagofogoourfoousfogfogfogfgofg"), "thesaurus")
//Test.assertEquals(clearFog("fogfgofofsunfogfgoogfogofgff"), "sun")
//Test.assertEquals(clearFog("city"), "It's a clear day!")
//Test.assertEquals(clearFog("distance"), "It's a clear day!")
//Test.assertEquals(clearFog("fogfogFFfoooofftogffreogffesGgfOogfog"), "trees")
//Test.assertEquals(clearFog("fogFogFogffoObirdsanffodthebFfoeffoesGGGfOgFog"), "birdsandthebees")
//Test.assertEquals(clearFog("fogfooGooggploffanoffefogoffoffgo"), "plane")
//Test.assertEquals(clearFog("tfroege"), "tree", "The word 'fog' doesn't need to be intact")
//​
//// made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Million Dollar Fence

//tags: numbers,strings

//url: https://edabit.com/challenge/kKcEHvyJemCPKkjPZ

//Description:
//Your task is to create a fence worth $1 million. You are given the price of the material (per character), meaning the length of the fence will change depending on the cost of the material.
//Create a function which constructs this pricey pricey fence, using the letter "H" to build.
//constructFence("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
//// 20 fence posts were set up ($1,000,000 / $50,000 = 20)
//Examples
//constructFence("$50,000") ➞ "HHHHHHHHHHHHHHHHHHHHHHHHHHHH"
//
//constructFence("$100,000") ➞ "HHHHHHHHHH"
//
//constructFence("$1,000,000") ➞ "H"
//Notes
//You are ordered to spend all of your $1,000,000 budget...

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(constructFence("$50,000"), "HHHHHHHHHHHHHHHHHHHH")
//Test.assertEquals(constructFence("$100,000"), "HHHHHHHHHH")
//Test.assertEquals(constructFence("$1,000,000"), "H")
//Test.assertEquals(constructFence("$500,000"), "HH")
//Test.assertEquals(constructFence("$20,000"), "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
//Test.assertEquals(constructFence("$10,000"), "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
//Test.assertEquals(constructFence("$5000"), "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
//Test.assertEquals(constructFence("$1000"), "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
//​
//// Made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ES6: Destructuring Objects X

//tags: formatting,language_fundamentals,objects

//url: https://edabit.com/challenge/sWzEwh5cXaAY7yEoo

//Description:
//Given an array of user objects.
//let names = []
//
//let users = [
//  { name: "John", email: "john@example.com" },
//  { name: "Jason", email: "jason@example.com" },
//  { name: "Jeremy", email: "jeremy@example.com" },
//  { name: "Jacob", email: "jacob@example.com" }
//]
//
//for(/* add code inside these parenthesis only */) {
//      names.push(name)
//}
//
//console.log(names) // should log ["John", "Jason", "Jeremy", "Jacob"]
//Push the first names of all users in the names array.
//Notes
//You only have to change the "for...of" loop parameters.
//Ignore the const str assignment. This is only used for validation purposes.
//Check the MDN docs to find out more about object destructuring in "for...of" loops (check the Resources tab).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//eval(str)
//​
//function validation() {
//  return /for.*\{.*[a-zA-Z]+.*\}/.test(str) ? "valid" : "not valid" 
//}
//​
//Test.assertEquals(validation(), "valid", "You must use object destructuring inside the for..of parameters ")
//Test.assertSimilar(names, ['John', 'Jason', 'Jeremy', 'Jacob'])

