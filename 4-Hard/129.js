

//title: Minimum Difference Pair

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/czFD8Y3E253eNCy8v

//Description:
//Given an array of numbers, return the pair of numbers that give the minimum absolute difference. Return the pair as an array, sorted in ascending order. If multiple pairs have the same difference, return the pair with the smallest sum.
//Examples
//minDifferencePair([40, 16, 8, 17, 15]) ➞ [15, 16]
//// [15, 16] has smaller sum than [16, 17]
//
//minDifferencePair([1, -31, -27, -18, -48, -15, -11, -34]) ➞ [-34, -31]
//
//minDifferencePair([0, 2, 35, 42, 45, 14, -6, -1]) ➞ [-1, 0]
//
//minDifferencePair([32, 33, 4, 6, 48, 18, 20, -7, -4, 31]) ➞ [31, 32]
//Notes
//There will be no duplicate numbers in the array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(minDifferencePair([27, 49, 28, 13, -9, -2, 50]), [27, 28])
//Test.assertSimilar(minDifferencePair([32, -2, 25, -5, 20, 48, 38, 36, 7, 0]), [-2, 0])
//Test.assertSimilar(minDifferencePair([34, 50, 7, 2, -3, 17, -10, 26]), [-3, 2])
//Test.assertSimilar(minDifferencePair([-1, 10, -2, 3, -6, -10]), [-2, -1])
//Test.assertSimilar(minDifferencePair([15, 2, 17, 19, 5, -4]), [15, 17])
//Test.assertSimilar(minDifferencePair([18, -3, -10, 4, 19, -6, 15, 20, 14, 6]), [14, 15])
//Test.assertSimilar(minDifferencePair([11, 16, 9, 5, 15, -6, 2]), [15, 16])
//Test.assertSimilar(minDifferencePair([-17, 27, -3, 17, -29, 11, 40, 48]), [11, 17])
//Test.assertSimilar(minDifferencePair([43, -8, -17, -19, -9]), [-9, -8])
//Test.assertSimilar(minDifferencePair([27, 11, 22, 42, 1, 43, 21]), [21, 22])
//Test.assertSimilar(minDifferencePair([41, 42, 20, 6, 32, 49, -5, 28, 39, 40, 37]), [39, 40])
//Test.assertSimilar(minDifferencePair([22, -3, 4, 1, 46, 21, 0, 29]), [0, 1])
//Test.assertSimilar(minDifferencePair([35, 41, 48, 30, 24, 46, -2, -4, 34, 11]), [34, 35])
//Test.assertSimilar(minDifferencePair([9, 26, 5, 11, 34, -1, 4, 22, 40, 13, 25]), [4, 5])
//Test.assertSimilar(minDifferencePair([28, 19, 29, 35, 24, 3, 23, 30]), [23, 24])
//Test.assertSimilar(minDifferencePair([32, 33, 0, 39, 38, 29, 23]), [32, 33])
//Test.assertSimilar(minDifferencePair([13, 7, 39, 30, 17, 6, 38, 14]), [6, 7])
//Test.assertSimilar(minDifferencePair([2, 26, 1, 30, 29, 11, 12]), [1, 2])
//Test.assertSimilar(minDifferencePair([38, 0, 21, -1, 40, 8, 22, 32, 27]), [-1, 0])
//Test.assertSimilar(minDifferencePair([9, 8, 7, 6, 5, 4, 3, 2, 1]), [1, 2])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Wrap Around

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/GLYHkz9eDh3rMugwu

//Description:
//Create a function to reproduce the wrap around effect shown:
//Examples
//wrapAround("Hello, World!", 2) ➞ "llo, World!He"
//
//wrapAround("From what I gathered", -4) ➞ "eredFrom what I gath"
//
//wrapAround("Excelsior", 30) ➞ "elsiorExc"
//
//wrapAround("Nonscience", -116) ➞ "cienceNons"
//Notes
//The offset can be negative.
//The offset can be greater than the length of string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(wrapAround("Hello, World!", 2,), "llo, World!He")
//Test.assertEquals(wrapAround("From what I gathered", -4), "eredFrom what I gath")
//Test.assertEquals(wrapAround("No Changes", 0), "No Changes")
//Test.assertEquals(wrapAround("S", -60), "S")
//Test.assertEquals(wrapAround("Subordinating", 2), "bordinatingSu")
//Test.assertEquals(wrapAround("Assemblywomen", -6), "ywomenAssembl")
//Test.assertEquals(wrapAround("Pedantic", 4), "nticPeda")
//Test.assertEquals(wrapAround("Nonscience", -116), "cienceNons")
//Test.assertEquals(wrapAround("Excelsior", 30), "elsiorExc")
//Test.assertEquals(wrapAround("Incomprehensibilities", 50), "hensibilitiesIncompre")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find Danny

//tags: algorithms,regex,strings

//url: https://edabit.com/challenge/mxmZby7FHAW47yTAX

//Description:
//Create a function that takes a string and returns true if Danny is found and false if he's not.
//Examples
//checkIfDannyIsHere("is there dan here ?") ➞ false
//
//checkIfDannyIsHere("I found you d4nny") ➞ true
//
//checkIfDannyIsHere("and here dan ny ?") ➞ false
//
//checkIfDannyIsHere("danny is here") ➞ true
//Notes
//Danny likes to hide himself using leetspeak.
//D letter: d, D, |), [), |], 1)
//A letter: a, A, @, 4, ^, /\, /-\
//N letter: n, N, |\|, /\/, (\)
//Y letter: y, Y, `/, '/, °/

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(checkIfDannyIsHere('is there dan here ?'), false);
//Test.assertEquals(checkIfDannyIsHere('and here dan ny ?'), false);
//Test.assertEquals(checkIfDannyIsHere('I found you d4nny '), true);
//Test.assertEquals(checkIfDannyIsHere('danny is here'), true);
//Test.assertEquals(checkIfDannyIsHere('best still sitting |\\|ot cut main computer mouse film cut.'), false);
//Test.assertEquals(checkIfDannyIsHere('cheers ever her should child record beat [)4/\\/n`/ beat alive.'), true);
//Test.assertEquals(checkIfDannyIsHere('mouse should are mouse tree tree character record main and.'), false);
//Test.assertEquals(checkIfDannyIsHere('represent ever computer and keyboard cooking [)^n/\\/`/ vine mouse mouse.'), true);
//Test.assertEquals(checkIfDannyIsHere('keyboard 1)/-\\n(\\)`/ cheers his best with karma |\\|ot beat sitting.'), true);
//Test.assertEquals(checkIfDannyIsHere('[)A/\\/|\\|°/ beat film mouse cheers karma |\\|ot they ever none.'), true);
//Test.assertEquals(checkIfDannyIsHere('alive her child you DAn/\\/°/ his represent his friends mouse.'), true);
//Test.assertEquals(checkIfDannyIsHere('you dan keyboard best none seen chair should house his.'), false);
//Test.assertEquals(checkIfDannyIsHere('and cheers love record sitting you record represent tree karma.'), false);
//Test.assertEquals(checkIfDannyIsHere('love tree Da|\\||\\|y character vine mouse they computer main sitting.'), true);
//Test.assertEquals(checkIfDannyIsHere('friends friends sitting record dan karma are ever they his.'), false);
//Test.assertEquals(checkIfDannyIsHere('best film house we sitting we his d4(\\)ny |\\|ot seen.'), true);
//Test.assertEquals(checkIfDannyIsHere('computer with friends seen vine none vine da(\\)n°/ karma best.'), true);
//Test.assertEquals(checkIfDannyIsHere('you child dan house computer [)4n/\\/\'/ mouse seen character and.'), true);
//Test.assertEquals(checkIfDannyIsHere('sitting alive represent |\\|ot computer house computer cheers child film.'), false);
//Test.assertEquals(checkIfDannyIsHere('karma main her child with is |\\|ot you love represent.'), false);
//Test.assertEquals(checkIfDannyIsHere('cut dAn|\\|y keyboard vine sitting keyboard chair ever house beat.'), true);
//Test.assertEquals(checkIfDannyIsHere('vine things film sitting computer tree her seen sitting keyboard.'), false);
//Test.assertEquals(checkIfDannyIsHere('still represent seen record beat is film represent they alive.'), false);
//Test.assertEquals(checkIfDannyIsHere('best house her her mouse [)An/\\/`/ computer should ever tree.'), true);
//Test.assertEquals(checkIfDannyIsHere('|\\|ot |\\|ot they are record computer we represent |]/\\|\\|/\\/°/ film.'), true);

