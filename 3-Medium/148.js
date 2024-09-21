

//title: RegEx: Boundary Assertions IV

//tags: language_fundamentals,regex,strings

//url: https://edabit.com/challenge/rRdMJ5nasKk9dogm5

//Description:
//You've just webscraped a web page and stored it in a string. In the string there is a bullet list of states that voted for President Trump's impeachment:
//const str = `
//* Texas = no
//* California = yes
//* Florida = yes
//* Michigan = no
//`
//Add a positive lookahead assertion so a regex match would output the states that voted yes
//Notes
//You must use a positive lookahead assertion (check the Resources tab for info).
//This is fake data and used only for educational purposes.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const validate = (REGEXP) => {
//   if(!/\(\?\=/.test(String(REGEXP))) return () => "need lookahead assertion"
//   return function testReg(str) {
//     return str.match(REGEXP)
//   }
//} 
//const str = `
//* Texas = no 
//* California = yes  
//* Florida = yes 
//* Michigan = no 
//`
//​
//const testStr = validate(REGEXP) 
//​
//Test.assertNotEquals(testStr(str), "need lookahead assertion", "You need to use a lookahead in your expressions.")
//Test.assertSimilar(testStr(str), ['California', 'Florida'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count the Smiley Faces :)

//tags: loops,regex,strings

//url: https://edabit.com/challenge/pFbR2RAjeJmrf9tua

//Description:
//Create a function that takes an array of strings and return the number of smiley faces contained within it. These are the components that make up a valid smiley:
//A smiley has eyes. Eyes can be : or ;.
//A smiley has a nose but it doesn't have to. A nose can be - or ~.
//A smiley has a mouth which can be ) or D.
//No other characters are allowed except for those mentioned above.
//Examples
//countSmileys([":)", ";(", ";}", ":-D"]) ➞ 2
//
//countSmileys([";D", ":-(", ":-)", ";~)"]) ➞ 3
//
//countSmileys([";]", ":[", ";*", ":$", ";-D"]) ➞ 1
//Notes
//You will always be given an array as input.
//An empty array should return 0.
//The order of each facial element will always be the same.
//Noses are optional (e.g. :) and :-) are both valid).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countSmileys([":)", ";(", ";}", ":-D"]), 2);
//Test.assertEquals(countSmileys([";D", ":-(", ":-)", ";~)"]), 3);
//Test.assertEquals(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
//Test.assertEquals(countSmileys([";(", ":>", ":}", ":]"]), 0);
//Test.assertEquals(countSmileys([":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)",]), 13);
//Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
//Test.assertEquals(countSmileys([':-)',';~D',':-D',':_D']), 3);
//Test.assertEquals(countSmileys([':---)','))',';~~D',';D']), 1);
//Test.assertEquals(countSmileys([';~)',':)',':-)',':--)']), 3);
//Test.assertEquals(countSmileys([':o)',':--D',';-~)']), 0);
//Test.assertEquals(countSmileys([]), 0, "An empty array should return 0");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Likes vs. Dislikes

//tags: arrays,conditions,logic,loops

//url: https://edabit.com/challenge/MNKfYEKghbKjxYbzb

//Description:
//YouTube currently displays a like and a dislike button, allowing you to express your opinions about particular content. It's set up in such a way that you cannot like and dislike a video at the same time.
//There are two other interesting rules to be noted about the interface:
//Pressing a button, which is already active, will undo your press.
//If you press the like button after pressing the dislike button, the like button overwrites the previous "dislike" state. The same is true for the other way round.
//Create a function that takes an array of button inputs and returns the final state.
//Examples
//likeOrDislike(["Dislike"]) ➞ "Dislike"
//
//likeOrDislike(["Like", "Like"]) ➞ "Nothing"
//
//likeOrDislike(["Dislike", "Like"]) ➞ "Like"
//
//likeOrDislike(["Like", "Dislike", "Dislike"]) ➞ "Nothing"
//Notes
//If no button is currently active, return "Nothing".
//If the array is empty, return "Nothing".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(likeOrDislike(['Dislike']), 'Dislike')
//Test.assertEquals(likeOrDislike(['Like', 'Like']), 'Nothing')
//Test.assertEquals(likeOrDislike(['Dislike', 'Dislike']), 'Nothing')
//Test.assertEquals(likeOrDislike(['Like', 'Like', 'Like']), 'Like')
//Test.assertEquals(likeOrDislike(['Like', 'Dislike']), 'Dislike')
//Test.assertEquals(likeOrDislike(['Dislike', 'Like']), 'Like')
//Test.assertEquals(likeOrDislike(['Like', 'Dislike', 'Dislike']), 'Nothing')
//Test.assertEquals(likeOrDislike(['Dislike', 'Like', 'Dislike']), 'Dislike')
//Test.assertEquals(likeOrDislike([]), 'Nothing')
//Test.assertEquals(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike']), 'Dislike')
//Test.assertEquals(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Like', 'Like']), 'Like')
//Test.assertEquals(likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike', 'Dislike', 'Like', 'Like', 'Like', 'Dislike', 'Dislike']), 'Nothing')
//Test.assertEquals(likeOrDislike(['Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike', 'Like', 'Dislike','Like', 'Dislike', 'Like', 'Dislike']), 'Dislike')
//​
//// Author: Joshua Señoron

