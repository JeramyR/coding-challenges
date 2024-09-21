

//title: Promises VI: Catch

//tags: functional_programming

//url: https://edabit.com/challenge/CstPAznqLdPSPYyAC

//Description:
//We handle resolve callbacks with then, but what about reject callbacks? We have a catch function that we can use to handle errors or rejected promises. It is generally a good idea to have an error handler at the end of your promises.
//Challenge
//Write an error handler for the provided promise. Re-assign errorLog to the error inside your error handler.
//The error handler must be added to the original promise. So you can't do promise.catch(/error handling/). See the Comments for more details.
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
//Test.assertSimilar(errorLog, {}, "You are only allowed to reassign 'errorLog' inside of the 'catch' method.")
//promiseState(promise).then(state => Test.assertEquals(state, "pending", "ignore this test"))
//promise.then(x => Test.assertEquals(x.message, "Something failed"))
//promise.then(x => Test.assertEquals(errorLog.message, "Something failed"))

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reorder Digits

//tags: arrays,functional_programming,higher_order_functions,sorting

//url: https://edabit.com/challenge/4zCJaqJvEcAmqcb7y

//Description:
//Create a function that reorders the digits of each numerical element in an array based on ascending (asc) or descending (desc) order.
//Examples
//reorderDigits([515, 341, 98, 44, 211], "asc") ➞ [155, 134, 89, 44, 112]
//
//reorderDigits([515, 341, 98, 44, 211], "desc") ➞ [551, 431, 98, 44, 211]
//
//reorderDigits([63251, 78221], "asc") ➞ [12356, 12278]
//
//reorderDigits([63251, 78221], "desc") ➞ [65321, 87221]
//
//reorderDigits([1, 2, 3, 4], "asc")  ➞ [1, 2, 3, 4]
//
//reorderDigits([1, 2, 3, 4], "desc") ➞ [1, 2, 3, 4]
//Notes
//Single-digit numbers should be ordered the same regardless of direction.
//Numbers in the array should be kept the same order.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(reorderDigits([515, 341, 98, 44, 211], 'asc'), [155, 134, 89, 44, 112])
//Test.assertSimilar(reorderDigits([515, 341, 98, 44, 211], 'desc'), [551, 431, 98, 44, 211])
//​
//Test.assertSimilar(reorderDigits([63251, 78221], 'asc'), [12356, 12278])
//Test.assertSimilar(reorderDigits([63251, 78221], 'desc'), [65321, 87221])
//​
//Test.assertSimilar(reorderDigits([1, 2, 3, 4], 'asc'), [1, 2, 3, 4])
//Test.assertSimilar(reorderDigits([1, 2, 3, 4], 'desc'), [1, 2, 3, 4])
//​
//Test.assertSimilar(reorderDigits([12, 21, 15, 51], 'asc'), [12, 12, 15, 15])
//Test.assertSimilar(reorderDigits([12, 21, 15, 51], 'desc'), [21, 21, 51, 51])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Meme Sum :)

//tags: math,numbers

//url: https://edabit.com/challenge/FxFcBDTGuBCTXgZhu

//Description:
//For this challenge, forget how to add two numbers together. The best explanation on what to do for this function is this meme:
//
//Examples
//memeSum(26, 39) ➞ 515
//// 2+3 = 5, 6+9 = 15
//// 26 + 39 = 515
//
//memeSum(122, 81) ➞ 1103
//// 1+0 = 1, 2+8 = 10, 2+1 = 3
//// 122 + 81 = 1103
//
//memeSum(1222, 30277) ➞ 31499
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(memeSum(2, 11), 13)
//Test.assertEquals(memeSum(0, 1), 1)
//Test.assertEquals(memeSum(0, 0), 0)
//Test.assertEquals(memeSum(16, 18), 214)
//Test.assertEquals(memeSum(26, 39), 515)
//Test.assertEquals(memeSum(122, 81), 1103)
//Test.assertEquals(memeSum(1222, 30277), 31499)
//Test.assertEquals(memeSum(38810, 1383), 391193)
//Test.assertEquals(memeSum(1236, 30977), 31111013)
//Test.assertEquals(memeSum(49999, 49999), 818181818)
//​
//// Mubashir

