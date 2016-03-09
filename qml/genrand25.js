function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fence","fertilizer","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("acre");
    }
    if(screennum == 2)    {
    var learne = ["acre","bison","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fence","fertilizer","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("bale of hay");
    }
    if(screennum == 3)    {
    var learne = ["acre","bale of hay","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fence","fertilizer","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("bison");
    }
    if(screennum == 4)    {
    var learne = ["acre","bale of hay","bison","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fence","fertilizer","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("buffalo");
    }
    if(screennum == 5)    {
    var learne = ["acre","bale of hay","bison","buffalo","combine","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fence","fertilizer","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("cattle");
    }
    if(screennum == 6)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fence","fertilizer","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("combine");
    }
    if(screennum == 7)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","donkey","eggs","ewe","fallow","farm","farmer","fence","fertilizer","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("cultivator");
    }
    if(screennum == 8)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","cultivator","eggs","ewe","fallow","farm","farmer","fence","fertilizer","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("donkey");
    }
    if(screennum == 9)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","ewe","fallow","farm","farmer","fence","fertilizer","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("eggs");
    }
    if(screennum == 10)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","eggs","fallow","farm","farmer","fence","fertilizer","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("ewe");
    }
    if(screennum == 11)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","farm","farmer","fence","fertilizer","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("fallow");
    }
    if(screennum == 12)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farmer","fence","fertilizer","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("farm");
    }
    if(screennum == 13)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farm","fence","fertilizer","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("farmer");
    }
    if(screennum == 14)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fertilizer","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("fence");
    }
    if(screennum == 15)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fence","field","goose","harvest","harvester","haystack",];
    myarrayjs.push("fertilizer");
    }
    if(screennum == 16)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fence","fertilizer","goose","harvest","harvester","haystack",];
    myarrayjs.push("field");
    }
    if(screennum == 17)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fence","fertilizer","field","harvest","harvester","haystack",];
    myarrayjs.push("goose");
    }
    if(screennum == 18)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fence","fertilizer","field","goose","harvester","haystack",];
    myarrayjs.push("harvest");
    }
    if(screennum == 19)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fence","fertilizer","field","goose","harvest","haystack",];
    myarrayjs.push("harvester");
    }
    if(screennum == 20)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fence","fertilizer","field","goose","harvest","harvester",];
    myarrayjs.push("haystack");
    }
    if(screennum == 21)    {
    var learne = ["acre","bale of hay","bison","buffalo","cattle","combine","cultivator","donkey","eggs","ewe","fallow","farm","farmer","fence","fertilizer","field","goose","harvest","harvester",];
    myarrayjs.push("haystack");
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
