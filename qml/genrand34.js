function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["driver","dustman","electrician","engineer","farmer","firefighter","fisherman","florist","gardener","hairdresser","journalist","judge",];
    myarrayjs.push("doctor");
    }
    if(screennum == 2)    {
    var learne = ["doctor","dustman","electrician","engineer","farmer","firefighter","fisherman","florist","gardener","hairdresser","journalist","judge",];
    myarrayjs.push("driver");
    }
    if(screennum == 3)    {
    var learne = ["doctor","driver","electrician","engineer","farmer","firefighter","fisherman","florist","gardener","hairdresser","journalist","judge",];
    myarrayjs.push("dustman");
    }
    if(screennum == 4)    {
    var learne = ["doctor","driver","dustman","engineer","farmer","firefighter","fisherman","florist","gardener","hairdresser","journalist","judge",];
    myarrayjs.push("electrician");
    }
    if(screennum == 5)    {
    var learne = ["doctor","driver","dustman","electrician","farmer","firefighter","fisherman","florist","gardener","hairdresser","journalist","judge",];
    myarrayjs.push("engineer");
    }
    if(screennum == 6)    {
    var learne = ["doctor","driver","dustman","electrician","engineer","firefighter","fisherman","florist","gardener","hairdresser","journalist","judge",];
    myarrayjs.push("farmer");
    }
    if(screennum == 7)    {
    var learne = ["doctor","driver","dustman","electrician","engineer","farmer","fisherman","florist","gardener","hairdresser","journalist","judge",];
    myarrayjs.push("firefighter");
    }
    if(screennum == 8)    {
    var learne = ["doctor","driver","dustman","electrician","engineer","farmer","firefighter","florist","gardener","hairdresser","journalist","judge",];
    myarrayjs.push("fisherman");
    }
    if(screennum == 9)    {
    var learne = ["doctor","driver","dustman","electrician","engineer","farmer","firefighter","fisherman","gardener","hairdresser","journalist","judge",];
    myarrayjs.push("florist");
    }
    if(screennum == 10)    {
    var learne = ["doctor","driver","dustman","electrician","engineer","farmer","firefighter","fisherman","florist","hairdresser","journalist","judge",];
    myarrayjs.push("gardener");
    }
    if(screennum == 11)    {
    var learne = ["doctor","driver","dustman","electrician","engineer","farmer","firefighter","fisherman","florist","gardener","journalist","judge",];
    myarrayjs.push("hairdresser");
    }
    if(screennum == 12)    {
    var learne = ["doctor","driver","dustman","electrician","engineer","farmer","firefighter","fisherman","florist","gardener","hairdresser","judge",];
    myarrayjs.push("journalist");
    }
    if(screennum == 13)    {
    var learne = ["doctor","driver","dustman","electrician","engineer","farmer","firefighter","fisherman","florist","gardener","hairdresser","journalist",];
    myarrayjs.push("judge");
    }
    if(screennum == 14)    {
    var learne = ["doctor","driver","dustman","electrician","engineer","farmer","firefighter","fisherman","florist","gardener","hairdresser","journalist",];
    myarrayjs.push("judge");
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
    if((screennum >= 12) && (screennum <= 12))    {
       return genrand(screennum,8);
    }
    if((screennum >= 13) && (screennum <= 21))    {
       return genrand(screennum,11);
    }

}
