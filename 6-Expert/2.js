

//title: Roman Numeral Converter

//tags: arrays,data_structures,numbers

//url: https://edabit.com/challenge/hGSzM3rEkmqw8uvrP

//Description:
//Create a function that takes an Arabic number and converts it into a Roman number.
//Examples
//convertToRoman(2) ➞ "II"
//
//convertToRoman(12) ➞ "XII"
//
//convertToRoman(16) ➞ "XVI"
//Notes
//All roman numerals should be returned as uppercase.
//The largest number that can be represented in this notation is 3,999.

//code area
///////////////////////////////////////////////////////////////////////////
const convertToRoman = num => {
    let numeral = ''
    while (num >= 1000) {
        numeral += 'M'
        num -= 1000
    }
    if (num >= 900) {
        numeral += 'CM'
        num -= 900
    }
    while (num >= 500) {
        numeral += 'D'
        num -= 500
    }
    if (num >= 400) {
        numeral += 'CD'
        num -= 400
    }
    while (num >= 100) {
        numeral += 'C'
        num -= 100
    }
    if (num >= 90) {
        numeral += "XC"
        num -= 90
    }
    while (num >= 50) {
        numeral += 'L'
        num -= 50
    }
    if (num >= 40) {
        numeral += 'XL'
        num -= 40
    }
    while (num >= 10) {
        numeral += 'X'
        num -= 10
    }
    if (num >= 9) {
        numeral += "IX"
        num -= 9
    }
    while (num >= 5) {
        numeral += 'V'
        num -= 5
    }
    if (num >= 4) {
        numeral += "IV"
        num -= 4
    }
    while (num > 0) {
        numeral += 'I'
        num--
    }
    return numeral
}
//////////////////////////////////////////////////////////////////////////
//tests:
// Test.assertEquals(convertToRoman(3999),"MMMCMXCIX")
// Test.assertEquals(convertToRoman(1000), "M")
// Test.assertEquals(convertToRoman(798), "DCCXCVIII")
// Test.assertEquals(convertToRoman(649), "DCXLIX")
// Test.assertEquals(convertToRoman(400), "CD")
// Test.assertEquals(convertToRoman(68), "LXVIII")
// Test.assertEquals(convertToRoman(44), "XLIV")
// Test.assertEquals(convertToRoman(16), "XVI")
// Test.assertEquals(convertToRoman(12),"XII")
// Test.assertEquals(convertToRoman(2), "II")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Josephus Problem
//tags: algorithms,loops,recursion
//Description:
//This classic problem dates back to Roman times. There are 41 soldiers arranged in a circle. Every third soldier is to be killed by their captors, continuing around the circle until only one soldier remains. He is to be freed. Assuming you would like to stay alive, at what position in the circle would you stand?
//Generalize this problem by creating a function that accepts the number of soldiers n and the interval at which they are killed i, and returns the position of the fortunate survivor.
//Examples
//josephus(41, 3) ➞ 31
//josephus(35, 11) ➞ 18
//josephus(11, 1) ➞ 11
//josephus(2, 2) ➞ 1
//Assume the positions are numbered 1 to n going clockwise around the circle.
//If the interval is 3, the first soldiers to die are at positions 3, 6, and 9.
//code area
///////////////////////////////////////////////////////////////////////////
class Queue {
    constructor() {
        let items = []
        this.enqueue = function (element) {
            items.push(element)
        }
        this.dequeue = function () {
            return items.shift()
        }
        this.size = function () {
            return items.length
        }
    }
}

const josephus = (count, kill) => {
    let soldierArray = []
    for (let i = 1; i <= count; i++) {
        soldierArray.push(i)
    }

    const killBill = (soldierArray, kill) => {
        let queue = new Queue()

        for (let position = 0; position < soldierArray.length; position++) {
            queue.enqueue(soldierArray[position])
        }

        let eliminated = ''
        while (queue.size() > 1) {
            for (let i = 0; i < kill - 1; i++) {
                queue.enqueue(queue.dequeue())
            }
            eliminated = queue.dequeue()
        }
        return queue.dequeue()
    }
    let winner = killBill(soldierArray, kill)

    return winner
}
//////////////////////////////////////////////////////////////////////////
// tests:
// Test.assertEquals(josephus(41, 3), 31)
// Test.assertEquals(josephus(14, 2), 13)
// Test.assertEquals(josephus(35, 11), 18)
// Test.assertEquals(josephus(20, 1), 20)
// Test.assertEquals(josephus(15, 15), 4)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Jake`s Meal Time

//tags: arrays,dates,strings

//url: https://edabit.com/challenge/HXAWjd2Nkj8eAJ2xY

//Description:
//Jake is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at 12:00 p.m. and dinner at 7:00 p.m. in the evening.
//Create a function that takes in the current time as a string and determines the duration of time before Jake's next meal. Represent this as an array with the first and second elements representing hours and minutes, respectively.
//Examples
//timeToEat("2:00 p.m.") ➞ [5, 0]
//// 5 hours until the next meal, dinner
//
//timeToEat("5:50 a.m.") ➞ [1, 10]
//// 1 hour and 10 minutes until the next meal, breakfast
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////
const timeToEat = par => {
    let ampm = par.slice(-4, -3)
    let min = +par.slice(-7, -5)
    let hour = +par.slice(0, -8)
    let minLeft = 0
    let time = 0

    ampm === 'p' ? hour += 12 : null
    ampm === 'a' && hour === 12 ? hour = 0 : null

    if (min > 0) {
        minLeft = 60 - min
        hour += 1
    }

    hour < 7 ?
        time = 7 - hour
        :
        hour >= 7 && hour <= 19 ?
            time = 19 - hour
            :
            hour > 19 ?
                time = 31 - hour
                :
                null
    return [time, minLeft]
}


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertSimilar(timeToEat("5:50 a.m."), [1, 10]);
// Test.assertSimilar(timeToEat("12:00 a.m."), [7, 0]);

// Test.assertSimilar(timeToEat("6:37 p.m."), [0, 23]);
// Test.assertSimilar(timeToEat("2:00 p.m."), [5, 0]);
// Test.assertSimilar(timeToEat("3:33 p.m."), [3, 27]);

// Test.assertSimilar(timeToEat("11:58 p.m."), [7, 2]);

