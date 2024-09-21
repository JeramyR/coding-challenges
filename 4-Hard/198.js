

//title: N-Length Letter Groups

//tags: arrays,sorting,strings

//url: https://edabit.com/challenge/A8GLfBCjWv6TvpsGr

//Description:
//Write a function that returns an array of strings populated from the slices of n-length characters of the given word (a slice after another while n-length applies onto the word).
//Examples
//collect("intercontinentalisationalism", 6) 
//➞ ["ationa", "interc", "ntalis", "ontine"]
//
//collect("strengths", 3) 
//➞ ["eng", "str", "ths"]
//
//collect("pneumonoultramicroscopicsilicovolcanoconiosis", 15) 
//➞ ["croscopicsilico", "pneumonoultrami", "volcanoconiosis"]
//Notes
//Ensure that the resulting array is lexicographically ordered.
//Return an empty array if the given string is less than n.
//A recursive version of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [strVector, numVector, resVector] = [[
//  "intercontinentalisationalism", "strengths", "pneumonoultramicroscopicsilicovolcanoconiosis",
//  "lexicographically", "anesthesiologists", "subdermatoglyphic", "sesquipedalianism",
//  "recollection", "pseudopseudohypoparathyroidism", "floccinaucinihilipilification",
//  "antidisestablishmentarianism", "supercalifragilisticexpialidocious", "incomprehensibilities",
//  "astrophysicists", "honorificabilitudinitatibus", "unimaginatively", "euouae", "tsktsk",
//  "uncopyrightable" ], [ 6, 3, 15, 4, 6, 6, 6, 3, 7, 2, 5, 3, 9, 4, 12, 8, 7, 6, 11 ], [
//  ["ationa", "interc", "ntalis", "ontine"], ["eng", "str", "ths"],
//  ["croscopicsilico", "pneumonoultrami", "volcanoconiosis"],
//  ["aphi", "call", "cogr", "lexi"], ["anesth", "esiolo"], ["matogl", "subder"],
//  ["pedali", "sesqui"], ["ect", "ion", "oll", "rec"], ["hyroidi", "poparat", "pseudop", "seudohy"],
//  ["at", "ci", "fl", "ic", "if", "ih", "il", "il", "in", "io", "ip", "na", "oc", "uc"],
//  ["ablis", "antid", "arian", "hment", "isest"],
//  ["ali", "ali", "doc", "erc", "fra", "gil", "ice", "iou", "ist", "sup", "xpi"],
//  ["ensibilit", "incompreh"], ["astr", "ophy", "sici"], ["honorificabi", "litudinitati"],
//  ["unimagin"], [], ["tsktsk"], ["uncopyright"]
//]]
//for (let i in strVector) Test.assertSimilar(collect(strVector[i], numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: What`s the Closest Major Event?

//tags: arrays,dates,objects

//url: https://edabit.com/challenge/HmXdhA9WA9uLnsuiB

//Description:
//Given an array of objects containing some of the major historical events and a date object, you should return the name of the historical event that is closest to that date.
//An historical event object contains 2 properties, this is an example:
//{
//  date: '2005-08-23',
//  name: 'Hurricane Katrina'
//}
//⚠️ You can see the full array in the Tests tab.
//Examples
//closestEvent(events, new Date(1990, 0, 1)) ➞ Fall of the Berlin Wall
//
//closestEvent(events, new Date(2005, 0, 1)) ➞ Indian Ocean Earthquake and Tsunami Disaster
//
//closestEvent(events, new Date()) ➞ Fukushima Nuclear Disaster
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// The events array
//const events = [
//  { date: '2005-08-23', name: 'Hurricane Katrina' },
//  { date: '2004-12-26', name: 'Indian Ocean Earthquake and Tsunami Disaster' },
//  { date: '1989-11-09', name: 'Fall of the Berlin Wall' },
//  { date: '2009-01-15', name: 'Hudson River Plane Crash' },
//  { date: '1986-01-28', name: 'Challenger Spacecraft Explodes' },
//  { date: '2001-09-11', name: 'September 11 Attacks' },
//  { date: '1986-04-26', name: 'Chernobyl Nuclear Disaster' },
//  { date: '2011-03-16', name: 'Fukushima Nuclear Disaster' }
//];
//​
//// Tests
//Test.assertEquals(closestEvent(events, new Date(1970, 0, 1)),  'Challenger Spacecraft Explodes');
//Test.assertEquals(closestEvent(events, new Date(1986, 2, 13)), 'Challenger Spacecraft Explodes');
//Test.assertEquals(closestEvent(events, new Date(1986, 2, 14)), 'Chernobyl Nuclear Disaster');
//Test.assertEquals(closestEvent(events, new Date(1990, 0, 1)),  'Fall of the Berlin Wall');
//Test.assertEquals(closestEvent(events, new Date(1995, 9, 11)), 'Fall of the Berlin Wall');
//Test.assertEquals(closestEvent(events, new Date(1995, 9, 12)), 'September 11 Attacks');
//Test.assertEquals(closestEvent(events, new Date(2005, 0, 1)),  'Indian Ocean Earthquake and Tsunami Disaster');
//Test.assertEquals(closestEvent(events, new Date(2006, 5, 16)), 'Hurricane Katrina');
//Test.assertEquals(closestEvent(events, new Date(2007, 4, 12)), 'Hudson River Plane Crash');
//Test.assertEquals(closestEvent(events, new Date()),            'Fukushima Nuclear Disaster');

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Shared vs. Unique Letters

//tags: arrays,strings

//url: https://edabit.com/challenge/64JH2CWhLNkbzfRYW

//Description:
//Create a function that takes in two words as input and returns an array of three elements, in the following order:
//Shared letters between two words.
//Letters unique to word 1.
//Letters unique to word 2.
//Each element should have unique letters, and have each letter be alphabetically sorted.
//Examples
//letters("sharp", "soap") ➞ ["aps", "hr", "o"]
//
//letters("board", "bored") ➞ ["bdor", "a", "e"]
//
//letters("happiness", "envelope") ➞ ["enp", "ahis", "lov"]
//
//letters("kerfuffle", "fluffy") ➞ ["flu", "ekr", "y"]
//// Even with multiple matching letters (e.g. 3 f's), there should 
//// only exist a single "f" in your first element.
//
//letters("match", "ham") ➞ ["ahm", "ct", ""]
//// "ham" does not contain any letters that are not found already 
//// in "match".
//Notes
//Both words will be in lower case.
//You do not have to worry about punctuation, all words only have letters from [a-z].
//If an element contains no letters, return an empty string (see last example).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(letters("sharp", "soap"), ["aps", "hr", "o"])
//Test.assertSimilar(letters("board", "bored"), ["bdor", "a", "e"])
//Test.assertSimilar(letters("happiness", "envelope"), ["enp", "ahis", "lov"])
//Test.assertSimilar(letters("match", "ham"), ["ahm", "ct", ""])
//Test.assertSimilar(letters("kerfuffle", "fluffy"), ["flu", "ekr", "y"])

