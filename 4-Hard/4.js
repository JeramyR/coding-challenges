//title: Up the Hill, Down the Hill

//tags: math,physics

//url: https://edabit.com/challenge/vEY5A5Kq8xsPTQG8S

//Description:
//If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path at 60mph then their average speed traveled was 30mph.
//Write a function that returns the average speed traveled given an uphill time, uphill rate and a downhill rate. Uphill time is given in minutes. Return the rate as an integer (mph). No rounding is necessary.
//Examples
//aveSpd(18, 20, 60) ➞ 30
//
//aveSpd(30, 10, 30) ➞ 15
//
//aveSpd(30, 8, 24) ➞ 12
//Notes
//The solution is not dividing the sum of the speeds by 2.
//Check the Resources tab if your stuck.

//code area
///////////////////////////////////////////////////////////////////////////
const aveSpd = (minUp, upSpeed, downSpeed) => {
    let miles = upSpeed * (1 / 60) * minUp
    let minDown = miles * (1 / downSpeed) * 60

    let totalMiles = miles * 2
    let totalTime = (minUp + minDown) / 60

    let averageSpeed = totalMiles / totalTime

    return averageSpeed
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(aveSpd(18, 10, 30), 15)
// Test.assertEquals(aveSpd(18, 20, 60), 30)
// Test.assertEquals(aveSpd(30, 10, 30), 15)
// Test.assertEquals(aveSpd(30, 8, 24), 12)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Calculate the Total Price of Groceries

//tags: arrays,logic,math,objects

//url: https://edabit.com/challenge/jRSST87NjECBzbwzL

//Description:
//Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
//{
//  "product": "Milk",
//  "quantity": 1,
//  "price": 1.50
//}
//Examples
//// 1 bottle of milk:
//getTotalPrice([
//  { product: "Milk", quantity: 1, price: 1.50 }
//]) ➞ 1.5
//
//// 1 bottle of milk & 1 box of cereals:
//getTotalPrice([
//  { product: "Milk", quantity: 1, price: 1.50 },
//  { product: "Cereals", quantity: 1, price: 2.50 }
//]) ➞ 4
//
//// 3 bottles of milk:
//getTotalPrice([
//  { product: "Milk", quantity: 3, price: 1.50 }
//]) ➞ 4.5
//
//// Several groceries:
//getTotalPrice([
//  { product: "Milk", quantity: 1, price: 1.50 },
//  { product: "Eggs", quantity: 12, price: 0.10 },
//  { product: "Bread", quantity: 2, price: 1.60 },
//  { product: "Cheese", quantity: 1, price: 4.50 }
//]) ➞ 10.4
//
//// Some cheap candy:
//getTotalPrice([
//  { product: "Chocolate", quantity: 1, price: 0.10 },
//  { product: "Lollipop", quantity: 1, price: 0.20 }
//]) ➞ 0.3
//Notes
//There might be a floating point precision problem in here...

//code area
///////////////////////////////////////////////////////////////////////////
const getTotalPrice = arr => {
    let total = 0

    for (let i = 0; i < arr.length; i++) {
        total += (arr[i].quantity * arr[i].price)
    }
    return total.toFixed(2)
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(getTotalPrice([
//  { product: "Milk", quantity: 1, price: 1.50 }
// ]), 1.5)
// Test.assertEquals(getTotalPrice([
//  { product: "Milk", quantity: 1, price: 1.50 },
//  { product: "Cereals", quantity: 1, price: 2.50 }
// ]), 4)
// Test.assertEquals(getTotalPrice([
//  { product: "Milk", quantity: 3, price: 1.50 }
// ]), 4.5)
// Test.assertEquals(getTotalPrice([
//  { product: "Milk", quantity: 1, price: 1.50 },
//  { product: "Eggs", quantity: 12, price: 0.10 },
//  { product: "Bread", quantity: 2, price: 1.60 },
//  { product: "Cheese", quantity: 1, price: 4.50 }
// ]), 10.4)
// Test.assertEquals(getTotalPrice([
//  { product: "Chocolate", quantity: 1, price: 0.10 },
//  { product: "Lollipop", quantity: 1, price: 0.20 }
// ]), 0.3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: An Ordered Matrix

//tags: arrays,math

//url: https://edabit.com/challenge/2eDHKWPt7tDCzCJa3

//Description:
//Create an ordered 2D array (matrix). A matrix is ordered if its (0, 0) element is 1, its (0, 1) element is 2, and so on. Your function needs to create an a × b matrix. a is the first argument and b is the second.
//Examples
//orderedMatrix(5, 5) ➞ [
//  [1, 2, 3, 4, 5],
//  [6, 7, 8, 9, 10],
//  [11, 12, 13, 14, 15],
//  [16, 17, 18, 19, 20],
//  [21, 22, 23, 24, 25]
//]
//
//orderedMatrix(1, 1) ➞ [[1]]
//
//orderedMatrix(1, 5) ➞ [[1, 2, 3, 4, 5]]
//Notes
//a is the height of the matrix (y coordinate), and b is the width (x coordinate).
//a and b will always be positive, and the matrix will always be square shaped (in each row are the same amount of columns).
//a and b are integers.

//code area
///////////////////////////////////////////////////////////////////////////
const orderedMatrix = (a, b) => {
    let multiplicity = a * b
    let multiArr = []
    let arr = []
    let sub

    for (let val = 0; val < multiplicity; val++) {
        multiArr.push(val + 1)
    }
    do {
        sub = multiArr.splice(0, b)
        arr.push(sub)
    }
    while (multiArr.length !== 0)
    return arr
}
//////////////////////////////////////////////////////////////////////////

//tests:
// 
// Test.assertSimilar(orderedMatrix(1,2), [[1,2]])
// Test.assertSimilar(orderedMatrix(3, 3), [[1, 2, 3], [4, 5, 6], [7, 8, 9]])
//  Test.assertSimilar(orderedMatrix(5,5), [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]])
// Test.assertSimilar(orderedMatrix(3,4), [[1,2,3,4],[5,6,7,8],[9,10,11,12]])

