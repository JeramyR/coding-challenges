

//title: Recursion: First Recurrence Index

//tags: algorithms,arrays,objects,recursion

//url: https://edabit.com/challenge/bKp8TCCy5fmZGzRec

//Description:
//Create a recursive function that identifies the very first item that has recurred in the string argument passed. It returns the identified item with the index where it first appeared and the very next index where it resurfaced - entirely as an object; or an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.
//Examples
//recurIndex("KDXTDATTDD") ➞ {"D": [1, 4]}
//// D first appeared at index 1, resurfaced at index 4
////  though D resurfaced yet again at index 8, it's no longer significant
//// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first
//
//recurIndex("AKEDCBERSD") ➞ {"E": [2, 6]}
//
//recurIndex("DXKETRETXD") ➞ {"E": [3, 6]}
//
//recurIndex("ABCKPEPGBC") ➞ {"P": [4, 6]}
//
//recurIndex("ABCDEFGHIJ") ➞ {}
//
//recurIndex(undefined) ➞ {}
//Notes
//It is expected from the challenge-takers to come up with a solution using the concept of recursion or the so-called recursive approach.
//You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or hasn't fully understood the concept behind it before taking up this challenge or unless otherwise.
//There will be no exceptions to handle, all inputs are strings and string-like objects. You just need to be extra careful on null, undefined and empty string inputs to avoid an Uncaught RangeError or exceededing the maximum call size of the stack.
//A non-recursive version of this challenge can be found here.
//If you think recursion is fun, you can find a collection of those challenges here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertEquals(recursive(recurIndex), true)
//Test.assertNotEquals(recursive(recurIndex), false, 'Recursion is required!')
//​
//let [strVectors, objRes] = [[
//  'KDXTDATTDD', 'AKEDCBERSD', 'DXKETRETXD', 'ABCKPEPGBC',
//  'ABCDEFGHIJ', undefined, 'DXTDDTXD', 'XYZETUVXWVU',
//  'YZTQMNTERXHQRX', 'ARDECBSDER', '', 'ABCDEFGABCD', null, 'KLMNONMLK'],
//  [{"D": [1, 4]}, {"E": [2, 6]}, {"E": [3, 6]}, {"P": [4, 6]},
//  {}, {}, {"D": [0, 3]}, {"X": [0, 7]},
//  {"T": [2, 6]}, {"D": [2, 7]}, {}, {"A": [0, 7]}, {}, {"N": [3, 5]}
//]]
//for (let i in strVectors) Test.assertSimilar(recurIndex(strVectors[i]), objRes[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Hidden in Plain Sight

//tags: conditions,cryptography,loops,strings

//url: https://edabit.com/challenge/MgfXZBKfTyPqSafh3

//Description:
//This challenge makes use of a modified Baconian (Francis Bacon) cipher. The following is an example of a (modified) Baconian ciphertext:
//ciphertext = "KNowlEDgE ITsElf Is power."
//The peculiar capitalisation might, at first glance, suggest that either the lowercase or uppercase letters contain, or code for, the hidden message (upper = "KNEDEITEI", lower = "owlgslfspower").
//But actually, the Baconian cipher is a steganographic method of hiding information. The hidden message is not in the content of the ciphertext, but rather in the presentation. It doesn't matter which letters are capitalised, just the order of the capitalisation.
//To decipher the ciphertext above, remove spaces and punctuation, then cleave the message into chunks of length 5, leaving out the remainder:
//ciphertext = "KNowl EDgEI TsElf Ispow"
//Each chunk represents a letter. Decipher them according to the following table ("u" means uppercase, "l" means lowercase):
//Letter	Pattern
//a	uuuuu
//b	uuuul
//c	uuulu
//d	uuull
//e	uuluu
//f	uulul
//g	uullu
//h	uulll
//i	uluuu
//j	uluul
//k	ululu
//l	ulull
//m	ulluu
//n	ullul
//o	ulllu
//p	ullll
//q	luuuu
//r	luuul
//s	luulu
//t	luull
//u	luluu
//v	lulul
//w	lullu
//x	lulll
//y	lluuu
//z	lluul
//.	llllu
//	lllll
//deciphered = "help"
//Create a function that takes 1 or 2 arguments:
//A Baconian ciphertext or a plaintext message to be enciphered: msg.
//A background text in which the message is to be hidden: mask.
//If only one argument is given (ciphertext), return the deciphered message (in lowercase, with spaces and full stops as encoded).
//If a second argument is given, encipher the first argument msg into the mask, and return the resulting ciphertext. When enciphering, encipher full stops and spaces along with the words. Disregard the rest. The ciphertext itself should retain all the punctuation and spaces of the original mask.
//Examples
//baconify("KNowlEDgE ITsElf Is power.") ➞ "help"
//
//baconify("Help me.", "Man prefers to believe what he prefers to be true.") ➞ "MAn prEFeRS To BelIeve what he PreFERS tO Be truE."
//// Both the space (between "help" and "me") and the full stop at the end are enciphered.
//
//baconify("Help!!!", "Knowledge itself is power.") ➞ "KNowlEDgE ITsElf Is power."
//// Exclamation marks not enciphered, so the resulting ciphertext is identical to the first example.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(baconify("KNowlEDgE ITsElf Is power."), "help")
//Test.assertEquals(baconify("Help me.", "Man prefers to believe what he prefers to be true."), "MAn prEFeRS To BelIeve what he PreFERS tO Be truE.")
//Test.assertEquals(baconify("THE GenERAl ROOT OF suPerstitIOn: nAMElY, ThAT men OBsErve wheN ThiNGs hiT, AnD Not wheN tHEY mISS; aNd coMMit To memory THe oNE, and fORGeT and PAss OvER tHE otheR. man preFerS tO BelIEvE what he prefers to be true."), "bran gets the iron throne. wtf    ")
//Test.assertEquals(baconify("Bran gets the Iron Throne. WTF?!", "The general root of superstition: namely, that men observe when things hit, and not when they miss; and commit to memory the one, and forget and pass over the other. Man prefers to believe what he prefers to be true."), "THE GenERAl ROOT OF suPerstitIOn: nAMElY, ThAT men OBsErve wheN ThiNGs hiT, AnD Not wheN tHEY mISS; aNd coMMit To memory THe oNE, and fORGeT and PAss OvER tHE otheR. man preFerS tO BelIEvE what he prefers to be true.")
//Test.assertEquals(baconify("knowledge itself is power."), "    ")
//Test.assertEquals(baconify("Snape kills Dumbledore at Dumbledore's behest.", "Philosophy when superficially studied, excites doubt, when thoroughly explored, it dispels it. The root of all superstition is that men observe when a thing hits, but not when it misses. It is a sad fate for a man to die too well known to everybody else, and still unknown to himself."), "pHIlOSopHy WHEN SUperfICiALly stuDiEd, EXcITES dOubT, wHen tHOrOughly EXPlorEd, IT DisPELS IT. tHe RooT Of ALL SUpeRstiTiON Is THaT Men obsERVE WhEN a thing hITS, but NoT WHen IT MISSeS. iT is A SaD FATE foR a maN tO DIe TOo WElL KnOwn to eVERYbODy ELSE, and STiLL uNKnOwN To himseLf.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Jumbled Words

//tags: algorithms,numbers,strings

//url: https://edabit.com/challenge/soifmDAvLsbic9vXH

//Description:
//For this challenge, you are given a string of letters in alphabetical order and an index. If a list of all the permutations of those letters are put in lexicographical order, a legitimate word is located at the given index. You are to identify that word.
//For example:
//jumble("isn", 4) ➞ sin"
//The permutations are:
//["ins", "isn", "nis", "nsi", "sin", "sni"]
//The permutation at index 4 is "sin".
//Examples
//jumble("em", 1) ➞ "me"
//
//jumble("aiv", 5) ➞ "via"
//
//jumble("abdeit", 408) ➞ "edabit"
//
//jumble("abdeit", 137) ➞ "baited"
//
//jumble("abefgilnoruv", 425933017) ➞ "unforgivable"
//Notes
//The test case words are heterographs (i.e. all the letters are different).
//It is too time-consuming to generate every permutation for some of the longer words (check the Resources tab for another way).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(jumble("a", 0), "a")
//Test.assertEquals(jumble("abes", 7), "base")
//Test.assertEquals(jumble("ginz", 21), "zing")
//Test.assertEquals(jumble("acknr", 43), "crank")
//Test.assertEquals(jumble("aceghns", 1094), "changes")
//Test.assertEquals(jumble("eghilnoprstu", 465433101), "upholstering")
//Test.assertEquals(jumble("cdeghinoprtuy", 5510573825), "uncopyrighted")
//Test.assertEquals(jumble("acdeghimnorsty", 36994730804), "hydromagnetics")
//Test.assertEquals(jumble("acdeghilmoprsty", 191364251720), "dermatoglyphics")

