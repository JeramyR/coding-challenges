

//title: Which Function Returns the Larger Number?

//tags: higher_order_functions,language_fundamentals,numbers

//url: https://edabit.com/challenge/o7TwicAHWuMkjbDqQ

//Description:
//Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
//If f returns the larger number, return the string f.
//If g returns the larger number, return the string g.
//If the functions return the same number, return the string neither.
//Examples
//whichIsLarger(() => 5, () => 10) ➞ "g"
//
//whichIsLarger(() => 25,  () => 25) ➞ "neither"
//
//whichIsLarger(() => 505050, () => 5050) ➞ "f"
//Notes
//This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).

//code area
///////////////////////////////////////////////////////////////////////////
// const whichIsLarger = (f, g) => {
//     let answer = f() > g() ? 'f' :
//         f() < g() ? 'g' : 
//              'neither' 
//   console.log(answer)  
// }
//////////////////////////////////////////////////////////////////////////
//tests:
// whichIsLarger(()=>10, ()=>5)//,'f')
// whichIsLarger(()=>25, ()=>25)//,'neither')
// whichIsLarger(()=>-100, ()=>-100)//,'neither')
// whichIsLarger(()=>-100, ()=>0)//,'g')
// whichIsLarger(()=>505050, ()=>5050)//,/'f')
// whichIsLarger(()=>100, ()=>1000)//,'g')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Convert a Number to Base-2

//tags: bit_operations,logic,loops,numbers

//url: https://edabit.com/challenge/3kcrnpHk7krNZdnKK

//Description:
//Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
//Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).
//Examples
//binary(1) ➞ "1"
//// 1*1 = 1
//
//binary(5) ➞ "101"
//// 1*1 + 1*4 = 5
//
//binary(10) ➞ "1010"
//// 1*2 + 1*8 = 10
//Notes
//Numbers will always be below 1024 (not including 1024).
//The && operator could be useful.
//The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.
//If a binary conversion for 0 is attempted, return "0".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(binary(100), "1100100")
//Test.assertEquals(binary(1), "1")
//Test.assertEquals(binary(0), "0")
//Test.assertEquals(binary(69), "1000101")
//Test.assertEquals(binary(1023), "1111111111")
//Test.assertEquals(binary(511), "111111111")
//Test.assertEquals(binary(666), "1010011010")
//Test.assertEquals(binary(123), "1111011")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Check if One Array can be Nested in Another

//tags: arrays,validation

//url: https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj

//Description:
//Create a function that returns true if the first array can be nested inside the second and false otherwise.
//arr1 can be nested inside arr2 if:
//arr1's min is greater than arr2's min.
//arr1's max is less than arr2's max.
//Examples
//canNest([1, 2, 3, 4], [0, 6]) ➞ true
//
//canNest([3, 1], [4, 0]) ➞ true
//
//canNest([9, 9, 8], [8, 9]) ➞ false
//
//canNest([1, 2, 3, 4], [2, 3]) ➞ false
//Notes
//Note the strict inequality (see example #3).

//code area
///////////////////////////////////////////////////////////////////////////
// const canNest = (arr1, arr2) => {
//     let arr1x = arr1.sort((a, b) => a - b)
//     let arr2y = arr2.sort((a, b) => a - b)

//     let firstPar = arr2y.slice(0, 1)[0]
//     let secondPar = arr2y.slice(-1)[0]

//     if (arr1x.slice(0, 1)[0] > firstPar && arr1x.slice(-1)[0] < secondPar) {
//         return true
//     }
//     else {
//         return false
//     }
// }


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(canNest([1, 2, 3, 4], [0, 6]), true)
// Test.assertEquals(canNest([3, 1], [4, 0]), true)
// Test.assertEquals(canNest([9, 9, 8], [8, 9, 10]), false)
// Test.assertEquals(canNest([9, 9, 8], [8, 9]), false)
// Test.assertEquals(canNest([1, 2, 3, 4], [2, 3]), false)

