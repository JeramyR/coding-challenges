

//title: Find the Lowest Neighbor of a 2D Array Element

//tags: algorithms,arrays,loops,math

//url: https://edabit.com/challenge/pgqyeEyTtzJL9L8Nq

//Description:
//Create a function that returns the lowest neighbor of a given (x, y) coordinate element in a 2D array. The function will be passed three parameters.
// arr,  x,  y
//arr will be a 2D array holding integer values and will always be symmetrical in size (e.g. 2x2, 3x3, 4x4).
//x will hold the row coordinate, while y will hold the column coordinate.
//You will have to check the horizontal, vertical and diagonal neighbor elements. If there isn't any lower neighbors, return the value of the given (x, y) coordinate.
//Examples
//lowestElement([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//], 1, 1) ➞ 1
//
//
//[
//  [1, 2, 3]
//  [4, 5, 6]  // (1, 1) holds the integer 5. Check the surrounding neighbors.
//  [7, 8, 9]
//]
//lowestElement([
//  [9, 8, 7],
//  [0, -1, -3],
//  [-5, -9, 54]
//], 0, 0) ➞ -1
//
//
//[
//  [9, 8, 7]   // (0, 0) holds the integer 9. Check the surrounding neighbors.
//  [0, -1, -3]
//  [-5, -9, 54]
//]
//code area
// ///////////////////////////////////////////////////////////////////
class Low {
    constructor() {
        let initial = [], array = [], iaxis, jaxis

        this.insert = function (input) {
            initial.push(input)
            iaxis = initial[0][1]
            jaxis = initial[0][2]
            return jaxis, iaxis
        }
        this.findRanges = function () {
            findI(iaxis)
            findJ(jaxis)
            let temp = array
            array = []

            for (let i = 0; i < 1; i++) {
                let sub = []
                // for (let j = 0; j < temp[i].length; j++) {
                //     sub.push(i, j)
                //     array.push(sub)
                //     continue
                // }
            }
            // console.log(array)

        }
        this.view = function () {
            return console.log('\niaxis:', iaxis, '\njaxis:', jaxis, '\ninput:', ...initial[0][0], '\narray:', array)
        }
        this.result = function () {
            return array
        }
        let findI = iaxis => {
            let iMerger = []
            if (iaxis > 0) {
                if (iaxis === initial[0][0][0].length - 1) {
                    for (let i = iaxis - 1; i <= iaxis; i++) {
                        iMerger.push(i)
                    }
                }
                else {
                    for (let i = iaxis - 1; i <= iaxis + 1; i++) {
                        iMerger.push(i)
                    }
                }
            }
            else {
                for (let i = 0; i <= iaxis + 1; i++) {
                    iMerger.push(i)
                }
            }
            return array.push(iMerger)
        }
        let findJ = jaxis => {
            let jMerger = []
            if (jaxis > 0) {
                if (jaxis === initial[0][0][0].length - 1) {
                    for (let j = jaxis - 1; j <= jaxis; j++) {
                        jMerger.push(j)
                    }
                }
                else {
                    for (let j = jaxis - 1; j <= jaxis + 1; j++) {
                        jMerger.push(j)
                    }
                }
            }
            else {
                for (let j = 0; i <= jaxis + 1; j++) {
                    jMerger.push(j)
                }
            }
            return array.push(jMerger)
        }
    }
}
const lowestElement = (...input) => {
    let low = new Low
    low.insert(input)
    low.findRanges()
    low.view()
}

///////////////////////////////////////////////////////////////////////
//tests:
// Test.assertEquals(lowestElement([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ], 1, 1), 1)
// Test.assertEquals(lowestElement([
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8]
// ], 2, 2), 4)
// Test.assertEquals(lowestElement([
//     [50, 30, 10],
//     [42, 69, 420],
//     [9000, 3, 16]
// ], 0, 0), 30)

// Test.assertEquals(lowestElement([
//     [50, 60, 10],
//     [52, 69, 420],
//     [9000, 3, 16]
// ], 0, 0), 50)

// Test.assertEquals(lowestElement([
//     [1, 2],
//     [5, 7]
// ], 0, 1), 1)

// Test.assertEquals(lowestElement([
//     [-2, -5, -500, 49501],
//     [1004, 10502, -5061, 19303],
//     [40012, 487190, 39430, 13899],
//     [3, 1, 4, 1]
// ], 2, 3), -5061)

// Test.assertEquals(lowestElement([
//     [19831, 28749, 24518, 17394, 27108, 5225, 6364, 15589, 26819, 31116, 28619, 11994, 29522],
//     [8085, 3830, 30895, 14278, 25618, 24468, 4699, 11170, 14285, 7192, 2047, 103, 3869],
//     [25597, 31040, 5731, 30661, 21884, 31530, 10397, 7185, 10131, 9652, 23531, 15687, 7552],
//     [22904, 23005, 27418, 3460, 23282, 24394, 9181, 13518, 30687, 27163, 12421, 30071, 28679],
//     [26532, 16610, 17834, 15336, 5328, 1715, 27350, 2233, 22427, 11371, 21222, 4427, 1176],
//     [15341, 20427, 18294, 17264, 7162, 31376, 4957, 18252, 26738, 14736, 13519, 16289, 401],
//     [4715, 15902, 17209, 2463, 11790, 9922, 4878, 4896, 22598, 4876, 31027, 3908, 28095],
//     [19733, 7754, 15226, 29971, 19651, 16257, 24347, 6701, 1772, 30533, 32515, 11569, 10449],
//     [28263, 15747, 6673, 4970, 8378, 14935, 11686, 3462, 27395, 19280, 4862, 8650, 25926],
//     [210, 211, 16031, 17341, 26186, 2987, 12156, 2862, 2672, 17382, 19941, 2442, 25680],
//     [16450, 14102, 1493, 28835, 31657, 15958, 11709, 24089, 31635, 172, 8742, 28835, 25742],
//     [14299, 18513, 16751, 5122, 16143, 4445, 6108, 4413, 26544, 23135, 21403, 3593, 1715],
//     [32427, 3989, 13205, 7985, 27546, 28512, 12391, 31227, 21441, 22071, 23511, 3424, 18955]
// ], 10, 2), 211)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Diagonal Matrices

//tags: arrays,functional_programming

//url: https://edabit.com/challenge/Lcgmf6CvjXnzFTScc

//Description:
//Write a function that diagonally orders numbers in a n x n matrix, depending on which of the four corners you originate from: upper-left (ul), upper-right (ur), lower-left (ll), lower-right (lr).
//Examples
//diagonalize(3, "ul") ➞ [
//  [0, 1, 2],
//  [1, 2, 3],
//  [2, 3, 4]
//]
//
//diagonalize(4, "ur") ➞ [
//  [3, 2, 1, 0],
//  [4, 3, 2, 1],
//  [5, 4, 3, 2],
//  [6, 5, 4, 3]
//]
//
//diagonalize(3, "ll") ➞ [
//  [2, 3, 4],
//  [1, 2, 3],
//  [0, 1, 2]
//]
//
//diagonalize(5, "lr") ➞ [
//  [8, 7, 6, 5, 4],
//  [7, 6, 5, 4, 3],
//  [6, 5, 4, 3, 2],
//  [5, 4, 3, 2, 1],
//  [4, 3, 2, 1, 0]
//]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////
const diagonalize = (num, text) => {
    let array = [],
        sub = [],
        i,
        j
    switch (text) {
        case 'ul':
            for (i = 0; i < num; i++) {
                sub = []
                for (j = i; j < num + i; j++) {
                    sub.push(j)
                }
                array.push(sub)
            }
            break
        case 'ur':
            for (i = 0; i < num; i++) {
                sub = []
                for (j = num + i - 1; j >= i; j--) {
                    sub.push(j)
                }
                array.push(sub)
            }
            break
        case 'll':
            for (i = 0; i < num; i++) {
                sub = []
                for (j = num + i - 1; j >= i; j--) {
                    sub.unshift(j)
                }
                array.unshift(sub)
            }
            break
        case 'lr':
            for (i = 0; i < num; i++) {
                sub = []
                for (j = i; j < num + i; j++) {
                    sub.unshift(j)
                }
                array.unshift(sub)
            }
            break
    }
    return array
}

//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertSimilar(diagonalize(3, 'ul'), [
//     [0, 1, 2],
//     [1, 2, 3],
//     [2, 3, 4]
// ], "It should work for the upper left corner.")
// Test.assertSimilar(diagonalize(5, 'lr'), [
//     [8, 7, 6, 5, 4],
//     [7, 6, 5, 4, 3],
//     [6, 5, 4, 3, 2],
//     [5, 4, 3, 2, 1],
//     [4, 3, 2, 1, 0]])

// Test.assertSimilar(diagonalize(4, 'ur'), [
//     [3, 2, 1, 0],
//     [4, 3, 2, 1],
//     [5, 4, 3, 2],
//     [6, 5, 4, 3]
// ], "It should work for the upper right corner.")

// Test.assertSimilar(diagonalize(3, 'll'), [
//     [2, 3, 4],
//     [1, 2, 3],
//     [0, 1, 2]
// ], "It should work for the lower left corner.")
//​
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Headline Hash Tags

//tags: regex,sorting,strings

//url: https://edabit.com/challenge/ABiF6EsqRYMvogcgp

//Description:
//Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.
//Examples
//getHashTags("How the Avocado Became the Fruit of the Global Trade")
//➞ ["#avocado", "#became", "#global"]
//
//getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
//➞ ["#christmas", "#probably", "#will"]
//
//getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
//➞ ["#surprise", "#parents", "#fruit"]
//
//getHashTags("Visualizing Science")
//➞ ["#visualizing", "#science"]
//Notes
//If the title is less than 3 words, just order the words in the title by length in descending order (see example #4).
//Punctuation does not count towards a word's length.

//code area
///////////////////////////////////////////////////////////////////////////
const getHashTags = str => {
    let newStr = str
        .toLowerCase()
        .match(/[a-z]+/g)
        .sort((a, b) => b.length - a.length)
        .splice(0, 3)
        .map((e, i, r) => r[i]
            .replace(e, `#${e}`)
        )
    return newStr
}
//////////////////////////////////////////////////////////////////////////
//tests:
// Test.assertSimilar(getHashTags("How the Avocado Became the Fruit of the Global Trade"), ["#avocado", "#became", "#global"])
// Test.assertSimilar(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"), ["#christmas", "#probably", "#will"])
// Test.assertSimilar(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"), ["#surprise", "#parents", "#fruit"])
// Test.assertSimilar(getHashTags("Visualizing Science"), ["#visualizing", "#science"])
// Test.assertSimilar(getHashTags("Minecraft Stars on Youtube Share Secrets to Their Fame"), ["#minecraft", "#youtube", "#secrets"])
// Test.assertSimilar(getHashTags("Are You an Elite Entrepreneur?"), ["#entrepreneur", "#elite", "#are"])

const getDiag = arr => {
    let r1 = [], r2 = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                r1.push(arr[i][j])
            }
        }
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
    console.log(r1, r2)
}
// Test.assertEquals(getDiag([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]), [[1, 5, 9], [3, 5, 7]])