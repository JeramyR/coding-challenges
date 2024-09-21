

//title: Stack Calculator

//tags: algorithms,classes,data_structures,math,numbers

//url: https://edabit.com/challenge/WyuiphFcBXZSoKpEt

//Description:
//A stack machine processes instructions by pushing and popping values to an internal stack. A simple example of this is a calculator.
//The argument passed to run(instructions) will always be a string containing a series of instructions.

//PSH: Performed whenever a number appears as an instruction. Push the number to the stack.
//Any other instruction (for example, a letter) should result in the value "Invalid instruction: [instruction]"
//Examples
//StackCalc("") ➞ 0
//
//StackCalc("5 6 +") ➞ 11
//
//StackCalc("3 DUP +") ➞ 6
//
//StackCalc("6 5 5 7 * - /") ➞ 5
//
//StackCalc("x y +") ➞ Invalid instruction: x
//Notes
//If there are no instructions, the value should remain 0.
//The return value of get value() should be the topmost value on the stack.

//The instruction set of the calculator will be this:
//+: Pop the last 2 values from the stack, add them, and push the result onto the stack.
//-: Pop the last 2 values from the stack, subtract the lower one from the topmost one, and push the result.
//*: Pop the last 2 values, multiply, and push the result.
///: Pop the last 2 values, divide the topmost one by the lower one, and push the result.
//DUP: Duplicate (not double) the top value on the stack.
//POP: Pop the last value from the stack and discard it.
// ///////////////////////////////////////////////////////////////////////////
class Stack {
    constructor() {
        let items = []
        this.push = function (element) {
            items.push(element)
        }
        this.pop = function () {
            return items.pop()
        }
        this.peek = function () {
            return console.log(items.toString())
        }
    }
}
const StackCalc = arg => {
    let stack = new Stack()

    arg = arg.split(' ')
    for (let i = 0; i < arg.length; i++) {
        if (/\d/.exec(arg[i])) stack.push(arg[i])
        if (/POP/.exec(arg[i])) stack.pop()
        if (!/((PO|DU)P|\d|\W)/.test(arg[i])) return `Invalid instruction: ${arg[i]}`
        else if (/\+|-|\*|\//.exec(arg[i])) {
            let arr = []
            arr.push(stack.pop(), stack.pop())
            if (/\+|\*/.exec(arg[i])) {
                (/\+/.test(arg[i])) ?
                    num = arr.reduce((ac, cu) => +ac + +cu) : num = arr.reduce((ac, cu) => +ac * +cu)
                stack.push(num)
            }
            else {
                let sorts = arr.sort((a, b) => b - a)
                let reg = /-/
                reg.test(arg[i]) ?
                    num = sorts.reduce((ac, cu) => +ac - +cu) : num = sorts.reduce((ac, cu) => +ac / +cu)
                stack.push(num)
            }
        }
        else if (/DUP/.exec(arg[i])) {
            let x = stack.pop()
            stack.push(x)
            stack.push(x)
        }
    }
    return stack.pop()
}
//////////////////////////////////////////////////////////////////////////

//tests:

// const tests = [
//     { arg: '12', ans: 12 },
//     { arg: '5 6 +', ans: 11 },
//     { arg: '3 6 -', ans: 3 },
//     { arg: '3 6 /', ans: 2 },
//     { arg: '3 DUP +', ans: 6 },
//     { arg: '2 5 - 5 + DUP +', ans: 16 },
//     { arg: '9 14 DUP + - 3 POP', ans: 19 },
//     { arg: '1 2 3 4 5 POP POP POP', ans: 2 },
//     { arg: '13 DUP 4 POP 5 DUP + DUP + -', ans: 7 },
//     { arg: '6 5 5 7 * - /', ans: 5 },
//     { arg: '4 2 4 * 3 + 5 + / 5 -', ans: 1 },
//     { arg: '5 8 + 4 5 1 + POP 13 +', ans: 17 },
//     { arg: 'x', ans: 'Invalid instruction: x' }
// ]
// for (let i in tests) Test.assertEquals(StackCalc(tests[i].arg), tests[i].ans)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: First Letter Shift

//tags: loops,strings

//url: https://edabit.com/challenge/LNJQxXMmpWM9fzm3X

//Description:
//Given a sentence, create a function which shifts the first letter of each word to the next word in the sentence (shifting right).
//Examples
//shiftSentence("create a function") ➞ "freate c aunction"
//
//shiftSentence("it should shift the sentence") ➞ "st ihould shift she tentence"
//
//shiftSentence("the output is not very legible") ➞ "lhe tutput os iot nery vegible"
//
//shiftSentence("edabit") ➞ "edabit"
//Notes
//The last word shifts its first letter to the first word in the sentence.
//All sentences will be given in lowercase.
//Note how single words remain untouched (example #4).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(shiftSentence("create a function"), "freate c aunction")
//Test.assertEquals(shiftSentence("it should shift the sentence"), "st ihould shift she tentence")
//Test.assertEquals(shiftSentence("the output is not very legible"), "lhe tutput os iot nery vegible")
//Test.assertEquals(shiftSentence("where is the butter"), "bhere ws ihe tutter")
//Test.assertEquals(shiftSentence("she sells sea shells"), "she sells sea shells")
//Test.assertEquals(shiftSentence("one plus one equals two"), "tne olus pne oquals ewo")
//Test.assertEquals(shiftSentence("tey ghis uot hnscrambled"), "hey this got unscrambled")
//Test.assertEquals(shiftSentence("i love to eat scrambled eggs and ham"), "h iove lo tat ecrambled sggs end aam")
//Test.assertEquals(shiftSentence("mitochondria is the powerhouse of the cell"), "citochondria ms ihe towerhouse pf ohe tell")
//Test.assertEquals(shiftSentence("sarah the key is under the door mat"), "marah she tey ks inder uhe toor dat")
//Test.assertEquals(shiftSentence("elephants dance about bravely in thailand"), "tlephants eance dbout aravely bn ihailand")
//Test.assertEquals(shiftSentence("untouched"), "untouched")
//Test.assertEquals(shiftSentence("edabit"), "edabit")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Message from Space

//tags: loops,recursion,regex,strings

//url: https://edabit.com/challenge/BDstkdEneYHrMjakQ

//Description:
//You have received an encrypted message from space. Your task is to decrypt the message with the following simple rules:
//Message string will consist of capital letters, numbers, and brackets only.
//When there's a block of code inside the brackets, such as [10AB], it means you need to repeat the letters AB for 10 times.
//Message can be embedded in multiple layers of blocks.
//Final decrypted message will only consist of capital letters.
//Create a function that takes encrypted message str and returns the decrypted message.
//Examples
//spaceMessage("ABCD") ➞ "ABCD"
//
//spaceMessage("AB[3CD]") ➞ "ABCDCDCD"
//// "AB" = "AB"
//// "[3CD]" = "CDCDCD"
//
//spaceMessage("IF[2E]LG[5O]D") ➞ "IFEELGOOOOOD"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(spaceMessage("ABCD"), "ABCD")
//Test.assertEquals(spaceMessage("AB[3CD]"), "ABCDCDCD")
//Test.assertEquals(spaceMessage("AB[2[3CD]]"), "ABCDCDCDCDCDCD")
//Test.assertEquals(spaceMessage("IF[2E]LG[5O]D"), "IFEELGOOOOOD")
//Test.assertEquals(spaceMessage("AB[2C[2EF]G]"), "ABCEFEFGCEFEFG")
//Test.assertEquals(spaceMessage("MU[2B][2A][2S][2H][2I]RISN[4O]TAMA[4Z]ING"), "MUBBAASSHHIIRISNOOOOTAMAZZZZING")
//// Mubashir

