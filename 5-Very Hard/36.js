

//title: Switch on the Gravity

//tags: arrays,logic,loops,physics

//url: https://edabit.com/challenge/HDpN8a7SunaAY94NX

//Description:
//Given a 2D array of some suspended blocks (represented as hastags), return another 2D array which shows the end result once gravity is switched on.
//Examples
//switchGravityOn([
//  ["-", "#", "#", "-"],
//  ["-", "-", "-", "-"],
//  ["-", "-", "-", "-"],
//  ["-", "-", "-", "-"]
//]) ➞ [
//  ["-", "-", "-", "-"],
//  ["-", "-", "-", "-"],
//  ["-", "-", "-", "-"],
//  ["-", "#", "#", "-"]
//]
//
//switchGravityOn([
//  ["-", "#", "#", "-"],
//  ["-", "-", "#", "-"],
//  ["-", "-", "-", "-"],
//]) ➞ [
//  ["-", "-", "-", "-"],
//  ["-", "-", "#", "-"],
//  ["-", "#", "#", "-"]
//]
//
//switchGravityOn([
//  ["-", "#", "#", "#", "#", "-"],
//  ["#", "-", "-", "#", "#", "-"],
//  ["-", "#", "-", "-", "-", "-"],
//  ["-", "-", "-", "-", "-", "-"]
//]) ➞ [
//  ["-", "-", "-", "-", "-", "-"],
//  ["-", "-", "-", "-", "-", "-"],
//  ["-", "#", "-", "#", "#", "-"],
//  ["#", "#", "#", "#", "#", "-"]
//]
//Notes
//Each block falls individually, meaning there are no rigid objects. Think about it like falling sand in Minecraft as opposed to the rigid blocks in Tetris.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(switchGravityOn([
//  ["-", "#", "#", "-"],
//  ["-", "-", "-", "-"],
//  ["-", "-", "-", "-"],
//  ["-", "-", "-", "-"]
//]
//), [
//  ["-", "-", "-", "-"],
//  ["-", "-", "-", "-"],
//  ["-", "-", "-", "-"],
//  ["-", "#", "#", "-"]
//])
//​
//​
//Test.assertSimilar(switchGravityOn([
//  ["-", "#", "#", "-"],
//  ["-", "-", "#", "-"],
//  ["-", "-", "-", "-"],
//]
//), [
//  ["-", "-", "-", "-"],
//  ["-", "-", "#", "-"],
//  ["-", "#", "#", "-"]
//])
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Text Editor Part 1

//tags: objects,strings,validation

//url: https://edabit.com/challenge/DAkbqtDsK7uRzKPrg

//Description:
//We're going to create a text editor similar to Microsoft Word. The editor autosaves so that the user only loses a small amount of data if a crash occurs.
//We want to be able to handle as many operations as needed, but they have to be processed in order. There are two basic operations that our editor understands:
//An insert operation contains the text to be inserted and the position to insert it at.
//A delete operation contains the position to delete from and the length of the text to delete.
//Write a function that takes a list of operations, either insert or delete, and returns the combined text.
//Examples
//[Insert("foo", 0), Insert(" bar", 3)] ➞ "foo bar"
//
//[Insert("foo bar", 0), Delete(4, 2)] ➞ "fobar"
//Notes
//Keep in mind that each operation will have data that assumes the previous operations were already processed.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(edit([]), "", "No operations should result in an empty string.")
//Test.assertEquals(
//  edit([
//    {operation: "insert", text: "ban", position: 0},
//    {operation: "insert", text: "anana", position: 3},
//    {operation: "delete", from: 5, length: 2}
//  ]), 
//  "banana"
//)
//Test.assertEquals(
//  edit([
//    {operation: "insert", text: "the funk", position: 0},
//    {operation: "insert", text: "I'm ", position: 0},
//    {operation: "delete", from: 7, length: 4},
//    {operation: "insert", text: "y", position: 8},
//    {operation: "insert", text: " from funky town", position: 9},
//    {operation: "insert", text: "a funky monkey ", position: 4},
//    {operation: "delete", from: 11, length: 1},
//    {operation: "delete", from: 17, length: 2},
//    {operation: "delete", from: 21, length: 6}
//  ]), 
//  "I'm a funk monk from funky town"
//)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Complete the Word

//tags: loops,regex,strings,validation

//url: https://edabit.com/challenge/Hx8tidhX6gXNK56aF

//Description:
//An input string can be completed if additional letters can be added and no letters need to be taken away to match the word. Furthermore, the order of the letters in the input string must be the same as the order of letters in the final word.
//Create a function that, given an input string, determines if the word can be completed.
//Examples
//canComplete("butl", "beautiful") ➞ true
//// We can add "ea" between "b" and "u", and "ifu" between "t" and "l".
//
//canComplete("butlz", "beautiful") ➞ false
//// "z" does not exist in the word beautiful.
//
//canComplete("tulb", "beautiful") ➞ false
//// Although "t", "u", "l" and "b" all exist in "beautiful", they are incorrectly ordered.
//
//canComplete("bbutl", "beautiful") ➞ false
//// Too many "b"s, beautiful has only 1.
//Notes
//Both string input and word will be lowercased.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canComplete('butl', 'beautiful'), true)
//Test.assertEquals(canComplete('butlz', 'beautiful'), false, "'z' does not exist in the word `beautiful`")
//Test.assertEquals(canComplete('tulb', 'beautiful'), false, "although 't', 'u', 'l' and 'b' incorrectly ordered")
//Test.assertEquals(canComplete('bbutl', 'beautiful'), false, "too many 'b's, beautiful has only 1")
//Test.assertEquals(canComplete('sg', 'something'), true)
//Test.assertEquals(canComplete('sgi', 'something'), false, "out of order")
//Test.assertEquals(canComplete('sing', 'something'), true)
//Test.assertEquals(canComplete('siing', 'something'), false, "too many i's")

