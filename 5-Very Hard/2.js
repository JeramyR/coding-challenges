

//title: Mutations Only: Zeroes to the End

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/XR4suWJok9wdaNJ5j

//Description:
//Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.
//Examples
//zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]
//
//zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]
//
//zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]
//
//zeroesToEnd([0, 0]) ➞ [0, 0]
//Notes
//You must mutate the original array.
//Keep the relative order of the non-zero elements the same.

//code area
///////////////////////////////////////////////////////////////////////////
class Zero {
    constructor() {
        let result, zeros, failSafe
        this.result = function () {
            return result
        }
        this.stack = function (array) {
            iterator(array)
        }
        let iterator = array => {
            let lastIndex = array.length - 1
            if (typeof zeros === 'undefined') {
                zeros = zeroCount(array)
                iterator(array)
            }
            else {
                // combine the loops intp one from zero counter
                let i = 0
                do {
                    if (failSafe === true) break
                    else if (array[i] !== 0) {
                        i++
                    }
                    else {
                        zeros--
                        swap(array, i, lastIndex)
                    }
                }
                while (zeros > 0)
                return failSafe === true ? result = array : result = array
            }
        }
        let swap = (array, index, lastIndex) => {
            let aux = array.splice(index, 1)[0]
            array.splice(lastIndex, 0, aux)
            iterator(array)
        }
        let zeroCount = array => {
            let count = 0
            array.forEach(element => element === 0 ? count++ : null)
            return array.length === count ? failSafe = true : count
        }
    }
}
const zeroesToEnd = input => {
    let zero = new Zero
    zero.stack(input)
    return zero.result()
}
// ////////////////////////////////////////////////////////////////////////
// a1 = [1, 2, 0, 0, 4, 0, 5]
// r1 = zeroesToEnd(a1)
// Test.assertSimilar(r1, [1, 2, 4, 5, 0, 0, 0])
// a2 = [0, 0, 1, 3]
// r2 = zeroesToEnd(a2)
// Test.assertSimilar(r2, [1, 3, 0, 0])
// a3 = [0, 0, 2, 0, 5]
// r3 = zeroesToEnd(a3)
// Test.assertSimilar(r3, [2, 5, 0, 0, 0])
// a4 = [4, 4, 5]
// r4 = zeroesToEnd(a4)
// Test.assertSimilar(r4, [4, 4, 5])
// a5 = [0, 0]
// r5 = zeroesToEnd(a5)
// Test.assertSimilar(r5, [0, 0])


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Ungroup Data in an Object

//tags: arrays,objects

//url: https://edabit.com/challenge/NcRsSwrJbMm4dRbCk

//Description:
//You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.
//Example
//ungroupStudents([{
//  teacher: "Ms. Car",
//  data: [{
//     name: "James",
//     emergenceNumber: "617-771-1082",
//  }, {
//     name: "Alice",
//     alergies: ["nuts", "carrots"],
//  }],
//}, {
//  teacher: "Mr. Lamb",
//  data: [{
//    name: "Aaron",
//    age: 3
//  }]
//}]) ➞ [{
//  teacher: "Ms. Car",
//  name: "James",
//  emergencyNumber: "617-771-1082",
//}, {
//  teacher: "Ms. Car",
//  name: "Alice",
//  alergies: ["nuts", "carrots"],
//}, {
//  teacher: "Mr. Lamb",
//  name: "Aaron",
//  age: 3,
//}]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////

// broken

//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertSimilar(
//  ungroupStudents([
//    {
//      teacher: 'Ms. Car',
//      data: [
//        {
//          name: 'James',
//          emergencyNumber: '617-771-1082',
//        },
//        {
//          name: 'Alice',
//          alergies: ['nuts', 'carrots'],
//        },
//      ],
//    },
//    {
//      teacher: 'Mr. Lamb',
//      data: [
//        {
//          name: 'Aaron',
//          age: 3,
//        },
//      ],
//    },
//  ]),

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Persistence

//tags: loops,math,numbers

//url: https://edabit.com/challenge/vHvu4Wis8RhmQbwXm

//Description:
//The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.
//The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.
//Create two functions that take an integer as an argument and:
//Return its additive persistence.
//Return its multiplicative persistence.
//Examples: Additive Persistence
//additivePersistence(1679583) ➞ 3
//// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
//// 3 + 9 = 12
//// 1 + 2 = 3
//// It takes 3 iterations to reach a single-digit number.
//
//additivePersistence(123456) ➞ 2
//// 1 + 2 + 3 + 4 + 5 + 6 = 21
//// 2 + 1 = 3
//
//additivePersistence(6) ➞ 0
//// Because 6 is already a single-digit integer.
//Examples: Multiplicative Persistence
//multiplicativePersistence(77) ➞ 4
//// 7 x 7 = 49
//// 4 x 9 = 36
//// 3 x 6 = 18
//// 1 x 8 = 8
//// It takes 4 iterations to reach a single-digit number.
//
//multiplicativePersistence(123456) ➞ 2
//// 1 x 2 x 3 x 4 x 5 x 6 = 720
//// 7 x 2 x 0 = 0
//
//multiplicativePersistence(4) ➞ 0
//// Because 4 is already a single-digit integer.
//Notes
//The input n is never negative.

//code area
///////////////////////////////////////////////////////////////////////////
const additivePersistence = num => {
    let array = num.toString().split('')
    let count = 0

    const loopy = array => {
        if (array.length > 1) {
            let aux = [], n = 0
            for (let i = 0; i < array.length; i++) {
                n += +array[i]
            }
            count++
            aux.push(n)
            loopy(aux.toString().split(''))
        }
        else {
            return count
        }
    }
    loopy(array)
    return count
}
const multiplicativePersistence = num => {
    let array = num.toString().split('')
    let count = 0

    const loopy = array => {
        if (array.length > 1) {
            let aux = [], n = 1
            for (let i = 0; i < array.length; i++) {
                n *= +array[i]
            }
            count++
            aux.push(n)
            loopy(aux.toString().split(''))
        }
        else {
            return count
        }
    }
    loopy(array)
    return count
}
// Test.assertEquals(additivePersistence(5789), 3)

//////////////////////////////////////////////////////////////////////////

//tests:

//// ADDITIVE PERSISTENCE
// Test.assertEquals(additivePersistence(5), 0)
// Test.assertEquals(additivePersistence(27), 1)
// Test.assertEquals(additivePersistence(58), 2)
//// MULTIPLICATIVE PERSISTENCE
// Test.assertEquals(multiplicativePersistence(7), 0)
// Test.assertEquals(multiplicativePersistence(1234567890), 1)
// Test.assertEquals(multiplicativePersistence(39), 3)
// Test.assertEquals(multiplicativePersistence(6788), 6)
// Test.assertEquals(multiplicativePersistence(277777788888899), 11)

