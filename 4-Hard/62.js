

//title: Encoded String Parse

//tags: formatting,objects,sorting,strings

//url: https://edabit.com/challenge/qPK2Cz8LS2rGKYz7h

//Description:
//Create a function which takes in an encoded string and returns an object according to the following example:
//Examples
//parseCode("John000Doe000123") ➞ {
//  firstName: "John",
//  lastName: "Doe",
//  id: "123"
//}
//
//parseCode("michael0smith004331") ➞ {
//  firstName: "michael",
//  lastName: "smith",
//  id: "4331"
//}
//
//parseCode("Thomas00LEE0000043") ➞ {
//  firstName: "Thomas",
//  lastName: "LEE",
//  id: "43"
//}
//Notes
//The string will always be in the same format, first name, last name and id with zeros between them.
//id numbers will not contain any zeros.
//Bonus: Try solving this without RegEx.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(parseCode("John000Doe000123"), {firstName: "John", lastName: "Doe", id: "123"})
//Test.assertSimilar(parseCode("Michael0Smith004331"), {firstName: "Michael", lastName: "Smith", id: "4331"})
//Test.assertSimilar(parseCode("Thomas0000Lee0000045553"), {firstName: "Thomas", lastName: "Lee", id: "45553"})
//Test.assertSimilar(parseCode("a0b01"), {firstName: "a", lastName: "b", id: "1"})

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Shared Letters between Two Strings

//tags: algorithms,conditions,strings

//url: https://edabit.com/challenge/33EsK9mQzGGzRkXQT

//Description:
//Given two strings, return a string containing only the letters shared between the two.
//Examples
//sharedLetters("house", "home") ➞ "eho"
//
//sharedLetters("Micky", "mouse") ➞ "m"
//
//sharedLetters("house", "villa") ➞ ""
//NotessharedLetters
//If none of the letters are shared, return an empty string.
//The function should be case insensitive (e.g. comparing A and a should return a).
//Sort the resulting string alphabetically before returning it.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sharedLetters('house', 'home'), 'eho');
//Test.assertEquals(sharedLetters('Micky', 'mouse'), 'm');
//Test.assertEquals(sharedLetters('house', 'villa'), '');
//Test.assertEquals(sharedLetters('Aa', 'aA'), 'a');
//Test.assertEquals(sharedLetters('https://www.example.com', 'https://www.canada.ca'), './:achpstw');
//Test.assertEquals(sharedLetters('Edabit', 'Matt'), 'at');
//Test.assertEquals(sharedLetters('🙂😀😄😁', '🙂😞😔😣'), '🙂');
//Test.assertEquals(sharedLetters('Javascript', 'Swift'), 'ist');
//Test.assertEquals(sharedLetters('Functional programming', 'Object oriented programming'), ' acgimnoprt');
//Test.assertEquals(sharedLetters('My dog is a GOOD BOY 🐶', 'Do you like ice cream? 🍦'), ' adimoy');

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Unlucky Years

//tags: dates,language_fundamentals

//url: https://edabit.com/challenge/JnbkJAxA3woPFHYMm

//Description:
//Create a function which returns how many Friday 13ths there are in a given year.
//Examples
//howUnlucky(2020) ➞ 2
//
//howUnlucky(2026) ➞ 3
//
//howUnlucky(2016) ➞ 1
//Notes
//Check Resources for some helpful tutorials on the JavaScript Date object.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(howUnlucky(2000), 1)
//Test.assertEquals(howUnlucky(2001), 2)
//Test.assertEquals(howUnlucky(2002), 2)
//Test.assertEquals(howUnlucky(2003), 1)
//Test.assertEquals(howUnlucky(2004), 2)
//Test.assertEquals(howUnlucky(2005), 1)
//Test.assertEquals(howUnlucky(2006), 2)
//Test.assertEquals(howUnlucky(2007), 2)
//Test.assertEquals(howUnlucky(2008), 1)
//Test.assertEquals(howUnlucky(2009), 3)
//Test.assertEquals(howUnlucky(2010), 1)
//Test.assertEquals(howUnlucky(2011), 1)
//Test.assertEquals(howUnlucky(2012), 3)
//Test.assertEquals(howUnlucky(2013), 2)
//Test.assertEquals(howUnlucky(2014), 1)
//Test.assertEquals(howUnlucky(2015), 3)
//Test.assertEquals(howUnlucky(2016), 1)
//Test.assertEquals(howUnlucky(2017), 2)
//Test.assertEquals(howUnlucky(2018), 2)
//Test.assertEquals(howUnlucky(2019), 2)
//Test.assertEquals(howUnlucky(2020), 2)
//Test.assertEquals(howUnlucky(2021), 1)
//Test.assertEquals(howUnlucky(2022), 1)
//Test.assertEquals(howUnlucky(2023), 2)
//Test.assertEquals(howUnlucky(2024), 2)

