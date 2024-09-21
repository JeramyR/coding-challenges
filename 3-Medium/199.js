

//title: Strictly Increasing or Decreasing

//tags: arrays,conditions,control_flow,loops

//url: https://edabit.com/challenge/E4zMxggTmqxS2Fmcj

//Description:
//Create a function that takes an array and determines whether it's strictly increasing, strictly decreasing, or neither.
//Examples
//check([1, 2, 3]) ➞ "increasing"
//
//check([3, 2, 1]) ➞ "decreasing"
//
//check([1, 2, 1]) ➞ "neither"
//
//check([1, 1, 2]) ➞ "neither"
//Notes
//The last example does NOT count as strictly increasing, since 1-indexed 1 is not strictly greater than the 0-indexed 1.
//Input arrays have a minimum length of 2.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(check([1, 2, 3]), "increasing")
//Test.assertEquals(check([3, 2, 1]), "decreasing")
//Test.assertEquals(check([1, 2, 1]), "neither")
//Test.assertEquals(check([1, 1, 2]), "neither")
//Test.assertEquals(check([1, 3, 5, 7, 9, 10]), "increasing")
//Test.assertEquals(check([5, 6, 5, 7, 9, 10]), "neither")
//Test.assertEquals(check([5, 7]), "increasing")
//Test.assertEquals(check([9, 7, 1]), "decreasing")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Anonymous Functions All the Way Down

//tags: functional_programming,higher_order_functions,recursion

//url: https://edabit.com/challenge/zaJeE6susYdwRyB6j

//Description:
//Create a function which takes a parameter n and returns a function such that it, when called n times, returns the string "edabit".
//Examples
//lambdaDepth(0) ➞ "edabit"
//
//lambdaDepth(1)() ➞ "edabit"
//
//lambdaDepth(2)()() ➞ "edabit"
//
//typeof lambdaDepth(2)() ➞ "function"
//Notes
//num will always be a non-negative integer.
//If num == 0, return "edabit".
//If num > 0, return a function.
//All non-example test cases come in two forms: checking whether lambda_depth(k), after being called k times, returns a string, and checking whether lambda_depth(k) returns a function.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lambdaDepth(0), 'edabit', 'Depth: 0')
//Test.assertEquals(lambdaDepth(1)(), 'edabit', 'Depth: 1')
//Test.assertEquals(lambdaDepth(2)()(), 'edabit', 'Depth: 2')
//Test.assertEquals(typeof lambdaDepth(2)(), 'function', 'Depth: 2')
//​
//// The following for loop generates 20 additional test cases.
//// For each integer k, the first test case calls lambda_depth(k)
//// and checks that lambda_depth(k), when called k times, returns 'edabit'.
//// The second test case checks if lambda_depth(k) returns a function.
//​
//for (k = 5; k < 15; k++) {
//  n = k.toString()
//  eval("Test.assertEquals(lambdaDepth(" + n + ")" + "()".repeat(k) + ", 'edabit', 'Depth: " + n + "')")
//  Test.assertEquals(typeof lambdaDepth(k), 'function', 'Depth: ' + n)
//}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mubashir Cipher

//tags: algorithms,cryptography,logic,loops,strings

//url: https://edabit.com/challenge/J4idWvahCYHPGnsMT

//Description:
//In Mubashir Cipher, encoding is done by simply replacing paired letters from the provided key.
//Create a function that takes a string containing the message to be encoded with a fixed given 2D array of letters key.
//There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
//key = [['m', 'c'], ['u', 'e'], ['b', 'g'], ['a', 'k'],
//    ['s', 'v'], ['h', 'x'], ['i', 'z'], ['r', 'y'],
//    ['p', 'w'], ['l', 'n'], ['o', 'j'], ['t', 'f'], ['q', 'd']]
//
//message = "edabit is amazing !"
//
//mubashirCipher(message) ➞ "uqkgzf zv kckizlb !"
//Step 1: Search letter in the given key and replace it with paired letter:
//e = u
//d = q
//a = k
//b = g
//.
//.
//.
//g = b
//Step 2: Keep all characters (including spaces) other than letters in their original positions:
//"uqkgzf zv kckizlb !"
//See the below examples for a better understanding:
//Examples
//mubashirCipher("mubashir is not amazing") ➞ "cegkvxzy zv ljf kckizlb"
//
//mubashirCipher("%$ &%") ➞ "%$ &%"
//
//mubashirCipher("evgeny sh is amazing") ➞ "usbulr vx zv kckizlb"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mubashirCipher("mubashir is not amazing"), "cegkvxzy zv ljf kckizlb")
//Test.assertEquals(mubashirCipher("edabit is amazing !"), "uqkgzf zv kckizlb !")
//Test.assertEquals(mubashirCipher("%$ &%"), "%$ &%")
//Test.assertEquals(mubashirCipher("~!@#$%^&*()_+= -0 98 76 54 3 2 1"), "~!@#$%^&*()_+= -0 98 76 54 3 2 1")
//Test.assertEquals(mubashirCipher("matt && is amazing"), "ckff && zv kckizlb")
//Test.assertEquals(mubashirCipher("evgeny sh is amazing"), "usbulr vx zv kckizlb")
//Test.assertEquals(mubashirCipher("airforce needs me ?"), "kzytjymu luuqv cu ?")
//Test.assertEquals(mubashirCipher("pakistan is love !"), "wkazvfkl zv njsu !")
//// Mubashir

