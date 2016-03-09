function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["insecticide","milk","orchard","plow","produce","rake","roost","scarecrow","scythe","seeds","shovel","sickle","tractor","trough","windmill",];
    myarrayjs.push("hoe");
    }
    if(screennum == 2)    {
    var learne = ["hoe","milk","orchard","plow","produce","rake","roost","scarecrow","scythe","seeds","shovel","sickle","tractor","trough","windmill",];
    myarrayjs.push("insecticide");
    }
    if(screennum == 3)    {
    var learne = ["hoe","insecticide","orchard","plow","produce","rake","roost","scarecrow","scythe","seeds","shovel","sickle","tractor","trough","windmill",];
    myarrayjs.push("milk");
    }
    if(screennum == 4)    {
    var learne = ["hoe","insecticide","milk","plow","produce","rake","roost","scarecrow","scythe","seeds","shovel","sickle","tractor","trough","windmill",];
    myarrayjs.push("orchard");
    }
    if(screennum == 5)    {
    var learne = ["hoe","insecticide","milk","orchard","produce","rake","roost","scarecrow","scythe","seeds","shovel","sickle","tractor","trough","windmill",];
    myarrayjs.push("plow");
    }
    if(screennum == 6)    {
    var learne = ["hoe","insecticide","milk","orchard","plow","rake","roost","scarecrow","scythe","seeds","shovel","sickle","tractor","trough","windmill",];
    myarrayjs.push("produce");
    }
    if(screennum == 7)    {
    var learne = ["hoe","insecticide","milk","orchard","plow","produce","roost","scarecrow","scythe","seeds","shovel","sickle","tractor","trough","windmill",];
    myarrayjs.push("rake");
    }
    if(screennum == 8)    {
    var learne = ["hoe","insecticide","milk","orchard","plow","produce","rake","scarecrow","scythe","seeds","shovel","sickle","tractor","trough","windmill",];
    myarrayjs.push("roost");
    }
    if(screennum == 9)    {
    var learne = ["hoe","insecticide","milk","orchard","plow","produce","rake","roost","scythe","seeds","shovel","sickle","tractor","trough","windmill",];
    myarrayjs.push("scarecrow");
    }
    if(screennum == 10)    {
    var learne = ["hoe","insecticide","milk","orchard","plow","produce","rake","roost","scarecrow","seeds","shovel","sickle","tractor","trough","windmill",];
    myarrayjs.push("scythe");
    }
    if(screennum == 11)    {
    var learne = ["hoe","insecticide","milk","orchard","plow","produce","rake","roost","scarecrow","scythe","shovel","sickle","tractor","trough","windmill",];
    myarrayjs.push("seeds");
    }
    if(screennum == 12)    {
    var learne = ["hoe","insecticide","milk","orchard","plow","produce","rake","roost","scarecrow","scythe","seeds","sickle","tractor","trough","windmill",];
    myarrayjs.push("shovel");
    }
    if(screennum == 13)    {
    var learne = ["hoe","insecticide","milk","orchard","plow","produce","rake","roost","scarecrow","scythe","seeds","shovel","tractor","trough","windmill",];
    myarrayjs.push("sickle");
    }
    if(screennum == 14)    {
    var learne = ["hoe","insecticide","milk","orchard","plow","produce","rake","roost","scarecrow","scythe","seeds","shovel","sickle","trough","windmill",];
    myarrayjs.push("tractor");
    }
    if(screennum == 15)    {
    var learne = ["hoe","insecticide","milk","orchard","plow","produce","rake","roost","scarecrow","scythe","seeds","shovel","sickle","tractor","windmill",];
    myarrayjs.push("trough");
    }
    if(screennum == 16)    {
    var learne = ["hoe","insecticide","milk","orchard","plow","produce","rake","roost","scarecrow","scythe","seeds","shovel","sickle","tractor","trough",];
    myarrayjs.push("windmill");
    }
    if(screennum == 17)    {
    var learne = ["hoe","insecticide","milk","orchard","plow","produce","rake","roost","scarecrow","scythe","seeds","shovel","sickle","tractor","trough",];
    myarrayjs.push("windmill");
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
