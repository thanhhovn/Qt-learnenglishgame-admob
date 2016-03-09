function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["blackboard","book","bookcase","bulletin board","calendar","chair","chalk","clock","computer","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("blackboard eraser");
    }
    if(screennum == 2)    {
    var learne = ["blackboard eraser","book","bookcase","bulletin board","calendar","chair","chalk","clock","computer","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("blackboard");
    }
    if(screennum == 3)    {
    var learne = ["blackboard eraser","blackboard","bookcase","bulletin board","calendar","chair","chalk","clock","computer","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("book");
    }
    if(screennum == 4)    {
    var learne = ["blackboard eraser","blackboard","book","bulletin board","calendar","chair","chalk","clock","computer","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("bookcase");
    }
    if(screennum == 5)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","calendar","chair","chalk","clock","computer","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("bulletin board");
    }
    if(screennum == 6)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","chair","chalk","clock","computer","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("calendar");
    }
    if(screennum == 7)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chalk","clock","computer","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("chair");
    }
    if(screennum == 8)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","clock","computer","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("chalk");
    }
    if(screennum == 9)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","chalk","computer","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("clock");
    }
    if(screennum == 10)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","chalk","clock","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("computer");
    }
    if(screennum == 11)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","chalk","clock","computer","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("desk");
    }
    if(screennum == 12)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","chalk","clock","computer","desk","eraser","map","notebook","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("dictionary");
    }
    if(screennum == 13)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","chalk","clock","computer","desk","dictionary","map","notebook","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("eraser");
    }
    if(screennum == 14)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","chalk","clock","computer","desk","dictionary","eraser","notebook","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("map");
    }
    if(screennum == 15)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","chalk","clock","computer","desk","dictionary","eraser","map","pen","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("notebook");
    }
    if(screennum == 16)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","chalk","clock","computer","desk","dictionary","eraser","map","notebook","pencil sharpener","pencil","textbook","white board",];
    myarrayjs.push("pen");
    }
    if(screennum == 17)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","chalk","clock","computer","desk","dictionary","eraser","map","notebook","pen","pencil","textbook","white board",];
    myarrayjs.push("pencil sharpener");
    }
    if(screennum == 18)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","chalk","clock","computer","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","textbook","white board",];
    myarrayjs.push("pencil");
    }
    if(screennum == 19)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","chalk","clock","computer","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","white board",];
    myarrayjs.push("textbook");
    }
    if(screennum == 20)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","chalk","clock","computer","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","textbook",];
    myarrayjs.push("white board");
    }
    if(screennum == 21)    {
    var learne = ["blackboard eraser","blackboard","book","bookcase","bulletin board","calendar","chair","chalk","clock","computer","desk","dictionary","eraser","map","notebook","pen","pencil sharpener","pencil","textbook",];
    myarrayjs.push("white board");
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
