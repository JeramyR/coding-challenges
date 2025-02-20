

//title: Creating a Picture Frame

//tags: arrays,formatting,loops,strings

//url: https://edabit.com/challenge/tu5oTshmsjJQcJjmZ

//Description:
//Create a function that takes the width, height and character and returns a picture frame as a matrix.
//Examples
//getFrame(4, 5, "#") ➞ [
//  ["####"],
//  ["#  #"],
//  ["#  #"],
//  ["#  #"],
//  ["####"]
//]
//// Frame is 4 characters wide and 5 characters tall.
//
//
//getFrame(10, 3, "*") ➞ [
//  ["**********"],
//  ["*        *"],
//  ["**********"]
//]
//// Frame is 10 characters and wide and 3 characters tall.
//
//
//getFrame(2, 5, "0") ➞ "invalid"
//// Frame's width is not more than 2.
//Notes
//Remember the gap.
//Return "invalid" if width or height is 2 or less (can't put anything inside).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getFrame(3, 3, "0"), [
//  ["000"],
//  ["0 0"],
//  ["000"]
//])
//​
//Test.assertSimilar(getFrame(4, 5, "#"), [
//  ["####"],
//  ["#  #"],
//  ["#  #"],
//  ["#  #"],
//  ["####"]
//])
//​
//Test.assertSimilar(getFrame(10, 3, "*"), [
//  ["**********"],
//  ["*        *"],
//  ["**********"]
//])
//​
//Test.assertSimilar(getFrame(2, 5, "0"), "invalid")
//Test.assertSimilar(getFrame(1, 6, "["), "invalid")
//Test.assertSimilar(getFrame(5, 4, "z"), [["zzzzz"], ["z   z"], ["z   z"], ["zzzzz"]])
//Test.assertSimilar(getFrame(3, 4, "A"), [["AAA"], ["A A"], ["A A"], ["AAA"]])
//Test.assertSimilar(getFrame(10, 2, "`"), "invalid")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Message Screen Glitch

//tags: cryptography,formatting,strings

//url: https://edabit.com/challenge/eqAbW3AJz7de6gTjr

//Description:
//Your open-plan office building has a scrolling message screen on the far wall. One day, you notice that the messages are starting to glitch. Some of the lower case letters are being replaced by their position in the alphabet ("a" = 1, "b" = 2, ..., "z" = 26). Given the glitched text, return the corrected message.
//Examples
//messageGlitch("T21e19d1y's m1r11e20i14g m5e20i14g w9l12 14o23 2e i14 20h5 3o14f5r5n3e r15o13.")
//➞ "Tuesday's marketing meeting will now be in the conference room."
//
//messageGlitch("A s9l22e18 Pr9u19 9s d15u2l5-16a18k5d o21t19i4e. Wi12l t8e o23n5r p12e1s5 13o22e i20.")
//➞ "A silver Prius is double-parked outside. Will the owner please move it."
//
//messageGlitch("P12e1s5 4o14'20 13i3r15w1v5 6i19h i14 20h5 20h9r4 6l15o18 11i20c8e14!")
//➞ "Please don't microwave fish in the third floor kitchen!"
//Notes
//Each group of numbers will always refer to one letter only (e.g. 14 = "n", not "ad").

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(messageGlitch("T8e c1f5 23i12l b5 3l15s9n7 5a18l25 15n T8u18s4a25. L1s20 6o15d o18d5r19 1t n15o14."), "The cafe will be closing early on Thursday. Last food orders at noon.")
//Test.assertEquals(messageGlitch("H5a22y s14o23 6o18e3a19t f15r t8i19 5v5n9n7. B5 3a18e6u12 15n t8e r15a4s!"), "Heavy snow forecast for this evening. Be careful on the roads!")
//Test.assertEquals(messageGlitch("T8r5e n5w c1r p1r11i14g p1s19e19 1r5 1v1i12a2l5. S16e1k t15 19e3u18i20y i6 9n20e18e19t5d."), "Three new car parking passes are available. Speak to security if interested.")
//Test.assertEquals(messageGlitch("V15l21n20e5r19 18e17u9r5d t15 15r7a14i19e t8e C8r9s20m1s p1r20y."), "Volunteers required to organise the Christmas party.")
//Test.assertEquals(messageGlitch("A b12a3k w1l12e20 8a19 2e5n f15u14d o21t19i4e. Pl5a19e c15n20a3t HR 20o r5c12a9m."), "A black wallet has been found outside. Please contact HR to reclaim.")
//Test.assertEquals(messageGlitch("C12i5n20s w9l12 2e v9s9t9n7 20h5 6i6t8 6l15o18 20h9s a6t5r14o15n. Re13o22e a14y c15n6i4e14t9a12 4o3u13e14t19 6r15m v9e23."), "Clients will be visiting the fifth floor this afternoon. Remove any confidential documents from view.")
//Test.assertEquals(messageGlitch("T8e18e a18e l5f20-15v5r d15u7h14u20s a20 18e3e16t9o14. F9r19t-c15m5, f9r19t-s5r22e."), "There are left-over doughnuts at reception. First-come, first-serve.")
//Test.assertEquals(messageGlitch("R5m5m2e18 20o w1s8 1n25 13u7s l5f20 9n t8e k9t3h5n19."), "Remember to wash any mugs left in the kitchens.")
//Test.assertEquals(messageGlitch("T8e w5e11l25 6i18e a12a18m t5s20 23i12l n15w b5 15n W5d14e19d1y m15r14i14g19."), "The weekly fire alarm test will now be on Wednesday mornings.")
//Test.assertEquals(messageGlitch("N5w p18o4u3t l1u14c8 14e24t m15n20h! De20a9l19 20o f15l12o23."), "New product launch next month! Details to follow.")
//Test.assertEquals(messageGlitch("S5c15n4 18e13i14d5r: 4o14'20 13i3r15w1v5 6i19h i14 20h5 20h9r4 6l15o18 11i20c8e14. S5r9o21s12y, 13y c21b9c12e i19 18i7h20 14e24t d15o18."), "Second reminder: don't microwave fish in the third floor kitchen. Seriously, my cubicle is right next door.")
//Test.assertEquals(messageGlitch("N5w b21s9n5s19 3a18d19 1r5 1v1i12a2l5. P12e1s5 3o14t1c20 25o21r l9n5 13a14a7e18 6o18 4e20a9l19."), "New business cards are available. Please contact your line manager for details.")
//Test.assertEquals(messageGlitch("D21e t15 20h5 9n3i4e14t l1s20 13o14t8, d18e19s-d15w14 Fr9d1y h1s b5e14 20e13p15r1r9l25 3a14c5l12e4."), "Due to the incident last month, dress-down Friday has been temporarily cancelled.")
//Test.assertEquals(messageGlitch("T8e s5c15n4 6l15o18 16h15t15c15p9e18 9s o21t o6 19e18v9c5 (a7a9n). A14 5n7i14e5r h1s b5e14 3a12l5d."), "The second floor photocopier is out of service (again). An engineer has been called.")
//Test.assertEquals(messageGlitch("A f18i5n4l25 18e13i14d5r t8a20 16h15t15c15p25i14g a14y n15n-p1p5r i20e13s i19 19t18i3t12y p18o8i2i20e4."), "A friendly reminder that photocopying any non-paper items is strictly prohibited.")
//Test.assertEquals(messageGlitch("I n15w k14o23 20h5 16e18s15n t8a20'19 2e5n m9c18o23a22i14g t8e f9s8. I'l12 8u14t y15u d15w14 1n4 5n4 25o21 9f i20 8a16p5n19 1g1i14. I r5t9r5 14e24t w5e11, s15 I'22e n15t8i14g t15 12o19e a14d a12l t8e t9m5 9n t8e w15r12d."), "I now know the person that's been microwaving the fish. I'll hunt you down and end you if it happens again. I retire next week, so I've nothing to lose and all the time in the world.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Missing Numbers

//tags: math,numbers,validation

//url: https://edabit.com/challenge/5X9SgidXaNf7pikbp

//Description:
//Create a function that takes an array of "mostly" numbers and returns the total amount of missing numbers, given that the array is sorted in ascending order. Watch out for strings!
//Examples
//sumOfMissingNums(["1", "3", "5", "7", "9"]) ➞ 4
//// 1+1+1+1
//
//sumOfMissingNums(["7", "3", "1", "9", "5"]) ➞ 4
//
//sumOfMissingNums(["1", "5", "B", "9", "z"]) ➞ 6
//Notes
//The data might be dirty! Clean out any filthy strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumOfMissingNums(['1', '3', '5', '7', '9']), 4)
//Test.assertEquals(sumOfMissingNums(['7', '3', '1', '9', '5']), 4)
//Test.assertEquals(sumOfMissingNums(['10', '20', '30', '40', '50']), 36)
//Test.assertEquals(sumOfMissingNums(['1', '78', 'B', '9', 'z']), 75)
//Test.assertEquals(sumOfMissingNums(['95', '96', '97', '98', '99']), 0)
//Test.assertEquals(sumOfMissingNums(['45', 'EDABIT', '56']), 10)

