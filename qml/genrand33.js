function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["airport","bicycle","boat","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","ship","station","subway","taxi","train","truck","van",];
    myarrayjs.push("airplane");
    }
    if(screennum == 2)    {
    var learne = ["airplane","bicycle","boat","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","ship","station","subway","taxi","train","truck","van",];
    myarrayjs.push("airport");
    }
    if(screennum == 3)    {
    var learne = ["airplane","airport","boat","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","ship","station","subway","taxi","train","truck","van",];
    myarrayjs.push("bicycle");
    }
    if(screennum == 4)    {
    var learne = ["airplane","airport","bicycle","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","ship","station","subway","taxi","train","truck","van",];
    myarrayjs.push("boat");
    }
    if(screennum == 5)    {
    var learne = ["airplane","airport","bicycle","boat","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","ship","station","subway","taxi","train","truck","van",];
    myarrayjs.push("bridge");
    }
    if(screennum == 6)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","ship","station","subway","taxi","train","truck","van",];
    myarrayjs.push("bus driver");
    }
    if(screennum == 7)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus","car","helicopter","hovercraft","motorcycle","port","ship","station","subway","taxi","train","truck","van",];
    myarrayjs.push("bus terminal");
    }
    if(screennum == 8)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","car","helicopter","hovercraft","motorcycle","port","ship","station","subway","taxi","train","truck","van",];
    myarrayjs.push("bus");
    }
    if(screennum == 9)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","bus","helicopter","hovercraft","motorcycle","port","ship","station","subway","taxi","train","truck","van",];
    myarrayjs.push("car");
    }
    if(screennum == 10)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","bus","car","hovercraft","motorcycle","port","ship","station","subway","taxi","train","truck","van",];
    myarrayjs.push("helicopter");
    }
    if(screennum == 11)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","bus","car","helicopter","motorcycle","port","ship","station","subway","taxi","train","truck","van",];
    myarrayjs.push("hovercraft");
    }
    if(screennum == 12)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","port","ship","station","subway","taxi","train","truck","van",];
    myarrayjs.push("motorcycle");
    }
    if(screennum == 13)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","ship","station","subway","taxi","train","truck","van",];
    myarrayjs.push("port");
    }
    if(screennum == 14)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","station","subway","taxi","train","truck","van",];
    myarrayjs.push("ship");
    }
    if(screennum == 15)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","ship","subway","taxi","train","truck","van",];
    myarrayjs.push("station");
    }
    if(screennum == 16)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","ship","station","taxi","train","truck","van",];
    myarrayjs.push("subway");
    }
    if(screennum == 17)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","ship","station","subway","train","truck","van",];
    myarrayjs.push("taxi");
    }
    if(screennum == 18)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","ship","station","subway","taxi","truck","van",];
    myarrayjs.push("train");
    }
    if(screennum == 19)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","ship","station","subway","taxi","train","van",];
    myarrayjs.push("truck");
    }
    if(screennum == 20)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","ship","station","subway","taxi","train","truck",];
    myarrayjs.push("van");
    }
    if(screennum == 21)    {
    var learne = ["airplane","airport","bicycle","boat","bridge","bus driver","bus terminal","bus","car","helicopter","hovercraft","motorcycle","port","ship","station","subway","taxi","train","truck",];
    myarrayjs.push("van");
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
