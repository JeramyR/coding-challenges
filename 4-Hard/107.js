

//title: Express Number in Expanded Notation

//tags: algorithms,math,numbers,strings

//url: https://edabit.com/challenge/fiXLsemkYTK9oKuDC

//Description:
//Create a function that takes a number and return a string with the number in expanded notation (AKA expanded form). See the resources tab for details on expanded notation.
//Examples
//expand(13) ➞ "10 + 3"
//
//expand(86) ➞ "80 + 6"
//
//expand(17000000) ➞ "10000000 + 7000000"
//
//expand(5325) ➞ "5000 + 300 + 20 + 5"
//Notes
//You can expect only whole numbers greater than 0 as test input.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(expand(13), "10 + 3")
//Test.assertEquals(expand(86), "80 + 6")
//Test.assertEquals(expand(17000000), "10000000 + 7000000")
//Test.assertEquals(expand(420370022), "400000000 + 20000000 + 300000 + 70000 + 20 + 2")
//Test.assertEquals(expand(70304), "70000 + 300 + 4")
//Test.assertEquals(expand(9000000), "9000000")
//Test.assertEquals(expand(5325), "5000 + 300 + 20 + 5")
//Test.assertEquals(expand(2096039485293), "2000000000000 + 90000000000 + 6000000000 + 30000000 + 9000000 + 400000 + 80000 + 5000 + 200 + 90 + 3")
//Test.assertEquals(expand(92093403034573), "90000000000000 + 2000000000000 + 90000000000 + 3000000000 + 400000000 + 3000000 + 30000 + 4000 + 500 + 70 + 3")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Calculate the Volume of a Pyramid

//tags: conditions,formatting,interview,math,strings

//url: https://edabit.com/challenge/ii4ANncEGP4xjmQ5Y

//Description:
//Create a function that takes the length, width, height (in meters) and output unit and returns the volume of a pyramid to three decimal places in the correct unit.
//Examples
//pyramidVolume(4, 6, 20, "centimeters") ➞ "160000000.000 cubic centimeters"
//
//pyramidVolume(1843, 1823, 923, "kilometers") ➞ "1.034 cubic kilometers"
//
//pyramidVolume(18, 412, 93, "millimeters") ➞ "229896000000000.000 cubic millimeters"
//Notes
//The units used are limited to: millimeters, centimeters, meters and kilometers.
//Ensure you return the answer and add the correct unit in the format cubic <unit>.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(pyramidVolume(10, 14, 6, "meters"), "280.000 cubic meters")
//Test.assertEquals(pyramidVolume(8, 12, 2, "centimeters"), "64000000.000 cubic centimeters")
//Test.assertEquals(pyramidVolume(92, 1245, 1923, "kilometers"), "0.073 cubic kilometers")
//Test.assertEquals(pyramidVolume(19, 254, 21, "millimeters"), "33782000000000.000 cubic millimeters")
//Test.assertEquals(pyramidVolume(13.6, 62.2, 6, "meters"), "1691.840 cubic meters")
//Test.assertEquals(pyramidVolume(4230, 923, 1932, "kilometers"), "2.514 cubic kilometers")
//​
//// Author : _3G_

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Pricey Products

//tags: arrays,data_structures,objects,sorting

//url: https://edabit.com/challenge/neWTApTYread9ZNdP

//Description:
//You will be given an object with various consumer products and their respective prices. Return a list of the products with a minimum price of 500 in descending order.
//Examples
//products({"Computer" : 600, "TV" : 800, "Radio" : 50}) ➞ ["TV","Computer"]
//
//products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}) ➞ ["Bike1", "Bike3"]) 
//
//products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20}) ➞ []
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertDeepEquals(products({"Computer" : 600, "TV" : 800, "Radio" : 100}), ["TV","Computer"])
//Test.assertDeepEquals(products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}), ["Bike1", "Bike3"])
//Test.assertDeepEquals(products({"Calvin Klein" : 500, "Armani" : 5000, "Dolce & Gabbana" : 2000}), ["Armani", "Dolce & Gabbana", "Calvin Klein"])
//Test.assertDeepEquals(products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20}), [])
//Test.assertDeepEquals(products({"Dell" : 400, "HP" : 300, "Apple" : 1200}), ['Apple'])

