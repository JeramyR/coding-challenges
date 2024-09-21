

//title: First Recurrence Index

//tags: arrays,logic,objects,validation

//url: https://edabit.com/challenge/y8fTF8GBMAXTdkrkH

//Description:
//Create a function that identifies the very first item that has recurred in the string argument passed. It returns the identified item with the index where it first appeared and the very next index where it resurfaced -- entirely as an object; or as an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.
//Examples
//recurIndex("DXTDXTXDTXD") ➞ {"D": [0, 3]}
//// D first appeared at index 0, resurfaced at index 3
//// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first
//
//recurIndex("YXZXYTUVXWV") ➞ {"X": [1, 3]}
//
//recurIndex("YZTTZMNERXE") ➞ {"T": [2, 3]}
//
//recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}
//
//recurIndex("") ➞ {}
//
//recurIndex(null) ➞ {}
//Notes
//You can solve this challenge via a recursive approach, alternatively.
//A recursive version of this challenge can be found here.

//code area
///////////////////////////////////////////////////////////////////////////

//unfinished
// const recurIndex = par => {
//     let letter = ''
//     let array = []

//     if (par === null || par === undefined || par === '') {
//         return {}
//     }
//     else {
//         let obj = par.split('').reduce((a, c) => {
//             const count = a[c] ?? 0
//             a[c] = count + 1
//             return a
//         }, {})

//         for (let counter in obj) {
//             console.log(obj, counter, obj[counter])

            // if (Math.max(obj[counter])) {
                
            //     letter = counter
            //     break
            // }
            // else {
            //     return {}
            // }
        // }
        // let arr = par.split('').map((e, i) => {
        //     if (e === letter) {
        //         // console.log(e, letter)
        //         // let num = i
        //         // console.log(num)
        //         // array.push(num)
        //     // }
        // })


        // console.log('fie', letter)
//     }
// }
//////////////////////////////////////////////////////////////////////////
//tests:
// let [strVectors, objRes] = [
//     [
//         'DXTDXTXDTXD',
//         'YXZXYTUVXWV',
//         'YZTTZMNERXE',
//         'AREDCBSDERD',
//         'KDXTDATTDDX',
//         'AKEDCBERSDA',
//         'DXKETRETXDK',
//         'ABCKPEPGBCG',
//         'KLMNONMLKOP',
//         'ABCDEFGABCD',
//         'ABCDEFGHIJK',
//         '',
//         null,
//         undefined,
//     ],
//     [
//         { "D": [0, 3] },
//         { "X": [1, 3] },
//         { "T": [2, 3] },
//         { "D": [3, 7] },
//         { "D": [1, 4] },
//         { "E": [2, 6] },
//         { "E": [3, 6] },
//         { "P": [4, 6] },
//         { "N": [3, 5] },
//         { "A": [0, 7] },
//         {},
//         {},
//         {},
//         {},
//     ]
// ]
// for (let i in strVectors) {
//     Test.assertSimilar(recurIndex(strVectors[i]), objRes[i])
// }

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Lorentz-Transform the Electric and Magnetic Fields

//tags: algebra,arrays,geometry,math,physics

//url: https://edabit.com/challenge/psC2b2mH8WCB8taQT

//Description:
//In this challenge, you'll create a function that takes the following three arguments:
//The electric-field vector E at some event in spacetime as measured in some inertial frame.
//The magnetic-field vector B at the same event as measured in the same frame.
//A velocity vector u.
//Each of these vectors will be given as an array of its Cartesian components (e.g., the electric field will be given as [E_x, E_y, E_z]). Each component will be given as a number.
//(There's no need to worry about units while solving; assume that E and B share a unit, and also that we've set the speed of light to 1, which renders velocities unitless.)
//Given valid parameters, your function will return the electric and magnetic fields as measured in a second inertial frame, whose velocity as measured in the first frame is u (the third argument). Each of these output-vectors should be an array of its Cartesian components as strings, expressed in scientific notation to three significant digits (like "6.63e-34"). Return these vectors as the elements of an array, with the electric field coming first (i.e., [[E_x, E_y, E_z], [B_x, B_y, B_z]]).
//(Assume that the Cartesian axes of the second frame are parallel to the corresponding axes of the first frame.)
//To calculate the electric and magnetic fields in the second frame, use the following pair of vector equations, where "×" means the cross product and "•" means the dot product:
//E′ = cosh(φ)E + sinh(φ)(û × B) - 2sinh²(.5φ)(û • E)û
//
//B′ = cosh(φ)B - sinh(φ)(û × E) - 2sinh²(.5φ)(û • B)û
//Here, the "primed" fields on the left (E′ and B′) are the fields as measured in the second frame, and the "unprimed" fields on the right (E and B) are the fields as measured in the first frame.
//The quantity û is the unit vector pointing in the same direction as u. Each of its Cartesian components is equal to the corresponding component of u divided by ||u||, which is the magnitude of u (you can calculate ||u|| by taking the square root of the sum of the squares of u's Cartesian components).
//Finally, the quantity φ that's fed to the hyperbolic functions is the relative rapidity of the frames, defined as φ = artanh(||u||) (i.e., the inverse hyperbolic tangent of the frames' relative speed).
//The parameters will be valid unless ||u|| ≥ 1 (because the relative speed of frames must be subluminal). If ||u|| ≥ 1, return "invalid velocity".
//Examples
//transformFields(
//  [-26.24, 555.1, 53.32],  // electric field
//  [1.030, 12.01, 287.8],  // magnetic field
//  [-1, 0, 0] // velocity (too fast!)
//) ➞ "invalid velocity"
//
//transformFields(
//  [-26.24, 555.1, 53.32],
//  [1.030, 12.01, 287.8],
//  [-.9999, 0, 0]  // (okay)
//) ➞ [
//  ["-2.62e+1", "5.96e+4", "2.92e+3"],
//  ["1.03e+0", "-2.92e+3", "5.96e+4"]
//]
//
//transformFields(
//  [1.234, 0, 0],
//  [0, 1.234, 0],
//  [.5, .5, 0]
//) ➞ [
//  ["1.49e+0", "-2.56e-1", "8.73e-1"],
//  ["-2.56e-1", "1.49e+0", "8.73e-1"]
//]
//Notes
//One way to verify that the results are accurate is by comparing E • B with E′ • B′. The dot product of the electric field and the magnetic field is a Lorentz scalar, which means that it's a quantity whose value all observers agree on, regardless of their relative motion. Another Lorentz scalar is ||E||² - ||B||².
//Light is characterized by electric and magnetic fields that share a magnitude and are mutually perpendicular (the Lorentz scalars mentioned in the previous paragraph guarantee that if these conditions are satisfied in one frame then they're satisfied in all frames). The third example fits the bill.
//Another interesting tidbit: in the second example, note that the x-components of the fields in the second frame don't seem to differ from those in the first frame. That's because u is parallel to the x-axis here, and electromagnetic field-components parallel to the "boost" direction transform to themselves.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(transformFields(
//  [-26.24, 555.1, 53.32],
//  [1.030, 12.01, 287.8],
//  [-1, 0, 0]
//), 'invalid velocity');
//​
//Test.assertSimilar(transformFields(
//  [-26.24, 555.1, 53.32],
//  [1.030, 12.01, 287.8],
//  [-.9999, 0, 0]
//), [
//  ['-2.62e+1', '5.96e+4', '2.92e+3'],
//  ['1.03e+0', '-2.92e+3', '5.96e+4']
//]);
//​
//Test.assertSimilar(transformFields(
//  [1.234, 0, 0],
//  [0, 1.234, 0],
//  [.5, .5, 0]
//), [
//  ['1.49e+0', '-2.56e-1', '8.73e-1'],
//  ['-2.56e-1', '1.49e+0', '8.73e-1']
//]);
//​
//Test.assertSimilar(transformFields(

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Valid Name

//tags: conditions,functional_programming,regex

//url: https://edabit.com/challenge/xPBFGvKQfRFEyy4vx

//Description:
//For this exercise, keep in mind the following definitions:
//A term is either an initials or word.
//initials = 1 character
//words = 2+ characters (no dots allowed)
//A valid name is a name written in one of the following ways:
//H. Wells
//H. G. Wells
//Herbert G. Wells
//Herbert George Wells

//The following names are invalid:

//Herbert or Wells (single names not allowed)
//H Wells or H. G Wells (initials must end with dot)
//h. Wells or H. wells or h. g. Wells (incorrect capitalization)
//H. George Wells (middle name expanded, while first still left as initial)
//H. G. W. (last name is not a word)
//Herb. G. Wells (dot only allowed after initial, not word)

//Rules
//Both initials and words must be capitalized.
//Initials must end with a dot.
//A name must be either 2 or 3 terms long.
//If the name is 3 words long, you can expand the first and middle name or expand the first name only. You cannot keep the first name as an initial and expand the middle name only.
//The last name must be a word (not an initial).
//Your task is to write a function that determines whether a name is valid or not. Return true if the name is valid, false otherwise.
//Examples
//validName("H. Wells") ➞ true
//
//validName("H. G. Wells") ➞ true
//
//validName("Herbert G. Wells") ➞ true
//
//validName("Herbert") ➞ false
//// Must be 2 or 3 words
//
//validName("h. Wells") ➞ false
//// Incorrect capitalization
//
//validName("H Wells") ➞ false
//// Missing dot after initial
//
//validName("H. George Wells") ➞ false
//// Cannot have: initial first name + word middle name
//
//validName("H. George W.") ➞ false
//// Last name cannot be initial
//
//validName("Herb. George Wells") ➞ false
//// Words cannot end with a dot (only initials can)
//Notes
//A term is either an initial or word.
//Initials and words are disjoint sets.

//code area
///////////////////////////////////////////////////////////////////////////
const validName = string => {
    let arr = string.split(' ')

    if (arr.length > 1 && arr.length < 4) {
        for (let i = 0; i < arr.length; i++) {
            if (arr.length < 3) {
                if (arr[0].length > 2 && 
                    /\./.test(arr[0]) || 
                    arr[0].length === 1 || 
                    /[a-z]/.test(arr[0])) {
                    return false
                }
                else {
                    return true
                }
            }
            else {
                if (arr[1].length > 2 && (/\./.test(arr[0]) || /\./.test(arr[2])) ) {
                    return false
                }
                else if (!/[A-Z]/.test(arr[0]) || !/[A-Z]/.test(arr[2])) {
                    return false
                }
                else {
                    return true
                }
            }
        }    
    }
    else {
        return false
    }
}
//////////////////////////////////////////////////////////////////////////

//tests:


// Test.assertEquals(validName("Herbert George Wells"), true)
// Test.assertEquals(validName("Herbert G. Wells"), true)
// Test.assertEquals(validName("H. G. Wells"), true)
// Test.assertEquals(validName("herbert G. Wells"), false)
// Test.assertEquals(validName("Herbert G. wells"), false)
// Test.assertEquals(validName("H. George Wells"), false)
// Test.assertEquals(validName("Herbert George W."), false)
// Test.assertEquals(validName("H. Wells"), true)
// Test.assertEquals(validName("h. Wells"), false)
// Test.assertEquals(validName("H Wells"), false)
// Test.assertEquals(validName("Herb. Wells"), false)
// Test.assertEquals(validName("Herbert W. G. Wells"), false)
// Test.assertEquals(validName("Herbert"), false)