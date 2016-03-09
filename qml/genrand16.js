function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["dry","early","empty","excellent","false","far","fast","few","full","generous","happy","high","hot","intelligent","late","light","long",];
    myarrayjs.push("dirty");
    }
    if(screennum == 2)    {
    var learne = ["dirty","early","empty","excellent","false","far","fast","few","full","generous","happy","high","hot","intelligent","late","light","long",];
    myarrayjs.push("dry");
    }
    if(screennum == 3)    {
    var learne = ["dirty","dry","empty","excellent","false","far","fast","few","full","generous","happy","high","hot","intelligent","late","light","long",];
    myarrayjs.push("early");
    }
    if(screennum == 4)    {
    var learne = ["dirty","dry","early","excellent","false","far","fast","few","full","generous","happy","high","hot","intelligent","late","light","long",];
    myarrayjs.push("empty");
    }
    if(screennum == 5)    {
    var learne = ["dirty","dry","early","empty","false","far","fast","few","full","generous","happy","high","hot","intelligent","late","light","long",];
    myarrayjs.push("excellent");
    }
    if(screennum == 6)    {
    var learne = ["dirty","dry","early","empty","excellent","far","fast","few","full","generous","happy","high","hot","intelligent","late","light","long",];
    myarrayjs.push("false");
    }
    if(screennum == 7)    {
    var learne = ["dirty","dry","early","empty","excellent","false","fast","few","full","generous","happy","high","hot","intelligent","late","light","long",];
    myarrayjs.push("far");
    }
    if(screennum == 8)    {
    var learne = ["dirty","dry","early","empty","excellent","false","far","few","full","generous","happy","high","hot","intelligent","late","light","long",];
    myarrayjs.push("fast");
    }
    if(screennum == 9)    {
    var learne = ["dirty","dry","early","empty","excellent","false","far","fast","full","generous","happy","high","hot","intelligent","late","light","long",];
    myarrayjs.push("few");
    }
    if(screennum == 10)    {
    var learne = ["dirty","dry","early","empty","excellent","false","far","fast","few","generous","happy","high","hot","intelligent","late","light","long",];
    myarrayjs.push("full");
    }
    if(screennum == 11)    {
    var learne = ["dirty","dry","early","empty","excellent","false","far","fast","few","full","happy","high","hot","intelligent","late","light","long",];
    myarrayjs.push("generous");
    }
    if(screennum == 12)    {
    var learne = ["dirty","dry","early","empty","excellent","false","far","fast","few","full","generous","high","hot","intelligent","late","light","long",];
    myarrayjs.push("happy");
    }
    if(screennum == 13)    {
    var learne = ["dirty","dry","early","empty","excellent","false","far","fast","few","full","generous","happy","hot","intelligent","late","light","long",];
    myarrayjs.push("high");
    }
    if(screennum == 14)    {
    var learne = ["dirty","dry","early","empty","excellent","false","far","fast","few","full","generous","happy","high","intelligent","late","light","long",];
    myarrayjs.push("hot");
    }
    if(screennum == 15)    {
    var learne = ["dirty","dry","early","empty","excellent","false","far","fast","few","full","generous","happy","high","hot","late","light","long",];
    myarrayjs.push("intelligent");
    }
    if(screennum == 16)    {
    var learne = ["dirty","dry","early","empty","excellent","false","far","fast","few","full","generous","happy","high","hot","intelligent","light","long",];
    myarrayjs.push("late");
    }
    if(screennum == 17)    {
    var learne = ["dirty","dry","early","empty","excellent","false","far","fast","few","full","generous","happy","high","hot","intelligent","late","long",];
    myarrayjs.push("light");
    }
    if(screennum == 18)    {
    var learne = ["dirty","dry","early","empty","excellent","false","far","fast","few","full","generous","happy","high","hot","intelligent","late","light",];
    myarrayjs.push("long");
    }
    if(screennum == 19)    {
    var learne = ["dirty","dry","early","empty","excellent","false","far","fast","few","full","generous","happy","high","hot","intelligent","late","light",];
    myarrayjs.push("long");
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
