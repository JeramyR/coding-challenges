

//title: Content Analyzer

//tags: conditions,objects,regex,strings

//url: https://edabit.com/challenge/283cCDwXgNQvkdanj

//Description:
//Create a function that takes a string and returns an object. The returned object will have a common property for all detected type content named contentType the possible values for this property are "HTML", "CSS", "TEXT".
//Your function should be able to detect HTML and CSS else it's just TEXT.
//If you detect HTML the returned object will have a special property named "tags". "tags" is an object with all content tags name and how many times these tags were called in content (see example #3).
//If you detect CSS, your returned object will have a special property named cssTargets. cssTargets is an object with all content targets name and how many times these tags were called in content (see example #2).
//If you don't detect HTML or CSS, the content is detected as TEXT and object will have a special property named lineNumber (see example #1).
//Examples
//analyzeContent("this is a test\nSeems to work")
//➞ { contentType: "TEXT", lineNumber: 2 }
//
//analyzeContent("body{blabla} a{color:#fff} a{ padding:0}")
//➞ { contentType: "CSS", cssTargets: { body: 1, a: 2 } }
//
//analyzeContent("<html><div></div><div></div></html>")
//➞ { contentType: "HTML", tags: { html: 1, div: 2 } }
//Notes
//If HTML content has been detected the returned object couldn't have cssTargets property and lineNumber property and that's same for type of detection. Only the common proprety contentType stay inside the returned object.
//<!DOCTYPE html> and comments shoudn't be detected.
//The content can be minified or not as needed.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

// var c1 = `<!DOCTYPE html>
// <html lang="en">
// <head>
// ​
// <meta charset="UTF-8">
// <meta http-equiv="X-UA-Compatible" content="IE=Edge">
// <meta name="description" content="">
// <meta name="keywords" content="">
// <meta name="author" content="">
// <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
// ​
// <title>Magnet - Minimal Portfolio Template</title>
// ​
// <link rel="stylesheet" href="css/bootstrap.min.css">
// <link rel="stylesheet" href="css/font-awesome.min.css">
// ​
// <!-- Main css -->
// <link rel="stylesheet" href="css/style.css">
// <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,700" rel="stylesheet">
// ​
// </head>
// <body>
// ​
// <!-- PRE LOADER -->
// ​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Working 9 to 5

//tags: algebra,arrays,math,numbers

//url: https://edabit.com/challenge/kYwxQo9tqLpFYTMY6

//Description:
//Write a function that calculates overtime and pay associated with overtime.
//Working 9 to 5: regular hours
//After 5pm is overtime
//Your function gets an array with 4 values:
//Start of working day, in decimal format, (24-hour day notation)
//End of working day. (Same format)
//Hourly rate
//Overtime multiplier
//Your function should spit out:
//$ + earned that day (rounded to the nearest hundreth)
//Examples
//overTime([9, 17, 30, 1.5]) ➞ "$240.00"
//
//overTime([16, 18, 30, 1.8]) ➞ "$84.00"
//
//overTime([13.25, 15, 30, 1.5]) ➞ "$52.50"
//2nd example explained:
//From 16 to 17 is regular, so 1 * 30 = 30
//From 17 to 18 is overtime, so 1 * 30 * 1.8 = 54
//30 + 54 = $84.00

//code area
///////////////////////////////////////////////////////////////////////////
// class Pay {
//     constructor() {
//         let obj = {},
//             total = 0,
//             otHours = 0
//         this.insert = function (input) {
//             let type = ['start', 'end', 'rate', 'OT']
//             let sub = []
//             for (let i = 0; i < input.length; i++) {
//                 sub.push([type[i], input[i]])
//             }
//             obj = Object.fromEntries(sub)
//             return obj
//         }
//         this.otCalc = function () {
//             if (obj.end > 17) {
//                 otHours = obj.end - 15
//             }
//         }
//         this.view = function () {
//             return console.log('\nobj:', obj, '\ntotal:', total, '\notHours:', otHours)
//         }
//     }
// }
// const overTime = array => {
//     let pay = new Pay()
//     pay.insert(array)
//     pay.otCalc()


//     pay.view()
// }
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(overTime([9, 17, 30, 1.5]), "$240.00")
// Test.assertEquals(overTime([9, 18, 40, 2]), "$400.00")
// Test.assertEquals(overTime([13, 20, 32.5, 2]), "$325.00")
//Test.assertEquals(overTime([9, 13, 25, 1.5]), "$100.00")
//Test.assertEquals(overTime([11.5, 19, 40, 1.8]), "$364.00")
//Test.assertEquals(overTime([10, 17, 30, 1.5]), "$210.00")
//Test.assertEquals(overTime([10.5, 17, 32.25, 1.5]), "$209.63")
//Test.assertEquals(overTime([16, 18, 30, 1.8]), "$84.00")
//Test.assertEquals(overTime([18, 20, 32.5, 2]), "$130.00")
//Test.assertEquals(overTime([13.25, 15, 30, 1.5]), "$52.50")
//Test.assertEquals(overTime([13, 21, 38.6, 1.8]), "$432.32")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: 24-Hour Time

//tags: dates,numbers,strings

//url: https://edabit.com/challenge/myFTyWErMrazWgh8r

//Description:
//Write a function that receives the time in 12-hour AM/PM format and returns a string representation of the time in military (24-hour) format.
//Examples
//convertTime(“07:05:45PM”) ➞ “19:05:45”
//
//convertTime(“12:40:22AM”) ➞ “00:40:22”
//
//convertTime(“12:45:54PM”) ➞ “12:45:54”
//Notes
//Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
//Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

//code area
///////////////////////////////////////////////////////////////////////////
class Time {
    constructor() {
        let string, hour
        this.view = function () {
            return string
        }
        this.hourStructure = input => {
            let matched = input.split(":")
            let reg = /\d{2}:\d{2}:\d{2}(?=\w+)/g
            let exp = /:\d{2}:\d{2}(?=\w+)/g
            if (matched[2].match(/AM/)) {
                if (+matched[0] === 12) {
                    hour = +matched[0] - 12
                    string = `0${hour.toString()}${input.match(exp)[0]}`
                    return
                }
                else {
                    string = input.match(reg)
                    return
                }
            }
            else {
                if (+matched[0] === 12) {
                    string = input.match(reg)
                    return
                }
                else {
                    hour = +matched[0] + 12
                    string = `${hour.toString()}${input.match(exp)[0]}`
                    return
                }
            }
        }
    }
}
const convertTime = string => {
    let time = new Time()
    time.hourStructure(string)
    return time.view()
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(convertTime("12:40:22AM"), "00:40:22")
// Test.assertEquals(convertTime("06:00:19AM"), "06:00:19")
// Test.assertEquals(convertTime("12:45:54PM"), "12:45:54")
// Test.assertEquals(convertTime("07:05:45PM"), "19:05:45")
// Test.assertEquals(convertTime("05:32:33PM"), "17:32:33")
// Test.assertEquals(convertTime("11:59:59PM"), "23:59:59")
// Test.assertEquals(convertTime("11:59:59AM"), "11:59:59")

