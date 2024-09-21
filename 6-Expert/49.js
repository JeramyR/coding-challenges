

//title: Recursion: Modulo by Subtraction

//tags: math,recursion

//url: https://edabit.com/challenge/kWrkGRDRyCdCbX8Yx

//Description:
//The modulo operation can also be done by repetitive subtraction or addition. In this challenge, you're going to create a function that mimics such an operation and returns the modulo of the two given numbers by recursively subtracting or adding them.
//Examples
//modulo(100, 25) ➞ 0
//
//modulo(-51, -4) ➞ -3
//
//modulo(3, 9) ➞ 3
//
//modulo(-21, 5) ➞ -1
//
//modulo(1024, 7) ➞ 2
//
//modulo(273, -6) ➞ 3
//Notes
//There will be no zero-values for the modulo divisor.
//You're expected to solve this challenge using a recursive approach.
//You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully assumed the concept behind it before taking up this challenge.
//If you think recursion is fun, you can find a collection of those challenges here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertEquals(recursive(modulo), true)
//Test.assertNotEquals(recursive(modulo), false, "Recursion is required!")
//​
//let [numVector, resVector] = [[
//  [100, 25], [-51, -4], [3, 9], [-21, 5], [1024, 7], [273, -6]],
//  [0, -3, 3, -1, 2, 3]]
//for (let i in numVector) Test.assertEquals(modulo(...numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Multiply By 11

//tags: logic,math,numbers,recursion,strings

//url: https://edabit.com/challenge/DQKQ4N87t2aN5NDX6

//Description:
//Given a positive number as a string, multiply the number by 11 and also return it as a string. However, there is a catch:
//You are NOT ALLOWED to simply cast the numeric string into an integer!
//Now, how is this challenge even possible? Despite this, there is still a way to solve it, and it involves thinking about how someone might multiply by 11 in their head. See the tips below for guidance.
//Examples
//multiplyBy11("11") ➞ "121"
//
//multiplyBy11("111111111") ➞ "1222222221"
//
//multiplyBy11("1213200020") ➞ "13345200220"
//
//multiplyBy11("1217197941") ➞ "13389177351"
//
//multiplyBy11("9473745364784876253253263723") ➞ "104211199012633638785785900953"
//Tip
//There is a simple trick to multiplying any two-digit number by 11 in your head:
//Add the two digits together
//Place the sum between the two digits!
//Note if the total goes over, carry the sum on to the next digit
//// 23 * 11
//// Add together 2 and 3 to make 5
//// Place 5 between the two digits to make 253
//// 77 * 11
//// Add together 7 and 7 to make 14
//// Place 4 between the two digits to make 747
//// Carry the 1 to make 847
//Notes
//Check out this resource to find out how this process can be utilized for numbers of any length.
//This challenge was heavily inspired by Mubashir Hassan's challenge on adding two numbers together.
//You are expected to solve this challenge recursively.
//An iterative versioin of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const argAtPosOne = src => `${src}`.match(RegExp(`${src.name}\\(\\w+.+\\)`).test(src) ? RegExp(`(?<=${src.name}\\()\\w+`) : RegExp(`\\w+(?=\\b.*\\)? =>)`))[0];
//const isDirectMult = (src, arg) => RegExp(`Number(${arg})\\s*\\*\\s*11|\\+${arg}\\s*\\*\\s*11`, 'gm').test(src)
//const isRecursive = src => (`${src}`.match(RegExp(`${src.name}`, 'gm'))||[]).length > +(/function/.test(src))
//​
//Test.assertNotEquals(isDirectMult(multiplyBy11, argAtPosOne(multiplyBy11)), true, 'No shortcuts. Cast from string to numeric is not allowed!')
//Test.assertNotEquals(isRecursive(multiplyBy11), false, 'Recursion is required!')
//​
//let [actualParam, expectedParam] = [
//  [ "11", "113434", "111111111", "1213200020", "1217197941", "12345678987654321", "9473745364784876253253263723",
//    "57798475537262775664949793178544410084322125871112100873888108368764143479609636230947305905435344501732127613092539526132478297050231140298675968743242036743911849895415821806568888540371506471898980622461341526051319836717892341981184041251420949699402992990039646759030590473730159880164726562551837027321585062972130328324427060636687637549685519707281109006818275101108700527287692750795014581999611840743604415714313247263830886107561336757943548272922950996455097654414521769924004347236729944" ],
//  [ "121", "1247774", "1222222221", "13345200220", "13389177351", "135802468864197531", "104211199012633638785785900953",
//    "635783230909890532314447724963988510927543384582233109612769192056405578275705998540420364959788789519053403744017934787457261267552542543285435656175662404183030348849574039872257773944086571190888786847074756786564518203896815761793024453765630446693432922890436114349336495211031758681811992188070207300537435692693433611568697667003564013046540716780092199075001026112195705800164620258745160401995730248179648572857445719902139747183174704337379031002152460961006074198559739469164047819604029384" ]
//]
//for (let i = 85; i < 101; i++) Test.assertEquals(multiplyBy11(i+''), `${i*11}`)
//for (let i in actualParam) Test.assertEquals(multiplyBy11(actualParam[i]), expectedParam[i])
//​
//// This is a translated challenge from Python 
//// which was originally published by no less than 
//// @Joshua Senoron. All the credits to you mate.

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Solve for the Red Area

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/tr349ueDjT64Rf5aP

//Description:
//This problem went viral in China, spreading on Weibo. The problem is to solve for the area shown in red between the semicircle and the rectangle’s diagonal.
//Create a function that takes a number r as an the length of the side and returns the area rounded to the nearest thousandth. Watch the video in the Resources tab for the answer to the problem.
//
//Examples
//redArea(0) ➞ 0
//
//redArea(4) ➞ 1.252
//
//redArea(25) ➞ 48.906
//Notes
//The input r is always a valid number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//["25,48.906",
//"94,691.412",
//"36,101.411",
//"42,138.032",
//"39,119.017",
//"36,101.411",
//"28,61.348",
//"33,85.214",
//"0,0",
//"68,361.825",
//"15,17.606",
//"55,236.705",
//"9,6.338",
//"67,351.262",
//"4,1.252",
//"30,70.425",
//"99,766.923",
//"28,61.348",
//"48,180.287",
//"13,13.224",
//"76,451.969",
//"3,0.704",
//"33,85.214",
//"37,107.123",
//"13,13.224",

