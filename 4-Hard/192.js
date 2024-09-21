

//title: Esthetic Numbers

//tags: arrays,loops,numbers

//url: https://edabit.com/challenge/geTZBEBHa6aSDLbCF

//Description:
//A number is Esthetic if, in any base from base2 up to base10, the absolute difference between every pair of its adjacent digits is constantly equal to 1.
//num = 441 (base10)
//// Adjacent pairs of digits:
//// |4, 4|, |4, 1|
//// The absolute difference is not constant
//// 441 is not Esthetic in base10
//
//441 in base4 = 12321
//// Adjacent pairs of digits:
//// |1, 2|, |2, 3|, |3, 2|, |2, 1|
//// The absolute difference is constant and is equal to 1
//// 441 is Esthetic in base4
//Given a positive integer num, implement a function that returns an array containing the bases (as integers from 2 up to 10) in which num results to be Esthetic, or a string "Anti-Esthetic" if no base makes num Esthetic.
//Examples
//esthetic(10) ➞ [2, 3, 8, 10]
//// 10 in base2 = 1010
//// 10 in base3 = 101
//// 10 in base8 = 12
//// 10 in base10 = 10
//
//esthetic(23) ➞ [3, 5, 7, 10]
//// 23 in base3 = 212
//// 23 in base5 = 43
//// 23 in base7 = 32
//// 23 in base10 = 23
//
//esthetic(666) ➞ [8]
//// 666 in base8 = 1232
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(esthetic(10), [2, 3, 8, 10], "Example #1")
//Test.assertSimilar(esthetic(23), [3, 5, 7, 10], "Example #2")
//Test.assertSimilar(esthetic(666), [8], "Example #3")
//Test.assertSimilar(esthetic(13), [5, 6])
//Test.assertSimilar(esthetic(1), [2, 3, 4, 5, 6, 7, 8, 9, 10])
//Test.assertSimilar(esthetic(9), [4, 7, 9, 10])
//Test.assertSimilar(esthetic(74), "Anti-Esthetic")
//Test.assertSimilar(esthetic(740), [4, 6, 9])
//Test.assertSimilar(esthetic(928), "Anti-Esthetic")
//Test.assertSimilar(esthetic(259259), [9])
//Test.assertSimilar(esthetic(883271), "Anti-Esthetic")
//Test.assertSimilar(esthetic(1080898), [7])
//Test.assertSimilar(esthetic(1080899), "Anti-Esthetic")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Spotify URL to URI Converter

//tags: regex,strings

//url: https://edabit.com/challenge/ydkKvFpRN6Fjb3Rwz

//Description:
//Write a function that converts Spotify URL's to URI's and vice versa.
//Examples
//spotiConv(`https://open.spotify.com/artist/4IZLJdhHCqAvT4pjn8TLH5`) ➞ `spotify:artist:4IZLJdhHCqAvT4pjn8TLH5`
//
//spotiConv(`spotify:album:3W7DQfYXpm7N4R5mv4lg3t`) ➞ `https://open.spotify.com/album/3W7DQfYXpm7N4R5mv4lg3t`
//
//spotiConv(`https://open.spotify.com/track/0bYg9bo50gSsH3LtXe2SQn`) ➞ `spotify:track:0bYg9bo50gSsH3LtXe2SQn`
//Notes
//Check the examples for the formatting.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//[["https://open.spotify.com/album/3W7DQfYXpm7N4R5mv4lg3t", "spotify:album:3W7DQfYXpm7N4R5mv4lg3t"], 
//["https://open.spotify.com/artist/5Js8zUcr9OCEyoWjw3joxY", "spotify:artist:5Js8zUcr9OCEyoWjw3joxY"], 
//["https://open.spotify.com/track/0bYg9bo50gSsH3LtXe2SQn", "spotify:track:0bYg9bo50gSsH3LtXe2SQn"], 
//["https://open.spotify.com/user/118542705/playlist/48zI8I2lp1S8jxLSYhORyJ", "spotify:user:118542705:playlist:48zI8I2lp1S8jxLSYhORyJ"], 
//["spotify:album:3W7DQfYXpm7N4R5mv4lg3t", "https://open.spotify.com/album/3W7DQfYXpm7N4R5mv4lg3t"], 
//["spotify:artist:5Js8zUcr9OCEyoWjw3joxY", "https://open.spotify.com/artist/5Js8zUcr9OCEyoWjw3joxY"], 
//["spotify:track:0bYg9bo50gSsH3LtXe2SQn", "https://open.spotify.com/track/0bYg9bo50gSsH3LtXe2SQn"], 
//["spotify:user:118542705:playlist:48zI8I2lp1S8jxLSYhORyJ", "https://open.spotify.com/user/118542705/playlist/48zI8I2lp1S8jxLSYhORyJ"]
//].forEach(c => Test.assertEquals(spotiConv(c[0]), c[1]));
//​
//// Double test:
//Test.assertEquals(spotiConv(spotiConv(`https://open.spotify.com/artist/4IZLJdhHCqAvT4pjn8TLH5`)), `https://open.spotify.com/artist/4IZLJdhHCqAvT4pjn8TLH5`);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Shiritori Game

//tags: classes,control_flow,games,strings

//url: https://edabit.com/challenge/6o5tYwwbY2ys7XTm4

//Description:
//This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:
//First character of next word must match last character of previous word.
//The word must not have already been said.
//Below is an example of a Shiritori game:
//["word", "dowry", "yodel", "leader", "righteous", "serpent"]  // valid!
//
//["motive", "beach"]  // invalid! - beach should start with "e"
//
//["hive", "eh", "hive"]  // invalid! - "hive" has already been said
//Write a Shiritori class that has two instance properties:
//words: an array of words already said.
//game_over: a boolean that is true if the game is over.
//and two instance methods:
//play: a method that takes in a word as an argument and checks if it is valid (the word should follow rules #1 and #2 above).
//
//If it is valid, it adds the word to the words array, and returns the words array.
//If it is invalid (either rule is broken), it returns "game over" and sets the game_over boolean to true.
//
//restart: a method that sets the words array to an empty one [] and sets the game_over boolean to false. It should return "game restarted".
//Examples
//my_shiritori = Shiritori.new()
//
//my_shiritori.play("apple") ➞ ["apple"]
//my_shiritori.play("ear") ➞ ["apple", "ear"]
//my_shiritori.play("rhino") ➞ ["apple", "ear", "rhino"]
//my_shiritori.play("corn") ➞ "game over"
//
//// Corn does not start with an "o".
//
//my_shiritori.words ➞  ["apple", "ear", "rhino"]
//
//// Words should be accessible.
//
//my_shiritori.restart() ➞ "game restarted"
//my_shiritori.words ➞ []
//
//// Words array should be set back to empty.
//
//my_shiritori.play("hostess") ➞ ["hostess"]
//my_shiritori.play("stash") ➞ ["hostess", "stash"]
//my_shiritori.play("hostess") ➞ "game over"
//
//// Words cannot have already been said.
//Notes
//The play method should not add an invalid word to the words array.
//You don't need to worry about capitalization or white spaces for the inputs for the play method.
//There will only be single inputs for the play method.
//Read more about Shiritori in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//my_shiritori = new Shiritori(); 
//​
//Test.assertEquals(my_shiritori.game_over, false)
//Test.assertSimilar(my_shiritori.play("apple"), ["apple"])
//Test.assertSimilar(my_shiritori.words, ["apple"])
//Test.assertSimilar(my_shiritori.play("ear"), ["apple", "ear"])
//Test.assertSimilar(my_shiritori.play("rhino"), ["apple", "ear", "rhino"])
//Test.assertSimilar(my_shiritori.play("ocelot"), ["apple", "ear", "rhino", "ocelot"])
//Test.assertEquals(my_shiritori.game_over, false)
//Test.assertEquals(my_shiritori.play("oops"), "game over", "does not follow Rule 1 (input word's first character = last words last character)")
//Test.assertEquals(my_shiritori.game_over, true)
//Test.assertSimilar(my_shiritori.words, ["apple", "ear", "rhino", "ocelot"], "oops should not be added to the array")
//​
//Test.assertEquals(my_shiritori.restart(), "game restarted")
//Test.assertSimilar(my_shiritori.words, [])
//Test.assertEquals(my_shiritori.game_over, false)
//Test.assertSimilar(my_shiritori.play("hostess"), ["hostess"])
//Test.assertEquals(my_shiritori.game_over, false)
//Test.assertSimilar(my_shiritori.play("stash"), ["hostess", "stash"])
//Test.assertEquals(my_shiritori.play("hostess"), "game over", "does not follow Rule 2 (word already exists in array)")
//Test.assertSimilar(my_shiritori.words, ["hostess", "stash"])

