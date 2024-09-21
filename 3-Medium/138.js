

//title: Word Riddles

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/Nz7ZmEeMFZ6GznPex

//Description:
//What does the word LFAND represent? It represents the word Finland, because F is in LAND!
//Create a function which replicates this to create brand new original word riddles! For the purposes of this challenge, take the string of letters before the word "in", and insert it into the 2nd letter position of the word formed after the word "in".
//See the examples below for further clarity :)
//Examples
//makeWordRiddle("Finland") ➞ "LFAND"
//
//makeWordRiddle("dinner") ➞ "NDER"
//
//makeWordRiddle("tkinter") ➞ "TTKER"
//
//makeWordRiddle("STRINGS") ➞ "GSTRS"
//Notes
//All words given will contain only one occurence of "in" (so no occurences of the words Insulin, Infinity, etc).
//There will be no examples of Interest, Pin, or Ping, etc... as there is no clear way to insert the strings into one another.
//Return in all CAPS.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(makeWordRiddle('Finland'), 'LFAND')
//Test.assertEquals(makeWordRiddle('dinner'), 'NDER')
//Test.assertEquals(makeWordRiddle('tkinter'), 'TTKER')
//Test.assertEquals(makeWordRiddle('STRINGS'), 'GSTRS')
//Test.assertEquals(makeWordRiddle('continue'), 'UCONTE')
//Test.assertEquals(makeWordRiddle('cinematographer'), 'ECMATOGRAPHER')
//Test.assertEquals(makeWordRiddle('distinguishable'), 'GDISTUISHABLE')
//Test.assertEquals(makeWordRiddle('Determination'), 'ADETERMTION')
//Test.assertEquals(makeWordRiddle('plainclothesman'), 'CPLALOTHESMAN')
//Test.assertEquals(makeWordRiddle('attainablities'), 'AATTABLITIES')
//Test.assertEquals(makeWordRiddle('administrations'), 'IADMSTRATIONS')
//Test.assertEquals(makeWordRiddle('chloestyramines'), 'ECHLOESTYRAMS')
//Test.assertEquals(makeWordRiddle('bituminizations'), 'IBITUMZATIONS')
//Test.assertEquals(makeWordRiddle('metalinguistics'), 'GMETALUISTICS')
//Test.assertEquals(makeWordRiddle('choriocarcinoma'), 'OCHORIOCARCMA')
//Test.assertEquals(makeWordRiddle('trinitrotoluene'), 'ITRTROTOLUENE')
//Test.assertEquals(makeWordRiddle('provINcial'), 'CPROVIAL')
//Test.assertEquals(makeWordRiddle('SlingShot'), 'GSLSHOT')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Every Nth Number

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/jzPuM8s7HcGni7Ewi

//Description:
//Given an array of numbers and a positive value for n, return the sum of every nth number in the array.
//Examples
//sumEveryNth([4, 8, 6, 6, 7, 9, 3], 1) ➞ 43
//// 4+8+6+6+7+9+3 = 43
//
//sumEveryNth([7, 3, 10, 4, 5, 8, 4, 9, 6, 9, 10, 1, 4], 4) ➞ 14
//// 4+9+1 = 14
//
//sumEveryNth([10, 6, 5, 4, 5, 2, 3, 3, 8, 10, 7, 2], 8) ➞ 3
//// 3
//
//sumEveryNth([6, 8, 9, 4, 6, 4, 7, 1, 5, 6, 10, 2], 13) ➞ 0
//// only 12 numbers in array
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumEveryNth([2, 5, 3, 9, 5, 7, 10, 7, 3, 3, 3], 9), 3)
//Test.assertEquals(sumEveryNth([10, 9, 2, 5, 9, 6, 4, 6, 7, 10, 9, 9, 9, 9, 2, 1, 2], 7), 13)
//Test.assertEquals(sumEveryNth([4, 5, 8, 7, 8, 1, 7, 9, 7, 4, 6, 2, 8, 8, 9, 9, 1, 7, 4], 6), 10)
//Test.assertEquals(sumEveryNth([8, 3, 5, 2, 6, 1, 5, 4, 3, 6, 6, 8, 5, 10, 7, 3, 7, 3, 5], 11), 6)
//Test.assertEquals(sumEveryNth([8, 9, 4, 8, 7, 5, 2, 9, 1, 8, 3, 8, 4, 9, 9, 6], 11), 3)
//Test.assertEquals(sumEveryNth([8, 2, 2, 7, 10, 6, 3, 5, 4, 4], 12), 0)
//Test.assertEquals(sumEveryNth([7, 4, 4, 10, 2, 6, 1, 9, 5, 10, 6, 4, 6, 6, 5, 9, 4, 10, 9], 8), 18)
//Test.assertEquals(sumEveryNth([5, 10, 10, 9, 10, 3, 5, 6, 6, 2, 10, 2, 9, 6, 8, 9, 10, 9, 4], 16), 9)
//Test.assertEquals(sumEveryNth([10, 4, 8, 4, 3, 9, 1, 1, 10, 7, 1, 4, 5, 5, 6, 1, 9], 6), 13)
//Test.assertEquals(sumEveryNth([2, 6, 3, 10, 6, 5, 4, 7, 9, 4, 1, 8, 9, 10, 8, 7, 2, 3, 6], 8), 14)
//Test.assertEquals(sumEveryNth([10, 9, 7, 8, 5, 7, 9, 5, 3, 3, 1], 7), 9)
//Test.assertEquals(sumEveryNth([7, 2, 9, 6, 1, 8, 8, 10, 2, 5, 5, 7, 3, 10, 1], 2), 48)
//Test.assertEquals(sumEveryNth([3, 10, 3, 8, 10, 9, 1, 3, 7, 2], 2), 32)
//Test.assertEquals(sumEveryNth([6, 5, 7, 9, 4, 2, 2, 9, 8, 10, 5, 2, 8], 7), 2)
//Test.assertEquals(sumEveryNth([9, 3, 7, 10, 3, 10, 2, 8, 8, 7, 1], 11), 1)
//Test.assertEquals(sumEveryNth([4, 6, 10, 8, 4, 7, 10, 10, 4, 4, 9, 2, 1, 9, 9, 8, 6, 6, 10], 7), 19)
//Test.assertEquals(sumEveryNth([3, 3, 2, 6, 4, 4, 10, 2, 10, 5, 5, 8, 6], 1), 68)
//Test.assertEquals(sumEveryNth([10, 1, 10, 8, 3, 2, 10, 8, 2, 3, 8, 7, 6, 4, 8], 6), 9)
//Test.assertEquals(sumEveryNth([5, 1, 4, 7, 3, 9, 4, 5, 9, 6, 1, 6, 9, 6, 7, 6, 8, 1], 14), 6)
//Test.assertEquals(sumEveryNth([2, 1, 7, 4, 2, 6, 2, 4, 6, 1, 2, 2, 10, 10], 2), 28)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Promises V: Then

//tags: functional_programming

//url: https://edabit.com/challenge/xsaGheX3yQ4g4Tb8b

//Description:
//So we can use resolve and reject callbacks to help us store async results whether successful or unsuccessful, but what good are those if we don't have access to those results. Thus we have the then function which returns a promise that appends either a fulfilled or rejection handler(callback) or just returns the settled value.
//let promise = new Promise( (resolve, reject) => {
//  setTimeout(( ) => {
//     resolve("success!")
//  }, 1000)
//})
//
//promise.then() // returns the settled value
//promise.then((val) => console.log(val)) // logs the result of the **onFufilled** callback
//Challenge
//Add the necessary pieces to fix the promise and the then function.
//It should resolve to a message success!.
//Re-assign the result to the settled value inside the then function.
//Notes
//Check the Resources tab for more info on promises.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//function promiseState(p) {
//  const t = {};
//  return Promise.race([p, t]).then(v => (v === t)? "pending" : "fulfilled", () => "rejected");
//}
//​
//Test.assertEquals(result, "", "You are only allowed to reassign 'result' inside of the 'onFulfilled' callback.")
//promiseState(promise).then(state => Test.assertEquals(state, "fulfilled", "Did pass in the resolve callback to your promise?"))
//promise.then(x => Test.assertEquals(result, "success!"))

