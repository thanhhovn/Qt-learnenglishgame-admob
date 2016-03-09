function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["magazine","match","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("lipstick");
    }
    if(screennum == 2)    {
    var learne = ["lipstick","match","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("magazine");
    }
    if(screennum == 3)    {
    var learne = ["lipstick","magazine","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("match");
    }
    if(screennum == 4)    {
    var learne = ["lipstick","magazine","match","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("mirror");
    }
    if(screennum == 5)    {
    var learne = ["lipstick","magazine","match","mirror","newspaper","notebook","passport","pencil","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("mobile phone");
    }
    if(screennum == 6)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","notebook","passport","pencil","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("newspaper");
    }
    if(screennum == 7)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","passport","pencil","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("notebook");
    }
    if(screennum == 8)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","pencil","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("passport");
    }
    if(screennum == 9)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","passport","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("pencil");
    }
    if(screennum == 10)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","passport","pencil","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("postcard");
    }
    if(screennum == 11)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("purse");
    }
    if(screennum == 12)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("rubbish");
    }
    if(screennum == 13)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","rubbish","stamp","sweet","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("scissors");
    }
    if(screennum == 14)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","rubbish","scissors","sweet","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("stamp");
    }
    if(screennum == 15)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","rubbish","scissors","stamp","toothbrush","umbrella","wallet","watch","water",];
    myarrayjs.push("sweet");
    }
    if(screennum == 16)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","rubbish","scissors","stamp","sweet","umbrella","wallet","watch","water",];
    myarrayjs.push("toothbrush");
    }
    if(screennum == 17)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","wallet","watch","water",];
    myarrayjs.push("umbrella");
    }
    if(screennum == 18)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","watch","water",];
    myarrayjs.push("wallet");
    }
    if(screennum == 19)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","water",];
    myarrayjs.push("watch");
    }
    if(screennum == 20)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch",];
    myarrayjs.push("water");
    }
    if(screennum == 21)    {
    var learne = ["lipstick","magazine","match","mirror","mobile phone","newspaper","notebook","passport","pencil","postcard","purse","rubbish","scissors","stamp","sweet","toothbrush","umbrella","wallet","watch",];
    myarrayjs.push("water");
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
