

//title: Sales by Match

//tags: algorithms,arrays

//url: https://edabit.com/challenge/Hz38C3DmRhpHJSKBq

//Description:
//Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. For example, there are 7 socks with colors [1, 2, 1, 2, 1, 3, 2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
//Create a function that returns an integer representing the number of matching pairs of socks that are available.
//Examples
//sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]) ➞ 3
//
//sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]) ➞ 4
//
//sockMerchant([]) ➞ 0
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]), 3)
//Test.assertEquals(sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90]), 4)
//Test.assertEquals(sockMerchant([90, 20, 30, 40, 40, 20, 30, 20, 90]), 4)
//Test.assertEquals(sockMerchant([10, 40, 40, 40, 40, 20, 10, 10, 10]), 4)
//Test.assertEquals(sockMerchant([50, 40, 30, 10, 60, 60, 90, 80, 10]), 2)
//Test.assertEquals(sockMerchant([50, 40, 30, 100, 60, 65, 90, 80, 10]), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Choosing a Fuse

//tags: algorithms,numbers

//url: https://edabit.com/challenge/kvGvWEYtquTqn7K5i

//Description:
//A fuse melts when a current in an electrical device exceeds the fuse's rating, breaking the circuit and preventing the heat from building up too much (which can cause a fire). The ideal fuse to choose is higher than the device's current output, yet as close as possible to it as well.
//Given an array of fuse ratings, and the device's current output, return which of the fuses is the best for the device.
//Examples
//chooseFuse(["3V", "5V", "12V"], "4.5V") ➞ "5V"
//
//chooseFuse(["5V", "14V", "2V"], "5.5V") ➞ "14V"
//
//chooseFuse(["17V", "15V", "12V"], "9V") ➞ "12V"
//Notes
//You will be given three possible ratings in voltage.
//Fuses may not be in a sorted order.
//Assume that there is a valid fuse in every test case

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(chooseFuse(["3V", "5V", "12V"], "4.5V"), "5V")
//Test.assertEquals(chooseFuse(["5V", "14V", "2V"], "5.5V"), "14V")
//Test.assertEquals(chooseFuse(["17V", "15V", "12V"], "9V"), "12V")
//Test.assertEquals(chooseFuse(["1V", "2V", "3V"], "2.5V"), "3V")
//Test.assertEquals(chooseFuse(["17V", "15V", "12V"], "1V"), "12V")
//Test.assertEquals(chooseFuse(["7V", "135V", "12V"], "9.5V"), "12V")
//Test.assertEquals(chooseFuse(["17V", "15V", "12V"], "17V"), "17V")
//Test.assertEquals(chooseFuse(["3V", "11V", "12V"], "4.5V"), "11V")
//Test.assertEquals(chooseFuse(["3V", "5V", "12V"], "0.5V"), "3V")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Convert camelCase to snake_case

//tags: formatting,language_fundamentals,regex,strings

//url: https://edabit.com/challenge/NekgMswiPasDonSDe

//Description:
//Create a function that takes a string of words (or just one word) and converts each word from camelCase to snake_case.
//Examples
//camelToSnake("magicCarrots") ➞ "magic_carrots"
//
//camelToSnake("greatApples for aSmellyRhino") ➞ "great_apples for a_smelly_rhino"
//
//camelToSnake("thatsGreat") ➞ "thats_great"
//Notes
//You won't get more than two capitals in a row (e.g. "DIYFoods" is not given).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(camelToSnake("magicCarrots"), "magic_carrots")
//Test.assertEquals(camelToSnake("greatApples for aSmellyRhino"), "great_apples for a_smelly_rhino")
//Test.assertEquals(camelToSnake("th1sSh0uldB3FineT00"), "th1s_sh0uld_b3_fine_t00")

