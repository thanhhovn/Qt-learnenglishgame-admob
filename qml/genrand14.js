function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["kohlrabi","leek","lettuce","mint","mushroom","okra","onion","peas","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("green beans");
    }
    if(screennum == 2)    {
    var learne = ["green beans","leek","lettuce","mint","mushroom","okra","onion","peas","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("kohlrabi");
    }
    if(screennum == 3)    {
    var learne = ["green beans","kohlrabi","lettuce","mint","mushroom","okra","onion","peas","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("leek");
    }
    if(screennum == 4)    {
    var learne = ["green beans","kohlrabi","leek","mint","mushroom","okra","onion","peas","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("lettuce");
    }
    if(screennum == 5)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mushroom","okra","onion","peas","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("mint");
    }
    if(screennum == 6)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","okra","onion","peas","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("mushroom");
    }
    if(screennum == 7)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","onion","peas","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("okra");
    }
    if(screennum == 8)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","peas","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("onion");
    }
    if(screennum == 9)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","onion","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("peas");
    }
    if(screennum == 10)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","onion","peas","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("pepper");
    }
    if(screennum == 11)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","onion","peas","pepper","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("potato");
    }
    if(screennum == 12)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","onion","peas","pepper","potato","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("pumpkin");
    }
    if(screennum == 13)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","onion","peas","pepper","potato","pumpkin","spinach","squash","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("radish");
    }
    if(screennum == 14)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","onion","peas","pepper","potato","pumpkin","radish","squash","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("spinach");
    }
    if(screennum == 15)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","onion","peas","pepper","potato","pumpkin","radish","spinach","sweet potato","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("squash");
    }
    if(screennum == 16)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","onion","peas","pepper","potato","pumpkin","radish","spinach","squash","sweetcorn","taro","tomato","turnip",];
    myarrayjs.push("sweet potato");
    }
    if(screennum == 17)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","onion","peas","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","taro","tomato","turnip",];
    myarrayjs.push("sweetcorn");
    }
    if(screennum == 18)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","onion","peas","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","tomato","turnip",];
    myarrayjs.push("taro");
    }
    if(screennum == 19)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","onion","peas","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","turnip",];
    myarrayjs.push("tomato");
    }
    if(screennum == 20)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","onion","peas","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato",];
    myarrayjs.push("turnip");
    }
    if(screennum == 21)    {
    var learne = ["green beans","kohlrabi","leek","lettuce","mint","mushroom","okra","onion","peas","pepper","potato","pumpkin","radish","spinach","squash","sweet potato","sweetcorn","taro","tomato",];
    myarrayjs.push("turnip");
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
