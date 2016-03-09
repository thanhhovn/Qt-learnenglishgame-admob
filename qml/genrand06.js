function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["bringing","building","buying","calling","catching","clapping","cleaning","climbing","closing","coming","thinking","touching","trying","typing","walking","washing","watching","working","writing",];
    myarrayjs.push("biting");
    }
    if(screennum == 2)    {
    var learne = ["biting","building","buying","calling","catching","clapping","cleaning","climbing","closing","coming","thinking","touching","trying","typing","walking","washing","watching","working","writing",];
    myarrayjs.push("bringing");
    }
    if(screennum == 3)    {
    var learne = ["biting","bringing","buying","calling","catching","clapping","cleaning","climbing","closing","coming","thinking","touching","trying","typing","walking","washing","watching","working","writing",];
    myarrayjs.push("building");
    }
    if(screennum == 4)    {
    var learne = ["biting","bringing","building","calling","catching","clapping","cleaning","climbing","closing","coming","thinking","touching","trying","typing","walking","washing","watching","working","writing",];
    myarrayjs.push("buying");
    }
    if(screennum == 5)    {
    var learne = ["biting","bringing","building","buying","catching","clapping","cleaning","climbing","closing","coming","thinking","touching","trying","typing","walking","washing","watching","working","writing",];
    myarrayjs.push("calling");
    }
    if(screennum == 6)    {
    var learne = ["biting","bringing","building","buying","calling","clapping","cleaning","climbing","closing","coming","thinking","touching","trying","typing","walking","washing","watching","working","writing",];
    myarrayjs.push("catching");
    }
    if(screennum == 7)    {
    var learne = ["biting","bringing","building","buying","calling","catching","cleaning","climbing","closing","coming","thinking","touching","trying","typing","walking","washing","watching","working","writing",];
    myarrayjs.push("clapping");
    }
    if(screennum == 8)    {
    var learne = ["biting","bringing","building","buying","calling","catching","clapping","climbing","closing","coming","thinking","touching","trying","typing","walking","washing","watching","working","writing",];
    myarrayjs.push("cleaning");
    }
    if(screennum == 9)    {
    var learne = ["biting","bringing","building","buying","calling","catching","clapping","cleaning","closing","coming","thinking","touching","trying","typing","walking","washing","watching","working","writing",];
    myarrayjs.push("climbing");
    }
    if(screennum == 10)    {
    var learne = ["biting","bringing","building","buying","calling","catching","clapping","cleaning","climbing","coming","thinking","touching","trying","typing","walking","washing","watching","working","writing",];
    myarrayjs.push("closing");
    }
    if(screennum == 11)    {
    var learne = ["biting","bringing","building","buying","calling","catching","clapping","cleaning","climbing","closing","thinking","touching","trying","typing","walking","washing","watching","working","writing",];
    myarrayjs.push("coming");
    }
    if(screennum == 12)    {
    var learne = ["biting","bringing","building","buying","calling","catching","clapping","cleaning","climbing","closing","coming","touching","trying","typing","walking","washing","watching","working","writing",];
    myarrayjs.push("thinking");
    }
    if(screennum == 13)    {
    var learne = ["biting","bringing","building","buying","calling","catching","clapping","cleaning","climbing","closing","coming","thinking","trying","typing","walking","washing","watching","working","writing",];
    myarrayjs.push("touching");
    }
    if(screennum == 14)    {
    var learne = ["biting","bringing","building","buying","calling","catching","clapping","cleaning","climbing","closing","coming","thinking","touching","typing","walking","washing","watching","working","writing",];
    myarrayjs.push("trying");
    }
    if(screennum == 15)    {
    var learne = ["biting","bringing","building","buying","calling","catching","clapping","cleaning","climbing","closing","coming","thinking","touching","trying","walking","washing","watching","working","writing",];
    myarrayjs.push("typing");
    }
    if(screennum == 16)    {
    var learne = ["biting","bringing","building","buying","calling","catching","clapping","cleaning","climbing","closing","coming","thinking","touching","trying","typing","washing","watching","working","writing",];
    myarrayjs.push("walking");
    }
    if(screennum == 17)    {
    var learne = ["biting","bringing","building","buying","calling","catching","clapping","cleaning","climbing","closing","coming","thinking","touching","trying","typing","walking","watching","working","writing",];
    myarrayjs.push("washing");
    }
    if(screennum == 18)    {
    var learne = ["biting","bringing","building","buying","calling","catching","clapping","cleaning","climbing","closing","coming","thinking","touching","trying","typing","walking","washing","working","writing",];
    myarrayjs.push("watching");
    }
    if(screennum == 19)    {
    var learne = ["biting","bringing","building","buying","calling","catching","clapping","cleaning","climbing","closing","coming","thinking","touching","trying","typing","walking","washing","watching","writing",];
    myarrayjs.push("working");
    }
    if(screennum == 20)    {
    var learne = ["biting","bringing","building","buying","calling","catching","clapping","cleaning","climbing","closing","coming","thinking","touching","trying","typing","walking","washing","watching","working",];
    myarrayjs.push("writing");
    }
    if(screennum == 21)    {
    var learne = ["biting","bringing","building","buying","calling","catching","clapping","cleaning","climbing","closing","coming","thinking","touching","trying","typing","walking","washing","watching","working",];
    myarrayjs.push("writing");
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
