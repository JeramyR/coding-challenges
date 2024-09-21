

//title: Superheroes

//tags: arrays,regex

//url: https://edabit.com/challenge/FdwbNYkFrF36NwJxa

//Description:
//Create a function that takes an array of superheroes / superheroines names and returns an array of only superheroe names ending in "man". Return the names in alphabetical order.
//Examples
//superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"])
//➞ ["Batman", "Spider-man", "Superman"]
//
//superheroes(["Catwoman", "Deadpool", "Dr.Strange", "Captain-America", "Aquaman", "Hawkeye"])
//➞ ["Aquaman"]
//
//superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"])
//➞ []
//Notes
//Wonder-Woman, Catwoman and Invisible-Woman are superheroines.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"]), ["Batman", "Spider-man", "Superman"]);
//Test.assertSimilar(superheroes(["Catwoman", "Deadpool", "Dr.Strange", "Captain-America", "Aquaman", "Hawkeye"]), ["Aquaman"]);
//Test.assertSimilar(superheroes(["Iron-man", "Thor", "Black-Panther", "Iceman", "Catwoman", "Invisible-Woman"]), ["Iceman", "Iron-man"]);
//Test.assertSimilar(superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Deadpool", "Dr.Strange", "Captain-America", "Aquaman", "Hawkeye", "Iron-man", "Thor", "Black-Panther", "Iceman"]), ["Aquaman", "Batman", "Iceman", "Iron-man", "Spider-man", "Superman"]);
//Test.assertSimilar(superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"]), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: All Numbers in Array Are Prime

//tags: arrays,math,validation

//url: https://edabit.com/challenge/Cn5Z8vqaijYzCC7uY

//Description:
//Create a function that takes an array of integers and returns true if every number is prime. Otherwise, return false.
//Examples
//allPrime([7, 5, 2, 4, 6]) ➞ false
//
//allPrime([2, 3, 5, 7, 13, 17, 19, 23, 29]) ➞ true
//
//allPrime([1, 5, 3]) ➞ false
//Notes
//1 is not a prime number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(allPrime([7, 5, 2, 4, 6]), false)
//Test.assertEquals(allPrime([2, 3, 5, 7, 13, 17, 19, 23, 29]), true)
//Test.assertEquals(allPrime([1, 5, 3]), false)
//Test.assertEquals(allPrime([5, 3]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Max Adjacent Product

//tags: algebra,algorithms,math,numbers

//url: https://edabit.com/challenge/gRtHcBJSZf6fTaz8g

//Description:
//Given an array of integers, find the pair of adjacent elements that have the largest product and return that product.
//Examples
//adjacentProduct([3, 6, -2, -5, 7, 3] ) ➞ 21
//
//adjacentProduct([5, 6, -4, 2, 3, 2, -23]) ➞ 30
//
//adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10]) ➞ 80
//Notes
//Each array has at least two elements.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(adjacentProduct([3, 6, -2, -5, 7, 3]), 21)
//Test.assertEquals(adjacentProduct([5, 6, -4, 2, 3, 2, -23]) , 30)
//Test.assertEquals(adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10]), 80)
//Test.assertEquals(adjacentProduct([1, 0, 1, 0, 1000]), 0)
//Test.assertEquals(adjacentProduct([-23, 4, -3, 8, -12]), -12)
//Test.assertEquals(adjacentProduct([-1, -2]), 2)

