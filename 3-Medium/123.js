

//title: Are the Sum of Digits in the Numbers Equal?

//tags: arrays,conditions,language_fundamentals,validation

//url: https://edabit.com/challenge/G3p4nWNqAHNEq3r4f

//Description:
//Write a function that takes an array of two numbers and determines if the sum of the digits in each number are equal to each other.
//Examples
//isEqual([105, 42]) ➞ true
//# 1 + 0 + 5 = 6
//# 4 + 2 = 6
//
//isEqual([21, 35]) ➞ false
//
//isEqual([0, 0]) ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////
const isEqual = arr => {
  // let array = arr.map(num => num.toString().split('')).map(subArr => subArr.map(strDigit => +strDigit).reduce((a, b) => a + b))
  // const allEqual = array.every(sum => sum === array[0])

  const array = arr.map(num => num
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b)
  );
  const allEqual = array.every(sum => sum === array[0])
  console.log(allEqual)
}


//////////////////////////////////////////////////////////////////////////

//tests:

// isEqual([11, 20])//, true)
// isEqual([14, 21])//, false)
// isEqual([0, 0])//, true)
// isEqual([01, 10])//, true)
// isEqual([101, 201])//, false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Count Vowels

//tags: recursion,regex,strings

//url: https://edabit.com/challenge/j3N6DQa4Z5LvqPGEb

//Description:
//Write a function that recursively returns the number of vowels in a string.
//Examples
//countVowels("apple") ➞ 2
//
//countVowels("cheesecake") ➞ 5
//
//countVowels("bbb") ➞ 0
//
//countVowels("") ➞ 0
//Notes
//All letters will be in lower case.
//Vowels are: a, e, i, o, u.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countVowels("apple"), 2)
//Test.assertEquals(countVowels("cheesecake"), 5)
//Test.assertEquals(countVowels("martini"), 3)
//Test.assertEquals(countVowels("rhythm"), 0)
//Test.assertEquals(countVowels(""), 0)
//Test.assertEquals(countVowels("b"), 0)
//Test.assertEquals(countVowels("a"), 1)
//Test.assertEquals(countVowels("bbbbbb"), 0)
//Test.assertEquals(countVowels("bbbbba"), 1)
//Test.assertEquals(countVowels("abbbb"), 1)
//Test.assertEquals(countVowels("bbbab"), 1)
//Test.assertEquals(countVowels("bbaab"), 2)
//Test.assertEquals(countVowels("baabab"), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Calculate the Median

//tags: math,numbers

//url: https://edabit.com/challenge/36cEmt2BiGTtZ9SDx

//Description:
//Create a function that takes an array of numbers and return its median. If the input array is even length, take the average of the two medians, else, take the single median.
//Examples
//median([2, 5, 6, 2, 6, 3, 4]) ➞ 4
//
//median([21.4323, 432.54, 432.3, 542.4567]) ➞ 432.4
//
//median([-23, -43, -29, -53, -67]) ➞ -43
//Notes
//Input can be any negative or positive number.
//Input array will contain at least four numbers.
//See Resources tab for info on calculating the median.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(median([20, 40, 20, 30, 50, 60, 70, 0, 20]), 30)
//Test.assertEquals(median([342, 98, 5456, 32, 786, 432, 890, 321]), 387)
//Test.assertEquals(median([1, 0, 1, 0, 0, 0, 1, 1]), 0.5)
//Test.assertEquals(median([32, 5, 78, 32, 4, 5, 3]), 5)
//Test.assertEquals(median([-20, 40, 30, -2, 40, -13]), 14)
//Test.assertEquals(median([32786, 7837, 83736, 83736, 10383, 738393]), 58261)
//Test.assertEquals(median([7685, 83736, 38376, 73638, 7337]), 38376)
//Test.assertEquals(median([0, 0, 0, 0]), 0)
//Test.assertEquals(median([-30, -42, -60, -10, -30, -50]), -36)
//Test.assertEquals(median([238, 432, 897, 710]), 571)

