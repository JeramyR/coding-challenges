

//title: Zip It, If You Can?

//tags: arrays,formatting,sorting

//url: https://edabit.com/challenge/4QZqtGxiqJbzkNesj

//Description:
//Given an array of women and an array of men, either:
//Return "sizes don't match" if the two arrays have different sizes.
//If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
//Examples
//zipIt(["Elise", "Mary"], ["John", "Rick"])
// ➞ [["Elise", "John"], ["Mary", "Rick"]]
//
//zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])
// ➞ "sizes don't match"
//
//zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
// ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(zipIt(["Elise", "Mary"], ["John", "Rick"]), [["Elise", "John"], ["Mary", "Rick"]]);
//Test.assertSimilar(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]), "sizes don't match");
//Test.assertSimilar(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]), [["Ana", "Bob"], ["Amy", "Josh"], ["Lisa", "Tim"]]);
//Test.assertSimilar(zipIt(["Ana", "Amy", "Lisa", "Katty"], ["Bob", "Josh", "Tim"]), "sizes don't match");
//Test.assertSimilar(zipIt(["Katty", "Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim", "Aaron"]), [["Katty", "Bob"], ["Ana", "Josh"], ["Amy", "Tim"], ["Lisa", "Aaron"]]);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Assign Person to Occupation

//tags: data_structures

//url: https://edabit.com/challenge/WBfDcicRuqrRkFS2D

//Description:
//You have two arrays. One shows the names of the people names, while the other shows their occupation jobs. Your task is to create an object displaying each person to their respective occupation.
//Names	Jobs
//Annie	Teacher
//Steven	Engineer
//Lisa	Doctor
//Osman	Cashier
//Example
//const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"]
//const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]
//
//assignPersonToJob(names, jobs) ➞ {
//  Dennis: "Butcher",
//  Vera: "Programmer",
//  Mabel: "Doctor",
//  Annette: "Teacher",
//  Sussan: "Lecturer"
//}
//Notes
//The two arrays have the same length.
//The index of a name in the names array is the same as the index of the person's job in the jobs array, as shown in the table above.
//Check Resources for some useful information that can help with this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//names1 = ["Annie", "Steven", "Lisa", "Osman"];
//names2 = ['Victor', 'Paul', 'Eddie'];
//names3 = ['Dennis', 'Vera', 'Mabel', 'Annette', 'Sussan'];
//jobs1 = ["Teacher", "Engineer", "Doctor", "Cashier"];
//jobs2 = ['Vet', 'Nurse', 'Web Developer'];
//jobs3 = ['Butcher', 'Programmer', 'Doctor', 'Teacher', 'Lecturer'];
//​
//Test.assertSimilar(assignPersonToJob(names2, jobs2), { Victor: 'Vet', Paul: 'Nurse', Eddie: 'Web Developer' });
//Test.assertSimilar(assignPersonToJob(names3, jobs3), 
//{
//  Dennis: 'Butcher',
//  Vera: 'Programmer',
//  Mabel: 'Doctor',
//  Annette: 'Teacher',
//  Sussan: 'Lecturer'
//}
//);
//Test.assertSimilar(assignPersonToJob(names1, jobs1), 
//{
//  Annie: 'Teacher',
//  Steven: 'Engineer',
//  Lisa: 'Doctor',
//  Osman: 'Cashier'
//}  
//);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Resistance in Parallel Circuits

//tags: arrays,loops,math,physics

//url: https://edabit.com/challenge/nLHMJCfPZgiNBfQ2G

//Description:
//If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. It is possible to calculate the total resistance of a parallel circuit by using this formula:
//
//Create a function that takes an array of parallel resistance values, and calculates the total resistance of the circuit.
//Worked Example
//parallelResistance([6, 3, 6]) ➞ 1.5
//
//// 1/RTotal = 1/6 + 1/3 + 1/6
//// 1/RTotal = 2/3
//// RTotal = 3/2 = 1.5
//Examples
//parallelResistance([6, 3]) ➞ 2
//
//parallelResistance([10, 20, 10]) ➞ 4
//
//parallelResistance([500, 500, 500]) ➞ 166.6
//// Round to the nearest decimal place
//Notes
//Note that you should rearrange to return the Resistance Total, not 1 / Resistance Total.
//Round to the nearest decimal place.
//All inputs will be valid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(parallelResistance([6, 3]), 2)
//Test.assertEquals(parallelResistance([6, 3, 6]), 1.5)
//Test.assertEquals(parallelResistance([10, 10]), 5)
//Test.assertEquals(parallelResistance([10, 20, 10]), 4)
//Test.assertEquals(parallelResistance([60, 30, 20]), 10)
//Test.assertEquals(parallelResistance([16, 4]), 3.2)
//Test.assertEquals(parallelResistance([20, 5]), 4)
//Test.assertEquals(parallelResistance([500, 500, 500]), 166.7)
//Test.assertEquals(parallelResistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0.3)
//// Author: Joshua Señoron

