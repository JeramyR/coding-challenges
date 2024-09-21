

//title: Plant Trees 🌲

//tags: algorithms,interview,logic,numbers

//url: https://edabit.com/challenge/Sw5Azi53kCjwdKdpG

//Description:
//Mubashir needs your help to plant some trees. He can give you three parameters of the land:
//width of the land w
//length of the land l
//gap between the trees g
//You have to create an algorithm to return the number of trees which can be planted on the edges of the given land in a symmetrical layout shown below (unsymmetrical gap = x, tree = o, gap = -):
//w=3, l=3, g=1
//plantTrees(w, l, g) ➞ 4
//
//o - o
//-   -
//o - o
//
//// Mubashir can plant 4 trees.
//w=3, l=3, g=3
//plantTrees(w, l, g) ➞ 2
//
//o - -
//-   -
//- - o
//
//// Mubashir can plant 2 trees.
//If the layout is not symmetrical, you have to return 0:
//w=3, l=3, g=2
//plantTrees(w, l, g) ➞ 0
//
//o - -
//x   o
//x x x
//
//// Planting 2 trees mean the gap of two trees will be greater than 2.
//
//o - -
//x   o
//o - -
//
//// Planting 3 trees mean the gap of two trees will be less than 2.
//Another Example for better understanding:
//w=3, l=3, g=0
//plantTrees(w, l, g) ➞ 8
//
//o o o
//o   o
//o o o
//
//// Mubashir can plant 8 trees.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(plantTrees(3, 3, 1), 4)
//Test.assertEquals(plantTrees(3, 3, 3), 2)
//Test.assertEquals(plantTrees(3, 3, 2), 0)
//Test.assertEquals(plantTrees(7, 7, 3), 6)
//Test.assertEquals(plantTrees(3, 3, 0), 8)
//Test.assertEquals(plantTrees(3, 3, 10), 0)
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Christmas Tree

//tags: formatting,strings

//url: https://edabit.com/challenge/QeaCDhw3QrLwbeteD

//Description:
//Write a function to create a Christmas tree based on height h.
//Examples
//tree(1) ➞ [
//  "#"
//]
//
//tree(2) ➞ [
//  " # ",
//  "###"
//]
//
//tree(5) ➞ [
//  "    #    ",
//  "   ###   ",
//  "  #####  ",
//  " ####### ",
//  "#########"
//]
//
//tree(0) ➞ []
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(tree(1), ["#"])
//​
//Test.assertSimilar(tree(2), [
//  " # ", 
//  "###"
//])
//​
//Test.assertSimilar(tree(5), [
//  "    #    ",
//  "   ###   ", 
//  "  #####  ", 
//  " ####### ", 
//  "#########"
//])
//​
//Test.assertSimilar(tree(0), [])

