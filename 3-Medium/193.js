

//title: Series and Parallel Resistor Calculator

//tags: arrays,numbers

//url: https://edabit.com/challenge/geb39pk8YifkrgJ95

//Description:
//Create a function that takes an array of resistors and calculates the output of total resistance if the circuit is connected in parallel or in series.
//Examples
//resistanceCalculator([10, 20, 30, 40, 50]) ➞ [4.38, 150]
//
//resistanceCalculator([25, 14, 65, 18]) ➞ [5.48, 122]
//
//resistanceCalculator([10, 10]) ➞ [5, 20]
//
//resistanceCalculator([0, 0, 0, 0]) ➞ [0, 0]
//
//resistanceCalculator([1.1, 2.1, 3.2, 4.3, 5.4, 6.5]) ➞ [0.44, 22.6]
//Notes
//Return parallel resistance as the first element and series resistance as second element of the array.
//Round up the total resistance to two decimal places.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(resistanceCalculator([10, 20, 30, 40, 50]), [4.38, 150])
//Test.assertSimilar(resistanceCalculator([25, 14, 65, 18]), [5.48, 122])
//Test.assertSimilar(resistanceCalculator([10, 10]), [5, 20])
//Test.assertSimilar(resistanceCalculator([0, 0, 0, 0]), [0,0])
//Test.assertSimilar(resistanceCalculator([1.1, 2.1, 3.2, 4.3, 5.4, 6.5]), [0.44, 22.6])
//Test.assertSimilar(resistanceCalculator([332.963, 87.036]), [69, 420])
//Test.assertSimilar(resistanceCalculator([12345, 0]), [0, 12345])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Normal Sequence

//tags: algorithms,logic,math,numbers

//url: https://edabit.com/challenge/bYsNQLCRK6qhW3E26

//Description:
//Consider a sequence where the first two numbers are 0 and 1 and the next number of the sequence is the sum of the previous two numbers modulo three.
//Create a function that finds the nth element of the sequence.
//Examples
//normalSequence(1) ➞ 0
//
//normalSequence(2) ➞ 1
//
//normalSequence(3) ➞ 1
//// (0+1)%3 = 1
//
//normalSequence(20) ➞ 2
//Notes
//1 ≤ N ≤ 10^19
//A hint in comments section.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(normalSequence(20), 2)
//Test.assertEquals(normalSequence(8), 1)
//Test.assertEquals(normalSequence(41), 0)
//Test.assertEquals(normalSequence(48), 1)
//Test.assertEquals(normalSequence(148), 2)
//Test.assertEquals(normalSequence(163), 1)
//Test.assertEquals(normalSequence(111), 2)
//Test.assertEquals(normalSequence(118), 2)
//Test.assertEquals(normalSequence(117), 0)
//Test.assertEquals(normalSequence(90), 1)
//Test.assertEquals(normalSequence(91), 1)
//Test.assertEquals(normalSequence(95), 2)
//Test.assertEquals(normalSequence(87), 2)
//Test.assertEquals(normalSequence(85), 0)
//Test.assertEquals(normalSequence(82), 1)
//Test.assertEquals(normalSequence(71), 2)
//Test.assertEquals(normalSequence(72), 1)  
//Test.assertEquals(normalSequence(51013947783), 2)
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: String Like Square

//tags: formatting,strings

//url: https://edabit.com/challenge/zk8Xrof2x55u9FBJ5

//Description:
//Create a function that takes a number and returns a string like square.
//Examples
//createSquare(-1) ➞ ""
//
//createSquare(0) ➞ ""
//
//createSquare(1) ➞ "#"
//
//createSquare(2) ➞ "##\n##"
//
//createSquare(3) ➞ "###\n# #\n###"
//
//createSquare(4) ➞ "####\n#  #\n#  #\n####"
//"####
//#  #
//#  #
//####"
//Notes
//Square width <= 16383

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(createSquare(-1), "");
//Test.assertEquals(createSquare(0), "");
//Test.assertEquals(createSquare(null), "");
//Test.assertEquals(createSquare(1), "#");
//Test.assertEquals(createSquare(2), "##\n##");
//Test.assertEquals(createSquare(3), "###\n# #\n###");
//Test.assertEquals(createSquare(4), "####\n#  #\n#  #\n####");
//Test.assertEquals(createSquare(10), "##########\n#        #\n#        #\n#        #\n#        #\n#        #\n#        #\n#        #\n#        #\n##########");
//Test.assertEquals(createSquare(20), "####################\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n####################");
//Test.assertEquals(createSquare(12), "############\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n############");
//Test.assertEquals(createSquare(50), "##################################################\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n##################################################");
//Test.assertEquals(createSquare(30), "##############################\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n##############################");
//Test.assertEquals(createSquare(21), "#####################\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#####################");
//Test.assertEquals(createSquare(33), "#################################\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#################################");
//Test.assertEquals(createSquare(80), "################################################################################\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n################################################################################");
//Test.assertEquals(getLength(createSquare(8000)), 64007999);
//Test.assertEquals(getLength(createSquare(4025)), 16204649);
//Test.assertEquals(getLength(createSquare(3018)), 9111341);
//Test.assertEquals(getLength(createSquare(2020)), 4082419);
//Test.assertEquals(getLength(createSquare(9856)), 97150591);
//Test.assertEquals(getLength(createSquare(7542)), 56889305);
//Test.assertEquals(getLength(createSquare(12540)), 157264139);
//Test.assertEquals(getLength(createSquare(13021)), 169559461);
//Test.assertEquals(getLength(createSquare(16200)), 262456199);
//Test.assertEquals(getLength(createSquare(16383)), 268419071);

