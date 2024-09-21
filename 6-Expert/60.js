

//title: Chain Reaction (Part #1)

//tags: arrays,games,validation

//url: https://edabit.com/challenge/GLpvecbj2NpEuRT7f

//Description:
//In this challenge you will be given a rectangular array representing a "map" with three types of spaces:
//"+" bombs: When activated, their explosion activates any bombs directly above, below, left, or right of the "+" bomb.
//"x" bombs: When activated, their explosion activates any bombs placed in any of the four diagonal directions next to the "x" bomb.
//Empty spaces "0".
//Consider the grid:
//[
//  ["+", "+", "0", "x", "x", "+", "0"],
//  ["0", "+", "+", "x", "0", "+", "x"]
//]
//If the top left "+" bomb explodes, the resulting chain reaction will blow up bombs in the order given by the numbers below:
//[
//  ["1", "2", "0", "x", "6", "8", "0"],
//  ["0", "3", "4", "5", "0", "7", "8"]
//]
//Note that there are two 8's since two of the bombs explode at the same time. Also, note that one of the "x" bombs in the top row does not explode.
//Write a function that determines if the chain reaction started when the top left bomb explodes destroys all bombs or not.
//Examples
//allExplode([
//  ["+", "+", "+", "+", "+", "+", "x"]
//]) ➞ true
//
//allExplode([
//  ["+", "+", "+", "+", "+", "0", "x"]
//]) ➞ false
//
//allExplode([
//  ["+", "+", "0", "x", "x", "+", "0"],
//  ["0", "+", "+", "x", "0", "+", "x"]
//]) ➞ false
//
//allExplode([
//  ["x", "0", "0"],
//  ["0", "0", "0"],
//  ["0", "0", "x"]
//]) ➞ false
//
//allExplode([
//  ["x", "0", "x"],
//  ["0", "x", "0"],
//  ["x", "0", "x"]
//]) ➞ true
//Notes
//Both "+" and "x" bombs have an "explosion range" of 1.
//Part #2 can be found here.

//code area
///////////////////////////////////////////////////////////////////////////
// const allExplode = arr => {



// }


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(allExplode([
//  ["+", "+", "+", "+", "+", "+", "x"]
// ]), true)

// Test.assertEquals(allExplode([
//  ["+", "+", "+", "+", "+", "0", "x"]
// ]), false)

// Test.assertEquals(allExplode([
//  ["+", "+", "0", "x", "x", "+", "0"],
//  ["0", "+", "+", "x", "0", "+", "x"]
// ]), false)

// Test.assertEquals(allExplode([
//  ["x", "0", "0"],
//  ["0", "0", "0"],
//  ["0", "0", "x"]
// ]), false)

// Test.assertEquals(allExplode([
//  ["x", "0", "x"],
//  ["0", "x", "0"],
//  ["x", "0", "x"]
// ]), true)


//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Jumbled Equations

//tags: arrays,loops,sorting

//url: https://edabit.com/challenge/RZH5DvCJdtTEdFAqF

//Description:
//In this challenge, you are given an array of one or more arithmetic operators and a array of numbers. Take each of the operators and mate it with any three separate numbers in the array to create a valid equation. Your answer should contain all possible equations.
//Examples
//jumbled([["+"], [2, 1, 3]]) ➞ ["1+2=3"]
//
//jumbled(["+", "*"], [36, 28, 71, 4, 12, 7, 11]]) ➞ ["4*7=28", "4+7=11"]
//
//jumbled([["+", "-", "*", "**"], [1, 2, 3, 0]]) ➞ ["1+2=3", "2**0=1", "3**0=1", "3-1=2", "3-2=1"]
//// Each equation must contain 3 discrete numbers from the array.
//// "1+0=1" or "3-3=0" are not allowed.
//Notes
//For operators with commutative properties, return only the equation with the smallest term first. "4*6=24" not "6*4=24".
//Return your answer as an array sorted lexicographically.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertSimilar(jumbled([['+'],[2,1,3]]),['1+2=3'])
//Test.assertSimilar(jumbled([['+','-','*','**'],[1,2,3,0]]),['1+2=3', '2**0=1', '3**0=1', '3-1=2', '3-2=1'])
//Test.assertSimilar(jumbled([['+','*'],[36,28,71,4,12,7,11]]),['4*7=28', '4+7=11'])
//Test.assertSimilar(jumbled([['+','-','*','/'],[10,1.5,20,2.5,30,3.5]]),['1.5*20=30', '10+20=30', '30-10=20', '30-20=10', '30/1.5=20', '30/20=1.5'])
//Test.assertSimilar(jumbled([['+','-','*','/'],[3,11,23,47,59,89,41,2]]),[])
//Test.assertSimilar(jumbled([['%'],[34,67,18,14,69,1,5,19]]),['19%14=5', '19%18=1', '69%34=1'])
//Test.assertSimilar(jumbled([['+','-','*','/'],[312,145,13,65,11,24]]),['11+13=24', '13*24=312', '24-11=13', '24-13=11', '312/13=24', '312/24=13'])
//Test.assertSimilar(jumbled([['&','<<'],[3,168,5,21,79]]),['21&79=5', '21<<3=168'])
//Test.assertSimilar(jumbled([['|','^','&'],[2,67,18,15,99,33]]),['15&18=2', '18&67=2', '18&99=2', '33|67=99'])
//Test.assertSimilar(jumbled([['<<','>>'],[2,128,6,16,64]]),['128>>6=2', '16<<2=64', '2<<6=128', '64>>2=16'])
//Test.assertSimilar(jumbled([['**','|'],[1,2,3,4,16]]),['1|2=3', '2**4=16', '4**2=16'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Inclusion of a Shuffled String into Another String

//tags: algorithms,conditions,loops,strings

//url: https://edabit.com/challenge/Av2jYuSv36Bwn6GPM

//Description:
//The function is given two strings s1 and s2. Determine if one of the permutations of characters of s1 is a substring of s2, return true / false.
//Examples
//checkInclusion("ab", "edabitbooo") ➞ true
//// "ab" is in s2.
//
//checkInclusion("ab", "edaoboat") ➞ false
//// neither "ab" or "ba" is in s2.
//
//checkInclusion("adc", "dcda") ➞ true
//// "cda" is a permutation of "adc" and it is in s2.
//
//checkInclusion("sgyuws", "oldqwqdmlvsguswyfbj") ➞ true
//// "sguswy" is a permutation of s1 and it is in s2.
//Notes
//All characters in both strings are lowercase letters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actualParam, expectedParam] = [
//  [
//    ["ab", "edabitbooo"],
//    ["ab", "edaoboat"],
//    ["adc", "dcda"],
//    ["sgyuws", "oldqwqdmlvsguswyfbj"],
//    ["uauqkavvk", "stbwkbgrgkkazdqdwivguyr"],
//    ["jsrsvticzizxdgttvevtdjv", "evdfabkqornrvfodhncarywkdpkpcbqiehbsanbticvvdrsxtejzjvttiztvsdg"],
//    ["vxawvaaxxmvwmusvactvua", "dfnyutauktxttggircfonqxkntdarbcfqjfopiqmumkkpcwqclamojxfwuamslttxaqnuzptvaazguwzazopxspmiaemysrncosh"],
//    ["ftoraoaazamnoarovhkcvkczmrohaumffcqz", "snclfgtmqfsphufzrovsxobssmftqycxutinbfazvgvmafxlegduffbtcpygelegcwgfslmmyiacejgbhoyjnhdcxppywusjbpcvvvmaaahmonoocuofqazramzkrrkcoazcfhtftfmyx"],
//    ["zstwsnvvifghh", "chdtpmrqkdpywxovzshwankvebmqedsysxkmfuafxllvktzodrfrfwibbbsqaszotvvcoycxjghmqkihutrfyfcixlphikkvnqjyywvtlcugkcdwyksvlzumjkdzhjvyagnmajwdfhegvcnaypnaeeflrfzmitdistyrvmxagktuemzzjhym"],
//    ["rtwufneitnsuowucpcoiuzgnwpagruzkugxnnogecvesbppamryvbvgncrggugerinzmmeeemzrp", "fugzgcmlwxbrunjzabeanghesyvrotgzeqmeibxerewvnisckwwyahjbopbapduaxjvaohszzmcnwsharwuknwceqmyotpdaidikucpqenvrrpaboicjzjclwbtltightgykvcjcrziamrlqtdvvpfaaalcdgyrshqdaicwzlxdeqbxvrbrghawapevqdbocfhcrsoujyeafyarwtizmsadqrczckndmiknlmbagkcnggbqqlzrneacrtjeuieguzusrebpugtubiinefgurevgwnxnoeoovrrpcgrczmsamgpacknpwecmwynvzugtrpnmzng"],
//    ["hdvphgensnvognqnzcdqiefconziskijqweeppgwogmzshnjdjlqpljljtuoeishidsnpgietd", "xwvjqhgswrypssjiixvworjdcaxkhootnniziuujnmpndvygkkhrpjzdmdgfjhyzxivoqxbxdouaspbivfohijawhrgpnljitpryqjhiuhirikrwlcsakffqmpczrffsnoogsuishwgkypixflecsexmqxqaeizwicdhxdifaeapjrhqtijbtagswkjtfgouueqkegqzqjwgxlnvagfolrukzspurlxsllcddosllwmbbekjnexqvtwqlelvgejvljdjpzrggzywxhdrbagibhxbzinyzwnuuhdndhnbjpumbxvomupemqxjcbbbzznmdgxrmvnmnvlautbtdityauwprnuouplbbhmttgmxarykfsnpobgemlzdpazmhadlulfaktvibaahwvzlvixiteclnbkvbnjajjrdvtjgztmcjknaphdswxpzibjgmqtqthaxodrsjaacypnomqshkbdtervkfafeudrhrwcltdkrtpphtzfc"],
//    ["rlilbomorwrjgqlgrydhdiunnobdgeyrhnoblmqihuhgeeudjmruwfzgfeernmmrzzrprwbnydmdbrnydibdxnxbhxnypap", "aaeozyvningxhhwaoirbfhiczunqhrrzgfdwmyhuqvqyaewodegrftjdcjsnmlaykfzcsrxzusucksdmfjusoovokssppsqnzzdewobxortxthgabrxopplqfpymduvrskgcpcrocugfnpnxecvhzpywfnieesuryumwmruufqqvwipuopbdnoghdcbniissecjbkmiecyyciywprxyyazeuknjrphnpuiivtctboafqwvfwtsmtmthununfvhpnhvnigarayggwysgnwinercbsymajzexopvxeqrqkabguhykzmypsmtmtsshubykkdnztfafdrukinterszldqdclxembeqcgcqzgsfuzehpvyitprysxybhulbwzpeuhwyrhwjhvaxcsbcrkrebdzjbelaadzyaoxkadzbnqpfdvjjwjekgagnnhlwavorurqsdwmcqnqbygtqpyxeryhlzkemlfxznjzkbkrefdaxkjmxqdccnrzdwhinnblbnllsblcoynpembwupxiiruglqxveexgvluszwexaxbepfuglopwvjdnfolvfwrelrumlkgftlwiarsjzalowrzgemrteulxanlihvybvbyszswqholqqqlfozxoqxdzowljiwixgofnsqetvvdenjenqugvebwnhomqjkdzarqlrqozifinltvrmrretfblavstdzugmuvbxppdlofsqxqzbumgcliwjvhfodnfduqofvnvvayxwgiqsbmeygleasmgswehekavanwqloqmdlplowtvdutmsroubdzkqsrfpjtfglnucasqmmadmjdeiiydeufomslflihtdybubynezdmyeywualbdzshbwctccayaxrmfahtlyidjgptinzzmbpfsxbuxrvmapxucbzslqsrjtrmeepiirxtwtmvmfjebrwafuuopzirsksqrijsfyogmqwredovlfwlyrejrisrpfgtvgyekcyksdreerjdlurbrgmndhxnilzifbdoadxdrgmobwnnrrymwmolhjbngrhbnxdyodnmieepguberypwzzrqqrudpbyurleghhinymfc"],
//    ["jiiscqsppxbyhrxglggbcravrrarlmktrctbmshr", "ezvfpopgfdhiwhgwhefequhodrlfjbteelbakspsbvhittrxrvajvdrbixadlvbgizpzbibfeavhyqqddmzxhmtpetwoshvdrgmlexhvvrkugvvvmypjmrujgkzampvqufiicqlypsdkamymplvenacqwpezfcwiocvuprfvyhnqwyywiqhdktfldnakmkggbgceyaxdcmxzrtcicukxqwzkztivppqkudpqmfxhtcuewsvsfyikghafntgmpyoexhjdcmbxksrnbcairljswjmrhqbleffdpgpivnrewmmoxcepyasmxrnpvqojevhbmxcwhbawpwacgsaamerwhfogwqyekzvjhvfehonijenydqietylyzrtnqepqodzxbogzzszqcblvvvarqopphsxnvcoukpxnzicubeqrtblehjnrburlxajxjjsgygihuxjozccejlofevqywqjgxkytmpakgrhijtenflvgnscbiwyxuendrhmdgscbkchdjckspfynihrsvruiyodoinixrsklcyhbckjjbxylqzvhlmkpoyuawhzuechvnquzkamouydszofnbpsttybzdxoynjcgdiynlhlcizriokxktrrxabypvarsrwxpwlcuqtlkmersgkyframrpiqvhlqrrdphjdkwgplycnuhpeogiepzeeyougolrqjsdhruqyxhvffgjozyjtqutukfsqwofewdiijrcjhxushclqmnxowpldydvtelkixzavlpcbgojkfohraiitnwwchtptqvqzehfgvbcmnoranjemwfwjqhotvaajvzcdblujqatcpoffcrilwmbhshdpgemcdjkurrjlbncivjxfufnencjmxxmzikaspjsahhccaesavesyannkklosgmzuupcoetrzdtwesetviiyvmusfsruqfhnabewnrnlbblumkfzuxdsmuztwwyrbyjtsvzxkuyhzsuwfebojpwlospsecxafryutfkdbrhcdzvmmpraojghfljbpkhwqelefhnexxmkddpaxdzpsznihxovozqutwoenfoafszlfmjjcqykoaiigawashcuueupvrlugrolrfkosvetzazjlbjfacweuldtnakdseoqmtgthbpuluyuaweanqjmsnzeqehiwjgopijcnsirfwmoowkgatgzwtlratopiqyajbofegdwoilevoytnjnvsxpoazudnodeogyoyfakqtjrfpgcinvcxohuoavbkqiehnyppqdgsadutqddfkbryefpelwwogogxjqhpdwlkbvwkndtquooawkciaxlnbrlssbhhjflsmjtfnckrueyjvmvwpkyabwlmjditzzxjqtbwclbuthwnncplvqnrnoqqmfpvotagnhmzqukyrguricipxankjrkqvymmjtygpxafkzwqrbaigxcmyegjtsfynhgtpwhfryhehdxwjhguybkopgbkggrgkwp"],
//    ["rlwhtlxxuzktxnsudoyfwaxeduzgdvmmwuqbkqwowtpbcuwuukvddkzdshojuoykhpomtihbxoyxmphvfbbiculojdqtwxerevxylcidwtwvoyjdxeetxcszzsnohyzlypepaubqvfziebbo", "tbotfqsqkhbvecgasaibpkalymvntwerwqpqypxqublxrxrclrgweqhiqsvtwuldztohdacudayauziznssrmhdwyaplehmqhdplbzxtcoelekjtiresopvryupblkqucxkgzwqlxyvsaeoobqwjlxbwgazpntfatznnnfchgfpaoceiimhqyupdwlzgmhqlpbwejluqemydarebpqlymtyfauspraqhvfzmeshiwtzreerkcvqqbdwusfmudlzvdzfbemowajosufdfgtasaipcfcjngcobrgnxvcnjqgqacycjlfrwnvjxppuumxwzlvedgcbkoszmfnnrqsvttytzekpotfvxvoberorbupcxdwkjyuxfiqwvncokjasewdwrxtpmiyxvijnlflivmchdoidxfosymbtetuyhmvlchhkikhxcfbwllwvhbltkknyaxdosdcjiynnipxghgodzkeuoaxdypnasgjxfxjptyoeewronygblrlekejwyorrwpspvdhxslhhmyctaratcpkccazcquhmutjqxwhtqmlvnzhdtpexwinfcrolwmbabbzntqsibxqgobmkrfdckhnlbcfxrxuretthufpvjchfoqgfuchcoeojxruynfuwsqbxhxbflbmildtaxruizonafdahtmpjaasndzjvkaxphbablxszmphxssueaghsbednwygfijenhwobumpxvjrykocpccsstevtsphzuridpfyouqktnweystkllrfvgibrdvnuaegjehmvpejxyynvvnchaeivqhztdfynwxstmaqlrabwmpbtoasrusufnoyalyxatixszbnkqtyfdwumvoqcgzoyynpaamhawidezxdflyfusmsmxuxmkzzncxewjpphsxjewmhoqdxduobrisjhyrgcdpdkznekcxpfpjnbtxmbzjucdqszvqroafipomdelfhspomrllocengviscgmtcyqigaxeoxavnopemypjqppxcmawxpoxxifjrdiwlxxvcpoeuwdylpinbmbbyytacviirujccibqnixivliglcbikxrbblvtekpuakotzcuiojpjponjyknmhtebsggxxjzlgbauouxlqeukaueoijqgyvgckqcxztcrpsitfkpfnuqtntfxylrddpfnikrcmafxzuwfkyliwkfkhrfvcubkrlrgzobiavivetnxlyxkvpjlhtvhkrgxfooitwabmriblsdfehyvjptmxhrkgykjjqjhvyzwyzmpdhibtrqlnzjfistmvhqrmgwdaybnaidnpwsevioruknsjatrhyfjjjsflfzdogpzysnxzwmlzbwrbjouoblolxdidgrnwyaepkuyufabhouknccysklmrkczuswctcfyinxeituqlpgksdmpyttvxnkjietsyqoiiyxhzhjlqruzemypxyugirahzgvjiufeuzobczuknexclqlqbvderqxmdwxnkqxpjklbfiteetllggbicqdbscgqxixkttgrogltdlclduskmfljadhlcdencmoejyaumeoklvcriitkgblwmitjdnbgjmhiusrxwlksnpmgyeijvmyouiejwtgrsihuundyolqbrwhkhphvelwdkjzfprgogpaosnhpibdbqryjtebcnnhizfidlkeautegtefycnvsvpjipurksejomjynqymfmpyvgydepumpvtymqjhqdjqvgrbwqrcbkmmtwtxmevdupdmxydysiwchikorxhzrzqlyqekbfgrxthkixrqidxdfusyqsagapkkprrdruomlqjfjykcxfmjzfnurvhxriprevdkoaogddtzoopkbrmabcgufywxsodvyxmgkrqysjpoyewhoydhbilsuctvgcgcfgykzwbebbrswcwusgxzpajifiwkxwcvgvwcbeuumfxavgtljnhgkshefdwqdfmshscjltckbwwgrpqjfibkemtchckmejexcpjpimhgybhjopafbqrkbwctjoiugpmaqbwyyuhpzueiumkdlhpocbxmfaawzwevdmvjqiyoarxjbtmoltwdeyzaofnjcakrnrszoiriqhljoxoycjnltmqpdklnhaitiuzsvkfjzevsfytaznxhifctrvvapyqluzcyxtxyskfnokccuurficpjgrnsvljwjcwxdxqphnbhyatwccwzvtomucgplfxhileibbwbuidbngdochkydnmkqcwsdbbyinhvfvbvlzpvsakqbptibbainzrjnntenlpgcrgrtvpptopazfeqffamvgkqazidxizwbvrajzyadzqnkuughddwbutgivviwyfqveacwqpwlzwtdoxpftrwvjlvkghdpqxnvmzjchtqymnswdrmopdnnsgqhexcimjfiozdarpezzdnqocdfsqqbtputxbshraiyleyjxiksbwaiklwjirfagpqwplpxbtwwvwwswyomtmbsmgbfqcjpkgmyotbcmbgkhyjvjzuvqqvmjjigojauvvdqxmvkfemaisriyxuzhrpagmhqqikprqouqvrsmnvwrixpczrlxqbjaplosnwwcuxdqlmimknalpimcdiypmyzallzraoquohgfinusqpinpxlaugzudlfselipnaacjueahwsyhwaizevhbzzdacxacvkpzsnfstjpfgdmixwtvzdrumnqxfrykkzmmdffkijkfincqhazapzwbkqbzagurvephgzqrfiklbivnvckduipfbxveceendedylzxzlacpxjkgeyfyyyoezrimmfwtawvtfqunxhribvqsdeioexmddskbocuoyfixtjgiwhncjepfmrzzjnmujxqvmawzgxiwrcodotyflqjngpnnxwamoysnlwvjkoziqtvlsexxnvbslntoztrrsndrsoygnsxfxfsaueeiuyyihhpkxqaippvdtjfxtrlbndeiedbmxkoqdtufuojyowfnvhpsxpbmszyduyllryxfckzwhmsqlxthlktccexyvbwjxdxtowkoauwooxepnxqzquodzvbuzlwwduagvcpmbuztzhvxudheyiiohbskvuttieejwoyrbwbdp"],
//    ["zuxvzlbqqnxtybmvzvlyddpbjzcybqbjcvayzzybiaulgxljgdowrzqonzcwnnndedxwcmuynfpzdbvzmncsqvavvbdh", "azmcibomfyttfjistwgipmwywejctzayolydjzjpvatcrqnftfljfrdmrsnfehqveksnbdvhvuwkrjhymrxppknuwtxvyvaycfbqhmmwhrhbozodjxbmlwhcjomlvbfttwkmivjhzytsqjaqndwzjibdqsocltgclrefpyyvrpazlyptchkeahzfoicpoxdzxkfflvulrgstevcgijxgybgrllmzsckhrzktqxpsrxfugvkcctflfdvvappnxzgbgmexvjjkqsxgeyzexqajjbcjfxyhquaedzunkwakxfunqsyixgfecsexrtrqfgtswylwrdgcgeonlmbdscmseomtzzkhxxnuoblbkrujugtoibernphnodifggdjnerdcmwevjompjchwtlsrhazaktrpfhtmbineroncfijgfzswtaxyilyfnpapopzbioznnypmqpezqplitbhjoopecdugtcwymeeuraimdhojcseemtdxgdmtodawkoroiomkdszncwwipkowanmmdphwwggtkouckupeaqfyuhcumxtvpgyagcjbpfrrgvjlnrmfknuzuzrjratxweklnsckknloujdcmrzxgnkwtcpgfkjjtkawsbccjueptdhszzqvukisfghxirkzvgoudolvbvdhitvlbrrgomyhcqpgjlgmcjvomqwscuwwjvwbvmmwyifvdccvqachfjteoltsoeogcxdkaoncydvcoijsxqkhbegyhaxthsfycszgwtwfwjbufronmniexhntjxvgthvppmtszyfhzvrzoivhxgcqhtxqnffelieiowtfbxhbhzvqzgymnphtxisjjanmtzkphytbangjwanuefisftmahurfwlziruzvhogddcgiclrkvlzvfimtrlphpemdvqgojactgjskachgjximgmtbgnwccuymqydgocoqajcegratvyumrebkumfsvvpenjqzrburwhmulznwdytzkihiuwhmwxvlophudztkzpyqtcismwnyjvawfkgrmbjimsqimqubtegxueevwutaghvzybfnmueljxfswkfjrkfitrczjytjhwcpcvubbgmpktyzflcksijsbtjrzdryiajodnbgtiojakrlwibtbsozipjviqbmveeyuzxlbbstxfezsnqwjrwyoucqhxowqueuyvztuwarkhnyotpsrrvexxmebkmsnypxqaouhjlggsvrsxfbyfhtbkkxmlewfwwaxjcfaphdkntvljcttpdegilfxhwrsoedzbfnchzelneemnjgtfhyxhynwxejxfdcuboovunbwpepytffhijdlytbtrtqshrzlsdapmzxljyshtnfxpiqvfzlxjwfpyimzpbuvhfnotjuuuwaglcvxeywjelawwmdisfaephvylyufzvgnvapqkrchylguedwelrmklryjxmmijokofyhazlafnbjojbnwdgubwumoaoumlpfsnqhhmaklizbvcaruozcfclmzfixnjkfyjuoscuvwtjcizkgdooxauhjjvkexytdwxgbxvptqgzrlryaqeehslcdfkhxsfpvidvzwirebuajmvoxspkbwkcoovuyxrntymgmpwoozddrjqlhvwaeigmbcdbzrxjtcfcwgqwjdprynqmonshgtuodhakwtbllqbhzutjsqakeqdfcpzjvbicfsizxrkvzroaebmrqlhwedufsnpzfswlgqwcpdfvacekybbtpeongdahctdwsmblhoqowhqocvglyujzxfurzfwcegfvrdwagaqetiizjjoqvlaqcgpeskzeuhpiqidaflwbkcrczjszrsioonphwuidyhjfmdwmssuytvcouxldrfgbayivmptouycdiueaimwgafmyntdnmxbrgdalxbijcpstszdaofaisraeosekoghtdiudfjhqchnywjewyqfsqxyqsbvxzqizyszpvfjgaovfszptfbyoylpdptcczuhsvuqkxsiemvsrqhpbglndmtpoecmnlczrorcksripcswikwuowuqrywuuoctvhnjwweavqrigwcmiddjccmqzwdptidvstozzrecyzstjgteexqssyxciukgoasunpjdfqxifjkggwleqlivgvveclazjyeuhchgunlnvtkyvzczdvketlxebkqenvlplrrecbntxdbwdydqcofjbalfeodzfoyfkjfteqxfgjmiehxmtclfyeuuvxraquzbnmwmojdthhcabjckpeydejezekgiaqjtchebpggrbjufwekmujdkrxctgdqxtdijlmaadngbsqdpyanpgopazsecgudkpptrfdtubxjkhaiwexbdktuwmwfmyuccvgkkkhzsupofmktccynjdjbamrlysbxowkgicbmfikuekrkoglmvfwsctmibdikdzbtgmfowcjxcynzgdstziufkwroccaaczfekkinipppkoobkirnrgdwodtanqnrucmfbhhpjnuggaemyckkdlahtqifzjqtdgpfjokvnqcflpxquloooztelwhfwqympedxgubmiqgplygyufwdwwybxboqwxbiizgvdxhiigeemrjywaqubwvlxelwisvsrsrqgrimkfedsllsxhtbibeikypwxswxnbjhxjbuqbqtybnunaiwwfptsavfdxczfkitqncmvyxxzctnekfmsvpjlozgicsahdnfljayijybmzpadeozoqsacecmrmhidmsnerkqhoenehntfvhekozxqryikydpzxtosjdvmvfsvepnlbmisqlszpbojxxftwxgqumqfuztqboofmdnmyaczwjnndgfvlpaywvaxaqqwiclhzmgigozttswqpymipuiaewpalpnfoftzncmhqgvczeqecoyfzastcwdodcqtjflfrvrkysrvhaunyjlgszehjiwmuannnprrdcfxhyrfqahoirxiowpkdilevbsyyethzpdexllymfjatufwfadhgovmnbtvrdwlqdtowjuvdsnbwoiswykczjfzcgyzukhnnnjpskhwfnbkyzwbgzdgjouipvelixhrbzmforqoibiyqhygaoaalsfhvifzxovakcwxywiwvcgvujrmpmkdldzfoevedioqdwealrsksgohykbtykxwbhydvddxyqhvsixxxriaooolmwqnwdofiqueyrdnfsgmiwtfrewoarxqsqttdmbqlsebbzcuckcavbyuebdxpwbwhgdkvnoxbwhiolkbizhsbefbahydhzzrzbwvivxhuamtfhmfwxwdfltokwtbzeofoowehsepwfqiyjbywluftemjbcqifjbyluoypkmopkylhtvebqsmqbklwzyldxwuylzyfwfdrqfjyfxregokpjuicdgcuevvllgbkjflosibxslidudgtwrzznsqyxsovxebdafxpjrlmvhbbybocfvsbzwhfrujsjuopfmwbykqdxpowfqsekbpaojksaietlnqebxxlmkcmxtrilzwdadbxstjyvbfaufysfhvcgwxxdhqqautjyrofvytlqjlifaedityquerbhkyikmxeqegvmhtudizonynjkwwgalscrwwjmlimsgumdxvqgkkmfyargnnvcqwrdvefuozazoimpofxijnwxeckmtlgsdccadbqokhqhokziauyaznafewprtaebwvdajjuhoietvecswmyofxcskxpiqrdtejsvjkmeowiwqrtascobjkxmhdcqgqpqrfgxvnuexvscdhvornqvlxtggtjmljxznpgmjaxjnxiikefgarvbuhkrhaeiwbvvcxmgktmdqpmsgzarhqbedytljvldetzkytkogdnfxkbdapfzgsnmopvsepgnxbjbvgibnosvtkprdkuhzurbfaryinwtqszjrotxjwobfyinooqmprznneyntqpibavlpshylxjfuhstydepjhgdrlekogaianycixhmvwdfpsypeozbuxudpibbgtmmdotimeytnqmzpelcqnpexdmywegflgutyujgrvnszfprpjxxhnyedafqqfrkyftiqwkodqwnfpgtzrkebncohthifsajpxthrcbqbvbiqarnujvbjdztwrszvdojzqrxwkdjxxjzvbsnchgdwabigmepxzelgqujktgpykwyfkyemtnlfrvkxjedipdvjnzdtgkylzwqpaskejhxtyrktjwwmeuenqmhxjagkxbrmpwqsjndgobjsafzxwrydiajabfowrcdgybmvuosysfrilympbqrgwgdzwjfxwdqdbpdkbzxqikdbztgbrmphaeujmjrbfvwxaxabllntmdgqidjnqfqyojpxcxtmcfljwobzsgfsrrzfeqrzlzppjvyhrarqgmrwqqvtkqxxucfrpyeledveeaepppjrrxtqusbznrhapmhdtuweifofghketszmlxnzilxjhpqawjnnjlsvajqqtmaowhffigruyyhlnfbefcizoxigjqpmbejinbqcasbieaeofxfhmlyhatqvkuodmhclmrqqnpkygporutazsyupgocbzmwmwtyqicltpuysvwortlrncubkzolxigenatctuagrvroipnhecgrtdirhmtflkrskbqyrevrmdcxdpxlpzjxclunqeuedfbdbfrgjcnsyjsfllcpucazdogijiizfcaqwzkobugilijlmknbjrznioxxjupdrqrwbgfxhjlufsfefirnwuwjwtvrcfwtyphkkiigpgdcyddmvkyuwdylipxukgzytmppoqvdjaunaqeijtjjwdsioeeegybjmsjhkwvrymsretdakttbahyxiqpamshqqjzygkmdzgselvqmdxvuzurasvbnghyyjyvdbhisnbgqdwwjlslysqmnrdkhaqvboxsjghhzjvkpelvozuf"],
//    ["quwvyxvqpmvhyxevmpvckyqmpgibegvyulrkaauyppbqmrnbgqpaxwpbfrqveyfpnrmckppzoqdmnpyfgkwqoxrmgusvhpmbvrooicbigvvrzqlakpyqguvimmmylgtpbsnnbzwymphomgporqvqkuyylpbbkqo", "vdhjhtdlkozdmhfdzdbdfkwzfrqyqhbacvdkcutwamexulmvcwdqisomhzfkqnhclqwzeovaoqttlzhmbpqljndslclnsxzoscmrnruuhrzcbecgmggfctuadbqamufsarfwhzhwcclhtndglwbldcnaoklvqapxndinmtvkjkwrkehjitwbbkxpsgqcmsryfvvbocapzbvqehrcquskzwlhfysehtvpuxrzhmvrszjaoitezhmpxwsivagtnfqimvhakagawefrcqyzxlsdsjvflaarjaxbmafrndaogrbknpdkltwsgwcpccwivhjwoocmodsehfwrkyovhwsvvkzaptshesmessfcdopshcbynjcdzkfenokrxoovrdlnazizhakrusgqnwfbvxbrveibeysdudvrzfxhfrehxuxrydlcbyoqtxbwkixognmeijazbnoyimewylqssnvrlqjobeuwnvtuvxnfqkqpfpxjzfvggrbbgibnfbgqcgdxitanuqcjlcbikeesnvjrhytxefmeverdkiufbkhtqhgzdgbtgbetywxtaetashbfrmzoljnqtbtgqsfsialcuoanjjfmotarilfayyyvdmwazahqdbuemfurwjanjylnvjnxikblyykgfyhctweqwlfclfnytxoslscqpxfopnmrtywtdchjdocbukbvozfypwyxiqdezjshkzruphojphacgasmxeftepbqhqhqsvhfrzuxxootyqjhiydxiuihtvdqkxkpfszfbdckiqgjwdxxefkzguyfcnvqaszefslgdozdudshxtkbzevlegkhakrjfzvdcurdtzjljfvwbzjpcpebmacygzxmqlzkgurfuzjvutlkmchgmktuycdrdfxnrkgxkvgilohlotbbrpmklxpomnbxewqomqkdvqyjuftdlooqpldgnwupzlueoydoiurlzxidhqsdkhhjmkbmvlquyzslrnffkxlciqvudiwvjlpmckfalqtajvdoxqkwwuggtynmxzrhpwokpqbxeebcovdqcgyhdueyiymqqcxldeicxcfhchufdukxcmthnxzrrtluyazwdklqgieelxrxduljeimtrhwnrtfvdfkndhgkweagrxdepabtxuuuvhmmujjqowgushznziumioaugfrxnwtkvxxrbzhkbijzkbmavwzwytihhrhdpbfafpoctadwoyhqecezpvnghxpsdcjfaatmkekbylrwsxifyemxexjhwyxfivfpyoqrqfqeohucwvsttbrverujuzikzbkpgtyltepqnqxgauqxnadghdbuolmiyvblapkonafcomzpdzbiyefbsxlmzholtcqpgllobqsyxjedtibiysyerkyqliohwqykudlvtzgffsuzoaiescrvntnqrcghnjznbtgixdogzwtkkeyiwayaslgsttsrwfuxywvqosnezbehzzuuobqpkfdwaifqqggryhwvjhppdlwdxijvgyjkjlcxveibvrlvrgfynrcjzjmgsvqtxnjnpnljukbfszuqqesgsjbefzyyhmmomwgokrchiajagxjjlujnzoitubjmajyauelncuqbpzifqanhrxbcwcdrpmyhfaizextwecejsibwraoznqtdrvmvjxftvremwobsvwgmrhdtvqjtzrelgiffpwkogjbtzooybbjfpkxlkdtypnlxalxfsiqickgpqbqlukpnmzopnywykujshbeoufjkwmymfqshobzbvnmxituzsflukpkcgrjelzmloxoibtfmnjbjlyvmcmcgpwvhcnybsppmornydytbhxbqaafpdhhhgvkkafcngltmgdxywymtthduspdsoiwgrebikvmtyhfgvyrynfzcvyoihskwbvdqmtsknqnezpocyhmzhexumarqhvhzytedtnfclhuopndlwyzehdhhlzjaueuwrjrbavjuhpsaiwzdtjlbqhhxbtvdjbwydimjsgpvifxtyejargvatmnzmwnbulrygnkrrvskulgiephozuotusphmcbqhgyowubjpiqdnohsnhweuavuhwzpesovnkpstbwpldvliyxqtaqbzxzjagymddsqujxovrzzdtibmsitqoprzmugnnplkdhvlojirkzlmhhzrpzhjmdpcqpqdwnwuotksagrdbzxgjlysdirjlnwmpucjczarjgndhwjgmmnpyehzffuzninnjpunoiohusckirbbrvbwgyqdsfxnbnqfpuhlygcdxteqivospmupljyrforttedezdfcitqbnrmfmubrgtkhxuzqboswnrxaseeojjtgbmqjhqqudhhzqdglhchlqluqswpqdshwmohbntqciryzkzfprxzvggxztezpklgtdodxlezdseyabkqdvvqizgwhlemfknextbijrnbxgfnonnutztbjbxlibrrejczsukfnkgpgfcmoituufaeudmcnppjqzyalukkmydxyaaufaegsysvnpxtttgwdkxyzdfsmcxexczifvnoldnztmnikkaqbjujfrazikqcjcxsnezqvznlrxxtgprrqrypzmyngvrlkwoiprwmzbzrtqryfxwrslhdduvwlsohqkizdvhxlnlouztdfpqyoiszpljnjaimbimdavtavmkaqhjqnqsketahwyvicflgbjsiqtxuzcpjjznwotdyfxywrsgxlubrodhvrfdxfzkezfgmegiqtwnygvlwaoahsjegrqzekfksmzeqjrrbycrnmpettgqzdavaixodkmrpqnlglohymiyduwegxbqqreockogatvhvnwpyqryugihqaspfjhvpcnmlnpsbfqfhhdqdzvnzouzazhedpgzgciwoxqqwqwegnkbfkhanekyklxuknqollvmahidbjebxqwvygqaofxvvgvzazqqqlkblelmcoqwycemoqliywrchioznfosycfldocpoktvgbziybmrfxljxcicbooldbhzezlpdikodwcmsqmrdyswejrwpymqjpelxhqanayicdckawtwwzxlgzxccdbichkjeahaldhlyuluytartmtqcjmxdehvsvwhsivtwhbfrdxukrnikzenzyyzfmqhtkgwiukvoyhgjjdjpfhhvywiopgjznujjldpvpgkqguwugorknprhduvucvtmxhgkvkevlyigjaoojiodgnmimkhgeoqdvgjrokswjjvswetfrgbroyrwqxntojygwevfskmiusoszcfpbasxlleimlgeyprobxowhlkgkkusxfouwphzpzzsdrsosyrlltpzaixdwncapuujsqkjizeduncjymrfjjtgatcidaceicmhwlftjevtaajtezmfuaooawdliazbjntrsgrgxpzqzgfvgzkabieahppxjvsekzpjjucqkrllkhcxiayoajiyisovcektwvnytqntcneahiwwahtfrnntbnwccmfyfkenckdnotxzfiszxfgzqhoadtikwnlobaebdhuemanwimdskhszqithgehleqoijcnkvruhlqzbsyoyabwtvavzvquwzammhajgbqysxiimxzpmcisrdxlvmzyaocegzadsqheodsaptrmoctzntcnbbljkhwmaoyezjwdpdgrviyeejhinzmogwtcjzdjpmxcjtjasutxtyanwnivsuqlhyxeyaxbrmfeyhnqloncsvdeununumttlkkvtqxnwyobgaiatxrkcwjwtfvciwxuozqqdwvxyrnrrmgfqqzubmibqtgvoykwenxmcbocamryxuocuzinktfqudxqwyilynngkomwehfglytweqmzszkkmutctkdwtstkflexmmodrohjbnzpsdnesuhuqzgtynmxkyhmifxzdrozodnofgjzaanldvzocyhhcatcykcsacmbyctmbqcdzfavvnohzbxggwobpeqzmjqhijkjlgspvtfubzotiyqziskrodaloamldzsxkbewmrvrppgeliztqkuphvlrqkchlhjyentxnoonglqlcrwovhtwagiwvhfwhrnemfzvmbscuxzyiesonmhyoruhctolmeousjoentspcqnlipirxtfljvxhglxcfjmltvljdoieyuuhagfzbnfgcttpgtqmkzccnxaleyajzjbhfmkulqhusfohvgujmnutnoftswwfhdhwwbudaohrmkgufdnlsashvvhsjumiovehnrgeuikbtbouroiemlcgjkqqfzeewuegjbeocvsvtpzesayoiqnngrbhdhmriadziirgdukbkrarxbuvgmodqmdoubiuxqzzgccfnbecgywwzhrebidfdzfcqqssycaiprhkiiuckysfvvumsgetgxmmiqnjxmnhlidpxtajenvunhypnrbuxfbzaepsbgdcdnfmxchjotcztmetaimurwdtwhuokscqqpxqfdxuylbgtmxcnhpgtsaveezcpzdtdnvjwdjclvjmcazvxvuaolewnncwkrfijmjgliohtanxybjutkkjlefszbasvikfjsjwzuibdobgzekhlwkxatwtepulmosfaivdlsgzogoiwyzcvfqdrrvsomqxhbjhgutyhsvfopyscdoyzvycccobszmmiotogmwrtquqpdxuhxccxuhrysxymvfxdfzbswrefajrmezjeefgxkwcmvrulijtcuxckvoojiecfupzrzdzwjumuovfklxfgujgctvpnlvscaprckeacnqjcwwqnuuiirinsepqdbafcyrzjihddrfbcktanqpdcuruuytbhncbjzdkbfnvcgrkjzfnookmpbfhhggolmcfczsitlxlbfmcguaygfsfsppzjqkcvtdiznhojpflesvqvyiqmmdcgqabfxwxcjfnbnztmoqlybwvtuiouikqjbfmfocxnugtzrivsjorylemsrjhplmnxlyqfupomzlrlvwjtimqhjwauweyubulypgcbbwfdouqcuebdtirkyoycwlsnsdgvwhcellnootcvalafeovkkycbsllszykrukblfkdturqjzwmyhggwypfhsddbipjxybdjmkfkwmbqkjbdcawivhtgwhdlippxanwoyvvvmridpfjnjjaslrfpivzylyimzqezanaxvxmwwvkonbruwzpecjbepnixskrzqcyhmhuetyxkffegvxncszizewugogcrcjvuccywdlczrgcnaiyihmvgldgucyfaojjdwaimsslunrhqfyiskqpfdmnoxazdsgacanlvlutdvddisfkougvrbrcqawwfbwfwlwzhupwofojjmdhtykwzapqarpfergmitjdsjhsegzctkdeilvocqexxjvzplnzfmdyhmxozkqtesujwqijnnvmllzwmtjephrjttfaddlzlxjcsaagvboshhvulqeibfpmbpofdhxcuzufkogubsttuakhqdlqdsiifnpymttmkukflzokmgenhosdvfdjnpgvspuphrbcwgmcjsssbqixvsgaxxdochypxffhhglohtojrhrswzjblldzhmdhrmwydqkdeonytrqvxdxgmxtcuokarfmuhassmeqmkexavcqbvdsiawggxjwlirfmsoqqfecopjfbtapdudegeoowpmqlibkvytdxspyklgwnkqggapfqsuoidyyvsrprxcdysjooyanbdqvtqsnvndzqpgenrqkwgxxhzxhnhocppmjbxlejyxyjamodtybhhexhbvttbjdwftcwsfiirrzmiqnbohhlahlktukqzzxiflmxwfptqyxhppgcbpthyhwrhqcrycsxkzmlhximnvdleajsfkbvqbaiqulitaaipkpwvfwooatxwfrmxogmpbjllqkhjvedrsocafmbbqxitszcttwkfgcmnoxnpxamktqrivvgkzbgaqaqhwukoqppfephouxbkbpmkbmelhqummpypvvymxpdpcrylacygnvpzyrkpxfbwuronqiunoliympbpklvbpvrsbokywrrmugpqopgpmmgfpvvvbomqvyqzrbyqgcvyvxaymqnnyqwqemgsmigpwfjuv"],
//  ],
//  [
//    true, false, true, true, false, true, false, true, false, true, false, true, false, true, false, true,
//  ]
//]
//for (let i in actualParam) Test.assertEquals(checkInclusion(...actualParam[i]), expectedParam[i])

