

//title: Track the Robot (Part 2)

//tags: conditions,logic,loops

//url: https://edabit.com/challenge/jfpfpH6w42tZeRo2T

//Description:
//This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.
//To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:
//20 steps North, now at (0, 20)
//30 steps East, now at (30, 20)
//10 steps South. now at (30, 10)
//40 steps West, now at (-10, 10)
//...and will end up at coordinates (-10, 10).
//Examples
//trackRobot(20, 30, 10, 40) ➞ [-10, 10]
//
//trackRobot() ➞ [0, 0]
//// No movement means the robot stays at (0, 0).
//
//trackRobot(-10, 20, 10) ➞ [20, -20]
//// The amount to move can be negative.
//Notes
//Each movement is an integer (whole number).

//code area
///////////////////////////////////////////////////////////////////////////
const trackRobot = (...args) => {
    let direction = 1, x = 0, y = 0, i = 0
    let num = args.length

    while (num > 0) {
        switch (direction) {
            case 1:
                if (typeof args[i] !== 'undefined') {
                    y += args[i]
                    i++
                    direction++
                    num--
                }
                else return [x, y]
            case 2:
                if (typeof args[i] !== 'undefined') {
                    x += args[i]
                    i++
                    direction++
                    num--
                }
                else return [x, y]
            case 3:
                if (typeof args[i] !== 'undefined') {
                    y -= args[i]

                    i++
                    direction++
                    num--
                }
                else return [x, y]
            case 4:
                if (typeof args[i] !== 'undefined') {
                    x -= args[i]
                    i++
                    direction++
                    num--
                }
                else return [x, y]
            case 5:
                direction = 1
        }
    }
    return [x, y]
}
//////////////////////////////////////////////////////////////////////////

//tests:
// Test.assertSimilar(trackRobot(20, 30, 10, 40), [-10, 10])
// Test.assertSimilar(trackRobot(10, -10, -10, 10), [-20, 20])
// Test.assertSimilar(trackRobot(), [0, 0])
// Test.assertSimilar(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), [6, 5])
// Test.assertSimilar(trackRobot(1, 0, 2, 0, 3, 0, 4, 0, 5, 0), [0, 3])
// Test.assertSimilar(trackRobot(0, 1, 0, 2, 0, 3, 0, 4, 0, 5), [3, 0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Even vs. Odds

//tags: arrays,higher_order_functions,logic,loops

//url: https://edabit.com/challenge/975ac5gm3hAwYqqjS

//Description:
//Odd numbers like to hangout with odd numbers. Even numbers like to hangout with even numbers.
//A spot is an insertion between two numbers in an array. Given an array of n integers in length, there are n-1 spots available.
//For instance:
//[3, 4, 9, 10, 1]  // Array of 5 digits can also be thought of as...
//
//[3, __ , 4, __ , 9, __, 10, __, 1]  // ...an array of 4 spots.
//After a number is newly inserted into a spot, it's left neighbor is the number directly to the left of it and it's right neighbor is the number directly to the right of it.
//For instance:
//[3, 6, 4, 9, 10, 1]  // Left neighbor of 6 is 3, right neighbor of 6 is 4.
//Odd numbers like having the following (left neighbor, right neighbor combinations): 
// (odd, even) 
// (even, odd) 
// (odd, odd) 
// .They dislike having both neighbors being even, or (even, even).
//Similarly, even numbers like the following neighbor combinations: 
// (even, odd)
// (odd, even)
// (even, even)
// They dislike having both neighbors being odd, or (odd, odd).
//Given an array, calculate the number of liked spots.
//Examples
//availableSpots([0, 4, 6, 8], 9) ➞ 0
//// 9 likes NONE of the following spots: [0, __, 4], [4, __ , 6], [6, __, 8] b/c all of his neighbors are even.
//
//availableSpots([0, 4, 6, 8], 12) ➞ 3
//// 12 likes ALL of the spots.
//
//availableSpots([4, 4, 4, 4, 5], 7) ➞ 1
//// 7 dislikes every spot except the last one at: [4, __, 5].
//
//availableSpots([4, 4], 8) ➞ 1
//Notes
//N/A

//code area
//Odd numbers like having the following (left neighbor, right neighbor combinations): 
// (odd, even) 
// (even, odd) 
// (odd, odd) 
// .They dislike having both neighbors being even, or (even, even).
//Similarly, even numbers like the following neighbor combinations: 
// (even, even)
// (even, odd)
// (odd, even)
// They dislike having both neighbors being odd, or (odd, odd).
///////////////////////////////////////////////////////////////////////////
const availableSpots = (arr, num) => {
    let splitArr = [], count = 0, evenOdd
    num % 2 !== 0 ? evenOdd = 'odd' : evenOdd = 'even'

    for (let i = 0; i < arr.length - 1; i++) {
        let sub = [arr[i], arr[i + 1]]
        splitArr.push(sub)
    }
    splitArr.map(val =>
        evenOdd === 'even' ?
            ((val[0] % 2 == 0 && val[1] % 2 == 0) ||
                (val[0] % 2 !== 0 && val[1] % 2 == 0) ||
                (val[0] % 2 == 0 && val[1] % 2 !== 0)) ?
                count++ : null
            :
            ((val[0] % 2 !== 0 && val[1] % 2 !== 0) ||
                (val[0] % 2 == 0 && val[1] % 2 !== 0) ||
                (val[0] % 2 !== 0 && val[1] % 2 == 0)) ?
                count++ : null
    )
    return count
}

//////////////////////////////////////////////////////////////////////////
//tests:
// Test.assertEquals(availableSpots([0, 4, 6, 8], 9), 0)
// Test.assertEquals(availableSpots([0, 4, 6, 8], 6), 3)
// Test.assertEquals(availableSpots([1, 2, 3, 4], 6), 3)
// Test.assertEquals(availableSpots([1, 2, 3, 4], 5), 3)
// Test.assertEquals(availableSpots([1, 1, 1, 4], 7), 3)
// Test.assertEquals(availableSpots([1, 1, 4, 4], 7), 2)
// Test.assertEquals(availableSpots([1, 4, 4, 4], 7), 1)
// Test.assertEquals(availableSpots([4, 4, 4, 4], 7), 0)
// Test.assertEquals(availableSpots([5, 5, 5, 8, 8, 5, 5, 5, 5], 32), 3)
// Test.assertEquals(availableSpots([4, 4], 8), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Does the Triangle Fit into the Triangular Hole?

//tags: arrays,conditions,geometry,math,validation

//url: https://edabit.com/challenge/7e2Aq87tDpW2CK7XH

//Description:
//Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.
//Examples
//doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true
//
//doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true
//
//doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false
//
//doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false
//Notes
//Triangle fits if it has the same or smaller size as the hole.
//The function should return false if the triangle with that dimensions is not possible.

//code area
///////////////////////////////////////////////////////////////////////////
// const doesTriangleFit = (arr1, arr2) => {
//     for (let i = 0; i < arr1.length; i++) {
        
//     }
// }


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(doesTriangleFit([1, 1, 1], [1, 1, 1]), true)
//Test.assertEquals(doesTriangleFit([1, 1, 1], [2, 2, 2]), true)
//Test.assertEquals(doesTriangleFit([3, 6, 8], [23, 63, 42]), true)
//Test.assertEquals(doesTriangleFit([1, 6, 8], [1, 6, 8]), false, "Not a triangle")
//Test.assertEquals(doesTriangleFit([3, 6, 8], [1, 10, 8]), false, "impossible hole")
//Test.assertEquals(doesTriangleFit([12, 63, 42], [1, 6, 8]), false, "too small hole")