

//title: Get Student with Best Test Avg.

//tags: arrays,loops,objects,sorting

//url: https://edabit.com/challenge/nSg24HbusyCQKn9xk

//Description:
//Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name. You do not need to return their Test Average.
//Examples
//getBestStudent({
//  John: [100, 90, 80],
//  Bob: [100, 70, 80]
//}) ➞ "John"
//
//// John's avg = 90
//// Bob's avg = 83.33
//
//getBestStudent({
//  Susan: [67, 84, 75, 63],
//  Mike: [87, 98, 64, 71],
//  Jim: [90, 58, 73, 86]
//}) ➞ "Mike"
//Notes
//All students in an object will have the same amount of test scores. So no student will have taken more tests than another.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getBestStudent({
//  John: [100, 90, 80],
//  Bob: [100, 70, 80]
//}), "John", "Example #1")
//​
//Test.assertSimilar(getBestStudent({
//  Susan: [67, 84, 75, 63],
//  Mike: [87, 98, 64, 71],
//  Jim: [90, 58, 73, 86]
//}), "Mike", "Example #2")
//​
//Test.assertSimilar(getBestStudent({
//  Tim: [93, 84, 49, 71, 76, 83],
//  Nick: [88, 91, 74, 72, 63, 68],
//  Brad: [100, 94, 72, 64, 58, 81],
//  Annie: [79, 93, 82, 82, 63, 87]
//}), "Annie")
//​
//Test.assertSimilar(getBestStudent({
//  Eddie: [65, 85, 72, 76],
//  Brock: [55, 97, 82, 91],
//  Jessica: [78, 62, 79, 99]
//}), "Brock")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: YouTube Video ID Extractor

//tags: regex,strings

//url: https://edabit.com/challenge/AK85Q669ArEKstGjT

//Description:
//Given a YouTube URL, extract the video ID and return it as a string.
//Examples
//youtubeId("https://www.youtube.com/watch?v=XPEr1cArWRg") ➞ "XPEr1cArWRg"
//
//youtubeId("https://youtu.be/BCDEDi5gDPo") ➞ "BCDEDi5gDPo"
//
//youtubeId("https://youtube.com/watch?t=4m40s&v=vxP3bY-XxY4") ➞ "vxP3bY-XxY4"
//Notes
//All input are valid YouTube links.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(youtubeId("https://www.youtube.com/watch?v=XPEr1cArWRg"), "XPEr1cArWRg")
//Test.assertEquals(youtubeId("http://www.youtube.com/watch?v=-SNQGyVW_YI&t=8871"), "-SNQGyVW_YI")
//Test.assertEquals(youtubeId("https://youtube.com/watch?t=4m40s&v=vxP3bY-XxY4"), "vxP3bY-XxY4")
//Test.assertEquals(youtubeId("www.youtube.com/watch?list=PL3QZUm48uWnsdFakp3A2fI-NzmfH1jyQe&v=yv56ncTdTmU&index=8"), "yv56ncTdTmU")
//Test.assertEquals(youtubeId("https://youtu.be/BCDEDi5gDPo"), "BCDEDi5gDPo")
//Test.assertEquals(youtubeId("https://www.youtube.com/watch?feature=youtu.be&v=jOxnoDi9IYg&t=3311s"), "jOxnoDi9IYg")
//Test.assertEquals(youtubeId("https://www.youtube-nocookie.com/embed/2w9SQjdn9U4"), "2w9SQjdn9U4")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Poker Flush?

//tags: arrays,conditions,control_flow,games,regex

//url: https://edabit.com/challenge/StoCYdQvX2i7zaNLY

//Description:
//Create a function that takes in two arrays and determines whether there exists a flush.
//The first array represents the 5 cards dealt on the table.
//The second array represents the 2 cards in your hand.
//Notation: card number and suit (abbreviated as S = Spades, H = Hearts, D = Diamonds, C = Clubs) separated by an underscore.
//Examples
//checkFlush(["A_S", "J_H", "7_D", "8_D", "10_D"], ["J_D", "3_D"]) ➞ true // diamond flush
//
//checkFlush(["10_S", "7_S", "9_H", "4_S", "3_S"], ["K_S", "Q_S"]) ➞ true // spade flush
//
//checkFlush(["3_S", "10_H", "10_D", "10_C", "10_S"], ["3_S", "4_D"]) ➞ false
//Notes
//Hint: If there aren't at least 3 cards of the same suit on the table, there is zero chance of there being a flush.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(checkFlush(['A_S', 'J_H', '7_D', '8_D', '10_D'], ['J_D', '3_D']), true);
//Test.assertEquals(checkFlush(['10_S', '7_S', '9_H', '4_S', '3_S'], ['K_S', 'Q_S']), true);
//Test.assertEquals(checkFlush(['3_S', '10_H', '10_D', '10_C', '10_S'], ['3_S', '4_D']), false);
//Test.assertEquals(checkFlush(['8_H', '10_H', '10_D', 'J_H', '10_S'], ['5_D', 'Q_H']), false);

