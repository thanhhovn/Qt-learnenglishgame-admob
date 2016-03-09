function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["baked beans","beef","bread","butter","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("bacon");
    }
    if(screennum == 2)    {
    var learne = ["bacon","beef","bread","butter","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("baked beans");
    }
    if(screennum == 3)    {
    var learne = ["bacon","baked beans","bread","butter","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("beef");
    }
    if(screennum == 4)    {
    var learne = ["bacon","baked beans","beef","butter","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("bread");
    }
    if(screennum == 5)    {
    var learne = ["bacon","baked beans","beef","bread","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("butter");
    }
    if(screennum == 6)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("cake");
    }
    if(screennum == 7)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("cheese");
    }
    if(screennum == 8)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","cheese","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("chicken");
    }
    if(screennum == 9)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","cheese","chicken","eggs","ham","milk","pork pie","pork","quiche","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("Danish pastry");
    }
    if(screennum == 10)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","cheese","chicken","Danish pastry","ham","milk","pork pie","pork","quiche","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("eggs");
    }
    if(screennum == 11)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","cheese","chicken","Danish pastry","eggs","milk","pork pie","pork","quiche","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("ham");
    }
    if(screennum == 12)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","cheese","chicken","Danish pastry","eggs","ham","pork pie","pork","quiche","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("milk");
    }
    if(screennum == 13)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork","quiche","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("pork pie");
    }
    if(screennum == 14)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","quiche","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("pork");
    }
    if(screennum == 15)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","salami","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("quiche");
    }
    if(screennum == 16)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","sausage roll","sausages","sugar","yoghurt",];
    myarrayjs.push("salami");
    }
    if(screennum == 17)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","salami","sausages","sugar","yoghurt",];
    myarrayjs.push("sausage roll");
    }
    if(screennum == 18)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","salami","sausage roll","sugar","yoghurt",];
    myarrayjs.push("sausages");
    }
    if(screennum == 19)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","salami","sausage roll","sausages","yoghurt",];
    myarrayjs.push("sugar");
    }
    if(screennum == 20)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","salami","sausage roll","sausages","sugar",];
    myarrayjs.push("yoghurt");
    }
    if(screennum == 21)    {
    var learne = ["bacon","baked beans","beef","bread","butter","cake","cheese","chicken","Danish pastry","eggs","ham","milk","pork pie","pork","quiche","salami","sausage roll","sausages","sugar",];
    myarrayjs.push("yoghurt");
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
