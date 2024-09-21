

//title: Dashed Vowels

//tags: formatting,logic,regex,strings

//url: https://edabit.com/challenge/QQxJqZnfFN6mPcBCr

//Description:
//Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).
//Examples
//dashed("Edabit") ➞ "-E-d-a-b-i-t"
//
//dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"
//
//dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
//Notes
//A string can contain uppercase and lowercase vowels.
//Y is not considered a vowel.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(dashed("Edabit"), "-E-d-a-b-i-t")
//Test.assertEquals(dashed("Carpe Diem"), "C-a-rp-e- D-i--e-m")
//Test.assertEquals(dashed("Fight for your right to party!"), "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!")
//Test.assertEquals(dashed("Finishing off someone’s sentence is annoying, even if you have guessed correctly. Add to that rude, if they stutter."), "F-i-n-i-sh-i-ng -o-ff s-o-m-e--o-n-e-’s s-e-nt-e-nc-e- -i-s -a-nn-o-y-i-ng, -e-v-e-n -i-f y-o--u- h-a-v-e- g-u--e-ss-e-d c-o-rr-e-ctly. -A-dd t-o- th-a-t r-u-d-e-, -i-f th-e-y st-u-tt-e-r.")
//Test.assertEquals(dashed("Fear the soldier who stammers, for he is very fast at pulling the triger."), "F-e--a-r th-e- s-o-ld-i--e-r wh-o- st-a-mm-e-rs, f-o-r h-e- -i-s v-e-ry f-a-st -a-t p-u-ll-i-ng th-e- tr-i-g-e-r.")
//Test.assertEquals(dashed("Thank you, I said bravely, dropping the syllables cleanly, like marbles, and secretly full of the most pathetic pride imaginable."), "Th-a-nk y-o--u-, -I- s-a--i-d br-a-v-e-ly, dr-o-pp-i-ng th-e- syll-a-bl-e-s cl-e--a-nly, l-i-k-e- m-a-rbl-e-s, -a-nd s-e-cr-e-tly f-u-ll -o-f th-e- m-o-st p-a-th-e-t-i-c pr-i-d-e- -i-m-a-g-i-n-a-bl-e-.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Chocolate Dilemma

//tags: arrays,conditions

//url: https://edabit.com/challenge/SLsJZd8EzW8nDoT5f

//Description:
//Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].
//Write a function that returns true if the total area of chocolate is the same for each sister.
//To illustrate:
//testFairness([[4, 3], [2, 4], [1, 2]],
//[[6, 2], [4, 2], [1, 1], [1, 1]])
//➞ true
//
//// Agatha's pieces: [4, 3], [2, 4], [1, 2]
//// Bertha's pieces: [6, 2], [4, 2], [1, 1], [1, 1]
//
//// Total area of Agatha's chocolate
//// 4x3 + 2x4 + 1x2 = 12 + 8 + 2 = 22
//
//// Total area of Bertha's chocolate is:
//// 6x2 + 4x2 + 1x1 + 1x1 = 12 + 8 + 1 + 1 = 22
//Examples
//testFairness([[1, 2], [2, 1]], [[2, 2]]) ➞ true
//
//testFairness([[1, 2], [2, 1]], [[2, 2], [4, 4]]) ➞ false
//
//testFairness([[2, 2], [2, 2], [2, 2], [2, 2]], [[4, 4]]) ➞ true
//
//testFairness([[1, 5], [6, 3], [1, 1]], [[7, 1], [2, 2], [1, 1]]) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(testFairness([[1,5], [6,3], [1,1]], [[7,1], [2,2], [1,1]]), false);
//Test.assertEquals(testFairness([[2,2], [2,2], [2,2], [2,2]], [[4,4]]), true);
//Test.assertEquals(testFairness([[1,2], [2,1]], [[2,2]]), true);
//Test.assertEquals(testFairness([[1,2], [2,1]], [[2,2], [4,4]]), false);
//Test.assertEquals(testFairness([[2,4], [1,1], [11,1]], [[2,2], [4,4]]), true);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Spin Around, Touch The Ground

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/Z8QZZJzLF4LWPA5Xw

//Description:
//Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.
//Examples
//spinAround(["right", "right", "right", "right", "left", "right"]) ➞ 1
//# You spun right 4 times (90 * 4 = 360)
//# You spun left once (360 - 90 = 270)
//# But you spun right once more to make a full rotation (270 + 90 = 360)
//
//spinAround(["left", "right", "left", "right"]) ➞ 0
//
//spinAround(["right", "right", "right", "right", "right", "right", "right", "right"]) ➞ 2
//
//spinAround(["left", "left", "left", "left"]) ➞ 1
//Notes
//Return a positive number.
//All tests will only include the words "right" and "left".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(spinAround(['left', 'right', 'left', 'right']), 0)
//Test.assertEquals(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']), 2)
//Test.assertEquals(spinAround(['left', 'left', 'left', 'left']), 1)
//Test.assertEquals(spinAround([]), 0)
//Test.assertEquals(spinAround(['left']), 0)
//Test.assertEquals(spinAround(['right']), 0)
//Test.assertEquals(spinAround(['right', 'right', 'right', 'left', 'right', 'right']), 1)
//Test.assertEquals(spinAround(['left', 'left', 'right', 'left', 'left', 'left', 'left', 'left', 'left', 'right', 'left', 'left', 'right', 'right', 'right', 'right', 'left', 'left', 'right', 'right']), 1)
//Test.assertEquals(spinAround(['right', 'left', 'left', 'right', 'left', 'left', 'right', 'left', 'right', 'right', 'left', 'left', 'right', 'right', 'right', 'left', 'left', 'right']), 0)
//Test.assertEquals(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']), 10)
//Test.assertEquals(spinAround(['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left']), 10)

