

//title: Expand a Number II

//tags: algorithms,arrays,language_fundamentals,math,numbers

//url: https://edabit.com/challenge/hndKgmCRjrTuDsMaj

//Description:
//Create a function that expands a decimal number into a string as shown below:
//25.24 ➞ "20 + 5 + 2/10 + 4/100"
//70701.05 ➞ "70000 + 700 + 1 + 5/100"
//685.27 ➞ "600 + 80 + 5 + 2/10 + 7/100"
//Examples
//expandedForm(87.04) ➞ "80 + 7 + 4/100"
//
//expandedForm(123.025) ➞ "100 + 20 + 3 + 2/100 + 5/1000"
//
//expandedForm(50.270) ➞ "50 + 2/10 + 7/100"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(expandedForm(87.04), '80 + 7 + 4/100')
//Test.assertEquals(expandedForm(123.025), '100 + 20 + 3 + 2/100 + 5/1000')
//Test.assertEquals(expandedForm(50.270), '50 + 2/10 + 7/100') 
//Test.assertEquals(expandedForm(207.333), '200 + 7 + 3/10 + 3/100 + 3/1000')
//Test.assertEquals(expandedForm(0.57), '5/10 + 7/100')
//Test.assertEquals(expandedForm(140.023), '100 + 40 + 2/100 + 3/1000')
//Test.assertEquals(expandedForm(90.99), '90 + 9/10 + 9/100')
//Test.assertEquals(expandedForm(84.5), '80 + 4 + 5/10')
//Test.assertEquals(expandedForm(76.02), '70 + 6 + 2/100')
//Test.assertEquals(expandedForm(44.5), '40 + 4 + 5/10')
//Test.assertEquals(expandedForm(37.49), '30 + 7 + 4/10 + 9/100')
//Test.assertEquals(expandedForm(60.0007), '60 + 7/10000')
//Test.assertEquals(expandedForm(29.22), '20 + 9 + 2/10 + 2/100')
//Test.assertEquals(expandedForm(10.99), '10 + 9/10 + 9/100')
//Test.assertEquals(expandedForm(63.09), '60 + 3 + 9/100')
//Test.assertEquals(expandedForm(37.022), '30 + 7 + 2/100 + 2/1000')
//Test.assertEquals(expandedForm(43.21), '40 + 3 + 2/10 + 1/100')
//Test.assertEquals(expandedForm(309.028), '300 + 9 + 2/100 + 8/1000')
//Test.assertEquals(expandedForm(447.33), '400 + 40 + 7 + 3/10 + 3/100')
//Test.assertEquals(expandedForm(65.05), '60 + 5 + 5/100')
//Test.assertEquals(expandedForm(47.34), '40 + 7 + 3/10 + 4/100')
//Test.assertEquals(expandedForm(68.699), '60 + 8 + 6/10 + 9/100 + 9/1000')
//Test.assertEquals(expandedForm(1.24), '1 + 2/10 + 4/100')
//Test.assertEquals(expandedForm(4.28), '4 + 2/10 + 8/100')
//Test.assertEquals(expandedForm(7.304), '7 + 3/10 + 4/1000')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Three Sum Problem

//tags: arrays,loops,math

//url: https://edabit.com/challenge/iPni4XaMwG6qAjxgj

//Description:
//Write a function that returns all sets of three elements that sum to 0.
//Examples
//threeSum([0, 1, -1, -1, 2]) ➞ [[0, 1, -1], [-1, -1, 2]]
//
//threeSum([0, 0, 0, 5, -5]) ➞ [[0, 0, 0], [0, 5, -5]]
//
//threeSum([1, 2, 3]) ➞ []
//
//threeSum([1]) ➞ []
//Notes
//The original array may contain duplicate numbers.
//Each three-element subarray in your output should be distinct.
//Subarrays should be ordered by the first element of the subarray.
//Subarrays themselves should be ordered the same as the original array.
//Return an empty array if no three elements sum to zero.
//Return an empty array if there are fewer than three elements.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(threeSum([0, 1, -1, -1, 2]), [[0, 1, -1], [-1, -1, 2]])
//Test.assertSimilar(threeSum([0, 0, 0, 5, -5]), [[0, 0, 0], [0, 5, -5]])
//Test.assertSimilar(threeSum([0, -1, 1, 0, -1, 1]), [[0, -1, 1], [0, 1, -1], [-1, 1, 0], [-1, 0, 1], [1, 0, -1]])
//Test.assertSimilar(threeSum([0, 5, 5, 0, 0]), [[0, 0, 0]])
//Test.assertSimilar(threeSum([0, 5, -5, 0, 0]), [[0, 5, -5], [0, 0, 0], [5, -5, 0]])
//Test.assertSimilar(threeSum([1, 2, 3, -5, 8, 9, -9, 0]), [[1, 8, -9], [2, 3, -5], [9, -9, 0]])
//Test.assertSimilar(threeSum([0, 0, 0]), [[0, 0, 0]])
//Test.assertSimilar(threeSum([1, 5, 5, 2]), [])
//Test.assertSimilar(threeSum([1, 1]), [])
//Test.assertSimilar(threeSum([]), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Regex HTML Get Request Checker

//tags: regex,strings,validation

//url: https://edabit.com/challenge/2GQ4MishQPNA8FPKr

//Description:
//You are to create a special regex that will detect if an HTML GET request is valid or not (with some gotchas). Strings are formated like so:
//name1=val1&name2=val2&name3=val3&name4=val4
//You need to detect requests with the four names: "val", "id", "desc", "time" (each value can have a different order).
//Example #1
//"val=val1&id=val2&desc=val3&time=val4"
//
//"id=val2&val=val1&time=val4&desc=val3"
//Each name has a specific value:
//val could contain string a to z and number 0 to 9 (any case accepted).
//id is a number from 0 to 10.
//desc could contain strings a to z.
//time is formated value (00:00 to 99:99).
//Example #2
//"val=test1151&id=5&desc=helloWorld&time=54:33"
//
//"id=10&val=123test&time=99:00&desc=itsok"
//When the regex checker is finished, you need to put all names and their values from the request into an object and return it with the given function dataRegexLovely(). The parameter str is a valid GET request (no gotchas).
//Notes
//The regex length is limited to < 161 characters ( "/" and [flags] included).
//You might get an empty string "" when users don't send a request.
//Warning about data object value types.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Object.prototype.sameObject = function(o){
//  var key = Object.keys(o);
//  for (var i = 0; i < key.length;i++){
//    if(!this.hasOwnProperty(key[i])||!(o[key[i]]===this[key[i]])){return false}
//  }
//  return true
//}
//​
//console.log("########Anti-cheat#########");
//Test.assertEquals(/^\/.+\/[gmixsuajd]*$/.test(regExp.toString()),true,`<-- Not valid regex -->`);
//Test.assertEquals(regExp.toString().length<161,true,`<-- Regex length ${regExp.toString().length}/160 -->`)
//console.log("#########################");
//Test.assertEquals(regExp.test("val=xyz54&id=1&time=01:41&desc=dzgr"),true)
//Test.assertEquals(regExp.test("time=01:41&val=xyz54&id=1&desc=dzgr"),true)
//Test.assertEquals(regExp.test("time=01:41&id=1&val=xyz54&desc=dzgr"),true)
//Test.assertEquals(regExp.test("time=01:41&id=1&desc=dzgr&val=xyz54"),true)
//Test.assertEquals(regExp.test("id=1&time=01:41&desc=dzgr&val=xyz54"),true)
//Test.assertEquals(regExp.test("id=1&desc=dzgr&time=01:41&val=xyz54"),true)
//Test.assertEquals(regExp.test("id=1&desc=dzgr&val=xyz54&time=01:41"),true)
//Test.assertEquals(regExp.test("desc=dzgr&id=1&val=xyz54&time=01:41"),true)
//Test.assertEquals(regExp.test("desc=dzgr&val=xyz54&id=1&time=01:41"),true)
//Test.assertEquals(regExp.test("desc=dzgr&val=xyz54&time=01:41&id=1"),true)
//Test.assertEquals(regExp.test("val=xyz54&desc=dzgr&time=01:41&id=1"),true)
//Test.assertEquals(regExp.test("val=xyz54&time=01:41&desc=dzgr&id=1"),true)
//Test.assertEquals(regExp.test("val=xyz54&time=01:41&id=1&desc=dzgr"),true)

