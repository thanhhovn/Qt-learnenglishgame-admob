function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["cycling","fencing","football","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("cricket");
    }
    if(screennum == 2)    {
    var learne = ["cricket","fencing","football","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("cycling");
    }
    if(screennum == 3)    {
    var learne = ["cricket","cycling","football","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("fencing");
    }
    if(screennum == 4)    {
    var learne = ["cricket","cycling","fencing","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("football");
    }
    if(screennum == 5)    {
    var learne = ["cricket","cycling","fencing","football","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("golf");
    }
    if(screennum == 6)    {
    var learne = ["cricket","cycling","fencing","football","golf","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("hockey");
    }
    if(screennum == 7)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("horse riding");
    }
    if(screennum == 8)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","horse riding","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("ice hockey");
    }
    if(screennum == 9)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","horse riding","ice hockey","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("judo");
    }
    if(screennum == 10)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","horse riding","ice hockey","judo","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("karate");
    }
    if(screennum == 11)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","horse riding","ice hockey","judo","karate","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("kayaking");
    }
    if(screennum == 12)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("polo");
    }
    if(screennum == 13)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rowing","surfing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("rhythmic gymnastics");
    }
    if(screennum == 14)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","surfing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("rowing");
    }
    if(screennum == 15)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","swimming","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("surfing");
    }
    if(screennum == 16)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","table tennis","taekwondo","tennis","volleyball",];
    myarrayjs.push("swimming");
    }
    if(screennum == 17)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","taekwondo","tennis","volleyball",];
    myarrayjs.push("table tennis");
    }
    if(screennum == 18)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","tennis","volleyball",];
    myarrayjs.push("taekwondo");
    }
    if(screennum == 19)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","volleyball",];
    myarrayjs.push("tennis");
    }
    if(screennum == 20)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis",];
    myarrayjs.push("volleyball");
    }
    if(screennum == 21)    {
    var learne = ["cricket","cycling","fencing","football","golf","hockey","horse riding","ice hockey","judo","karate","kayaking","polo","rhythmic gymnastics","rowing","surfing","swimming","table tennis","taekwondo","tennis",];
    myarrayjs.push("volleyball");
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
