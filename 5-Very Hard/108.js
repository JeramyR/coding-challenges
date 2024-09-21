

//title: [Color Conversion] RGB to HEX and HEX to RGB

//tags: math,numbers,objects,validation

//url: https://edabit.com/challenge/7RBuf27avn8QNigQA

//Description:
//Create a function, that can convert RGB to HEX if the passed value is an object, or HEX to RGB if the value is a string.
//colorConversion("string") will convert HEX to RGB.
//colorConversion({r: 235, g: 64, b: 52}) will convert RGB to HEX.
//Rules
//If "R", "G" or "B" value is not between 0 and 255, return "Not valid input".
//If the first character in the HEX string is a hash (#), then the string must not have more than 7 characters, else if it doesn't have the hash, it must not have more than 6 chraracters. If it isn't, return "Not valid input".
//The output HEX value, must have this syntax: "#HEXVAL".
//The output RGB value, must have this syntax (object): { r: NUM, g: NUM, b: NUM }
//Examples
//colorConversion("#ffffff") ➞ {r: 255, g: 255, b: 255}
//
//colorConversion("#ff0025") ➞ {r: 255, g: 0, b: 37}
//
//colorConversion({r: 40, g: 200, b: 125}) ➞ "#28c87d"
//Notes
//If the number in R, G or B is less than 10, the HEX code must have a "0" before it; R, G and B values have to be numbers, not strings.
//The HEX value (output) have to be lower case only (i.e. correct: #ffffff, wrong: #FFFFFF).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//function isEquivalent(a, b){
//    var aProps = Object.getOwnPropertyNames(a);
//    var bProps = Object.getOwnPropertyNames(b);
//​
//    if(aProps.length != bProps.length){
//        return false;
//    }
//​
//    for(var i = 0; i < aProps.length; i++){
//        var propName = aProps[i];
//        if(a[propName] !== b[propName]){
//            return false;
//        }
//    }
//    return true;
//}
//​
//isEquivalent(colorConversion('#4f69c9'), {r: 79, g: 105, b: 201});
//isEquivalent(colorConversion('ffffff'), {r: 255, g: 255, b: 255});
//isEquivalent(colorConversion('#000000'), {r: 0, g: 0, b: 0});
//isEquivalent(colorConversion('#050106'), {r: 5, g: 1, b: 6});
//​
//Test.assertEquals(colorConversion({r: 126, g: 214, b: 131}), '#7ed683')
//Test.assertEquals(colorConversion({r: 255, g: 255, b: 255}), '#ffffff')
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Cinemas in 2021

//tags: algorithms,arrays,interview,loops

//url: https://edabit.com/challenge/p7gLw52gxdKENTkcP

//Description:
//Given an array of seats, return the maximum number of new people which can be seated, as long as there is at least a gap of 2 seats between people.
//Empty seats are given as 0.
//Occupied seats are given as 1.
//Don't move any seats which are already occupied, even if they are less than 2 seats apart. Consider only the gaps between new seats and existing seats.
//Examples
//maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]) ➞ 2
//// [1, 0, 0, 1, 0, 0, 1, 0, 0, 1]
//
//maximumSeating([0, 0, 0, 0]) ➞ 2
//// [1, 0, 0, 1]
//
//maximumSeating([1, 0, 0, 0, 0, 1]) ➞ 0
//// There is no way to have a gap of at least 2 chairs when adding someone else.
//Notes
//Notice how there may be several possibilities for assigning seats to people, but these cases won't affect the results.
//All seats will be valid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]), 2)
//Test.assertSimilar(maximumSeating([0, 0, 0, 0]), 2)
//Test.assertSimilar(maximumSeating([1, 0, 0, 0, 0, 0, 1]), 1)
//Test.assertSimilar(maximumSeating([1, 0, 0, 0, 0, 0, 0, 1]), 1)
//Test.assertSimilar(maximumSeating([1, 0, 0, 0, 0, 1]), 0, "Remember to keep a 2 chair gap on both sides!")
//Test.assertSimilar(maximumSeating([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 4)
//Test.assertSimilar(maximumSeating([0]), 1)
//Test.assertSimilar(maximumSeating([0, 0]), 1)
//Test.assertSimilar(maximumSeating([1]), 0)
//Test.assertSimilar(maximumSeating([0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0]), 1)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Calculating Mathematical Expression

//tags: language_fundamentals,math,strings

//url: https://edabit.com/challenge/9L9twcL5Fr7yTuQ2C

//Description:
//Create a function that takes a mathematical expression as a string, array of numbers on which the mathematical expression is to be calculated and return the result as an array of string.
//Explanation
//mathematicalExp("f(x)=x+1",[1,2]) ➞ ["f(1)=2","f(2)=3"]
//
//// Math expression: "f(x)=x+1"
//// Numbers to calculate expression = [1,2]
//// f(1)=1+1=2
//// f(2)=2+1=2
//// Solution = ["f(1)=2","f(2)=3"]
//Examples
//mathematicalExp("f(x)=x+1",[1,2]) ➞ ["f(1)=2","f(2)=3"]
//
//mathematicalExp("f(x)=x^2",[1,2,3]) ➞ ["f(1)=1","f(2)=4","f(3)=9"]
//
//mathematicalExp("f(x)=x*3",[1,2,3]) ➞ ["f(1)=3","f(2)=6","f(3)=9"]
//Notes
//Array of numbers are positive integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(mathematicalExp("f(x)=x+1", [1, 2]), ["f(1)=2", "f(2)=3"]);
//Test.assertSimilar(mathematicalExp("f(x)=x^2", [1, 2, 3]), ["f(1)=1","f(2)=4","f(3)=9"]);
//Test.assertSimilar(mathematicalExp("f(x)=x*3", [1, 2, 3]), ["f(1)=3","f(2)=6","f(3)=9"]);
//Test.assertSimilar(mathematicalExp("f(x)=x-2", [1, 2, 3]), ["f(1)=-1","f(2)=0","f(3)=1"]);
//Test.assertSimilar(mathematicalExp("f(x)=x/3", [3, 6, 9]), ["f(3)=1","f(6)=2","f(9)=3"]);

