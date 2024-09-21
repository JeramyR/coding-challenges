

//title: Constrained Writing

//tags: logic,strings,validation

//url: https://edabit.com/challenge/yeevEvr7SKTtbekKm

//Description:
//In this challenge, establish which type of constrained writing is applied to a sentence. There are four possible types to detect:
//Pangram: the sentence contains all the 26 letters of the English alphabet.
//Heterogram: the sentence doesn't have multiple instances of its letters (as to say that every letter is unique).
//Tautogram: every word of the sentence starts with the same letter.
//Transgram: all words of the sentence share at least a common letter.
//Given a string txt being a sentence, implement a function that returns the strings "Pangram", "Heterogram", "Tautogram" or "Transgram" accordingly to the above definitions and following the same given order to establish the result. If no constrained writing is detected, return the string "Sentence".
//Examples
//constraint("The quick brown fox jumps over the lazy dog.") ➞ "Pangram"
//// The sentence contains every letter of the alphabet.
//// Repetitions are not considered.
//
//constraint("The big dwarf only jumps.") ➞ "Heterogram"
//// The sentence has only unique characters.
//
//constraint("Todd told Tom to take the tiny turtles.") ➞ "Tautogram"
//// Every word starts with the letter "t".
//
//constraint("A cannibal alligator has attacked an unaware vegan alligator.") ➞ "Transgram"
//// Every word contains the letter "a".
//
//constraint("The unbearable lightness of coding...") ➞ "Sentence"
//// No constraint is applied to the sentence.
//Notes
//Remember to respect the given order to establish the result: a Pangram has to be detected before a Heterogram, and a Tautogram has to be detected before a Transgram.
//Sentences will contain letters (either uppercase or lowercase) and punctuation. Your function must be case-insensitive.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(constraint("The quick brown fox jumps over the lazy dog."), "Pangram")
//Test.assertEquals(constraint("The big dwarf only jumps."), "Heterogram")
//Test.assertEquals(constraint("Todd told Tom to take the tiny turtles."), "Tautogram")
//Test.assertEquals(constraint("A cannibal alligator has attacked an unaware vegan alligator."), "Transgram")
//Test.assertEquals(constraint("The unbearable lightness of coding..."), "Sentence")
//Test.assertEquals(constraint("Pack my box with five dozen liquor jugs."), "Pangram")
//Test.assertEquals(constraint("The dog is crazy."), "Heterogram")
//Test.assertEquals(constraint("It is indeed included instantly!"), "Tautogram")
//Test.assertEquals(constraint("Those loops could work without constants sometimes."), "Transgram")
//Test.assertEquals(constraint("Sphinx of black quartz, judge my vow."), "Pangram")
//Test.assertEquals(constraint("Mind the gap!"), "Heterogram")
//Test.assertEquals(constraint("Put some more tobacco inside it next time, it's just too strong!"), "Sentence")
//Test.assertEquals(constraint("Thursdays: the time to teach them the truth."), "Tautogram")
//Test.assertEquals(constraint("Would you mind pass me that axe, Eugene?"), "Sentence")
//Test.assertEquals(constraint("AbCdEfGhIjKlMnOpQrStUvWxYz"), "Pangram")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Remove the Computer Virus

//tags: formatting,strings

//url: https://edabit.com/challenge/kLGCKsaYKoZHdtLv7

//Description:
//Your computer might have been infected by a virus! Create a function that finds the viruses in files and removes them from your computer.
//Examples
//removeVirus("PC Files: spotifysetup.exe, virus.exe, dog.jpg") ➞ "PC Files: spotifysetup.exe, dog.jpg"
//
//removeVirus("PC Files: antivirus.exe, cat.pdf, lethalmalware.exe, dangerousvirus.exe ") ➞ "PC Files: antivirus.exe, cat.pdf"
//
//removeVirus("PC Files: notvirus.exe, funnycat.gif") ➞ "PC Files: notvirus.exe, funnycat.gif")
//Notes
//Bad files will contain "virus" or "malware", but "antivirus" and "notvirus" will not be viruses.
//Return "PC Files: Empty" if there are no files left on the computer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(removeVirus("PC Files: spotifysetup.exe, virus.exe, dog.jpg"), "PC Files: spotifysetup.exe, dog.jpg")
//Test.assertEquals(removeVirus("PC Files: antivirus.exe, cat.pdf, lethalmalware.exe, dangerousvirus.exe "), "PC Files: antivirus.exe, cat.pdf")
//Test.assertEquals(removeVirus("PC Files: notvirus.exe, funnycat.gif"),  "PC Files: notvirus.exe, funnycat.gif")
//Test.assertEquals(removeVirus("PC Files: virus.exe, bestmalware.exe, memzvirus.exe"),  "PC Files: Empty")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Decompose URL

//tags: conditions,loops,objects,regex

//url: https://edabit.com/challenge/bSuzdY5mYYLbuasX8

//Description:
//Create a function named that takes a string (URL) as input. Decompose the string and return an object with the following properties:
//protocol: This is the url protocol (e.g. "http").
//ipAdress: Should contain IP address (if valid) of URL or null.
//subDomain: Should contain subDomain of URL (e.g. "www" or null).
//domainName: Should contain domain without subDomain (e.g. "google.com" or null).
//folderTree: Should contain an array of folders (e.g. "www.google.com/test/image/index.html" ➞ ["test", "image"] or null)
//targetFile: Should return targeted file.
//e.g. 1. "www.google.com/test/image" ➞ "image"
//e.g. 2. "www.google.com/test/index.html" ➞ "index.html" or null
//argumentsFile: Should return arguments of targetedFile.
//e.g. "www.google.com/test/image?search=ok" ➞ "?search=ok" or null
//Examples
//decomposeUrl("https://www.google.com/search/test.js?ok=1") ➞ {
//  protocol: "https",
//  ipAdress: null,
//  subDomain: "www",
//  domainName: "google.com",
//  folderTree: (1) […],
//  targetFile: "test.js",
//  argumentsFile: "?ok=1"
//}
//
//decomposeUrl("https://edabit.com/new/challenge") ➞ {
//  protocol: "https",
//  ipAdress: null,
//  subDomain: null,
//  domainName: "edabit.com",
//  folderTree: (1) […],
//  targetFile: "challenge",
//  argumentsFile: null
//}
//
//decomposeUrl("https://edabit.com/new/challenge/test.html") ➞ {
//  protocol: "https",
//  ipAdress: null,
//  subDomain: null,
//  domainName: "edabit.com",
//  folderTree: (2) […],
//  targetFile: "test.html",
//  argumentsFile: null
//}
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//var t1 = {protocol:"https",ipAdress:null,subDomain:null,domainName:"edabit.com",folderTree:["new","challenge"],targetFile:"test.html",argumentsFile:null};
//var t2 = {protocol:"https",ipAdress:null,subDomain:null,domainName:"edabit.com",folderTree:["edit","challenge"],targetFile:"bSuzdY5mYYLbuasX8",argumentsFile:null};
//var t3 = {protocol:"https",ipAdress:null,subDomain:null,domainName:"jsfiddle.net",folderTree:["r5dq22dc","99"],targetFile:null,argumentsFile:null};
//var t4 = {protocol:"https",ipAdress:null,subDomain:"www",domainName:"google.com",folderTree:null,targetFile:"search",argumentsFile:"?client=firefox-b-ab&q=popup+dela+muerte&spell=1&sa=X&ved=0ahUKEwis1r7d5uzcAhVC1xoKHSGmDNQQBQgkKAA&biw=1920&bih=944"};
//var t5 = {protocol:"https",ipAdress:null,subDomain:"www",domainName:"transparenttextures.com",folderTree:null,targetFile:null,argumentsFile:null};
//var t6 = {protocol:"https",ipAdress:null,subDomain:"forum",domainName:"joomla.fr",folderTree:null,targetFile:"index.html",argumentsFile:null};
//var t7 = {protocol:"https",ipAdress:"192.168.1.1",subDomain:null,domainName:null,folderTree:null,targetFile:"index.html",argumentsFile:null};
//var t8 = {protocol:"https",ipAdress:null,subDomain:null,domainName:"192.168.256.1",folderTree:null,targetFile:"index.html",argumentsFile:null};
//var t9 = {protocol:"https",ipAdress:"001.168.1.1",subDomain:null,domainName:null,folderTree:null,targetFile:"index.html",argumentsFile:null};
//var t10 = {protocol:"https",ipAdress:"192.1.1.1",subDomain:null,domainName:null,folderTree:null,targetFile:"index.html",argumentsFile:"?gj=true"};
//var t11 = {protocol:"file",ipAdress:"192.1.1.1",subDomain:null,domainName:null,folderTree:null,targetFile:"index.html",argumentsFile:"?gj=true"};
//var t12 = {protocol:"http",ipAdress:"192.1.1.1",subDomain:null,domainName:null,folderTree:null,targetFile:"index.html",argumentsFile:"?gj=true"};
//var t13 = {protocol:"filesLocal",ipAdress:null,subDomain:null,domainName:"jsfiddle.net",folderTree:["r5dq22dc","99"],targetFile:null,argumentsFile:null};
//​
//Test.assertSimilar(decomposeUrl("https://edabit.com/new/challenge/test.html"),t1);
//Test.assertSimilar(decomposeUrl("https://edabit.com/edit/challenge/bSuzdY5mYYLbuasX8"),t2);
//Test.assertSimilar(decomposeUrl("https://jsfiddle.net/r5dq22dc/99/"),t3);
//Test.assertSimilar(decomposeUrl("https://www.google.com/search?client=firefox-b-ab&q=popup+dela+muerte&spell=1&sa=X&ved=0ahUKEwis1r7d5uzcAhVC1xoKHSGmDNQQBQgkKAA&biw=1920&bih=944"),t4);
//Test.assertSimilar(decomposeUrl("https://www.transparenttextures.com/"),t5);
//Test.assertSimilar(decomposeUrl("https://forum.joomla.fr/index.html"),t6);
//Test.assertSimilar(decomposeUrl("https://192.168.1.1/index.html"),t7);
//Test.assertSimilar(decomposeUrl("https://192.168.256.1/index.html"),t8);
//Test.assertSimilar(decomposeUrl("https://001.168.1.1/index.html"),t9);
//Test.assertSimilar(decomposeUrl("file://192.1.1.1/index.html?gj=true"),t11);
//Test.assertSimilar(decomposeUrl("http://192.1.1.1/index.html?gj=true"),t12);

