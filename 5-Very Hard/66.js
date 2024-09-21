

//title: Postman Harry

//tags: arrays,logic,math

//url: https://edabit.com/challenge/c7bzYPRaXiA9YSjzA

//Description:
//Harry is a postman. He's got a post office with a size of n*m(a matrix / 2D array). Each slot at the 2D array represents the number of letters in that spot. Harry can only go right and down. He starts at (0, 0), and ends at (n-1, m-1). n represents the height, and m the length. Return the maximum amount of letters he can pick up. He can only pick up letters if he is on that spot.
//Examples
//harry([[5, 2], [5, 2]]) ➞ 12
//// (5+5+2)
//
//
//harry([
//  [1, 2, 3, 4, 5],
//  [6, 7, 8, 9, 10],
//  [11, 12, 13, 14, 15]
//]) ➞ 72
//// (1+6+11+12+13+14+15)
//
//
//harry([[]]) ➞ -1
//Notes
//If the matrix is empty, return -1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(harry([[]]),  -1)
//Test.assertEquals(harry([[5]]), 5)
//​
//Test.assertEquals(harry([
//  [9, 9, 9],
//  [0, 0, 9],
//  [0, 0, 9]
//]), 45)
//// >->->-V-V = 9 + 9 + 9 + 9 + 9 = 45
//                
//Test.assertEquals(harry([
//  [5, 2],
//  [5, 2],
//  [5, 2],
//  [5, 2]
//]), 22)
//// v-v-v-v-> = 5 + 5 + 5 + 5 + 2 = 22
//                        
//Test.assertEquals(harry([
//  [5, 6, 2, 5, 1],
//  [7, 2, 4, 1, 2],
//  [0, 7, 5, 2, 14],
//  [9, 5, 12, 5, 9],
//  [19, 5, 2, 6, 2]
//]), 55)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Block the Square in Tic Tac Toe

//tags: algorithms,games,logic

//url: https://edabit.com/challenge/kcZfxDswzrwA5kxFX

//Description:
//Create a function that returns a number which can block the player from reaching 3 in a row in a game of Tic Tac Toe. The number given as an argument will correspond to a grid of Tic Tac Toe: topleft is 0, topright is 2, bottomleft is 6, and bottomright is 8.
//Create a function that takes two numbers a, b and returns another number.
//This number should be the final one in a line to block the player from winning.
//Examples
//blockPlayer(0, 3) ➞ 6
//
//blockPlayer(0, 4) ➞ 8
//
//blockPlayer(3, 5) ➞ 4
//Notes
//The values given will always have two filled squares in a line.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(blockPlayer(0, 3), 6)
//Test.assertEquals(blockPlayer(0, 8), 4)
//Test.assertEquals(blockPlayer(4, 8), 0)
//Test.assertEquals(blockPlayer(2, 5), 8)
//Test.assertEquals(blockPlayer(1, 7), 4)
//Test.assertEquals(blockPlayer(0, 4), 8)
//Test.assertEquals(blockPlayer(3, 5), 4)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Name Count Equality

//tags: objects,strings

//url: https://edabit.com/challenge/KLyD6Ce6KkA2364sH

//Description:
//Create a function that counts the embedded names in the string and determines the equality. The names are embedded in a string of mixed special symbols and characters. The names to be counted to are adjoined with the ampersand symbol & and as the second parameter. See the following examples for more details.
//Examples
//equalCount("Peter!@#$Paul&*#Peter!--@|#$Paul#$Peter@|Paul$%^^Peter++Paul%$%^Peter++Paul#$#$#Peter@|Paul", "Peter&Paul")
//➞ {"Peter":6, "Paul": 6, "equality": true}
//
//equalCount("Elliot!@#$Sam!--@|#$Elliot@|Sam++Elliot$%^Elliot@|Sam!@#Elliot!@#$Sam!--@|#$Elliot", "Sam&Elliot")
//➞ {"Sam": 4, "Elliot": 6, "equality": false, "difference": 2}
//// "difference" key is added to the object if count is not equal.
//
//equalCount("Tim!@#$Kit&&*#Tim!--@|#$Kit#$%Tim@|Kit$%^^Tim++Kit%$%^Tim++Kit#$#$#Tim@|Kit", "Ken&Tom")
//➞ {"Ken": 0, "Tom": 0, "equality": true}
//Notes
//Make sure to return the result as an object with the corresponding keys seen in the above examples and the difference key when needed.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let strVector = [
//  ["Peter!@#$Paul&*#Peter!--@|#$Paul#$Peter@|Paul$%^^Peter++Paul%$%^Peter++Paul#$#$#Peter@|Paul", "Peter&Paul"],
//  ["Elliot!@#$Sam!--@|#$Elliot@|Sam++Elliot$%^Elliot@|Sam!@#Elliot!@#$Sam!--@|#$Elliot", "Sam&Elliot"],
//  ["Tim!@#$Kit&&*#Tim!--@|#$Kit#$%Tim@|Kit$%^^Tim++Kit%$%^Tim++Kit#$#$#Tim@|Kit", "Ken&Tom"],
//  ["Barnes!@#$Noble@|Barnes++Noble$%^Barnes!--@|#$Noble!@#$Barnes@|Noble!@#$Barnes++Noble", "Barnes&Noble"],
//  ["Dick!@#$Harry!--@|#$Dick@|Harry++Dick$%^Harry-$%^Dick!@#Harry!@#Dick!@*Harry", "Dick&Harry"],
//  ["$#%#%Henry+++&&***Hank!@#$%^Henry)(*&^%$)Henry$^$%^%$Henry+Hank$Henry%^$^Hank%^Henry", "Henry&Hank"],
//  ["$$$^Mary+++&&***John&###@@Mary|Mary;$$John:Mary*John--#@John^&&)(()", "John&Mary"]
//]
//let objRes = [
//  {"Peter": 6, "Paul": 6, "equality": true},
//  {"Sam": 4, "Elliot": 6, "equality": false, "difference": 2},
//  {"Ken": 0, "Tom": 0, "equality": true},
//  {"Barnes": 5, "Noble": 5, "equality": true},
//  {"Dick": 5, "Harry": 5, "equality": true},
//  {"Henry": 6, "Hank": 3, "equality": false, "difference": 3},
//  {"John": 4,"Mary": 4, "equality": true}
//]
//for (let i in strVector){
//  Test.assertSimilar(equalCount(...strVector[i]), objRes[i])
//}

