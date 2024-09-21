

//title: The Jumping Frog

//tags: algorithms,arrays,conditions,loops

//url: https://edabit.com/challenge/DWCBTJpQnNC3bCCGL

//Description:
//A frog wants to cross a river. Unfortunately, he can't jump across in a single leap. Luckily, there are n stones in the river.
//The frog can jump from the near bank to stone 1 and from stone n to the far bank. He can also jump from stone to stone, forward and backward. However, on each stone, a number j is written and he must only jump exactly j stones backward or forward.
//Return the minimum number of jumps to cross the river (including jumps to the first stone and from the last stone (or any other stone, if possible) to the far bank) or no chance :-( if it's not possible to cross the river.
//Examples
//jumpingFrog(5, [1, 1, 1, 1, 1]) ➞ 6
//
//jumpingFrog(5, [1, 3, 1, 1, 1]) ➞ 4
//
//jumpingFrog(5, [1, 1, 0, 1, 1]) ➞ "no chance :-("
//Notes
//The frog may also reach the far bank from another stone than n if a large enough number is written on it.
//n is at least 2.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(jumpingFrog(5, [1, 1, 1, 1, 1]), 6, "simple stone-by-stone")
//Test.assertEquals(jumpingFrog(5, [1, 3, 1, 1, 1]), 4, "leapfrog 1")
//Test.assertEquals(jumpingFrog(5, [1, 5, 1, 1, 1]), 3, "leapfrog 2")
//Test.assertEquals(jumpingFrog(8, [2, 8, 1, 1, 1, 1, 1, 1]), 4, "leapfrog 3")
//Test.assertEquals(jumpingFrog(5, [1, 1, 0, 1, 1]), "no chance :-(")
//Test.assertEquals(jumpingFrog(5, [1, 2, 0, 1, 1]), 5)
//Test.assertEquals(jumpingFrog(50, [3, 0, 2, 2, 1, 1, 4, 2, 4, 1, 2, 3, 3, 0, 1, 3, 1, 2, 1, 2, 0, 0, 2, 3, 2, 0, 4, 3, 3, 0, 3, 0, 0, 1, 4, 0, 4, 2, 1, 3, 2, 0, 2, 0, 0, 3, 1, 0, 4, 1]), "no chance :-(")
//Test.assertEquals(jumpingFrog(50, [4, 1, 2, 0, 4, 2, 3, 4, 4, 4, 4, 2, 1, 4, 0, 0, 2, 1, 4, 1, 2, 4, 1, 4, 2, 3, 0, 4, 0, 4, 3, 4, 3, 0, 2, 3, 4, 3, 4, 0, 1, 2, 2, 2, 1, 2, 1, 2, 3, 4]), 19)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Validate the Tic-Tac-Toe Game State

//tags: algorithms,games,strings,validation

//url: https://edabit.com/challenge/Q4WoYhEAArKkvAimd

//Description:
//The function is given an array of three strings representing a board. The characters can be "X", "O", " ". The first player writes "X" at first turn. If a player has three marks in a row, column or a diagonal, the game stops. Given the board evaluate if this state can be achieved in line with the rules, return true / false.
//Examples
//validateTicTacToe(["X  ", "   ", "   "]) ➞ true
//// X goes first.
//
//validateTicTacToe(["O  ", "   ", "   "]) ➞ false
//// O cannot go first.
//
//validate_tic_tac_toe(["X X", " O ", "   "]) ➞ true
//// Two X and one O is a possible state.
//
//validateTicTacToe(["XOX", " X ", "   "]) ➞ false
//// Three X and one O is not a possible state.
//// Players have to go one after another.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(validateTicTacToe(["X  ", "   ", "   "]), true)
//Test.assertEquals(validateTicTacToe(["O  ", "   ", "   "]), false)
//Test.assertEquals(validateTicTacToe(["X X", " O ", "   "]), true)
//Test.assertEquals(validateTicTacToe(["XOX", " X ", "   "]), false)
//Test.assertEquals(validateTicTacToe(["O X", "OX ", "X O"]), false)
//Test.assertEquals(validateTicTacToe(["XXX", "OO ", "   "]), true)
//Test.assertEquals(validateTicTacToe(["XXX", "   ", "OOO"]), false)
//Test.assertEquals(validateTicTacToe(["XOX", "O O", "XOX"]), true)
//Test.assertEquals(validateTicTacToe(["XXX", "OOX", "OOX"]), true)
//Test.assertEquals(validateTicTacToe(["XOX", " OX", "O O"]), false)
//Test.assertEquals(validateTicTacToe(["X X", "X OX", "OXO"]), false)
//Test.assertEquals(validateTicTacToe(["OXX", "OOO", "OXX"]), false)
//Test.assertEquals(validateTicTacToe(["X O", " O ", "X  "]), true)
//Test.assertEquals(validateTicTacToe(["X O", " XO", "XOX"]), true)
//Test.assertEquals(validateTicTacToe(["O  ", "  X", "  O"]), false)
//Test.assertEquals(validateTicTacToe(["X O", " XO", " XO"]), true)
//Test.assertEquals(validateTicTacToe(["O  ", "XXO", " O "]), false)
//Test.assertEquals(validateTicTacToe(["XOO", "XXX", " O "]), true)
//Test.assertEquals(validateTicTacToe(["O O", "XXO", "X O"]), false)
//Test.assertEquals(validateTicTacToe(["OOX", "XXO", "XOO"]), false)
//Test.assertEquals(validateTicTacToe(["   ", "   ", "   "]), true)
////Evgeny SH

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Padovan Sequence

//tags: logic,math,numbers

//url: https://edabit.com/challenge/zHQM6CxpviuFpZTDF

//Description:
//In number theory, the Padovan sequence is the sequence of integers P(n) defined by the initial values:
//P(0) = P(1) = P(2) = 1
//And the recurrence relation:
//P(n) = P(n-2) + P(n-3)
//As with any sequence defined by a recurrence relation, Padovan numbers P(m) for m<0 can be defined by rewriting the recurrence relation as:
//P(m) = P(m+3) - P(m+1)
//Objective
//Create a function that takes two numbers, m and n, being m always negative and n always positive, and returns an array with the Padovan numbers between P(m) and P(n).
//Examples
//padovan(-1, 1) ➞ [0, 1, 1]
//
//padovan(-10, 10) ➞ [2, -1, 0, 1, -1, 1, 0, 0, 1, 0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12]
//
//padovan(-50, 1) ➞ [-524, 245, 71, -279, 316, -208, 37, 108, -171, 145, -63, -26, 82, -89, 56, -7, -33, 49, -40, 16, 9, -24, 25, -15, 1, 10, -14, 11, -4, -3, 7, -7, 4, 0, -3, 4, -3, 1, 1, -2, 2, -1, 0, 1, -1, 1, 0, 0, 1, 0, 1, 1]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(padovan(-10, 10), [2, -1, 0, 1, -1, 1, 0, 0, 1, 0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12])
//Test.assertSimilar(padovan(-1, 100), [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 21, 28, 37, 49, 65, 86, 114, 151, 200, 265, 351, 465, 616, 816, 1081, 1432, 1897, 2513, 3329, 4410, 5842, 7739, 10252, 13581, 17991, 23833, 31572, 41824, 55405, 73396, 97229, 128801, 170625, 226030, 299426, 396655, 525456, 696081, 922111, 1221537, 1618192, 2143648, 2839729, 3761840, 4983377, 6601569, 8745217, 11584946, 15346786, 20330163, 26931732, 35676949, 47261895, 62608681, 82938844, 109870576, 145547525, 192809420, 255418101, 338356945, 448227521, 593775046, 786584466, 1042002567, 1380359512, 1828587033, 2422362079, 3208946545, 4250949112, 5631308624, 7459895657, 9882257736, 13091204281, 17342153393, 22973462017, 30433357674, 40315615410, 53406819691, 70748973084, 93722435101, 124155792775, 164471408185, 217878227876, 288627200960, 382349636061, 506505428836, 670976837021, 888855064897, 1177482265857])
//Test.assertSimilar(padovan(-50, 1), [-524, 245, 71, -279, 316, -208, 37, 108, -171, 145, -63, -26, 82, -89, 56, -7, -33, 49, -40, 16, 9, -24, 25, -15, 1, 10, -14, 11, -4, -3, 7, -7, 4, 0, -3, 4, -3, 1, 1, -2, 2, -1, 0, 1, -1, 1, 0, 0, 1, 0, 1, 1])
//Test.assertSimilar(padovan(-3, 33), [0, 1, 0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 21, 28, 37, 49, 65, 86, 114, 151, 200, 265, 351, 465, 616, 816, 1081, 1432, 1897, 2513, 3329, 4410, 5842, 7739])
//Test.assertSimilar(padovan(-1, 1), [0, 1, 1])
//Test.assertSimilar(padovan(-9, 2), [-1, 0, 1, -1, 1, 0, 0, 1, 0, 1, 1, 1])
//Test.assertSimilar(padovan(-4, 66), [0, 0, 1, 0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 21, 28, 37, 49, 65, 86, 114, 151, 200, 265, 351, 465, 616, 816, 1081, 1432, 1897, 2513, 3329, 4410, 5842, 7739, 10252, 13581, 17991, 23833, 31572, 41824, 55405, 73396, 97229, 128801, 170625, 226030, 299426, 396655, 525456, 696081, 922111, 1221537, 1618192, 2143648, 2839729, 3761840, 4983377, 6601569, 8745217, 11584946, 15346786, 20330163, 26931732, 35676949, 47261895, 62608681, 82938844])

