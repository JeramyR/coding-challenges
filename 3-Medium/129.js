

//title: RegEx: Character Classes X ⁠- \s

//tags: formatting,regex

//url: https://edabit.com/challenge/B4kaykgTDQxdi32FW

//Description:
//You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
//Here are a list of the characters classes in JavaScript:
//., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
//Given the below string, write a regex that will find all open compound words starting with the word best and the second word begins with the letter b.
//"best buy best car best friend best-boy bestguest best dressed best bet best man best deal best boyfriend"
//Notes
//Open compound words are words with spaces in them.
//Check the Resources tab for details on character classes if you're stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const str = "best buy best car best friend best-boy bestguest best dressed best bet best man best deal best boyfriend"
//​
//const validate = (REGEXP) => {
//   if(!/\\s/.test(String(REGEXP))) return () => "required"
//   return function testReg(str) {
//     return str.match(REGEXP)
//   }
//}
//​
//const testExp = validate(REGEXP)
//​
//Test.assertNotEquals(testExp(str), "required", "You are required to use a \\s character class in your expression.")
//Test.assertSimilar(testExp(str), ['best buy', 'best bet', 'best boyfriend'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Grab the City

//tags: regex,strings

//url: https://edabit.com/challenge/D47BAo44DZKqnLg5M

//Description:
//Write a function to return the city from each of these vacation spots.
//Examples
//grabCity("[Last Day!] Beer Festival [Munich]") ➞ "Munich"
//
//grabCity("Cheese Factory Tour [Portland]") ➞ "Portland"
//
//grabCity("[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]") ➞ "Kyoto"
//Notes
//There may be additional brackets, but the city will always be in the last bracket pair.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(grabCity("[Last Day!] Beer Festival [Munich]"), "Munich")
//Test.assertEquals(grabCity("Cheese Factory Tour [Portland]"), "Portland")
//Test.assertEquals(grabCity("[Duration: 7 hours] Tour of the Maritimes [Prince Edward Island]"), "Prince Edward Island")
//Test.assertEquals(grabCity("[5 Stars] Traditional Gondola Experience [Venice]"), "Venice")
//Test.assertEquals(grabCity("[Last Minute Deal][$1039] Machu Picchu 3 Day Trip [Machu Picchu]"), "Machu Picchu")
//Test.assertEquals(grabCity("[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]"), "Kyoto")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: An Absolute

//tags: conditions,formatting,regex,strings

//url: https://edabit.com/challenge/hK7At2a9sc4nGhwBL

//Description:
//Given a sentence, create a function that replaces every "a" as an article with "an absolute". It should return the same string without any change if it doesn't have any "a".
//Examples
//absolute("I am a champion!!!") ➞ "I am an absolute champion!!!"
//
//absolute("Such an amazing bowler.") ➞ "Such an amazing bowler."
//
//absolute("A man with no haters.") ➞ "An absolute man with no haters."
//Notes
//Watch for uppercase letters as shown in example #3.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(absolute("I am a champion!!!"), "I am an absolute champion!!!")
//Test.assertEquals(absolute("Such an amazing bowler."), "Such an amazing bowler.")
//Test.assertEquals(absolute("A hero of the leaf"), "An absolute hero of the leaf")
//Test.assertEquals(absolute("That place is such a beauty"), "That place is such an absolute beauty")
//Test.assertEquals(absolute("A man with no haters."), "An absolute man with no haters.")

