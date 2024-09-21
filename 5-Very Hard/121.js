

//title: Pilish Strings

//tags: algorithms,formatting,strings

//url: https://edabit.com/challenge/MPNkbLAD3baxY5Frj

//Description:
//In this challenge, transform a string into a series of words (or sequences of characters) separated by a single space, with each word having the same length given by the first 15 digits of the decimal representation of Pi:
//3.14159265358979
//If a string contains more characters than the total quantity given by the sum of the Pi digits, the unused characters are discarded and you will use only those needed to form 15 words.
//String = "HOWINEEDADRINKALCOHOLICINNATUREAFTERTHEHEAVYLECTURESINVOLVINGQUANTUMMECHANICSANDALLTHESECRETSOFTHEUNIVERSE"
//
//Pi String = "HOW I NEED A DRINK ALCOHOLIC IN NATURE AFTER THE HEAVY LECTURES INVOLVING QUANTUM MECHANICS"
//
//// Every word has the same length of the digit of Pi found at the same index ?
//// "HOW" = 3, "I" = 1, "NEED" = 4, "A" = 1, "DRINK" = 5
//// "ALCOHOLIC" = 9, "IN" = 2, "NATURE" = 6, "AFTER" = 5
//// "THE" = 3, "HEAVY" = 5, "LECTURES" = 8, "INVOLVING" = 9
//// "QUANTUM" = 7, "MECHANICS" = 9
//// 3.14159265358979
//Also if a string contains less characters than the total quantity given by the sum of the Pi digits, in any case you have to respect the sequence of the digits to obtain the words.
//String = "FORALOOP"
//
//Pi String = "FOR A LOOP"
//
//// Every word has the same length of the digit of Pi found at the same index ?
//// "FOR" = 3, "A" = 1, "LOOP" = 4
//// 3.14
//If the letters contained in the string don't match exactly the digits, in this case you will repeat the last letter until the word will have the correct length.
//String = "CANIMAKEAGUESSNOW"
//
//Pi String = "CAN I MAKE A GUESS NOWWWWWWW"
//
//// Every word has the same length of the digit of Pi found at the same index ?
//// "CAN" = 3, "I" = 1, "MAKE" = 4, "A" = 1, "GUESS" = 5, "NOW" = 3
//// 3.14153 (Wrong!)
//// The length of the sixth word "NOW" (3)...
//// ...doesn't match the sixth digit of Pi (9)
//// The last letter "W" will be repeated...
//// ...until the length of the word will match the digit
//
//// "CAN" = 3, "I" = 1, "MAKE" = 4, "A" = 1, "GUESS" = 5, "NOWWWWWWW" = 9
//// 3.14159 (Correct!)
//If the given string is empty, an empty string has to be returned.
//Given a string txt, implement a function that returns the same string formatted accordingly to the above instructions.
//Examples
//pilishString("33314444") ➞ "333 1 4444"
//// 3.14
//
//pilishString("TOP") ➞ "TOP"
//// 3
//
//pilishString("X")➞ "XXX"
//// "X" has to match the same length of the first digit (3)
//// The last letter of the word is repeated
//
//pilishString("")➞ ""
//Notes
//This challenge is a simplified concept inspired by the Pilish, a peculiar type of constrained writing that uses all the known possible digits of Pi. A potentially infinite text can be written allowing punctuation and a set of additional rules, that permits to avoid long sequences of small digits, substituting them with words bigger than 9 letters and making so appear the composition more similar to a free-verse poem.
//The dot that separes the integer part of Pi from the decimal part hasn't to be considered in the function: it's present in Instructions and Examples only for readability.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(pilishString("FORALOOP"), "FOR A LOOP")
//Test.assertEquals(pilishString("CANIMAKEAGUESS"), "CAN I MAKE A GUESS")
//Test.assertEquals(pilishString("CANIMAKEAGUESSNOW"), "CAN I MAKE A GUESS NOWWWWWWW")
//Test.assertEquals(pilishString("X"), "XXX")
//Test.assertEquals(pilishString("ARANDOMSEQUENCEOFLETTERS"), "ARA N DOMS E QUENC EOFLETTER SS")
//Test.assertEquals(pilishString(""), "")
//Test.assertEquals(pilishString("33314444155555999999999226666665555533355555888888889999999997777777999999999"), "333 1 4444 1 55555 999999999 22 666666 55555 333 55555 88888888 999999999 7777777 999999999")
//Test.assertEquals(pilishString("###*@"), "### * @@@@")
//Test.assertEquals(pilishString(".........."), "... . .... . .....")
//// Below, quoting Mike Keith
//Test.assertEquals(pilishString("NowIfallAtiredsuburbianInliquidunderthetreesDriftingalongsideforestssimm"), "Now I fall A tired suburbian In liquid under the trees Drifting alongside forests simmmmmmm")
//// Below, quoting Sir James Hopwood Jeans
//Test.assertEquals(pilishString("HOWINEEDADRINKALCOHOLICINNATUREAFTERTHEHEAVYLECTURESINVOLVINGQUANTUMMECHANICSANDALLTHESECRETSOFTHEUNIVERSE"), "HOW I NEED A DRINK ALCOHOLIC IN NATURE AFTER THE HEAVY LECTURES INVOLVING QUANTUM MECHANICS")
//Test.assertEquals(pilishString("HOWINEEDADRINKALCOHOLICINNATUREAFTERTHEHEAVYCODING"), "HOW I NEED A DRINK ALCOHOLIC IN NATURE AFTER THE HEAVY CODINGGG")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Help Matt Get Home!

//tags: algorithms,loops

//url: https://edabit.com/challenge/bfBTeRqsZ3Jwmyz6P

//Description:
//It's been a long day for Matt. After working on Edabit for quite a bit, he decided to go out and get a beer at the local bar a few miles down the road. However, what Matt didn't realise, was that with too much drinks you can't find the way home properly anymore. Your goal is to help Matt get back home by telling him how long the path to his house is if he drives the optimal route.
//Matt lives in a simple world: there is only dirt (represented by a dot), a single house (Matt's house, represented by the letter "h") and there are trees (represented by the letter "t") which he obviously can't drive through. Matt has an unlimited amount of moves and each move he can go north, north-east, east, south-east, south, south-west, west and north-west. There will only be one Matt and one house, which is Matt's.
//The world is given to you as a comma-delimited string which represents the cells in the world from top-left to bottom-right. A 3x3 world with Matt on the top-left and his house on the bottom-right, with a tree in the middle would be represented as:
//m,.,.,.,t,.,.,.,h
//The answer to this world would be 3: Matt would first move east, then south-east, then south (or south > south-east > east). The function call related to this example would be the following:
//getPathLength("m,.,.,.,t,.,.,.,h", 3, 3)
//If Matt is unable to get home from his current location, return -1, otherwise return the amount of moves Matt has to make to get home if he follows the optimal path. You are given the world, it's width and it's height.
//Good luck!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getPathLength('m,.,.,.,t,.,.,.,h', 3, 3), 3)
//Test.assertEquals(getPathLength('m,.,.,.,.,.,.,.,h', 3, 3), 2)
//Test.assertEquals(getPathLength('m,h', 2, 1), 1)
//Test.assertEquals(getPathLength('.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,m,.,.,.,.,.,.,.,t,t,t,.,.,.,.,.,.,.,t,h,.,.,.,.,.,.,.,.,t,t,.,.,.,.,.,.,.,.,.,.,.', 10, 10), 9)
//Test.assertEquals(getPathLength('.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,m,.,.,.,.,.,.,.,t,t,t,.,.,.,.,.,.,.,t,h,t,.,.,.,.,.,.,.,t,t,t,.,.,.,.,.,.,.,.,.,.', 10, 10), -1)
//Test.assertEquals(getPathLength('m,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,t,t,.,.,.,.,.,.,.,.,.,t,h', 10, 10), 14)
//Test.assertEquals(getPathLength('m,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,t,.,.,t,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,t,.,t,.,.,.,.,.,.,.,t,.,t,.,.,.,.,.,.,.,.,t,t,.,.,.,.,.,.,.,t,t,t,.,.,.,.,.,.,.,t,t,t,.,.,.,.,.,.,.,t,.,t,h', 10, 10), 15)
//Test.assertEquals(getPathLength('m,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,h', 25, 25), 24)
//Test.assertEquals(getPathLength('m,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,t,t,t,t,t,.,t,.,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,.,t,t,t,t,t,t,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,t,t,t,t,t,t,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,h', 25, 25), 91)
//Test.assertEquals(getPathLength('m,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,t,t,t,t,t,.,t,.,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,.,t,t,t,t,t,t,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,t,t,t,t,t,t,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,h', 25, 25), -1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Vowel Skewers

//tags: algorithms,loops,strings,validation

//url: https://edabit.com/challenge/pamfQKTuXPf7u6yne

//Description:
//An authentic vowel skewer is a skewer with a delicious and juicy mix of consonants and vowels. However, the way they are made must be just right:
//Skewers must begin and end with a consonant.
//Skewers must alternate between consonants and vowels.
//There must be an even spacing between each letter on the skewer, so that there is a consistent flavour throughout.
//Create a function which returns whether a given vowel skewer is authentic.
//Examples
//isAuthenticSkewer("B--A--N--A--N--A--S") ➞ true
//
//isAuthenticSkewer("A--X--E") ➞ false
//// Should start and end with a consonant.
//
//isAuthenticSkewer("C-L-A-P") ➞ false
//// Should alternate between consonants and vowels.
//
//isAuthenticSkewer("M--A---T-E-S") ➞ false
//// Should have consistent spacing between letters.
//Notes
//All tests will be given in uppercase.
//Strings without any actual skewer "-" or letters should return false.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isAuthenticSkewer("B--A--N--A--N--A--S"), true)
//Test.assertEquals(isAuthenticSkewer("L-A-B-O-R-A-T-O-R"), true)
//Test.assertEquals(isAuthenticSkewer("M-----E-----M-----E-----S"), true)
//Test.assertEquals(isAuthenticSkewer("A--X--E"), false)
//Test.assertEquals(isAuthenticSkewer("C-L-A-P"), false)
//Test.assertEquals(isAuthenticSkewer("M--A---T-E-S"), false)
//Test.assertEquals(isAuthenticSkewer("C--H----E---E-S-E"), false)
//Test.assertEquals(isAuthenticSkewer("B-E-L-L"), false)
//Test.assertEquals(isAuthenticSkewer("T-I-T-A-N-I-C"), true)
//Test.assertEquals(isAuthenticSkewer("J--E--Q--A--H--E--K--A--Y--U--X--A--P--I--F"), true)
//Test.assertEquals(isAuthenticSkewer("F-U-W"), true)
//Test.assertEquals(isAuthenticSkewer("C-----O-----K-----O-----Z-----O-----D-----E-----W-----O-----T"), true)
//Test.assertEquals(isAuthenticSkewer("T----O----M----O----R"), true)
//Test.assertEquals(isAuthenticSkewer("OZAEZ-----EE"), false)
//Test.assertEquals(isAuthenticSkewer("--UXGV"), false)
//Test.assertEquals(isAuthenticSkewer("W-E-D-A-X-E-P-I-Y-O-L-E-V-A-W"), true)
//Test.assertEquals(isAuthenticSkewer("J---U---X---O---G---O---G---I---D---U---J---O---K---U---V"), true)
//Test.assertEquals(isAuthenticSkewer("APU---V"), false)
//Test.assertEquals(isAuthenticSkewer("U---WIE--------------UACO"), false)
//Test.assertEquals(isAuthenticSkewer("EOAOTJCUE-----U----K-----"), false)
//Test.assertEquals(isAuthenticSkewer("S---O---S---I---W---A---H---U---W---I---J---I---Q---A---C"), true)
//Test.assertEquals(isAuthenticSkewer("R-O-D-U-P-U-C-A-M-A-R-A-T-I-V-U-R"), true)
//Test.assertEquals(isAuthenticSkewer("C----A----T----A----Q----O----M----A----F"), true)
//Test.assertEquals(isAuthenticSkewer("C---A---P---I---B---A---R---O---Z---E---W---A---L---O---J"), true)
//Test.assertEquals(isAuthenticSkewer("H---------O-------"), false)

