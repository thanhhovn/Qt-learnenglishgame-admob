function genrand(screennum,numofwords) {
    //currentlevel.text = "2";
var myarrayjs = [];
if(screennum == 1)    {
    var learne = ["making", "opening","opening","pulling","putting","reading","running","seeing","singing","sitting","sleeping","smelling","smiling","smoking","speaking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("looking");
}
if(screennum == 2)    {
    var learne = ["looking","opening","opening","pulling","putting","reading","running","seeing","singing","sitting","sleeping","smelling","smiling","smoking","speaking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("making");
}
if(screennum == 3)    {
    var learne = ["looking","making","pulling","putting","reading","running","seeing","singing","sitting","sleeping","smelling","smiling","smoking","speaking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("opening");
}
if(screennum == 4)    {
    var learne = ["looking","making","opening","putting","reading","running","seeing","singing","sitting","sleeping","smelling","smiling","smoking","speaking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("pulling");
}
if(screennum == 5)    {
    var learne = ["looking","making","opening","pulling","reading","running","seeing","singing","sitting","sleeping","smelling","smiling","smoking","speaking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("putting");
}
if(screennum == 6)    {
    var learne = ["looking","making","opening","pulling","reading","running","seeing","singing","sitting","sleeping","smelling","smiling","smoking","speaking","standing","stopping","swimming","tasting"];
    myarrayjs.push("pushing");
}
if(screennum == 7)    {
    var learne = ["looking","making","opening","pulling","putting","running","seeing","singing","sitting","sleeping","smelling","smiling","smoking","speaking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("reading");
}
if(screennum == 8)    {
    var learne = ["looking","making","opening","pulling","putting","reading","seeing","singing","sitting","sleeping","smelling","smiling","smoking","speaking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("running");
}
if(screennum == 9)    {
    var learne = ["looking","making","opening","pulling","putting","reading","singing","sitting","sleeping","smelling","smiling","smoking","speaking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("seeing");
}
if(screennum == 10)    {
    var learne = ["looking","making","opening","pulling","putting","reading","sitting","sleeping","smelling","smiling","smoking","speaking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("singing");
}
if(screennum == 11)    {
    var learne = ["looking","making","opening","pulling","putting","reading","singing","sleeping","smelling","smiling","smoking","speaking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("sitting");
}
if(screennum == 12)    {
    var learne = ["looking","making","opening","pulling","putting","reading","singing","sitting","smelling","smiling","smoking","speaking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("sleeping");
}
if(screennum == 13)    {
    var learne = ["looking","making","opening","pulling","putting","reading","singing","sitting","smiling","smoking","speaking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("smelling");
}
if(screennum == 14)    {
    var learne = ["looking","making","opening","pulling","putting","reading","singing","sitting","smelling","smoking","speaking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("smiling");
}
if(screennum == 15)    {
    var learne = ["looking","making","opening","pulling","putting","reading","singing","sitting","smelling","speaking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("smoking");
}
if(screennum == 16)    {
    var learne = ["looking","making","opening","pulling","putting","reading","singing","sitting","smelling","smoking","standing","stopping","swimming","tasting","pushing"];
    myarrayjs.push("speaking");
}
if(screennum == 17)    {
    var learne = ["looking","making","opening","pulling","putting","reading","singing","sitting","smelling","smoking","smoking","stopping","swimming","tasting","pushing"];
    myarrayjs.push("standing");
}
if(screennum == 18)    {
    var learne = ["looking","making","opening","pulling","putting","reading","singing","sitting","smelling","smoking","smoking","standing","swimming","tasting","pushing"];
    myarrayjs.push("stopping");
}
if(screennum == 19)    {
    var learne = ["looking","making","opening","pulling","putting","reading","singing","sitting","smelling","smoking","smoking","standing","stopping","tasting","pushing"];
    myarrayjs.push("swimming");
}
if(screennum == 20)    {
    var learne = ["looking","making","opening","pulling","putting","reading","singing","sitting","smelling","smoking","smoking","standing","stopping","swimming","pushing"];
    myarrayjs.push("tasting");
}
if(screennum == 21)    {
    var learne = ["looking","making","opening","pulling","putting","reading","singing","sitting","smelling","smoking","smoking","standing","stopping","swimming","pushing"];
    myarrayjs.push("tasting");
}

//console.log(screennum);
var numofwordsfinal = numofwords;
console.log("number of words:" + numofwordsfinal.toString());
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
