

//title: Format Blog Posts in Markdown

//tags: arrays,dates,formatting,objects

//url: https://edabit.com/challenge/MASwNDXR7dSii2QuS

//Description:
//You are tasked with grabbing some blog posts from an API and formatting them using markdown, so that your coworker (who has no idea what markdown is) can publish them with ease on your company's website.
//You already figured out how to get the posts and the associated users from the API, now you just need to write a function that takes that data and formats it in a markdown string. The rules are as follows:
//The title should start with an uppercase character and be displayed as an H1.
//Add 2 newlines after the title.
//
//The metadata of the post has the following format: Written by <author> on <date>
//
//The <author> part is a link where the text is the author's firstName and lastName (separated by a space), while the href is a mailto:<author email>.
//The <date> part is the date of the post and the format is the following: <weekday>, <month> <date>, <year>
//Weekday is in short form (Thu, Sun, …)
//Month is in long form (April, December, …)
//Date is in 2 digits form (01 - 31)
//Year is always in extended form (2018)
//
//Add 2 newlines after the metadata.
//
//The separator is an horizontal line, in markdown it's written like this: ---.
//Add 2 newlines after the separator.
//The body of the post is already properly formatted and is the last thing you must add.
//Data structure
//Post
//Property	Type	Description
//id	number	id of the post
//userId	number	id of the user that authored the post
//timestamp	number	timestamp of the post (in milliseconds)
//title	string	title of the post
//body	string	body (content) of the post
//User
//Property	Type	Description
//id	number	id of the user
//firstName	string	first name of the user
//lastName	string	last name of the user
//email	string	email of the user
//Examples
//Input:
//formatBlogPost(
//  {
//    id: 1,
//    userId: 10,
//    timestamp: 1536581919628,
//    title: 'varius ut blandit non interdum in ante',
//    body:
//      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
//  },
//  users, // Array of objects, see structure above
//);
//Output (as a string):
//# Varius ut blandit non interdum in ante
//
//Written by [Sigismond Reavell](mailto:sreavell9@cargocollective.com) on Mon, September 10, 2018
//
//---
//
//Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
//
//In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
//Notes
//Feel like formatting the dates is tedious? It doesn't have to be! Check out the Resources tab for a painless way to format them.
//If you're new to markdown or you don't remember something, check out the Resources tab for a refresher. Some elements can be written in multiple styles, so be careful to use the correct one for this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const posts = [
//  {
//    id: 1,
//    userId: 10,
//    timestamp: 1536581919628,
//    title: 'varius ut blandit non interdum in ante',
//    body:
//      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
//  },
//  {
//    id: 2,
//    userId: 1,
//    timestamp: 1516722015166,
//    title: 'sapien sapien non mi integer ac neque duis',
//    body:
//      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
//  },
//  {
//    id: 3,
//    userId: 8,
//    timestamp: 1522497310076,
//    title: 'diam erat fermentum justo nec',
//    body:
//      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
//  },

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Determinant of Square Matrix

//tags: algebra,algorithms,interview,math

//url: https://edabit.com/challenge/MyG2ivQb8NfwjebAm

//Description:
//In linear algebra, the determinant is a scalar value that can be computed from the elements of a square matrix and encodes certain properties of the linear transformation described by the matrix.
//Create a function that takes a square 2D array as an argument and returns a number (determinant).
//Examples
//getDet([
//  [ 0, 1],
//  [ 1, 1]
//]) ➞ -1
//
//getDet([
//  [69, 0],
//  [1, 1]
//]) ➞ 69
//
//getDet([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]) ➞ 0
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getDet([[0,1],[1,0]]), -1)
//Test.assertEquals(getDet([[69,0],[1,1]]), 69)
//Test.assertEquals(getDet([[7,420,8],[5,7,0],[1,1,7]]), -14373)
//Test.assertEquals(getDet([[5,1],[1,6]]), 29)
//Test.assertEquals(getDet([[1,2,3],[4,5,6],[7,8,9]]), 0)
//Test.assertEquals(getDet([[-1,1,-1],[-1,-55,1],[1,-1,-1]]), -112)
//​
//// magic square ;)
//Test.assertEquals(getDet([[2,7,6],[9,5,1],[4,3,8]]), -360)
//console.log("by Mariusz Najwer")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: How Many Boxes?

//tags: arrays,math

//url: https://edabit.com/challenge/hmL37LGD9LRdNyvXq

//Description:
//You work in a factory, and your job is to take items from a conveyor belt and pack them into boxes. Each box can hold a maximum of 10 kgs. Given an array containing the weight (in kg) of each item, how many boxes would you need to pack all of the items?
//Example
//boxes([2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2]) ➞ 5
//
//// Box 1 = [2, 1, 2, 5] (10kg)
//// Box 2 = [4, 3] (7kg)
//// Box 3 = [6, 1, 1] (8kg)
//// Box 4 = [9] (9kg)
//// Box 5 = [3, 2] (5kg)
//Notes
//There will always be a minimum of 1 item to pack. All items will weigh less than or equal to 10 kgs, and need to be packed in the order that they arrive.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(boxes([7, 1, 2, 6, 1, 2, 3, 5, 9, 2, 1, 2, 5]), 5)
//Test.assertEquals(boxes([2, 7, 1, 3, 3, 4, 7, 4, 1, 8, 2]), 5)
//Test.assertEquals(boxes([1, 3, 3, 3, 2, 1, 1, 9, 7, 10, 8, 6, 1, 2, 9]), 8)
//Test.assertEquals(boxes([4, 1, 2, 3, 5, 5, 1, 9]), 3)
//Test.assertEquals(boxes([3, 1, 2, 7, 2, 6, 1]), 3)
//Test.assertEquals(boxes([4, 6, 1, 9, 6, 1, 1, 9, 2, 9]), 6)
//Test.assertEquals(boxes([2, 2, 10, 10, 1, 5, 2]), 4)
//Test.assertEquals(boxes([9, 6, 2, 3, 1, 2, 4, 8, 3, 1, 3]), 5)
//Test.assertEquals(boxes([2, 5, 1, 6, 2, 9, 5, 2, 1, 6, 1, 6, 6, 1]), 7)
//Test.assertEquals(boxes([1, 2, 3, 2, 6, 4, 1]), 3)
//Test.assertEquals(boxes([1, 1, 2, 1, 2, 10, 2, 2, 5, 1, 5]), 4)
//Test.assertEquals(boxes([8, 3, 2, 1, 1, 2, 1, 3, 2, 1]), 3)
//Test.assertEquals(boxes([1, 5, 3, 1, 2, 3, 2, 6, 3, 1, 3, 8, 1]), 5)
//Test.assertEquals(boxes([8, 1, 1, 4, 7, 2, 1, 3, 1, 9, 7, 1, 5, 1, 1]), 7)
//Test.assertEquals(boxes([2, 3, 4, 10, 1, 2, 5, 1, 1, 1, 1, 8, 2, 1]), 5)
//Test.assertEquals(boxes([4, 6, 7, 3, 2, 2, 3, 1, 2, 2, 10, 3, 2]), 6)
//Test.assertEquals(boxes([9, 2, 3, 4, 1, 3, 1, 1, 3]), 3)
//Test.assertEquals(boxes([6, 2, 1, 9, 1, 8, 2, 8, 6, 6]), 6)
//Test.assertEquals(boxes([6, 9, 3, 8, 10, 4, 7]), 7)
//Test.assertEquals(boxes([4, 3, 1, 1, 1, 4, 7, 2, 1, 10, 1, 3, 8]), 6)
//Test.assertEquals(boxes([10]), 1)

