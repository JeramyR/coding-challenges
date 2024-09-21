

//title: Adding Up Letters

//tags: arrays,logic

//url: https://edabit.com/challenge/4z75JHvjRXh8oyrri

//Description:
//Create a function addLetters that takes a list/array of letters a, and returns the "sum" of them.
//To add two letters, take their number value, add them together, and convert it back together. For example, a would be 1, b would be 2, etc. So to add b and c, take 2 + 3 = 5, and then get the fifth letter of the alphabet (e).
//So then d + e + f would be 4 + 5 + 6 = 15, and the fifteenth letter is o, so that's what you return.
//Letters can also wrap. Like with y + c, that's 25 + 3 = 28, which doesn't exist. Consider that the 27th letter just wraps around and ends back up at a. With this logic, y + c = b. Don't just do 27 = 1 though, because you could end up with a much higher sum like 70.
//Examples
//addLetters(["a"]) ➞ "a"
//addLetters(["a", "b"]) ➞ "c"
//addLetters(["a", "b", "c"]) ➞ "f"
//addLetters(["a", "b", "c", "d", "e", "f"]) ➞ "u"
//addLetters(["y", "a"]) ➞ "z"
//addLetters(["y", "c"]) ➞ "b"
//addLetters(["z", "a"]) ➞ "a"
//addLetters(["x", "y", "z"]) ➞ "w"
//addLetters([]) ➞ "z"
//Notes
//Don't forget to return the result.
//An empty array should return z. The logic behind this is that if you get a sum of 0, then wrap it all the way around backwards (since the 0th letter doesn't exist), giving you 26 which = z.
//All letters given will be lowercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(addLetters(["a"]), "a")
//Test.assertEquals(addLetters(["a", "b"]), "c")
//Test.assertEquals(addLetters(["a", "b", "c"]), "f")
//Test.assertEquals(addLetters(["a", "b", "c", "d", "e", "f"]), "u")
//Test.assertEquals(addLetters(["y", "a"]), "z")
//Test.assertEquals(addLetters(["y", "c"]), "b")
//Test.assertEquals(addLetters(["z", "a"]), "a")
//Test.assertEquals(addLetters(["x", "y", "z"]), "w")
//Test.assertEquals(addLetters([]), "z")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Swapping Two by Two

//tags: regex,strings

//url: https://edabit.com/challenge/RdHCBE4GXzdAEFQug

//Description:
//Write a function that swaps the first pair (1st and 2nd characters) with the second pair (3rd and 4th characters) for every quadruplet substring.
//Examples
//swapTwo("ABCDEFGH") ➞ "CDABGHEF"
//
//swapTwo("AABBCCDDEEFF") ➞ "BBAADDCCFFEE"
//
//swapTwo("munchkins") ➞ "ncmuinhks"
//
//swapTwo("FFGGHHI") ➞ "GGFFHHI"
//Notes
//Keep leftover strings in the same order.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(swapTwo("ABCDEFGH"), "CDABGHEF")
//Test.assertEquals(swapTwo("AABBCCDDEEFF"), "BBAADDCCFFEE")
//Test.assertEquals(swapTwo("oompaloompa"), "mpooooalmpa")
//Test.assertEquals(swapTwo("munchkins"), "ncmuinhks")
//Test.assertEquals(swapTwo("FFGGHHI"), "GGFFHHI")
//Test.assertEquals(swapTwo("FFG"), "FFG")
//Test.assertEquals(swapTwo(""), "")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Pages and Chapters

//tags: arrays,numbers,strings,validation

//url: https://edabit.com/challenge/3fS4DBuMZYch3sn7Q

//Description:
//Write a function that returns the closest chapter to the current page you are at. If two chapters are similarly close, return whichever has the higher page.
//Examples
//closestToPage({
//  "Chapter 1" : 1,
//  "Chapter 2" : 15,
//  "Chapter 3" : 37
//}, 10) ➞ "Chapter 2"
//
//
//closestToPage({
//  "New Beginnings" : 1,
//  "Strange Developments" : 62,
//  "The End?" : 194,
//  "The True Ending" : 460
//}, 200) ➞ "The End?"
//
//
//closestToPage({
//  "Chapter 1a" : 1,
//  "Chapter 1b" : 5
//}, 3) ➞ "Chapter 1b"
//Notes
//All page numbers in the book are valid integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [objVector, resVector] = [[
//    [{"Chapter 1": 1, "Chapter 2": 15, "Chapter 3": 37}, 10],
//    [{"New Beginnings" : 1, "Strange Developments" : 62, "The End?" : 194, "The True Ending" : 460}, 200],
//    [{"Chapter 1a" : 1, "Chapter 1b" : 5}, 3],
//    [{"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50, "Chapter 1d" : 100}, 75],
//    [{"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50, "Chapter 1d" : 100, "Chapter 1e" : 200}, 150],
//    [{"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50, "Chapter 1d" : 100, "Chapter 1e" : 200}, 74],
//    [{"Chapter 1a" : 1, "Chapter 1b" : 5, "Chapter 1c" : 50, "Chapter 1d" : 100, "Chapter 1e" : 200, "Chapter 1f" : 400}, 300]
//  ], [
//    "Chapter 2", "The End?", "Chapter 1b", "Chapter 1d", "Chapter 1e", "Chapter 1c", "Chapter 1f"
//]]
//for(let i in objVector) Test.assertEquals(closestToPage(objVector[i][0], objVector[i][1]), resVector[i])

