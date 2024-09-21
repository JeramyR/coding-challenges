

//title: Learn Lodash (4): _.dropRight, Drop the Last Elements of an Array

//tags: arrays

//url: https://edabit.com/challenge/LhBwyiMeWiADZhydE

//Description:
//According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.
//This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.
//Examples
//dropRight([1, 2, 3]) ➞ [1, 2]
//
//dropRight([1, 2, 3], 2) ➞ [1]
//
//dropRight([1, 2, 3], 5) ➞ []
//
//dropRight([1, 2, 3], 0) ➞ [1, 2, 3]
//Notes
//Do not attempt to import lodash; you are simply writing your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(dropRight([1, 2, 3]), [1, 2])
//Test.assertSimilar(dropRight([1, 2, 3], 2), [1])
//Test.assertSimilar(dropRight([1, 2, 3], 5), [])
//Test.assertSimilar(dropRight([1, 2, 3], 0), [1, 2, 3])
//Test.assertSimilar(dropRight(["banana", "orange", "watermelon", "mango"], 2), ["banana", "orange"])
//Test.assertSimilar(dropRight([], 2), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Chat Room Status

//tags: arrays,control_flow

//url: https://edabit.com/challenge/hscAGyt4iNZ3PKy3g

//Description:
//Write a function that returns the number of users in a chatroom based on the following rules:
//If there is no one, return "no one online".
//If there is 1 person, return "user1 online".
//If there are 2 people, return "user1 and user2 online".
//If there are n>2 people, return the first two names and add "and n-2 more online".
//For example, if there are 5 users, return:
//"user1, user2 and 3 more online"
//Examples
//chatroomStatus([]) ➞ "no one online"
//
//chatroomStatus(["paRIE_to"]) ➞ "paRIE_to online"
//
//chatroomStatus(["s234f", "mailbox2"]) ➞ "s234f and mailbox2 online"
//
//chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])
//➞ "pap_ier44, townieBOY and 4 more online"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(chatroomStatus([]), "no one online")
//Test.assertSimilar(chatroomStatus(["becky325"]), "becky325 online")
//Test.assertSimilar(chatroomStatus(["becky325", "malcolm888"]), "becky325 and malcolm888 online")
//Test.assertSimilar(chatroomStatus(["becky325", "malcolm888", "fah32fa"]), "becky325, malcolm888 and 1 more online")
//Test.assertSimilar(chatroomStatus(["paRIE_to"]), "paRIE_to online")
//Test.assertSimilar(chatroomStatus(["s234f", "mailbox2"]), "s234f and mailbox2 online")
//Test.assertSimilar(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]), "pap_ier44, townieBOY and 4 more online")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Regex Series: 5-Digit Zip Code

//tags: regex,strings

//url: https://edabit.com/challenge/zmyuLfHcbJeTef5yr

//Description:
//Write a regular expression that matches a string if and only if it is a valid zip code.
//Examples
//"32554" ➞ true
//
//"92 342" ➞ false
//// Invalid: contains a whitespace
//
//"9@342" ➞ false
//// Invalid: contains a non-numeric character
//
//"923444" ➞ false
//// Invalid: length is not 5
//Notes
//Zipcodes must be 5 digits long exactly and only contain numbers.
//Not allowed: non-numeric characters or whitespaces.
//This challenge is designed to use Regex only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//describe("Valid zips", function() {
//  Test.expect(validate("81442"), "92345 is a valid zip."); 
//  Test.expect(validate("81442"), "81442 is a valid zip."); 
//  Test.expect(validate("33789"), "33789 is a valid zip."); 
//  Test.expect(validate("42531"), "42531 is a valid zip."); 
//})
//​
//describe("Zips cannot contain other characters.", function() {
//  Test.expect(!validate("9a345", "9a345 contains a letter."));
//  Test.expect(!validate("%2345"), "%2345 contains a special character."); 
//})
//​
//describe("Zips must have a length of 5.", function() {
//  Test.expect(!validate("933345"), "933345 is too long.");
//  Test.expect(!validate("2345", "too short"), "2345 is too short."); 
//})
//​
//describe("Zips cannot have whitespaces.", function() {
//  Test.expect(!validate(" 93345"), "No leading whitespaces.");
//  Test.expect(!validate("23455 "), "No trailing whitespaces.");
//  Test.expect(!validate("23 455"), "No middle whitespaces."); 
//})
//​
//function validate(zip) {
//  return x.test(zip); 

