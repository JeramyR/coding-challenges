

//title: Contact List

//tags: arrays,sorting

//url: https://edabit.com/challenge/oK8YTFzTDBzjQpmtH

//Description:
//Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).
//Examples
//sortContacts([
//  "John Locke",
//  "Thomas Aquinas",
//  "David Hume",
//  "Rene Descartes"
//], "ASC") ➞ [
//  "Thomas Aquinas",
//  "Rene Descartes",
//  "David Hume",
//  "John Locke"
//]
//
//// Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)
//
//sortContacts([
//  "Paul Erdos",
//  "Leonhard Euler",
//  "Carl Gauss"
//], "DESC") ➞ [
//  "Carl Gauss",
//  "Leonhard Euler",
//  "Paul Erdos"
//]
//
//// Gauss (G) > Erdos (ER) > Euler (EU)
//
//sortContacts([], "DESC") ➞ []
//
//sortContacts(null, "DESC") ➞ []
//
//sortContacts(undefined, "DESC") ➞ []
//Notes
//An array with a single name should be trivially returned.
//An empty array, or an input of null or undefined should return an empty array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sortContacts(['John Locke', 'Thomas Aquinas', 'David Hume', 'Rene Descartes'], 'ASC'), ['Thomas Aquinas', 'Rene Descartes', 'David Hume', 'John Locke'])
//Test.assertSimilar(sortContacts(['Paul Erdos', 'Leonhard Euler', 'Carl Gauss'], 'DESC'), ['Carl Gauss', 'Leonhard Euler', 'Paul Erdos'])
//Test.assertSimilar(sortContacts(['Michael Phelps', 'Jesse Owens', 'Michael Jordan', 'Usain Bolt'], 'DESC'), ['Michael Phelps', 'Jesse Owens', 'Michael Jordan', 'Usain Bolt'])
//Test.assertSimilar(sortContacts(['Al Gore', 'Barack Obama'], 'ASC'), ['Al Gore', 'Barack Obama'])
//Test.assertSimilar(sortContacts(['Albert Einstein'], 'ASC'), ['Albert Einstein'])
//Test.assertSimilar(sortContacts([], 'DESC'), [])
//Test.assertSimilar(sortContacts(null, 'DESC'), [])
//Test.assertSimilar(sortContacts(undefined, 'DESC'), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (23): Find and Remove

//tags: arrays,loops,objects

//url: https://edabit.com/challenge/MregZPPJWSxhXtrNB

//Description:
//The insurance guy calls. They were about to pay you all that fortune you've been anxiously waiting for, but they detected further irregularities; the list of stolen items is misformatted and appears to contain other entries that don't belong there. Find and remove them.
//You receive an object with nested objects with strings as values. Convert their values to number and return an object without the entries that evaluate to NaN.
//Examples
//findAndRemove({
//    bedroom: {
//      slippers: "10000",
//      piano: "550",
//      call: "vet",
//      travel: "world",
//    },
//  }) ➞ {
//    bedroom: {
//      slippers: 10000,
//      piano: 5500,
//    },
//  }
// findAndRemove({
//    kitchen: {
//      ["gold spoons"]: "900",
//      piano: "550",
//      notes: "ga0r76ba22g4e",
//    },
//    cellar: {
//      reminder: "dog",
//      bottle: "750",
//    },
//  }) ➞ {
//    kitchen: {
//      ["gold spoons"]: 900,
//      piano: 550,
//    },
//    cellar: {
//      bottle: 750,
//    },
//  }
//Notes
//The type of NaN is actually number.
//If you have suggestions on how to present or further test this challenge please leave a comment.
//This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const random = Math.random()
//const randomString = Test.randomToken()
//const obj = {
//    bedroom: {
//      slippers: "10000",
//      piano: String(random),
//      call: "vet",
//      travel: "world",
//    },
//  }
//const obj2 = {
//      kitchen: {
//        ["gold spoons"]: "900",
//        piano: "550",
//        notes: randomString,
//      },
//      cellar: {
//        reminder: "dog",
//        bottle: "750",
//    },
//  }
//const obj3 = {attic: { node: "js", },};
//const obj4 = {
//    bedroom: {
//      slippers: "10000",

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Primal Strength

//tags: math,numbers,validation

//url: https://edabit.com/challenge/n3w4fqdaMuCB9bjgs

//Description:
//In number theory, a prime number is balanced if it is equidistant from the prime before it and the prime after it. It is therefore the arithmetic mean of those primes. For example, 5 is a balanced prime, two units away from 3, and two from 7. 211 is 12 units away from the previous prime, 199, and 12 away from the next, 223.
//A prime that is greater than the arithmetic mean of the primes before and after it is called a strong prime. It is closer to the prime after it than the one before it. For example, the strong prime 17 is closer to 19 than it is to 13 (see note at bottom).
//A prime that is lesser than the arithmetic mean of the primes before and after it is called weak prime. For example, 19.
//Create a function that takes a prime number as input and returns "Strong" if it is a strong prime, "Weak" if it is a weak prime, or "Balanced".
//Examples
//primalStrength(211) ➞ "Balanced"
//
//primalStrength(17) ➞ "Strong"
//
//primalStrength(19) ➞ "Weak"
//Notes
//This definition of strong primes is not to be confused with strong primes as defined in cryptography, which are much more complicated than this. You are all welcome to make a challenge based on cryptographically strong primes.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(primalStrength(5), "Balanced")
//Test.assertEquals(primalStrength(211), "Balanced")
//Test.assertEquals(primalStrength(593), "Balanced")
//Test.assertEquals(primalStrength(1693), "Strong")
//Test.assertEquals(primalStrength(599), "Strong")
//Test.assertEquals(primalStrength(2203), "Strong")
//Test.assertEquals(primalStrength(19), "Weak")
//Test.assertEquals(primalStrength(2971), "Weak")
//Test.assertEquals(primalStrength(1493), "Weak")

