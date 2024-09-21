

//title: Fraction Greater Than One

//tags: language_fundamentals,math,strings,validation

//url: https://edabit.com/challenge/L65zKSJKaDAj6JGyt

//Description:
//Given a fraction as a string, return whether or not it is greater than 1 when evaluated.
//Examples
//greaterThanOne("1/2") ➞ false
//
//greaterThanOne("7/4") ➞ true
//
//greaterThanOne("10/10") ➞ false
//Notes
//Fractions must be strictly greater than 1 (see example #3).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(greaterThanOne("1/2"), false)
//Test.assertEquals(greaterThanOne("7/4"), true)
//Test.assertEquals(greaterThanOne("10/10"), false)
//Test.assertEquals(greaterThanOne("12/30"), false)
//Test.assertEquals(greaterThanOne("28/3"), true)
//Test.assertEquals(greaterThanOne("35/31"), true)
//Test.assertEquals(greaterThanOne("11/27"), false)
//Test.assertEquals(greaterThanOne("42/32"), true)
//Test.assertEquals(greaterThanOne("34/15"), true)
//Test.assertEquals(greaterThanOne("16/16"), false)
//Test.assertEquals(greaterThanOne("38/41"), false)
//Test.assertEquals(greaterThanOne("45/43"), true)
//Test.assertEquals(greaterThanOne("13/38"), false)
//Test.assertEquals(greaterThanOne("43/2"), true)
//Test.assertEquals(greaterThanOne("16/31"), false)
//Test.assertEquals(greaterThanOne("41/15"), true)
//Test.assertEquals(greaterThanOne("2/38"), false)
//Test.assertEquals(greaterThanOne("37/21"), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Circle or Square

//tags: geometry,validation

//url: https://edabit.com/challenge/D8DDFMFK8RaWWmcGY

//Description:
//Given the radius of a circle and the area of a square, return true if the circumference of the circle is greater than the square's perimeter and false if the square's perimeter is greater than the circumference of the circle.
//Examples
//circle_or_square(16, 625) ➞ True
//
//circle_or_square(5, 100) ➞ False
//
//circle_or_square(8, 144) ➞ True
//Notes
//You can use Pi to 2 decimal places (3.14).
//Circumference of a circle equals 2 * Pi * radius.
//To find the perimeter of a square using its area, find the square root of area (to get side length) and multiply that by 4.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(circle_or_square(16, 625), true)
//Test.assertEquals(circle_or_square(8, 144), true)
//Test.assertEquals(circle_or_square(15, 400), true)
//Test.assertEquals(circle_or_square(5, 100), false)
//Test.assertEquals(circle_or_square(18, 900), false)
//Test.assertEquals(circle_or_square(1, 4), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse Psychology

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/GtXkDW8BKPHhvQABk

//Description:
//For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.
//Examples
//reversePsychology("wash the dishes") ➞ "Do not wash the dishes."
//
//reversePsychology("eat your lunch") ➞ "Do not eat your lunch."
//
//reversePsychology("go to school") ➞ "Do not go to school."
//Notes
//Are available.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reversePsychology("wash the dishes"), "Do not wash the dishes.")
//Test.assertEquals(reversePsychology("eat your lunch"), "Do not eat your lunch.")
//Test.assertEquals(reversePsychology("go to school"), "Do not go to school.")
//Test.assertEquals(reversePsychology(), "Do not do anything.")
//Test.assertEquals(reversePsychology("read"), "Do not read.")
//Test.assertEquals(reversePsychology("learn Python"), "Do not learn Python.")
//Test.assertEquals(reversePsychology("exercise"), "Do not exercise.")
//Test.assertEquals(reversePsychology("buy PC parts"), "Do not buy PC parts.")
//Test.assertEquals(reversePsychology("do your homework"), "Do not do your homework.")
//Test.assertEquals(reversePsychology("drink water"), "Do not drink water.")
//Test.assertEquals(reversePsychology("look around"), "Do not look around.")

