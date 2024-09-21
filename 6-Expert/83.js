

//title: Finding the Number of Rectangles

//tags: geometry,math

//url: https://edabit.com/challenge/XeZnbRtkPT8J5SY2h

//Description:
//You are given an array of distinct (x, y) coordinates. Create a function that returns how many rectangles these points form on the plane.
//Examples
//rectangles([[1, 1], [2, 1], [1, 2], [2, 2]]) ➞ 1
//
//rectangles([[1, 1], [2, 1], [1, 2], [2, 2], [3, 1], [3, 2]]) ➞ 3
//
//rectangles([[1, 1], [1, 2], [2, 1], [2, 2], [3, 1], [3, 2], [3, 3], [2, 3], [1, 3]]) ➞ 10
//// Note: We have a rectangle with vertices (2, 1), (3, 2), (2, 3), and (1, 2).
//Notes
//Don't forget to count rectangles that aren't parallel to the x- and y-axis (see example #3).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rectangles([[1, 1], [2, 1], [1, 2], [2, 2]]), 1)
//Test.assertEquals(rectangles([[1, 1], [2, 1], [1, 2], [2, 2], [3, 1], [3, 2]]), 3)
//Test.assertEquals(rectangles([[1, 1], [1, 2], [2, 1], [2, 2], [3, 1], [3, 2], [3, 3], [2, 3], [1, 3]]), 10)
//Test.assertEquals(rectangles([[1, 1], [1, 2], [2, 2], [3, 1], [3, 2]]), 1)
//Test.assertEquals(rectangles([[1, 1], [1, 2], [2, 1], [2, 2], [3, 1], [3, 2], [2, 3], [1, 3]]), 6)
//Test.assertEquals(rectangles([[1, 1], [1, 2], [2, 1], [2, 2], [3, 1], [3, 2], [3, 3], [2, 3], [1, 3], [4, 1], [4, 2], [4, 3], [4, 4], [3, 4], [2, 4], [1, 4]]), 44)
//Test.assertEquals(rectangles([[1, 1], [1, 3], [2, 2], [3, 2], [3, 3]]), 0)
//Test.assertEquals(rectangles([[1, 1], [1, 2], [2, 1], [2, 2], [3, 1], [3, 2], [3, 3], [2, 3], [1, 3], [4, 1], [4, 2], [4, 3], [4, 4], [3, 4], [2, 4], [1, 4], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [4, 5], [3, 5], [2, 5], [1, 5]]), 130)
//Test.assertEquals(rectangles([[-4, 0], [-1, 0], [-4, -3], [-1, -3], [-4, -10], [-1, -10]]), 3)
//Test.assertEquals(rectangles([[42, 0], [0, 42], [-42, 0], [0, -42]]), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ES6: Recursive String Builder

//tags: recursion,strings

//url: https://edabit.com/challenge/LMkhSsuCgpHYm8fCS

//Description:
//Write a getStringBuilder() function that returns an object. Any arbitrary property of that object will also be an object as will the properties of that object. Recursively. Invoking any of the child objects should return a string generated from the entire property chain.
//Examples
//getStringBuilder().Hello.there() ➞ "Hello there"
//
//getStringBuilder().one.two.three.four() ➞ "one two three four"
//
//getStringBuilder().we.live.in.a.society() ➞ "we live in a society"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getStringBuilder().hello.how.are.you.today(), 'hello how are you today')
//Test.assertEquals(getStringBuilder().Hello.there(), 'Hello there')
//Test.assertEquals(getStringBuilder().one.two.three.four(), 'one two three four')
//Test.assertEquals(getStringBuilder().we.live.in.a.society(), 'we live in a society')
//Test.assertEquals(getStringBuilder().today.is.the.greatest.day.I.have.ever.known(), 'today is the greatest day I have ever known')
//Test.assertEquals(getStringBuilder().there.are.only.two.hard.things.in.Computer.Science.cache.invalidation.and.naming.things(), 'there are only two hard things in Computer Science cache invalidation and naming things')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find Possible Path Sort by Alphabetical Order

//tags: algorithms,arrays,logic,loops,sorting

//url: https://edabit.com/challenge/PwbNYKwpbRD8wPMsa

//Description:
//Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from A. Thus, the itinerary must begin with A.
//Examples
//findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]]) ➞ ["A", "C", "F", "I", "Z"]
//
//findPath([["A","C"],["A","B"],["C","B"],["B","A"],["B","C"]]) ➞ ["A","B","A","C","B","C"]
//// Another possible reconstruction is ["A","C","B","A","B","C"].
//// But it is larger in lexical order.
//
//findPath([["Y", "L"], ["D", "A"],["A", "D"], ["R", "Y"], ["A", "R"]]) ➞  ["A", "D", "A", "R", "Y", "L"]
//Notes
//If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["A", "B"] has a smaller lexical order than ["A", "C"].
//You may assume all tickets form at least one valid itinerary.
//One must use all the tickets once and only once.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]]), ["A", "C", "F", "I", "Z"])
//Test.assertSimilar(findPath([["A","C"],["A","B"],["C","B"],["B","A"],["B","C"]]), ["A","B","A","C","B","C"])
//Test.assertSimilar(findPath([["Y", "L"], ["D", "A"],["A", "D"], ["R", "Y"], ["A", "R"]]), ["A", "D", "A", "R", "Y", "L"])
//Test.assertSimilar(findPath([["G","H"],["A","Z"],["A","G"],["H","A"]]), ["A","G","H","A","Z"])
//Test.assertSimilar(findPath([["C","D"],["F","K"],["K","P"],["E","A"],["P","U"],["A","B"],["A","F"],["B","C"],["D","E"]]), ["A","B","C","D","E","A","F","K","P","U"])

