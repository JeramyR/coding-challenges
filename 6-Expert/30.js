

//title: Kth String in Lexicographic Order

//tags: logic,math,sorting

//url: https://edabit.com/challenge/Bnw6RtThvQye8NCnr

//Description:
//Given a set s of allowed letters, an s-string is a string written using only those letters. For example, if s={"d","g"} then "dgggdgdggd" is an s-string but "dag" is not.
//For a fixed set s and max string size m (chosen so that we need only deal with finitely many strings) one can order those strings according to their dictionary/lexicographic order.
//For example, if s={"d","g"} and m=3, one obtains the strings:
//"d","g","dd","dg","gd","gg","ddd","ddg","dgd","dgg","gdd","gdg","ggd","ggg"
//...which, once reordered in lexicographic order, become:
//"d","dd","ddd","ddg","dg","dgd","dgg","g","gd","gdd","gdg","gg","ggd","ggg"
//Goal
//Write a function that when given:
//a set s of allowed letters;
//a max string size m;
//a position k;
//... returns the k-th s-string of max size m according to lexicographic order.
//Examples
//kthString({"d", "g"}, 3, 2) ➞ "dd"
//// According to the above, the 2-nd string in lexicographic order is "dd".
//
//kthString({"d", "g"}, 3, 10) ➞ "gdd"
//// According to the above, the 10-th string in lexicographic order is "gdd".
//
//kthString({"a", "e", "i"}, 2, 6) ➞ "ea"
//// The relevant strings, in lexicographic order, are:
//// "a", "aa", "ae", "ai", "e", "ea", ee", "ei", "i", "ia", "ie", "ii"
//// The 6-th string is "ea".
//Notes
//Since each test considers only finitely many strings, the challenge is valid only for small enough k (e.g. in the s={"d", "h"}, m=3 case above there are only 14 strings, so the challenge only works for 1<=k<=14). You are free to assume that all tests are valid.
//The empty string "" is not considered a valid string for the purposes of this challenge. However, you may find it helpful to regard the empty string "" as the 0-th string in lexicographic order (this can help with the algebra of the challenge).
//I believe that a brute force approach, such as generating all possible strings and then sorting them, is too slow and will not pass all the tests within the 12s time limit. However, more efficient solutions have ample time: for example, my posted solution runs in a fraction of a millisecond.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Original copied from Luis Pereira (Python)
//​
//Test.assertEquals(kthString(['d','g'], 3, 2), 'dd')
//Test.assertEquals(kthString(['d','g'], 3, 6), 'dgd')
//Test.assertEquals(kthString(['d','g'], 3, 10), 'gdd')
//Test.assertEquals(kthString(['a','e','i'], 2, 6), 'ea')
//Test.assertEquals(kthString(['a','b','c','d'], 3, 30), 'bbb')
//Test.assertEquals(kthString(['a','b','c','d'], 3, 4), 'aab')
//Test.assertEquals(kthString(['a','b','c','d'], 3, 7), 'ab')
//Test.assertEquals(kthString(['a','b','c','d'], 3, 22), 'b')
//Test.assertEquals(kthString(['a','b','c','d'], 4, 100), 'bacb')
//​
//Test.assertEquals(kthString(['h','n','o','p','t','y'], 6, 36825), 'python')
//Test.assertEquals(kthString(['a','b','d','e','i','t'], 6, 31185), 'edabit')
//​
//Test.assertEquals(kthString(['a','d','g','i','n','o','s','t','u'], 10, 331782710), 'astounding')
//Test.assertEquals(kthString(['c','e','l','n','t','x'], 9, 3708190), 'excellent')
//Test.assertEquals(kthString(['c','e','s','u'], 7, 15057), 'success')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Login System (Private Variables)

//tags: classes,scope

//url: https://edabit.com/challenge/cHLjt2gv4vbguXm4x

//Description:
//Emperor Palpatine wants you to create a new login system for the Death Star. Gotta keep out those pesky rebel scum somehow. To that end, your login system must do a number of things.
//New Users
//Firstly, we need to be able to create a new account for any users attempting to register. However, since we don't want those silly Jedi-loving rebels being able to register, only users with the official imperial password palpatineIsMyHomeboy should be able to register. Each new attempt to register a new account needs to either store or at least provide some information:
//The above passphrase
//The username
//The password (to be encrypted!)
//The user's rank
//The number of incorrect login attempts (initially, zero)
//Upon successfully creating a user, return "User added!". If the passphrase provided is incorrect, return "You rebel scum!". Otherwise, return "Invalid account!"
//Login
//Next, once the account is created, we need to be able to login into that account. You should be able to pass a username and password to the DeathStar.login() class method (see below for specific structure) and get either a "Welcome back username" or an "Invalid login". For each incorrect login, note the following section.
//Locked Accounts
//Each time a login fails, that account (if it exists) should keep track of the total number of failed logins. If that login fail number hits 4, any login attempts on that account should return "Account locked!".
//Each time you log in successfully, reset that incorrect login number to zero!
//Security
//This exercise requires private variables (see the resources tab if you need a refresher!)
//You should not be able to access a "password" property on the User class from outside. That is, listing DeathStar.users should return usernames and ranks, but that's it.
//You should only be able to access the users' list and the logged-in status if you're logged in. Otherwise, attempting to access either should just return "Not logged in!".
//Class Structure
//(a.k.a., the bit you're probably actually looking for!)
//This exercise requires two classes. Here's a brief breakdown of what each requires:
//DeathStar:
//- Public variables:
//    - None!
//
//- Methods:
//    - `addUser` (user,password,passphrase):
//        - creates new instance of the User class *if* the above requirements in "New users" are met
//
//    - `login` (user,password):
//        - if valid username, but too many failed logins:
//            - return "Account locked!".
//        - if valid username/password combo:
//            - set login to true
//            - reset this user's failed login attempts to 0
//            - return "Welcome back, <username>!"
//        - if invalid username/password combo:
//            - set login to false
//            - +1 to this user's failed login attemtps (if the user exists!)
//
//    - `logout`:
//        - should set "loggedIn" to false.
//
//- "dynamic" getter variables:
//    - `loggedIn`:
//        - should only return true if the user is logged in. In other words, you should *never* be able to read "DeathStar.loggedIn == false"! Otherwise, should return "Not logged in!".
//
//    - `userList`:
//        - similarly, should *only* return the users if we're logged in. Otherwise, should return "Not logged in!".
//User:
//- Private variables:
//   - password (encrypted)
//  - Number of incorrect logins
//
//- Non-private ('public') variables:
//    - `username`
//    - `rank`
//    - `locked` (was the account locked due to too many login attempts?)
//
//- Methods:
//    - isCorrectPassword(candidate):
//        - should compare to the user's password. Remember that you *should not* be able to directly access user.password, so simply doing `if (user.password==candidate)` outside your User class should *not* work!
//Notes
//There are some pretty huge security risks in this code. Can you spot any?
//For encrypting the password, use whatever method you want. The point is more that the password should never be publicly readable.
//If you're logged in (and thus the userList is accessible), note that it should not directly return the private DeathStar.userList variable (instead, it should return an array of {username, rank} objects). Can you think why?

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

////Test.assertEquals(actual, expected, message)
////Test.assertSimilar(actual, expected, message)
//console.log('---Class structure tests:---')
//console.log(`\nFirst, let's make sure you included all the correct classes *and* their methods/public vars\nDeathStar first`);
//Test.assertEquals(typeof DeathStar,'function','Could not find a DeathStar ES6 class or constructor function! Did the Maw Installation shut down?');
//const dsStructure = new DeathStar();
//Test.assertEquals(typeof dsStructure.login,'function','Cannot find login method for DeathStar!');
//Test.assertEquals(typeof dsStructure.logout,'function','Cannot find logout method for DeathStar!');
//Test.assertEquals(typeof dsStructure.addUser,'function','Cannot find logout method for DeathStar!');
//Test.assertEquals(typeof dsStructure.loggedIn,'string','Your class does not seem to have a "loggedIn" status variable!');
//Test.assertEquals(typeof dsStructure.userList,'string','The imperial user list records are inaccessible!');
//Test.assertSimilar(Object.keys(dsStructure),[],'The DeathStar class should expose zero public properties.')
//​
//​
//console.log(`\n---\nNow, let's check the User class:`)
//Test.assertEquals(typeof User,'function','Could not find a User ES6 class or constructor function! Are the Imperial Academies still recruiting?');
//const dsTestUser= new User('piett','abc123','admiral');
//Test.assertEquals(dsTestUser.username,'piett','Your User class does not seem to store or expose a username property!');
//Test.assertEquals(dsTestUser.rank,'admiral','Your User class does not seem to store or expose a rank property!');
//Test.assertEquals(typeof dsTestUser.isCorrectPassword,'function','How are we supposed to validate passwords without an "isCorrectPassword" method?');
//Test.assertSimilar(Object.keys(dsTestUser),['username','rank','locked'],'The User class should expose three public properties.')
//​
//console.log('\n\n---Account creation tests:---')
//​
//const DS1 = new DeathStar();

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Special String

//tags: data_structures,strings

//url: https://edabit.com/challenge/zC3QSpm57nHYvr956

//Description:
//A string is said to be a "special" string if either of two conditions are met:
//All of the characters are the same (e.g. "aaa").
//All characters, except the middle one, are the (e.g. "aadaa").
//A special substring is any substring of a string that meets one of those criteria. Given a string, determine how many special substrings can be formed from it.
//Given the string s = "mnonopoo" we have the following special substrings:
//[ "m", "n", "o", "n", "o", "p", "o", "o", "oo", "non", "ono", "opo" ]
//You just have to return the total number of that special substrings. In this case, it is 12. Another example is s = "aaaa", so the substrings will be:
//[ "a", "a", "a", "a", "aa", "aa", "aa", "aaa", "aaa", "aaaa" ]
//// The function will return 10
//Examples
//specialString("mnonopoo") ➞ 12
//
//specialString("asasd") ➞ 7
//
//specialString("aaaa") ➞ 10
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(specialString('aaaa'), 10)
//Test.assertEquals(specialString('mnonopoo'), 12)
//Test.assertEquals(specialString('asasd'), 7)
//Test.assertEquals(specialString('abcbaba'), 10)

