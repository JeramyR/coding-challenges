

//title: Free Throw Probability

//tags: math

//url: https://edabit.com/challenge/q3cqi67chT9hRzhAM

//Description:
//What's the probability of someone making a certain amount of free throws in a row given their free throw success percentage? If Sally makes 50% of her free shot throws, then Sally's probability of making 5 in a row would be 3%.
//Examples
//freeThrows("75%", 5) ➞ "24%"
//
//freeThrows("25%", 3) ➞ "2%"
//
//freeThrows("90%", 30) ➞ "4%"
//Notes
//The success rate is a string.
//The function should return a string with the percent sign.
//Round your answer to the nearest whole number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(freeThrows("50%", 5), "3%")
//Test.assertEquals(freeThrows("75%", 10), "6%")
//Test.assertEquals(freeThrows("25%", 3), "2%")
//Test.assertEquals(freeThrows("90%", 30), "4%")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Expensive Orders

//tags: objects

//url: https://edabit.com/challenge/EvPxDapyKECM9CrLR

//Description:
//Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost.
//Examples
//expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000)
//➞ { "a": 3000, "c": 1050 }
//
//expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000)
//➞ { "Gucci Fur": 24600 }
//
//expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40)
//➞ {}
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(JSON.stringify(expensiveOrders({"a": 3000, "b": 200, "c": 1050}, 1000)), '{"a":3000,"c":1050}')
//Test.assertEquals(JSON.stringify(expensiveOrders({"Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000}, 20000)), '{"Gucci Fur":24600}')
//Test.assertEquals(JSON.stringify(expensiveOrders({"Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5}, 40)), "{}")
//Test.assertEquals(JSON.stringify(expensiveOrders({"Kyoto Ticket": 10, "Museum Exhibit": 30, "Kimono": 3000}, 5)), '{"Kyoto Ticket":10,"Museum Exhibit":30,"Kimono":3000}')
//Test.assertEquals(JSON.stringify(expensiveOrders({"Travis Scott burger": 6, "Bowl of Beans": 3, "Hand cuffs": 60, "RF Device": 150}, 42)), '{"Hand cuffs":60,"RF Device":150}')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (06): Convert to Number

//tags: arrays,loops,numbers,objects

//url: https://edabit.com/challenge/ttuBGpGu7w4Ec3spT

//Description:
//You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. Given an object with at least one key/value pair, convert all the values to numbers.
//Examples
//convertToNumber({ piano: "200" }) ➞ { piano: 200 }
//
//convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }
//
//convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const res = convertToNumber({piano: "200", tv: "100", stereo: "400" })
//const control = () => {
//  let isNum = true
//  for(let item in res) {
//    if(typeof res[item] !== "number") return false
//    if(isNaN(res[item])) return false 
//  }
//  return isNum
//}
//Test.assertEquals(control(), true)
//Test.assertSimilar(convertToNumber({piano: "200", tv: "300", stereo: "400" }), {piano: 200, tv: 300, stereo: 400})
//Test.assertSimilar(convertToNumber({piano: "200", tv: "300" }), {piano: 200, tv: 300 })
//Test.assertSimilar(convertToNumber({piano: "200"}), {piano: 200})

