

//title: Birthday Cake

//tags: arrays,formatting

//url: https://edabit.com/challenge/BBFPC6HhZ2ZFv3fpK

//Description:
//Create a function which constructs a rectangular birthday cake, based on someone's name and age! Build it out of strings in an array and make sure to surround the birthday message with the character that fits the rule:
//If the age is an even number, surround the message with "#".
//If the age is an odd number, surround the message with "*".
//Other important rules:
//The message should be in the format: {age} Happy Birthday {name}! {age}
//Leave a space between the edge of the cake and the age numbers.
//Examples
//getBirthdayCake("Jack", 10) ➞ [
//  "##############################",
//  "# 10 Happy Birthday Jack! 10 #",
//  "##############################"
//]
//
//getBirthdayCake("Russell", 19) ➞ [
//  "*********************************",
//  "* 19 Happy Birthday Russell! 19 *",
//  "*********************************"
//]
//
//getBirthdayCake("Isabelle", 2) ➞ [
//  "################################",
//  "# 2 Happy Birthday Isabelle! 2 #",
//  "################################"
//]
//Notes
//The amount of characters in the banner should be the same length as the message to pass the tests.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getBirthdayCake("Jack", 10), [
//  "##############################",
//  "# 10 Happy Birthday Jack! 10 #",
//  "##############################"
//])
//​
//Test.assertSimilar(getBirthdayCake("Russell", 19), [
//  "*********************************",
//  "* 19 Happy Birthday Russell! 19 *",
//  "*********************************"
//])
//​
//Test.assertSimilar(getBirthdayCake("Isabelle", 2), [
//  "################################",
//  "# 2 Happy Birthday Isabelle! 2 #",
//  "################################"
//])
//​
//// Time for a right mess
//Test.assertSimilar(getBirthdayCake("Princess", 40), ["##################################", "# 40 Happy Birthday Princess! 40 #", "##################################"])
//Test.assertSimilar(getBirthdayCake("Maxwell", 85), ["*********************************", "* 85 Happy Birthday Maxwell! 85 *", "*********************************"])
//Test.assertSimilar(getBirthdayCake("Zenobia", 63), ["*********************************", "* 63 Happy Birthday Zenobia! 63 *", "*********************************"])
//Test.assertSimilar(getBirthdayCake("Adrian", 91), ["********************************", "* 91 Happy Birthday Adrian! 91 *", "********************************"])
//Test.assertSimilar(getBirthdayCake("Gayle", 28), ["###############################", "# 28 Happy Birthday Gayle! 28 #", "###############################"])
//Test.assertSimilar(getBirthdayCake("Jo", 69), ["****************************", "* 69 Happy Birthday Jo! 69 *", "****************************"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Geometry 3: Perimeter of a Triangle

//tags: algebra,arrays,geometry,math

//url: https://edabit.com/challenge/gFMNDo3TGGnA4ZuMB

//Description:
//Write a function that takes the coordinates of three points in the form of a 2d array and returns the perimeter of the triangle. The given points are the vertices of a triangle on a two-dimensional plane.
//Examples
//perimeter([[15, 7], [5, 22], [11, 1]]) ➞ 47.08
//
//perimeter([[0, 0], [0, 1], [1, 0]]) ➞ 3.41
//
//perimeter([[-10, -10], [10, 10 ], [-10, 10]]) ➞ 68.28
//Notes
//The given points always create a triangle.
//The numbers in the argument array can be positive or negative.
//Output should have 2 decimal places
//This challenge is easier than it looks.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(perimeter([[0, 0], [1, 0], [0, 1]]), 3.41)
//Test.assertEquals(perimeter([[15, 7], [5, 22], [11, 1]]), 47.08)
//Test.assertEquals(perimeter([[7, 6], [0, 11], [0, -3]]), 34.00)
//Test.assertEquals(perimeter([[-10, -10], [10, 10], [-10, 10]]), 68.28)
//Test.assertEquals(perimeter([[3, 4], [4, 3], [4, 5]]), 4.83)
//Test.assertEquals(perimeter([[-10, -20], [-30, -40], [-50, -60]]), 113.14)
//Test.assertEquals(perimeter([[382, 894], [389, 312], [500, 993]]), 1426.06)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Design Patterns I: JavaScript Classes?!?

//tags: classes,data_structures,language_fundamentals,objects

//url: https://edabit.com/challenge/B48vyMsHdRtu39rfh

//Description:
//JavaScript doesn't really have classes like other languages. They are actually functions behind the scenes. There are several ways to create classes.
//Challenge
//Create a Book class using a JavaScript function - instantiable.
//
//It should have an author and published property.
//
//Create an Author class using a literal object - singleton.
//
//It should have a name and books property.
//
//Create a Publisher class by using the new constructor and an anonymous function - singleton.
//
//It should have an authors and books property.
//
//Create a Review class using a class declaration - instantiable.
//
//It should have a rating and user property.
//Bonus (optional)
//Create a Bookstore class using an IIFE - singleton. It should have a books and prices property.
//Notes
//All classes should begin with Capital letters.
//All class properties should have default(initial) values.
//There are a few other ways to make classes but are not in this challenge, you can check the Resources tab to learn more.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let book = new Book 
//let review = new Review 
//​
//Test.assertEquals(book instanceof Book, true)
//Test.assertEquals(book.hasOwnProperty("author"), true, "The class Book needs to have a value for author.")
//Test.assertEquals(book.hasOwnProperty("published"), true, "The class Book needs to have a value for published.")
//Test.assertEquals(Author.hasOwnProperty("name"), true, "The class Author needs to have a value for name.")
//Test.assertEquals(Author.hasOwnProperty("books"), true, "The class Author needs to have a value for books.")
//Test.assertEquals(Publisher.hasOwnProperty("authors"), true, "The class Publisher needs to have a value for authors.")
//Test.assertEquals(Publisher.hasOwnProperty("books"), true, "The class Publisher needs to have a value for books.")
//Test.assertEquals(review instanceof Review, true)
//Test.assertEquals(review.hasOwnProperty("rating"), true, "The class Review needs to have a value for rating.")
//Test.assertEquals(review.hasOwnProperty("user"), true, "The class Review needs to have a value for user.")
//​
//if(typeof Bookstore === "undefined") {
//  return null 
//} else {
//Test.assertEquals(Bookstore.hasOwnProperty("books"), true, "The class Bookstore needs to have a value for books.")
//Test.assertEquals(Bookstore.hasOwnProperty("prices"), true, "The class Bookstore needs to have a value for prices.")
//}

