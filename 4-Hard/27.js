

//title: Burglary Series (22): Sign All

//tags: arrays,loops,objects

//url: https://edabit.com/challenge/xrsiqZKrMoT2skt9i

//Description:
//You finally receive the entire stolen list document from the police. You need to sign at the end of the document but also each sub-list corresponding to each room in your house where the items were stolen.
//You are given two arguments, one object with nested objects and a string that corresponds to your name. The object already contains several signature properties, one on the root, the others on each nested object. Return an object with all containing signature values set to your name.
//Examples
//const obj = {
//    kitchen: {
//      painting: 100,
//      piano: 1000,
//      signature: "",
//    },
//    bathroom: {
//      stereo: 220,
//      signature: "",
//    },
//    signature: "",
//  };
//
//signAll(obj, "Rocky") ➞ {
//    kitchen: {
//      painting: 100,
//      piano: 1000,
//      signature: "Rocky",  // changed
//    },
//    bathroom: {
//      stereo: 220,
//      signature: "Rocky",  // changed
//    },
//    signature: "Rocky",  // changed
//}
//Notes
//If you have suggestions on how to present or further test this challenge please leave a comment.
//This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const name = Test.randomToken()
//const obj = {
//    kitchen: {
//      painting: 100,
//      piano: 1000,
//      signature: "",
//    },
//    signature: "",
//  };
//const obj2 = {
//    bathroom: {
//      stereo: 220,
//      signature: "",
//    },
//    cellar: {
//      mirror: 10,
//      broom: 90,
//      signature: "",
//    },
//    signature: "",
//  };
//​
//Test.assertSimilar(signAll(obj, name), {
//    kitchen: {
//      painting: 100,

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Any Prime Number in Range

//tags: algebra,algorithms,math,numbers

//url: https://edabit.com/challenge/mLLqf6apACKBLF3Pe

//Description:
//Create a function that returns true if there's at least one prime number in the given range (n1 to n2 (inclusive)), false otherwise.
//Examples
//primeInRange(10, 15) ➞ true
//// Prime numbers in range: 11, 13
//
//primeInRange(62, 66) ➞ false
//// No prime numbers in range.
//
//primeInRange(3, 5) ➞ true
//// Prime numbers in range: 3, 5
//Notes
//n2 is always greater than n1.
//n1 and n2 are always positive.
//0 and 1 aren't prime numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [intVector, resVector] = [
//  [[10, 12], [62, 66], [441, 445], [0, 2], [20, 22], [4444, 5555], [114, 120]],
//  [true, false, true, true, false, true, false]
//]
//for (let i in intVector) Test.assertEquals(primeInRange(...intVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Multiplication Table

//tags: algorithms,arrays,language_fundamentals,math,numbers

//url: https://edabit.com/challenge/EpwHHdFF6EABASmhL

//Description:
//Your task, is to create N x N multiplication table, of size n provided in parameter.
//For example, when n is 5, the multiplication table is:
//1, 2, 3, 4, 5
//2, 4, 6, 8, 10
//3, 6, 9, 12, 15
//4, 8, 12, 16, 20
//5, 10, 15, 20, 25
//This example will result in:
//[[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]
//Examples
//multiplicationTable(1) ➞ [[1]]
//
//multiplicationTable(3) ➞ [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(multiplicationTable(1), [[1]])
//Test.assertSimilar(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]])
//Test.assertSimilar(multiplicationTable(5), [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]])
//Test.assertSimilar(multiplicationTable(20), [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40], [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60], [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120], [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126, 133, 140], [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160], [9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135, 144, 153, 162, 171, 180], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220], [12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240], [13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 182, 195, 208, 221, 234, 247, 260], [14, 28, 42, 56, 70, 84, 98, 112, 126, 140, 154, 168, 182, 196, 210, 224, 238, 252, 266, 280], [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300], [16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 304, 320], [17, 34, 51, 68, 85, 102, 119, 136, 153, 170, 187, 204, 221, 238, 255, 272, 289, 306, 323, 340], [18, 36, 54, 72, 90, 108, 126, 144, 162, 180, 198, 216, 234, 252, 270, 288, 306, 324, 342, 360], [19, 38, 57, 76, 95, 114, 133, 152, 171, 190, 209, 228, 247, 266, 285, 304, 323, 342, 361, 380], [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400]])

