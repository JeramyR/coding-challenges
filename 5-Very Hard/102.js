

//title: Discount! Discount! Discount!

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/HyaXNJdFL4QnfbWRL

//Description:
//We all love a little bargain.
//Your function will get a price, and a load of discounts. Your job is to write the function so that it calculates the maximum discount.
//The price is a Number.
//The load of discounts is a string like: 15%, 8, 50%.
//So, percentages, with %, and amounts, without %.
//You have to think about the order of applying the discounts.
//Round the output amount to the nearest hundreth.
//Output a Number.
//Examples
//discount(64, "50%, 50%") ➞ 16
//// You have to reduce with 50% twice.
//
//discount(24, "20, 2") ➞ 2
//// You have to subtract 20 and 2.
//
//discount(20, "10%, 10") ➞ 8
//// You have to reduce with 10% and subtract 10.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//[
//  [10, '1, 1%', 8.9],
//  [20, '10, 10%', 8],
//  [60, '', 60], 
//  [64, '50%, 50%', 16],
//  [1000, '2%, 100, 50%, 16', 374],
//  [24, '20, 2', 2], 
//  [111, '11, 11%', 87.79],
//  [237.037, '25%, 25%, 25%', 100],
//  [26.026, '1%, 1%, 1%, 1%', 25],
//  [12345, '4%, 21, 33.6%, 87, 3%, 80.12', 7445],
//  [1000, '99.9%', 1]
//].forEach(x => {
//  Test.assertEquals(discount(x[0], x[1]), x[2]);
//});

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Longest Alternating Substring

//tags: language_fundamentals,math,regex

//url: https://edabit.com/challenge/ZMaiojWoPqLDemLXh

//Description:
//Given a string of digits, return the longest substring with alternating odd/even or even/odd digits. If two or more substrings have the same length, return the substring that occurs first.
//Examples
//longestSubstring("225424272163254474441338664823") ➞ "272163254"
//// substrings = 254, 272163254, 474, 41, 38, 23
//
//longestSubstring("594127169973391692147228678476") ➞ "16921472"
//// substrings = 94127, 169, 16921472, 678, 476
//
//longestSubstring("721449827599186159274227324466") ➞ "7214"
//// substrings = 7214, 498, 27, 18, 61, 9274, 27, 32
//// 7214 and 9274 have same length, but 7214 occurs first.
//Notes
//The minimum alternating substring size is 2, and there will always be at least one alternating substring.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(longestSubstring("844929328912985315632725682153"), "56327256")
//Test.assertEquals(longestSubstring("769697538272129475593767931733"), "27212947")
//Test.assertEquals(longestSubstring("937948289456111258444958189244"), "894561")
//Test.assertEquals(longestSubstring("736237766362158694825822899262"), "636")
//Test.assertEquals(longestSubstring("369715978955362655737322836233"), "369")
//Test.assertEquals(longestSubstring("345724969853525333273796592356"), "496985")
//Test.assertEquals(longestSubstring("548915548581127334254139969136"), "8581")
//Test.assertEquals(longestSubstring("417922164857852157775176959188"), "78521")
//Test.assertEquals(longestSubstring("251346385699223913113161144327"), "638569")
//Test.assertEquals(longestSubstring("483563951878576456268539849244"), "18785")
//Test.assertEquals(longestSubstring("853667717122615664748443484823"), "474")
//Test.assertEquals(longestSubstring("398785511683322662883368457392"), "98785")
//Test.assertEquals(longestSubstring("368293545763611759335443678239"), "76361")
//Test.assertEquals(longestSubstring("775195358448494712934755311372"), "4947")
//Test.assertEquals(longestSubstring("646113733929969155976523363762"), "76523")
//Test.assertEquals(longestSubstring("575337321726324966478369152265"), "478369")
//Test.assertEquals(longestSubstring("754388489999793138912431545258"), "545258")
//Test.assertEquals(longestSubstring("198644286258141856918653955964"), "2581418569")
//Test.assertEquals(longestSubstring("643349187319779695864213682274"), "349")
//Test.assertEquals(longestSubstring("919331281193713636178478295857"), "36361")
//Test.assertEquals(longestSubstring("2846286484444288886666448822244466688822247"), "47")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Complete Bracelet

//tags: arrays,loops,scope,validation

//url: https://edabit.com/challenge/v4fxXDcyqWx7FnX2s

//Description:
//A complete bracelet is an array with at least one subsequence (pattern) repeating at least two times, and completely - the subsequence cannot be cut-off at any point. The subsequence must have length two or greater.
//Complete bracelets:
//[1, 2, 3, 3, 1, 2, 3, 3]  // Pattern: [1, 2, 3, 3]
//
//[1, 2, 1, 2, 1, 2, 1, 2]  // Pattern: [1, 2] or [1, 2, 1, 2]
//
//[1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7]  // Pattern: [1, 1, 6, 1, 1, 7]
//
//[4, 4, 3, 4, 4, 4, 4, 3, 4, 4]  // Pattern: [4, 4, 3, 4, 4]
//Incomplete bracelets:
//[1, 2, 2, 2, 1, 2, 2, 2, 1]  // Incomplete (chopped off)
//
//[1, 1, 6, 1, 1, 7]  // Incomplete (subsequence repeats only once)
//Create a function that returns true if a bracelet is complete, and false otherwise.
//Examples
//completeBracelet([1, 2, 2, 1, 2, 2]) ➞ true
//
//completeBracelet([5, 1, 2, 2]) ➞ false
//
//completeBracelet([5, 5, 5]) ➞ false
//// potential pattern [5, 5] cut-off (patterns >= 2)
//Notes
//Patterns must be at least two integers in length.
//See Comments for a hint if you are stuck.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(completeBracelet([1, 2, 2, 1, 2, 2]), true)
//Test.assertEquals(completeBracelet([5, 1, 2, 2]), false)
//Test.assertEquals(completeBracelet([5, 5, 5]), false)
//Test.assertEquals(completeBracelet([5, 5, 7, 7]), false)
//Test.assertEquals(completeBracelet([5, 5, 7, 7, 5, 5, 7, 7]), true)
//Test.assertEquals(completeBracelet([1, 2, 1, 2, 1, 2]), true)
//Test.assertEquals(completeBracelet([1, 2, 2, 2, 1, 2, 2]), false)
//Test.assertEquals(completeBracelet([1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2]), true)
//Test.assertEquals(completeBracelet([5, 2, 5, 5, 2, 5, 2, 5, 2, 2, 5, 2, 5, 2, 5, 5, 2, 5, 2, 5, 2, 2, 5, 2]), true)
//Test.assertEquals(completeBracelet([1, 2, 3, 3, 1, 2, 3, 3]), true)
//Test.assertEquals(completeBracelet([1, 2, 1, 2, 1, 2, 1, 2]), true)
//Test.assertEquals(completeBracelet([1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7]), true)
//Test.assertEquals(completeBracelet([4, 4, 3, 4, 4, 4, 4, 3, 4, 4]), true)
//Test.assertEquals(completeBracelet([1, 2, 2, 2, 1, 2, 2, 2, 1]), false)
//Test.assertEquals(completeBracelet([1, 1, 6, 1, 1, 7]), false)
//Test.assertEquals(completeBracelet([5, 5]), false)

