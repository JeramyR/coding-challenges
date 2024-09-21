

//title: Divisibility Rule

//tags: logic,loops,math,numbers

//url: https://edabit.com/challenge/uZo7kk75ANm4JSWuH

//Description:
//Mubashir was trying to understand Divisibility Rule on Wikipedia which states :
//"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."
//He came up with an important fact for Divisibility by 13 rule on Wikipedia, which states that if you divide the successive powers of 10 by 13 you get the following remainders :
//10^0 % 13 = 1
//10^1 % 13 = 10
//10^2 % 13 = 9
//10^3 % 13 = 12
//10^4 % 13 = 3
//10^5 % 13 = 4
//10^6 % 13 = 1 (repetition starts from here)
//They concluded the following method:
//Multiply the right-most digit of the number with the left-most number in the sequence shown above and the second right-most digit to the second left-most digit of the number in the sequence and so on.
//Sum up all these products.
//Repeat this process until the sum remains constant.
//What is the remainder when 1234567 is divided by 13?
//7      6     5      4     3     2     1  (digits of 1234567 from the right)
//×      ×     ×      ×     ×     ×     ×  (multiplication)
//1     10     9     12     3     4     1  (repeating sequence)
//We get:
//7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178
//Repeat same process with 178:
//8x1 + 7x10 + 1x9 = 87
//Repeat same process with 87:
//7x1 + 8x10 = 87 (repetition starts from here)
//Create a function that processes this sequence of operations on the given integer n and returns the final constant value.
//Examples
//divisibilityRule(1234567) ➞ 87
//
//divisibilityRule(8529) ➞ 79
//
//divisibilityRule(85299258) ➞ 31
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(divisibilityRule(1234567), 87)
//Test.assertEquals(divisibilityRule(8529), 79)
//Test.assertEquals(divisibilityRule(85299258), 31)
//Test.assertEquals(divisibilityRule(5634), 57)
//Test.assertEquals(divisibilityRule(1111111111), 71)
//Test.assertEquals(divisibilityRule(987654321), 30)
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Coffee Shop

//tags: arrays,classes,objects

//url: https://edabit.com/challenge/ydgurBgEdGkueNmmp

//Description:
//Write a class called CoffeeShop, which has three instance variables:
//name : a string (basically, of the shop)
//menu : an array of items (of object type), with each item containing the item (name of the item), type (whether food or a drink) and price.
//orders : an empty array
//and seven methods:
//addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise, return "This item is currently unavailable!"
//fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
//listOrders: returns the list of orders taken, otherwise, an empty array.
//dueAmount: returns the total amount due for the orders taken.
//cheapestItem: returns the name of the cheapest item on the menu.
//drinksOnly: returns only the item names of type drink from the menu.
//foodOnly: returns only the item names of type food from the menu.
//IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.
//Examples
//tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
//// Tesha's coffee shop does not sell hot cocoa
//tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
//// specifying the variant of "iced tea" will help the process
//
//tcs.addOrder("cinnamon roll") ➞  "Order added!"
//tcs.addOrder("iced coffee") ➞ "Order added!"
//tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
//// the list of all the items in the current order
//
//tcs.dueAmount() ➞ 2.17
//
//tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
//tcs.fulfillOrder() ➞ "The iced coffee is ready!"
//tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
//// all orders have been presumably served
//
//tcs.listOrders() ➞ []
//// an empty array is returned if all orders have been exhausted
//
//tcs.dueAmount() ➞ 0.0
//// no new orders taken, expect a zero payable
//
//tcs.cheapestItem() ➞ "lemonade"
//tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
//tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]
//Notes
//Round off due amount up to two decimal places.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [menuA, menuB, menuC] = [
//  [
//    ["orange juice", "drink", 2.13], ["lemonade", "drink", 0.85], ["cranberry juice", "drink", 3.36],
//    ["pineapple juice", "drink", 1.89], ["lemon iced tea", "drink", 1.28], ["apple iced tea", "drink", 1.28],
//    ["vanilla chai latte", "drink", 2.48], ["hot chocolate", "drink", 0.99], ["iced coffee", "drink", 1.12],
//    ["tuna sandwich", "food", 0.95], ["ham and cheese sandwich", "food", 1.35], ["bacon and egg", "food", 1.15],
//    ["steak", "food", 3.28], ["hamburger", "food", 1.05], ["cinnamon roll", "food", 1.05]
//  ],
//  [
//    ["turkey english muffin", "food", 7.99], ["avocado toast", "food", 5.05], ["chocolate croissant", "food", 3.00],
//    ["espresso", "drink", 2.99], ["iced caramel macchiato", "drink", 4.50], ["cortado", "drink", 4.00],
//    ["nitro cold brew tester", "drink", 8.00]
//  ],
//  [
//    ["cheeseburger with fries", "food", 5.44],
//    ["cinnamon roll", "food", 4.99],
//    ["hot chocolate", "drink", 2.99],
//    ["lemon tea", "drink", 2.50],
//    ["iced coffee", "drink", 3.00],
//    ["vanilla chai latte", "drink", 4.00]
//  ]
//].reduce((a, r) => [...a, [...r.map(([n, t, p]) => ({item: n, type: t, price: p}))]], []),
//​
//[shopA, shopB, shopC] = [
//  new CoffeeShop("*** Deep Into Coffee ***", menuA, []),

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Validate Password

//tags: regex,validation

//url: https://edabit.com/challenge/XqTrTFmaksWs8aADz

//Description:
//Write a regular expression that checks to see if a password is valid. For a password to be valid, it must meet the following requirments:
//The password must contain at least one uppercase character.
//The password must contain at least one lowercase character.
//The password must contain at least one number.
//The password must contain at least one special character ! ? * #
//The password must be at least 8 characters in length.
//Examples
//"Password*12" ➞ true
//
//"passWORD12!" ➞ true
//
//"Pass" ➞ false
//Notes
//The lowercase char, uppercase char, special char, and number can appear at any part of the password.
//You will only be writing a regular expression; do not write a function.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//function validatePassword(password){
//  return regex.test(password);
//}
//​
////Passes
//Test.assertEquals(validatePassword("Password*123"), true)
//Test.assertEquals(validatePassword("123e!*Ar"), true)
//Test.assertEquals(validatePassword("*Password*13"), true)
//Test.assertEquals(validatePassword("passWORD1?"), true)
//Test.assertEquals(validatePassword("eDAB1T#12"), true)
//​
////FAILS
//Test.assertEquals(validatePassword("Pass1!"), false, "Password not long enough")
//Test.assertEquals(validatePassword("Password1"), false, "Password does not contain special character")
//Test.assertEquals(validatePassword("*Password*"), false, "Password does not contain number")
//Test.assertEquals(validatePassword("PASSWORD12!"), false, "Password does not contain lowercase character")
//Test.assertEquals(validatePassword("password12!"), false, "Password does not contain uppercase character")

