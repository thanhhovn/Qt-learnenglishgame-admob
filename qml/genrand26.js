function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["candy","chives","chocolate","coriander","cornflakes","fish","honey","ice cream","noodles","pasta","peanuts","pizza","prunes","raisins","rice","soup","spaghetti",];
    myarrayjs.push("biscuits");
    }
    if(screennum == 2)    {
    var learne = ["biscuits","chives","chocolate","coriander","cornflakes","fish","honey","ice cream","noodles","pasta","peanuts","pizza","prunes","raisins","rice","soup","spaghetti",];
    myarrayjs.push("candy");
    }
    if(screennum == 3)    {
    var learne = ["biscuits","candy","chocolate","coriander","cornflakes","fish","honey","ice cream","noodles","pasta","peanuts","pizza","prunes","raisins","rice","soup","spaghetti",];
    myarrayjs.push("chives");
    }
    if(screennum == 4)    {
    var learne = ["biscuits","candy","chives","coriander","cornflakes","fish","honey","ice cream","noodles","pasta","peanuts","pizza","prunes","raisins","rice","soup","spaghetti",];
    myarrayjs.push("chocolate");
    }
    if(screennum == 5)    {
    var learne = ["biscuits","candy","chives","chocolate","cornflakes","fish","honey","ice cream","noodles","pasta","peanuts","pizza","prunes","raisins","rice","soup","spaghetti",];
    myarrayjs.push("coriander");
    }
    if(screennum == 6)    {
    var learne = ["biscuits","candy","chives","chocolate","coriander","fish","honey","ice cream","noodles","pasta","peanuts","pizza","prunes","raisins","rice","soup","spaghetti",];
    myarrayjs.push("cornflakes");
    }
    if(screennum == 7)    {
    var learne = ["biscuits","candy","chives","chocolate","coriander","cornflakes","honey","ice cream","noodles","pasta","peanuts","pizza","prunes","raisins","rice","soup","spaghetti",];
    myarrayjs.push("fish");
    }
    if(screennum == 8)    {
    var learne = ["biscuits","candy","chives","chocolate","coriander","cornflakes","fish","ice cream","noodles","pasta","peanuts","pizza","prunes","raisins","rice","soup","spaghetti",];
    myarrayjs.push("honey");
    }
    if(screennum == 9)    {
    var learne = ["biscuits","candy","chives","chocolate","coriander","cornflakes","fish","honey","noodles","pasta","peanuts","pizza","prunes","raisins","rice","soup","spaghetti",];
    myarrayjs.push("ice cream");
    }
    if(screennum == 10)    {
    var learne = ["biscuits","candy","chives","chocolate","coriander","cornflakes","fish","honey","ice cream","pasta","peanuts","pizza","prunes","raisins","rice","soup","spaghetti",];
    myarrayjs.push("noodles");
    }
    if(screennum == 11)    {
    var learne = ["biscuits","candy","chives","chocolate","coriander","cornflakes","fish","honey","ice cream","noodles","peanuts","pizza","prunes","raisins","rice","soup","spaghetti",];
    myarrayjs.push("pasta");
    }
    if(screennum == 12)    {
    var learne = ["biscuits","candy","chives","chocolate","coriander","cornflakes","fish","honey","ice cream","noodles","pasta","pizza","prunes","raisins","rice","soup","spaghetti",];
    myarrayjs.push("peanuts");
    }
    if(screennum == 13)    {
    var learne = ["biscuits","candy","chives","chocolate","coriander","cornflakes","fish","honey","ice cream","noodles","pasta","peanuts","prunes","raisins","rice","soup","spaghetti",];
    myarrayjs.push("pizza");
    }
    if(screennum == 14)    {
    var learne = ["biscuits","candy","chives","chocolate","coriander","cornflakes","fish","honey","ice cream","noodles","pasta","peanuts","pizza","raisins","rice","soup","spaghetti",];
    myarrayjs.push("prunes");
    }
    if(screennum == 15)    {
    var learne = ["biscuits","candy","chives","chocolate","coriander","cornflakes","fish","honey","ice cream","noodles","pasta","peanuts","pizza","prunes","rice","soup","spaghetti",];
    myarrayjs.push("raisins");
    }
    if(screennum == 16)    {
    var learne = ["biscuits","candy","chives","chocolate","coriander","cornflakes","fish","honey","ice cream","noodles","pasta","peanuts","pizza","prunes","raisins","soup","spaghetti",];
    myarrayjs.push("rice");
    }
    if(screennum == 17)    {
    var learne = ["biscuits","candy","chives","chocolate","coriander","cornflakes","fish","honey","ice cream","noodles","pasta","peanuts","pizza","prunes","raisins","rice","spaghetti",];
    myarrayjs.push("soup");
    }
    if(screennum == 18)    {
    var learne = ["biscuits","candy","chives","chocolate","coriander","cornflakes","fish","honey","ice cream","noodles","pasta","peanuts","pizza","prunes","raisins","rice","soup",];
    myarrayjs.push("spaghetti");
    }
    if(screennum == 19)    {
    var learne = ["biscuits","candy","chives","chocolate","coriander","cornflakes","fish","honey","ice cream","noodles","pasta","peanuts","pizza","prunes","raisins","rice","soup",];
    myarrayjs.push("spaghetti");
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
