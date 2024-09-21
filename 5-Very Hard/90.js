

//title: The Susquehanna Hat Company

//tags: loops,math

//url: https://edabit.com/challenge/2uQqhN76PToZuqhJa

//Description:
//This fabled hat company has 5 production lines running simultaneously. The speed of each production line varies depending on the style and quality of the hat being produced. You will be given the number of hats required and an array of production line speeds.
//Your job is to devise a function that will find the number of minutes elapsed for exactly n hats to be finished. If exactly n hats cannot be made in any time frame, return "None". The speeds given are the number of minutes required to make one hat.
//Examples
//hats([5, [1, 1, 1, 1, 1]]) ➞ "1 minute"
//// If each line makes a hat in 1 min, it takes 1 min to make 5 hats.
//
//hats([3, [23, 11, 19, 9, 36]]) ➞ "18 minutes"
//
//hats([650, [23, 11, 19, 9, 36]]) ➞ "2001 minutes"
//
//hats([9, [23, 11, 19, 9, 36]]) ➞ "None"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hats([35, [1, 1, 1, 1, 1]]), "7 minutes")
//Test.assertEquals(hats([11, [4, 18, 11, 29, 10]]), "24 minutes")
//Test.assertEquals(hats([1, [11, 21, 1, 18, 2]]), "1 minute")
//Test.assertEquals(hats([1, [4, 18, 11, 29, 10]]), "4 minutes")
//Test.assertEquals(hats([100, [6, 3, 18, 7, 87]]), "None")
//Test.assertEquals(hats([2001, [1, 2, 3, 4, 5]]), "877 minutes")
//Test.assertEquals(hats([200, [30, 45, 27, 78, 29]]), "1440 minutes")
//Test.assertEquals(hats([999999999, [30, 45, 27, 78, 29]]), "7148174160 minutes")
//Test.assertEquals(hats([47, [12, 19, 12, 28, 17]]), "None")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Escape Velocity II

//tags: math,physics,strings

//url: https://edabit.com/challenge/gKxduXnemy4EEeWfm

//Description:
//When escaping a compound system, such as a moon orbiting a planet or a planet orbiting a sun, a rocket that leaves at escape velocity (ve1) for the first (orbiting) body, (e.g. Earth) will not travel to an infinite distance because it needs an even higher speed to escape gravity of the second body (e.g. the Sun). Near the Earth, the rocket's trajectory will appear parabolic, but it will still be gravitationally bound to the second body and will enter an elliptical orbit around that body, with an orbital speed similar to the first body.
//To escape the gravity of the second body once it has escaped the first body the rocket will need to be travelling at the escape velocity for the second body (ve2) (at the orbital distance of the first body). However, when the rocket escapes the first body it will still have the same orbital speed around the second body that the first body has. So its excess velocity as it escapes the first body will need to be the difference between the orbital velocity and the escape velocity. With a circular orbit, escape velocity is √2 times the orbital speed.
//Objective
//Create a function that takes a planet as an argument and returns the escape velocity from the system Planet/Sun expressed in km/s, as well as the ratio between the calculated escape velocity from the system Planet/Sun and the escape velocity from the system Earth/Sun.
//Data
//In the following table you will find for each planet its escape velocity relative to its own gravity and the escape velocity relative to the the Sun's gravity (at the corresponding orbital distance of the planet).
//Planet	ve1	ve2
//Mercury	4.25	67.7
//Venus	10.36	49.5
//Earth	11.186	42.1
//Mars	5.03	34.1
//Jupiter	60.20	18.5
//Saturn	36.09	13.6
//Uranus	21.38	9.6
//Neptune	23.56	7.7
//Consider:
//k = 0.2929
//Examples
//systemEscapeVelocity("Mercury") ➞ "The escape velocity from the system Mercury/Sun is 20.3 km/s. The escape velocity from the system Mercury/Sun is 1.2 times the escape velocity from the system Earth/Sun."
//
//systemEscapeVelocity("Earth") ➞ "The escape velocity from the system Earth/Sun is 16.6 km/s. The escape velocity from the system Earth/Sun is 1.0 times the escape velocity from the system Earth/Sun."
//Notes
//Round to the nearest tenth the escape velocity from the system Planet/Sun. Do not round the the escape velocity from the system Earth/Sun to calculate the ratio between escape velocities, but round the ratio to the nearest tenth.
//See part #1 of this series: Escape Velocity I.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(systemEscapeVelocity('Mercury'), 'The escape velocity from the system Mercury/Sun is 20.3 km/s. The escape velocity from the system Mercury/Sun is 1.2 times the escape velocity from the system Earth/Sun.')
//Test.assertEquals(systemEscapeVelocity('Venus'), 'The escape velocity from the system Venus/Sun is 17.8 km/s. The escape velocity from the system Venus/Sun is 1.1 times the escape velocity from the system Earth/Sun.')
//Test.assertEquals(systemEscapeVelocity('Earth'), 'The escape velocity from the system Earth/Sun is 16.6 km/s. The escape velocity from the system Earth/Sun is 1.0 times the escape velocity from the system Earth/Sun.')
//Test.assertEquals(systemEscapeVelocity('Mars'), 'The escape velocity from the system Mars/Sun is 11.2 km/s. The escape velocity from the system Mars/Sun is 0.7 times the escape velocity from the system Earth/Sun.')
//Test.assertEquals(systemEscapeVelocity('Jupiter'), 'The escape velocity from the system Jupiter/Sun is 60.4 km/s. The escape velocity from the system Jupiter/Sun is 3.6 times the escape velocity from the system Earth/Sun.')
//Test.assertEquals(systemEscapeVelocity('Saturn'), 'The escape velocity from the system Saturn/Sun is 36.3 km/s. The escape velocity from the system Saturn/Sun is 2.2 times the escape velocity from the system Earth/Sun.')
//Test.assertEquals(systemEscapeVelocity('Uranus'), 'The escape velocity from the system Uranus/Sun is 21.6 km/s. The escape velocity from the system Uranus/Sun is 1.3 times the escape velocity from the system Earth/Sun.')
//Test.assertEquals(systemEscapeVelocity('Neptune'), 'The escape velocity from the system Neptune/Sun is 23.7 km/s. The escape velocity from the system Neptune/Sun is 1.4 times the escape velocity from the system Earth/Sun.')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mountains or Valleys

//tags: arrays,functional_programming,higher_order_functions

//url: https://edabit.com/challenge/LgfitGtQZTJBNbsCQ

//Description:
//A mountain is an array with exactly one peak.
//All numbers to the left of the peak are increasing.
//All numbers to the right of the peak are decreasing.
//The peak CANNOT be on the boundary.
//A valley is an array with exactly one trough.
//All numbers to the left of the trough are decreasing.
//All numbers to the right of the trough are increasing.
//The trough CANNOT be on the boundary.
//Some examples of mountains and valleys:
//Mountain A:  [1, 3, 5, 4, 3, 2]   // 5 is the peak
//Mountain B:  [-1, 0, -1]   // 0 is the peak
//Mountain B:  [-1, -1, 0, -1, -1]   // 0 is the peak (plateau on both sides is okay)
//
//Valley A: [10, 9, 8, 7, 2, 3, 4, 5]   // 2 is the trough
//Valley B: [350, 100, 200, 400, 700]  // 100 is the trough
//Neither mountains nor valleys:
//Landscape A: [1, 2, 3, 2, 4, 1]  // 2 peaks (3, 4), not 1
//Landscape B: [5, 4, 3, 2, 1]  // Peak cannot be a boundary element
//Landscape B: [0, -1, -1, 0, -1, -1]  // 2 peaks (0)
//Based on the rules above, write a function that takes in an array and returns either "mountain", "valley", or "neither".
//Examples
//landscapeType([3, 4, 5, 4, 3]) ➞ "mountain"
//
//landscapeType([9, 7, 3, 1, 2, 4]) ➞ "valley"
//
//landscapeType([9, 8, 9]) ➞ "valley"
//
//landscapeType([9, 8, 9, 8]) ➞ "neither"
//Notes
//A peak is not exactly the same as the max of an array. The max is a unique number, but an array may have multiple peaks. However, if there exists only one peak in an array, then it is true that the peak = max.
//See comments for a hint.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(landscapeType([3, 4, 5, 4, 3]), "mountain")
//Test.assertEquals(landscapeType([9, 7, 3, 1, 2, 4]), "valley")
//Test.assertEquals(landscapeType([9, 8, 9]), "valley")
//Test.assertEquals(landscapeType([9, 8, 9, 8]), "neither", '2 peaks')
//Test.assertEquals(landscapeType([1, 3, 5, 4, 3, 2]), "mountain")
//Test.assertEquals(landscapeType([-1, 0, -1]), "mountain")
//Test.assertEquals(landscapeType([10, 9, 8, 7, 2, 3, 4, 5]), "valley")
//Test.assertEquals(landscapeType([350, 100, 200, 400, 700]), "valley")
//Test.assertEquals(landscapeType([-1, -1, 0, -1, -1]), "mountain")
//Test.assertEquals(landscapeType([0, -1, -1, 0, -1, -1]), "neither", '2 peaks + boundary')
//Test.assertEquals(landscapeType([1, 2, 3, 2, 4, 1]), "neither", '2 peaks')
//Test.assertEquals(landscapeType([5, 4, 3, 2, 1]), "neither", 'boundary')
//Test.assertEquals(landscapeType([1, 2, 3, 4]), "neither", 'boundary')

