

//title: Repeating Decimals to Fractions

//tags: math,numbers,strings

//url: https://edabit.com/challenge/655iJn8LvKYvzEWhG

//Description:
//Performing division on a fraction often results in an infinitely repeating decimal.
//1/3=.3333333...  1/7=.142857142857...
//Create a function that takes a decimal in string form with the repeating part in parentheses and returns the equivalent fraction in string form and in lowest terms.
//Examples
//fractions("0.(6)") ➞ "2/3"
//
//fractions("1.(1)") ➞ "10/9"
//
//fractions("3.(142857)") ➞ "22/7"
//
//fractions("0.19(2367)") ➞ "5343/27775"
//
//fractions("0.1097(3)") ➞ "823/7500"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fractions("0.(09)"), "1/11")
//Test.assertEquals(fractions("0.0(45)"), "1/22")
//Test.assertEquals(fractions("2.1(313)"), "10646/4995")
//Test.assertEquals(fractions("0.0208(3)"), "1/48")
//Test.assertEquals(fractions("12.(12345)"), "404111/33333")
//Test.assertEquals(fractions("1.017(857142)"), "57/56")
//Test.assertEquals(fractions("0.(052631578947368421)"), "1/19")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Evaluate Polynomials from String

//tags: algebra,strings

//url: https://edabit.com/challenge/wrzdwQDwoFDBhbAuh

//Description:
//You will be given a polynomial expression in string form. The expression will contain any of the following operations, written using standard mathematical notation for a single variable, "x", as illustrated in the examples below:
//addition: x + 1
//subtraction: x – 2
//multiplication: 3x
//division: x / 4
//exponentation: x^5
//brackets: x(x + 1)
//Your task is to write a function that can evaluate such a polynomial for a given value of x. You will receive two arguments: the polynomial string and the input number.
//If the mathematical expression contains an error, you should return "invalid".
//Examples
//evalPolynomial("x+1", 5) ➞ 6
//
//evalPolynomial("5x^2", 3) ➞ 45
//
//evalPolynomial("(x(x+1))/2", 4) ➞ 10
//
//evalPolynomial("4(x + 3))/2", 5) ➞ "invalid"
//// Invalid because parentheses not balanced.
//Notes
//The string will not contain spaces.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(evalPolynomial("x+1", 1), 2)
//Test.assertEquals(evalPolynomial("x^2", 2), 4, "Check exponentation.")
//Test.assertEquals(evalPolynomial("2(x+2)+x(x-1)", 3), 16, "Check multiplication.")
//Test.assertEquals(evalPolynomial("3x^2/8", 4), 6)
//Test.assertEquals(evalPolynomial("3x&2/8", 5), "invalid", "& not a valid mathematical expression.")
//Test.assertEquals(evalPolynomial("print(x)", 6), "invalid", "print(x) not a valid mathematical expression.")
//Test.assertEquals(evalPolynomial("x//2", 7), "invalid", "// not a valid operator.")
//Test.assertEquals(evalPolynomial("", 8), "invalid", "Expression empty.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort a String with the Given Template

//tags: algorithms,conditions,sorting,strings

//url: https://edabit.com/challenge/e5iLAZy28AghQWtG4

//Description:
//The function is given two strings t - template, s - to be sorted. Sort the characters in s such that if the character is present in t then it is sorted according to the order in t and other characters are sorted alphabetically after the ones found in t.
//Examples
//customSortt("edc", "abcdefzyx") ➞ "edcabfxyz"
//
//customSortt("fby", "abcdefzyx") ➞ "fbyacdexz"
//
//customSortt("", "abcdefzyx") ➞ "abcdefxyz"
//
//customSortt("", "") ➞ ""
//Notes
//The characters in t and s are all lower-case.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(customSort("edc", "abcdefzyx"), "edcabfxyz")
//Test.assertEquals(customSort("fby", "abcdefzyx"), "fbyacdexz")
//Test.assertEquals(customSort("", "abcdefzyx"), "abcdefxyz")
//Test.assertEquals(customSort("", ""), "")
//Test.assertEquals(customSort('cteqh', 'xnjanztmhg'), "thagjmnnxz")
//Test.assertEquals(customSort('jv', 'cxkafinfiuhnnaracsztbrcwaifwattzavwohoqskauififucq'), "vaaaaaaabccccfffffhhiiiiikknnnooqqrrsstttuuuwwwxzz")
//Test.assertEquals(customSort('xtz', 'uhgpqydzwtsemucfidpvrvormgfjefpqeprvmyiazqokmnhdwvyglngcsriw'), "tzzaccdddeeefffgggghhiiijklmmmmnnooppppqqqrrrrssuuvvvvwwwyyy")
//Test.assertEquals(customSort('eyuti', 'iuanyojxqbmihzyvjunb'), "yyuuiiabbhjjmnnoqvxz")
//Test.assertEquals(customSort('ndgi', 'eqfbnjbpbisjoakfnncpaphvvzxsodaw'), "nnndiaaabbbceffhjjkoopppqssvvwxz")
//Test.assertEquals(customSort('ymd', 'duoisjfobwlztxsaymzjwvpofouyijglwgvogpt'), "yymdabffgggiijjjlloooooppssttuuvvwwwxzz")
//Test.assertEquals(customSort('wpkmv', 'crcasndkumqcckmqxcpagkjveovcmnmzvbkixeduqohkutbelm'), "pkkkkkmmmmmvvvaabbccccccddeeeghijlnnooqqqrstuuuxxz")
//Test.assertEquals(customSort('qdmbfc', 'mruwsotaydpzeezpgmmcrhbwsihrbzryqheigapvaehnyjgvbvqrdxtqkczujzqngpdmrduffcokcnfcqqmqtwbquzssalydifip'), "qqqqqqqqdddddmmmmmbbbbffffcccccaaaaeeeegggghhhhiiiijjkklnnnooppppprrrrrrsssstttuuuuvvvwwwxyyyyzzzzzz")
//Test.assertEquals(customSort('iupmz', 'ixavjrmbwacgwvxcrauvcfcizfoxxabdyossqvzubqnpdzphbpurikqzqigjdrjsycpjlpstokvnijpcchcgtdfvqkltbdqidptvbsmwxeuqxyvcyzfiksnrrzbpmxdlhzieocmabqszqanfwjqmjb'), "iiiiiiiiuuuuppppppppmmmmmzzzzzzzzaaaaaabbbbbbbbbccccccccccdddddddeefffffggghhhjjjjjjjkkkklllnnnnooooqqqqqqqqqqrrrrrrsssssssttttvvvvvvvvwwwwxxxxxxxyyyy")
//Test.assertEquals(customSort('cjhfnu', 'uokmxyzaisghuqmxxhnntlhhasjwfkjutdoumlkwfusscjspauroihkxmsvamxuqronfszjmgnqjlwdkvndslsykrojvrienrhtrvtrmacuneouorbjceadhskonhbnghctqbqkgzqwuaegumugggilhjbzqcpgbpkfxlbeyinfdrzkvesxjnmyvrwbftuymtzrzzzlm'), "cccccjjjjjjjjjhhhhhhhhhhffffffnnnnnnnnnnnuuuuuuuuuuuuuaaaaaaabbbbbbbdddddeeeeeegggggggggiiiiikkkkkkkkkklllllllmmmmmmmmmmmoooooooopppqqqqqqqrrrrrrrrrrrssssssssssstttttttvvvvvvwwwwwxxxxxxxyyyyyzzzzzzzzz")
//Test.assertEquals(customSort('novctmix', 'hufppxpeisstygylmfwgfftwagpnkzqzcizntyejrvsfxxavvezdsddcdkgogkgkqkuexycbqzdicpxdqjdyncgmiatdbshrzcdfmxyanudnynwdhunfjqqccnncolkpcylkivehdaejlndoldmwbtibzcfsvpvmbyweviedadrqjnukmemjbwpefwhuonpdysivbeybmejzcjmswrpmgieffmpsfxkmmojklnqpelfrcaojcpouzkctajfwvgddcflfksscuwopqrjyqwghnwgblavhztnaeyqgebjodyte'), "nnnnnnnnnnnnnnnooooooooovvvvvvvvvvcccccccccccccccccttttttttmmmmmmmmmmmmmiiiiiiiiixxxxxxxaaaaaaaaaabbbbbbbbbbddddddddddddddddddddeeeeeeeeeeeeeeeeeffffffffffffffffgggggggggggghhhhhhhjjjjjjjjjjjjjkkkkkkkkkkkklllllllllppppppppppppppqqqqqqqqqqqrrrrrrsssssssssssuuuuuuuuwwwwwwwwwwwwyyyyyyyyyyyyyyzzzzzzzzzz")
//Test.assertEquals(customSort('thvuybo', 'ahharlbhljltdsfdnosejlfqjiagscjzaeohishxlclidyjwujukzjosfnwafvpmifsuuefnxgxjptayqqdidesuxbdbeljravainxgqddujcrwgawdqrhzoesozymihqktdkbhwmtxyoaawgilobdpfdissmmbomfzmogjnrbwrtwaxditdnivjfajpfuoozoyaplurcmodmtfvlnxmhhmygtpxgaxsgfpynppmjbklckosakqejqcmmhbaagpwryflomemizdlfcecslcqdtwyjjksavdbzimziqiloagxebqygirghyjmiaxzyoweadutohctkmwruxpnobfoglrksfxxyk'), "ttttttttttthhhhhhhhhhhhhvvvvvuuuuuuuuuuyyyyyyyyyyyyybbbbbbbbbbbbooooooooooooooooooooaaaaaaaaaaaaaaaaaaaaaaccccccccccdddddddddddddddddddeeeeeeeeeeeffffffffffffffffggggggggggggggiiiiiiiiiiiiiiiiijjjjjjjjjjjjjjjjjjkkkkkkkkkkllllllllllllllllmmmmmmmmmmmmmmmmmmmnnnnnnnnnpppppppppppqqqqqqqqqqqrrrrrrrrrrrssssssssssssssswwwwwwwwwwwwxxxxxxxxxxxxxxxzzzzzzzzzz")
//Test.assertEquals(customSort('pgjiyhkor', 'ctocsybgtvhbobisqhxicddaiykrlyfzegnmytpuomrwybvaqcuigzehqnizepqjyamnraqprghctzxdgufqrwjfskjfyonwtbqhtjnhtqzarwawjprdckbezvvolbtcrubnpvstaaiytphclyfzxrajvailyvhnxjrwarccndmefmygpkjlurgnrijyfglcicvfgysgptqlnuqfybscgjqbufiqzpixerftznkixownsmmoqhhcfuacwmahcuxgnvvawzktcjzyofmpxbgxrmjeabkknkbkterkaqdtrekmfoleyhikdcnwnkiyacxquhyvuwdrralwypvbwmhorsvoghtjnsavtbiefeif'), "pppppppppppggggggggggggggjjjjjjjjjjjjjiiiiiiiiiiiiiiiiyyyyyyyyyyyyyyyyyyyhhhhhhhhhhhhhhhkkkkkkkkkkkkkkooooooooooorrrrrrrrrrrrrrrrrrrraaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbcccccccccccccccccccddddddddeeeeeeeeeeeefffffffffffffffflllllllllmmmmmmmmmmmmnnnnnnnnnnnnnnnnnqqqqqqqqqqqqqqqssssssssstttttttttttttttttuuuuuuuuuuuvvvvvvvvvvvvvvwwwwwwwwwwwwwxxxxxxxxxxzzzzzzzzzzz")
//Test.assertEquals(customSort('jxrqklbgut', 'qdjufpwzuttywfbcviuyreqgmwlnejsgbapgbybohkyflajcmhikdpzszwbsmfgcbhmtxwofgjjkvcednyyphusnzvahpeaoqsshhgjslpybwzambbuwbkpnkrnpmetqfuytmhbrousmsuuinvnrlmerfdunixycgmtslmrervxmsekkrdcznyykghhdzmhwnzycqxwzolqnswwmukpxikuklwqqhkgxlknqjtpigvoivwnymxxjmikvklafgkibreppwwkwffxixgjxheyornboevxnqslwpxjeaagqvcdhytirdxyaypghxbqpodwrrgyovsgcjrealijagpeiklkbzlpskkratjnoowdpunvfdmgjsitasevwjxrnyjoexhhgrgizoyszuzosaaxugpaopkpqrpkxbchygmovixndcggrvnjxazuphbztcumvntlqrxihojlkiwydtabdnhxjedbnircuwzbbikguyjucwuqwvohb'), "jjjjjjjjjjjjjjjjjjjjxxxxxxxxxxxxxxxxxxxxxxxrrrrrrrrrrrrrrrrrrrrrqqqqqqqqqqqqqqqkkkkkkkkkkkkkkkkkkkkkkkkklllllllllllllllbbbbbbbbbbbbbbbbbbbbbbggggggggggggggggggggggggguuuuuuuuuuuuuuuuuuuuutttttttttttttaaaaaaaaaaaaaaaaaaccccccccccccccdddddddddddddddeeeeeeeeeeeeeeeeefffffffffffhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiimmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnooooooooooooooooooopppppppppppppppppppppppsssssssssssssssssssvvvvvvvvvvvvvvvvvwwwwwwwwwwwwwwwwwwwwwwwwyyyyyyyyyyyyyyyyyyyyyyyzzzzzzzzzzzzzzzz")
//Test.assertEquals(customSort('vupdsfgrxkob', 'qqxaqgcnyxpskszwdgcfziyhamuursywnpyagjeffyiiduegqxyjvjgbifixwlrcdhhlnviurfuwqzdvoxqlrxhzncaovazhsiovnutkroznckeuawhlamsvvpmrvpdnovzmtrnyohgybsemqzcxlcwryqfeseqxkqqdqqhholzssrqsrnswqgqteajockivqqkjmmafdkswbduaelhqqbmslrygrudswaziadrdwfmicnmdtmrwgxmuxipmnjbhdobbknepdewivqwnfdxnkzdzdtgcbafvjgaolbptzfjexjkbgrsajmcgyeivgneyyltfgaeqgzzmtfkkokfhwdhvmhhemcnfngjgjupjgcwtmtzuuvsexrhbzqxlfwfyeswevyetwpwmfvmhwrvgjxbgkarinrqavoeeujkthnoimatblovywbkjkwqijkkxizlrpqqsmqwaitwrgmrxcaipshowtkmecmigwufqsqxbjdyntvcpgfqcbmnjlvvftecppcdfecsbkulqozslpybgzfuyjlfldokvrkeqikxjpszdtoebwwekbfemrxlbcqsvpopzqabixdrhfeyiqtkh'), "vvvvvvvvvvvvvvvvvvvvvvvvvuuuuuuuuuuuuuuuuuppppppppppppppppppdddddddddddddddddddddddssssssssssssssssssssssssffffffffffffffffffffffffffgggggggggggggggggggggggggrrrrrrrrrrrrrrrrrrrrrrrrrxxxxxxxxxxxxxxxxxxxxxkkkkkkkkkkkkkkkkkkkkkkkkkkooooooooooooooooooobbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeehhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiiijjjjjjjjjjjjjjjjjjjjjlllllllllllllllllllmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqtttttttttttttttttttwwwwwwwwwwwwwwwwwwwwwwwwwwwwyyyyyyyyyyyyyyyyyyyyzzzzzzzzzzzzzzzzzzzzzz")
//Test.assertEquals(customSort('opdzsivgarylwut', 'alvvrdrpodmnqtlvmzbacxvxdmewsianihbdhnbiwhdzxnpkzvanawjkcqszvlslhxuanzdswpfvutldiwvskctbxzapqjvrfnymebzvqmvprtrmjgngzwpcdxmjkvbfuzyjrlvyizvbqcffjizgcyqkggzocifneiwkcwvdxzhdrjcrnrjdugnhzfpnmoxbczbqrupyyrumlbetwzaualwykciqxllxuermbdphxjwprprvmehowzxtyagrlezarcxwywgezsxxnwxdrmwoaakksfxipklmghcxltsncwqwnivztepxgjnwhizufgfakswgcqykysqiucwveponhvunirxwtmafbfrugnntjhadqggnerfkxfpipxpxeruauaaexvzxsonopkxeaxmachfxjjdtoxutrqvgydvevtjwltkxeiggxkhbecsqigqfqjqazfncbgxalbzsxpksvlvtqqwcvnqpvnqvfqqnufdojpjomsbpalfnwbrtdvhetvxdjpnxoftlplthcdfgzlzqsdooiacopqsjumjmnbqeuspusrpbpxnxgfxnqdlstxmfczqburziytvkcxdskkzkrisxycrtlpaathgiligmgywbnmynkumhmovagynbrlvljubifkwivrqhsykamixhhvdfngauifhwpkziutxqoqngsjbjcklrultvjshkmpmlchflzpgmvgrzkqsrxmicikvbgbzmmypzzbcndxjpqejhhktvngzqtlwiuhqjnanqqpgnlfvogchjzsqwtsdwljqvjqazhpuhxyhwzpofembzxdofktxeozijzfocewsojmrpgcamplqfsdxbognpdtkxpogqanlvzmicgfrnkgwwwvsxfpaywesmysmqqsny'), "oooooooooooooooooooooooooppppppppppppppppppppppppppppppppppppppppppdddddddddddddddddddddddddddddzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzssssssssssssssssssssssssssssssssssiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiivvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvgggggggggggggggggggggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrryyyyyyyyyyyyyyyyyyyyyyyllllllllllllllllllllllllllllllllllwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwuuuuuuuuuuuuuuuuuuuuuuuuuuuttttttttttttttttttttttttttttttbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
//​
//// Author: Evgeny SH

