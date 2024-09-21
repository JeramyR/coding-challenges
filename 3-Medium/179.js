

//title: Round to the Nearest

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/dihfjTJtMyT3wAgPb

//Description:
//Create a function that takes two numbers as arguments and returns the first number rounded to the nearest number, or a multiple of that number.
//Examples
//roundNearest(17, 10) ➞ 20
//
//roundNearest(36.3) ➞ 36
//
//roundNearest(123, 5) ➞ 125
//Notes
//If no nearest number is given, round the number as you normally would (see example #2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//[[11, 10.5],
//[-17, -16.9],
//[180, 178, 10],
//[21446.69, 21418.3, 118.49],
//[125, 123, 5],
//[19700, 19684, 100],
//[159.5, 160, 1.1],
//[36, 36.3],
//[123000, 123456, 1000],
//[21, 18, 7],
//[123500, 123456, 100],
//[25, 25.9, 2.5],
//[123460, 123456, 10],
//[99, 100, 11],
//[876519, 876518, 3],
//[160, 160],
//[-87912, -87510.69, 888],
//[0, 0.05],
//[722228, 722222, 19],
//[190, 189, 2]].forEach(x =>
//Test.assertEquals(roundNearest(x[1], x[2]), x[0]));

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Algorithms II: The Euclidean Algorithm

//tags: algorithms,logic,math,recursion

//url: https://edabit.com/challenge/ku3fnFZC5vrCRWn5K

//Description:
//Welcome to part two of the collection for Computer Science Algorithms. This challenge will deal further with writing recursive functions by covering the Euclidean Algorithm. The "Euclidean Algorithm" is a method for finding the greatest common divisor (GCD) of two numbers. It was originally described by the Greek mathematician Euclid.
//Algorithm
//For the sake of simplicity I'll refer to the first number as "a", the second number as "b", and the remainder as "r". The algorithm can be broken down into four steps:
//Ensure that "a" >= "b". If "a" < "b", swap them.
//Find the remainder. Divide "a" by "b" and set "r" as the remainder.
//Is "r" zero? If so terminate the function and return "b" (the second number).
//Set "a" = "b" and "b" = "r" and start the algorithm over again.
//Instructions
//Create a recursive function that returns the GCD between two positive numbers using the Euclidean Algorithm.
//Examples
//euclidean(8, 6) ➞ 2
//
//euclidean(25, 5) ➞ 5
//
//euclidean(49, 14) ➞ 7
//Notes
//Remember that to find the remainder of two numbers use the modulus % operator.
//Both numbers will be positive and neither number will be null.
//Several of the challenges that will be covered in this collection on algorithms can be solved non-recursively and without implementing the algorithms described in each challenge. I implore anyone solving these challenges to do them as intended. Not understanding the concepts taught will be an obstacle to later challenges and won't aid anyone in advancing their skills as a programmer.
//If you are stuck please check the Resources tab, Comments tab, or if you're really stuck, use the Solutions tab to unlock the answers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(euclidean(4, 2), 2)
//Test.assertEquals(euclidean(25, 5), 5)
//Test.assertEquals(euclidean(280, 64), 8)
//Test.assertEquals(euclidean(3, 6), 3)
//Test.assertEquals(euclidean(64, 52), 4)
//Test.assertEquals(euclidean(49, 14), 7)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Numeric Seesaw

//tags: arrays,numbers

//url: https://edabit.com/challenge/YoYtzAtQiiyb5Z3Qu

//Description:
//A number is left-heavy if the digits on the left side are larger than the digits on the right. It is right-heavy if the digits on the right side are larger than the digits on the left. Else, it is balanced.
//Create a function that takes in an integer and classifies it into one of the three mutually exclusive categories: left, right or balanced. For inputs with an odd number of integers, ignore the fulcrum (the middle number).
//Examples
//seesaw(3449) ➞ "right"
//// since 34 < 49
//
//seesaw(1143113) ➞ "left"
//// since 114 > 113 (3 is the fulcrum)
//
//seesaw(585585) ➞ "balanced"
//// since 585 == 585
//Notes
//If input is null or undefined return "balanced".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(seesaw(3449), "right")
//Test.assertEquals(seesaw(1143113), "left")
//Test.assertEquals(seesaw(585585), "balanced")
//Test.assertEquals(seesaw(11), "balanced")
//Test.assertEquals(seesaw(111), "balanced")
//Test.assertEquals(seesaw(1), "balanced")
//Test.assertEquals(seesaw(5855), "left")
//Test.assertEquals(seesaw(5558), "right")
//Test.assertEquals(seesaw(null), "balanced", 'Return balanced when null.')
//Test.assertEquals(seesaw(undefined), "balanced", 'Return balanced when undefined.')

