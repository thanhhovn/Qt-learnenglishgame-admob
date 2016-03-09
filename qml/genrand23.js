function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("bowl");
    }
    if(screennum == 2)    {
    var learne = ["bowl","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("bread basket");
    }
    if(screennum == 3)    {
    var learne = ["bowl","bread basket","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("butter knife");
    }
    if(screennum == 4)    {
    var learne = ["bowl","bread basket","butter knife","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("cake stand");
    }
    if(screennum == 5)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("candlestick");
    }
    if(screennum == 6)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("chair");
    }
    if(screennum == 7)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("chandelier");
    }
    if(screennum == 8)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("coffee machine");
    }
    if(screennum == 9)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","cup","cupboards","cutlery","dining table","fork","glass","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("coffee pot");
    }
    if(screennum == 10)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cupboards","cutlery","dining table","fork","glass","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("cup");
    }
    if(screennum == 11)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cutlery","dining table","fork","glass","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("cupboards");
    }
    if(screennum == 12)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","dining table","fork","glass","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("cutlery");
    }
    if(screennum == 13)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","fork","glass","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("dining table");
    }
    if(screennum == 14)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","glass","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("fork");
    }
    if(screennum == 15)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","jug","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("glass");
    }
    if(screennum == 16)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","microwave","napkin","pepper pot","plate",];
    myarrayjs.push("jug");
    }
    if(screennum == 17)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","jug","napkin","pepper pot","plate",];
    myarrayjs.push("microwave");
    }
    if(screennum == 18)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","jug","microwave","pepper pot","plate",];
    myarrayjs.push("napkin");
    }
    if(screennum == 19)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","jug","microwave","napkin","plate",];
    myarrayjs.push("pepper pot");
    }
    if(screennum == 20)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","jug","microwave","napkin","pepper pot",];
    myarrayjs.push("plate");
    }
    if(screennum == 21)    {
    var learne = ["bowl","bread basket","butter knife","cake stand","candlestick","chair","chandelier","coffee machine","coffee pot","cup","cupboards","cutlery","dining table","fork","glass","jug","microwave","napkin","pepper pot",];
    myarrayjs.push("plate");
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
