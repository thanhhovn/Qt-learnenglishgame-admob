function genrand(screennum,numofwords) {
var myarrayjs = [];
if(screennum == 1)    {
    var learne = ["loud","lucky","many","narrow","near","old","open","poor","quiet","rich","right","sad","safe","shallow","short","slow","small","soft","strong"];
    myarrayjs.push("loose");
}
if(screennum == 2)    {
    var learne = ["loose","lucky","many","narrow","near","old","open","poor","quiet","rich","right","sad","safe","shallow","short","slow","small","soft","strong"];
    myarrayjs.push("loud");
}
if(screennum == 3)    {
    var learne = ["loose", "loud","many","narrow","near","old","open","poor","quiet","rich","right","sad","safe","shallow","short","slow","small","soft","strong"];
    myarrayjs.push("lucky");
}
if(screennum == 4)    {
    var learne = ["loose", "loud","lucky","narrow","near","old","open","poor","quiet","rich","right","sad","safe","shallow","short","slow","small","soft","strong"];
    myarrayjs.push("many");
}
if(screennum == 5)    {
    var learne = ["loose", "loud","lucky","many","near","old","open","poor","quiet","rich","right","sad","safe","shallow","short","slow","small","soft","strong"];
    myarrayjs.push("narrow");
}
if(screennum == 6)    {
    var learne = ["loose", "loud","lucky","many","narrow","old","open","poor","quiet","rich","right","sad","safe","shallow","short","slow","small","soft","strong"];
    myarrayjs.push("near");
}
if(screennum == 7)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","open","poor","quiet","rich","right","sad","safe","shallow","short","slow","small","soft","strong"];
    myarrayjs.push("old");
}
if(screennum == 8)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","old","poor","quiet","rich","right","sad","safe","shallow","short","slow","small","soft","strong"];
    myarrayjs.push("open");
}
if(screennum == 9)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","old","open","quiet","rich","right","sad","safe","shallow","short","slow","small","soft","strong"];
    myarrayjs.push("poor");
}
if(screennum == 10)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","old","open","poor","rich","right","sad","safe","shallow","short","slow","small","soft","strong"];
    myarrayjs.push("quiet");
}
if(screennum == 11)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","old","open","poor","quiet","right","sad","safe","shallow","short","slow","small","soft","strong"];
    myarrayjs.push("rich");
}
if(screennum == 12)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","old","open","poor","quiet","rich","sad","safe","shallow","short","slow","small","soft","strong"];
    myarrayjs.push("right");
}
if(screennum == 13)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","old","open","poor","quiet","rich","right","safe","shallow","short","slow","small","soft","strong"];
    myarrayjs.push("sad");
}
if(screennum == 14)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","old","open","poor","quiet","rich","right","sad","shallow","short","slow","small","soft","strong"];
    myarrayjs.push("safe");
}
if(screennum == 15)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","old","open","poor","quiet","rich","right","sad","safe","short","slow","small","soft","strong"];
    myarrayjs.push("shallow");
}
if(screennum == 16)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","old","open","poor","quiet","rich","right","sad","safe","shallow","slow","small","soft","strong"];
    myarrayjs.push("short");
}
if(screennum == 17)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","old","open","poor","quiet","rich","right","sad","safe","shallow","short","small","soft","strong"];
    myarrayjs.push("slow");
}
if(screennum == 18)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","old","open","poor","quiet","rich","right","sad","safe","shallow","short","slow","soft","strong"];
    myarrayjs.push("small");
}
if(screennum == 19)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","old","open","poor","quiet","rich","right","sad","safe","shallow","short","slow","small","strong"];
    myarrayjs.push("soft");
}
if(screennum == 20)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","old","open","poor","quiet","rich","right","sad","safe","shallow","short","slow","small","soft"];
    myarrayjs.push("strong");
}
if(screennum == 21)    {
    var learne = ["loose", "loud","lucky","many","narrow","near","old","open","poor","quiet","rich","right","sad","safe","shallow","short","slow","small","soft"];
    myarrayjs.push("strong");
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
