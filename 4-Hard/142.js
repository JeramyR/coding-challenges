

//title: Nth Fibonacci Number

//tags: interview,loops,math,numbers

//url: https://edabit.com/challenge/DxCJgn8TtqAupmHxd

//Description:
//Create a function to return the Nth number in the Fibonacci sequence as a string.
//Examples
//fibonacci(10) ➞ "55"
//
//fibonacci(20) ➞ "6765"
//
//fibonacci(30) ➞ "832040"
//
//fibonacci(40) ➞ "102334155"
//
//fibonacci(50) ➞ "12586269025"
//
//fibonacci(60) ➞ "1548008755920"
//Notes
//Your function is expected to calculate numbers greater than the 64-bit unsigned integer limit where n can be as large as but not greater than 200.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fibonacci(10), "55")
//Test.assertEquals(fibonacci(20), "6765")
//Test.assertEquals(fibonacci(30), "832040")
//Test.assertEquals(fibonacci(40), "102334155")
//Test.assertEquals(fibonacci(50), "12586269025")
//Test.assertEquals(fibonacci(60), "1548008755920")
//Test.assertEquals(fibonacci(70), "190392490709135")
//Test.assertEquals(fibonacci(80), "23416728348467685")
//Test.assertEquals(fibonacci(90), "2880067194370816120")
//Test.assertEquals(fibonacci(100), "354224848179261915075")
//Test.assertEquals(fibonacci(110), "43566776258854844738105")
//Test.assertEquals(fibonacci(120), "5358359254990966640871840")
//Test.assertEquals(fibonacci(130), "659034621587630041982498215")
//Test.assertEquals(fibonacci(140), "81055900096023504197206408605")
//Test.assertEquals(fibonacci(150), "9969216677189303386214405760200")
//Test.assertEquals(fibonacci(160), "1226132595394188293000174702095995")
//Test.assertEquals(fibonacci(170), "150804340016807970735635273952047185")
//Test.assertEquals(fibonacci(180), "18547707689471986212190138521399707760")
//Test.assertEquals(fibonacci(190), "2281217241465037496128651402858212007295")
//Test.assertEquals(fibonacci(200), "280571172992510140037611932413038677189525")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Conveyor Belts, Warp Tunnels

//tags: arrays,data_structures,loops

//url: https://edabit.com/challenge/QK4QbxN6oj4EMf5zy

//Description:
//In this challenge, you have to deal with a matrix that is moving from the left to the right by a given amount of times, shifting its items as in a conveyor belt. At the end of the last array inside the matrix, there's a warp tunnel. The warp tunnel made appear the elements pushed through by the shifts at the beginning of the matrix, in the same order as they were before the shift. Look at the example below:
//// Before the movement.
//mtx = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//n = 2
//
//// After the movement (2 shifts to the right).
//mtx = [[8, 9, 1], [2, 3, 4], [5, 6, 7]]
//
//// Shifting 2 times to the right, "8" and "9" are pushed through the warp tunnel.
//// The warped elements appear at the start.
//Given a matrix mtx and an integer n, implement a function that returns the same matrix with its elements shifted n times.
//Examples
//warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2) ➞ [[8, 9, 1], [2, 3, 4], [5, 6, 7]]
//
//warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 8) ➞ [[2, 3, 4], [5, 6, 7], [8, 9, 1]]
//
//warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9) ➞ [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//
//warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 18) ➞ [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//Notes
//The given matrices are regular (each array shares the same number of elements contained) with variable lengths and the number of arrays contained.
//The returned matrix must have the same dimensions as the original.
//The given n can be greater than the total number of elements inside the matrix (see example #4). Each time you reach a complete shift cycle (so that every element is back in its original position, see example #3), you have to start again.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2), [[8, 9, 1], [2, 3, 4], [5, 6, 7]])
//Test.assertSimilar(warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 8), [[2, 3, 4], [5, 6, 7], [8, 9, 1]])
//Test.assertSimilar(warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9), [[1, 2, 3], [4, 5, 6], [7, 8, 9]])
//Test.assertSimilar(warpTunnel([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 18), [[1, 2, 3], [4, 5, 6], [7, 8, 9]])
//Test.assertSimilar(warpTunnel([["a", "b"], ["c", "d"], ["e", "f"]], 4), [['c', 'd'], ['e', 'f'], ['a', 'b']])
//Test.assertSimilar(warpTunnel([[1, "x", 3], [4, "w", 6], [7, "y", 9]], 19), [[9, 1, 'x'], [3, 4, 'w'], [6, 7, 'y']])
//Test.assertSimilar(warpTunnel([[12, 36], [18, 27]], 149), [[27, 12], [36, 18]])
//Test.assertSimilar(warpTunnel([["12", 36, 24, "j"], ["18", "!", 27, "9"]], 19), [['!', 27, '9', '12'], [36, 24, 'j', '18']])
//Test.assertSimilar(warpTunnel([["t", "i", "s"], ["g", "r", "e"], ["a", "t", "!"], ["!", "e", "d"], ["a", "b", "i"]], 5), [['e', 'd', 'a' ], ['b', 'i', 't'], ['i', 's', 'g'], ['r', 'e', 'a'], ['t', '!', '!']])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Subtle Switcheroo

//tags: regex,strings

//url: https://edabit.com/challenge/WQjRP8ZpmSWZddoMd

//Description:
//Create a function which replaces all instances of "nts" with "nce" and vice versa if they are at the end of a word.
//Examples
//switcheroo("The elephants in France were chased by ants!") ➞ "The elephance in Frants were chased by ance!"
//
//switcheroo("While he rants, I fall into a trance...") ➞ "While he rance, I fall into a trants..."
//
//switcheroo("Bounced over the fence!") ➞ "Bounced over the fents!"
//Notes
//Empty strings should return just an empty string (see example #2).
//Ignore punctuation and any instances where "nts" or "nce" are not at the end of a word (see example #3).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(switcheroo("While he rants, I fall into a trance..."), "While he rance, I fall into a trants...")
//Test.assertEquals(switcheroo("The elephants in France were chased by ants!"), "The elephance in Frants were chased by ance!")
//Test.assertEquals(switcheroo("Bounced over the fence!"), "Bounced over the fents!")
//Test.assertEquals(switcheroo("Face"), "Face", "Replace nce, not just ce")
//Test.assertEquals(switcheroo("Fats"), "Fats", "Replace nts, not just ts")
//Test.assertEquals(switcheroo(""), "")
//​
//// made by @Joshua Señoron

