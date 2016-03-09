function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["battery","bottle","brush","button","camera","chewing gum","clip","coin","comb","credit card","diary","dictionary","file","glasses","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("alarm clock");
    }
    if(screennum == 2)    {
    var learne = ["alarm clock","bottle","brush","button","camera","chewing gum","clip","coin","comb","credit card","diary","dictionary","file","glasses","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("battery");
    }
    if(screennum == 3)    {
    var learne = ["alarm clock","battery","brush","button","camera","chewing gum","clip","coin","comb","credit card","diary","dictionary","file","glasses","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("bottle");
    }
    if(screennum == 4)    {
    var learne = ["alarm clock","battery","bottle","button","camera","chewing gum","clip","coin","comb","credit card","diary","dictionary","file","glasses","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("brush");
    }
    if(screennum == 5)    {
    var learne = ["alarm clock","battery","bottle","brush","camera","chewing gum","clip","coin","comb","credit card","diary","dictionary","file","glasses","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("button");
    }
    if(screennum == 6)    {
    var learne = ["alarm clock","battery","bottle","brush","button","chewing gum","clip","coin","comb","credit card","diary","dictionary","file","glasses","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("camera");
    }
    if(screennum == 7)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","clip","coin","comb","credit card","diary","dictionary","file","glasses","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("chewing gum");
    }
    if(screennum == 8)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","chewing gum","coin","comb","credit card","diary","dictionary","file","glasses","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("clip");
    }
    if(screennum == 9)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","chewing gum","clip","comb","credit card","diary","dictionary","file","glasses","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("coin");
    }
    if(screennum == 10)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","chewing gum","clip","coin","credit card","diary","dictionary","file","glasses","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("comb");
    }
    if(screennum == 11)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","chewing gum","clip","coin","comb","diary","dictionary","file","glasses","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("credit card");
    }
    if(screennum == 12)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","chewing gum","clip","coin","comb","credit card","dictionary","file","glasses","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("diary");
    }
    if(screennum == 13)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","chewing gum","clip","coin","comb","credit card","diary","file","glasses","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("dictionary");
    }
    if(screennum == 14)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","chewing gum","clip","coin","comb","credit card","diary","dictionary","glasses","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("file");
    }
    if(screennum == 15)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","chewing gum","clip","coin","comb","credit card","diary","dictionary","file","headphones","key","laptop","light bulb","lighter",];
    myarrayjs.push("glasses");
    }
    if(screennum == 16)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","chewing gum","clip","coin","comb","credit card","diary","dictionary","file","glasses","key","laptop","light bulb","lighter",];
    myarrayjs.push("headphones");
    }
    if(screennum == 17)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","chewing gum","clip","coin","comb","credit card","diary","dictionary","file","glasses","headphones","laptop","light bulb","lighter",];
    myarrayjs.push("key");
    }
    if(screennum == 18)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","chewing gum","clip","coin","comb","credit card","diary","dictionary","file","glasses","headphones","key","light bulb","lighter",];
    myarrayjs.push("laptop");
    }
    if(screennum == 19)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","chewing gum","clip","coin","comb","credit card","diary","dictionary","file","glasses","headphones","key","laptop","lighter",];
    myarrayjs.push("light bulb");
    }
    if(screennum == 20)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","chewing gum","clip","coin","comb","credit card","diary","dictionary","file","glasses","headphones","key","laptop","light bulb",];
    myarrayjs.push("lighter");
    }
    if(screennum == 21)    {
    var learne = ["alarm clock","battery","bottle","brush","button","camera","chewing gum","clip","coin","comb","credit card","diary","dictionary","file","glasses","headphones","key","laptop","light bulb",];
    myarrayjs.push("lighter");
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
