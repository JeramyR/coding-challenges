

//title: Sum of the Odd Numbers

//tags: loops,math

//url: https://edabit.com/challenge/wu7DA5ud68NjPbXjb

//Description:
//Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.
//Examples
//addOddToN(5) ➞ 9
//// 1 + 3 + 5 = 9
//
//addOddToN(13) ➞ 49
//
//addOddToN(47) ➞ 576
//Notes
//Curiously, the answers are all square numbers!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(addOddToN(1), 1)
//Test.assertEquals(addOddToN(3), 4)
//Test.assertEquals(addOddToN(5), 9)
//Test.assertEquals(addOddToN(7), 16)
//Test.assertEquals(addOddToN(9), 25)
//Test.assertEquals(addOddToN(11), 36)
//Test.assertEquals(addOddToN(13), 49)
//Test.assertEquals(addOddToN(15), 64)
//Test.assertEquals(addOddToN(17), 81)
//Test.assertEquals(addOddToN(19), 100)
//Test.assertEquals(addOddToN(21), 121)
//Test.assertEquals(addOddToN(23), 144)
//Test.assertEquals(addOddToN(25), 169)
//Test.assertEquals(addOddToN(27), 196)
//Test.assertEquals(addOddToN(29), 225)
//Test.assertEquals(addOddToN(31), 256)
//Test.assertEquals(addOddToN(33), 289)
//Test.assertEquals(addOddToN(35), 324)
//Test.assertEquals(addOddToN(37), 361)
//Test.assertEquals(addOddToN(39), 400)
//Test.assertEquals(addOddToN(41), 441)
//Test.assertEquals(addOddToN(43), 484)
//Test.assertEquals(addOddToN(45), 529)
//Test.assertEquals(addOddToN(47), 576)
//Test.assertEquals(addOddToN(49), 625)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Automorphic Number

//tags: logic,math,numbers,validation

//url: https://edabit.com/challenge/nmFGPbuMkmzpYoXum

//Description:
//A number is called Automorphic number if its square ends in the original number. Create a function that takes a number n and returns true if it is an Automorphic number, otherwise false.
//Examples
//automorphic(1) ➞ true
//
//automorphic(3) ➞ false
//// 3^2 = 9
//
//automorphic(6) ➞ true
//// 6^2 = 36 (ends with 6)
//
//automorphic(95) ➞ false
//// 95^2 = 9025 (does not end with 95)
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(automorphic(1), true)
//Test.assertEquals(automorphic(3), false)
//Test.assertEquals(automorphic(6), true)
//Test.assertEquals(automorphic(9), false)
//Test.assertEquals(automorphic(10), false)
//Test.assertEquals(automorphic(25), true)
//Test.assertEquals(automorphic(53), false)
//Test.assertEquals(automorphic(76), true)
//Test.assertEquals(automorphic(95), false)
//Test.assertEquals(automorphic(100), false)
//Test.assertEquals(automorphic(625), true)
//Test.assertEquals(automorphic(225), false)
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Array From a Range of Numbers

//tags: arrays,language_fundamentals,numbers

//url: https://edabit.com/challenge/webH9q8JMHc6SmTpY

//Description:
//Create a function that returns an array of all the integers between two given numbers start and end.
//Examples
//rangeOfNum(2, 4) ➞ [3]
//
//rangeOfNum(5, 9) ➞ [6, 7, 8]
//
//rangeOfNum(2, 11) ➞ [3, 4, 5, 6, 7, 8, 9, 10]
//Notes
//start will always be <= end.
//start and end are NOT included in the final array.
//If start == end, return an empty array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(rangeOfNum(2, 4), [3])
//Test.assertSimilar(rangeOfNum(5, 9), [6, 7, 8])
//Test.assertSimilar(rangeOfNum(2, 11), [3, 4, 5, 6, 7, 8, 9, 10])
//Test.assertSimilar(rangeOfNum(0, 9), [1, 2, 3, 4,5, 6, 7, 8])
//Test.assertSimilar(rangeOfNum(156, 196), [157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195])
//Test.assertSimilar(rangeOfNum(271, 349), [272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348])
//Test.assertSimilar(rangeOfNum(457, 508), [458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507])
//Test.assertSimilar(rangeOfNum(10, 10), [])
//Test.assertSimilar(rangeOfNum(545, 596), [546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595])
//Test.assertSimilar(rangeOfNum(343, 347), [344, 345, 346])
//Test.assertSimilar(rangeOfNum(27, 27), [])

