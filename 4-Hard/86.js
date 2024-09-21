

//title: Shorthand for Key Signatures

//tags: formatting,strings

//url: https://edabit.com/challenge/mTT8M47D6EuEdTXLv

//Description:
//Given a string containing a key signature written in shorthand, create a function which replaces the shorthand with its full written name.
//A lowercase letter denotes a minor key.
//An uppercase letter denotes a major key.
//See the examples below for a more helpful guide!
//Examples
//fullKeyName("Prelude in C") ➞ "Prelude in C major"
//
//fullKeyName("Fugue in c") ➞ "Fugue in C minor"
//
//fullKeyName("Toccata and Fugue in d") ➞ "Toccata and Fugue in D minor"
//
//fullKeyName("Sonata in eb") ➞ "Sonata in Eb minor"
//Notes
//Write the letter name in uppercase (ignore b and #).
//Write "major" or "minor" in all lowercase (rather than "Major" or "Minor").
//Hint
//The first letter of the term should always be capital, even if it's "b".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fullKeyName("Prelude in C"), "Prelude in C major")
//Test.assertEquals(fullKeyName("Fugue in c"), "Fugue in C minor")
//Test.assertEquals(fullKeyName("Toccata and Fugue in d"), "Toccata and Fugue in D minor")
//Test.assertEquals(fullKeyName("a Fugue in c"), "a Fugue in C minor")
//Test.assertEquals(fullKeyName("Sonata in D"), "Sonata in D major")
//Test.assertEquals(fullKeyName("Opera in eb"), "Opera in Eb minor")
//Test.assertEquals(fullKeyName("Toccata in ab"), "Toccata in Ab minor")
//Test.assertEquals(fullKeyName("Toccata in f"), "Toccata in F minor")
//Test.assertEquals(fullKeyName("Symphony in C#"), "Symphony in C# major")
//Test.assertEquals(fullKeyName("Mass in c"), "Mass in C minor")
//Test.assertEquals(fullKeyName("Toccata in c"), "Toccata in C minor")
//Test.assertEquals(fullKeyName("Prelude in Ab"), "Prelude in Ab major")
//Test.assertEquals(fullKeyName("Concerto in f#"), "Concerto in F# minor")
//Test.assertEquals(fullKeyName("Symphony in eb"), "Symphony in Eb minor")
//Test.assertEquals(fullKeyName("Sonata in a"), "Sonata in A minor")
//Test.assertEquals(fullKeyName("Sonata in e"), "Sonata in E minor")
//Test.assertEquals(fullKeyName("Concerto in c#"), "Concerto in C# minor")
//Test.assertEquals(fullKeyName("Opera in f"), "Opera in F minor")
//Test.assertEquals(fullKeyName("Mass in c"), "Mass in C minor")
//Test.assertEquals(fullKeyName("Symphony in D"), "Symphony in D major")
//Test.assertEquals(fullKeyName("Fugue in d"), "Fugue in D minor")
//Test.assertEquals(fullKeyName("Fugue in eb"), "Fugue in Eb minor")
//Test.assertEquals(fullKeyName("Fugue in F"), "Fugue in F major")
//Test.assertEquals(fullKeyName("Mass in c#"), "Mass in C# minor")
//Test.assertEquals(fullKeyName("Requiem in C"), "Requiem in C major")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Extending the Array Prototype

//tags: arrays,language_fundamentals,math

//url: https://edabit.com/challenge/NDRSf8SFHz3rHS4Qm

//Description:
//Write the following functions to extend the array prototype, by adding the methods:
//square()
//cube()
//divisible_by(x)
//strictly_above(x)
//strictly_below(x)
//Examples
//[1, 2, 3].square ➞ [1, 4, 9]
//
//[1, 2, 3].cube ➞ [1, 8, 27]
//
//[1, 2, 3, 4].divisible_by(2) ➞ [2, 4]
//
//[1, 2, 3, 4].strictly_above(1) ➞ [2, 3, 4]
//
//[1, 2, 3, 4].strictly_below(2) ➞ [1]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar([1, 2, 3].square(), [1, 4, 9])
//Test.assertSimilar([1, 2, 3].cube(), [1, 8, 27])
//Test.assertSimilar([1, 2, 3, 4].divisible_by(2), [2, 4])
//Test.assertSimilar([1, 2, 3, 4].strictly_above(1), [2, 3, 4])
//Test.assertSimilar([1, 2, 3, 4].strictly_below(2), [1])
//​
//Test.assertSimilar([-2, -1, 0, 1].square(), [4, 1, 0, 1])
//Test.assertSimilar([-2, -1, 0, 1].cube(), [-8, -1, 0, 1])
//Test.assertSimilar([-2, -1, 0, 1].divisible_by(4), [0])
//Test.assertSimilar([-2, -1, 0, 1].strictly_above(-1), [0, 1])
//Test.assertSimilar([-2, -1, 0, 1].strictly_below(1), [-2, -1, 0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Ready, Set... Get!

//tags: classes,data_structures,functional_programming

//url: https://edabit.com/challenge/2FF7RKw9RLwc3EBY9

//Description:
//You have to build a rudimentary architecture that will simulate a system of XP points distribution among two students that solve a series of given challenges on Edabit.
//Step 1: Build a class Challenge
//The constructor parameters are id and level. The id will be the numerical identifier of the challenge, and level will be a code made of two uppercased letters:
//"VE" = "Very Easy"
//"EA" = "Easy"
//"ME" = "Medium"
//"HA" = "Hard"
//"VH" = "Very Hard"
//"EX" = "Expert"
//Step 2: Build a method for class Challenge
//The name of the method inside class Challenge is points().
//The method must return the amount of points earned solving a challenge, based on the level of the challenge:
//VE = 5 XP
//EA = 10 XP
//ME= 20 XP
//HA= 40 XP
//VH = 80 XP
//EX = 120 XP
//Step 3: Build a class User
//The constructor parameters are name, xp and log. The name will be, trivially, the username. The xp is the accumulator that stores the XP points earned. The log is a sort of diary of the user: is an array that will store the id of the challenges solved by the user.
//Step 4: Build a method for the class User
//The name of the method to implement inside the class User is newSolvedChallenge() and as a parameter, it will accept an object of the Challenge class.
//The method must increment the xp of the user and store the challenge id into the array log.
//Step 5: Declare the instances needed for the tests
//Now that everything is ready, you have to set the exercise and declare the instances of the created classes, for sustaining the tests that are made. Start with the users declarations, they are two:
//user1 ➞ name = "Madam" | xp = 0 | log = []
//user2 ➞ name = "Steve" | xp = 0 | log = []
//Now, declare the challenges, they are six:
//challenge1 ➞ id = 1 | level = "VE";
//challenge2 ➞ id = 2 | level = "EA";
//challenge3 ➞ id = 3 | level = "ME";
//challenge4 ➞ id = 4 | level = "HA";
//challenge5 ➞ id = 5 | level = "VH";
//challenge6 ➞ id = 6 | level = "EX";
//Finally, you have to declare which are the challenges solved by the users, using the setter that you have implemented before:
//Madam solves the following challenges, in the order:
//
//challenge1 , challenge4 , challenge6
//
//Steve solves the,following challenges, in the order:
//
//challenge5 , challenge3, challenge2
//Step 6: The testing mechanics
//Tests will verify if after calling the properties and methods of the instance created by you, an expected result is returned. So, you don't have to return a result, but just being sure that everything is set according to Instructions.
//Examples
//user1.name ➞ "Madam"
//
//user2.xp ➞ 110
//// Steve has solved challenges 5, 3 and 2 (80 + 20 + 10 points)
//
//user1.log ➞ [1, 4, 6]
//// Remember to respect the order given in Instructions for to store data into the log
//
//challenge4.level ➞ "HA"
//
//challenge3.id ➞ 3
//
//challenge1.points ➞ 5
//Notes
//When implementing methods you can use normal functions, or a set/get combination. See the Resources to get an overall idea about the difference between these two procedures, and if you wish to leave your opinion, the Comments tab.
//If you want to go deeper, see a negative point of view about setters & getters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Test user1
//Test.assertEquals(user1.name, "Madam")
//Test.assertEquals(user1.xp, 165)
//Test.assertSimilar(user1.log, [1, 4, 6])
//// Test user2
//Test.assertEquals(user2.name, "Steve")
//Test.assertEquals(user2.xp, 110)
//Test.assertSimilar(user2.log, [5, 3, 2])
//// Test challenges
//Test.assertEquals(challenge1.id, 1);
//Test.assertEquals(challenge2.level, "EA")
//Test.assertEquals(challenge3.points, 20)
//Test.assertEquals(challenge4.id, 4)
//Test.assertEquals(challenge5.level, "VH")
//Test.assertEquals(challenge6.points, 120)
//// Trivial tests
//Test.assertEquals(user1.xp > user2.xp, true)
//Test.assertEquals(challenge6.points < challenge1.points, false)

