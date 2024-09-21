

//title: Algorithms I: Introduction to Recursion

//tags: algorithms,logic,math,recursion

//url: https://edabit.com/challenge/vtDnynHfWCnMaKYym

//Description:
//Welcome to the beginning of this collection on Computer Science Algorithms. Admittedly there are other challenges on Edabit that deal with recursion and algorithmic processes, but these particular challenges are designed to give examples and to educate users on the topics being covered.
//Recursion
//In computer science, "recursion" is the act of writing a function that calls itself from within its own code. The function below better helps explain and illustrate recursion by simply counting down from a given number to zero:
//function factorial(num) {
//  let targetNumber = 0
//
//  if (num == targetNumber)
//    {console.log("Countdown complete!")}
//  else
//    {factorial(num - 1)}
//}
//Explanation
//The above function starts by initializing the target number, which is zero, then it creates a base case by checking if the inputted number has reached the target number yet. If it has, then the function ends and it prints the statement, else the function inputs num subtracted by one and then runs the function again.
//When using recursive functions a "Base Case" is needed. A base case will stop the function once it reaches its intended goal. In the absence of a base case, the program can either crash due to "Stack Overflow" or by initiating an "Infinite Loop."
//On a side note, initializing variables in recursive functions can sometimes be problematic because when the function runs again it will reset the value of that variable. For this specific recursive function the variable works fine because the target number we're trying to reach is consistently zero.
//Instructions
//The recursive function for this challenge should return the factorial of an inputted integer. If anyone needs a refresher, factorials in mathematics are represented by an exclamation point placed to the right of a number: 4! = 4 x 3 x 2 x 1 = 24
//Examples
//factorial(5) ➞ 120
//
//factorial(3) ➞ 6
//
//factorial(2) ➞ 2
//Notes
//Puts statements can be added to the Countdown function example for illustrative purposes if need be.
//Terms that are placed in italics ("example"), while not always necessary to completing the challenge, can be helpful or just generally good to know as an aspiring programmer or computer science student/enthusiast.
//Several of the challenges that will be covered in this collection on algorithms can be solved non-recursively and without implementing the algorithms described in each challenge. I implore anyone solving these challenges to do them as intended. Not understanding the concepts taught will be an obstacle to later challenges and won't aid anyone in advancing their skills as a programmer.
//If you are stuck please check the Resources tab, Comments tab, or if you're really stuck, use the Solutions tab to unlock the answers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(factorial(7), 5040)
//Test.assertEquals(factorial(1), 1)
//Test.assertEquals(factorial(9), 362880)
//Test.assertEquals(factorial(2), 2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Capitalize by ASCII

//tags: higher_order_functions,strings

//url: https://edabit.com/challenge/KPENunE3uhBcmSQ7C

//Description:
//Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.
//Examples
//asciiCapitalize("to be or not to be!") ➞ "To Be oR NoT To Be!"
//
//asciiCapitalize("THE LITTLE MERMAID") ➞ "THe LiTTLe meRmaiD"
//
//asciiCapitalize("Oh what a beautiful morning.") ➞ "oH wHaT a BeauTiFuL moRNiNg."
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(asciiCapitalize("Oh what a beautiful morning."), "oH wHaT a BeauTiFuL moRNiNg.")
//Test.assertEquals(asciiCapitalize("THE LITTLE MERMAID"), "THe LiTTLe meRmaiD")
//Test.assertEquals(asciiCapitalize("to be or not to be!"), "To Be oR NoT To Be!")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Hashes and Pluses

//tags: loops,regex,strings

//url: https://edabit.com/challenge/ydBcGvv3n447nbxCy

//Description:
//Create a function that returns the number of hashes and pluses in a string.
//Examples
//hashPlusCount("###+") ➞ [3, 1]
//
//hashPlusCount("##+++#") ➞ [3, 3]
//
//hashPlusCount("#+++#+#++#") ➞ [4, 6]
//
//hashPlusCount("") ➞ [0, 0]
//Notes
//Return [0, 0] for an empty string.
//Return in the order of [hashes, pluses].

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(hashPlusCount("####"), [4, 0])
//Test.assertSimilar(hashPlusCount("#"), [1, 0])
//Test.assertSimilar(hashPlusCount("+++++++"), [0, 7])
//Test.assertSimilar(hashPlusCount("++"), [0, 2])
//Test.assertSimilar(hashPlusCount("#+#+"), [2, 2])
//Test.assertSimilar(hashPlusCount("###+"), [3, 1])
//Test.assertSimilar(hashPlusCount("##+++#"), [3, 3])
//Test.assertSimilar(hashPlusCount("#+++#+#++#"), [4, 6])
//Test.assertSimilar(hashPlusCount(""), [0, 0])

