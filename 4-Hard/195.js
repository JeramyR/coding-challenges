

//title: Time Complexity: The Fibonacci Sequence

//tags: algorithms,language_fundamentals,numbers,recursion

//url: https://edabit.com/challenge/vDjaMK5n47NHHpMR2

//Description:
//One of the first algorithmic sequences you may encounter as a new programmer is the Fibonacci Sequence.
//As a (very brief) refresher, the Fibonacci sequence starts with 0 and 1, and subsequently, every nth number is the previous two numbers added together. So 0 and 1 is 1, then 1 and 1 is 2, then 1 and 2 is 3, and so on.
//The first seven numbers:
//1, 1, 2, 3, 5, 8, 13
//The Issue
//The normal, so-called naive way to calculate the Fibonacci sequence involves some bifurcating recursion. For each number, we need to calculate (recursively!) the two numbers before it.
//That's great, but the number of recursive calls fibonacci has to make balloons pretty ridiculously; to calculate the 20th number would require running your Fibonacci sequence over twenty thousand times!
//Random facto: If we wrote a function that performed 1 calculation every millisecond, calculating fibonacci(100) would take about 7.9E17 seconds, which is longer than the known age of the universe!
//The Solution
//Here's a hint: we don't need to run the fibonacci function that many times. Using a clever programming technique called Dynamic Programming, we can reduce the number of calls to our fibonacci function drastically!
//Your Job
//The current Fibonacci function works fine-ish for really small numbers below about 10. But for anything above about 15-20, it's pretty horrible to your poor little computer. And for numbers above about 40, Edabit's code runner may just give up!
//Using Dynamic Programming, see if you can give that function an oil change, some new tires, and some racing stripes!
//Rewrite the fibonacci function to calculate all of the given numbers (5, 25, 35, 40, 75) in linear time (that is, less than about 30 ms each)!
//Notes
//Your function should run in O(n) time.
//Because Edabit places a 12 second maximum allowed time on code run through it, the current function will fail for larger numbers. This is to be expected.
//Check the Resources tab if you're stuck.
//This is my first challenge; feel free to suggest changes!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const nums = [{num:5,expected:5},{num:25,expected:75025},{num:35,expected:9227465},{num:40,expected:102334155},{num:75,expected:2111485077978050}],
//    callFn = function (n) {
//        n = n - 1; //fix n
//        const start = Date.now(),
//            result = fibonacci(n);
//        return { result: result, time: Date.now() - start }
//    }
//let testRez = null;
//​
//​
//for (candidate of nums){
//    console.log(`-- Number: ${candidate.num} --`);
//    testRez = callFn(candidate.num);
//    console.log("Correct answer?:")
//    Test.assertEquals(testRez.result, candidate.expected, `Incorrect answer for ${candidate.num}th fibonnaci number!`);
//    console.log("Within time limit (15ms)?:")
//    Test.assertEquals(testRez.time < 15, true, `Calculating ${candidate.num}th fibonnaci number took too long (${testRez.time} ms) !`);
//    console.log('---------')
//}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum Consecutive Integers

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/cJHGXaAFus9fQsZ6n

//Description:
//Create a function that takes an array of integers (positive / negative) and return the sum of the numbers that repeat consecutively (return your result as an array).
//Examples
//sumConsecutives([0, 7, 7, 7, 5, 4, 9, 9, 0]) ➞ [0, 21, 5, 4, 18, 0]
//
//sumConsecutives([4, 4, 5, 6, 8, 8, 8]) ➞ [8, 5, 6, 24]
//
//sumConsecutives([-5, -5, 7, 7, 12, 0]) ➞ [-10, 14, 12, 0]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sumConsecutives([0, 7, 7, 7, 5, 4, 9, 9, 0]), [0, 21, 5, 4, 18, 0]);
//Test.assertSimilar(sumConsecutives([4, 4, 5, 6, 8, 8, 8]), [8, 5, 6, 24]);
//Test.assertSimilar(sumConsecutives([-5, -5, 7, 7, 12, 0]), [-10, 14, 12, 0]);
//Test.assertSimilar(sumConsecutives([2, 2, 2, 2, 2, 7]), [10, 7]);
//Test.assertSimilar(sumConsecutives([2, 2, -4, 4, 5, 5, 6, 6, 6, 6, 6, 1]), [4, -4, 4, 10, 30, 1]);
//Test.assertSimilar(sumConsecutives([3, 3, 3, 3, 1]), [12, 1]);
//Test.assertSimilar(sumConsecutives([1, -1, -2, 2, 3, -3, 4, -4]), [1, -1, -2, 2, 3, -3, 4, -4]);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Oddly or Evenly Positioned From Last

//tags: algorithms,arrays,logic

//url: https://edabit.com/challenge/WZMZEQoaNuhXovauT

//Description:
//Create a function that extracts the characters from an array (or a string) on odd or even positions, depending on the specifier. The string "odd" for items on odd positions (... 5, 3, 1) and "even" for even positions (... 6, 4, 2) from the last item of that array or string.
//Examples
//charAtPos([2, 4, 6, 8, 10], "even") ➞ [4, 8]
//// 4 & 8 occupy the 4th & 2nd positions from right.
//
//charAtPos("EDABIT", "odd") ➞ "DBT"
//// "D", "B" and "T" occupy the 5th, 3rd and 1st positions from right.
//
//charAtPos([")", "(", "*", "&", "^", "%", "$", "#", "@", "!"], "odd") ➞ ["(", "&", "%", "#", "!"]
//Notes
//Arrays are zero-indexed, so, index+1 = position or position-1 = index.
//An easier version of this challenge can be found via this link.
//A recursive version of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(charAtPos("EDABIT", "even"), "EAI")
//Test.assertEquals(charAtPos("EDABIT", "odd"), "DBT")
//Test.assertEquals(charAtPos("QWERTYUIOP", "even"), "QETUO")
//Test.assertEquals(charAtPos("POIUYTREWQ", "odd"), "OUTEQ")
//Test.assertEquals(charAtPos("ASDFGHJKLZ", "odd"), "SFHKZ")
//Test.assertEquals(charAtPos("ASDFGHJKLZ", "even"), "ADGJL")
//Test.assertSimilar(charAtPos([2, 4, 6, 8, 10], "even"), [4, 8])
//Test.assertSimilar(charAtPos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "odd"), [2, 4, 6, 8, 10])
//Test.assertSimilar(charAtPos(["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"], "odd"), ["@", "$", "^", "*", ")"])
//Test.assertSimilar(charAtPos([")", "(", "*", "&", "^", "%", "$", "#", "@", "!"], "odd"), ["(", "&", "%", "#", "!"])
//Test.assertSimilar(charAtPos(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "odd"), ["A", "B", "T", "A", "I", "Y"])

