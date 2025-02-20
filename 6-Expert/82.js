

//title: Solve a Linear Equation

//tags: algorithms,math,regex,strings

//url: https://edabit.com/challenge/aSYCTj8MkkNfib3XC

//Description:
//The function is given a string representing a linear equation with one unknown. Find the value of x that is a valid solution of the equation. Return the sting x=val. Three outcomes are possible:
//x_val is an integer or a float (round x_val to 2 decimals)
//"Infinite solutions" for situations 0*x=0
//"No solution" for situations 0*x=num, (num != 0)
//Examples
//findX("4x-7=x+11") ➞ "x=6"
//
//findX("3x=2x+x") ➞ "Infinite solutions"
//
//findX("3x=3x+2") ➞ "No solution"
//
//findX("-1-2x=15+x") ➞ "x=-5.33"
//Notes
//It is a good exercise for using Regex to find all numbers and coefficients of x.
//All numbers have at most 3 digits.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findX("4x-7=x+11"), "x=6")
//Test.assertEquals(findX("3x=2x+x"), "Infinite solutions")
//Test.assertEquals(findX("3x=3x+2"), "No solution")
//Test.assertEquals(findX("-1-2x=15+x"), "x=-5.33")
//Test.assertEquals(findX("x+5-3+x=6+x-2"), "x=2")
//Test.assertEquals(findX("2x=x"), "x=0")
//Test.assertEquals(findX("2x+3x-6x=x+2"), "x=-1")
//Test.assertEquals(findX("x=x+5"), "No solution")
//Test.assertEquals(findX("3x=33+22+11"), "x=22")
//Test.assertEquals(findX("99x=99"), "x=1")
//Test.assertEquals(findX("-19+17+19+14x-13-13x-5x-6x-16x-19=19x+7x+6+11+17-19x-20x"), "x=-3.77")
//Test.assertEquals(findX("13x-18x-33+4x+15-26-5x-19x-29x-30-9x+101x=-34+11+35-14+38x-34"), "No solution")
//Test.assertEquals(findX("53-38x+48+52x-40x-59-57x-26x+78x+14-3x-75x-43x-34x+29x=5+56x+21x-13x-14-39x+21-55x+10x-44-49x"), "x=1")
//Test.assertEquals(findX("-38x+41+87+70x-93x-7x-81+55x+86-55x+89x+x+98+62x-35-98x=71-65+89x+3-12x+87x-18+35x+90+54x+31+84-35x+29x-261x"), "Infinite solutions")
//Test.assertEquals(findX("71+147-129x+100x-31+22-33x+118+28x-94+124-40-133x-13+112+14+15x+60x-11x-29+109x-32+70-21x-65=-55+20x-121+13+79x+89-115-11+66x+86-110-115-19+129x-44x+129-28x+13+114x+43x+9x-125x+83x-21x-90"), "x=2")
//Test.assertEquals(findX("-57+110+16+70+2-53x+51x-87x-56+108x+73x-87+110x-29x+4x+62+115x+72+29+114+113x-147x-121-78x+39-140-14x-46x-98x-34x+113-54+67x+112x-73+97x-137x-130+65x+95x-26x+50+35+23-111x=-11x+121-31x-9-42x+149+48x-17-60+124+56x+105+85-83x-88+94-24-62-79+32-145x-88x-61x-135x-133x"), "x=0.46")
//Test.assertEquals(findX("-165+54+194+135x-6-148x-144-40-36x-116x-55-46-104+115x-43+84x+55+37x+162-61x+180x-8-64-169-4x-2-130x+145-145x+45x-200x+52x-149x+92+25x+197-4x+123x-135x-85x+39-5x-36x-142-81+94x+4-7x-32x-195x+190+74x+176x-89x-194x+1-34+107x-132+97x+147+171x-70x+155x+98x-161x+131+172+51x+106x-43+165x+29x-63-119+172x=160x-160x+153x+35-150-98x+52x+60x+177x-114x+168+181x+102+50x+105+183x+4+21x-3+135-8+122+50x+185-66x+21-153+117x-177-61x-192+28+174-160-128x+159-169x-83x-143+115x+81+55x-67-150x-33x-187-38x+7+42x-35-27x-134"), "No solution")
//Test.assertEquals(findX("-36-79-57x-293+256x+143-254+91x+218x-249x-9+84x-14-24x-240+178x-155x+130-221-36x-39+261x-147+92-242-251-114+7x-137-242-253x-79+98x+194x+194x+60-31-176-47-102x+185x-154+132+5+135+140x+50x+162x-165+184+220-116x+295x+219+213-53x+111-101+107x-122x-184x-235x+206-254x+170x-156x+163x+298x-42x+131x+278-228x-298x-200+153x+102+175-295+126+259-261+249+98-275-29+230+232x+172x-19-171x-109x+161-66-69x+286-297-181x+136x+204-242-202x+188x-199-7-215x+76-284+265x-7x-49x-71x+254+12x+83+165x-38-36+261-284+157-183+170x-139x-199+272x-53x+141x+179x+277-147-241x+105+215x+62x-254+49-119x-181x-282x-178-261+207-23-286+289x-145+119+228x-232x+267x+109x+120x-22-49+107-80-222x-266-36+111=-202+44+106x-244x+31+156x-156x+89+37+296x+41-227x-82x-51-298x-232-282+218x+93+193x-228+30-171x+61-219-266x-149+257-52x-139x-59+221-280x+98x-100+134x-18x+172+68-182+52+201x+265-110x+85+119-8x+88-206+27x-56x+76-35+161-146-34x+81+198+23-132x+189-1+1-101x+13x-256x-72x-73x+192-274-247x+71x-252+263x-144+234-273x+125x+165-137x"), "x=0.72")
//Test.assertEquals(findX("73x-332x+115x+29-471x+367+322+457-92x-478-175x-453x+295-363x+485x+307x+137+56+54x-315x+365x-283+37x-271+313x+408+109x+14x-343+380x+31x-398x-99-162+19x-315x+272x+154x-236+449-389+413-161-160x-345x-225+3x+80x+433x-327x+20-24x+14x-452+11+70+257-20x-349-382-20x-159x-78x-153+204x-132x+175x-70x+319+181+304+120+401+406-449+314x-102-443x-441x-111-194x+179-89+385x-442x-171+375-250-327+355+485x-458+139x+407+10x+211+496+434-6x-444x-396+40+8x-207x-206-294x-100x-482-380x-295x-420+120+127x+60x-439x+95x+449x-337x+29x-121+359-112x+258+360+38x+440x+283-444-269-247x-89x-300x+261+258x-184-471x+334x+425x-201+215-453-443x+249+14+86x-223-181x-143x+395x-377x-4+85x-355x-213+349x+172+152x-421+485+24x-40x-345x+208-498+130x+428x-408+206+70x-253x-281+154x-456-445x-328x+143-403+207-88+184+224+344-245-306-424-137+393-100x-108-199+364x-409x+282x-241x+265-360-112x+273-276+96+160x-72x+269+306-100+415x-149x-16+118x+325x+120-178+85+414-126+313x-540x-142-197x+371-235x-31-500+121-303+104-257x-154+230x+489+151x+270+440+454+333+73x-235+406x+257-207+54x+446-196-132x-289x+166-182-374x-163x+398+19x-405-445x-333x+492x+62x-362x+328x+239+259x-187+409-241-153x-186-120+152x+500x-235-125x-424+451+18x-194+374-342-263-243x+203x-2+243+211+467x-484x+356+109+104x-215x+463x+304x+347x-206x+485+212x+33-39x-359x-20-260x+3x-451-313x-243x+205x+313+233x+119+455+67x-320x-87+411x-447+372+205-367+478x+11x-332x-235-461x-255+21+143x+346+2x+129+475x-136+94x-300+3x-314x+369x+460+62x+145-328+33x+476x-424x-236-33+320-356x+16-385x+281+292x+129x+68+70x-255x+58+242+414-46-325x+341+18x-130-475-27x+116-4-448+32-7-54+8x+250x-234+16+298x+113x-54-375x+494+310-490-83x+171x-487-187x-296-436+89=207-315+292-343x-36+470x+388x-210x-6+275x-181+495+355x+199x-232x-383+344+497x-150+6-203x-34+246-403+50+76-204x+358+500x-432x-392x+427-304-258+124+326-395x+412+401x+288x+389-11-197x-44x+268x-471x-173x+209-153x-109x-195+91x+1-211x-65x-164+365x-40x-368-94x+447-487x-289x-394-363x+328+44-445-358x+37-78-462x-107-121-213x+139+190-148x+472+370-95x+128x-42x+231x+297-180-302x-500-46x+56+218+412-221x+464-496-143x-202x-351x+195x+290x-14x+417x-274x+26-485-197-491x+459-489-114x+293x+251+79x+444-34x+81x+161x+129-143-402x-311-72-296-98+368x+350x+364+239x+184+489+454x-395-79x-466x-145x+370x+152-433x-286x-400+30-353x+308x+498+472x-285x-171-295x-328x-468+403-398+412+243x-70-103-340-25-324-303+56x+264x-256-330-284+447x+260x-158x-87+303x+195-179x+473-367x+7+58x-319+183x+235-361x+249-336x-373x-184x-307+488+3x+219x-408+246+402x-277x"), "Infinite solutions")
//Test.assertEquals(findX("-35x+301x+378x+9-322-46x+177x-58x-84-176-139x-144-178x-368+159-383x+252+366x+179x-382x-125-91-292x-354-170+66-362x-350+258x+355+318x-287+460-306x-369+23x+482x-82x+448-331-245-43x-115x+38x+36x+264-262x+413x+382+22-483x+378x+481x-188-473x+360x-235x+37+439x+29-248x-358x-2x-254x+314-106+45+469x+157+61x+156x+86+394x+478x+399+219-418+145+432-477-108x+363x-12x-294+154-245x+235x-365+246-172-365+220-39x-382x+218x+124+372x+188x+109+326+70x-154+210x+488+62+462-122x+62-136-53x-464+438x-248-152+185-172x-228x-177-192+452-440x+111x-113+90+394x-352x+32x+172+420x+75x-73x+480x-475x+430+241+468+186x+234-273x-102-53x-389-496x-313+466x+40x-178+353-493x-201+158+341+58x-93x+455x-222x+385x-225x-129x+421x-141-396x+270+23x-268x+500-124+186-38+353x+449x+244x-317-163+61-43x+388x+498+265x-185-169-70x+433x+159+82-374+70x+417x+161+239+447x-218+243+118x-315x-163x+466+54x+243x+1-464+176+291x-397x+399x-315x-369-189x+288x+495-427+407x-353x+438x-194+55+323x+77-335x-19+253+226x+292+136-415-44x+314x+363x+384-212-484-59+471-312x-228-13-45+186x-417-187-174x-128x-349+286-207-27+115x+150+47x+47x-219x-129x+192x-155x-87+444x-18x+400+228+459x+238+114x+307+77x+413x-302+359-369x-195-289x-125+414x-464+319x-87-125-302x-120x-219x+263+402+491+55-372-42-310-335-479-79-397x-22x-490x+148x+321-320-312x-431+335x-407x+375+7x-73x+361x-119-164+331x-38x-271x+142+246-303-349-284+1+236x-444x-233+112+373+444-262x-1+101x+396+69+6-302x-23+71x+192+102x+38x+381-325x-159+311+291-307+417+153+266-374+406x-202x-97x-236-497+419x+162x+196-429x+377x-205x+433+68x+234+228x+116+8x-238x-469x+215x+284+255+49+77x-489+368x-376+365-373+450x+449x+134x+387x-49-239x-60x-354x-261+302x-487-286+318-300x+410+351x-259-103x+464-138x+116+30x-236x+173x-466-371+314+154-296-29x+267x-178x+427-443x+260x-92-44x+56x+274x-462+342x-121x-65x+358+9-159x-311x-156x+452-9+327+467x+465+387x+475-495-486-319x-254+385+419+467x-103x-58-162-199x-347+210x+438x-295-3+362x-9x-57+223x+352x+303-194-192x+218-486-220x+490x-206x+419+134x-245x-473x+410-191x+189x-34+453x+391+287+89-483x+354+332+260-483-47x-268x+74-155+89+411-357+381x+168x-360x-364x-47+154+142-260x-41x-297-313+315+298x-112x+17x-39x+96x-226+463x-233-431-378x-373=438-266+293x-499+87x+435x-472+114-186x-198x-197-454x+71+353x-257x-356x+305+283-70x-357x-18x-80-136+116-180+44+429+274x+365x-152-436-151-173+71x+364x-407+426x+160x+218+115+367x-314x+131x-484x+39x-320x-154x-283x+194x+77x+32-272+24x-19+240x+178+386x-263x-12+10+330+338x+283+9+68-384+43x-51-211-57x+301-1+206x+287+176x-93+433-351-32+462x+335x-325+399x-50x-112x-122-291-251x-4x-187x-251-364x+344x-53x+17+314-488x-134+334x-251-238x+415x+338+484x-203-167x+176-140x+147+269x+426x-350x+231+105x+218+270x-417x-290-57x+281+223+112x-245x-72x+358-217+463x+280x-464x-105+184+47-248x+306x-146-348+477x-325x-459x+322x-31+403x+98+131+133+253+204x+258x-361x+387x+403x+402x-124+395x-350-435+107+128x+167+395+104x+406-284x+163x-6x-435-51x-71x-144x+329+6x-370x+313x+331+435x-416x-26-393+178x-59x-156+150+98x-150x-434x-465+302x-560-178-251x+220x+442x-48+453-181+193+41x-438x-105-105+403+436x+352+379x-371-208+82-483x-454+31-244x-412-301-242x-719+205x-262x-236x+493x+74x-331+53x+95-11x-477-104x+64x+104-74x+392+246+270+458x+283-414x+252-92x+83x-499-331-45+21x-50x-92-421-262+101x-432x+274x-95x"), "x=-2")
//Test.assertEquals(findX("259+166x-89x+255-198-422-469+453x-351+92+248x-480+24-162x-68x+576+110+529+95x-327x+101x+433+496+491x+537+561+383+174x+382x+36+446x+404-476x+125x+1+407x+46+223x-199-309+547-253x-461x+59x-156x-373+29-498+501-12x+146x+453x+362+175x+247x+58+567x+369-566+449+302x+210+588x-500x+416-560x-525x+562x+20-369+313x-374x-19x-361x+79x-135-417+464x-341x-499-429x-261-369-346x+526x+229x-526x-380+50x-487x+524x+530x+233x+539-331-224x-9x+361-571-591+569-412x-412+274x-55-409x-579+126-591+396-324x+310x+430+168+218x+266-177x-476-164+101x-175x-528x-409+525+440+492-460x-314-161x-267-41+194-50+19x-322-555+481+578x-574+118-406-489x-408+324+543+499x-171+557x-195x-584x-498+172x-335-99-417+74+107x-443x+36x-172x+243x-579-367x-162+97+30-537x+190-505-597+315x-555x-260x-294+320-419x+160x-463x+553x+488-45+38x-529+597-47x+396+269x-382-449x+75x-438+164x+253+208-162x+407x-590+557+253-539x+55-404+431-515x-225x-99+455+370x+389x+204+217+520x+109x+557-151x+209-359-37-107x+319x+233+229+60x+570-167+399-156+309-538+216x+205x-570x-213-557-484x-379x-423-498+262x-322x+193-299x+528+35-209x-199-103+487+95-163x-159x+129-230x-222x+567-482-263x+465-380+515x-149x+314-417x-294+402+19+589+41+237+100x+52-262x+52+379+21+521-262-215-249x+559x+324+201x-571x+245-255+302+186+429-507-183x+547x-230x-237x-217+309x+7x+226+267x-81x-165x-449+598x-570x+297-576x+442-136-82x-21x+590x-57+50+528x-364x-244x+461+76-182+104x-68x+10-455x-596+113-96+1-328x-194x-409+478+127x+366-307-588x-87x+303+69-536x-118x-32x+2-475x+206+69x-144x+206x+213x+285x+549x+116x-8x-451x+145+40x+377x+530-345-507x+228x-517+145-350+50+387-148x+222-91x-551x+421x+166x-60x+321+219x-82x-525-148-520+353-44x+197x+503+441+587+499x+424x-492-353-64x-509+500x+60x-227x+575x+310x-276x+54x-196+219-193x-586x+199-459+316x-202+460x-305x-78x-149x-346+453-416x-171+228-459x-279x-77x-563-504x+142-542-480x+384x+92x+58-198+395x+229+188x+50+449-520-47x-454x-350x-419+564x+248x+372x+154+29x+435x+565x-23x+388x-173x-530-480+196+61x+369-335-462x+55x-248-364x-246x+453-532+266-110x-139x+74-517x-424-462+589x+556+198-261x-50x-366-79+580+280x-470x+153-402+341+203x-388x-148-304x+50x-145x+493x+384x-41x-291x+369x+112x+577x-412x-472-349x-491x+273-75+447-274x-69=-262x+215x-284x-238+521x-500x-337+177+69x+27x+26x+287x+384-182x-589x-259x-130+451x-542x-462x+263+158+108+272x+143-311-511x-225x-390-426x+519-153+70-474x-384x+400-594x-36x+523x-389x-528-439-430x-349x+133x+321x+11x+80x+286x-296x-263-557-40+113+37+570x+106x-394+6-570x+459-91-274+240+324x+227-59+146x+380+474-340x-131+462x+287x-148x-317x-38x+353+302-341+436x+278-372-132x-17+349x+32-378+511+228x+405+271x+311+40+31x-556+375-482x-390x-227x+247-415-17-398-464x-60x+341x-454x+425+188-18-422x-451-497x-413+102-159-65x-105+390x+551-598+547x+449+428x-348x-83-498x-396x+237-253x-595+264x+399x+132+176-157+209+484x+268-124x-292x+13x-582x+46+424-436+104x-556-154+366-105+360+137-52x-502x-457-84x-440x-162x-211+183-476x-551+172x-435x-33-87-228-483x-166-596-165-401+457x+522x+164x+553+277-524x+378x+117x+474+100+436x-90x-341+243+230-533x+42x-48x-101+104x+241x+273+44x-208x+300x+100-207x+452x+233+267x-163+444x-182+125x-36x-581x+503x+540x-433-182+84-109+198x-175x-108+69x-594-195x+355+205x-464x+232x-279-461+66+262x-31+100+2-478x-94x+165x+433x+66x-173+499-457x+501+282+383x-2+87+245-439-159+270x+292+542x-366x-301+69x-124-357+598x+342-108-357x-481x+221x-268+524+472-355x+82x-189x-519x-531x-287x+493x+9+201+138-362x+158x-23+146+118+118x-230x+442+555x-45x+106-466+511+576+309x-585+145x+205+125+26x-367-189+56x+244-466x+596x+374x-349-359-403-185x+169x-198+71x+182-522x+265x+426x+198-428x-22-474x-525x+485-237-34-518-377x-393x-529x-540x+305x-246x-492-583x-255x-215x-180+551x+253+551x+572x+561+187-203x-14x+350x+33+465x-489x-455+538-394-532x-462-47-309x-22x+93+572x+198x-435x+308x-246x+179-81x-387x-266x+580+399x+231x+498x-494+315+391+440x-287+403-544+113x+380x-300-261x-511-505+148-279-67x-505x+167x+286+281x-296+127x-340-196x+304x-442x+352x-427x+115x+217x+325x+412x-222+191x+343+257x+117-177x-145x+122+68x-383-171+52+277-160-500x-245-523x-111-440x-61x-37x-591x-544-466+17-157x-206x-344-37x+428x-368-445x+564x-553-163+210-87+20x+388x-418+433x+485x+70+571x+72+27+126-484x-180-306+545+502x+468-160x+152-370+38-115-454-555x+309+398+464-491x+504x+559x-397+82x-598x-99-474+168-277x+202+578-72+157+556+294+537+252-34+554+315+576x-69+192x-563x-86+247+587+168+569+20x+387x+200x+493-149-497-235"), "x=-8.42")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Playfair Cipher

//tags: algorithms,cryptography,loops

//url: https://edabit.com/challenge/fdnrNxCkouvW38iw9

//Description:
//The Playfair cipher is a substitution cipher that uses digraphs (pairs of letters) instead of single letters, and makes use of symmetrical encryption.
//There are some variations on the rules of encipherment. One version of the cipher rules is outlined below:
//A 5x5 Polybius square is constructed, deranged with a keyword.
//keyword = python
//First, fill in the keyword at the top of the grid, omitting any duplicates (3rd example's keyword has two occurrences of "h". The second one should be omitted).
//
//				
//P	Y	T	H	O
//N				
//				
//				
//				
//
//Next, fill in the rest of the slots with the leftover letters of the alphabet that are not in the keyword. Classically, "I" and "J" share a slot (some people elect to omit "Q", "V", or "Z" instead).
//
//				
//P	Y	T	H	O
//N	A	B	C	D
//E	F	G	I/J	K
//L	M	Q	R	S
//U	V	W	X	Z
//Remove spaces and punctuation from the message to be enciphered. Then break it up into two-letter chunks (digraphs):
//message = "Tomorrow we attack."
//
//message = "tomorrowweattack"
//
//message = "to mo rr ow we at ta ck"
//Digraphs must have two distinct letters. If any digraph consists of the same letter, insert an "x" between them and shift the pairings to the right. Repeat as necessary until all double letters are eliminated. If the resulting message has an odd number of letters, add an "x" to the end.
//message = "to mo rx ro ww ea tt ac k"
//Note how shifting the pairings rightward after inserting an 'x' after the first 'r' has created two more double letter digraphs. Correct them sequentially.
//message = "to mo rx ro wx we at ta ck"
//This insertion corrected both double letter digraphs, and evened out the message length. No more changes are necessary.
//Encipher each digraph into a different digraph by following these 3 rules of encipherment:
//If the two letters are on the same row, as is the case for the first digraph "to", replace each letter with the letter to its right, wrapping around to the beginning of the row if necessary.
//to -> hp
//If the two letters are on the same column, as in the third digraph "rx", replace each letter with the letter beneath it, wrapping around to the top if necessary
//rx -> xh
//If the two letters have dissimilar rows and columns, as in the second digraph "mo", visualise a rectangle with these letters at opposite vertices, then find the other two vertices. Replace each letter with the vertex sharing its row. The original letters are rendered in bold below. The cipher letters are italicised and bolded.
//
//				
//P	Y	T	H	O
//N	A	B	C	D
//E	F	G	I/J	K
//L	M	Q	R	S
//U	V	W	X	Z
//mo -> sy
//
//"to mo rx ro wx we at ta ck" -> "hp sy xh sh xz ug by yb di"
//Create a function that takes two strings — a plaintext message or ciphertext str, and a keyword — and returns the corresponding ciphertext or deciphered plaintext (without spaces and with "x" in odd places as appropriate).
//Examples
//playfair("Tomorrow we attack.", "python") ➞ "HPSYXHSHXZUGBYYBDI"
//
//playfair("HPSYXHSHXZUGBYYBDI", "python") ➞ "TOMORXROWXWEATTACK"
//
//playfair("MYDZABIFBMENFEQAAE", "rhythm") ➞ "THEXEAGLEHASLANDED"
//Notes
//Check the Resources tab if the explanations here are unclear.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(playfair("Tomorrow we attack.", "python"), "HPSYXHSHXZUGBYYBDI")
//Test.assertEquals(playfair("HPSYXHSHXZUGBYYBDI", "python"), "TOMORXROWXWEATTACK")
//Test.assertEquals(playfair("The eagle has landed.", "rhythm"), "MYDZABIFBMENFEQAAE")
//Test.assertEquals(playfair("MYDZABIFBMENFEQAAE", "rhythm"), "THEXEAGLEHASLANDED")
//Test.assertEquals(playfair("Code Red: The seagull has hovered.", "cryptic"), "YMEITAEPLBZLGNZFFKENOWZATAKP")
//Test.assertEquals(playfair("YMEITAEPLBZLGNZFFKENOWZATAKP", "cryptic"), "CODEREDTHESEAGULLHASHOVEREDX")
//Test.assertEquals(playfair("My cousin and I were playing catch and I tossed him too high on the roof and then I came up. And now we both need...", "cowandchicken"), "LZOWYPEWNCHKNITISBKAEWBWNSODNCHKQNRYTKHIEGQNHFGRFHEZIDQWHQNCEPIDWEONTMCUNCECWANIFCQEEMDH")
//Test.assertEquals(playfair("LZOWYPEWNCHKNITISBKAEWBWNSODNCHKQNRYTKHIEGQNHFGRFHEZIDQWHQNCEPIDWEONTMCUNCECWANIFCQEEMDH", "cowandchicken"), "MYCOUSINANDIWEREPLAYINGCATCHANDITOSXSEDHIMTOOHIGHONTHEROOFANDTHENICAMEUPANDNOWWEBOTHNEED")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Number Base Puzzle

//tags: math,numbers

//url: https://edabit.com/challenge/YgWFxFeypajKmJ7kt

//Description:
//Consider this unremarkable array of integers: [525, 238, 401]. It does have one unusual trait⁠—every member of the array represents one common number but in a different number base. In this case, that common number is 197 (base 10).
//197 = 525 in base 6
//197 = 238 in base 9
//197 = 401 in base 7
//Sometimes there is more than one possible common number. The list [10, 11, 100] has two possibilities for the common number, 4 (base 10) and 9 (base 10).
//4 = 10 (base 4)
//4 = 11 (base 3)
//
//4 = 100 (base 2)
//
//9 = 10 (base 9)
//
//9 = 11 (base 8)
//9 = 100 (base 3)
//Devise a function that returns the common number(s) of an array, sorted in ascending order. Your answer will be the base 10 representation of the number(s). If there is no common number return an empty list. You should consider only number bases 2 through 10 inclusive.
//Examples
//puzzle([525, 238, 401]) ➞ [197]
//
//puzzle([20, 10, 11, 12]) ➞ [6, 8, 10]
//
//puzzle([5]) ➞ [5]
//
//puzzle([145, 203, 321, 106]) ➞ []
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(puzzle([525, 305, 238, 401]), [197])
//Test.assertSimilar(puzzle([20, 10, 11, 12]), [6, 8, 10])
//Test.assertSimilar(puzzle([13, 11, 15, 23, 21]), [11])
//Test.assertSimilar(puzzle([13, 11, 111, 21, 10, 12]), [7])
//Test.assertSimilar(puzzle([145, 203, 321, 106]), [])
//Test.assertSimilar(puzzle([10, 11, 100]), [4, 9])
//Test.assertSimilar(puzzle([1, 1, 1, 1]), [1])
//Test.assertSimilar(puzzle([15]), [11, 12, 13, 14, 15])
//Test.assertSimilar(puzzle([76, 62]), [62])
//Test.assertSimilar(puzzle([15, 112]), [14])
//Test.assertSimilar(puzzle([314, 400, 514]), [256])
//Test.assertSimilar(puzzle([123, 321]), [])
//Test.assertSimilar(puzzle([30, 20, 22]), [12, 18])
//Test.assertSimilar(puzzle([103, 232, 124, 151]), [67])
//Test.assertSimilar(puzzle([1453, 3132, 1101, 5033, 2115]), [1101])
//Test.assertSimilar(puzzle([113, 333, 162, 135]), [93])
//Test.assertSimilar(puzzle([121, 100]), [16, 25, 36, 49, 64, 81, 100])

