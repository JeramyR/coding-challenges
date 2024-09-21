

//title: Building up a Word

//tags: arrays,strings,validation

//url: https://edabit.com/challenge/P7SoyRXhQrhdZTFak

//Description:
//You are given an input array of strings, ordered by ascending length.
//Write a function that returns true if, for each pair of consecutive strings, the second string can be formed from the first by adding a single letter either at the beginning or end.
//Examples
//canBuild(["a", "at", "ate", "late", "plate", "plates"]) ➞ true
//
//canBuild(["a", "at", "ate", "late", "plate", "plater", "platter"]) ➞ false
//// "platter" is formed by adding "t" in the middle of "plater"
//
//canBuild(["it", "bit", "bite", "biters"]) ➞ false
//// "biters" is formed by adding two letters - we can only add one
//
//canBuild(["mean", "meany"]) ➞ true
//Notes
//Return false if a word is NOT formed by adding only one letter.
//Return false if the letter is added to the middle of the previous word.
//Letters in tests will all be lower case.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canBuild(['a', 'at', 'ate', 'late', 'plate', 'plates']), true)
//Test.assertEquals(canBuild(['u', 'ut', 'but', 'butt', 'butte', 'butter', 'buttery']), true)
//Test.assertEquals(canBuild(['a', 'ka', 'ika', 'pika', 'pikac', 'pikach', 'pikachu']), true)
//Test.assertEquals(canBuild(['a', 'at', 'tat', 'stat', 'state', 'estate', 'estates']), true)
//Test.assertEquals(canBuild(['o', 'ol', 'old', 'bold', 'bolde', 'mbolde', 'embolde', 'embolden']), true)
//Test.assertEquals(canBuild(['mean', 'meany']), true)
//Test.assertEquals(canBuild(['at', 'cat', 'cate', 'cater', 'caters']), true)
//Test.assertEquals(canBuild(['a', 'at', 'ate', 'late', 'plate', 'plater', 'platter']), false)
//Test.assertEquals(canBuild(['i', 'it', 'bit', 'bite', 'biters']), false)
//Test.assertEquals(canBuild(['e', 'tea', 'teac', 'teach', 'teache', 'teacher', 'teachers']), false)
//Test.assertEquals(canBuild(['m', 'ma', 'man', 'many', 'meany']), false)
//Test.assertEquals(canBuild(['o', 'op', 'top', 'stop', 'stops', 'stoops']), false)
//Test.assertEquals(canBuild(['air', 'air', 'airy', 'fairy']), false)
//Test.assertEquals(canBuild(['men', 'mean', 'meany']), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort Names According to the Length of Their Last Names

//tags: algorithms,control_flow,sorting,strings

//url: https://edabit.com/challenge/PcSNdgbfiDf9JYJjz

//Description:
//Create a function that takes an array of names in the format "First Name Last Name" (e.g. "John Doe"), and returns an array of these names sorted by the length of their last names. If the length of multiple last names are the same, then proceed to sort alphabetically by last name.
//Examples
//lastNameLensort([
//  "Jennifer Figueroa",
//  "Heather Mcgee",
//  "Amanda Schwartz",
//  "Nicole Yoder",
//  "Melissa Hoffman"
//]) ➞ ["Heather Mcgee", "Nicole Yoder", "Melissa Hoffman", "Jennifer Figueroa", "Amanda Schwartz"]
//Notes
//If last names are of the same length, sort alphabetically by last name.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(lastNameLensort(["Jennifer Figueroa","Heather Mcgee","Amanda Schwartz","Nicole Yoder","Melissa Hoffman"]), ['Heather Mcgee', 'Nicole Yoder', 'Melissa Hoffman', 'Jennifer Figueroa', 'Amanda Schwartz'])
//Test.assertSimilar(lastNameLensort(["Hitagi Senjougahara","Edward Elric","Light Yagami","Rintaro Okabe","Kurisu Makise"]), ["Edward Elric","Rintaro Okabe","Kurisu Makise","Light Yagami","Hitagi Senjougahara"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Magic Sigil Generator

//tags: formatting,loops,regex,strings

//url: https://edabit.com/challenge/kqup45hRWqWQ7LqDm

//Description:
//A magic sigil is a glyph which represents a desire one wishes to manifest in their lives. There are many ways to create a sigil, but the most common is to write out a specific desire (e.g. "I HAVE WONDERFUL FRIENDS WHO LOVE ME"), remove all vowels, remove any duplicate letters (keeping the last occurence), and then design a glyph from what remains.
//Using the sentence above as an example, we would remove duplicate letters:
//AUFRINDSWHLOVME
//And then remove all vowels, leaving us with:
//FRNDSWHLVM
//Create a function that takes a string and removes its vowels and duplicate letters. The returned string should not contain any spaces and be in uppercase.
//Examples
//sigilize("i am healthy") ➞ "MLTHY"
//
//sigilize("I FOUND MY SOULMATE") ➞ "FNDYSLMT"
//
//sigilize("I have a job I enjoy and it pays well") ➞ "HVBJNDTPYSWL"
//Notes
//For duplicate letters the last one is kept.
//When performing actual sigil magic, you must make your sigils manually.
//Check the Resources tab for more info on sigils if you're interested in the concept.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sigilize("I HAVE WONDERFUL FRIENDS WHO LOVE ME"), "FRNDSWHLVM")
//Test.assertEquals(sigilize("My business is financially successful"), "MBNYCSFL")
//Test.assertEquals(sigilize("I have a job I enjoy and it pays well"), "HVBJNDTPYSWL")
//Test.assertEquals(sigilize("I heard the song closing time playing on the radio"), "CSMPLYGNTHRD")
//Test.assertEquals(sigilize("i am healthy"), "MLTHY")
//Test.assertEquals(sigilize("I FOUND MY SOULMATE"), "FNDYSLMT")

