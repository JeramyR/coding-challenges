

//title: Game of Thrones: Character Titles

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/QudLBG2RvfePRMzDn

//Description:
//Write a function that takes a string and returns a string with the correct case for character titles in the Game of Thrones series.
//The words and, the, of and in should be lowercase.
//All other words should have the first character as uppercase and the rest lowercase.
//Examples
//correctTitle("jOn SnoW, kINg IN thE noRth.")
//➞ "Jon Snow, King in the North."
//
//correctTitle("sansa stark, lady of winterfell.")
//➞ "Sansa Stark, Lady of Winterfell."
//
//correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.")
//➞ "Tyrion Lannister, Hand of the Queen."
//Notes
//Punctuation and spaces must remain in their original positions.
//Hyphenated words are considered separate words.
//Be careful with words that contain and, the, of or in.
//See the Resources tab for more info on the various JavaScript string methods.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(correctTitle("sansa stark, lady of winterfell."), "Sansa Stark, Lady of Winterfell.")
//Test.assertEquals(correctTitle("lord eddard stark, hand of the king."), "Lord Eddard Stark, Hand of the King.")
//Test.assertEquals(correctTitle("jaime lannister, lord commander of the kingsguard."), "Jaime Lannister, Lord Commander of the Kingsguard.")
//Test.assertEquals(correctTitle("varys, master of whisperers."), "Varys, Master of Whisperers.")
//Test.assertEquals(correctTitle("doran martell, prince of dorne, lord of sunspear."), "Doran Martell, Prince of Dorne, Lord of Sunspear.")
//Test.assertEquals(correctTitle("TYRION LANNISTER, HAND OF THE QUEEN."), "Tyrion Lannister, Hand of the Queen.")
//Test.assertEquals(correctTitle("GRAND MAESTER PYCELLE."), "Grand Maester Pycelle.")
//Test.assertEquals(correctTitle("EURON GREYJOY, KING OF THE IRON ISLANDS, LORD REAPER OF PYKE."), "Euron Greyjoy, King of the Iron Islands, Lord Reaper of Pyke.")
//Test.assertEquals(correctTitle("PETYR BAELISH, LORD PROTECTOR OF THE VALE."), "Petyr Baelish, Lord Protector of the Vale.")
//Test.assertEquals(correctTitle("MANCE RAYDER, KING-BEYOND-THE-WALL."), "Mance Rayder, King-Beyond-the-Wall.")
//Test.assertEquals(correctTitle("jOn SnoW, kINg IN thE noRth."), "Jon Snow, King in the North.")
//Test.assertEquals(correctTitle("Jeor MORMONT, Lord COMMANDER of the NIGHT'S WATCH."), "Jeor Mormont, Lord Commander of the Night's Watch.")
//Test.assertEquals(correctTitle("cERSei LANnIStEr, QuEEn Of the aNdals and THE fIRSt men, PROtecTOR OF tHe SEVEN KInGdOmS."), "Cersei Lannister, Queen of the Andals and the First Men, Protector of the Seven Kingdoms.")
//Test.assertEquals(correctTitle("DAeneRYS StOrmboRn oF hOuse TARGARYEn, ThE FirsT OF HER naMe, QUeEn OF The ANdAlS And THe FirsT mEN, PROtECtOr Of tHE SEven KinGDOmS, The MoTHeR of DrAGONS, thE KhALeEsi oF THE GReAt gRAss sEa, The UnburNT, The BReakEr of cHAInS."), "Daenerys Stormborn of House Targaryen, the First of Her Name, Queen of the Andals and the First Men, Protector of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great Grass Sea, the Unburnt, the Breaker of Chains.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Minesweeper Number of Neighbouring Mines

//tags: arrays,functional_programming,games,loops,numbers

//url: https://edabit.com/challenge/Hs9MayvcfE7gHzuLT

//Description:
//Create a function that takes an array representation of a Minesweeper board, and returns another board where the value of each cell is the amount of its neighbouring mines.
//Examples
//The input may look like this:
//[
//  [0, 1, 0, 0],
//  [0, 0, 1, 0],
//  [0, 1, 0, 1],
//  [1, 1, 0, 0],
//]
//The 0 represents an empty space . The 1 represents a mine.
//You will have to replace each mine with a 9 and each empty space with the number of adjacent mines, the output will look like this:
//[
//  [1, 9, 2, 1],
//  [2, 3, 9, 2],
//  [3, 9, 4, 9],
//  [9, 9, 3, 1],
//]
//Notes
//Since in the output the numbers 0-8 are used to determine the amount of adjacent mines, the number 9 will be used to identify the mines instead.
//A wikipedia page explaining how Minesweeper works is available in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(minesweeperNumbers([]), [])
//​
//Test.assertSimilar(minesweeperNumbers([
//  [1, 1, 1],
//  [1, 0, 1],
//  [1, 1, 1]
//]), [
//  [9, 9, 9],
//  [9, 8, 9],
//  [9, 9, 9]
//])
//​
//Test.assertSimilar(minesweeperNumbers([
//  [0, 0, 0, 1],
//  [0, 1, 0, 0],
//  [1, 0, 0, 0],
//  [0, 0, 1, 0]
//]), [
//  [1, 1, 2, 9],
//  [2, 9, 2, 1],
//  [9, 3, 2, 1],
//  [1, 2, 9, 1]
//])
//​
//Test.assertSimilar(minesweeperNumbers([

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Substring Consonant-Vowel Groups

//tags: loops,strings

//url: https://edabit.com/challenge/rgEiYWCq6Z3J7RNwq

//Description:
//Write two functions:
//One to retrieve all unique substrings that start and end with a vowel.
//One to retrieve all unique substrings that start and end with a consonant.
//The resulting array should be sorted in lexicographic ascending order (same order as a dictionary).
//Examples
//getVowelSubstrings("apple")
//➞ ["a", "apple", "e"]
//
//getVowelSubstrings("hmm") ➞ []
//
//getConsonantSubstrings("aviation")
//➞ ["n", "t", "tion", "v", "viat", "viation"]
//
//getConsonantSubstrings("motor")
//➞ ["m", "mot", "motor", "r", "t", "tor"]
//Notes
//Remember the output array should have unique values.
//The word itself counts as a potential substring.
//Exclude the empty string when outputting the array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getVowelSubstrings("apple"), ["a", "apple", "e"])
//Test.assertSimilar(getVowelSubstrings("carrot"), ["a", "arro", "o"])
//Test.assertSimilar(getVowelSubstrings("aviation"), ["a", "ati", "atio", "avi", "avia", "aviati", "aviatio", "i", "ia", "iati", "iatio", "io", "o"])
//Test.assertSimilar(getVowelSubstrings("motor"), ["o", "oto"])
//Test.assertSimilar(getVowelSubstrings("rhyme"), ["e"])
//Test.assertSimilar(getVowelSubstrings("hmm"), [])
//​
//Test.assertSimilar(getConsonantSubstrings("apple"), ["l", "p", "pl", "pp", "ppl"])
//Test.assertSimilar(getConsonantSubstrings("carrot"), ["c", "car", "carr", "carrot", "r", "rot", "rr", "rrot", "t"])
//Test.assertSimilar(getConsonantSubstrings("aviation"), ["n", "t", "tion", "v", "viat", "viation"])
//Test.assertSimilar(getConsonantSubstrings("motor"), ["m", "mot", "motor", "r", "t", "tor"])
//Test.assertSimilar(getConsonantSubstrings("rhyme"), ["h", "hy", "hym", "m", "r", "rh", "rhy", "rhym", "y", "ym"])
//Test.assertSimilar(getConsonantSubstrings("hmm"), ["h", "hm", "hmm", "m", "mm"])

