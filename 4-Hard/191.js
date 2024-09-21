

//title: Private Fields: Designing Twitter

//tags: classes,interview,objects,scope

//url: https://edabit.com/challenge/Nc75jSjR5nuBfx7TK

//Description:
//One of the most useful new features of JavaScript is private class fields. By writing a class like:
//class Person {
//  #secretMessage = "shhhh!"
//  constructor(name) {
//    this.name = name
//  }
//}
//we create a private property (#secretMessage) that is only accessible to stuff inside the class. So while:
// class Person {
//  #secretMessage = "shhhh!"
//  constructor(name) {
//    this.name = name
//    console.log("I can access the private field!",this.#secretMessage)
//  }
//  someClassMethod() {
//    console.log("And so can I!",this.#secretMessage)
//  }
//}
//will work, the following:
//class Person {
// #secretMessage = "shhhh!"
//  constructor(name) {
//   this.name = name
//  }
//}
//const bob = new Person("bob")
//console.log(bob.#secretMessage)
//will not. The property #secretMessage isn't "available" to outside scopes. So why is this a useful thing?
//Use Cases
//By using private fields (possibly in conjunction with getters and setters) we can, in essence, allow "protected" access to those fields. Two use cases where this might be important:
//Preventing direct modification:
//Imagine your class needs a particular array, myClassArray, to store some sort of information. However, you don't want external JavaScript to be able to use "normal" array methods to modify the array. Maybe you want to prevent pop()ing from the array. With a private field and a getter, we could do that:
//class Person {
// #myClassArray = []
// constructor(name) {
//   this.name = name
// }
// set arrItem(data) {
//   this.#myClassArray.push(data)
// }
// get arr() {
//   return [...this.#myClassArray]
// }
//}
//In the above example, attempting to run classInstance.myClassArray would return an error, and there's no way to run a .pop() method on the array from outside. The contents of the array are still visible - thanks to our getter get arr() - but running arr.pop() does not modify the internal array.
//Hiding fields: As the name "private" sort of implies, another major use of private fields is that they can be used to hide certain sensitive data. For example, if we want to store a password in our Person class above, one unsafe way of doing it would be as follows:
//class Person {
//  constructor(name, password) {
//    this.name = name
//    this.password = password
//  }
//}
//Even if we encrypt the password, it's still visible for anyone (or any program) to attempt to crack. Instead, we can use a private class field, with only a checkPassword() method and no getter or setter, to add password functionality without risk of exposing our password:
//class Person {
//  #password
//  constructor(name, password) {
//    this.name = name
//    this.#password = this.encryptMe(password)
//  }
//  encryptMe(str) {
//    // assume this encrypts a string
//    return encryptedString
//  }
//  checkPassword(candidate) {
//    return this.encryptMe(candidate) == this.#password
//  }
//}
//Notice that the #password field is never visible to the outside, and yet we can still use it for authentication!
//Alright, enough blabbering. What's your goal?
//Your Goal
//Design a Twitter class. Your class must:
//Private password: A private password string. Since this is private, you can name it whatever you want (as long as it's private!).
//Private tweets array: A private tweets array. Again, feel free to name this whatever you want (I should not have access to it!)
//Constructor(user, pass): A constructor that takes two arguments - a user and a pass(word) - and sets the publicly visible field this.user to the incoming user argument.
//Constructor sets password: It should also set the value of the private password field. Feel free to pass this through an encryption method if you're feeling extra fancy.
//checkPassword() Method: This method has one parameter - a string - and checks that parameter against the stored, private password, returning a boolean that basically says whether your supplied string matches the stored password.
//"blanked" password setter and getter: Attempting to read classInstance.password should just return four asterisks (****). Attempting to set the password (e.g., classInstance.password = "myNewPassword") should do nothing. That is, setting the password to a new value should not affect what "works" in the above password checker.
//tweet setter: This accepts a string and pushes the stringinto the private tweets array.
//tweet getter: Returns a copy of the array of tweets.
//tweetArray.pop() doesn't work: Running .pop() on your tweets array shouldn't 'work'. That is, if I have 5 tweets, run .pop(), and then get the length of my tweets array, it should still read 5.
//Notes
//There are a few variables/methods: for this exercise that will need to be named exactly:
//classInstance.user: the username.
//classInstance.tweet: The setter for a new tweet.
//classInstance.tweets: The getter for the list of tweets
//classInstance.checkPassword(str): Checks a candidate password against the stored password.
//classInstance.password: getter that just returns four asterisks (****)
//Notice the difference between "tweet" (the setter) and "tweets" (the getter)!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//console.log('\n---GENERAL:---\n')
//console.log('Did you actually create a Twitter class?')
//Test.assertEquals(typeof Twitter,'function',`I can't seem to find your Twitter class!`)
//​
//const luke = new Twitter('luke','empireSucks'); 
//​
//console.log('\n----\nDoes your Twitter class have one and only one public property, "user"?')
//Test.assertSimilar(Object.keys(luke),['user'],`You have too few or too many publicly visible properties!`)
//​
//console.log('\n---PASSWORD:---\n')
//console.log('\nDoes your Twitter class have a checkPassword method?')
//Test.assertEquals(typeof luke.checkPassword,'function',`I can't find a checkPassword method!`)
//​
//console.log('\n----\nDoes it return "true" for the correct password?')
//Test.assertEquals(luke.checkPassword('empireSucks'),true,`Your password checker doesn't seem to work with the correct password!`)
//​
//console.log('\n----\nDoes it return "false" for the wrong password?')
//Test.assertEquals(luke.checkPassword('palpatineIsMyHomie'),false,`Your password checker is too lenient!`)
//​
//console.log(`\n----\nI'm a malicious party, and I wanna see your password! Can I?`)
//Test.assertEquals(luke.password,'****',`Hey wait a minute! I shouldn't be able to see your password!`)
//​
//console.log(`\n----\nI see how it is. Well I'm just going to change your password!`)
//luke.password='palpatineIsMyHomie';
//Test.assertEquals(luke.checkPassword('palpatineIsMyHomie') || !luke.checkPassword('empireSucks'),false,`I shouldn't be able to change your password!`)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Calculate Elapsed Time

//tags: numbers,strings

//url: https://edabit.com/challenge/d9u29SPX4qWnyvnEF

//Description:
//Create a function that takes a timestamp for the start time sa and stop time st in HH:MM:SS format and returns the measured amount of elapsed time between start and stop times.
//Examples
//elapsedTime("11:00:00", "12:00:00") ➞ "01:00:00"
//
//elapsedTime("13:01:43", "21:41:57") ➞ "08:40:14"
//
//elapsedTime("17:34:43", "17:34:42") ➞ "23:59:59"
//Notes
//All times will be provided in 24 Hrs format.
//Consider Elapsed time will always be less than 24 Hrs.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(elapsedTime("11:00:00", "12:00:00"), "01:00:00") 
//Test.assertEquals(elapsedTime("13:01:43", "21:41:57"), "08:40:14")
//Test.assertEquals(elapsedTime("17:34:43", "17:34:42"), "23:59:59") 
//Test.assertEquals(elapsedTime("15:01:27", "02:51:33"), "11:50:06") 
//Test.assertEquals(elapsedTime("00:00:01", "17:34:42"), "17:34:41") 
//Test.assertEquals(elapsedTime("07:59:59", "08:00:00"), "00:00:01") 
//Test.assertEquals(elapsedTime("23:59:59", "00:00:00"), "00:00:01") 
//Test.assertEquals(elapsedTime("15:00:00", "15:01:00"), "00:01:00") 
//Test.assertEquals(elapsedTime("06:12:27", "10:34:13"), "04:21:46") 
//Test.assertEquals(elapsedTime("03:22:44", "18:04:11"), "14:41:27")
//​
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: List Up an Array of Strings in a Proper Way

//tags: arrays,strings

//url: https://edabit.com/challenge/hDc2zCxX8F3pJKMAd

//Description:
//Given an array of strings (nouns), list them up in a complete sentence.
//Examples
//sentence(["orange", "apple", "pear"]) ➞ "An orange, an apple and a pear."
//
//sentence(["keyboard", "mouse"]) ➞ "A keyboard and a mouse."
//
//sentence(["car", "plane", "truck", "boat"]) ➞ "A car, a plane, a truck and a boat."
//Notes
//The sentence starts with a capital letter.
//Do not change the order of the words.
//A/An should be correct in all places.
//Put commas between nouns, except between the last two (there you put "and").
//The sentence ends with a .
//There are at least two nouns given.
//Every given word is lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sentence(["banana", "apple", "orange"]), "A banana, an apple and an orange.")
//Test.assertEquals(sentence(["car", "plane"]), "A car and a plane.")
//Test.assertEquals(sentence(["fox", "wolf", "elephant", "cat"]), "A fox, a wolf, an elephant and a cat.")
//Test.assertEquals(sentence(["mom", "dad"]), "A mom and a dad.")
//Test.assertEquals(sentence(["school", "hospital", "library"]), "A school, a hospital and a library.")
//Test.assertEquals(sentence(["aa", "ee", "ii", "oo", "uu", "vv", "tt", "qw", "zz"]), "An aa, an ee, an ii, an oo, an uu, a vv, a tt, a qw and a zz.")

