function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["antelope","badger","bat","camel","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","pig","piglet","rabbit","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("alligator");
    }
    if(screennum == 2)    {
    var learne = ["alligator","badger","bat","camel","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","pig","piglet","rabbit","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("antelope");
    }
    if(screennum == 3)    {
    var learne = ["alligator","antelope","bat","camel","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","pig","piglet","rabbit","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("badger");
    }
    if(screennum == 4)    {
    var learne = ["alligator","antelope","badger","camel","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","pig","piglet","rabbit","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("bat");
    }
    if(screennum == 5)    {
    var learne = ["alligator","antelope","badger","bat","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","pig","piglet","rabbit","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("camel");
    }
    if(screennum == 6)    {
    var learne = ["alligator","antelope","badger","bat","camel","crocodile","deer","emu","fox","mouse","parrot","pig","piglet","rabbit","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("chimpanzee");
    }
    if(screennum == 7)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","deer","emu","fox","mouse","parrot","pig","piglet","rabbit","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("crocodile");
    }
    if(screennum == 8)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","crocodile","emu","fox","mouse","parrot","pig","piglet","rabbit","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("deer");
    }
    if(screennum == 9)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","crocodile","deer","fox","mouse","parrot","pig","piglet","rabbit","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("emu");
    }
    if(screennum == 10)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","crocodile","deer","emu","mouse","parrot","pig","piglet","rabbit","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("fox");
    }
    if(screennum == 11)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","crocodile","deer","emu","fox","parrot","pig","piglet","rabbit","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("mouse");
    }
    if(screennum == 12)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","crocodile","deer","emu","fox","mouse","pig","piglet","rabbit","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("parrot");
    }
    if(screennum == 13)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","piglet","rabbit","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("pig");
    }
    if(screennum == 14)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","pig","rabbit","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("piglet");
    }
    if(screennum == 15)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","pig","piglet","ram","sheep","snake","turkey","turtle",];
    myarrayjs.push("rabbit");
    }
    if(screennum == 16)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","pig","piglet","rabbit","sheep","snake","turkey","turtle",];
    myarrayjs.push("ram");
    }
    if(screennum == 17)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","pig","piglet","rabbit","ram","snake","turkey","turtle",];
    myarrayjs.push("sheep");
    }
    if(screennum == 18)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","pig","piglet","rabbit","ram","sheep","turkey","turtle",];
    myarrayjs.push("snake");
    }
    if(screennum == 19)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","pig","piglet","rabbit","ram","sheep","snake","turtle",];
    myarrayjs.push("turkey");
    }
    if(screennum == 20)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","pig","piglet","rabbit","ram","sheep","snake","turkey",];
    myarrayjs.push("turtle");
    }
    if(screennum == 21)    {
    var learne = ["alligator","antelope","badger","bat","camel","chimpanzee","crocodile","deer","emu","fox","mouse","parrot","pig","piglet","rabbit","ram","sheep","snake","turkey",];
    myarrayjs.push("turtle");
    }

//console.log(screennum);
var numofwordsfinal = numofwords;
var i=0;
var myrandvar = 0;
var resultarr = 0;
var myarraryjslenght = learne.length;
    for(i=0;i<numofwordsfinal;i++){
        myrandvar = learne.length;
        resultarr = Math.floor((Math.random() * myrandvar));
        myarrayjs.push(learne[resultarr]);
        learne.splice(resultarr, 1);
        //console.log(resultarr);
    }
//console.log(myarrayjs);
var myarrayjsfinal = [];
myrandvar = 0;
resultarr = 0;
myarraryjslenght = myarrayjs.length;
for(i=0;i<myarraryjslenght;i++){
    myrandvar = myarrayjs.length;
    resultarr = Math.floor((Math.random() * myrandvar));
    myarrayjsfinal.push(myarrayjs[resultarr]);
    myarrayjs.splice(resultarr, 1);
    //console.log(resultarr);
}
//console.log(myarrayjsfinal)
return myarrayjsfinal;
}
function truefalsert(level){
    if(level == 0){
        return false;
    }
    if(level == 1){
        return true;
    }
}

function genrandstackview(screennum) {
    if(screennum <= 3)    {
       return genrand(screennum,1);
    }
    if((screennum >= 4) && (screennum <= 7))    {
       return genrand(screennum,3);
    }
    if((screennum >= 8) && (screennum <= 11))    {
       return genrand(screennum,5);
    }
    if((screennum >= 12) && (screennum <= 15))    {
       return genrand(screennum,8);
    }
    if((screennum >= 16) && (screennum <= 21))    {
       return genrand(screennum,11);
    }

}
