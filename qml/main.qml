import QtMultimedia 5.0
import QtQuick 2.4
import QtQuick.Controls 1.2
import QtQuick.Window 2.1
import QtQuick.Dialogs 1.2
import QtQuick.Layouts 1.1
import com.ics.demo 1.0

import "test.js" as JS
import "genrand.js" as GEN
import "genrand02.js" as GEN02
import "genrand03.js" as GEN03
import "genrand04.js" as GEN04
import "genrand05.js" as GEN05
import "genrand06.js" as GEN06
import "genrand07.js" as GEN07
import "genrand08.js" as GEN08
import "genrand09.js" as GEN09
import "genrand10.js" as GEN10
import "genrand11.js" as GEN11
import "genrand12.js" as GEN12
import "genrand13.js" as GEN13
import "genrand14.js" as GEN14
import "genrand15.js" as GEN15
import "genrand16.js" as GEN16
import "genrand17.js" as GEN17
import "genrand18.js" as GEN18
import "genrand19.js" as GEN19
import "genrand20.js" as GEN20
import "genrand21.js" as GEN21
import "genrand22.js" as GEN22
import "genrand23.js" as GEN23
import "genrand24.js" as GEN24
import "genrand25.js" as GEN25
import "genrand26.js" as GEN26
import "genrand27.js" as GEN27
import "genrand28.js" as GEN28
import "genrand29.js" as GEN29
import "genrand30.js" as GEN30
import "genrand31.js" as GEN31
import "genrand32.js" as GEN32
import "genrand33.js" as GEN33
import "genrand34.js" as GEN34
import "genrand35.js" as GEN35
import "genrand36.js" as GEN36
import "genrand37.js" as GEN37

//import QtTest 1.0
//import Material 0.1
ApplicationWindow {
    title: qsTr("Learn English Game")
    width: 640
    height: 480
    visible: true
    id: root
    property variant wordactionarr: ["","looking", "making","opening","pulling","putting","pushing","reading","running","seeing","singing","sitting","sleeping","smelling","smiling","smoking","speaking","standing","stopping","swimming","tasting","tasting"]  // objects from the components
    property variant wordactionarr02: ["","loose","loud","lucky","many","narrow","near","old","open","poor","quiet","rich","right","sad","safe","shallow","short","slow","small","soft","strong","strong","strong"]  // objects from the components
    property variant wordactionarr03: ["","bear","bull","calf","cat","chickens","cock","cow","dog","donkey","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","horse","kitten","kitten"]  // objects from the components
    property variant wordactionarr04: ["","apple","apricot","banana","breadfruit","cantaloupe","cranberry","dragonfruit","durian","guava","honeydew","jackfruit.png","lychee","mulberry","nectarine","papaya","passion fruit","peanut","persimmon","pomelo","quince","quince"]  // objects from the components
    property variant wordactionarr05: ["","alarm clock","battery","bottle","brush","button","camera","chewing gum","clip","coin","comb","credit card","diary","dictionary","file","glasses","headphones","key","laptop","light bulb","lighter","lighter"]  // objects from the components
    property variant wordactionarr06: ["","biting","bringing","building","buying","calling","catching","clapping","cleaning","climbing","closing","coming","thinking","touching","trying","typing","walking","washing","watching","working","writing","writing"]  // objects from the components
    property variant wordactionarr07: ["","beautiful","big","boring","clean","closed","cold","dangerous","dark","deep","difficult","stupid","terrible","thick","true","ugly","weak","wet","wide","wrong","young","young"]  // objects from the components
    property variant wordactionarr08: ["","alligator","antelope","badger","bat","camel","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","pig","piglet","rabbit","ram","sheep","snake","turkey","turtle","turtle"]  // objects from the components
    property variant wordactionarr09: ["","frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","wolf","zebra","zebra"]  // objects from the components
    property variant wordactionarr10: ["","baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","ointment","playpen","potty","pushchair","pushchair"]  // objects from the components
    property variant wordactionarr11: ["","bikini","blouse","boots","boxer","cardigan","coat","dress","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals","shirt","shirt"]
    property variant wordactionarr12: ["","bacon","baked beans","beef","bread","butter","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","salami","sausage roll","sausages","sugar","yoghurt","yoghurt"]
    property variant wordactionarr13: ["","lawyer","lecturer","librarian","lifeguard","mechanics","model","nurse","optician","painter","pharmacist","photographer","pilot","plumber","policeman","politician","postman","receptionist","scientist","secretary","secretary"]
    property variant wordactionarr14: ["","green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","onion","peas","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato","turnip","turnip"]
    property variant wordactionarr15: ["","cooking","crying","cutting","dancing","drawing","dreaming","drinking","driving","eating","giving","going","hearing","hitting","jumping","keeping","kicking","laughing","listening","listening"]
    property variant wordactionarr16: ["","dirty","dry","early","empty","excellent","false","far","fast","few","full","generous","happy","high","hot","intelligent","late","light","long","long"]
    property variant wordactionarr17: ["","bee","beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eagle","eel","flamingo","hawk","heron","jellyfish","jellyfish"]
    property variant wordactionarr18: ["","air freshener","bathtub","curtain rings","facecloth","faucet","hair dryer","laundry basket","mirror","plunger","razor","shampoo","shower cap","shower","sink","soap","toilet paper","toilet","toothbrush","towel rail","towel",]
    property variant wordactionarr19: ["","alarm clock","bed","bedside table","bedspread","blanket","blinds","carpet","chest of drawers","closet","coat hanger","curtains","cushion","double bed","dresser","duvet","electric blanket","headboard","jewellery box","lamp","mattress","mattress"]
    property variant wordactionarr20: ["","kingfisher","nightingale","octopus","otter","owl","panda","penguin","pheasant","pigeon","plaice","puppy","reindeer","scorpion","sea lion","seagull","seahorse","shark","sparrow","spider","squid","squid"]
    property variant wordactionarr21: ["","blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","chalk","clock","computer","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","textbook","white board","white board"]
    property variant wordactionarr22: ["","shoes","shorts","skirt","slipper","sock","suit","sweatshirt","swimming suit","swimming trunks","T-shirt","tank top","tie","tights","trouser","Y-fronts","Y-fronts"]
    property variant wordactionarr23: ["","bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","jug","microwave","napkin","pepper pot","plate","plate"]
    property variant wordactionarr24: ["","atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal","wire","wire"]
    property variant wordactionarr25: ["","acre","bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fence","fertilizer","field","goose","harvest","harvester","haystack","haystack"]
    property variant wordactionarr26: ["","biscuits","candy","chives","chocolate","coriander","cornflakes","fish","honey","ice cream","noodles","pasta","peanuts","pizza","prunes","raisins","rice","soup","spaghetti","spaghetti"]
    property variant wordactionarr27: ["","avocado","blackberry","blackcurrant","blueberry","cherry","coconut","fig","gooseberry","grape","grapefruit","kiwi fruit","lemon","lime","mango","melon","starfruit","tomato","ugli fruit","walnut","watermelon","watermelon"]
    property variant wordactionarr28: ["","lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch","water","water"]
    property variant wordactionarr29: ["","accountant","actor","architect","astronomer","author","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian","waiter","waiter"]
    property variant wordactionarr30: ["","hoe","insecticide","milk","orchard","plow","produce","rake","roost","scarecrow","scythe","seeds","shovel","sickle","tractor","trough","windmill","windmill"]
    property variant wordactionarr31: ["","ball pool","bumper car","carouse","dolphin show","Ferris wheel","free-fall-ride","fun house","ghost train","house of mirrors","inflatable","jumping castle","lake","monorail","pirate ship","roller coaster","slides","spinning ride","swinging-ship","teacup ride","ticket booth","ticket booth"]
    property variant wordactionarr32: ["","cricket","cycling","fencing","football","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis","volleyball","volleyball"]
    property variant wordactionarr33: ["","airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","ship","station","subway","taxi","train","truck","van","van"]
    property variant wordactionarr34: ["","doctor","driver","dustman","electrician","engineer","farmer","firefighter","fisherman","florist","gardener","hairdresser","journalist","judge","judge"]
    property variant wordactionarr35: ["","artichoke","asparagus","aubergine","avocado","beansprouts","beetroot","bitter gourd","broad beans","broccoli","Brussels sprouts","cabbage","carrot","cauliflower","celery","chilli","courgette","cucumber","French beans","garlic","ginger","ginger"]
    property variant wordactionarr36: ["","apron","bunk bed","cacuum cleaner","casserole pan","coat rack","comb","cookie cutters","cutting board","frying pan","ice tray","peeler","pot holder","Q-tip","rolling pin","scale","spatula","thermos","tissue","tongs","tupperware","wok","wok"]
    property variant wordactionarr37: ["","balance","beaker","Bunsen burner","crucible tongs","evaporating dish","forceps","funnel","goggles","mortar and pestle","pipet bulb","rubber stopper","spatula","spot plate","stirring rod","striker","test tube rack","test tube","thermometer","volumetric flask","volumetric pipet","wash bottle","watch glass","weighing paper","weighing paper"]

    property variant actionarr:GEN.genrand(1,1);
    property variant actionarrdef:GEN.genrand(1,1);
    property variant actionarr02:GEN02.genrand(1,1);
    property variant actionarrdef02:GEN02.genrand(1,1);
    property variant actionarr03:GEN03.genrand(1,1);
    property variant actionarrdef03:GEN03.genrand(1,1);
    property variant actionarr04:GEN04.genrand(1,1);
    property variant actionarrdef04:GEN04.genrand(1,1);
    property variant actionarr05:GEN05.genrand(1,1);
    property variant actionarrdef05:GEN05.genrand(1,1);
    property variant actionarr06:GEN06.genrand(1,1);
    property variant actionarrdef06:GEN06.genrand(1,1);
    property variant actionarr07:GEN07.genrand(1,1);
    property variant actionarrdef07:GEN07.genrand(1,1);
    property variant actionarr08:GEN08.genrand(1,1);
    property variant actionarrdef08:GEN08.genrand(1,1);
    property variant actionarr09:GEN09.genrand(1,1);
    property variant actionarrdef09:GEN09.genrand(1,1);
    property variant actionarr10:GEN10.genrand(1,1);
    property variant actionarrdef10:GEN10.genrand(1,1);
    property variant actionarr11:GEN11.genrand(1,1);
    property variant actionarrdef11:GEN11.genrand(1,1);
    property variant actionarr12:GEN12.genrand(1,1);
    property variant actionarrdef12:GEN12.genrand(1,1);
    property variant actionarr13:GEN13.genrand(1,1);
    property variant actionarrdef13:GEN13.genrand(1,1);
    property variant actionarr14:GEN14.genrand(1,1);
    property variant actionarrdef14:GEN14.genrand(1,1);
    property variant actionarr15:GEN15.genrand(1,1);
    property variant actionarrdef15:GEN15.genrand(1,1);
    property variant actionarr16:GEN16.genrand(1,1);
    property variant actionarrdef16:GEN16.genrand(1,1);
    property variant actionarr17:GEN17.genrand(1,1);
    property variant actionarrdef17:GEN17.genrand(1,1);
    property variant actionarr18:GEN18.genrand(1,1);
    property variant actionarrdef18:GEN18.genrand(1,1);
    property variant actionarr19:GEN19.genrand(1,1);
    property variant actionarrdef19:GEN19.genrand(1,1);
    property variant actionarr20:GEN20.genrand(1,1);
    property variant actionarrdef20:GEN20.genrand(1,1);
    property variant actionarr21:GEN21.genrand(1,1);
    property variant actionarrdef21:GEN21.genrand(1,1);
    property variant actionarr22:GEN22.genrand(1,1);
    property variant actionarrdef22:GEN22.genrand(1,1);
    property variant actionarr23:GEN23.genrand(1,1);
    property variant actionarrdef23:GEN23.genrand(1,1);
    property variant actionarr24:GEN24.genrand(1,1);
    property variant actionarrdef24:GEN24.genrand(1,1);
    property variant actionarr25:GEN25.genrand(1,1);
    property variant actionarrdef25:GEN25.genrand(1,1);
    property variant actionarr26:GEN26.genrand(1,1);
    property variant actionarrdef26:GEN26.genrand(1,1);
    property variant actionarr27:GEN27.genrand(1,1);
    property variant actionarrdef27:GEN27.genrand(1,1);
    property variant actionarr28:GEN28.genrand(1,1);
    property variant actionarrdef28:GEN28.genrand(1,1);
    property variant actionarr29:GEN29.genrand(1,1);
    property variant actionarrdef29:GEN29.genrand(1,1);
    property variant actionarr30:GEN30.genrand(1,1);
    property variant actionarrdef30:GEN30.genrand(1,1);
    property variant actionarr31:GEN31.genrand(1,1);
    property variant actionarrdef31:GEN31.genrand(1,1);
    property variant actionarr32:GEN32.genrand(1,1);
    property variant actionarrdef32:GEN32.genrand(1,1);
    property variant actionarr33:GEN33.genrand(1,1);
    property variant actionarrdef33:GEN33.genrand(1,1);
    property variant actionarr34:GEN34.genrand(1,1);
    property variant actionarrdef34:GEN34.genrand(1,1);
    property variant actionarr35:GEN35.genrand(1,1);
    property variant actionarrdef35:GEN35.genrand(1,1);
    property variant actionarr36:GEN36.genrand(1,1);
    property variant actionarrdef36:GEN36.genrand(1,1);
    property variant actionarr37:GEN37.genrand(1,1);
    property variant actionarrdef37:GEN37.genrand(1,1);


    property int navbar: 170;
    property int myscore: 10;
    property int paddingall: 15;
    property int lifepos: Math.round(Screen.desktopAvailableWidth) - 200;
    property int textpos:Math.round(Screen.desktopAvailableWidth/2) - 30;
    property int textposy:navbar + 25;
    property int heightimg2:Math.round((Screen.desktopAvailableHeight - navbar - 12*paddingall)/2);
    property int widthimg2: heightimg2*3/4;
    property int xpos21:Math.round(Screen.desktopAvailableWidth/2) - Math.round(widthimg2/2);
    property int ypos21:Math.round((Screen.desktopAvailableHeight - navbar )/2) - Math.round(heightimg2/2) - 3*paddingall;
    property int xpos22:xpos21;
    property int ypos22:ypos21 + Math.round((Screen.desktopAvailableHeight - navbar)/2 - 3*paddingall);
    property int livepos:Math.round(Screen.desktopAvailableWidth) - 200
    property int widthimg3: Math.round(((Screen.desktopAvailableHeight - 180)/3)*3/4);
    property int heightimg3:Math.round((Screen.desktopAvailableHeight - 180)/3);
    property int xpos31:Math.round(Screen.desktopAvailableWidth/3) - (Math.round(((Screen.desktopAvailableHeight - 180)/3)*3/4)/2)
    property int ypos31:heightimg3;
    property int xpos32:xpos31
    property int ypos32:ypos31 + heightimg3

    property int heightimg4:Math.round((Screen.desktopAvailableHeight - (16*paddingall) - navbar))/2;
    property int widthimg4:Math.round(heightimg4*3/4);
    property int xpos41:(Math.round(Screen.desktopAvailableWidth/4) - (widthimg4/2));
    property int ypos41:navbar + Math.round(Screen.desktopAvailableHeight - navbar)/4 - Math.round(heightimg4/2) - paddingall*2 + 40;
    property int xpos42:Math.round(Screen.desktopAvailableWidth)/2 + xpos41;
    property int ypos42:ypos41;
    property int xpos43:xpos41;
    property int yposremain:Screen.desktopAvailableHeight - navbar;
    property int ypos43:Math.round(yposremain/2) + ypos41 ;
    property int xpos44:xpos42;
    property int ypos44:ypos43;
    property int heightimg6:Math.round((Screen.desktopAvailableHeight - (12*paddingall) - navbar))/3;
    property int widthimg6:Math.round(heightimg6*3/4);
    property int xpos61:paddingall + (Math.round(Screen.desktopAvailableWidth/4) - (paddingall) - (widthimg6/2));
    property int ypos61:navbar + Math.round(Screen.desktopAvailableHeight - navbar)/6 - Math.round(heightimg6/2) + 40;
    property int xpos62:Math.round(Screen.desktopAvailableWidth)/2 + xpos61;
    property int ypos62:ypos61;
    property int xpos63:xpos61;
    property int ypos63:navbar + Math.round(Screen.desktopAvailableHeight - navbar)/3 + paddingall + 40;
    property int xpos64:xpos62;
    property int ypos64:ypos63;
    property int xpos65:xpos61;
    property int ypos65:navbar + Math.round(Screen.desktopAvailableHeight - navbar)*2/3 + paddingall + 40;
    property int xpos66:xpos62;
    property int ypos66:ypos65;

    property int heightimg9:Math.round((Screen.desktopAvailableHeight - (12*paddingall) - navbar))/3;
    property int widthimg9:Math.round(heightimg9*3/4);
    property int xpos91:Math.round(Screen.desktopAvailableWidth/6)- (widthimg9/2);
    property int ypos91:navbar + Math.round(Screen.desktopAvailableHeight - navbar)/6 - Math.round(heightimg6/2) - paddingall + 50;
    property int xpos92:Math.round(Screen.desktopAvailableWidth/3) + xpos91;
    property int ypos92:ypos91;
    property int xpos93:(Math.round(Screen.desktopAvailableWidth*2/3)+ xpos91);
    property int ypos93:ypos91;
    property int xpos94:xpos91;
    property int ypos94:ypos91 + Math.round(Screen.desktopAvailableHeight - navbar)/3;
    property int xpos95:xpos92;
    property int ypos95:ypos94;
    property int xpos96:xpos93;
    property int ypos96:ypos94;
    property int xpos97:xpos91;
    property int ypos97:ypos91 + Math.round(Screen.desktopAvailableHeight - navbar)*2/3;
    property int xpos98:xpos92;
    property int ypos98:ypos97;
    property int xpos99:xpos93;
    property int ypos99:ypos97;


    property int heightimg12:Math.round((Screen.desktopAvailableHeight - (12*paddingall) - navbar))/4;
    property int widthimg12:Math.round(heightimg9*3/4);
    property int xpos121:Math.round(Screen.desktopAvailableWidth/6)- (widthimg12/2);
    property int ypos121:navbar + Math.round(Screen.desktopAvailableHeight - navbar)/8 - Math.round(heightimg12/2) - paddingall + 50;
    property int xpos122:Math.round(Screen.desktopAvailableWidth/3) + xpos121;
    property int ypos122:ypos121;
    property int xpos123:Math.round(Screen.desktopAvailableWidth*2/3) + xpos121;
    property int ypos123:ypos121;
    property int xpos124:xpos121;
    property int ypos124:ypos121 + Math.round(Screen.desktopAvailableHeight - navbar)/4;
    property int xpos125:xpos122;
    property int ypos125:ypos124;
    property int xpos126:xpos123;
    property int ypos126:ypos124;
    property int xpos127:xpos121;
    property int ypos127:ypos121 + Math.round(Screen.desktopAvailableHeight - navbar)/2;
    property int xpos128:xpos122;
    property int ypos128:ypos127;
    property int xpos129:xpos123;
    property int ypos129:ypos127;
    property int xpos1210:xpos121;
    property int ypos1210:ypos121 + Math.round(Screen.desktopAvailableHeight - navbar)*3/4;
    property int xpos1211:xpos122;
    property int ypos1211:ypos1210;
    property int xpos1212:xpos123;
    property int ypos1212:ypos1210;

    property int level1:1;
    property int level2:0;
    property int level3:0;

    property double startTime: 0
    property int secondsElapsed: 0
    property int progressbarwidth:Screen.desktopAvailableWidth - 100;
    property int progressbarwidthprogress:0;
    StackView {
         z:2;
         id: stackView
         anchors.fill: parent
         Component.onCompleted: {
             push( { item: items[0], destroyOnPop:false })
         }
         property variant items: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout2.qml"),Qt.resolvedUrl("layout2.qml"),Qt.resolvedUrl("layout2.qml"),Qt.resolvedUrl("layout4.qml"),Qt.resolvedUrl("layout4.qml"),Qt.resolvedUrl("layout4.qml"),Qt.resolvedUrl("layout4.qml"),Qt.resolvedUrl("layout6.qml"),Qt.resolvedUrl("layout6.qml"),Qt.resolvedUrl("layout6.qml"),Qt.resolvedUrl("layout6.qml"),Qt.resolvedUrl("layout9.qml"),Qt.resolvedUrl("layout9.qml"),Qt.resolvedUrl("layout9.qml"),Qt.resolvedUrl("layout9.qml"),Qt.resolvedUrl("layout12.qml"),Qt.resolvedUrl("layout12.qml"),Qt.resolvedUrl("layout12.qml"),Qt.resolvedUrl("layout12.qml"),Qt.resolvedUrl("layout12.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items02: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout202.qml"),Qt.resolvedUrl("layout202.qml"),Qt.resolvedUrl("layout202.qml"),Qt.resolvedUrl("layout402.qml"),Qt.resolvedUrl("layout402.qml"),Qt.resolvedUrl("layout402.qml"),Qt.resolvedUrl("layout402.qml"),Qt.resolvedUrl("layout602.qml"),Qt.resolvedUrl("layout602.qml"),Qt.resolvedUrl("layout602.qml"),Qt.resolvedUrl("layout602.qml"),Qt.resolvedUrl("layout902.qml"),Qt.resolvedUrl("layout902.qml"),Qt.resolvedUrl("layout902.qml"),Qt.resolvedUrl("layout902.qml"),Qt.resolvedUrl("layout1202.qml"),Qt.resolvedUrl("layout1202.qml"),Qt.resolvedUrl("layout1202.qml"),Qt.resolvedUrl("layout1202.qml"),Qt.resolvedUrl("layout1202.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items03: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout203.qml"),Qt.resolvedUrl("layout203.qml"),Qt.resolvedUrl("layout203.qml"),Qt.resolvedUrl("layout403.qml"),Qt.resolvedUrl("layout403.qml"),Qt.resolvedUrl("layout403.qml"),Qt.resolvedUrl("layout403.qml"),Qt.resolvedUrl("layout603.qml"),Qt.resolvedUrl("layout603.qml"),Qt.resolvedUrl("layout603.qml"),Qt.resolvedUrl("layout603.qml"),Qt.resolvedUrl("layout903.qml"),Qt.resolvedUrl("layout903.qml"),Qt.resolvedUrl("layout903.qml"),Qt.resolvedUrl("layout903.qml"),Qt.resolvedUrl("layout1203.qml"),Qt.resolvedUrl("layout1203.qml"),Qt.resolvedUrl("layout1203.qml"),Qt.resolvedUrl("layout1203.qml"),Qt.resolvedUrl("layout1203.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items04: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout204.qml"),Qt.resolvedUrl("layout204.qml"),Qt.resolvedUrl("layout204.qml"),Qt.resolvedUrl("layout404.qml"),Qt.resolvedUrl("layout404.qml"),Qt.resolvedUrl("layout404.qml"),Qt.resolvedUrl("layout404.qml"),Qt.resolvedUrl("layout604.qml"),Qt.resolvedUrl("layout604.qml"),Qt.resolvedUrl("layout604.qml"),Qt.resolvedUrl("layout604.qml"),Qt.resolvedUrl("layout904.qml"),Qt.resolvedUrl("layout904.qml"),Qt.resolvedUrl("layout904.qml"),Qt.resolvedUrl("layout904.qml"),Qt.resolvedUrl("layout1204.qml"),Qt.resolvedUrl("layout1204.qml"),Qt.resolvedUrl("layout1204.qml"),Qt.resolvedUrl("layout1204.qml"),Qt.resolvedUrl("layout1204.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items05: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout205.qml"),Qt.resolvedUrl("layout205.qml"),Qt.resolvedUrl("layout205.qml"),Qt.resolvedUrl("layout405.qml"),Qt.resolvedUrl("layout405.qml"),Qt.resolvedUrl("layout405.qml"),Qt.resolvedUrl("layout405.qml"),Qt.resolvedUrl("layout605.qml"),Qt.resolvedUrl("layout605.qml"),Qt.resolvedUrl("layout605.qml"),Qt.resolvedUrl("layout605.qml"),Qt.resolvedUrl("layout905.qml"),Qt.resolvedUrl("layout905.qml"),Qt.resolvedUrl("layout905.qml"),Qt.resolvedUrl("layout905.qml"),Qt.resolvedUrl("layout1205.qml"),Qt.resolvedUrl("layout1205.qml"),Qt.resolvedUrl("layout1205.qml"),Qt.resolvedUrl("layout1205.qml"),Qt.resolvedUrl("layout1205.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items06: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout206.qml"),Qt.resolvedUrl("layout206.qml"),Qt.resolvedUrl("layout206.qml"),Qt.resolvedUrl("layout406.qml"),Qt.resolvedUrl("layout406.qml"),Qt.resolvedUrl("layout406.qml"),Qt.resolvedUrl("layout406.qml"),Qt.resolvedUrl("layout606.qml"),Qt.resolvedUrl("layout606.qml"),Qt.resolvedUrl("layout606.qml"),Qt.resolvedUrl("layout606.qml"),Qt.resolvedUrl("layout906.qml"),Qt.resolvedUrl("layout906.qml"),Qt.resolvedUrl("layout906.qml"),Qt.resolvedUrl("layout906.qml"),Qt.resolvedUrl("layout1206.qml"),Qt.resolvedUrl("layout1206.qml"),Qt.resolvedUrl("layout1206.qml"),Qt.resolvedUrl("layout1206.qml"),Qt.resolvedUrl("layout1206.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items07: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout207.qml"),Qt.resolvedUrl("layout207.qml"),Qt.resolvedUrl("layout207.qml"),Qt.resolvedUrl("layout407.qml"),Qt.resolvedUrl("layout407.qml"),Qt.resolvedUrl("layout407.qml"),Qt.resolvedUrl("layout407.qml"),Qt.resolvedUrl("layout607.qml"),Qt.resolvedUrl("layout607.qml"),Qt.resolvedUrl("layout607.qml"),Qt.resolvedUrl("layout607.qml"),Qt.resolvedUrl("layout907.qml"),Qt.resolvedUrl("layout907.qml"),Qt.resolvedUrl("layout907.qml"),Qt.resolvedUrl("layout907.qml"),Qt.resolvedUrl("layout1207.qml"),Qt.resolvedUrl("layout1207.qml"),Qt.resolvedUrl("layout1207.qml"),Qt.resolvedUrl("layout1207.qml"),Qt.resolvedUrl("layout1207.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items08: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout208.qml"),Qt.resolvedUrl("layout208.qml"),Qt.resolvedUrl("layout208.qml"),Qt.resolvedUrl("layout408.qml"),Qt.resolvedUrl("layout408.qml"),Qt.resolvedUrl("layout408.qml"),Qt.resolvedUrl("layout408.qml"),Qt.resolvedUrl("layout608.qml"),Qt.resolvedUrl("layout608.qml"),Qt.resolvedUrl("layout608.qml"),Qt.resolvedUrl("layout608.qml"),Qt.resolvedUrl("layout908.qml"),Qt.resolvedUrl("layout908.qml"),Qt.resolvedUrl("layout908.qml"),Qt.resolvedUrl("layout908.qml"),Qt.resolvedUrl("layout1208.qml"),Qt.resolvedUrl("layout1208.qml"),Qt.resolvedUrl("layout1208.qml"),Qt.resolvedUrl("layout1208.qml"),Qt.resolvedUrl("layout1208.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items09: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout209.qml"),Qt.resolvedUrl("layout209.qml"),Qt.resolvedUrl("layout209.qml"),Qt.resolvedUrl("layout409.qml"),Qt.resolvedUrl("layout409.qml"),Qt.resolvedUrl("layout409.qml"),Qt.resolvedUrl("layout409.qml"),Qt.resolvedUrl("layout609.qml"),Qt.resolvedUrl("layout609.qml"),Qt.resolvedUrl("layout609.qml"),Qt.resolvedUrl("layout609.qml"),Qt.resolvedUrl("layout909.qml"),Qt.resolvedUrl("layout909.qml"),Qt.resolvedUrl("layout909.qml"),Qt.resolvedUrl("layout909.qml"),Qt.resolvedUrl("layout1209.qml"),Qt.resolvedUrl("layout1209.qml"),Qt.resolvedUrl("layout1209.qml"),Qt.resolvedUrl("layout1209.qml"),Qt.resolvedUrl("layout1209.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items10: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout210.qml"),Qt.resolvedUrl("layout210.qml"),Qt.resolvedUrl("layout210.qml"),Qt.resolvedUrl("layout410.qml"),Qt.resolvedUrl("layout410.qml"),Qt.resolvedUrl("layout410.qml"),Qt.resolvedUrl("layout410.qml"),Qt.resolvedUrl("layout610.qml"),Qt.resolvedUrl("layout610.qml"),Qt.resolvedUrl("layout610.qml"),Qt.resolvedUrl("layout610.qml"),Qt.resolvedUrl("layout910.qml"),Qt.resolvedUrl("layout910.qml"),Qt.resolvedUrl("layout910.qml"),Qt.resolvedUrl("layout910.qml"),Qt.resolvedUrl("layout1210.qml"),Qt.resolvedUrl("layout1210.qml"),Qt.resolvedUrl("layout1210.qml"),Qt.resolvedUrl("layout1210.qml"),Qt.resolvedUrl("layout1210.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items11: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout211.qml"),Qt.resolvedUrl("layout211.qml"),Qt.resolvedUrl("layout211.qml"),Qt.resolvedUrl("layout411.qml"),Qt.resolvedUrl("layout411.qml"),Qt.resolvedUrl("layout411.qml"),Qt.resolvedUrl("layout411.qml"),Qt.resolvedUrl("layout611.qml"),Qt.resolvedUrl("layout611.qml"),Qt.resolvedUrl("layout611.qml"),Qt.resolvedUrl("layout611.qml"),Qt.resolvedUrl("layout911.qml"),Qt.resolvedUrl("layout911.qml"),Qt.resolvedUrl("layout911.qml"),Qt.resolvedUrl("layout911.qml"),Qt.resolvedUrl("layout1211.qml"),Qt.resolvedUrl("layout1211.qml"),Qt.resolvedUrl("layout1211.qml"),Qt.resolvedUrl("layout1211.qml"),Qt.resolvedUrl("layout1211.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items12: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout212.qml"),Qt.resolvedUrl("layout212.qml"),Qt.resolvedUrl("layout212.qml"),Qt.resolvedUrl("layout412.qml"),Qt.resolvedUrl("layout412.qml"),Qt.resolvedUrl("layout412.qml"),Qt.resolvedUrl("layout412.qml"),Qt.resolvedUrl("layout612.qml"),Qt.resolvedUrl("layout612.qml"),Qt.resolvedUrl("layout612.qml"),Qt.resolvedUrl("layout612.qml"),Qt.resolvedUrl("layout912.qml"),Qt.resolvedUrl("layout912.qml"),Qt.resolvedUrl("layout912.qml"),Qt.resolvedUrl("layout912.qml"),Qt.resolvedUrl("layout1212.qml"),Qt.resolvedUrl("layout1212.qml"),Qt.resolvedUrl("layout1212.qml"),Qt.resolvedUrl("layout1212.qml"),Qt.resolvedUrl("layout1212.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items13: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout213.qml"),Qt.resolvedUrl("layout213.qml"),Qt.resolvedUrl("layout213.qml"),Qt.resolvedUrl("layout413.qml"),Qt.resolvedUrl("layout413.qml"),Qt.resolvedUrl("layout413.qml"),Qt.resolvedUrl("layout413.qml"),Qt.resolvedUrl("layout613.qml"),Qt.resolvedUrl("layout613.qml"),Qt.resolvedUrl("layout613.qml"),Qt.resolvedUrl("layout613.qml"),Qt.resolvedUrl("layout913.qml"),Qt.resolvedUrl("layout913.qml"),Qt.resolvedUrl("layout913.qml"),Qt.resolvedUrl("layout913.qml"),Qt.resolvedUrl("layout1213.qml"),Qt.resolvedUrl("layout1213.qml"),Qt.resolvedUrl("layout1213.qml"),Qt.resolvedUrl("layout1213.qml"),Qt.resolvedUrl("layout1213.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items14: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout214.qml"),Qt.resolvedUrl("layout214.qml"),Qt.resolvedUrl("layout214.qml"),Qt.resolvedUrl("layout414.qml"),Qt.resolvedUrl("layout414.qml"),Qt.resolvedUrl("layout414.qml"),Qt.resolvedUrl("layout414.qml"),Qt.resolvedUrl("layout614.qml"),Qt.resolvedUrl("layout614.qml"),Qt.resolvedUrl("layout614.qml"),Qt.resolvedUrl("layout614.qml"),Qt.resolvedUrl("layout914.qml"),Qt.resolvedUrl("layout914.qml"),Qt.resolvedUrl("layout914.qml"),Qt.resolvedUrl("layout914.qml"),Qt.resolvedUrl("layout1214.qml"),Qt.resolvedUrl("layout1214.qml"),Qt.resolvedUrl("layout1214.qml"),Qt.resolvedUrl("layout1214.qml"),Qt.resolvedUrl("layout1214.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items15: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout215.qml"),Qt.resolvedUrl("layout215.qml"),Qt.resolvedUrl("layout215.qml"),Qt.resolvedUrl("layout415.qml"),Qt.resolvedUrl("layout415.qml"),Qt.resolvedUrl("layout415.qml"),Qt.resolvedUrl("layout415.qml"),Qt.resolvedUrl("layout615.qml"),Qt.resolvedUrl("layout615.qml"),Qt.resolvedUrl("layout615.qml"),Qt.resolvedUrl("layout615.qml"),Qt.resolvedUrl("layout915.qml"),Qt.resolvedUrl("layout915.qml"),Qt.resolvedUrl("layout915.qml"),Qt.resolvedUrl("layout915.qml"),Qt.resolvedUrl("layout1215.qml"),Qt.resolvedUrl("layout1215.qml"),Qt.resolvedUrl("layout1215.qml"),Qt.resolvedUrl("layout1215.qml"),Qt.resolvedUrl("layout1215.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items16: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout216.qml"),Qt.resolvedUrl("layout216.qml"),Qt.resolvedUrl("layout216.qml"),Qt.resolvedUrl("layout416.qml"),Qt.resolvedUrl("layout416.qml"),Qt.resolvedUrl("layout416.qml"),Qt.resolvedUrl("layout416.qml"),Qt.resolvedUrl("layout616.qml"),Qt.resolvedUrl("layout616.qml"),Qt.resolvedUrl("layout616.qml"),Qt.resolvedUrl("layout616.qml"),Qt.resolvedUrl("layout916.qml"),Qt.resolvedUrl("layout916.qml"),Qt.resolvedUrl("layout916.qml"),Qt.resolvedUrl("layout916.qml"),Qt.resolvedUrl("layout1216.qml"),Qt.resolvedUrl("layout1216.qml"),Qt.resolvedUrl("layout1216.qml"),Qt.resolvedUrl("layout1216.qml"),Qt.resolvedUrl("layout1216.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items17: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout217.qml"),Qt.resolvedUrl("layout217.qml"),Qt.resolvedUrl("layout217.qml"),Qt.resolvedUrl("layout417.qml"),Qt.resolvedUrl("layout417.qml"),Qt.resolvedUrl("layout417.qml"),Qt.resolvedUrl("layout417.qml"),Qt.resolvedUrl("layout617.qml"),Qt.resolvedUrl("layout617.qml"),Qt.resolvedUrl("layout617.qml"),Qt.resolvedUrl("layout617.qml"),Qt.resolvedUrl("layout917.qml"),Qt.resolvedUrl("layout917.qml"),Qt.resolvedUrl("layout917.qml"),Qt.resolvedUrl("layout917.qml"),Qt.resolvedUrl("layout1217.qml"),Qt.resolvedUrl("layout1217.qml"),Qt.resolvedUrl("layout1217.qml"),Qt.resolvedUrl("layout1217.qml"),Qt.resolvedUrl("layout1217.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items18: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout218.qml"),Qt.resolvedUrl("layout218.qml"),Qt.resolvedUrl("layout218.qml"),Qt.resolvedUrl("layout418.qml"),Qt.resolvedUrl("layout418.qml"),Qt.resolvedUrl("layout418.qml"),Qt.resolvedUrl("layout418.qml"),Qt.resolvedUrl("layout618.qml"),Qt.resolvedUrl("layout618.qml"),Qt.resolvedUrl("layout618.qml"),Qt.resolvedUrl("layout618.qml"),Qt.resolvedUrl("layout918.qml"),Qt.resolvedUrl("layout918.qml"),Qt.resolvedUrl("layout918.qml"),Qt.resolvedUrl("layout918.qml"),Qt.resolvedUrl("layout1218.qml"),Qt.resolvedUrl("layout1218.qml"),Qt.resolvedUrl("layout1218.qml"),Qt.resolvedUrl("layout1218.qml"),Qt.resolvedUrl("layout1218.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items19: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout219.qml"),Qt.resolvedUrl("layout219.qml"),Qt.resolvedUrl("layout219.qml"),Qt.resolvedUrl("layout419.qml"),Qt.resolvedUrl("layout419.qml"),Qt.resolvedUrl("layout419.qml"),Qt.resolvedUrl("layout419.qml"),Qt.resolvedUrl("layout619.qml"),Qt.resolvedUrl("layout619.qml"),Qt.resolvedUrl("layout619.qml"),Qt.resolvedUrl("layout619.qml"),Qt.resolvedUrl("layout919.qml"),Qt.resolvedUrl("layout919.qml"),Qt.resolvedUrl("layout919.qml"),Qt.resolvedUrl("layout919.qml"),Qt.resolvedUrl("layout1219.qml"),Qt.resolvedUrl("layout1219.qml"),Qt.resolvedUrl("layout1219.qml"),Qt.resolvedUrl("layout1219.qml"),Qt.resolvedUrl("layout1219.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items20: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout220.qml"),Qt.resolvedUrl("layout220.qml"),Qt.resolvedUrl("layout220.qml"),Qt.resolvedUrl("layout420.qml"),Qt.resolvedUrl("layout420.qml"),Qt.resolvedUrl("layout420.qml"),Qt.resolvedUrl("layout420.qml"),Qt.resolvedUrl("layout620.qml"),Qt.resolvedUrl("layout620.qml"),Qt.resolvedUrl("layout620.qml"),Qt.resolvedUrl("layout620.qml"),Qt.resolvedUrl("layout920.qml"),Qt.resolvedUrl("layout920.qml"),Qt.resolvedUrl("layout920.qml"),Qt.resolvedUrl("layout920.qml"),Qt.resolvedUrl("layout1220.qml"),Qt.resolvedUrl("layout1220.qml"),Qt.resolvedUrl("layout1220.qml"),Qt.resolvedUrl("layout1220.qml"),Qt.resolvedUrl("layout1220.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items21: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout221.qml"),Qt.resolvedUrl("layout221.qml"),Qt.resolvedUrl("layout221.qml"),Qt.resolvedUrl("layout421.qml"),Qt.resolvedUrl("layout421.qml"),Qt.resolvedUrl("layout421.qml"),Qt.resolvedUrl("layout421.qml"),Qt.resolvedUrl("layout621.qml"),Qt.resolvedUrl("layout621.qml"),Qt.resolvedUrl("layout621.qml"),Qt.resolvedUrl("layout621.qml"),Qt.resolvedUrl("layout921.qml"),Qt.resolvedUrl("layout921.qml"),Qt.resolvedUrl("layout921.qml"),Qt.resolvedUrl("layout921.qml"),Qt.resolvedUrl("layout1221.qml"),Qt.resolvedUrl("layout1221.qml"),Qt.resolvedUrl("layout1221.qml"),Qt.resolvedUrl("layout1221.qml"),Qt.resolvedUrl("layout1221.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items22: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout222.qml"),Qt.resolvedUrl("layout222.qml"),Qt.resolvedUrl("layout222.qml"),Qt.resolvedUrl("layout422.qml"),Qt.resolvedUrl("layout422.qml"),Qt.resolvedUrl("layout422.qml"),Qt.resolvedUrl("layout422.qml"),Qt.resolvedUrl("layout622.qml"),Qt.resolvedUrl("layout622.qml"),Qt.resolvedUrl("layout622.qml"),Qt.resolvedUrl("layout622.qml"),Qt.resolvedUrl("layout922.qml"),Qt.resolvedUrl("layout922.qml"),Qt.resolvedUrl("layout1222.qml"),Qt.resolvedUrl("layout1222.qml"),Qt.resolvedUrl("layout1222.qml"),Qt.resolvedUrl("layout1222.qml"),Qt.resolvedUrl("layout1222.qml"),Qt.resolvedUrl("layout1222.qml"),Qt.resolvedUrl("layout1222.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items23: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout223.qml"),Qt.resolvedUrl("layout223.qml"),Qt.resolvedUrl("layout223.qml"),Qt.resolvedUrl("layout423.qml"),Qt.resolvedUrl("layout423.qml"),Qt.resolvedUrl("layout423.qml"),Qt.resolvedUrl("layout423.qml"),Qt.resolvedUrl("layout623.qml"),Qt.resolvedUrl("layout623.qml"),Qt.resolvedUrl("layout623.qml"),Qt.resolvedUrl("layout623.qml"),Qt.resolvedUrl("layout923.qml"),Qt.resolvedUrl("layout923.qml"),Qt.resolvedUrl("layout923.qml"),Qt.resolvedUrl("layout923.qml"),Qt.resolvedUrl("layout1223.qml"),Qt.resolvedUrl("layout1223.qml"),Qt.resolvedUrl("layout1223.qml"),Qt.resolvedUrl("layout1223.qml"),Qt.resolvedUrl("layout1223.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items24: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout224.qml"),Qt.resolvedUrl("layout224.qml"),Qt.resolvedUrl("layout224.qml"),Qt.resolvedUrl("layout424.qml"),Qt.resolvedUrl("layout424.qml"),Qt.resolvedUrl("layout424.qml"),Qt.resolvedUrl("layout424.qml"),Qt.resolvedUrl("layout624.qml"),Qt.resolvedUrl("layout624.qml"),Qt.resolvedUrl("layout624.qml"),Qt.resolvedUrl("layout624.qml"),Qt.resolvedUrl("layout924.qml"),Qt.resolvedUrl("layout924.qml"),Qt.resolvedUrl("layout924.qml"),Qt.resolvedUrl("layout924.qml"),Qt.resolvedUrl("layout1224.qml"),Qt.resolvedUrl("layout1224.qml"),Qt.resolvedUrl("layout1224.qml"),Qt.resolvedUrl("layout1224.qml"),Qt.resolvedUrl("layout1224.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items25: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout225.qml"),Qt.resolvedUrl("layout225.qml"),Qt.resolvedUrl("layout225.qml"),Qt.resolvedUrl("layout425.qml"),Qt.resolvedUrl("layout425.qml"),Qt.resolvedUrl("layout425.qml"),Qt.resolvedUrl("layout425.qml"),Qt.resolvedUrl("layout625.qml"),Qt.resolvedUrl("layout625.qml"),Qt.resolvedUrl("layout625.qml"),Qt.resolvedUrl("layout625.qml"),Qt.resolvedUrl("layout925.qml"),Qt.resolvedUrl("layout925.qml"),Qt.resolvedUrl("layout925.qml"),Qt.resolvedUrl("layout925.qml"),Qt.resolvedUrl("layout1225.qml"),Qt.resolvedUrl("layout1225.qml"),Qt.resolvedUrl("layout1225.qml"),Qt.resolvedUrl("layout1225.qml"),Qt.resolvedUrl("layout1225.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items26: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout226.qml"),Qt.resolvedUrl("layout226.qml"),Qt.resolvedUrl("layout226.qml"),Qt.resolvedUrl("layout426.qml"),Qt.resolvedUrl("layout426.qml"),Qt.resolvedUrl("layout426.qml"),Qt.resolvedUrl("layout426.qml"),Qt.resolvedUrl("layout626.qml"),Qt.resolvedUrl("layout626.qml"),Qt.resolvedUrl("layout626.qml"),Qt.resolvedUrl("layout626.qml"),Qt.resolvedUrl("layout926.qml"),Qt.resolvedUrl("layout926.qml"),Qt.resolvedUrl("layout926.qml"),Qt.resolvedUrl("layout926.qml"),Qt.resolvedUrl("layout1226.qml"),Qt.resolvedUrl("layout1226.qml"),Qt.resolvedUrl("layout1226.qml"),Qt.resolvedUrl("layout1226.qml"),Qt.resolvedUrl("layout1226.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items27: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout227.qml"),Qt.resolvedUrl("layout227.qml"),Qt.resolvedUrl("layout227.qml"),Qt.resolvedUrl("layout427.qml"),Qt.resolvedUrl("layout427.qml"),Qt.resolvedUrl("layout427.qml"),Qt.resolvedUrl("layout427.qml"),Qt.resolvedUrl("layout627.qml"),Qt.resolvedUrl("layout627.qml"),Qt.resolvedUrl("layout627.qml"),Qt.resolvedUrl("layout627.qml"),Qt.resolvedUrl("layout927.qml"),Qt.resolvedUrl("layout927.qml"),Qt.resolvedUrl("layout927.qml"),Qt.resolvedUrl("layout927.qml"),Qt.resolvedUrl("layout1227.qml"),Qt.resolvedUrl("layout1227.qml"),Qt.resolvedUrl("layout1227.qml"),Qt.resolvedUrl("layout1227.qml"),Qt.resolvedUrl("layout1227.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items28: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout228.qml"),Qt.resolvedUrl("layout228.qml"),Qt.resolvedUrl("layout228.qml"),Qt.resolvedUrl("layout428.qml"),Qt.resolvedUrl("layout428.qml"),Qt.resolvedUrl("layout428.qml"),Qt.resolvedUrl("layout428.qml"),Qt.resolvedUrl("layout628.qml"),Qt.resolvedUrl("layout628.qml"),Qt.resolvedUrl("layout628.qml"),Qt.resolvedUrl("layout628.qml"),Qt.resolvedUrl("layout928.qml"),Qt.resolvedUrl("layout928.qml"),Qt.resolvedUrl("layout928.qml"),Qt.resolvedUrl("layout928.qml"),Qt.resolvedUrl("layout1228.qml"),Qt.resolvedUrl("layout1228.qml"),Qt.resolvedUrl("layout1228.qml"),Qt.resolvedUrl("layout1228.qml"),Qt.resolvedUrl("layout1228.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items29: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout229.qml"),Qt.resolvedUrl("layout229.qml"),Qt.resolvedUrl("layout229.qml"),Qt.resolvedUrl("layout429.qml"),Qt.resolvedUrl("layout429.qml"),Qt.resolvedUrl("layout429.qml"),Qt.resolvedUrl("layout429.qml"),Qt.resolvedUrl("layout629.qml"),Qt.resolvedUrl("layout629.qml"),Qt.resolvedUrl("layout629.qml"),Qt.resolvedUrl("layout629.qml"),Qt.resolvedUrl("layout929.qml"),Qt.resolvedUrl("layout929.qml"),Qt.resolvedUrl("layout929.qml"),Qt.resolvedUrl("layout929.qml"),Qt.resolvedUrl("layout1229.qml"),Qt.resolvedUrl("layout1229.qml"),Qt.resolvedUrl("layout1229.qml"),Qt.resolvedUrl("layout1229.qml"),Qt.resolvedUrl("layout1229.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items30: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout230.qml"),Qt.resolvedUrl("layout230.qml"),Qt.resolvedUrl("layout230.qml"),Qt.resolvedUrl("layout430.qml"),Qt.resolvedUrl("layout430.qml"),Qt.resolvedUrl("layout430.qml"),Qt.resolvedUrl("layout430.qml"),Qt.resolvedUrl("layout630.qml"),Qt.resolvedUrl("layout630.qml"),Qt.resolvedUrl("layout630.qml"),Qt.resolvedUrl("layout630.qml"),Qt.resolvedUrl("layout930.qml"),Qt.resolvedUrl("layout930.qml"),Qt.resolvedUrl("layout930.qml"),Qt.resolvedUrl("layout930.qml"),Qt.resolvedUrl("layout1230.qml"),Qt.resolvedUrl("layout1230.qml"),Qt.resolvedUrl("layout1230.qml"),Qt.resolvedUrl("layout1230.qml"),Qt.resolvedUrl("layout1230.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items31: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout231.qml"),Qt.resolvedUrl("layout231.qml"),Qt.resolvedUrl("layout231.qml"),Qt.resolvedUrl("layout431.qml"),Qt.resolvedUrl("layout431.qml"),Qt.resolvedUrl("layout431.qml"),Qt.resolvedUrl("layout431.qml"),Qt.resolvedUrl("layout631.qml"),Qt.resolvedUrl("layout631.qml"),Qt.resolvedUrl("layout631.qml"),Qt.resolvedUrl("layout631.qml"),Qt.resolvedUrl("layout931.qml"),Qt.resolvedUrl("layout931.qml"),Qt.resolvedUrl("layout931.qml"),Qt.resolvedUrl("layout931.qml"),Qt.resolvedUrl("layout1231.qml"),Qt.resolvedUrl("layout1231.qml"),Qt.resolvedUrl("layout1231.qml"),Qt.resolvedUrl("layout1231.qml"),Qt.resolvedUrl("layout1231.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items32: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout232.qml"),Qt.resolvedUrl("layout232.qml"),Qt.resolvedUrl("layout232.qml"),Qt.resolvedUrl("layout432.qml"),Qt.resolvedUrl("layout432.qml"),Qt.resolvedUrl("layout432.qml"),Qt.resolvedUrl("layout432.qml"),Qt.resolvedUrl("layout632.qml"),Qt.resolvedUrl("layout632.qml"),Qt.resolvedUrl("layout632.qml"),Qt.resolvedUrl("layout632.qml"),Qt.resolvedUrl("layout932.qml"),Qt.resolvedUrl("layout932.qml"),Qt.resolvedUrl("layout932.qml"),Qt.resolvedUrl("layout932.qml"),Qt.resolvedUrl("layout1232.qml"),Qt.resolvedUrl("layout1232.qml"),Qt.resolvedUrl("layout1232.qml"),Qt.resolvedUrl("layout1232.qml"),Qt.resolvedUrl("layout1232.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items33: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout233.qml"),Qt.resolvedUrl("layout233.qml"),Qt.resolvedUrl("layout233.qml"),Qt.resolvedUrl("layout433.qml"),Qt.resolvedUrl("layout433.qml"),Qt.resolvedUrl("layout433.qml"),Qt.resolvedUrl("layout433.qml"),Qt.resolvedUrl("layout633.qml"),Qt.resolvedUrl("layout633.qml"),Qt.resolvedUrl("layout633.qml"),Qt.resolvedUrl("layout633.qml"),Qt.resolvedUrl("layout933.qml"),Qt.resolvedUrl("layout933.qml"),Qt.resolvedUrl("layout933.qml"),Qt.resolvedUrl("layout933.qml"),Qt.resolvedUrl("layout1233.qml"),Qt.resolvedUrl("layout1233.qml"),Qt.resolvedUrl("layout1233.qml"),Qt.resolvedUrl("layout1233.qml"),Qt.resolvedUrl("layout1233.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items34: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout234.qml"),Qt.resolvedUrl("layout234.qml"),Qt.resolvedUrl("layout234.qml"),Qt.resolvedUrl("layout434.qml"),Qt.resolvedUrl("layout434.qml"),Qt.resolvedUrl("layout434.qml"),Qt.resolvedUrl("layout434.qml"),Qt.resolvedUrl("layout634.qml"),Qt.resolvedUrl("layout634.qml"),Qt.resolvedUrl("layout634.qml"),Qt.resolvedUrl("layout634.qml"),Qt.resolvedUrl("layout934.qml"),Qt.resolvedUrl("layout1234.qml"),Qt.resolvedUrl("layout1234.qml"),Qt.resolvedUrl("layout934.qml"),Qt.resolvedUrl("layout1234.qml"),Qt.resolvedUrl("layout1234.qml"),Qt.resolvedUrl("layout1234.qml"),Qt.resolvedUrl("layout1234.qml"),Qt.resolvedUrl("layout1234.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items35: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout235.qml"),Qt.resolvedUrl("layout235.qml"),Qt.resolvedUrl("layout235.qml"),Qt.resolvedUrl("layout435.qml"),Qt.resolvedUrl("layout435.qml"),Qt.resolvedUrl("layout435.qml"),Qt.resolvedUrl("layout435.qml"),Qt.resolvedUrl("layout635.qml"),Qt.resolvedUrl("layout635.qml"),Qt.resolvedUrl("layout635.qml"),Qt.resolvedUrl("layout635.qml"),Qt.resolvedUrl("layout935.qml"),Qt.resolvedUrl("layout935.qml"),Qt.resolvedUrl("layout935.qml"),Qt.resolvedUrl("layout935.qml"),Qt.resolvedUrl("layout1235.qml"),Qt.resolvedUrl("layout1235.qml"),Qt.resolvedUrl("layout1235.qml"),Qt.resolvedUrl("layout1235.qml"),Qt.resolvedUrl("layout1235.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items36: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout236.qml"),Qt.resolvedUrl("layout236.qml"),Qt.resolvedUrl("layout236.qml"),Qt.resolvedUrl("layout436.qml"),Qt.resolvedUrl("layout436.qml"),Qt.resolvedUrl("layout436.qml"),Qt.resolvedUrl("layout436.qml"),Qt.resolvedUrl("layout636.qml"),Qt.resolvedUrl("layout636.qml"),Qt.resolvedUrl("layout636.qml"),Qt.resolvedUrl("layout636.qml"),Qt.resolvedUrl("layout936.qml"),Qt.resolvedUrl("layout936.qml"),Qt.resolvedUrl("layout936.qml"),Qt.resolvedUrl("layout936.qml"),Qt.resolvedUrl("layout1236.qml"),Qt.resolvedUrl("layout1236.qml"),Qt.resolvedUrl("layout1236.qml"),Qt.resolvedUrl("layout1236.qml"),Qt.resolvedUrl("layout1236.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components
         property variant items37: [Qt.resolvedUrl("maine.qml"),Qt.resolvedUrl("layout237.qml"),Qt.resolvedUrl("layout237.qml"),Qt.resolvedUrl("layout237.qml"),Qt.resolvedUrl("layout437.qml"),Qt.resolvedUrl("layout437.qml"),Qt.resolvedUrl("layout437.qml"),Qt.resolvedUrl("layout437.qml"),Qt.resolvedUrl("layout637.qml"),Qt.resolvedUrl("layout637.qml"),Qt.resolvedUrl("layout637.qml"),Qt.resolvedUrl("layout637.qml"),Qt.resolvedUrl("layout937.qml"),Qt.resolvedUrl("layout937.qml"),Qt.resolvedUrl("layout937.qml"),Qt.resolvedUrl("layout937.qml"),Qt.resolvedUrl("layout1237.qml"),Qt.resolvedUrl("layout1237.qml"),Qt.resolvedUrl("layout1237.qml"),Qt.resolvedUrl("layout1237.qml"),Qt.resolvedUrl("layout1237.qml"),Qt.resolvedUrl("finish.qml")]  // objects from the components

     }

    KeyGenerator {
        id: keygen
        type: "test"
    }

    MediaPlayer {
        id: playstartagainmp3;
        source:"soundeffect/failuremp3cut.mp3";
    }
    MediaPlayer {
        id: playtrueright;
        source:"soundeffect/trueright.mp3";
    }
    MediaPlayer {
        id: playfalsewrong;
        source:"soundeffect/falsewrong.mp3";
    }
    MediaPlayer {
        id: playbgMusic;
        source:"soundeffect/backgroundcut.mp3";
        loops :Audio.Infinite;
    }
    MediaPlayer {
        id: finishsuccess;
        source:"soundeffect/finishsuccess.mp3";
    }

    MessageDialog {
        id: msgstartagain
        title: "Game Over"
        text: "Time Out"
        visible: false;
        onAccepted: {
            //ST.startagain();
        }
    }

    function restartCounter()  {

            root.startTime = 0;

        }

    function timeChanged()  {
        if(root.startTime==0)
        {
            root.startTime = new Date().getTime(); //returns the number of milliseconds since the epoch (1970-01-01T00:00:00Z);
        }
        var currentTime = new Date().getTime();
        root.secondsElapsed = (currentTime-startTime)/1000;
        //console.log("Reset timer:" + root.secondsElapsed.toString());
        if(resettimer.text == "1"){
            console.log("Finish level");

            root.startTime = 0;
            elapsedTimer.running = false;
            countscreen.text = "1";
            myscore = 3;
            resettimer.text = "0";
            root.secondsElapsed = 0;
            progresswidth.text = 0;
            counterText.width = Math.round(parseInt(progresswidth.text));
        }
        progressbarwidthprogress = Math.round(progressbarwidth*root.secondsElapsed/90);
        //console.log(root.secondsElapsed);
        //progresswidth.text = root.secondsElapsed.toString();
        progresswidth.text = progressbarwidthprogress.toString();

        if(root.secondsElapsed >= 90){
            msgstartagain.visible = true;
            root.startTime = 0;
            elapsedTimer.running = false;
            countscreen.text = "1";
            myscore = 3;
            progresswidth.text = "0";
            stackView.push({ item: Qt.resolvedUrl("maine.qml"), destroyOnPop:false })
        }
    }

    Rectangle {
        id: mymenu
        z:3
        x:10
        y:125
        width: 460
        height: 100
        color: "black"

        property bool menu_shown: false

        /* this rectangle contains the "menu" */
        Rectangle {
            id: mymenu_bar_
            anchors.top: parent.top
            width: parent.width; height: 100; color: "darkBlue"
           Rectangle {
                id: mymenu_button_
                anchors {left: parent.left; verticalCenter: parent.verticalCenter; margins: 24 }
                color: "white"; width: 64; height: 64; smooth: true
                scale: ma_.pressed ? 1.2 : 1
                Text { anchors.centerIn: parent; font.pixelSize: 48; text: "!" }
                MouseArea { id: myma_; anchors.fill: parent; onClicked: mymenuonMenu(); }
            }
        }
    }
    Rectangle {
        id: gv_
        z:1
        x:10
        y:125
        width: 460
        height: 640
        color: "black"

        property bool menu_shown: false

        /* this rectangle contains the "menu" */
        Rectangle {
            id: menu_view_
            anchors.fill: parent
            color: "#303030";
            opacity: gv_.menu_shown ? 1 : 0
            Behavior on opacity { NumberAnimation { duration: 300 } }
            ListModel {
                id: mymodel
                ListElement {
                    name:'Home'
                }
                ListElement {
                    name:'Other Apps'
                }
                ListElement {
                    name:'Fanpage'
                }
                ListElement {
                    name:'Rating for us:'
                }
                ListElement {
                    name:'About us: '
                }


            }
            /* this is my sample menu content (TODO: replace with your own)  */
            ListView {
                 id: list
                 anchors.fill: parent
                 model: mymodel
                 delegate: Component {
                     Item {
                         width: parent.width
                         height: 80
                         Column {
                             Text { font.pixelSize: 32;text: name }

                         }
                         MouseArea {
                             anchors.fill: parent
                             onClicked: {
                                list.currentIndex = index
                                 if(index == 0){
                                    Qt.openUrlExternally("https://play.google.com/store/apps/details?id=com.GameLearnEnglish.com")
                                 }
                                 if(index == 1){
                                    Qt.openUrlExternally("https://play.google.com/store/apps/developer?id=Learn+English+247")
                                 }
                                 if(index == 2){
                                    Qt.openUrlExternally("https://www.facebook.com/LearnEnglishConversation")
                                 }
                                 if(index == 3){
                                    Qt.openUrlExternally("https://play.google.com/store/apps/details?id=com.GameLearnEnglish.com")
                                 }
                                 if(index == 4){
                                    Qt.openUrlExternally("https://play.google.com/store/apps/developer?id=Learn+English+247")
                                 }
                                 if(index == 0){
                                    Qt.openUrlExternally("https://play.google.com/store/apps/details?id=com.GameLearnEnglish.com")
                                 }

                             }
                         }
                     }
                 }
                 highlight: Rectangle {
                     color: 'grey'
                 }
                 focus: true
                 onCurrentItemChanged: console.log(model.get(list.currentIndex).name + ' selected')
             }
        }

        /* this rectangle contains the "normal" view in your app */
        Rectangle {
            id: normal_view_
            anchors.fill: parent
            color: "white"

            /* this is what moves the normal view aside */
            transform: Translate {
                id: game_translate_
                x: 0
                Behavior on x { NumberAnimation { duration: 400; easing.type: Easing.OutQuad } }
            }

            /* this is the menu shadow */
            BorderImage {
                id: menu_shadow_
                anchors.top: parent.top
                anchors.bottom: parent.bottom
                anchors.left: parent.left
                anchors.margins: -10
                z: -1 /* this will place it below normal_view_ */
                visible: gv_.menu_shown
                source: "shadow.png"
                border { left: 12; top: 12; right: 12; bottom: 12 }
            }
            /* quick and dirty menu "button" for this demo (TODO: replace with your own) */
            Rectangle {
                id: menu_bar_
                anchors.top: parent.top
                width: parent.width; height: 100; color: "darkBlue"
                Text {
                    id: prompttext
                    color : "red"
                    text: qsTr("Click on Menu Icon to hide menu")
                }
               Rectangle {
                    id: menu_button_
                    anchors {left: parent.left; verticalCenter: parent.verticalCenter; margins: 24 }
                    color: "white"; width: 64; height: 64; smooth: true
                    scale: ma_.pressed ? 1.2 : 1
                    Text { anchors.centerIn: parent; font.pixelSize: 48; text: "!" }
                    MouseArea { id: ma_; anchors.fill: parent; onClicked: gv_.onMenu(); }
                }
            }


            /* this is my sample "normal" contant (TODO: replace with your own)  */


            /* put this last to "steal" touch on the normal window when menu is shown */
            MouseArea {
                anchors.fill: parent
                enabled: gv_.menu_shown
                onClicked: gv_.onMenu();
            }
        }

        /* this functions toggles the menu and starts the animation */
        function onMenu()
        {
            game_translate_.x = gv_.menu_shown ? 0 : gv_.width * 0.9
            gv_.menu_shown = !gv_.menu_shown;
            if(gv_.menu_shown == false){
                mymenu.z = 5;
                gv_.visible = false;
                gv_.z = -1;
            }else{
                mymenu.z = -1;
                gv_.visible = true;
                gv_.z = 5;
            }

        }
    }
    function mymenuonMenu()
    {
        gv_.z = 5
        gv_.visible = true;
        game_translate_.x = gv_.menu_shown ? 0 : gv_.width * 0.9
        gv_.menu_shown = !gv_.menu_shown;
    }


    Timer  {
            id: elapsedTimer
            interval: 100;
            running: false;
            repeat: true;
            onTriggered: root.timeChanged()
        }
    Rectangle {
         x:textpos;
         y:navbar;
         z:5;
         id: counterTextbg;
         opacity: 0.5;
         visible: false;
         color: "blue";
         width: progressbarwidth;
         height:30;
     }
    Rectangle {
         x:textpos;
         y:navbar;
         z:5;
         id: counterText;
         //opacity: 0.5;
         visible: true;
         color: "red";
         width: Math.round(parseInt(progresswidth.text));
         height:30;
     }
    Rectangle {
         x:textpos + 200 ;
         y:textposy;
         z:5;
         id: live3all;
         width:0;
         height:0;
         //opacity: 0.5;
         visible: true;
         Image {
             id:live01
            width:30;height:40;x:textpos + 200;y:textposy;z:5;visible: true;
            source:"live.png"
         }
         Image {
             id:live02
            width:30;height:40;x:textpos + 233;y:textposy;z:5;visible: true;
            source:"live.png"
         }
         Image {
             id:live03
            width:30;height:40;x:textpos + 266;y:textposy;z:5;visible: true;
            source:"live.png"
         }
     }
    Label {
          visible:false
          id: currentlevelcp
          text: "1"
      }

    Label {
          visible:false
          id: resettimer
          text: "0"
      }

    Label {
          visible:false
          id: wordaction
          text: ""
      }
    Label {
          visible:false
          id: countscreen
          text: "1"
      }
    Label {
          visible:false
          id: countscreen02
          text: "1"
      }
    Label {
          visible:false
          id: currentlevel
          text: "1"
      }
    Label {
          visible:false
          id: progresswidth
          text: "0"
      }

    Label {
          visible:false
          id: labelTest
          text: "testthanhhostep0"
      }

    Label {
          visible:false
          id: labelTeststep1
          text: "testthanhhostep1"
      }
    Label {
          visible:false
          id: nextstepattachment
          text: ""
          states: State {
              name: "showme"
              PropertyChanges { target: nextstep;text:"aaaaaaabbbbcc";visible:true }
          }
      }
    Label {
          visible:false
          id: nextstepcontent
          text: ""
      }




    Rectangle {
        id: someComponent
        visible: false
         Text { id: mytext;text: "a"}
        function someSlot(v) {
            mytext.text = v
            console.log(v)
        }
    }


    Component {
        id: comp1
        Rectangle {
            color: "red"

           property ListModel qwe: ListModel {}
            Button {
                anchors.bottom: parent.bottom
                width: parent.width
                text: "Get Data"
                onClicked: JS.makeList()
                //onClicked: JS.createSpriteObjects()
            }
        }
   }
    Component {
         id: comp3
         Rectangle {
             color: "red"

             Text {
                 id: mtext
                 anchors.centerIn: parent
                 text: "Third Page"
             }
         }
     }
     Component {
         id: comp2
         Rectangle {
             color: "lightgreen"

             Text {
                 id: mtext
                 anchors.centerIn: parent
                 text: "Second Page"
             }

             MouseArea {
                 id: mouseArea
                 anchors.fill: parent
                 onClicked: mtext.text += " Clicked"
             }
         }
     }


     Component.onCompleted: {

         //playbgMusic.play();

         //console.log("Widthimg6:" + widthimg6.toString());
         //console.log("xpos61:" + xpos61.toString());
     }

}
