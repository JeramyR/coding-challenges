

//title: Not Quite Perfect

//tags: algorithms,math,numbers,validation

//url: https://edabit.com/challenge/WEhe9MCnyZG8WhN9Z

//Description:
//A perfect number is a number that is equal to the sum of all its proper (non-self) divisors. Take 6 for example:
//6 = 1 + 2 + 3
//A number that is equal to the sum of all its proper divisors -- provided that one of them is negative -- is not quite perfect, but admirable.
//To illustrate. The proper divisors of 12 are 1, 2, 3, 4, 6, totalling 16. However, if 2 is negative, the total would be 12, the number itself. 12 is therefore an admirable number.
//12 = 1 - 2 + 3 + 4 + 6
//Create a function that takes a number n as input.
//If n is perfect, return "Perfect".
//If n is admirable, return the proper divisor that must be rendered negative to make the sum of the proper divisors equal to n.
//If n is neither perfect nor admirable, return "Neither".
//Examples
//admirable(6) ➞ "Perfect"
//
//admirable(12) ➞ 2
//
//admirable(18) ➞ "Neither"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(admirable(6), 'Perfect')
//Test.assertEquals(admirable(12), 2)
//Test.assertEquals(admirable(18), 'Neither')
//Test.assertEquals(admirable(496), 'Perfect')
//Test.assertEquals(admirable(138), 6)
//Test.assertEquals(admirable(612), 'Neither')
//Test.assertEquals(admirable(1876), 28)
//Test.assertEquals(admirable(5456), 496)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Combine Two Objects Into One, Summing Like Values

//tags: objects

//url: https://edabit.com/challenge/JyebLWZjCv5jYhrBW

//Description:
//Take two objects with similar key values and combine them into a new object summing any values that belong to the same category.
//There's a married couple, Hank and his spouse Sheila. Hank works at a power plant making $70,000 a year, and Sheila is a teacher making $40,000 a year. They both earn rental income from separate rental properties, Hank will get $12,000 and Sheila $10,000. The new object will show their separate income but combine the rental income because it fits the same category.
//const user1 = {
//  powerPlant: 70000,
//  rental: 12000
//}
//
//const user2 = {
//  teaching: 40000,
//  rental: 10000
//}
//
//becomes ➞ {
//  powerPlant: 70000,
//  teaching: 40000,
//  rental: 22000   // The rental income is added together.
//}
//Arguments
//user1Income (Object) ⁠— an income object for user1
//user2Income (Object) ⁠— an income object for user2
//returns: A new object with like values combined
//Challenges
//They won't have the same number of key-value pairs.
//The return object must return the values ordered from lowest to highest so your answers can match the test answers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const test1User1Income = {
//  softwareDeveloping: 70000,
//  rental: 10000,
//};
//​
//const test1User2Income = {
//  teaching: 40000,
//  rental: 12000,
//};
//​
//const test1Answer = {
//  rental: 22000,
//  teaching: 40000,
//  softwareDeveloping: 70000,
//};
//​
//test1User2Income;
//​
//Test.assertSimilar(combine(test1User1Income, test1User2Income), test1Answer);
//​
//​
//const test2User1Income = {
//  softwareDeveloping: 70000,
//  pizzaDeliverying: 6000,
//  rental: 10000,

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Translate from Human to Programmer

//tags: algorithms,loops,regex,strings

//url: https://edabit.com/challenge/8PDZekcFbMj36od9q

//Description:
//Replace the numbers in a string with their binary form.
//Examples
//replaceNums("I have 2 sheep.") ➞ "I have 10 sheep."
//
//replaceNums("My father was born in 1974.10.25.") ➞ "My father was born in 11110110110.1010.11001."
//
//replaceNums("10hell76o4 boi") ➞ "1010hell1001100o100 boi"
//Notes
//There are possibly two or more numbers in a single word (I do not recommend splitting the text at spaces, it surely won't help).
//Anything separates two numbers, even spaces ("2 2" --> "10 10").

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(replaceNums("I have 2 sheep."),"I have 10 sheep.")
//Test.assertEquals(replaceNums("I have 2 sheep, and 21 chickens."),"I have 10 sheep, and 10101 chickens.")
//Test.assertEquals(replaceNums("100 is my lucky number."),"1100100 is my lucky number.")
//Test.assertEquals(replaceNums("My father was born in 1974.10.25."),"My father was born in 11110110110.1010.11001.")
//Test.assertEquals(replaceNums("This sentence is10 35filled with ran20dom numbers on7 purpo31se."),"This sentence is1010 100011filled with ran10100dom numbers on111 purpo11111se.")
//Test.assertEquals(replaceNums("10hell76o4 boi"),"1010hell1001100o100 boi")
//​
//// Gabberson

