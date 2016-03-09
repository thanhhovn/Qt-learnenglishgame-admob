function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("atom");
    }
    if(screennum == 2)    {
    var learne = ["atom","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("attract");
    }
    if(screennum == 3)    {
    var learne = ["atom","attract","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("closed circuit");
    }
    if(screennum == 4)    {
    var learne = ["atom","attract","closed circuit","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("conductor");
    }
    if(screennum == 5)    {
    var learne = ["atom","attract","closed circuit","conductor","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("dry cell");
    }
    if(screennum == 6)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("electricity");
    }
    if(screennum == 7)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("electromagnet");
    }
    if(screennum == 8)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("fuse");
    }
    if(screennum == 9)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("insulator");
    }
    if(screennum == 10)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("laser");
    }
    if(screennum == 11)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("magnetic field");
    }
    if(screennum == 12)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("open circuit");
    }
    if(screennum == 13)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("parallel circuit");
    }
    if(screennum == 14)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","repel","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("permanent magnet");
    }
    if(screennum == 15)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","series circuit","static electricity","switch","terminal","wire",];
    myarrayjs.push("repel");
    }
    if(screennum == 16)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","static electricity","switch","terminal","wire",];
    myarrayjs.push("series circuit");
    }
    if(screennum == 17)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","switch","terminal","wire",];
    myarrayjs.push("static electricity");
    }
    if(screennum == 18)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","terminal","wire",];
    myarrayjs.push("switch");
    }
    if(screennum == 19)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","wire",];
    myarrayjs.push("terminal");
    }
    if(screennum == 20)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal",];
    myarrayjs.push("wire");
    }
    if(screennum == 21)    {
    var learne = ["atom","attract","closed circuit","conductor","dry cell","electricity","electromagnet","fuse","insulator","laser","magnetic field","open circuit","parallel circuit","permanent magnet","repel","series circuit","static electricity","switch","terminal",];
    myarrayjs.push("wire");
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
