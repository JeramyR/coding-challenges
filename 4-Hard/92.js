

//title: Seven Ate Nine

//tags: arrays,logic,math

//url: https://edabit.com/challenge/dHAk8zPwacSev6Hmv

//Description:
//A number can eat the number to the right of it if it's smaller than itself. After eating that number, it becomes the sum of itself and that number. Your job is to create a function that returns the final array after the leftmost element has finished "eating".
//Examples
//[5, 3, 7] ➞ [8, 7] ➞ [15]
//
//// 5 eats 3 to become 8
//// 8 eats 7 to become 15
//[5, 3, 9] ➞ [8, 9]
//
//// 5 eats 3 to become 8
//// 8 cannot eat 9, since 8 < 9
//nomNom([1, 2, 3]) ➞ [1, 2, 3]
//
//nomNom([2, 1, 3]) ➞ [3, 3]
//
//nomNom([8, 5, 9]) ➞ [22]
//Notes
//Test input contains only an array of numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(nomNom([1, 2, 3]), [1, 2, 3], "1 cannot eat 2, so numbers remain uneaten.")
//Test.assertSimilar(nomNom([2, 1, 3]), [3, 3], "2 can eat 1 to become 3. 3 cannot eat 3.")
//Test.assertSimilar(nomNom([8, 5, 9]), [22], "8 eats 5 to become 13, 13 eats 9 to become 22.")
//Test.assertSimilar(nomNom([5, 3, 7]), [15], "5 eats 3 to become 8. 8 eats 7 to become 15.")
//Test.assertSimilar(nomNom([5, 3, 9]), [8, 9], "5 eats 3 to become 8. 8 cannot eat 9.")
//Test.assertSimilar(nomNom([6, 5, 6, 100]), [17, 100], "6 eats 5 to become 11. 11 eats 7 to become 17. 17 cannot eat 100.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Holey Sort

//tags: numbers,sorting

//url: https://edabit.com/challenge/sdxaSqNqcuDRfnMHs

//Description:
//What do the numbers 4, 6, 8, 9 and 0 have in common? They all have holes in them! Notice how the number 8 contains not one, but two holes.
//Given an array of numbers, sort the array in accordance to how many holes occur in the number. It should be sorted in ascending order.
//Examples
//holeySort([44, 4, 444, 4444]) ➞ [4, 44, 444, 4444]
//
//holeySort([100, 888, 1660, 11]) ➞ [11, 100, 1660, 888]
//
//holeySort([8, 121, 41, 66]) ➞ [121, 41, 8, 66]
//Notes
//If two numbers have the same number of holes in them, sort them by the order they first appeared in.
//Despite the number 0 appearing to have two holes in certain fonts, it will only have one hole for the purposes of this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(holeySort([44, 4, 444, 4444]), [4, 44, 444, 4444])
//Test.assertSimilar(holeySort([100, 888, 1660, 11]), [11, 100, 1660, 888])
//Test.assertSimilar(holeySort([8, 121, 41, 66]), [121, 41, 8, 66])
//Test.assertSimilar(holeySort([8866609, 7446374, 8034913, 8192048]), [7446374, 8034913, 8192048, 8866609])
//Test.assertSimilar(holeySort([3679331, 1237297, 7317174, 5541133, 2319810, 2012006, 4559290, 3135855, 5095791]), [1237297, 7317174, 5541133, 3679331, 3135855, 5095791, 2319810, 2012006, 4559290])
//Test.assertSimilar(holeySort([5680732, 6544345]), [5680732, 6544345])
//Test.assertSimilar(holeySort([3867920, 2906311, 2341998, 1308265, 3431794, 4060483, 2562324, 5058728, 3297499, 3858981]), [2562324, 2906311, 3431794, 1308265, 3297499, 3867920, 2341998, 5058728, 4060483, 3858981])
//Test.assertSimilar(holeySort([7272843, 1574284]), [7272843, 1574284])
//Test.assertSimilar(holeySort([7055630, 8250202, 1581006, 3814642, 3352271, 7739043, 4500737]), [3352271, 7055630, 7739043, 4500737, 8250202, 1581006, 3814642])
//Test.assertSimilar(holeySort([932439, 7213398, 9921879, 9896887, 4455707, 1862761, 5291632, 8636466, 1967626, 4674768]), [5291632, 932439, 7213398, 4455707, 1862761, 1967626, 9921879, 4674768, 8636466, 9896887])
//Test.assertSimilar(holeySort([7626146, 361326, 3169396, 2317924, 3787053]), [361326, 2317924, 3787053, 7626146, 3169396])
//Test.assertSimilar(holeySort([7293109, 7258402, 8616767]), [7293109, 7258402, 8616767])
//Test.assertSimilar(holeySort([5438273, 3148430, 9589797, 9189167, 1512456, 6005623]), [1512456, 5438273, 6005623, 3148430, 9589797, 9189167])
//Test.assertSimilar(holeySort([8100934, 8976162, 5564876, 8508778, 9372523, 3617577, 1460454]), [9372523, 3617577, 8976162, 5564876, 1460454, 8100934, 8508778])
//Test.assertSimilar(holeySort([8919783, 497415, 3445236, 8856520, 8740983, 8039621, 6826990]), [497415, 3445236, 8039621, 8919783, 8856520, 8740983, 6826990])
//Test.assertSimilar(holeySort([1382961, 3848104, 698796, 1937294]), [1937294, 1382961, 698796, 3848104])
//Test.assertSimilar(holeySort([4643506, 3573605, 8635658, 5421175, 8172284]), [5421175, 3573605, 4643506, 8172284, 8635658])
//Test.assertSimilar(holeySort([1267000, 5109729, 9048778]), [5109729, 1267000, 9048778])
//Test.assertSimilar(holeySort([3264283, 1784307, 4846052, 3994463, 2762047]), [2762047, 3264283, 1784307, 3994463, 4846052])
//Test.assertSimilar(holeySort([7972695, 4553534, 657075, 7634858, 7256312, 8405970, 8541506, 2103525, 4996663, 7966014]), [7256312, 2103525, 4553534, 657075, 7972695, 8541506, 7966014, 7634858, 8405970, 4996663])
//Test.assertSimilar(holeySort([5120580, 9067109, 465134, 6017129, 9841915, 8172139, 1703343, 9354143]), [1703343, 465134, 6017129, 8172139, 9354143, 5120580, 9067109, 9841915])
//Test.assertSimilar(holeySort([941843, 691454, 9117576, 3233877, 7051186, 9127394, 4977370, 10665, 9952983]), [9117576, 3233877, 9127394, 4977370, 10665, 691454, 7051186, 941843, 9952983])
//Test.assertSimilar(holeySort([8812775, 3541663, 6419753]), [3541663, 6419753, 8812775])
//Test.assertSimilar(holeySort([9279101, 1999417, 2619824, 8326952, 3619356, 175745, 8815564, 7155122, 446604]), [7155122, 175745, 9279101, 3619356, 1999417, 8326952, 2619824, 8815564, 446604])
//Test.assertSimilar(holeySort([2784997, 7829319, 9790303, 7402739, 6221072, 3662653, 9524591, 4647384]), [6221072, 7402739, 3662653, 9524591, 7829319, 9790303, 2784997, 4647384])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Persistent Little Bugger

//tags: loops,math,numbers,recursion

//url: https://edabit.com/challenge/p74GFxJkNQRRbLTwG

//Description:
//Create a function that takes a number and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//Examples
//bugger(39) ➞ 3
//// Because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4 and 4 has only one digit.
//
//bugger(999) ➞ 4
//// Because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1 * 2 = 2.
//
//bugger(4) ➞ 0
//// Because 4 is already a one-digit number.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bugger(39),3)
//Test.assertEquals(bugger(4),0)
//Test.assertEquals(bugger(25),2)
//Test.assertEquals(bugger(999),4)
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​
//​

