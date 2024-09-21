

//title: Flash Cards

//tags: arrays,conditions

//url: https://edabit.com/challenge/ng4KKFW4CBwteJdDH

//Description:
//Create a function that outputs the results of a flashcard. A flashcard is an array of three elements: a number, an operator symbol, and another number. Return the mathematical result of that expression.
//There are 4 operators: + (addition), - (subtraction), x (multiplication), and / (division). If the flashcard displays a number being divided by zero, e.g. [3, "/", 0], then return undefined. For division, round to the hundredths place. So [10, "/", 3] should return 3.33.
//Examples
//flash([3, "x", 7]) ➞ 21
//
//flash([5, "+", 7]) ➞ 12
//
//flash([10, "-", 9]) ➞ 1
//
//flash([10, "/", 0]) ➞ undefined
//
//flash([10, "/", 3]) ➞ 3.33
//Notes
//Flash cards contain only zero or positive numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(flash([3, 'x', 7]), 21);
//Test.assertEquals(flash([5, '+', 7]), 12);
//Test.assertEquals(flash([10, '-', 9]), 1);
//Test.assertEquals(flash([10, '/', 0]), undefined);
//Test.assertEquals(flash([10, '/', 3]), 3.33);
//Test.assertEquals(flash([2, 'x', 0]), 0);
//Test.assertEquals(flash([0, '/', 5]), 0);
//Test.assertEquals(flash([0, '+', 0]), 0);
//Test.assertEquals(flash([0, '-', 0]), 0);
//Test.assertEquals(flash([8, '-', 0]), 8);
//Test.assertEquals(flash([0, '/', 0]), undefined);
//Test.assertEquals(flash([3, '/', 8]), 0.38);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Tidy Title and Author Strings

//tags: arrays,formatting,regex,strings

//url: https://edabit.com/challenge/5vz5mrd7BTd7Q7XSz

//Description:
//You have an array of strings, each consisting of a book title and an author's name.
//To illustrate:
//[
//  ["   Death of a Salesman - Arthur Miller    "],
//  ["   Macbeth - William Shakespeare    "],
//  ["    A Separate Peace - John Knowles     "],
//  [" Lord of the Flies - William Golding"],
//  ["A Tale of Two Cities - Charles Dickens"]
//]
//Create a function that takes an array like the one above and transforms it into the same format as the one below:
//[
//  ["Death of a Salesman", "Arthur Miller"],
//  ["Macbeth", "William Shakespeare"],
//  ["A Separate Peace", "John Knowles"],
//  ["Lord of the Flies", "William Golding"],
//  ["A Tale of Two Cities", "Charles Dickens"]
//]
//Examples
//tidyBooks([
//  "     The Catcher in the Rye - J. D. Salinger    ",
//  "    Brave New World - Aldous Huxley   ",
//  "    Of Mice and Men - John Steinbeck    "
//]) ➞ [
//  "The Catcher in the Rye", "J. D. Salinger",
//  "Brave New World", "Aldous Huley",
//  "Of Mice and Men", "John Steinbeck"
//]
//Notes
//Some of these entries have excess white space. Remove this white space in your final output.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(tidyBooks(["     The Catcher in the Rye - J. D. Salinger    ", 
//"    Brave New World - Aldous Huxley   ", 
//"    Of Mice and Men - John Steinbeck    "]), 
//[["The Catcher in the Rye", "J. D. Salinger"], 
//["Brave New World", "Aldous Huxley"], 
//["Of Mice and Men", "John Steinbeck"]])
//​
//​
//Test.assertSimilar(tidyBooks(["     The Grapes of Wrath - John Steinbeck    ", 
//"    Great Expectations - Charles Dickens   ", 
//"    The Scarlet Letter - Nathaniel Hawthorne    "]), 
//[["The Grapes of Wrath", "John Steinbeck"], 
//["Great Expectations", "Charles Dickens"], 
//["The Scarlet Letter", "Nathaniel Hawthorne"]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the True Equations

//tags: algebra,language_fundamentals,math,strings

//url: https://edabit.com/challenge/LaHKrCtXnpJAK7G9h

//Description:
//In this challenge you will be given an array containing equations, with each equation written as a string. Here's an example:
//["1+1=2", "2+2=3", "5*5=10", "3/3=1"]
//If you do the math, you'll see that the equations "1+1=2" and "3/3=1" are actually true while "2+2=3" and "5*5=10" are false nonsense.
//Write a function which, given an array of equations as above, returns only the true equations. For instance, for the example above the output should be:
//["1+1=2", "3/3=1"]
//Examples
//trueEquations(["2*2=4"]) ➞ ["2*2=4"]
//
//trueEquations(["1+1=3", "3-1=1"]) ➞ []
//
//trueEquations(["1+1=2", "2+2=3", "5*5=10", "3/3=1"]) ➞ ["1+1=2", "3/3=1"]
//Notes
//If all equations are false, return the empty array [], as in the second example.
//The equations will only involve the elementary operations: +, -, *, /

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(trueEquations(["2*2=4"]), ["2*2=4"])
//Test.assertSimilar(trueEquations(["1+1=3", "3-1=1"]), [])
//Test.assertSimilar(trueEquations(["1+1=2", "2+2=3", "5*5=10", "3/3=1"]), ["1+1=2", "3/3=1"])
//Test.assertSimilar(trueEquations(["4/2=2", "8-4=2", "5*5=25", "3/3=14"]), ["4/2=2", "5*5=25"])
//Test.assertSimilar(trueEquations(["1-1=0", "2/2=1", "13+9=22", "1*9=9"]), ["1-1=0", "2/2=1", "13+9=22", "1*9=9"])
//Test.assertSimilar(trueEquations(["1/41=3", "2+19=14", "13*9=22", "1-9=9"]), [])
//Test.assertSimilar(trueEquations(["82/41=2", "21-17=3", "3+99=2", "9*9=81","7*6=42","101+10=111","2*3=5","143/11=13"]), ["82/41=2","9*9=81","7*6=42","101+10=111","143/11=13"])
//​
//// Author : Luis Pereira

