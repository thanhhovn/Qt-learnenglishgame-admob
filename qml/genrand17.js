function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eagle","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("bee");
    }
    if(screennum == 2)    {
    var learne = ["bee","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eagle","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("beetle");
    }
    if(screennum == 3)    {
    var learne = ["bee","beetle","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eagle","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("blackbird");
    }
    if(screennum == 4)    {
    var learne = ["bee","beetle","blackbird","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eagle","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("buffalo");
    }
    if(screennum == 5)    {
    var learne = ["bee","beetle","blackbird","buffalo","carp","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eagle","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("butterfly");
    }
    if(screennum == 6)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eagle","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("carp");
    }
    if(screennum == 7)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eagle","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("catfish");
    }
    if(screennum == 8)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","catfish","crab","crawfish","cricket","crow","dolphin","dove","eagle","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("cockroach");
    }
    if(screennum == 9)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crawfish","cricket","crow","dolphin","dove","eagle","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("crab");
    }
    if(screennum == 10)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","cricket","crow","dolphin","dove","eagle","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("crawfish");
    }
    if(screennum == 11)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","crow","dolphin","dove","eagle","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("cricket");
    }
    if(screennum == 12)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","dolphin","dove","eagle","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("crow");
    }
    if(screennum == 13)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","crow","dove","eagle","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("dolphin");
    }
    if(screennum == 14)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","eagle","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("dove");
    }
    if(screennum == 15)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eel","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("eagle");
    }
    if(screennum == 16)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eagle","flamingo","hawk","heron","jellyfish",];
    myarrayjs.push("eel");
    }
    if(screennum == 17)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eagle","eel","hawk","heron","jellyfish",];
    myarrayjs.push("flamingo");
    }
    if(screennum == 18)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eagle","eel","flamingo","heron","jellyfish",];
    myarrayjs.push("hawk");
    }
    if(screennum == 19)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eagle","eel","flamingo","hawk","jellyfish",];
    myarrayjs.push("heron");
    }
    if(screennum == 20)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eagle","eel","flamingo","hawk","heron",];
    myarrayjs.push("jellyfish");
    }
    if(screennum == 21)    {
    var learne = ["bee","beetle","blackbird","buffalo","butterfly","carp","catfish","cockroach","crab","crawfish","cricket","crow","dolphin","dove","eagle","eel","flamingo","hawk","heron",];
    myarrayjs.push("jellyfish");
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
