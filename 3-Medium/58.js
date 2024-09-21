

//title: Number Length Sort

//tags: numbers,sorting

//url: https://edabit.com/challenge/fuvMP8KMtiQY3QXrJ

//Description:
//Create a sorting function which sorts numbers not by numerical order, but by number length! This means sorting numbers with the least amount of digits first, up to the numbers with the most digits.
//Examples
//numberLenSort([1, 54, 1, 2, 463, 2]) ➞ [1, 1, 2, 2, 54, 463]
//
//numberLenSort([999, 421, 22, 990, 32]) ➞ [22, 32, 999, 421, 990]
//
//numberLenSort([9, 8, 7, 6, 5, 4, 31, 2, 1, 3]) ➞ [9, 8, 7, 6, 5, 4, 2, 1, 3, 31]
//Notes
//If two numbers have the same number of digits, return them in the order they first appeared (this makes it different to just sorting the numbers normally).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(numberLenSort([1, 54, 1, 2, 463, 2]), [1, 1, 2, 2, 54, 463])
//Test.assertSimilar(numberLenSort([999, 421, 22, 990, 32]), [22, 32, 999, 421, 990])
//Test.assertSimilar(numberLenSort([9, 8, 7, 6, 5, 4, 31, 2, 1, 3]), [9, 8, 7, 6, 5, 4, 2, 1, 3, 31])
//Test.assertSimilar(numberLenSort([755, 1109, 9374, 94, 3683, 8695, 4135, 5177, 3216]), [94, 755, 1109, 9374, 3683, 8695, 4135, 5177, 3216])
//Test.assertSimilar(numberLenSort([8013, 1753, 7283, 6830, 73, 6278, 4931, 4556]), [73, 8013, 1753, 7283, 6830, 6278, 4931, 4556])
//Test.assertSimilar(numberLenSort([2762, 5905, 9433, 9809, 6511, 7141, 1050, 2610, 8123]), [2762, 5905, 9433, 9809, 6511, 7141, 1050, 2610, 8123])
//Test.assertSimilar(numberLenSort([9103, 5630, 7273, 2024]), [9103, 5630, 7273, 2024])
//Test.assertSimilar(numberLenSort([1342, 7567, 3504, 4378, 3070, 6592, 3645]), [1342, 7567, 3504, 4378, 3070, 6592, 3645])
//Test.assertSimilar(numberLenSort([237, 574, 3703, 2251, 4963, 2640]), [237, 574, 3703, 2251, 4963, 2640])
//Test.assertSimilar(numberLenSort([3633, 4402, 6745]), [3633, 4402, 6745])
//Test.assertSimilar(numberLenSort([6053, 2486, 8238]), [6053, 2486, 8238])
//Test.assertSimilar(numberLenSort([7919, 2725, 6296, 3517, 1788, 1321, 9049, 4481]), [7919, 2725, 6296, 3517, 1788, 1321, 9049, 4481])
//Test.assertSimilar(numberLenSort([1488, 764, 1053, 7053, 1718, 2950, 4697]), [764, 1488, 1053, 7053, 1718, 2950, 4697])
//Test.assertSimilar(numberLenSort([1321, 7671, 4235, 5989]), [1321, 7671, 4235, 5989])
//Test.assertSimilar(numberLenSort([3640, 4634, 9183, 6361, 7823]), [3640, 4634, 9183, 6361, 7823])
//Test.assertSimilar(numberLenSort([2900, 7995]), [2900, 7995])
//Test.assertSimilar(numberLenSort([7620, 3510]), [7620, 3510])
//Test.assertSimilar(numberLenSort([5533, 8639, 8297, 7591, 3280, 3354]), [5533, 8639, 8297, 7591, 3280, 3354])
//Test.assertSimilar(numberLenSort([9403, 9403]), [9403, 9403])
//Test.assertSimilar(numberLenSort([3470, 8155, 6086, 2095, 3445, 1869]), [3470, 8155, 6086, 2095, 3445, 1869])
//Test.assertSimilar(numberLenSort([3772, 9711, 1576, 5919, 7966, 1528]), [3772, 9711, 1576, 5919, 7966, 1528])
//Test.assertSimilar(numberLenSort([5751, 5472, 6910, 3678]), [5751, 5472, 6910, 3678])
//Test.assertSimilar(numberLenSort([7195, 9518, 9523, 7713, 6969, 739, 7313, 8588, 8545, 4414]), [739, 7195, 9518, 9523, 7713, 6969, 7313, 8588, 8545, 4414])
//Test.assertSimilar(numberLenSort([2209, 918, 8152, 1726, 8326, 2734]), [918, 2209, 8152, 1726, 8326, 2734])
//Test.assertSimilar(numberLenSort([5653, 5848, 4107, 2802, 6050, 1034, 2435, 5952]), [5653, 5848, 4107, 2802, 6050, 1034, 2435, 5952])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find Unique Character Strings

//tags: arrays,higher_order_functions,strings

//url: https://edabit.com/challenge/kPjg5tCKnFsyYFfex

//Description:
//Create a function that returns only strings with unique characters.
//Examples
//filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) ➞ ["abc"]
//// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.
//
//filterUnique(["88", "999", "989", "9988", "9898"]) ➞ []
//
//filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) ➞ ["ABCDE", "BED", "BAC"]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(filterUnique(['abb', 'abc', 'abcdb', 'aea', 'bbb']), ['abc'])
//Test.assertSimilar(filterUnique(['88', '999', '989', '9988', '9898']), [])
//Test.assertSimilar(filterUnique(['ABCDE', 'DDEB', 'BED', 'CCA', 'BAC']), ['ABCDE', 'BED', 'BAC'])
//Test.assertSimilar(filterUnique(['qrrs', 'srrq', 'qqrs', 'qq', 'ss', 'rs']), ['rs'])
//Test.assertSimilar(filterUnique(['abab', 'ba', 'ab', 'cc']), ['ba', 'ab'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Running Athlete 🏃

//tags: interview,language_fundamentals,regex,strings

//url: https://edabit.com/challenge/pMrpGchpAwpM5BySZ

//Description:
//No description.
//Guess the code from test cases.
//Examples
//runningAthlete(["run", "jump", "run", "jump", "run"], "_|_|_") ➞ "_|_|_"
//
//runningAthlete(["run", "jump", "run", "run", "run"], "_|_|_") ➞ "_|_/_"
//
//runningAthlete(["jump", "jump", "jump", "jump", "jump"], "_|_|_") ➞ "x|x|x"
//
//runningAthlete(["run", "run", "run", "run", "run"], "_|_|_") ➞ "_/_/_"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(runningAthlete(["run","jump","run","jump","run"],"_|_|_"),"_|_|_")
//Test.assertEquals(runningAthlete(["run","jump","run","run","run"],"_|_|_"),"_|_/_")
//Test.assertEquals(runningAthlete(["run","run","run","run","run"],"_|_|_"),"_/_/_")
//Test.assertEquals(runningAthlete(["jump","jump","jump","jump","jump"],"_|_|_"),"x|x|x")
//Test.assertEquals(runningAthlete(["jump","run","jump","run","jump"],"_|_|_"),"x/x/x")
//Test.assertEquals(runningAthlete(["run","run","run","run","run","run","run","run","run","run"],"||||||||||"),"//////////")
//Test.assertEquals(runningAthlete(["jump","jump","jump","jump","jump","jump","jump","jump","jump","jump"],"__________"),"xxxxxxxxxx")
////Mubashir

