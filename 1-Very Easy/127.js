

//title: Fullname and Email

//tags: classes,language_fundamentals,strings

//url: https://edabit.com/challenge/kGLhgwGaLJsCMS7wS

//Description:
//Create the instance properties fullname and email in the Employee class. Given a person's first and last names:
//Form the fullname by simply joining the first and last name together, separated by a space.
//Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.
//Examples
//emp1 = Employee("John", "Smith")
//emp1.fullname ➞ "John Smith"
//
//emp2 = Employee("Mary",  "Sue")
//emp2.email ➞ "mary.sue@company.com"
//
//emp3 = Employee("Antony", "Walker")
//emp3.firstname ➞ "Antony"
//Notes
//The properties firstname and lastname are already made for you.
//See the Resources tab for some helpful tutorials on JavaScript classes!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//emp1 = new Employee("John", "Smith")
//emp2 = new Employee("Mary",  "Sue")
//emp3 = new Employee("Antony", "Walker")
//emp4 = new Employee("Joshua", "Senoron")
//​
//Test.assertEquals(emp1.firstname, "John")
//Test.assertEquals(emp1.lastname, "Smith")
//Test.assertEquals(emp1.fullname, "John Smith")
//Test.assertEquals(emp1.email, "john.smith@company.com")
//Test.assertEquals(emp2.firstname, "Mary")
//Test.assertEquals(emp2.lastname, "Sue")
//Test.assertEquals(emp2.fullname, "Mary Sue")
//Test.assertEquals(emp2.email, "mary.sue@company.com")
//Test.assertEquals(emp3.firstname, "Antony")
//Test.assertEquals(emp3.lastname, "Walker")
//Test.assertEquals(emp3.fullname, "Antony Walker")
//Test.assertEquals(emp3.email, "antony.walker@company.com")
//Test.assertEquals(emp4.firstname, "Joshua")
//Test.assertEquals(emp4.lastname, "Senoron")
//Test.assertEquals(emp4.fullname, "Joshua Senoron")
//Test.assertEquals(emp4.email, "joshua.senoron@company.com")
//​
//// Made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Total Number of Unique Characters

//tags: data_structures,strings

//url: https://edabit.com/challenge/ceHuvcrXpKF6Ev4Nc

//Description:
//Given two strings, create a function that returns the total number of unique characters from the combined string.
//Examples
//countUnique("apple", "play") ➞ 5
//// "appleplay" has 5 unique characters:
//// "a", "e", "l", "p", "y"
//
//countUnique("sore", "zebra") ➞ 7
//// "sorezebra" has 7 unique characters:
//// "a", "b", "e", "o", "r", "s", "z"
//
//countUnique("a", "soup") ➞ 5
//Notes
//Each word will contain at least one letter.
//All words will be lower cased.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countUnique("apple", "play"), 5)
//Test.assertEquals(countUnique("sore", "zebra"), 7)
//Test.assertEquals(countUnique("pip", "geeks"), 6)
//Test.assertEquals(countUnique("a", "soup"), 5)
//Test.assertEquals(countUnique("maniac", "maniac"), 5)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Even Number Generator

//tags: arrays,conditions,numbers

//url: https://edabit.com/challenge/dNZmjoi3Lip2j4emx

//Description:
//Create a function that finds all even numbers from 1 to the given number.
//Examples
//findEvenNums(8) ➞ [2, 4, 6, 8]
//
//findEvenNums(4) ➞ [2, 4]
//
//findEvenNums(2) ➞ [2]
//Notes
//If there are no even numbers, return an empty array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(findEvenNums(4), [2, 4])
//Test.assertSimilar(findEvenNums(8), [2, 4 ,6, 8])
//Test.assertSimilar(findEvenNums(2), [2])
//Test.assertSimilar(findEvenNums(1), [])
//Test.assertSimilar(findEvenNums(9), [2, 4 ,6, 8])
//Test.assertSimilar(findEvenNums(11), [2, 4 ,6, 8, 10])

