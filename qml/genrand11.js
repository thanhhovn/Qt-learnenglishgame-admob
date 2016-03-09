function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["blouse","boots","boxer","cardigan","coat","dress","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("bikini");
    }
    if(screennum == 2)    {
    var learne = ["bikini","boots","boxer","cardigan","coat","dress","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("blouse");
    }
    if(screennum == 3)    {
    var learne = ["bikini","blouse","boxer","cardigan","coat","dress","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("boots");
    }
    if(screennum == 4)    {
    var learne = ["bikini","blouse","boots","cardigan","coat","dress","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("boxer");
    }
    if(screennum == 5)    {
    var learne = ["bikini","blouse","boots","boxer","coat","dress","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("cardigan");
    }
    if(screennum == 6)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","dress","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("coat");
    }
    if(screennum == 7)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("dress");
    }
    if(screennum == 8)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dress","glove","hat","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("dressing gown");
    }
    if(screennum == 9)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dress","dressing gown","hat","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("glove");
    }
    if(screennum == 10)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dress","dressing gown","glove","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("hat");
    }
    if(screennum == 11)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dress","dressing gown","glove","hat","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("jacket");
    }
    if(screennum == 12)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dress","dressing gown","glove","hat","jacket","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("jeans");
    }
    if(screennum == 13)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dress","dressing gown","glove","hat","jacket","jeans","mitten","nappy","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("jumper");
    }
    if(screennum == 14)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dress","dressing gown","glove","hat","jacket","jeans","jumper","nappy","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("mitten");
    }
    if(screennum == 15)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dress","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nightdress","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("nappy");
    }
    if(screennum == 16)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dress","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nappy","pyjama","rompers","sandals","shirt",];
    myarrayjs.push("nightdress");
    }
    if(screennum == 17)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dress","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nappy","nightdress","rompers","sandals","shirt",];
    myarrayjs.push("pyjama");
    }
    if(screennum == 18)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dress","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","sandals","shirt",];
    myarrayjs.push("rompers");
    }
    if(screennum == 19)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dress","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","shirt",];
    myarrayjs.push("sandals");
    }
    if(screennum == 20)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dress","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals",];
    myarrayjs.push("shirt");
    }
    if(screennum == 21)    {
    var learne = ["bikini","blouse","boots","boxer","cardigan","coat","dress","dressing gown","glove","hat","jacket","jeans","jumper","mitten","nappy","nightdress","pyjama","rompers","sandals",];
    myarrayjs.push("shirt");
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
