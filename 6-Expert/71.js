

//title: Recursion: Index Parity of Largest Even

//tags: arrays,numbers,recursion

//url: https://edabit.com/challenge/EvwTt6AMwcMNWFoxc

//Description:
//Finding an even integer in an array is kind of trivial and superficial to most programming enthusiasts. This challenge will take it to the next level.
//Write a function that returns the largest even integer in an array with its corresponding index and the parity of that index, but determining the parity of that index is limited to not using the modulo operator %. Therefore, devise a way to resolve it.
//Although these tasks are achievable with the use of some built-in Array functions, the purpose and intent of this challenge is for your to solve it recursively.
//Output Structure
//{"@odd|even index " + index_of_largest: largest_integer}
//Examples
//bitwiseIndex([107, 19, 36, -18, -78, 24, 97]) ➞ {"@even index 2": 36}
//
//bitwiseIndex([31, 7, 2, 13, 7, 9, 10, 13]) ➞ {"@even index 6": 10}
//
//bitwiseIndex([4, 4, 4, 4, 4, 4]) ➞ {"@even index 0": 4}
//
//bitwiseIndex([-31, -7, -13, -7, -9, -13]) ➞ "No even integer found!"
//Notes
//The use of the modulo operator %, indexOf() and max() functions are restricted.
//You can read more about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept before taking up this challenge.
//If you think recursion is fun, you can find a collection of those challenges here.
//A non-recursive version of this challenge can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const noIndexOfMaxMod = f => !RegExp('indexOf|max|%','gm').test(f)
//const nonRecur = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(noIndexOfMaxMod(bitwiseIndex), false,
//    "The use of modulo operator (%), max() or indexOf() functions aren't allowed!")
//Test.assertNotEquals(nonRecur(bitwiseIndex), false, "Recursion is required!")
//​
//let [numVector, resVector] = [[
//    [107, 19, 36, -18, -78, 24, 97],
//    [31, 7, 2, 13, 7, 9, 10, 13],
//    [4, 4, 4, 4, 4, 4],
//    [-31, -7, -13, -7, -9, -13],
//    [1, 128, 9, 56, -1, 7, 18, 49],
//    [63, 12, 77, 112, 75, 92],
//    [6, 6, 6, 6, 6, 6],
//    [1, 129, 91, 5, -1, 7, 11, 9],
//    [-84, -42, 0, -2, -94, -8]], [
//    {"@even index 2": 36},
//    {"@even index 6": 10},
//    {"@even index 0": 4},
//    "No even integer found!",
//    {"@odd index 1": 128},
//    {"@odd index 3": 112},
//    {"@even index 0": 6},
//    "No even integer found!",
//    {"@even index 2": 0}]]

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Say the Number!

//tags: algorithms,data_structures,logic,numbers

//url: https://edabit.com/challenge/4E9gTrRWErpTCA2FQ

//Description:
//Create a function that takes a numeral (just digits without separators (e.g. 19093 instead of 19,093) and returns the standard way of reading a number, complete with punctuation.
//Examples
//sayNumber(0) ➞ "Zero."
//
//sayNumber(11) ➞ "Eleven."
//
//sayNumber(1043283) ➞ "One million, forty three thousand, two hundred and eighty three."
//
//sayNumber(90376000010012) ➞ "Ninety trillion, three hundred and seventy six billion, ten thousand and twelve."
//Notes
//Must read any number from 0 to 999,999,999,999,999.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sayNumber(0), "Zero.")
//Test.assertEquals(sayNumber(11), "Eleven.")
//Test.assertEquals(sayNumber(14), "Fourteen.")
//Test.assertEquals(sayNumber(15), "Fifteen.")
//Test.assertEquals(sayNumber(43), "Forty-three.")
//Test.assertEquals(sayNumber(50), "Fifty.")
//Test.assertEquals(sayNumber(1001), "One thousand and one.")
//Test.assertEquals(sayNumber(20000), "Twenty thousand.")
//Test.assertEquals(sayNumber(1033286), "One million, thirty-three thousand, two hundred and eighty-six.")
//Test.assertEquals(sayNumber(12000013), "Twelve million and thirteen.")
//Test.assertEquals(sayNumber(90376000010012), "Ninety trillion, three hundred and seventy-six billion, ten thousand and twelve.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Polybius Square, Bifid Cipher

//tags: arrays,cryptography,loops

//url: https://edabit.com/challenge/RHpTdvSgKaHmts6z7

//Description:
//The basic Polybius Square is a 5x5 square grid with the letters A-Z written into the grid. "I" and "J" typically share a slot (as there are 26 letters and only 25 slots).
//	1	2	3	4	5
//1	A	B	C	D	E
//2	F	G	H	I/J	K
//3	L	M	N	O	P
//4	Q	R	S	T	U
//5	V	W	X	Y	Z
//The Bifid cipher uses the Polybius square but adds a layer of complexity.
//Start with a secret message. Remove spaces and punctuation.
//plaintext = "ikilledmufasa"
//Encipher the message using the basic Polybius cipher (see my previous challenge — right click and select "open in new tab"), but write the numbers in two rows under the message, like so:
//i	k	i	l	l	e	d	m	u	f	a	s	a
//2	2	2	3	3	1	1	3	4	2	1	4	1
//4	5	4	1	1	5	4	2	5	1	1	3	1
//Read off the numbers horizontally, in pairs:
//22 23 31 13 42 14 14 54 11 54 25 11 31
//Generate the ciphertext by converting these new pairs of numbers into new letters using the Polybius square.
//ciphertext = "ghlcrddyaykal"
//Create a function that takes a plaintext or ciphertext, and returns the corresponding ciphertext or plaintext.
//Examples
//bifid("I killed Mufasa!") ➞ "ghlcrddyaykal"
//
//bifid("ghlcrddyaykal") ➞ "ikilledmufasa"
//
//bifid("hi") ➞ "go"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bifid('I killed Mufasa!'), 'ghlcrddyaykal')
//Test.assertEquals(bifid('ghlcrddyaykal'), 'ikilledmufasa')
//Test.assertEquals(bifid('I will look for you, I will find you, and I will kill you.'), 'khnngoxrwnglxqlkhmhporqatvrtyiadotvorqeqdu')
//Test.assertEquals(bifid('khnngoxrwnglxqlkhmhporqatvrtyiadotvorqeqdu'), 'iwilllookforyouiwillfindyouandiwillkillyou')
//Test.assertEquals(bifid('I drink your milkshake'), 'frmxtmmrbdrsyugqxlz')
//Test.assertEquals(bifid('xqcrccdfttiuloloesyks'), 'youcanthandlethetruth')

