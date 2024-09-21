

//title: Group in Order

//tags: arrays,closures,scope

//url: https://edabit.com/challenge/w5LTwJwDLK4uQ3Dmv

//Description:
//Create a function that groups an array of numbers based on a size parameter. The size represents the maximum length of each sub-array.
//[1, 2, 3, 4, 5, 6], 3
//[[1, 3, 5], [2, 4, 6]]
//// Divide array into groups of size 3.
//
//[1, 2, 3, 4, 5, 6], 2
//[[1, 4], [2, 5], [3, 6]]
//// Divide array into groups of size 2.
//
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4
//[[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9]]
//// "Leftover" arrays are okay.
//Examples
//group([1, 2, 3, 4], 2) ➞ [[1, 3], [2, 4]]
//
//group([1, 2, 3, 4, 5, 6, 7], 4) ➞ [[1, 3, 5, 7], [2, 4, 6]]
//
//group([1, 2, 3, 4, 5], 1) ➞ [[1], [2], [3], [4], [5]]
//
//group([1, 2, 3, 4, 5, 6], 4) ➞ [[1, 3, 5], [2, 4, 6]]
//Notes
//The size parameter represents the maximum size for each sub-array (see ex.4). You should try to fill each sub-array evenly. In other words, ex.4 should be [[1, 3, 5], [2, 4, 6]], not [[1, 3, 5, 6], [2, 4]].
//Keep the relative order of the numbers in each sub-array the same as the order in the original array.
//When distributing the numbers into the sub-arrays, each sub-array should have a number in it prior to receiving a new number (e.g. for example 1, your sub-arrays will be of size 2, and because there are 4 numbers, you will need 2 sub-arrays. When interating through the original array to fill the sub-arrays it should go [[],[]] -> [[1],[]] -> [[1],[2]] -> [[1, 3], [2]] -> [[1, 3], [2, 4]]).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(group([1, 2, 3, 4], 2), [[1, 3], [2, 4]])
//Test.assertSimilar(group([1, 2, 3, 4, 5, 6, 7], 4), [[1, 3, 5, 7], [2, 4, 6]])
//Test.assertSimilar(group([1, 2, 3, 4, 5], 1), [[1], [2], [3], [4], [5]])
//Test.assertSimilar(group([1, 2, 3, 4, 5, 6], 4), [[1, 3, 5], [2, 4, 6]])
//Test.assertSimilar(group([1, 2, 3, 4, 5, 6], 3), [[1, 3, 5], [2, 4, 6]])
//Test.assertSimilar(group([1, 2, 3, 4, 5, 6], 2), [[1, 4], [2, 5], [3, 6]])
//Test.assertSimilar(group([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4), [[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9]])
//Test.assertSimilar(group([1, 2, 3, 4, 5, 6, 7, 8], 2), [[1, 5], [2, 6], [3, 7], [4, 8]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Pagination Class with OOP

//tags: classes,math,numbers,objects

//url: https://edabit.com/challenge/YYr4WQPJuCCiN6wLT

//Description:
//Your task is to create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.
//
//The pagination class will accept 2 parameters:
//items (default: []): An array of contents to paginate.
//
//pageSize (default: 10): The amount of items to show in each page.
//So for example we could initialize our pagination like this:
//const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
//
//const p = new Pagination(alphabetArray, 4);
//And then use the method getVisibleItems to show the contents of the paginated array.
//console.log(p.getVisibleItems()); // ["a", "b", "c", "d"]
//You will have to implement various methods to go through the pages such as:
//prevPage
//nextPage
//firstPage
//lastPage
//goToPage
//Here's a continuation of the example above using nextPage and lastPage:
//p.nextPage();
//
//console.log(p.getVisibleItems());
//// ["e", "f", "g", "h"]
//
//p.lastPage();
//
//console.log(p.getVisibleItems());
//// ["y", "z"]
//Notes
//You don't have to use ES6 class if you don't want to
//The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
//The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage();
//Please remove the comments I provided before publishing your solution.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Checking correct default values
//const defaultPagination = new Pagination();
//Test.assertEquals(defaultPagination.pageSize, 10);
//Test.assertEquals(defaultPagination.items.length, 0);
//Test.assertEquals(Array.isArray(defaultPagination.items), true);
//​
//// Checking correct handling of float numbers as pageSize
//// REMOVED no more float tests
//// Test.assertEquals((new Pagination(new Array(0), 8.8).pageSize), 8);
//​
//// Checking correct amount of pages
//Test.assertEquals(new Pagination(new Array( 0), 10).totalPages, 1);
//Test.assertEquals(new Pagination(new Array( 1), 10).totalPages, 1);
//Test.assertEquals(new Pagination(new Array(10), 10).totalPages, 1);
//Test.assertEquals(new Pagination(new Array(11), 10).totalPages, 2);
//​
//// Checking correct currentPage
//Test.assertEquals((new Pagination(new Array( 0), 10)).currentPage, 1);
//Test.assertEquals((new Pagination(new Array( 1), 10)).currentPage, 1);
//Test.assertEquals((new Pagination(new Array(11), 10)).currentPage, 1);
//​
//// Checking correct implementation of methods that change page
//const p1 = new Pagination(new Array(69), 5);
//Test.assertEquals(p1.nextPage().currentPage,     2);
//Test.assertEquals(p1.lastPage().currentPage,    14);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Exact Factorial Bounds

//tags: loops,numbers,validation

//url: https://edabit.com/challenge/jFqttm7eFe8j4WMPu

//Description:
//Create a function that tests if a number is the exact upper bound of the factorial of n. If so, return an array of the exact factorial bound and n, or otherwise, the string "Not exact!".
//Examples
//isExact(6) ➞ [6, 3]
//
//isExact(24) ➞ [24, 4]
//
//isExact(125) ➞ "Not exact!"
//
//isExact(720) ➞ [720, 6]
//
//isExact(1024) ➞ "Not exact!"
//
//isExact(40320) ➞ [40320, 8]
//Notes
//There will be no exceptions to handle, all inputs are positive integers.
//A recursive version of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(isExact(2), [2, 2])
//Test.assertSimilar(isExact(6), [6, 3])
//Test.assertSimilar(isExact(24), [24, 4])
//Test.assertSimilar(isExact(120), [120, 5])
//Test.assertSimilar(isExact(5040), [5040, 7])
//Test.assertSimilar(isExact(40320), [40320, 8])
//Test.assertSimilar(isExact(3628800), [3628800, 10])
//Test.assertSimilar(isExact(20922789888000), [20922789888000, 16])
//Test.assertEquals(isExact(125), "Not exact!")
//Test.assertEquals(isExact(721), "Not exact!")
//Test.assertEquals(isExact(1024), "Not exact!")
//Test.assertEquals(isExact(41845579776000), "Not exact!")

