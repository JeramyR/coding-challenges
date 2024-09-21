

//title: FizzBuzz Interview Question

//tags: interview,language_fundamentals,logic,math,sorting

//url: https://edabit.com/challenge/hoDbsz38GzWwBQ47w

//Description:
//Create a function that takes a number as an argument and returns "Fizz", "Buzz" or "FizzBuzz".
//If the number is a multiple of 3 the output should be "Fizz".
//If the number given is a multiple of 5, the output should be "Buzz".
//If the number given is a multiple of both 3 and 5, the output should be "FizzBuzz".
//If the number is not a multiple of either 3 or 5, the number should be output on its own as shown in the examples below.
//The output should always be a string even if it is not a multiple of 3 or 5.
//Examples
//FizzBuzz(3) ➞ "Fizz"
//
//FizzBuzz(5) ➞ "Buzz"
//
//FizzBuzz(15) ➞ "FizzBuzz"
//
//FizzBuzz(4) ➞ "4"
//Notes
//Try to be precise with how you spell things and where you put the capital letters.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(FizzBuzz(3), "Fizz", "You gave " + FizzBuzz(3) + " and Fizz was needed")
//Test.assertEquals(FizzBuzz(5), "Buzz", "You gave " + FizzBuzz(5) + " and Buzz was needed")
//Test.assertEquals(FizzBuzz(15), "FizzBuzz", "You gave " + FizzBuzz(15) + " and FizzBuzz was needed")
//Test.assertEquals(FizzBuzz(10), "Buzz", "You gave " + FizzBuzz(10) + " and Buzz was needed")
//Test.assertEquals(FizzBuzz(98), "98", "You gave " + FizzBuzz(98) + " and 98 was needed")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Get the File Extension

//tags: arrays,higher_order_functions,strings

//url: https://edabit.com/challenge/8A9E8LdE6zXcmPX3W

//Description:
//Write a function that maps files to their extension names.
//Examples
//getExtension(["code.html", "code.css"])
//➞ ["html", "css"]
//
//getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])
//➞ ["jpg", "pdf", "mp3"]
//
//getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])
//➞ ["rb", "cpp", "py", "js"]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]), ["jpg", "pdf", "mp3"])
//Test.assertSimilar(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]), ["rb", "cpp", "py", "js"])
//Test.assertSimilar(getExtension(["code.html", "code.css"]), ["html", "css"])
//Test.assertSimilar(getExtension(["minesweeper.java", "game.java", "my_project.java"]), ["java", "java", "java"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Check if a String Contains only Identical Characters

//tags: strings,validation

//url: https://edabit.com/challenge/bnZzPk2QuWr4w5HuZ

//Description:
//Write a function that returns true if all characters in a string are identical and false otherwise.
//Examples
//isIdentical("aaaaaa") ➞ true
//
//isIdentical("aabaaa") ➞ false
//
//isIdentical("ccccca") ➞ false
//
//isIdentical("kk") ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isIdentical("kkkkk"), true)
//Test.assertEquals(isIdentical("ckkkk"), false)
//Test.assertEquals(isIdentical("kkkkck"), false)
//Test.assertEquals(isIdentical("aabc"), false)
//Test.assertEquals(isIdentical("ccc"), true)
//Test.assertEquals(isIdentical("aabbbb"), false)
//Test.assertEquals(isIdentical("bbbbbb"), true)

