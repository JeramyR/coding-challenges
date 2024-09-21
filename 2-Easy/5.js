

//title: What`s Hiding Amongst the Crowd?

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/rvsvGvqZ3BzNieKqA

//Description:
//A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
//The wanted word is in lowercase.
//The crowd of letters is all in uppercase.
//Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
//Examples
//detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
//
//detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
//
//detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////
// const detectWord = string => {
//     //97 - 122 lower case letters
//     let word = ''
//     for (let i = 0; i < string.length; i++) {
//         if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
//             word += string[i]
//         }
//     }
//     return word
// }


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(detectWord("UcUNFYGaFYFYGtNUH"), "cat")
// Test.assertEquals(detectWord("bEEFGBuFBRrHgUHlNFYaYr"), "burglar")
// Test.assertEquals(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"), "embezzlement")
//Test.assertEquals(detectWord("cLXSNVVJVOJBIQRVKIZWKJOIVHXELVReLXSNVVJVOJBIQRVKIZWKJOIVHXELVRrLXSNVVJVOJBIQRVKIZWKJOIVHXELVRtLXSNVVJVOJBIQRVKIZWKJOIVHXELVRaLXSNVVJVOJBIQRVKIZWKJOIVHXELVRiLXSNVVJVOJBIQRVKIZWKJOIVHXELVRn"), "certain")
//Test.assertEquals(detectWord("cUEOYCSUXVOaUEOYCSUXVOt"), "cat")
//Test.assertEquals(detectWord("vJAQSZNYRQTFUHDHSDMBDPUNFQJXSXeJAQSZNYRQTFUHDHSDMBDPUNFQJXSXgJAQSZNYRQTFUHDHSDMBDPUNFQJXSXeJAQSZNYRQTFUHDHSDMBDPUNFQJXSXtJAQSZNYRQTFUHDHSDMBDPUNFQJXSXaJAQSZNYRQTFUHDHSDMBDPUNFQJXSXbJAQSZNYRQTFUHDHSDMBDPUNFQJXSXlJAQSZNYRQTFUHDHSDMBDPUNFQJXSXe"), "vegetable")
//Test.assertEquals(detectWord("dATIQTJLBZFHSRXWOZQMOKZPANOUGMeATIQTJLBZFHSRXWOZQMOKZPANOUGMlATIQTJLBZFHSRXWOZQMOKZPANOUGMiATIQTJLBZFHSRXWOZQMOKZPANOUGMgATIQTJLBZFHSRXWOZQMOKZPANOUGMhATIQTJLBZFHSRXWOZQMOKZPANOUGMt"), "delight")
//Test.assertEquals(detectWord("pUBOKJGODIJBSXPMTODCGHATrUBOKJGODIJBSXPMTODCGHATiUBOKJGODIJBSXPMTODCGHATcUBOKJGODIJBSXPMTODCGHATeUBOKJGODIJBSXPMTODCGHATy"), "pricey")
//Test.assertEquals(detectWord("sWRRKMVJVHHZTKAQTJUQDPKHSHPOYCnWRRKMVJVHHZTKAQTJUQDPKHSHPOYCaWRRKMVJVHHZTKAQTJUQDPKHSHPOYCkWRRKMVJVHHZTKAQTJUQDPKHSHPOYCe"), "snake")
//Test.assertEquals(detectWord("aJULRJHMOVLEFVJZnJULRJHMOVLEFVJZgJULRJHMOVLEFVJZlJULRJHMOVLEFVJZe"), "angle")
//Test.assertEquals(detectWord("aJWCHXONGQCXGPXLZQBKEIHZWwJWCHXONGQCXGPXLZQBKEIHZWaJWCHXONGQCXGPXLZQBKEIHZWrJWCHXONGQCXGPXLZQBKEIHZWe"), "aware")
//Test.assertEquals(detectWord("nNUZKGKNEVZBPQZQQLHZZPaNUZKGKNEVZBPQZQQLHZZPmNUZKGKNEVZBPQZQQLHZZPe"), "name")
//Test.assertEquals(detectWord("cLBFKXYQFLLElLBFKXYQFLLEeLBFKXYQFLLEvLBFKXYQFLLEeLBFKXYQFLLEr"), "clever")
//Test.assertEquals(detectWord("bDUNEPWILKUFNTRGMBRSVGAABBFCCXErDUNEPWILKUFNTRGMBRSVGAABBFCCXEaDUNEPWILKUFNTRGMBRSVGAABBFCCXEsDUNEPWILKUFNTRGMBRSVGAABBFCCXEh"), "brash")
//Test.assertEquals(detectWord("fXTTJVWFCHYZMaXTTJVWFCHYZMsXTTJVWFCHYZMt"), "fast")
//Test.assertEquals(detectWord("dJYPHZIRXYOLDGAQUPHIZTXJOKNoJYPHZIRXYOLDGAQUPHIZTXJOKNwJYPHZIRXYOLDGAQUPHIZTXJOKNnJYPHZIRXYOLDGAQUPHIZTXJOKNtJYPHZIRXYOLDGAQUPHIZTXJOKNoJYPHZIRXYOLDGAQUPHIZTXJOKNwJYPHZIRXYOLDGAQUPHIZTXJOKNn"), "downtown")
//Test.assertEquals(detectWord("pKICNUFWFNFORlKICNUFWFNFORaKICNUFWFNFORnKICNUFWFNFORtKICNUFWFNFORs"), "plants")
//Test.assertEquals(detectWord("wLAXIBDWXVPRQOOQRRTOYRODLAQHiLAXIBDWXVPRQOOQRRTOYRODLAQHnLAXIBDWXVPRQOOQRRTOYRODLAQHdLAXIBDWXVPRQOOQRRTOYRODLAQHy"), "windy")
//Test.assertEquals(detectWord("sELJQETMYLTDKXYNSSOISZFPMAtELJQETMYLTDKXYNSSOISZFPMAaELJQETMYLTDKXYNSSOISZFPMArELJQETMYLTDKXYNSSOISZFPMAt"), "start")
//Test.assertEquals(detectWord("wQYKDHGMNYMKUHKDeQYKDHGMNYMKUHKDt"), "wet")
//Test.assertEquals(detectWord("kVOJQJIFILEHVnVOJQJIFILEHViVOJQJIFILEHVfVOJQJIFILEHVe"), "knife")
//Test.assertEquals(detectWord("nBKCXNIJYJSVDoBKCXNIJYJSVDtBKCXNIJYJSVDe"), "note")
//Test.assertEquals(detectWord("bOEYZAJVFYUGXQWZXrOEYZAJVFYUGXQWZXuOEYZAJVFYUGXQWZXsOEYZAJVFYUGXQWZXh"), "brush")
//Test.assertEquals(detectWord("tEMVSYRPYHSZRLJNOMTYRPREIHoEMVSYRPYHSZRLJNOMTYRPREIHoEMVSYRPYHSZRLJNOMTYRPREIHtEMVSYRPYHSZRLJNOMTYRPREIHhEMVSYRPYHSZRLJNOMTYRPREIHbEMVSYRPYHSZRLJNOMTYRPREIHrEMVSYRPYHSZRLJNOMTYRPREIHuEMVSYRPYHSZRLJNOMTYRPREIHsEMVSYRPYHSZRLJNOMTYRPREIHh"), "toothbrush")
//Test.assertEquals(detectWord("sWRIQGRPNHQQPSIPRoWRIQGRPNHQQPSIPRgWRIQGRPNHQQPSIPRgWRIQGRPNHQQPSIPRy"), "soggy")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Hex to Binary

//tags: bit_operations

//url: https://edabit.com/challenge/mHrFjP4K5BfAKEugN

//Description:
//Create a function that will take a HEX number and returns the binary equivalent (as a string).
//Examples
//toBinary(0xFF) ➞ "11111111"
//
//toBinary(0xAA) ➞ "10101010"
//
//toBinary(0xFA) ➞ "11111010"
//Notes
//The number will be always an 8-bit number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(toBinary(0xFF), "11111111")
//Test.assertEquals(toBinary(0xAA), "10101010")
//Test.assertEquals(toBinary(0xFA), "11111010")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Older Than Me

//tags: classes,conditions,language_fundamentals

//url: https://edabit.com/challenge/iwdZiFucR5wkQsFHu

//Description:
//Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:
//{other person name} is {older than / younger than / the same age as} me.
//Examples
//p1 = Person("Samuel", 24)
//p2 = Person("Joel", 36)
//p3 = Person("Lily", 24)
//p1.compareAge(p2) ➞ "Joel is older than me."
//
//p2.compareAge(p1) ➞ "Samuel is younger than me."
//
//p1.compareAge(p3) ➞ "Lily is the same age as me."
//Notes
//Check out the Resources tab for some helpful tutorials on JavaScript classes!
//If you're really stuck, check out the Solutions tab for answers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//p1 = new Person("Samuel", 24)
//p2 = new Person("Joel", 36)
//p3 = new Person("Lily", 24)
//​
//Test.assertEquals(p1.compareAge(p2), "Joel is older than me.")
//Test.assertEquals(p1.compareAge(p3), "Lily is the same age as me.")
//​
//Test.assertEquals(p2.compareAge(p1), "Samuel is younger than me.")
//Test.assertEquals(p2.compareAge(p3), "Lily is younger than me.")
//​
//Test.assertEquals(p3.compareAge(p1), "Samuel is the same age as me.")
//Test.assertEquals(p3.compareAge(p2), "Joel is older than me.")
//​
//// made by @Joshua Señoron

