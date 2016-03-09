function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("baby bottle");
    }
    if(screennum == 2)    {
    var learne = ["baby bottle","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("baby carrier");
    }
    if(screennum == 3)    {
    var learne = ["baby bottle","baby carrier","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("baby food");
    }
    if(screennum == 4)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("Baby lotion");
    }
    if(screennum == 5)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("Baby powder");
    }
    if(screennum == 6)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","bib","blocks","cot","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("baby seat");
    }
    if(screennum == 7)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","blocks","cot","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("bib");
    }
    if(screennum == 8)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","cot","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("blocks");
    }
    if(screennum == 9)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("cot");
    }
    if(screennum == 10)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cradle","crib","diaper","doll","highchair","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("cotton swabs");
    }
    if(screennum == 11)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","crib","diaper","doll","highchair","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("cradle");
    }
    if(screennum == 12)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","diaper","doll","highchair","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("crib");
    }
    if(screennum == 13)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","doll","highchair","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("diaper");
    }
    if(screennum == 14)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","diaper","highchair","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("doll");
    }
    if(screennum == 15)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","diaper","doll","nipple","ointment","playpen","potty","pushchair",];
    myarrayjs.push("highchair");
    }
    if(screennum == 16)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","diaper","doll","highchair","ointment","playpen","potty","pushchair",];
    myarrayjs.push("nipple");
    }
    if(screennum == 17)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","playpen","potty","pushchair",];
    myarrayjs.push("ointment");
    }
    if(screennum == 18)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","ointment","potty","pushchair",];
    myarrayjs.push("playpen");
    }
    if(screennum == 19)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","ointment","playpen","pushchair",];
    myarrayjs.push("potty");
    }
    if(screennum == 20)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","ointment","playpen","potty",];
    myarrayjs.push("pushchair");
    }
    if(screennum == 21)    {
    var learne = ["baby bottle","baby carrier","baby food","Baby lotion","Baby powder","baby seat","bib","blocks","cot","cotton swabs","cradle","crib","diaper","doll","highchair","nipple","ointment","playpen","potty",];
    myarrayjs.push("pushchair");
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
