

//title: Learn Lodash (3): _.differenceWith, Find the Difference in Arrays Using a Comparison

//tags: arrays,functional_programming

//url: https://edabit.com/challenge/jLeqZDXP7W7C7xMk2

//Description:
//According to the lodash documentation, This method is like _.difference except it accepts a comparator which is invoked to compare elements of the array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).
//This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.
//Using a car dealership example, if you have two parking lots and want to see which cars are different this function enables you to check each car in one lot against each car in the other using a comparison function which checks two values and returns true or false if they are equal or not. So you could check engine size and compare to see which cars are different according to the size of their engines. If lot one has a car that has a v6 engine and lot two doesn't have any cars that have v6 engines this would be the difference and the function would return the car with the v6 engine.
//There is only one first array that is used to look for the difference but there can be many values arrays that are used to check against.
//Examples
//differenceWith([
//  { make: "mazda", engine: "v8" },   // This is the first array we compare with.
//  { make: "toyota",  engine: "v6" },
//],
//  [{ make: "toyota", engine: "v8" }],  // The second array we compare against.
//  (a, b) => a.engine === b.engine    // This is the comparator that compares the two values.
//) ➞ [
//  { make: "toyota",  engine: "v6" },  // This is in the first array but none of the others.
//]
//Notes
//Do not attempt to import lodash; you are simply writing your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(
//  differenceWith(
//    [
//      { make: "mazda", engine: "v8" },
//      { make: "toyota", engine: "v6" },
//    ],
//    [{ make: "toyota", engine: "v8" }],
//    (a, b) => a.engine === b.engine
//  ),
//  [{ make: "toyota", engine: "v6" }]
//);
//​
//Test.assertSimilar(
//  differenceWith(
//    [
//      ["banana", "cat", "car"],
//      ["house", "pajamas", "watch"],
//      ["nickle", "dime", "quarter"],
//    ],
//    [
//      ["banana", "cat", "car"],
//      ["house", "pajamas", "watch"],
//    ],
//    (a, b) => a.includes("banana") && b.includes("banana")
//  ),

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Book Shelf

//tags: classes,language_fundamentals,objects

//url: https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn

//Description:
//Create a Book constructor that has two properties :
//Title
//Author
//and two methods:
//A method named getTitle that returns: "Title: " + the instance title.
//A method named getAuthor that returns: "Author: " + the instance author.
//and instantiate this constructor by creating 3 new books:
//Pride and Prejudice - Jane Austen (PP)
//Hamlet - William Shakespeare (H)
//War and Peace - Leo Tolstoy (WP)
//The name of the new object instances PP, H, and WP, respectively.
//For instance, if I instantiated the following book using this Book constructor function:
//Harry Potter - J.K. Rowling (HP)
//I would get the following properties and methods:
//Examples
//HP.title ➞ "Harry Potter"
//HP.author ➞ "J.K. Rowling"
//HP.getTitle() ➞ "Title: Harry Potter"
//HP.getAuthor() ➞ "Author: J.K. Rowling"
//Notes
//Read more about constructor functions in Resources.
//Remember, after you've finished writing the constructor function, you must instantiate it through the creation of new objects.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(PP.title, "Pride and Prejudice")
//Test.assertEquals(PP.author, "Jane Austen")
//Test.assertEquals(PP.getTitle(), 'Title: Pride and Prejudice')
//Test.assertEquals(PP.getAuthor(), 'Author: Jane Austen')
//​
//Test.assertEquals(H.title, "Hamlet")
//Test.assertEquals(H.author, "William Shakespeare")
//Test.assertEquals(H.getTitle(), 'Title: Hamlet')
//Test.assertEquals(H.getAuthor(), 'Author: William Shakespeare')
//​
//Test.assertEquals(WP.title, "War and Peace")
//Test.assertEquals(WP.author, "Leo Tolstoy")
//Test.assertEquals(WP.getTitle(), 'Title: War and Peace')
//Test.assertEquals(WP.getAuthor(), 'Author: Leo Tolstoy')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Conquering Queen

//tags: arrays,control_flow,games,strings

//url: https://edabit.com/challenge/f9Xi45wjDjfD4v4nD

//Description:
//In chess, queens can move any number of squares horizontally, vertically or diagonally.
//Given the location of your queen and your opponents' queen, determine whether or not you're able to capture your opponent's queen. Your location and your opponents' location are the first and second elements of the array, respectively.
//Examples
//canCapture(["A1", "H8"]) ➞ true
//// Your queen can move diagonally to capture opponents' piece.
//
//canCapture(["A1", "C2"]) ➞ false
//// Your queen cannot reach C2 from A1 (although a knight could).
//
//canCapture(["G3", "E5"]) ➞ true
//Notes
//Assume there are no blocking pieces.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canCapture(["A1", "H8"]), true);
//Test.assertEquals(canCapture(["A1", "C2"]), false);
//Test.assertEquals(canCapture(["G3", "E5"]), true);
//Test.assertEquals(canCapture(["D3", "C2"]), true);
//Test.assertEquals(canCapture(["F4", "C1"]), true);
//Test.assertEquals(canCapture(["H1", "A7"]), false);
//Test.assertEquals(canCapture(["H1", "A8"]), true);
//Test.assertEquals(canCapture(["G1", "G2"]), true);
//Test.assertEquals(canCapture(["A5", "G5"]), true);
//Test.assertEquals(canCapture(["A5", "E2"]), false);

