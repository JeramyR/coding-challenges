

//title: Connect Four Winner

//tags: algorithms,games,logic,strings,validation

//url: https://edabit.com/challenge/CE7PoZ9FACoXDtikG

//Description:
//Connect Four is a two-player connection board game, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid.
//The game has two players: yellow and red while columns are named from "A" to "G". The first player who connects four items of the same color is the winner.
//
//Create a function that takes an array of player positions showing the order of the pieces which are dropped in columns. Function should return "Yellow", "Red" or "Draw" accordingly.
//Examples
//connectFourWinner([
//  "A_Red",
//  "B_Yellow",
//  "A_Red",
//  "B_Yellow",
//  "A_Red",
//  "B_Yellow",
//  "G_Red",
//  "B_Yellow"
//]) ➞ "Yellow"
//
//// Yellow has 4 conescutive discs in column B
//connectFourWinner([
//  "A_Red",
//  "B_Yellow",
//  "A_Red",
//  "E_Yellow",
//  "F_Red",
//  "G_Yellow",
//  "A_Red",
//  "G_Yellow"
//]) ➞ "Draw"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(connectFourWinner(["C_Yellow",
//    "E_Red",
//    "G_Yellow",
//    "B_Red",
//    "D_Yellow",
//    "B_Red",
//    "B_Yellow",
//    "G_Red",
//    "C_Yellow",
//    "C_Red",
//    "D_Yellow",
//    "F_Red",
//    "E_Yellow",
//    "A_Red",
//    "A_Yellow",
//    "G_Red",
//    "A_Yellow",
//    "F_Red",
//    "F_Yellow",
//    "D_Red",
//    "B_Yellow",
//    "E_Red",
//    "D_Yellow",
//    "A_Red",
//    "G_Yellow",

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Can You Enter the Cave?

//tags: arrays,functional_programming,games

//url: https://edabit.com/challenge/CP5zy4iLZzNy2KFcN

//Description:
//You are playing a video game. Your screen can be represented as a 2D array, where 0s represent walkeable areas and 1s represent unwalkeable areas. You are currently searching for the entrance to a cave that is located on the right side of the screen. Your character starts anywhere in the leftmost column.
//Create a function that determines if you can enter the cave. You can only move left, right, up, or down (not allowed to move diagonally).
//To illustrate:
//[
//  [0, 0, 1, 1, 1, 0, 0, 0],
//  [0, 0, 0, 0, 1, 0, 0, 0],
//  [0, 0, 1, 0, 0, 0, 0, 0],
//  [0, 0, 1, 1, 1, 1, 1, 0]
//]
//You found the entrance! Function should output true.
//[
//  [0, 0, 0, 1, 0, 0, 0, 0],
//  [0, 0, 0, 1, 1, 0, 0, 0],
//  [0, 0, 0, 0, 1, 1, 0, 0],
//  [0, 0, 0, 1, 1, 1, 1, 0]
//]
//Nope, keep looking. Function should output false.
//Examples
//canEnterCave([
//  [0, 1, 1, 1, 0, 1, 1, 0],
//  [0, 0, 1, 1, 0, 0, 0, 0],
//  [0, 0, 0, 0, 1, 1, 1, 0],
//  [0, 1, 1, 1, 1, 1, 1, 0]
//]) ➞ false
//
//// You cannot walk diagonally!
//
//
//canEnterCave([
//  [0, 1, 1, 1, 0, 1, 1, 0],
//  [0, 0, 1, 1, 0, 0, 0, 0],
//  [1, 0, 0, 0, 0, 1, 0, 0],
//  [1, 1, 1, 1, 1, 1, 1, 0]
//]) ➞ true
//
//
//canEnterCave([
//  [0, 1, 1, 1, 1, 1, 1, 0],
//  [0, 0, 0, 0, 1, 0, 0, 0],
//  [0, 0, 1, 1, 1, 1, 1, 0],
//  [0, 1, 1, 0, 0, 1, 1, 0]
//]) ➞ false
//Notes
//You are seeing the game screen from a birds-eye view.
//Another way of thinking about it: You can enter the cave if you can move from the left side of the screen to the right side by only walking up, down or right.
//The entrance is not necessarily the first square, you may have to search for it in the left hand column.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canEnterCave([
//[0, 0, 1, 1, 1, 0, 0, 0], 
//[0, 0, 0, 0, 1, 0, 0, 0], 
//[0, 0, 1, 0, 0, 0, 0, 0], 
//[0, 0, 1, 1, 1, 1, 1, 0]
//]), true)
//​
//Test.assertEquals(canEnterCave([
//[0, 0, 0, 1, 0, 0, 0, 0], 
//[0, 0, 0, 1, 1, 0, 0, 0], 
//[0, 0, 0, 0, 1, 1, 0, 0], 
//[0, 0, 0, 1, 1, 1, 1, 0]
//]), false)
//​
//Test.assertEquals(canEnterCave([
//[0, 1, 1, 1, 0, 1, 1, 0], 
//[0, 0, 1, 1, 0, 0, 0, 0], 
//[0, 0, 0, 0, 0, 1, 0, 0], 
//[0, 1, 1, 1, 1, 1, 1, 0]
//]), true)
//​
//Test.assertEquals(canEnterCave([
//[0, 1, 1, 1, 0, 1, 1, 0], 
//[0, 0, 1, 1, 0, 0, 0, 0], 
//[0, 0, 0, 1, 0, 1, 0, 0], 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ASCII Charts (Part 3: Column Chart)

//tags: strings

//url: https://edabit.com/challenge/iXmbCZMYPukzztpBq

//Description:
//Given three arrays (daily sales of product A, daily sales of product B, daily sales targets), return a string representing a stacked column chart of the total sales (with targets) for each day of the week.
//All sales are rounded to the nearest 10 units.
//Each column uses "+" for product A, "*" for product B, and an underscore ("_") for the target line.
//The y-axis shows the total sales (the maximum combined sales will be 80).
//The x-axis shows the first two letters of each day of the week (Monday to Sunday).
//Product A sales are stacked on top of product B sales.
//Target underscores sit on the row above their actual value (see notes).
//Daily sales will never be greater than the target.
//All columns have a width of two characters.
//A single column of "|" is used to border the left and right-hand sides of the chart.
//All elements of the chart (x-axis, columns, borders) are seperate by a blank column one space wide.
//Use the newline character ("\n") to separate each line in the chart.
//Example
//columnChart([30, 20, 10, 30, 10, 20, 10], [20, 10, 10, 10, 20, 0, 10], [50, 40, 20, 40, 30, 30, 40]))
//➞ "60 | __                   |\n50 | ** __    __       __ |\n40 | **       ** __ __    |\n30 | ++ ** __ ++ **       |\n20 | ++ ++ ** ++ ** ++ ** |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |"
//
//
//By day:
//
//            Mo  Tu  We  Th  Fr  Sa  Su
//productA = [30, 20, 10, 30, 10, 20, 10]
//productB = [20, 10, 10, 10, 20,  0, 10]
//target   = [50, 40, 20, 40, 30, 30, 40]
//
//
//When printed:
//
//60 | __                   |
//50 | ** __    __       __ |
//40 | **       ** __ __    |
//30 | ++ ** __ ++ **       |
//20 | ++ ++ ** ++ ** ++ ** |
//10 | ++ ++ ++ ++ ++ ++ ++ |
//   | Mo Tu We Th Fr Sa Su |   
//Notes
//Be careful when placing the target underscores. Although the Monday target is 50 in the example above, the underscore is placed on the row where sales equal 60).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(columnChart([40, 60, 20, 40, 50, 40, 20], [40, 20, 30, 0, 0, 0, 10], [80, 80, 80, 40, 50, 70, 50]), "90 | __ __ __             |\n80 | ** **          __    |\n70 | ** **                |\n60 | ** ++       __    __ |\n50 | ** ++ ** __ ++       |\n40 | ++ ++ ** ++ ++ ++    |\n30 | ++ ++ ** ++ ++ ++ ** |\n20 | ++ ++ ++ ++ ++ ++ ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([30, 20, 10, 30, 10, 20, 10], [20, 10, 10, 10, 20, 0, 10], [50, 40, 20, 40, 30, 30, 40]), "60 | __                   |\n50 | ** __    __       __ |\n40 | **       ** __ __    |\n30 | ++ ** __ ++ **       |\n20 | ++ ++ ** ++ ** ++ ** |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([30, 30, 30, 20, 10, 10, 20], [0, 30, 50, 20, 30, 20, 10], [50, 60, 80, 60, 70, 60, 50]), "90 |       __             |\n80 |       **    __       |\n70 |    __ ** __    __    |\n60 | __ ** **          __ |\n50 |    ** **             |\n40 |    ** ** ** **       |\n30 | ++ ++ ++ ** ** ** ** |\n20 | ++ ++ ++ ++ ** ** ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([20, 30, 20, 10, 20, 40, 40], [30, 0, 0, 10, 20, 40, 0], [80, 60, 40, 40, 50, 80, 70]), "90 | __             __    |\n80 |                ** __ |\n70 |    __          **    |\n60 |             __ **    |\n50 | **    __ __    **    |\n40 | **          ** ++ ++ |\n30 | ** ++       ** ++ ++ |\n20 | ++ ++ ++ ** ++ ++ ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([10, 20, 20, 40, 20, 60, 10], [10, 10, 30, 0, 0, 10, 0], [50, 40, 80, 40, 50, 80, 40]), "90 |       __       __    |\n80 |                      |\n70 |                **    |\n60 | __          __ ++    |\n50 |    __ ** __    ++ __ |\n40 |       ** ++    ++    |\n30 |    ** ** ++    ++    |\n20 | ** ++ ++ ++ ++ ++    |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([20, 20, 20, 10, 10, 40, 10], [30, 0, 30, 60, 0, 10, 30], [70, 50, 70, 70, 40, 80, 50]), "90 |                __    |\n80 | __    __ __          |\n70 |          **          |\n60 |    __    **       __ |\n50 | **    ** ** __ **    |\n40 | **    ** **    ++ ** |\n30 | **    ** **    ++ ** |\n20 | ++ ++ ++ **    ++ ** |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([30, 50, 50, 50, 10, 20, 20], [0, 20, 0, 10, 30, 20, 20], [60, 70, 60, 70, 50, 50, 60]), "80 |    __    __          |\n70 | __ ** __          __ |\n60 |    **    ** __ __    |\n50 |    ++ ++ ++          |\n40 |    ++ ++ ++ ** ** ** |\n30 | ++ ++ ++ ++ ** ** ** |\n20 | ++ ++ ++ ++ ** ++ ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([20, 40, 10, 30, 40, 10, 20], [10, 40, 40, 40, 0, 40, 10], [50, 80, 60, 80, 60, 60, 60]), "90 |    __    __          |\n80 |    **                |\n70 |    ** __ ** __ __ __ |\n60 | __ **    **          |\n50 |    ** ** **    **    |\n40 |    ++ ** ** ++ **    |\n30 | ** ++ ** ++ ++ ** ** |\n20 | ++ ++ ** ++ ++ ** ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([10, 30, 70, 20, 10, 30, 20], [40, 10, 0, 60, 40, 20, 10], [70, 50, 80, 80, 50, 70, 50]), "90 |       __ __          |\n80 | __       **    __    |\n70 |       ++ **          |\n60 |    __ ++ ** __    __ |\n50 | **    ++ ** ** **    |\n40 | ** ** ++ ** ** **    |\n30 | ** ++ ++ ** ** ++ ** |\n20 | ** ++ ++ ++ ** ++ ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([20, 10, 10, 30, 20, 50, 50], [60, 50, 40, 0, 10, 0, 0], [80, 60, 70, 60, 40, 70, 50]), "90 | __                   |\n80 | **    __       __    |\n70 | ** __    __          |\n60 | ** **             __ |\n50 | ** ** **    __ ++ ++ |\n40 | ** ** **       ++ ++ |\n30 | ** ** ** ++ ** ++ ++ |\n20 | ++ ** ** ++ ++ ++ ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([40, 50, 10, 70, 20, 20, 40], [0, 0, 30, 0, 0, 10, 10], [50, 50, 70, 80, 40, 60, 80]), "90 |          __       __ |\n80 |       __             |\n70 |          ++    __    |\n60 | __ __    ++          |\n50 |    ++    ++ __    ** |\n40 | ++ ++ ** ++       ++ |\n30 | ++ ++ ** ++    ** ++ |\n20 | ++ ++ ** ++ ++ ++ ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([10, 40, 10, 10, 50, 30, 20], [50, 20, 50, 20, 10, 0, 0], [70, 70, 80, 50, 60, 50, 40]), "90 |       __             |\n80 | __ __                |\n70 |             __       |\n60 | ** ** ** __ ** __    |\n50 | ** ** **    ++    __ |\n40 | ** ++ **    ++       |\n30 | ** ++ ** ** ++ ++    |\n20 | ** ++ ** ** ++ ++ ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([10, 10, 20, 20, 20, 10, 10], [30, 40, 0, 60, 20, 20, 20], [60, 70, 50, 80, 40, 50, 60]), "90 |          __          |\n80 |    __    **          |\n70 | __       **       __ |\n60 |       __ **    __    |\n50 |    **    ** __       |\n40 | ** **    ** **       |\n30 | ** **    ** ** ** ** |\n20 | ** ** ++ ++ ++ ** ** |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([20, 20, 10, 30, 30, 20, 20], [20, 40, 30, 40, 30, 30, 0], [40, 70, 70, 80, 70, 50, 50]), "90 |          __          |\n80 |    __ __    __       |\n70 |          **          |\n60 |    **    ** ** __ __ |\n50 | __ **    ** ** **    |\n40 | ** ** ** ** ** **    |\n30 | ** ** ** ++ ++ **    |\n20 | ++ ++ ** ++ ++ ++ ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([10, 10, 10, 30, 10, 60, 50], [0, 10, 0, 10, 10, 0, 0], [40, 50, 40, 40, 40, 80, 80]), "90 |                __ __ |\n80 |                      |\n70 |                      |\n60 |    __          ++    |\n50 | __    __ __ __ ++ ++ |\n40 |          **    ++ ++ |\n30 |          ++    ++ ++ |\n20 |    **    ++ ** ++ ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([40, 10, 30, 20, 50, 30, 40], [20, 10, 30, 40, 30, 0, 20], [70, 50, 60, 60, 80, 40, 70]), "90 |             __       |\n80 | __          **    __ |\n70 |       __ __ **       |\n60 | ** __ ** ** **    ** |\n50 | **    ** ** ++ __ ** |\n40 | ++    ** ** ++    ++ |\n30 | ++    ++ ** ++ ++ ++ |\n20 | ++ ** ++ ++ ++ ++ ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([50, 10, 10, 60, 20, 40, 40], [0, 30, 30, 0, 20, 10, 20], [70, 40, 70, 60, 60, 70, 70]), "80 | __    __       __ __ |\n70 |          __ __       |\n60 |          ++       ** |\n50 | ++ __    ++    ** ** |\n40 | ++ ** ** ++ ** ++ ++ |\n30 | ++ ** ** ++ ** ++ ++ |\n20 | ++ ** ** ++ ++ ++ ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([20, 20, 20, 20, 20, 30, 10], [60, 40, 10, 20, 20, 0, 10], [80, 80, 50, 40, 40, 50, 50]), "90 | __ __                |\n80 | **                   |\n70 | **                   |\n60 | ** ** __       __ __ |\n50 | ** **    __ __       |\n40 | ** **    ** **       |\n30 | ** ** ** ** ** ++    |\n20 | ++ ++ ++ ++ ++ ++ ** |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([10, 10, 10, 10, 10, 20, 30], [30, 10, 30, 40, 30, 10, 0], [40, 30, 50, 50, 50, 30, 30]), "60 |       __ __ __       |\n50 | __       **          |\n40 | ** __ ** ** ** __ __ |\n30 | **    ** ** ** ** ++ |\n20 | ** ** ** ** ** ++ ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")
//Test.assertEquals(columnChart([10, 50, 20, 40, 70, 30, 20], [10, 0, 50, 20, 0, 40, 30], [40, 60, 80, 80, 70, 70, 60]), "90 |       __ __          |\n80 |             __ __    |\n70 |    __ **    ++ ** __ |\n60 |       ** ** ++ **    |\n50 | __ ++ ** ** ++ ** ** |\n40 |    ++ ** ++ ++ ** ** |\n30 |    ++ ** ++ ++ ++ ** |\n20 | ** ++ ++ ++ ++ ++ ++ |\n10 | ++ ++ ++ ++ ++ ++ ++ |\n   | Mo Tu We Th Fr Sa Su |")

