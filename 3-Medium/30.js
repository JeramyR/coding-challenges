

//title: H4ck3r Sp34k

//tags: arrays,conditions,control_flow,functional_programming

//url: https://edabit.com/challenge/cada8J3AWGRhwQhkk

//Description:
//Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
//Examples
//hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
//
//hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
//
//hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
//Notes
//In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hackerSpeak("javascript is cool"), "j4v45cr1pt 15 c00l")
//Test.assertEquals(hackerSpeak("become a coder"), "b3c0m3 4 c0d3r")
//Test.assertEquals(hackerSpeak("hi there"), "h1 th3r3")
//Test.assertEquals(hackerSpeak("programming is fun"), "pr0gr4mm1ng 15 fun")
//Test.assertEquals(hackerSpeak("keep on practicing"), "k33p 0n pr4ct1c1ng")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Capitalize the Names

//tags: arrays,formatting,loops

//url: https://edabit.com/challenge/ZN5cpGPNRS3nrjMo5

//Description:
//Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
//Examples
//capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]
//
//capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
//
//capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
//Notes
//Don't change the order of the original array.
//Notice in the second example above, "MABELLE" is returned as "Mabelle".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(capMe(['mavis', 'senaida', 'letty']), ['Mavis', 'Senaida', 'Letty'])
//Test.assertSimilar(capMe(['samuel', 'MABELLE', 'letitia', 'meridith']), ['Samuel', 'Mabelle', 'Letitia', 'Meridith'])
//Test.assertSimilar(capMe(['Slyvia', 'Kristal', 'Sharilyn', 'Calista']), ['Slyvia', 'Kristal', 'Sharilyn', 'Calista'])
//Test.assertSimilar(capMe(['krisTopher', 'olIva', 'herminiA']), ['Kristopher', 'Oliva', 'Herminia'])
//Test.assertSimilar(capMe(['luke', 'marsha', 'stanford']), ['Luke', 'Marsha', 'Stanford'])
//Test.assertSimilar(capMe(['kara']), ['Kara'])
//Test.assertSimilar(capMe(['mARIANN', 'jOI', 'gEORGEANN']), ['Mariann', 'Joi', 'Georgeann'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Characters Counterpart Char Code

//tags: formatting,strings

//url: https://edabit.com/challenge/fbaLZPNjTvYtY444B

//Description:
//Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.
//Examples
//Given that:
//  - "A" char code is: 65
//  - "a" char code is: 97
//
//counterpartCharCode("A") ➞ 97
//
//counterpartCharCode("a") ➞ 65
//Notes
//The argument will always be a single character.
//Not all inputs will have a counterpart (e.g. numbers), in which case return the input's char code.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Normal letters
//Test.assertEquals(counterpartCharCode('a'), 65)
//Test.assertEquals(counterpartCharCode('A'), 97)
//Test.assertEquals(counterpartCharCode('l'), 76)
//Test.assertEquals(counterpartCharCode('L'), 108)
//Test.assertEquals(counterpartCharCode('z'), 90)
//Test.assertEquals(counterpartCharCode('Z'), 122)
//​
//// Accented / weird letters
//Test.assertEquals(counterpartCharCode('è'), 200)
//Test.assertEquals(counterpartCharCode('È'), 232)
//Test.assertEquals(counterpartCharCode('Œ'), 339)
//Test.assertEquals(counterpartCharCode('œ'), 338)
//Test.assertEquals(counterpartCharCode('Ⱥ'), 11365)
//Test.assertEquals(counterpartCharCode('ⱥ'), 570)
//​
//// These don't have a counterpart, you should return the input's char code
//Test.assertEquals(counterpartCharCode('5'), 53)
//Test.assertEquals(counterpartCharCode('$'), 36)

