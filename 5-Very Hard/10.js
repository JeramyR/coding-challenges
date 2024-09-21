

//title: Squaring the Circle

//tags: algebra,geometry,math

//url: https://edabit.com/challenge/fAWgT5RbGBaXez2nq

//Description:
//This challenge is more about geometry and trig than code-writing, but some may find it interesting.
//A circle has a circumference of 100 meters. A regular polygon, let's say a square, inscribed inside this circle has a perimeter of about 90 meters. As you increase the number of sides of the regular polygon, it's perimeter will become arbitrarily close to 100 meters.
//Write a function whose argument is the number of sides of the inscribed regular polygon. The function returns the polygon's perimeter. Round your answer to 3 decimal places.
//Examples
//circle(3) ➞ 82.699
//
//circle(12) ➞ 98.862
//
//circle(100) ➞ 99.984
//
//circle(1000) ➞ 100.0
//// Perimeter is actually <100, rounding makes it 100.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(circle(3), 82.699)
//Test.assertEquals(circle(4), 90.032)
//Test.assertEquals(circle(8), 97.45)
//Test.assertEquals(circle(90), 99.98)
//Test.assertEquals(circle(600), 100.0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Happy Numbers

//tags: loops,validation

//url: https://edabit.com/challenge/EhGY9aaNHiCqqpnL9

//Description:
//Given any number, we can create a new number by adding the sums of squares of digits of that number. For example, given 203, our new number is 4 + 0 + 9 = 13. If we repeat this process, we get a sequence of numbers:
//203 -> 13 -> 10 -> 1 -> 1
//Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers like this are called happy.
//Not all numbers are happy. If we started with 11, the sequence would be:
//11 -> 2 -> 4 -> 16 -> ...
//This sequence will never reach 1, and so the number 11 is called unhappy.
//Given a positive whole number, you have to determine whether that number is happy or unhappy.
//Examples
//happy(203) ➞ true
//
//happy(11) ➞ false
//
//happy(107) ➞ false
//Notes
//You can assume (and it is actually true!) that all positive whole numbers are either happy or unhappy. Any happy number will have a 1 in its sequence, and every unhappy number will have a 4 in its sequence.
//The only numbers passed to your function will be positive whole numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Between 100 and 110 the happy numbers are 100, 103, 109
//Test.assertEquals(happy(100), true)
//Test.assertEquals(happy(101), false)
//Test.assertEquals(happy(102), false)
//Test.assertEquals(happy(103), true)
//Test.assertEquals(happy(104), false)
//Test.assertEquals(happy(105), false)
//Test.assertEquals(happy(106), false)
//Test.assertEquals(happy(107), false)
//Test.assertEquals(happy(108), false)
//Test.assertEquals(happy(109), true)
//Test.assertEquals(happy(110), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Highest Pair

//tags: arrays,conditions,games,loops

//url: https://edabit.com/challenge/Joj2RJJ4WyxRmkfxv

//Description:
//You will be given a collection of five cards (representing a player's hand in poker). If your hand contains at least one pair, return an array of two elements: true and the card number of the highest pair (trivial if there only exists a single pair). Else, return false.
//Examples
//highestPair(["A", "A", "Q", "Q", "6" ]) ➞ [true, "A"]
//
//highestPair(["J", "6", "3", "10", "8"]) ➞ false
//
//highestPair(["K", "7", "3", "9", "3"]) ➞ [true, "3"]
//
//highestPair(["K", "9", "10", "J", "Q"]) ➞ false
//
//highestPair(["3", "5", "5", "5", "5"]) ➞ [true, "5"]
//Notes
//Hands with three or more of the same card still count as containing a pair (see the last example).

//code area
///////////////////////////////////////////////////////////////////////////
const highestPair = arr => {
    let priority = {
        'A': 14,
        'K': 13,
        'Q': 12,
        'J': 11,
        '10': 10,
        '9': 9,
        '8': 8,
        '7': 7,
        '6': 6,
        '5': 5,
        '4': 4,
        '3': 3,
        '2': 2
    }

    let cards = arr.reduce((allCards, val) => {
        let currCount = allCards[val] ?? 0
        allCards[val] = currCount + 1
        return allCards
    }, Object.create(null))

    let paired = Object.entries(cards)
    let compare = []

    for (let i = 0; i < paired.length; i++) {
        if (paired[i][1] >= 2) {
            if (!Number.isNaN(+paired[i][0])) {
                compare.push(+paired[i][0])
            }
            else {
                compare.push(paired[i][0])
            }
        }
        else {
            compare.push(false)
        }
    }


    for (let j = 0; j < compare.length; j++) {
        switch (compare[j]) {
            case 'A':
                compare[j] = 14
                continue
            case 'K':
                compare[j] = 13
                continue
            case 'Q':
                compare[j] = 12
                continue
            case 'J':
                compare[j] = 11
                continue
        }
    }
    let max = Math.max(...compare)

    for (let key in priority) {
        if (max === priority[key]) {
            return [true, key]
        }
        else if (max === 0){
            return false
        }
    }
}


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertSimilar(highestPair(['A', 'A', 'K', 'K', '3']), [true, 'A']);
// Test.assertSimilar(highestPair(['A', 'K', 'Q', 'J', '10']), false);
// Test.assertSimilar(highestPair(['A', 'K', 'K', 'K', 'Q']), [true, 'K']);
// Test.assertSimilar(highestPair(['A', '3', '3', '4', '4']), [true, '4']);
// Test.assertSimilar(highestPair(['A', 'K', 'Q', 'Q', '5']), [true, 'Q']);

