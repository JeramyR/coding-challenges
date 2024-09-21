

//title: Get the Area of a Country

//tags: formatting,math,numbers,strings

//url: https://edabit.com/challenge/ejfdLAp673DwxSg5R

//Description:
//Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.
//Examples
//areaOfCountry("Russia", 17098242) ➞ "Russia is 11.48% of the total world's landmass"
//
//areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass"
//
//areaOfCountry("Iran", 1648195) ➞ "Iran is 1.11% of the total world's landmass"
//Notes
//The total world's landmass is 148,940,000 [Km^2]
//Round the result to two decimal places.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass")
//Test.assertEquals(areaOfCountry("Russia", 17098242), "Russia is 11.48% of the total world's landmass")
//Test.assertEquals(areaOfCountry("Iran", 1648195), "Iran is 1.11% of the total world's landmass")
//Test.assertEquals(areaOfCountry("India", 3287590), "India is 2.21% of the total world's landmass")
//Test.assertEquals(areaOfCountry("China", 9706961), "China is 6.52% of the total world's landmass")
//Test.assertEquals(areaOfCountry("Yemen", 527968), "Yemen is 0.35% of the total world's landmass")
//Test.assertEquals(areaOfCountry("Switzerland", 41284), "Switzerland is 0.03% of the total world's landmass")
//​
//// Author: Saber Khakbiz

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: How Heavy Is It?

//tags: math,physics

//url: https://edabit.com/challenge/7pAcMPNur4JcXreHS

//Description:
//Given radius r and height h (in cm), calculate the mass of a cylinder when it's filled with water and the cylinder itself doesn't weigh anything. The desired output should be given in kg and rounded to two decimal places.
//How to solve:
//Calculate the volume of the cylinder.
//Convert cm³ into dm³.
//1dm³ = 1L, 1L is 1Kg.
//Examples
//weight(4, 10) ➞ 0.5
//
//weight(30, 60) ➞ 169.65
//
//weight(15, 10) ➞ 7.07
//Notes
//If you get stuck on a challenge, find help in Resources.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(weight(4, 10), 0.5)
//Test.assertEquals(weight(30, 60), 169.65)
//Test.assertEquals(weight(15, 10), 7.07)
//Test.assertEquals(weight(20, 40), 50.27)
//Test.assertEquals(weight(100, 30), 942.48)
//Test.assertEquals(weight(200, 300), 37699.11)
//Test.assertEquals(weight(15, 23), 16.26)
//Test.assertEquals(weight(22, 44), 66.9)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Square Every Digit

//tags: algorithms,language_fundamentals,math,numbers

//url: https://edabit.com/challenge/Tnjbf6pdFsCjmaF8p

//Description:
//Create a function that squares every digit of a number.
//Examples
//squareDigits(9119) ➞ 811181
//
//squareDigits(2483) ➞ 416649
//
//squareDigits(3212) ➞ 9414
//Notes
//The function receives an integer and must return an integer.

//code area
///////////////////////////////////////////////////////////////////////////
class Square {
    constructor() {
        let array
        this.separate = function (num) {
            array = num.toString().split('')
            return array
        }
        this.raise = function () {
            let newArr = array.map(element => element = Math.pow(+element, 2))
            array = newArr
            return
        }
        this.connect = function () {
            array = array.join('')
            return array
        }
        this.view = function () {
            return array
        }
    }
}
const squareDigits = num => {
    let square = new Square
    square.separate(num)
    square.raise()
    square.connect()
    return square.view()
}

//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(squareDigits(9119), 811181)
// Test.assertEquals(squareDigits(8726), 6449436)
// Test.assertEquals(squareDigits(9763), 8149369)
// Test.assertEquals(squareDigits(2230), 4490)
// Test.assertEquals(squareDigits(2797), 4498149)
// Test.assertEquals(squareDigits(233), 499)
// Test.assertEquals(squareDigits(7437), 4916949)
// Test.assertEquals(squareDigits(2483), 416649)
// Test.assertEquals(squareDigits(5742), 2549164)
// Test.assertEquals(squareDigits(5636), 2536936)
// Test.assertEquals(squareDigits(841), 64161)

