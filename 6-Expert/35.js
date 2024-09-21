

//title: Is This a Haiku?

//tags: regex,strings,validation

//url: https://edabit.com/challenge/DKSrPGq3n5h9hD2YW

//Description:
//Haikus are poems formed by three lines of 5, 7, and 5 syllables. Your task is to write a function that determines if a given poem scans as a Haiku.
//How to count syllables:
//Every syllable must contain at least one vowel.
//If two or more vowels appear back to back, they should be counted as a single vowel (e.g. "fair").
//If an "e" appears at the end of a word, it shouldn't be counted, as those aren't usually pronounced. That extends to words ending in es or e's.
//An exception to the previous point is a word whose only vowel appears at the end (e.g. "the" or "She's").
//"Y" counts as a vowel.
//Examples
//haiku("New vids ev'ry day / Never skipped a single day / I'll see you in March") ➞ true
//
//haiku("Delightful display / Snowdrops bow their pure white heads / To the sun's glory") ➞ true
//
//haiku("Superman's my fav / Wonder Woman is pretty dope / Don't forget Rorschach") ➞ false
//Notes
//Each new line of the poem will be marked with a /.
//You may find commas, apostrophes, and other punctuation marks.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(haiku("Let me help you out / Three lines, five, seven, then five / Punchline optional"), true)
//Test.assertEquals(haiku("Let me help you out / Three lines, five, then seven / Punchline optional"), false)
//Test.assertEquals(haiku("Superman's my fav / Wonder Woman's pretty dope / Don't forget Rorschach"), true)
//Test.assertEquals(haiku("Superman's my fav / Wonder Woman is pretty dope / Don't forget Rorschach"), false)
//Test.assertEquals(haiku("We all start with none / You will get yours in due time / Just pay for some bots"), true)
//Test.assertEquals(haiku("We all start with none / You will get yours in due time / Just pay for bots"), false)
//Test.assertEquals(haiku("New vids ev'ry day / Never skipped a single day / I'll see you in March"), true)
//Test.assertEquals(haiku("New vids ev'ry / day Never skipped a single day / I'll see you in March"), false)
//Test.assertEquals(haiku("I love me some 'Bowl / Great commercials, yummy snacks / Some times there's a game"), true)
//Test.assertEquals(haiku("I love me some Super Bowl / Great commercials, yummy snacks / Some times there's a game"), false)
//Test.assertEquals(haiku("Hello new best friend / Hope you enjoy your stay here / Don't you ever leave"), true)
//Test.assertEquals(haiku("Hello new best friend / I hope you enjoy your stay here / Don't you ever leave"), false)
//Test.assertEquals(haiku("Oh god Vegemite / You are the worst-tasting thing / Should be illegal"), true)
//Test.assertEquals(haiku("Oh god Vegemite / You are the worst-tasting thing Should / be illegal"), false)
//Test.assertEquals(haiku("A brain, an athlete / A basket case, a princess / And a criminal"), true)
//Test.assertEquals(haiku("A brain, an athlete / A basket case, and a princess / And a criminal"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Split 25 (Part #2)

//tags: algebra,control_flow,math,numbers

//url: https://edabit.com/challenge/igPuptkjNiv6mY3zY

//Description:
//Before you start, please try the first part of this challenge: Split 25 (Part #1)
//After you completed the first part, you may have realized you could go higher by not using natural numbers. You could use negatives and positives, eventually reaching infinity, like so: -25 * 25 * 50 * -25 so on and so on continuing to add more factors. You could also use fractions and irrational numbers to increase it.
//Being in the interest of not overcomplicating this part, attempt to find the highest product using fractions. For example, 10 could be broken up as 2.5 * 2.5 * 2.5 * 2.5 (which is (10/4)^4)and you could reach 39.0625, higher then 36 (3 3 4).
//Given a positive integer to split, x, return the maximum product using rational numbers.
//Examples
//split(25) ➞ 9846.4
//// (25 / 9) ** 9
//
//split(15) ➞ 244.1
//// (15 / 6) ** 6
//
//split(1) ➞ 1
//Notes
//All responses should be rounded to one decimal place.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(split(25), 9846.4)
//Test.assertEquals(split(30), 62088.9)
//Test.assertEquals(split(1), 1)
//Test.assertEquals(split(10), 39.1)
//Test.assertEquals(split(20), 1554.3)
//Test.assertEquals(split(50), 96951601.2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort Characters by Frequency, Case, Alphabet

//tags: algorithms,conditions,sorting,strings

//url: https://edabit.com/challenge/fEZw4bhjm9oBT6nvf

//Description:
//The function is given a string. Sort the characters and return a new string. Sorting conditions:
//Most frequent (case-specific) move in front.
//For the same frequency upper case characters move in front.
//For the same frequency and case sort them alphabetically.
//Examples
//frequencySort("tree") ➞ "eert"
//
//frequencySort("cccaaa") ➞ "aaaccc"
//
//frequencySort("Aabb") ➞ "bbAa"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(frequencySort("tree"), "eert")
//Test.assertEquals(frequencySort("cccaaa"), "aaaccc")
//Test.assertEquals(frequencySort("Aabb"), "bbAa")
//Test.assertEquals(frequencySort("ccSctiXmStfmctmgfmfcfgtggEiicfiwtitgcgwScfXwScmwgtmfwigmifgfmSfwitgX"), "ffffffffffggggggggggccccccccciiiiiiiimmmmmmmmttttttttwwwwwwSSSSSXXXE")
//Test.assertEquals(frequencySort("qqXQwlbYOboaooqXixQqQqiOBixaxQqQxbQaBqqyQhBQQwqOQqXX"), "QQQQQQQQQQqqqqqqqqqqXXXXxxxxBBBOOOaaabbbiiiooowwYhly")
//Test.assertEquals(frequencySort("cjjNxDdztEepNNjcpdevqpDqNxcpEzDhJxnxDpuJqJPdppxzddduiojuthJuhDNvPhcdteudPqDocUdizexzhczhzdezdqcJpJiJNeuDuNDEjcqtnhncDqqjztEztEdnDJiutjjiJsiopDDjnidEiujpxecxOcxtOxcpPnipdncjJeidPpuvjhzktUtvdDnuDxpjPitjNhPdiicivDxPPhttthxpuJdxOJxspxkhD"), "ddddddddddddddddddDDDDDDDDDDDDDDDDppppppppppppppppxxxxxxxxxxxxxxxxcccccccccccccciiiiiiiiiiiiiijjjjjjjjjjjjjjttttttttttttttJJJJJJJJJJJJhhhhhhhhhhhhuuuuuuuuuuuuzzzzzzzzzzzPPPPPPPPPNNNNNNNNeeeeeeeennnnnnnnqqqqqqqqEEEEEEvvvvvOOOoooUUkkss")
//Test.assertEquals(frequencySort("mqDeRjoeKdHbDhxxeBKoiEhhDudbxikbvmsjijCYqjqMmChKqmAubHoqCLveMuKmmzmCQmoHjscXuuzmDujhjjHuuDimmmjCiuojmlzbxuRmBeHrjxmKoXxlDbQdohhCslweqlokhxZRbuBhIBhUsjCqhaDcQmeeVihBKKbAahhvuchqQKbmRqsoQHVzxzXmUBsQIIBZBmjhRcvjQRCjjLCiqbVbzDhZhxHmxsdjhrmEQDbAeBbzHxvbekHivdDmLjBiwBrmZBRaxHDsBvKlvvQHCvjDxtmsbjAiCKjessImoiocjujloeRCmhVbldeqihiVlaZuwAbmqDbYVjbXXdxrubhlihVqqsrCjHZblMdHosrXheaojqjVAwkdccAhccbHeQzHHbizlkVyhHuBvhlxxqCBqiDXZdCIBesljQahjcshCaBjcrHjkqHjLqhVXsRiqChooBymjhkEhjeHliZMuwcbhrHAbHdimVhjReejMhHhiHsmkXoCRVcvVHzlsxlhqMeqEHUMuxkxsBsMchqwisuHBjZXiEiUebxkzHhjsiiBEoqmQdHcmsqECHvjBKLrqjsHEmAzmcuUaqmuqbEVECmBcmdYjHhCHDosbuEbzDhmbhmXXZUshHqVHVIBchHmbaEkudKzhDhMsVmdkbeuAXjZrhIcZdHBHkrmXsZicjsCqmeHhxHamkxUZcoiBuVrIiHIzvDkmmbkaHdvqLKHyjkuhHsDjKMqdqRHmjjmuVvqjmxqjRjHmVMHlmRMLLljqhjubHIsvDqduhMBZVzQHkbaxdxchssZxzDjMiUyQEjevZoDjVXBvdzKZHBsehddxsHMKlvdHcoIABHUcaBQmaUHbhhieriBiuiuViDzBDuuHeqBuzXmimCkQdvdZZKMxBQhDhrmUivRDrjQmwiDdCYiAqdqaRIHiBQoCEjebisvcqeHhruhKsIXhmEujKHjEDB"), "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbsssssssssssssssssssssssssssssssssssssuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuueeeeeeeeeeeeeeeeeeeeeeeeeeeeeDDDDDDDDDDDDDDDDDDDDDDDDDDDDddddddddddddddddddddddddddddxxxxxxxxxxxxxxxxxxxxxxxxxxxxCCCCCCCCCCCCCCCCCCCCCCCCCcccccccccccccccccccccccccVVVVVVVVVVVVVVVVVVVVVVVooooooooooooooooooooooovvvvvvvvvvvvvvvvvvvvvvvZZZZZZZZZZZZZZZZZZZZzzzzzzzzzzzzzzzzzzzzKKKKKKKKKKKKKKKKKKKQQQQQQQQQQQQQQQQQQQkkkkkkkkkkkkkkkkkkklllllllllllllllllllXXXXXXXXXXXXXXXXXEEEEEEEEEEEEEEEEMMMMMMMMMMMMMMMMRRRRRRRRRRRRRRRRrrrrrrrrrrrrrrrraaaaaaaaaaaaaaaIIIIIIIIIIIIIAAAAAAAAAAAAUUUUUUUUUUULLLLLLLLwwwwwwwYYYYyyyyt")
//Test.assertEquals(frequencySort("yNiusbowRUmnJwKqmNWMnUnmMzYecRDUSJLSbmTUeldbewvvuZeyXWuJbnboDDxsobwWobyvOYuBUqLwMSQcfvZtwboDueRxSDztqMrUrRRBxERbwelgnYUswezmbMdbqrfmbbiElMrnbmmvQBGzwwevnwdZRtlwmJgkKbWtvJBewEUzsQgSMvoWnDvnrcXQSvzDvuvvlcwsuqKleDDcFbqjeSQGYdumnzSuDezblGeWyeuDbEwxYCqrAyUgqyGEujxtznlvzWWswvmogqyrybATswoEyusRiiauqBzYRqmsguwkbQbbomZNxuRgZeSmqlsrTqnsWuTSYnZvxENmavzqlbwXqSvlBuywDevBdGqrurmXxbyNMtzhrlnxmNRkzrRqejfmeJUlFnbfmMUbeqBwoUwvmTvWDxxhtqGRrusidbuLnwWeriWNdUYCRQBkyoUqNRuelMubouxmgcdeuurjKKvuLXqcumxeUqyvrDxzdqRmWjuDteyTWZqodWdJeeeeurevoytjEksnTYLEdluMqrquKewmifQDObLXLeAqSeulbnrlketntEvUwwaWlmQuvwueUWmqxUtnluxqmMvQuwuQjkgDtTwzTRGwZDMEaYMzSuvjuhzbraQNmsbuXwgAumTvboYzMTwwmnbbmymeoJUQcmZbNgDYusunSeurkJoLEjXSNdFbnroubuWbNOnUyYxGebeWuxjorDqZdsdrnTmtummMuqmgOdlbyjmeyOEldsKueSdeelrdqdebegsriwqYzbMrRDtxMdfNdxqsSrqDdusdRltqgeByiAhsqcJSoWOMwWAmjcWtJMSvSnjkqNsqeYlMDbWyQsnxzXsbnurYbKAUeskuoeguUqSlTbsJjtKewmrqngKDmQmUGoluwUsUbsRqovxJmGzGgwDodbdelHySWdRyvvMDGdqouqSkcZNfNLwdDymEDovkEqumbBwuOegkzqDtWMNGSmrfuyrtUmvYMtyquvUQdmqRBnsojKuqkyeugtwmNrWSwaZGbsuDbGwcmgWbfourrbdvEvdenqvuQRdeGzuEzMQyFvDKEMiUnRnrmNUDKawJLxlLtYconlXTrwuUuwwbbXZRbmtQrLqmDlstovWugteJQQxelERrbbRfGDrMzqSebMYEnneKUzoWeRNFrsReMNeWRwDUwikeqwwEmmyCqelQlndgeewwRwgbsiwnvKMsksoiBBuKvmwJMyCeytqsLNMmdZvENnbmovqvZZjjqwy"), "uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuueeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnssssssssssssssssssssssssssssssssssssDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDdddddddddddddddddddddddddddddddddddllllllllllllllllllllllllllllllllloooooooooooooooooooooooooooooooooMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWtttttttttttttttttttttttttttzzzzzzzzzzzzzzzzzzzzzzzzzzzSSSSSSSSSSSSSSSSSSSSSSSSSSxxxxxxxxxxxxxxxxxxxxxxxxNNNNNNNNNNNNNNNNNNNNNNNgggggggggggggggggggggggEEEEEEEEEEEEEEEEEEEEEEQQQQQQQQQQQQQQQQQQQQQQYYYYYYYYYYYYYYYYYYYGGGGGGGGGGGGGGGGGjjjjjjjjjjjjjjjjjJJJJJJJJJJJJJJJJKKKKKKKKKKKKKKKKZZZZZZZZZZZZZZZZkkkkkkkkkkkkkkkkBBBBBBBBBBBBBBTTTTTTTTTTTTTTLLLLLLLLLLLLLccccccccccccciiiiiiiiiiiiiXXXXXXXXXXXffffffffffAAAAAAAOOOOOOOaaaaaaaFFFFFCCCChhhhH")
//Test.assertEquals(frequencySort("NyRFHUPbGPVPLbKVsdaTmqxXcjPCJeDSlTnVnSlGPCzIVXDtrCAcRHAiBtAekulGOnrDAtXWDeSPPRrBnAiVVEDKOHvjpAxikkIWPRsRTBfhxHzlNFlYYhLEhWvPuzVvvPdPLtOxDphXErOmskhnLnAnuyYVZPFxsnTxAvxchAIkLFDJhFVrayqKQPVLSyWuVPhMIrIAEnWIXreYZZSRlgMGVQKZBFOVGcEmDaxlfdBdveBhGQesGoNYAAoaOSdijGaNiYpSkqDXrDKjYixsVtxHeHqnkryGKztiEVPGUVdbVIhygKLDDymEzanWUPAcRdMjxYNEhrSTPaHUsuUkNtHGdxFLMzFaYGSNEuXnPUnHxwNDSxjPfnctGCsxrDNdeZCczDYzdvQVLZUIWzIIqTCVNwArZPysVkdNAVOePGLYzPdPsWhkkWiLIBBdTaFYGPynBIenAPwCbOZlApaLcExSJLAmjhDIHsMmNePTXBdRvzBtEykNLqTDahvjKTESxVGvAWsEPUVSPbxakNrpTHLKPBAqtHPtYLDALiXnVIHnoDzsUVTdsRMMPBCxPdKUORGFhhxHToUikAMTVQzpODkqqPGXzrCfDFbYDEGoAlHAuzBiSnrxPPMsbdbXXAcHxhTvWbCGlSMLAuALPPuPnqziEGlkdnGcWADvCnVEuYqIxvGYyOlKdUnyjhWlSsOUohtzSGheCQxAezbdsEWDiSCIxPDKDVsUWoBdvnXBVzRjxxeSDVLaaqPhnWLndnhYxaxPVROLxxjtvxdqqcFUmOqGysnmhGsbTKhhzBMqrhAXOEkkUxTLFUhYXnNfzYvDUUWXlzoKQhQFzHimSkjasLmkzUFWFFsGShDwltuzGrMMiPDZrpXddNvGzfAWPNzPhYgpWPAfRpnGYwPrHJRlPhTrxtbVxTNRGNWrQkfePrEzMnlRuNmbkdtpzcSMpuyekPTnbnvLgWPUJEsLnlhHYdhPxKTDEONGdIOGBLPraCxkuFzokSQexxwtRExUIIdtUCxbLRPeGyRLLiWtNiVxtnxnFkKNHZYNESziIhIdNFDBBbdGKotlhrTSaGRVYnvvKKYsSPlLHlMbeDOTIELExeGEnyOHbIHJmwMeDAPWhtbnzmVdPYYYrudegxRUsNYutekfyEUHlXzAcPAzCxvIKEUVRwJYeQqVznrjeBRGRPNhyeWOHqFrhvBDThGhZnlqvYsuIdkEOxMySLxDzOdehbLZQeAnCDVKMiPNDSDsWwEIkLQgBNMPtQZRvhSRRydIehQovJAkySZLAMDPWWdKssdbWxtLqPhXJiaskxpJFxSkPPYVISYVMYZncUTnUBsJRZflATinBTzPOwzWLOyiYHCjNEpGLYasyrPNirkRGfTCkbZLxJVxywkcxCXePsaUYqhxkfcWHghQdxEIvwGkqcLOhdxlLHztmVYXWtuCpzKXQSmTTWkSqQxdMrXPzYAELhJstWYMrPJTVGxULVFTaUHAXOxWQgqNxxJohJqtQVTFYJkKraXLAakXBwAbTkxxsXaodNFxqleBQwsMhDncwkhCsYLATWpMIUWTBImzfWOVsgwTPtVvwoSSQPLrSsLCQxsxwNlpPgnEhdkWSUxrbsDVSimKqkYUxAhHsSXEDkoeTeodnHxNqaDPOEEGaPPAzPMxaPDrmtzxrduRtRxGjzdFMHdnMNIOsIasUiXsAuLUKSKrWTeepdYthJdElIEhdPxhMuLYsldRCDSulWxAHipSVNwZlmrwESbKnlIUcRxYakYtzoCpDTUPdkOxYAqOdAnWwsVwVwNJCrudTPOUmJSSTSrpSRkPbVrEtoxdSxyLpNneeSVkvqyXIiRrFdywVPzAnQAndNHjxNKnCSthMnbTqaNCpeWSWPYYvtZxaXTUhnlIzjCtVldLnkrWESkpvmPavJhAJqenfGYnEPWcjOxMjaagfLeNsYFFRaHEXQKPGjdKHAyklZxCZAXnAcVIaPxluDhRnLhedaEhRniarrhazisEAQOPCfELRxSArxBTsPGCpxAVjpImHFrXRvehHXPqCuQPTVxnANAqklLaaSAiLOkFxqRYlPWIqnENNnXTYcYLxHPiCuKQRrU"), "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkksssssssssssssssssssssssssssssssssssssssssssssssssszzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHllllllllllllllllllllllllllllllllllllllttttttttttttttttttttttttttttttttttttttXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiBBBBBBBBBBBBBBBBBBBBBBBBBBBBBQQQQQQQQQQQQQQQQQQQQQQQQQQQQyyyyyyyyyyyyyyyyyyyyyyyyyyyybbbbbbbbbbbbbbbbbbbbbbbbbbbuuuuuuuuuuuuuuuuuuuuuuuuuupppppppppppppppppppppppppwwwwwwwwwwwwwwwwwwwwwwwwJJJJJJJJJJJJJJJJJJJJJJccccccccccccccccccccccmmmmmmmmmmmmmmmmmmmmmmZZZZZZZZZZZZZZZZZZZZZjjjjjjjjjjjjjjjjjjjjjooooooooooooooooooffffffffffffffffggggggggggg")
//Test.assertEquals(frequencySort("LjgSPEWMBKHrqnLUdDhNHVrhgGBKDwyBNUkpioUKVpzoknRGqSohWDomJpTsRKPRpxiRXtiuwnFOJrUulVjDOUDOWgFVpSkyfSsDYREoKmucDDLIHqcNzGYkSZmZllziGEagAndqFDEJIHTTdgxZNnUnHrjXBzbwKCLpySzayAbUHJzObQaQDyDzomzeitvDfNSpYxxseKXfkmECXOEwyLjmXqEmWIWHRhJWvVSKcYWDaZHxRcVesVWDKAHEFuxMBdKzComtOMSuUZZPTIADzjgQakLfCpMmIvwSNKiUcCNolNTSCcByzLcInKtezhqVfJONmPOahQSMxumGdLUgBpsOsqeIOFpznqmWCqUySAEQtFxfOHqSSQUQlQiYJkMbAJNDCpTgQSZgHMFysLYLcTWFFsyiloVxwOyIRZwUQHKuYFQBkYlkOFApcPsXkQqXXcWOgTWVTXLJIzxUKIMVrkzcuQtyOdmvMXkxSjVvWrUhuOBNawyFWJawmaVBZXYPYNckgSdLcbCOFslkDJeWByBlLSWDknCYLOmrqUfamaATCMSTBihnFRwRsrNPZUqsSyNwEqKYLcMlTksDQXqsUkAhUjAewGCvGuPzOHapmmcHqDOWIdFSIKtJJgofgLfpAVEUFHCeOhIWELPfojYJQJgyBZNJaOYsszNrsABBklDXAWwfxCQgdwWTpLnuWzaMpZYkojlIsHbAdMMHoKmfplgoxwqMGEAGDewYUpqmJvMmhejcLPNGyPuetKFggKqXDEyUtYwNHCkTObbPjEDzampCAhYWkBnQnsnjCgoCemjYmFXOSjIzgmXdljtjnWQIJMblDIbXYOPlusbVAyezBNDIBayqvJRkiKqezgpWjbKONbqRNynxkNqOzAOwAxVFZQKtWUGCHuVloZmjZOmkBTFxuZfUWYHsneOsExZVDEsbruPLaWfzzQDWxAFMvUlIkKlXYcgRVvIbpwFlYJYApOKVzmEpxsQSQjGWqMDqJUJEjOFhNIidLEtmIBsGuLsJIDJqiNYyeqShqfxFUCHCEqaraSZuZDmWeaAhhuQvyvJKSIYFVnFQOHdHpUZDphWBJcaPrBCpmIxsVKhqzfgtUAmjKOxATgLEGVoyZYvuicGEaUhsnCMqmoJhgeXxbBoEmfQGOxkWLBOAgTlWGXCsqHkzLeFSowsGsUcXsehMbpwhdlWNgAzYZfSdPqUESSXViofmyZWJHmYXeizxgRSHbbvBpgzFhgQZoKREKAjxzXYKgnaqXVrXhHcPexHkiDDpaxKkBumyuHaJmjcUSiwLommbJjxbBaJIWqyryWKSaIANPtEKyorJyruFjIJsoZauBiyHlrBApAWawOTTFvVJbNLozcXZUukoqqiFSYbdMYHCMJBwxbjWyTOiZmMuaHtUukIhbZSbqVJDYSyKjWNuMWonFPnYFZlhpqBoOyknmtLPyMcLpGOlwmqshONanobDEMNxIvqjnzapMjeOdEtUqgPHKfcmZmBlHQWreTkVBraJKNlEgLZmJQJHxJAdJkqLgbDkYXfJrTqYkmRkDBYFxooxUNiNmDDnPBdqKsSnFEQblbBilWCyIUAyDEkbBukjpXHWUDpKcMiWlOKHZEhZzpJyWQVqQWAMbGoSbiBLUeCImxDCFSlcQnmVqzmkDQaZZXsKjBjyhdUvnGrsKMqfMMCnHvhFoOYbnUQBmsOmQymtcDYoTXFBbSbJLbLbjrNjHhDyTAsDfxWHezbiBZmJOiomAApbgKKsEUYfqdmgOoQQCmNqNypxBqyXOIJckdkbXTVKqyhsHXMbpWsiWcVIVzEhaxHFILfHMHlDUYUznunMnOwNiSYfvTzrslsdJlYHVQkNMNfqUkSRMTYseeHlwxZFMcgSgjiPJUFcvQzBgqaelozIvYQjiKiHlFWWWkRSJhJlfbbkwhxsengWjQJKaikAzmsxNVYhVbEgzYzXwJhDZqAdABGyNbmEwKkxndJLYCOLWfCgouaupNjVgJgdqZiiqBRSmFQJanXYwsSjzbhlTutNJXkbeXOfXHYiaHkJsMbtKaIqLBotrkIkqXAFUdptCDnUulgFJJWmrLfEHLzyvTpToAcVcBCJLWFRulaUsnSUkNAegZfzJYuUbYBlcjBXLomoSStlNEpmHqFwTOnYLtKeKNpTEInFRwKZQMuyUmYWokfsclLTgBtiRLBqqoPgJRImCazlnnJjASYwKvsyQUnzOjqDOXMJCZKjCSzeSBTpDzwgioeKoVpISjaLeEmppAHmGqijGJSsvrjtmhWTtkngBXOkxbNOLooTSVnAxGiHbiYahKDASiJDsNyMJixkGOFnfJdfzIKIqcaERzzmRtWkEVLJcuXrgtsApNPpjhDaqopdwJpWNwEBbYqTCNOCjjRXVqbfTwLDcAOaxdqDYDTkgvYBfbjYsETTrZqaZdXRHUUaHoHLJbSJmGvwkqlIawSbWjjmiHmeWmqTUvICMDbZUesWOkKSKQocDdOmjxuKiobsHNoqyQvcnCtNeByHWOBNivjuSEcvooUxNpcSOKMHErBwyjgsxemcQfxatDyKJbGZzFrYFOjzTLpfUfaWeJbkyCZFyXepysDuKgANbApZAIVRaTZnctMiKJjslGkgeqSDuynDkIPSmwKHVEtIAqpavkGjPkdmZAjOWOenKUTbzVzvgZxljoRidNAFvIlpkrgVYLgFiruSOcUWmJgFcmgqsZNDgxEhtisOJZrmeFqaxxYVjjjorHsrfsYMfmqQnEJjZcMtHRyBOIFFIjBmZIXerLwIsFWuiLYSSyCDojoJVqLJTtJZqgOIdScnUTUIzAcGWFbnCWAhslEPalhGEzLfeyuSoMHLKpjkJRHRxIIoebysBKLUuTRZSMkdXxegKYDgsTUcZeILrvbifWmjmsScqWNIjNIxMxxCCLqUYWDpQuMHcXOZOVGWGaiQySgzBiiwmxugRGyMvcUGrtVTMCfFCmkqDIZmqbmvOgnMvpgjmrVwEWYPIgQOEHzpNtxvndQTNJtQTqCGHDntUXLaHiHfJrUEqtvQJLMCqzbIrfOYabJPEYrNSPSMpSbukO"), "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIINNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNpppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQccccccccccccccccccccccccccccccccccccccccccccccccccccccTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXlllllllllllllllllllllllllllllllllllllllllllllllllllCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuufffffffffffffffffffffffffffffffffffffffffffffffwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrtttttttttttttttttttttttttttttttttttttttttvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGdddddddddddddddddddddddddddddddddddddRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP")
//​
//// Autnor: Evgeny SH

