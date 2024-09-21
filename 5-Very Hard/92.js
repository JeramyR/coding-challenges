

//title: Check Rubik`s Cubes

//tags: algorithms,arrays,geometry,math

//url: https://edabit.com/challenge/TQ3NQYgf8ez8p8G8M

//Description:
//Matt wants to make Rubik Cubes. These Rubiks should be in the shape of a full cube, and it shouldn't have any missing parts.
//This is a full cube:
//
//This is not a full cube:
//
//And he asks his friend to draw some patterns. When his friend gives him these Rubik's Cube patterns, he realizes that some of them are wrong or missing. Help him identify them!
//The small cubes that make up the Rubik's Cube will be denoted by "O".
//Return "Full" if the Rubik Cube is full and no part is missing.
//Return "Non-Full" if the Rubik Cube is non-full and no part is missing.
//Return "Missing {number of missing parts}" if the Rubik Cube has missing parts.
//Examples
//identify(
//  ["O", "O", "O"],
//  ["O", "O", "O"],
//  ["O", "O", "O"]
//) ➞ "Full"
//
//// This is 3x3 full Rubik's Cube.
//// So we should return "Full"
//identify(
//  ["O", "O", "O"],
//  ["O", "O", "O"]
//) ➞ "Non-Full"
//
//// This is a 2x3 Rubik's Cube.
//// It's not full, so we should return "Non-Full".
//identify(
//  ["O", "O"],
//  ["O", "O", "O"],
//  ["O", "O", "O"]
//) ➞ "Missing 1"
//
//// This is almost a 3x3 Rubik's Cube with one missing part.
//// We should return "Missing 1".
//Notes
//Every cubic (small part of a Rubik's Cube) will be denoted by "O". There won't be any other type.
//Don't forget to return by paying attention to capital letters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(identify(
//  ["O", "O"],
//  ["O", "O"],
//  ["O", "O", "O"]
//), "Missing 2")
//​
//Test.assertEquals(identify(
//  ["O", "O"],
//  ["O", "O", "O"]
//), "Missing 1")
//​
//Test.assertEquals(identify(
//  ["O", "O", "O"],
//  ["O", "O", "O"],
//  ["O", "O", "O"]
//), "Full")
//​
//Test.assertEquals(identify(
//  ["O", "O", "O", "O"],
//  ["O", "O", "O", "O"],
//  ["O", "O", "O", "O"],
//  ["O", "O", "O", "O"]
//), "Full")
//​
//Test.assertEquals(identify(

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Interquartile Range (IQR)

//tags: algorithms,math,numbers,sorting

//url: https://edabit.com/challenge/q64D5jtXYtRoeAEmt

//Description:
//The median of a data sample is the value that separates the higher half and the lower half of the data. For example, the median of [1, 2, 3] is 2, and the median of [1, 2, 3, 4] is 2.5 (because (2 + 3) / 2 = 2.5). Another way of saying "median" is to say "Q2" (it's the second quartile). Q1 and Q3 are the medians of the values above or below the Q2. The IQR is equal to Q3 - Q1. Here's an example:
//Let's say your data sample is: 1, 2, 3, 4
//The median (Q2) is: (2+3)/2 =2.5
//The lower half is: 1, 2
//The upper half is: 3, 4
//Q1 (median of the first half): (1+2)/2 = 1.5
//Q3 (median of the second half): (3+4)/2 = 3.5
//IQR = Q3 - Q1 = 3.5 - 1.5 = 2
//If the length of the data sample is odd, as in: 1, 2, 3, 4, 5
//The median (Q2) is: 3 (the number is in the middle, so no need to average).
//3 is the number that separates the upper and lower data, so we exclude it.
//The lower half is: 1, 2
//The upper half is: 4, 5
//Q1 (median of the first half): (1+2)/2 = 1.5
//Q3 (median of the second half): (4+5)/2 = 4.5
//IQR = Q3 - Q1 = 4.5 - 1.5 = 3
//For a more detailed explanation, please check the Resources tab.
//Make a function that takes an array of floats and/or integers and returns the IQR for that array. The return type can be float or int. It doesn't matter.
//Examples
//iqr([1, 2, 3, 4]) ➞ 2.0
//
//iqr([5, 4, 3, 2, 1]) ➞ 3.0
//
//iqr([-3.1, -3.8, -14, 23, 0]) ➞ 20.4
//Notes
//In all test cases, none of the solutions have repeating decimals, so you shouldn't need to worry about rounding the result.
//There is no universal agreement on how to select quartile values, so if you use an online calculator (such as Wolfram Alpha), you could get a different result depending on how the quartile values were calculated. You need to obtain the quartile values in the way described in the description, which is taken from the description given on khanacademy.com (see the Resources tab).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(iqr([1, 1, 3, 4, 4, 5, 5, 5, 6, 7, 9]), 3.0)
//Test.assertEquals(iqr([6, 4, 4, 4, 3, 3, 2, 1]), 1.5)
//Test.assertEquals(iqr([8.2, 3, 6, 6, 5, 2.6, 8, 4.9, 5, 7.9]), 3.0)
//Test.assertEquals(iqr([14, 28, 0, 15, 12, 15, 15, 15]), 2.0)
//Test.assertEquals(iqr([-3.1, -3.8, -14, 23, 0]), 20.4)
//Test.assertEquals(iqr([-12, 0, 0, 0, 3]), 7.5)
//Test.assertEquals(iqr([-3, 0, 0, 0, 0, 4.7]), 0.0)
//Test.assertEquals(iqr([0, 0, 0, 0, 0, 0]), 0.0)
//Test.assertEquals(iqr([0, 0, 0, 0, 0, 0, 0]), 0.0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: ASCII Charts (Part 2: Bar Chart)

//tags: formatting,objects,strings

//url: https://edabit.com/challenge/hR9WCCaSW2pZqoWhT

//Description:
//Given an object containing quarterly sales values for a year, return a string representing a bar chart of the sales by quarter.
//Quarter names (Q1, Q2, Q3, Q4) should appear on the left.
//Quarters should be sorted in descending order by value.
//Quarters with the same value should be shown in their yearly order (Q1 -> Q4).
//Bars should begin with a "|".
//Repeat the character "#" to fill the bar, with each character having a value of 50.
//A single space comes after the bar, then the sales for that quarter.
//If the value is 0, there should be no space after "|".
//Use the newline character ("\n") to separate each bar in the chart.
//Example #1
//barChart({Q4: 250, Q1: 300, Q2: 150, Q3: 0})
//➞ "Q1|###### 300\nQ4|##### 250\nQ2|### 150\nQ3|0"
//When printed:
//Q1|###### 300
//Q4|##### 250
//Q2|### 150
//Q3|0
//Example #2
//barChart({Q4: 500, Q3: 100, Q2: 100, Q1: 150})
//➞ "Q4|########## 500\nQ1|### 150\nQ2|## 100\nQ3|## 100"
//When printed:
//Q4|########## 500
//Q1|### 150
//Q2|## 100
//Q3|## 100
//Notes
//There should be no additional whitespace after each value.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(barChart({Q4: 0, Q3: 100, Q2: 0, Q1: 600}), "Q1|############ 600\nQ3|## 100\nQ2|0\nQ4|0")
//Test.assertEquals(barChart({Q4: 300, Q3: 150, Q2: 350, Q1: 250}), "Q2|####### 350\nQ4|###### 300\nQ1|##### 250\nQ3|### 150")
//Test.assertEquals(barChart({Q4: 350, Q3: 400, Q2: 400, Q1: 50}), "Q2|######## 400\nQ3|######## 400\nQ4|####### 350\nQ1|# 50")
//Test.assertEquals(barChart({Q4: 200, Q1: 500, Q2: 300, Q3: 300}), "Q1|########## 500\nQ2|###### 300\nQ3|###### 300\nQ4|#### 200")
//Test.assertEquals(barChart({Q4: 300, Q3: 250, Q2: 600, Q1: 350}), "Q2|############ 600\nQ1|####### 350\nQ4|###### 300\nQ3|##### 250")
//Test.assertEquals(barChart({Q4: 150, Q1: 550, Q2: 50, Q3: 600}), "Q3|############ 600\nQ1|########### 550\nQ4|### 150\nQ2|# 50")
//Test.assertEquals(barChart({Q4: 450, Q3: 0, Q2: 50, Q1: 200}), "Q4|######### 450\nQ1|#### 200\nQ2|# 50\nQ3|0")
//Test.assertEquals(barChart({Q4: 150, Q3: 0, Q2: 0, Q1: 450}), "Q1|######### 450\nQ4|### 150\nQ2|0\nQ3|0")
//Test.assertEquals(barChart({Q4: 0, Q1: 600, Q2: 250, Q3: 400}), "Q1|############ 600\nQ3|######## 400\nQ2|##### 250\nQ4|0")
//Test.assertEquals(barChart({Q4: 100, Q1: 150, Q2: 450, Q3: 0}), "Q2|######### 450\nQ1|### 150\nQ4|## 100\nQ3|0")
//Test.assertEquals(barChart({Q4: 150, Q1: 400, Q2: 100, Q3: 0}), "Q1|######## 400\nQ4|### 150\nQ2|## 100\nQ3|0")
//Test.assertEquals(barChart({Q4: 550, Q1: 600, Q2: 200, Q3: 50}), "Q1|############ 600\nQ4|########### 550\nQ2|#### 200\nQ3|# 50")
//Test.assertEquals(barChart({Q4: 250, Q3: 200, Q2: 500, Q1: 550}), "Q1|########### 550\nQ2|########## 500\nQ4|##### 250\nQ3|#### 200")
//Test.assertEquals(barChart({Q4: 450, Q3: 50, Q2: 500, Q1: 0}), "Q2|########## 500\nQ4|######### 450\nQ3|# 50\nQ1|0")
//Test.assertEquals(barChart({Q4: 250, Q3: 400, Q2: 150, Q1: 500}), "Q1|########## 500\nQ3|######## 400\nQ4|##### 250\nQ2|### 150")
//Test.assertEquals(barChart({Q4: 400, Q3: 600, Q2: 350, Q1: 600}), "Q1|############ 600\nQ3|############ 600\nQ4|######## 400\nQ2|####### 350")
//Test.assertEquals(barChart({Q4: 50, Q1: 100, Q2: 150, Q3: 50}), "Q2|### 150\nQ1|## 100\nQ3|# 50\nQ4|# 50")
//Test.assertEquals(barChart({Q4: 50, Q1: 100, Q2: 100, Q3: 300}), "Q3|###### 300\nQ1|## 100\nQ2|## 100\nQ4|# 50")
//Test.assertEquals(barChart({Q4: 350, Q3: 50, Q2: 600, Q1: 300}), "Q2|############ 600\nQ4|####### 350\nQ1|###### 300\nQ3|# 50")
//Test.assertEquals(barChart({Q4: 100, Q1: 500, Q2: 50, Q3: 200}), "Q1|########## 500\nQ3|#### 200\nQ4|## 100\nQ2|# 50")

