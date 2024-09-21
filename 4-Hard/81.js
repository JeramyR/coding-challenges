

//title: Trailing Zeros

//tags: algebra,algorithms,math,numbers,recursion

//url: https://edabit.com/challenge/BZgdHtDMnQQRkvFTT

//Description:
//Mubashir needs your help to find out trailing zeros after calculating factorial of a given number.
//Create a function which takes a number n and calculates the number of trailing zeros in factorial of the given number.
//n! = 1 * 2 * 3 * ... * n
//Examples
//trailingZeros(0) ➞ 0
//// 0! = 1
//// No trailing zero.
//
//trailingZeros(6) ➞ 1
//// 6! = 720
//// 1 trailing zero.
//
//trailingZeros(1000) ➞ 249
//// 1000! has 249 trailing zeros.
//Notes
//Hint: No need to calculate the factorial (because it won't help). Find another way to find the number of zeros.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(trailingZeros(0), 0, "Testing with n = 0")
//Test.assertEquals(trailingZeros(6), 1, "Testing with n = 6")
//Test.assertEquals(trailingZeros(30), 7, "Testing with n = 30")
//Test.assertEquals(trailingZeros(100), 24, "Testing with n = 100")
//Test.assertEquals(trailingZeros(1000), 249, "Testing with n = 1000")
//Test.assertEquals(trailingZeros(100000), 24999, "Testing with n = 100000")
//Test.assertEquals(trailingZeros(1000000000), 249999998, "Testing with n = 1000000000")
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Italian Grammar: Present Tense of First Conjugation Verbs

//tags: conditions,formatting,strings

//url: https://edabit.com/challenge/CZhyvQg3KDhcYRJD7

//Description:
//In this challenge, you must build a function that inflects an infinitive regular Italian verb of the first conjugation form to the present tense, including the personal subjective pronoun.
//All first conjugation Italian verbs share the same suffix: ARE. The first thing to do is separate the verb root from the suffix.
//Root of "programmare" (to code) = "programm".
//Root of "giocare" (to play) = "gioc".
//For each subjective pronoun the root is combined with a new suffix: see table below (pronouns are numbered for coding ease, in real grammar they are grouped in singular and plural, both from first to third):
//#	Pronoun	Suffix
//1	Io (I)	o
//2	Tu (You)	i
//3	Egli (He)	a
//4	Noi (We)	iamo
//5	Voi (You)	ate
//6	Essi (They)	ano
//Present tense of verb "parlare" (to speak) for third pronoun:
//Pronoun ("Egli") + Root ("parl") + Suffix ("a") = "Egli parla".
//Present tense of verb "lavorare" (to work) for fourth pronoun:
//Pronoun ("Noi") + Root ("lavor") + Suffix ("iamo") = "Noi lavoriamo".
//There are two exceptions for present tense inflection:
//If root ends with "c" or "g" the second and fourth pronoun suffixes add a "h" at the start:
//"Attaccare" (to attack) = "Tu attacchi" (instead of "Tu attacci")
//"Legare" (to tie) = "Noi leghiamo" (instead of "Noi legiamo")
//If root ends with "i" the second and fourth pronoun suffixes lose the starting "i" (so that second pronoun suffix disappears):
//"Inviare" (to send) = "Noi inviamo" (instead of "Noi inviiamo")
//"Tagliare" (to cut) = "Tu tagli" (instead of "Tu taglii")
//"Mangiare" (to eat) = "Noi mangiamo" (instead of "Noi mangiiamo")
//"Cacciare" (to hunt) = "Tu cacci" (instead of "Tu caccii")
//Given a string verb being the infinitive form of the first conjugation Italian regular verb, and an integer pronoun being the subjective personal pronoun, implement a function that returns the inflected form as a string.
//Examples
//conjugate("programmare", 5) ➞ "Voi programmate"
//
//conjugate("iniziare", 2) ➞ "Tu inizi"
//
//conjugate("mancare", 4) ➞ "Noi manchiamo"
//Notes
//In the returned string, pronouns must be capitalized and verbs must be in lowercase, separated by a space between them.
//Curious fact: first conjugation (verbs ending in "are") is also called "the living conjugation", because every new verb that enters the Italian dictionary is assigned to this category as a new regular verb; it often happens for verbs "borrowed" from English and for informatical neologisms: chattare, twittare, postare, spammare... will edabittare be the next?

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(conjugate("edabittare", 4), "Noi edabittiamo", "We edabit :-)")
//Test.assertEquals(conjugate("programmare", 5), "Voi programmate", "You code")
//Test.assertEquals(conjugate("iniziare", 2), "Tu inizi", "You start")
//Test.assertEquals(conjugate("mancare", 4), "Noi manchiamo", "We miss")
//Test.assertEquals(conjugate("parlare", 1), "Io parlo", "I speak")
//Test.assertEquals(conjugate("sognare", 3), "Egli sogna", "He dreams")
//Test.assertEquals(conjugate("negare", 2), "Tu neghi", "You deny")
//Test.assertEquals(conjugate("insegnare", 5), "Voi insegnate", "You teach")
//Test.assertEquals(conjugate("tagliare", 4), "Noi tagliamo", "We cut")
//Test.assertEquals(conjugate("nuotare", 1), "Io nuoto", "I swim")
//Test.assertEquals(conjugate("cambiare", 3), "Egli cambia", "He changes")
//// Thanks to @Francesco Di Viesto for these two more tests (see the Comments tab)
//Test.assertEquals(conjugate("negare", 3), "Egli nega", "He denies")
//Test.assertEquals(conjugate("pareggiare", 2), "Tu pareggi", "You draw")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Arrow Pattern

//tags: algorithms,arrays

//url: https://edabit.com/challenge/cEcDMjnmdnYYosHzQ

//Description:
//Create a function that creates a pattern as a 2D array for a given number.
//Examples
// >
// >>
// >>>
// >>
// >
//
//arrow(3) ➞ [">", ">>", ">>>", ">>", ">"]
// >
// >>
// >>>
// >>>>
// >>>>
// >>>
// >>
// >
//
//arrow(4) ➞ [">", ">>", ">>>", ">>>>", ">>>>", ">>>", ">>", ">"]
//Notes
//Function argument will always be a number greater than 0.
//Odd numbers will have a single "peak" (see example #1).
//Even numbers have two "peaks" (see example #2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(arrow(3), ['>', '>>', '>>>', '>>', '>'])
//Test.assertSimilar(arrow(4), ['>', '>>', '>>>', '>>>>', '>>>>', '>>>', '>>', '>'])
//Test.assertSimilar(arrow(7), ['>', '>>', '>>>', '>>>>', '>>>>>', '>>>>>>', '>>>>>>>', '>>>>>>', '>>>>>', '>>>>', '>>>', '>>', '>'])
//Test.assertSimilar(arrow(8), ['>', '>>', '>>>', '>>>>', '>>>>>', '>>>>>>', '>>>>>>>', '>>>>>>>>', '>>>>>>>>', '>>>>>>>', '>>>>>>', '>>>>>', '>>>>', '>>>', '>>', '>'])
//Test.assertSimilar(arrow(9), ['>', '>>', '>>>', '>>>>', '>>>>>', '>>>>>>', '>>>>>>>', '>>>>>>>>', '>>>>>>>>>', '>>>>>>>>', '>>>>>>>', '>>>>>>', '>>>>>', '>>>>', '>>>', '>>', '>'])
//Test.assertSimilar(arrow(10), ['>', '>>', '>>>', '>>>>', '>>>>>', '>>>>>>', '>>>>>>>', '>>>>>>>>', '>>>>>>>>>', '>>>>>>>>>>', '>>>>>>>>>>', '>>>>>>>>>', '>>>>>>>>', '>>>>>>>', '>>>>>>', '>>>>>', '>>>>', '>>>', '>>', '>'])

