

//title: Burglary Series (15): Number of Occurrences

//tags: arrays,loops,objects

//url: https://edabit.com/challenge/Mwryyhy2e8Gk9yrCh

//Description:
//To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.
//Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.
//Examples
//countNumberOfOccurrences({
//  a: "moron",
//  b: "scumbag",
//  c: "moron",
//  d: "idiot",
//  e: "idiot"
//}) ➞ { moron: 2, scumbag: 1, idiot: 2 }
//
//
//countNumberOfOccurrences({
//  a: "moron",
//  b: "moron",
//  c:"moron"
//}) ➞ { moron: 3 }
//
//
//countNumberOfOccurrences({
//  a: "idiot",
//  b: "scumbag"
//}) ➞ { idiot: 1, scumbag: 1 }
//Notes
//N / A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const obj = { a: "moron", b: "scumbag", c: "moron", d: "idiot", e: "idiot" }
//const obj2 = { a: "pig", b: "pig", c: "pig" }
//const obj3 = { a: "sleazball", b: "pervert", c: "pervert", d: "pervert" }
//​
//Test.assertSimilar(countNumberOfOccurrences(obj), { moron: 2, scumbag: 1, idiot:2 } )
//Test.assertSimilar(countNumberOfOccurrences(obj2), { pig: 3 })
//Test.assertSimilar(countNumberOfOccurrences(obj3), { sleazball: 1, pervert: 3 })
//Test.assertEquals(countNumberOfOccurrences(obj3).pervert, 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Instances of the Fibonacci Sequence

//tags: algorithms,arrays,loops,numbers

//url: https://edabit.com/challenge/PeDpzoeGyv9TfF5G5

//Description:
//Create a function that takes a number as an argument and returns n instances of the Fibonacci sequence as an array.
//Fibonacci numbers: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1. So the easy explanation is: The next element is the sum of the two previous elements.
//If you want to read more about this sequence, take a look at the On-Line Encyclopedia of Integer Sequences. Fibonacci numbers are strongly related to the golden ratio. See the OEIS and Wikipedia links in the resources tab.
//Examples
//fibSeq(4) ➞ [0, 1, 1, 2]
//
//fibSeq(7) ➞ [0, 1, 1, 2, 3, 5, 8]
//
//fibSeq(0) ➞ []
//Notes
//If 0 is given, return an empty array.
//If no argument is given, return undefined.
//The input will never be a negative integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(fibSeq(2), [0,1])
//Test.assertSimilar(fibSeq(4), [0,1,1,2])
//Test.assertSimilar(fibSeq(0), [])
//Test.assertSimilar(fibSeq(7), [0,1,1,2,3,5,8])
//Test.assertSimilar(fibSeq(), undefined, 'An empty input has to return undefined')
//Test.assertSimilar(fibSeq(20), [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181])
//Test.assertSimilar(fibSeq(1), [0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: How Many Unique Styles?

//tags: arrays,functional_programming,loops

//url: https://edabit.com/challenge/XcfmvhpRp4t3tQWG2

//Description:
//There are many different styles of music and many albums exhibit multiple styles. Create a function that takes an array of musical styles from albums and returns how many styles are unique.
//Examples
//uniqueStyles([
//  "Dub,Dancehall",
//  "Industrial,Heavy Metal",
//  "Techno,Dubstep",
//  "Synth-pop,Euro-Disco",
//  "Industrial,Techno,Minimal"
//]) ➞ 9
//
//uniqueStyles([
//  "Soul",
//  "House,Folk",
//  "Trance,Downtempo,Big Beat,House",
//  "Deep House",
//  "Soul"
//]) ➞ 7
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(uniqueStyles([
//  "Dub,Dancehall",
//  "Industrial,Heavy Metal",
//  "Techno,Dubstep",
//  "Synth-pop,Euro-Disco",
//  "Industrial,Techno,Minimal"
//]), 9)
//​
//Test.assertEquals(uniqueStyles([
//  "Soul",
//  "House,Folk",
//  "Trance,Downtempo,Big Beat,House",
//  "Deep House",
//  "Soul"
//]), 7)
//​
//Test.assertEquals(uniqueStyles([
//  "Black Metal,Avantgarde",
//  "Funk",
//  "Deep House,House",
//  "Big Band",
//  "Punk"
//]), 7)
//​
//Test.assertEquals(uniqueStyles([

