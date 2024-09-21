

//title: Check Password Hash

//tags: arrays,conditions,cryptography,validation

//url: https://edabit.com/challenge/Ey7aH6GSx5ZzfQzpQ

//Description:
//Write a function that takes a username and password and checks the list userPassDb for a match. The list stores the passwords as a hash using the SHA1 algorithm. Return true for a match and false otherwise.
//Examples
//userPassDb = [{"username" : "myUsername", "pass_hash" : "5413ee24723bba2c5a6ba2d0196c78b3ee4628d1"}]
//
//checkPass("myUsername", "myPassword") ➞ true
//
//checkPass("myUsername", "wrongPassword") ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//userPassDb = [{"username" : "tony", "pass_hash" : "11725d3f4588325f1c90c50348624dcc55978f39"},
//  {"username" : "jason", "pass_hash" : "5a6d719f958b1a610712f8e342ef0a4dd4b80a35"},
//  {"username" : "lola", "pass_hash" : "7dda6e1b3988b488b0821e24732ca42d6b72f0ce"},
//  {"username" : "dan", "pass_hash" : "ec09d3b165aeabf77f5c9436c2d644b6e2f31ba9"}]
//​
//Test.assertEquals(checkPass("lola","jimbob"), true)
//Test.assertEquals(checkPass("tony", "hexagon"), true)
//Test.assertEquals(checkPass("jason", "tyrannosaurus"), true)
//Test.assertEquals(checkPass("dan", "FranklinPierce123"), true)
//Test.assertEquals(checkPass("somebot", "admin123"), false)
//Test.assertEquals(checkPass("lola","wrongpass"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Playback Duration

//tags: conditions,logic,numbers,validation

//url: https://edabit.com/challenge/o8TL7n98sAF5njC96

//Description:
//YouTube offers different playback speed options for users. This allows users to increase or decrease the speed of the video content. Given the actual duration and playback speed of the video, calculate the playback duration of the video.
//Examples
//playbackDuration("00:30:00", 2) ➞ "00:15:00"
//
//playbackDuration("01:20:00", 1.5) ➞ "00:53:20"
//
//playbackDuration("51:20:09", 0.5) ➞ "102:40:18"
//Notes
//Both durations will be in hh:mm:ss format.
//Playback speed will be up to one decimal place only.
//Time units are expected to be truncated/floored.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(playbackDuration("00:30:00", 2), "00:15:00")
//Test.assertEquals(playbackDuration("01:20:00", 1.5), "00:53:20")
//Test.assertEquals(playbackDuration("09:20:30", 1), "09:20:30")
//Test.assertEquals(playbackDuration("51:20:09", 0.5), "102:40:18")
//Test.assertEquals(playbackDuration("01:20:00", 2.5), "00:32:00")
//Test.assertEquals(playbackDuration("06:50:13", 3), "02:16:44")
//Test.assertEquals(playbackDuration("05:25:19", 1.5), "03:36:52")
//​
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Deadly Virus

//tags: algorithms,arrays,language_fundamentals,logic

//url: https://edabit.com/challenge/rnRot4rRofudkE72s

//Description:
//Mubashir needs your help to identify the spread of a deadly virus. He can provide you with the following parameters:
//A two-dimensional array persons, containing affected persons 'V' and unaffected persons 'P'.
//Number of hours n, each infected person is spreading the virus to one person up, down, left and right each hour.
//Your function should return the updated array containing affected and unaffected persons after n hours.
//Examples
//persons = [
//  ["P", "P", "P", "P", "P"],
//  ["V", "P", "P", "P", "P"],
//  ["P", "P", "P", "P", "P"],
//  ["P", "P", "P", "P", "P"],
//  ["P", "P", "P", "P", "P"]
//]
//
//
//deadlyVirus(persons, 0) ➞ [
//  ["P", "P", "P", "P", "P"],
//  ["V", "P", "P", "P", "P"],
//  ["P", "P", "P", "P", "P"],
//  ["P", "P", "P", "P", "P"],
//  ["P", "P", "P", "P", "P"]
//]
//
//deadlyVirus(persons, 1) ➞ [
//  ["V", "P", "P", "P", "P"],
//  ["V", "V", "P", "P", "P"],
//  ["V", "P", "P", "P", "P"],
//  ["P", "P", "P", "P", "P"],
//  ["P", "P", "P", "P", "P"]
//]
//
//deadlyVirus(persons, 2) ➞ [
//  ["V", "V", "P", "P", "P"],
//  ["V", "V", "V", "P", "P"],
//  ["V", "V", "P", "P", "P"],
//  ["V", "P", "P", "P", "P"],
//  ["P", "P", "P", "P", "P"]
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//var persons=[
//["P","P","P","P","P"],
//["V","P","P","P","P"],
//["P","P","P","P","P"],
//["P","P","P","P","P"],
//["P","P","P","P","P"]
//],n=0,
//answer=[
//["P","P","P","P","P"],
//["V","P","P","P","P"],
//["P","P","P","P","P"],
//["P","P","P","P","P"],
//["P","P","P","P","P"]
//]
//​
//Test.assertSimilar(deadlyVirus(persons, n), answer)
//​
//persons=[
//["P","P","P","P","P"],
//["V","P","P","P","P"],
//["P","P","P","P","P"],
//["P","P","P","P","P"],
//["P","P","P","P","P"]
//],n=1,
//answer=[

