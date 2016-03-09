function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["big","boring","clean","closed","cold","dangerous","dark","deep","difficult","stupid","terrible","thick","true","ugly","weak","wet","wide","wrong","young",];
    myarrayjs.push("beautiful");
    }
    if(screennum == 2)    {
    var learne = ["beautiful","boring","clean","closed","cold","dangerous","dark","deep","difficult","stupid","terrible","thick","true","ugly","weak","wet","wide","wrong","young",];
    myarrayjs.push("big");
    }
    if(screennum == 3)    {
    var learne = ["beautiful","big","clean","closed","cold","dangerous","dark","deep","difficult","stupid","terrible","thick","true","ugly","weak","wet","wide","wrong","young",];
    myarrayjs.push("boring");
    }
    if(screennum == 4)    {
    var learne = ["beautiful","big","boring","closed","cold","dangerous","dark","deep","difficult","stupid","terrible","thick","true","ugly","weak","wet","wide","wrong","young",];
    myarrayjs.push("clean");
    }
    if(screennum == 5)    {
    var learne = ["beautiful","big","boring","clean","cold","dangerous","dark","deep","difficult","stupid","terrible","thick","true","ugly","weak","wet","wide","wrong","young",];
    myarrayjs.push("closed");
    }
    if(screennum == 6)    {
    var learne = ["beautiful","big","boring","clean","closed","dangerous","dark","deep","difficult","stupid","terrible","thick","true","ugly","weak","wet","wide","wrong","young",];
    myarrayjs.push("cold");
    }
    if(screennum == 7)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dark","deep","difficult","stupid","terrible","thick","true","ugly","weak","wet","wide","wrong","young",];
    myarrayjs.push("dangerous");
    }
    if(screennum == 8)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dangerous","deep","difficult","stupid","terrible","thick","true","ugly","weak","wet","wide","wrong","young",];
    myarrayjs.push("dark");
    }
    if(screennum == 9)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dangerous","dark","difficult","stupid","terrible","thick","true","ugly","weak","wet","wide","wrong","young",];
    myarrayjs.push("deep");
    }
    if(screennum == 10)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dangerous","dark","deep","stupid","terrible","thick","true","ugly","weak","wet","wide","wrong","young",];
    myarrayjs.push("difficult");
    }
    if(screennum == 11)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dangerous","dark","deep","difficult","terrible","thick","true","ugly","weak","wet","wide","wrong","young",];
    myarrayjs.push("stupid");
    }
    if(screennum == 12)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dangerous","dark","deep","difficult","stupid","thick","true","ugly","weak","wet","wide","wrong","young",];
    myarrayjs.push("terrible");
    }
    if(screennum == 13)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dangerous","dark","deep","difficult","stupid","terrible","true","ugly","weak","wet","wide","wrong","young",];
    myarrayjs.push("thick");
    }
    if(screennum == 14)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dangerous","dark","deep","difficult","stupid","terrible","thick","ugly","weak","wet","wide","wrong","young",];
    myarrayjs.push("true");
    }
    if(screennum == 15)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dangerous","dark","deep","difficult","stupid","terrible","thick","true","weak","wet","wide","wrong","young",];
    myarrayjs.push("ugly");
    }
    if(screennum == 16)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dangerous","dark","deep","difficult","stupid","terrible","thick","true","ugly","wet","wide","wrong","young",];
    myarrayjs.push("weak");
    }
    if(screennum == 17)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dangerous","dark","deep","difficult","stupid","terrible","thick","true","ugly","weak","wide","wrong","young",];
    myarrayjs.push("wet");
    }
    if(screennum == 18)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dangerous","dark","deep","difficult","stupid","terrible","thick","true","ugly","weak","wet","wrong","young",];
    myarrayjs.push("wide");
    }
    if(screennum == 19)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dangerous","dark","deep","difficult","stupid","terrible","thick","true","ugly","weak","wet","wide","young",];
    myarrayjs.push("wrong");
    }
    if(screennum == 20)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dangerous","dark","deep","difficult","stupid","terrible","thick","true","ugly","weak","wet","wide","wrong",];
    myarrayjs.push("young");
    }
    if(screennum == 21)    {
    var learne = ["beautiful","big","boring","clean","closed","cold","dangerous","dark","deep","difficult","stupid","terrible","thick","true","ugly","weak","wet","wide","wrong",];
    myarrayjs.push("young");
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
