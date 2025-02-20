

//title: Dependable Jobs Schedule

//tags: algorithms,conditions,games,validation

//url: https://edabit.com/challenge/3vxwff2qQ4TiubNKF

//Description:
//The function is given the number of jobs and an array of prerequisites. Each job is labeled from 0 to jobs - 1. The array of dependencies has arrays of pairs [j, i] meaning that job j can start after the job i has been completed. A job can depend on multiple jobs to be completed or have no dependencies at all. If a job is not dependent on another job, it can be completed immediately. Given the dependencies, determine if all jobs can be finished and return true / false.
//Examples
//finishAll(2, [[1, 0]]) ➞ true
//// job-0 has no dependency and can be finished.
//// job-1 depends on job-0, so it can also be finished.
//
//finishAll(2, [[1, 0], [0, 1]]) ➞ false
//// Neither job-0 nor job-1 can be finished because they are mutually dependent.
//
//finishAll(3, [[1, 0], [2, 1]]) ➞ true
//// The jobs are sequentially dependent.
//
//finishAll(4, [[0, 1], [1, 2], [2, 0]]) ➞ false
//// Circular dependence between 0-1-2-0 prevents them from being finished.
//
//finishAll(1, []) ➞ true
//// Only one job-0 with no dependence.
//Notes
//The array of prerequisites has dependencies within the given range of jobs.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(finishAll(2, [[1, 0]]), true)
//Test.assertEquals(finishAll(2, [[1, 0], [0, 1]]), false)
//Test.assertEquals(finishAll(3, [[1, 0], [2, 1]]), true)
//Test.assertEquals(finishAll(4, [[0, 1], [1, 2], [2, 0]]), false)
//Test.assertEquals(finishAll(1, []), true)
//Test.assertEquals(finishAll(11, [[6, 10], [4, 3], [9, 2], [2, 3], [6, 1], [2, 8], [10, 1], [10, 2], [5, 3], [0, 10], [7, 4], [6, 1]]), true)
//Test.assertEquals(finishAll(21, [[1, 12], [6, 16], [11, 5], [13, 15], [16, 6], [9, 7], [7, 2], [0, 17], [4, 17], [4, 12], [8, 18], [11, 9], [7, 17], [19, 11], [3, 14], [4, 0], [2, 13], [16, 11], [18, 18], [20, 14], [14, 18], [7, 9], [12, 10], [0, 0], [9, 10], [1, 5], [19, 0], [3, 14], [14, 6], [14, 10]]), false)
//Test.assertEquals(finishAll(30, [[27, 29], [10, 22], [22, 21], [17, 11], [28, 12], [1, 24], [2, 5], [20, 12], [27, 7], [18, 29], [13, 3], [5, 28], [7, 6], [9, 14], [14, 12], [13, 19], [27, 23], [29, 6], [20, 21], [3, 7], [14, 3], [29, 9], [17, 19], [11, 22], [23, 14], [3, 21], [14, 3], [29, 21], [6, 5], [5, 15], [10, 5], [8, 27], [14, 5], [10, 19], [4, 8]]), true)
//Test.assertEquals(finishAll(50, [[21, 16], [9, 4], [20, 21], [42, 15], [4, 7], [0, 27], [8, 41], [11, 20], [42, 29], [37, 5], [43, 49], [29, 45], [19, 40], [12, 9], [41, 35], [28, 29], [21, 17], [30, 46], [8, 1], [15, 29], [36, 11], [14, 29], [21, 49], [9, 33], [39, 47], [35, 40], [18, 25], [20, 18], [33, 25], [9, 21], [15, 27], [38, 16], [25, 24], [44, 29], [30, 17], [37, 40], [22, 43], [41, 37], [34, 37], [27, 28], [15, 26], [28, 35], [25, 27], [10, 8], [21, 42], [28, 4], [13, 5], [26, 7], [40, 8], [11, 21], [42, 1], [44, 5], [11, 45], [8, 26], [7, 36], [36, 24], [12, 8], [46, 40]]), false)
//Test.assertEquals(finishAll(75, [[62, 56], [49, 38], [6, 10], [36, 8], [66, 1], [36, 73], [51, 24], [49, 18], [4, 64], [18, 65], [59, 31], [26, 38], [57, 39], [49, 74], [73, 72], [45, 37], [7, 59], [18, 1], [21, 73], [3, 69], [14, 48], [25, 74], [10, 36], [15, 34], [3, 35], [2, 52], [44, 22], [38, 7], [51, 50], [58, 55], [40, 48], [28, 2], [64, 18], [66, 44], [66, 31], [11, 68], [67, 40], [12, 1], [10, 15], [73, 67], [31, 71], [66, 26], [52, 44], [3, 32], [64, 24], [15, 6], [37, 44], [55, 39], [20, 33], [46, 1], [59, 0], [12, 59], [33, 1], [37, 24], [11, 53], [3, 18], [42, 8], [42, 26], [54, 22], [51, 20], [4, 30], [71, 56], [63, 57], [23, 32], [38, 44], [13, 66], [11, 63], [33, 0], [20, 47], [51, 72], [23, 47], [51, 8], [62, 11], [63, 35], [65, 38], [54, 74], [43, 13], [28, 57], [15, 7], [67, 60], [2, 48], [12, 66], [8, 34], [54, 35], [13, 58], [58, 44], [23, 53], [45, 67], [10, 24], [3, 13], [59, 2], [68, 2], [59, 20], [51, 21], [64, 74], [74, 41], [34, 50]]), false)
//Test.assertEquals(finishAll(100, [[14, 75], [3, 62], [32, 45], [3, 82], [21, 73], [12, 5], [57, 48], [43, 53], [71, 62], [72, 15], [81, 9], [25, 39], [92, 66], [13, 51], [89, 7], [59, 63], [64, 71], [4, 59], [89, 72], [79, 80], [19, 39], [74, 88], [6, 98], [24, 7], [32, 59], [22, 60], [9, 19], [21, 14], [30, 8], [45, 88], [82, 10], [58, 64], [86, 8], [78, 65], [43, 57], [78, 21], [56, 60], [29, 46], [38, 4], [14, 62], [75, 50], [6, 65], [16, 91], [88, 58], [24, 82], [63, 87], [37, 26], [5, 38], [96, 7], [6, 22], [72, 30], [14, 10], [9, 65], [71, 82], [24, 66], [45, 46], [96, 95], [67, 42], [32, 24], [59, 16], [79, 96], [94, 91], [89, 27], [84, 96], [81, 4], [66, 19], [40, 69], [53, 71], [33, 60], [67, 79], [95, 49], [99, 79], [18, 25], [47, 50], [67, 20], [29, 24], [2, 18], [91, 85], [78, 21], [0, 85], [92, 27], [70, 66], [42, 70], [57, 13], [87, 95], [79, 33], [81, 98], [13, 74], [72, 54], [69, 52], [1, 38], [27, 33], [72, 68], [59, 63], [81, 66], [27, 84], [48, 28], [83, 4], [70, 0], [16, 49], [71, 78], [16, 11], [4, 52], [55, 3], [80, 81], [24, 74], [82, 94], [42, 56], [20, 12], [29, 0], [81, 10], [57, 36], [46, 33], [34, 60], [4, 30], [61, 32], [19, 14], [31, 83], [90, 74], [2, 92], [89, 83], [84, 18], [88, 14], [52, 82], [88, 37], [51, 11], [98, 16], [8, 22], [88, 79], [13, 89], [64, 42], [84, 78], [30, 10], [16, 82], [88, 63], [66, 1], [75, 26], [61, 90], [41, 9], [32, 38], [98, 64], [94, 11], [82, 94], [58, 63], [61, 48], [56, 94], [34, 14], [9, 53]]), true)
//Test.assertEquals(finishAll(150, [[75, 144], [60, 28], [93, 4], [83, 6], [3, 89], [12, 136], [135, 43], [102, 51], [72, 58], [16, 2], [12, 4], [63, 141], [109, 89], [112, 124], [102, 118], [75, 57], [19, 97], [103, 111], [107, 51], [13, 31], [27, 123], [104, 0], [5, 85], [110, 54], [65, 92], [3, 136], [111, 95], [47, 6], [135, 15], [105, 80], [0, 41], [81, 22], [41, 134], [115, 57], [126, 37], [45, 63], [31, 113], [40, 138], [144, 83], [100, 135], [37, 120], [0, 86], [99, 121], [84, 41], [77, 149], [105, 84], [122, 93], [43, 140], [122, 41], [139, 68], [75, 84], [61, 85], [30, 141], [138, 10], [110, 46], [127, 18], [146, 93], [2, 149], [89, 81], [93, 130], [140, 39], [14, 111], [25, 137], [28, 18], [113, 88], [64, 42], [75, 54], [89, 132], [107, 131], [116, 110], [95, 115], [85, 47], [112, 122], [72, 139], [72, 96], [137, 69], [148, 30], [43, 55], [103, 24], [19, 21], [34, 65], [83, 124], [34, 60], [126, 136], [88, 14], [43, 41], [48, 117], [41, 57], [143, 47], [131, 39], [91, 2], [11, 25], [36, 56], [17, 146], [147, 145], [28, 144], [81, 41], [24, 94], [97, 37], [27, 94], [148, 12], [2, 95], [93, 62], [54, 117], [90, 139], [53, 130], [53, 109], [101, 124], [113, 34], [18, 25], [135, 81], [35, 36], [30, 34], [76, 54], [3, 67], [40, 75], [109, 56], [138, 6], [13, 42], [62, 38], [68, 67], [17, 50], [71, 32], [142, 100], [117, 49], [26, 48], [99, 35], [9, 140], [56, 137], [87, 11], [100, 64], [104, 45], [0, 99], [3, 10], [139, 28], [85, 45], [55, 52], [99, 55], [132, 5], [15, 43], [34, 75], [133, 146], [35, 74], [75, 118], [80, 28], [80, 70], [29, 91], [40, 105], [78, 90], [118, 127], [45, 115], [102, 21], [102, 72], [112, 125], [1, 139], [55, 73], [125, 34], [115, 96], [124, 104], [23, 110], [3, 96], [54, 115], [119, 138], [140, 115], [113, 99], [42, 103], [109, 114], [12, 99], [17, 58], [96, 86], [24, 148], [41, 48], [24, 118], [109, 110], [52, 20], [55, 136], [102, 92], [110, 114], [139, 120], [82, 98], [69, 126], [51, 13], [102, 12], [129, 29], [146, 95], [146, 29], [129, 43], [49, 71], [58, 21], [85, 48], [127, 143], [139, 43], [27, 51], [2, 83], [39, 47], [29, 122], [114, 85], [12, 3], [123, 21]]), true)
//Test.assertEquals(finishAll(200, [[3, 169], [21, 167], [147, 11], [80, 172], [197, 71], [138, 57], [168, 146], [126, 124], [149, 91], [171, 95], [98, 194], [170, 74], [5, 187], [139, 123], [126, 71], [10, 70], [157, 112], [59, 1], [151, 141], [132, 156], [111, 106], [88, 20], [160, 22], [4, 119], [46, 14], [13, 199], [157, 14], [132, 51], [56, 148], [179, 178], [49, 190], [60, 5], [163, 192], [186, 22], [117, 14], [171, 37], [137, 14], [139, 134], [128, 174], [162, 151], [122, 100], [161, 87], [53, 14], [53, 147], [173, 126], [10, 76], [151, 197], [58, 156], [155, 44], [101, 80], [47, 168], [8, 25], [101, 13], [51, 118], [191, 39], [35, 92], [164, 145], [2, 121], [121, 68], [188, 193], [39, 38], [157, 49], [21, 198], [25, 82], [50, 160], [38, 9], [92, 42], [25, 142], [169, 42], [108, 197], [49, 198], [31, 107], [135, 56], [63, 151], [43, 83], [115, 36], [9, 92], [86, 63], [126, 187], [193, 51], [21, 145], [21, 36], [192, 118], [34, 95], [140, 125], [21, 53], [88, 29], [160, 69], [52, 30], [98, 161], [106, 109], [102, 24], [104, 133], [146, 194], [185, 95], [10, 17], [91, 139], [96, 116], [181, 51], [107, 95], [72, 178], [137, 27], [11, 79], [104, 174], [11, 167], [182, 86], [106, 196], [162, 133], [163, 78], [117, 93], [92, 12], [14, 43], [72, 18], [98, 128], [170, 148], [146, 107], [18, 159], [121, 173], [193, 12], [21, 114], [165, 48], [115, 28], [163, 57], [71, 1], [69, 165], [47, 120], [19, 185], [103, 60], [119, 7], [195, 127], [48, 21], [101, 149], [111, 7], [196, 82], [86, 144], [177, 117], [182, 133], [134, 43], [32, 88], [167, 153], [16, 109], [29, 120], [108, 60], [70, 152], [109, 42], [2, 115], [8, 87], [15, 22], [119, 184], [3, 168], [190, 68], [35, 163], [126, 186], [112, 34], [187, 141], [121, 3], [150, 145], [10, 139], [146, 84], [92, 10], [8, 67], [14, 52], [129, 101], [89, 171], [66, 71], [39, 155], [132, 26], [90, 27], [43, 89], [197, 137], [132, 124], [72, 1], [178, 171], [111, 166], [30, 98], [41, 6], [56, 125], [178, 134], [24, 133], [23, 97], [48, 91], [86, 143], [143, 178], [138, 17], [51, 42], [178, 142], [53, 15], [103, 20], [11, 0], [29, 105], [141, 74], [63, 108], [182, 44], [27, 187], [172, 194], [191, 182], [28, 174], [102, 147], [156, 166], [70, 177], [70, 11], [140, 76], [47, 170], [131, 100], [197, 92], [190, 55], [173, 191], [161, 72], [56, 24], [142, 83], [72, 31], [95, 121], [50, 85], [40, 16], [167, 38], [130, 193], [129, 111], [3, 86], [145, 88], [139, 43], [150, 80], [169, 131], [9, 107], [1, 108], [48, 161], [101, 50], [123, 31], [104, 49], [141, 6], [166, 43], [175, 181], [117, 61], [57, 89], [1, 89], [4, 147], [158, 135], [154, 61], [75, 180], [139, 3], [194, 38], [125, 102], [8, 184], [136, 130], [116, 119], [190, 30], [12, 171], [148, 159], [130, 16], [14, 15], [36, 20], [7, 59], [39, 4], [22, 87], [172, 50], [58, 30], [111, 3], [41, 15], [29, 111], [111, 99], [33, 94], [146, 166], [32, 129], [181, 158], [103, 19], [95, 177], [161, 10], [34, 184], [7, 2], [122, 176], [70, 82], [157, 89], [123, 79], [109, 74], [184, 80], [38, 106], [51, 180], [45, 8], [196, 88], [96, 86], [98, 109], [38, 142], [132, 2], [106, 150], [166, 79], [5, 36], [48, 25], [32, 198], [71, 104], [45, 153], [93, 56], [99, 96], [33, 189], [19, 106], [0, 131], [199, 156], [94, 81], [37, 172], [50, 182]]), false)
//// Copied from Evgeny SH

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Cutting a Sheet of Paper

//tags: geometry,numbers

//url: https://edabit.com/challenge/JB4h8KPMqfBpJcLYY

//Description:
//Suppose you have a sheet of paper measuring 8x10. You want to cut it exactly in half while maintaining its rectangular shape. You can do this in two ways. You can cut it in half preserving its long dimension of 10.
//We will call this a long cut:
//[8, 10] ➞ long cut ➞ [4, 10]
//Or you can cut it in half preserving its short dimension. This is a short cut:
//[8, 10] ➞ short cut ➞ [5, 8]
//If the shape happens to be a square, then a long cut and a short cut amount to the same thing:
//[12, 12] ➞ long cut ➞ [6, 12]
//[12, 12] ➞ short cut ➞ [6, 12]
//For this challenge, you are given two arguments. The first one is a string containing the cuts to be made to a sheet of paper in sequence from first to last. A long cut is designated by "L" and a short cut by "S".
//The second argument is the dimensions of the paper after all the cuts are made.
//You are to devise a function that will find the original dimensions of the sheet of paper before any cuts were made. There could be more than one possible answer so return your answer(s) as an array. If it is not possible to arrive at the final dimensions with the indicated cuts, return an empty array.
//Examples
//cuttingPaper("S", [3, 7]) ➞ [[3, 14]]
//
//cuttingPaper("L", [5, 7]) ➞ []
//
//cuttingPaper("S", [5, 7]) ➞ [[5, 14], [7, 10]]
//
//cuttingPaper("SSLS", [3, 4]) ➞ [[6, 32], [8, 24], [12, 16]]
//
//cuttingPaper("LSSLSL", [7, 53]) ➞ [[56, 424]]
//
//cuttingPaper("LSSSSS", [1, 2]) ➞ [[2, 64], [4, 32], [8, 16]]
//Notes
//Sort your answer with the smaller dimension in ascending order.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(cuttingPaper("S", [3, 7]),[[3, 14]])
//Test.assertSimilar(cuttingPaper("L", [5, 7]), [])
//Test.assertSimilar(cuttingPaper("S", [5, 7]), [[5, 14], [7, 10]])
//Test.assertSimilar(cuttingPaper("SSLS", [3, 4]), [[6, 32], [8, 24], [12, 16]])
//Test.assertSimilar(cuttingPaper("LSSLSL", [7, 53]), [[56, 424]])
//Test.assertSimilar(cuttingPaper("LSSSSS", [1,2]), [[2, 64], [4, 32], [8, 16]])
//Test.assertSimilar(cuttingPaper("SLLS", [2, 4]), [[8, 16]])
//Test.assertSimilar(cuttingPaper("LLSLSSL", [13, 79]), [[208, 632]])
//Test.assertSimilar(cuttingPaper("SLSLLSSLS", [2, 4]), [[32, 128], [64, 64]])
//Test.assertSimilar(cuttingPaper("SLSLLSSLS", [12, 13]), [[192, 416], [208, 384]])
//Test.assertSimilar(cuttingPaper("SLLS", [13, 23]), [])
//Test.assertSimilar(cuttingPaper("LSSSSSLL", [17, 73]), [[136, 2336], [146, 2176], [272, 1168], [292, 1088], [544, 584]])
//Test.assertSimilar(cuttingPaper("LSSSSLS", [5, 6]), [[20, 192], [24, 160], [40, 96], [48, 80]])
//Test.assertSimilar(cuttingPaper("LSLLLS", [5,11]),[])
//Test.assertSimilar(cuttingPaper("LLSSLSSS", [22, 43]), [[176, 1376], [344, 704], [352, 688]])
//Test.assertSimilar(cuttingPaper("LSSSLSSS", [8, 10]), [[32, 640], [40, 512], [64, 320], [80, 256], [128, 160]])
//Test.assertSimilar(cuttingPaper("LSLLLS", [1, 2]), [])
//Test.assertSimilar(cuttingPaper("LSSSLSSSSSL", [17, 53]), [[136, 13568], [212, 8704], [272, 6784], [424, 4352], [544, 3392], [848, 2176], [1088, 1696]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Calculate How Many Numbers with Unique Digits

//tags: loops,math,numbers

//url: https://edabit.com/challenge/7b5JnhTqpQq7Kdi54

//Description:
//The function is given an integer n. Count the numbers with unique digits in the range 0 <= num < pow(10, n).
//Examples
//numsWithUniqueDigits(2) ➞ 91
//// There are 100 numbers in total (from 0 to 99 inclusive).
//// The following 9 numbers should not be counted:
//// 11, 22, 33, 44, 55, 66, 77, 88, 99
//// Thus 100 – 9 ➞ 91
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numsWithUniqueDigits(0), 1)
//Test.assertEquals(numsWithUniqueDigits(1), 10)
//Test.assertEquals(numsWithUniqueDigits(2), 91)
//Test.assertEquals(numsWithUniqueDigits(3), 739)
//Test.assertEquals(numsWithUniqueDigits(4), 5275)
//Test.assertEquals(numsWithUniqueDigits(5), 32491)
//Test.assertEquals(numsWithUniqueDigits(6), 168571)
//Test.assertEquals(numsWithUniqueDigits(7), 712891)
//Test.assertEquals(numsWithUniqueDigits(8), 2345851)
//Test.assertEquals(numsWithUniqueDigits(9), 5611771)
//​
//// Copied from Evgeny SH (Python)

