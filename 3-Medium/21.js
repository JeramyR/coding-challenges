

//title: Get Sum of People`s Budget

//tags: arrays,logic,objects

//url: https://edabit.com/challenge/tmnCStcrkdWbreKP5

//Description:
//Create the function that takes an array with objects and returns the sum of people's budgets.
//Examples
//getBudgets([
//  { name: "John", age: 21, budget: 23000 },
//  { name: "Steve",  age: 32, budget: 40000 },
//  { name: "Martin",  age: 16, budget: 2700 }
//]) ➞ 65700
//
//getBudgets([
//  { name: "John",  age: 21, budget: 29000 },
//  { name: "Steve",  age: 32, budget: 32000 },
//  { name: "Martin",  age: 16, budget: 1600 }
//]) ➞ 62600
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getBudgets([{name: "John",  age: 21, budget: 23000}, {name: "Steve",  age: 32, budget: 40000}, {name: "Martin",  age: 16, budget: 2700}]), 65700)
//Test.assertEquals(getBudgets([{name: "John",  age: 21, budget: 29000}, {name: "Steve",  age: 32, budget: 32000}, {name: "Martin",  age: 16, budget: 1600}]), 62600)
//Test.assertEquals(getBudgets([{name: "John",  age: 21, budget: 19401}, {name: "Steve",  age: 32, budget: 12321}, {name: "Martin",  age: 16, budget: 1204}]), 32926)
//Test.assertEquals(getBudgets([{name: "John",  age: 21, budget: 10234}, {name: "Steve",  age: 32, budget: 21754}, {name: "Martin",  age: 16, budget: 4935}]), 36923)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Match the Last Item

//tags: arrays,strings,validation

//url: https://edabit.com/challenge/jbR9NupEL8zAZkbKx

//Description:
//Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.
//Examples
//matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
//// The last item is the rest joined.
//
//matchLastItem([1, 1, 1, "11"]) ➞ false
//// The last item should be "111".
//
//matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true
//Notes
//The array is always filled with items.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(matchLastItem(['rsq', '6hi', 'g', 'rsq6hig']), true)
//Test.assertEquals(matchLastItem([ 0, 1, 2, 3, 4, 5, '12345' ]), false)
//Test.assertEquals(matchLastItem([ 'for', 'mi', 'da', 'bel', 'formidable' ]), false)
//Test.assertEquals(matchLastItem([8, 'thunder', true, '8thundertrue']), true)
//Test.assertEquals(matchLastItem([ 1, 1, 1, '11' ]), false)
//Test.assertEquals(matchLastItem(['tocto','G8G','xtohkgc','3V8','ctyghrs',100.88,'fyuo','Q','toctoG8Gxtohkgc3V8ctyghrs100.88fyuoQ']), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (01): Calculate Total Losses

//tags: arrays,loops,objects

//url: https://edabit.com/challenge/pLNavsePxJ87t9Nak

//Description:
//You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".
//Examples
//const stolenItems = {
//  tv: 30,
//  skate: 20,
//  stereo: 50,
//} ➞ 100
//
//const stolenItems = {
//  painting: 20000,
//} ➞ 20000
//
//const stolenItems = {} ➞ "Lucky you!"
//Notes
//The item value is always positive.
//This is my first experience in creating a challenge. I started to learn testing so I decided to give it a go here at Edabit as well. Hope I did it right... Suggestions are very welcome!
//This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that there.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(calculateLosses({
//  tv: 30,
//  skate: 20,
//  stereo: 50,
//}), 100)
//​
//Test.assertEquals(calculateLosses({
//  ring: 30000,
//  painting: 20000,
//  bust: 1,
//}), 50001)
//​
//Test.assertEquals(calculateLosses({
//  chair: 3500,
//}), 3500)
//​
//Test.assertEquals(calculateLosses({}), "Lucky you!")

