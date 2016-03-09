function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("frog");
    }
    if(screennum == 2)    {
    var learne = ["frog","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("giraffe");
    }
    if(screennum == 3)    {
    var learne = ["frog","giraffe","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("gorilla");
    }
    if(screennum == 4)    {
    var learne = ["frog","giraffe","gorilla","hippo","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("hedgehog");
    }
    if(screennum == 5)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("hippo");
    }
    if(screennum == 6)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("kangaroo");
    }
    if(screennum == 7)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","lion","lizard","mole","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("leopard");
    }
    if(screennum == 8)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lizard","mole","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("lion");
    }
    if(screennum == 9)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","mole","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("lizard");
    }
    if(screennum == 10)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("mole");
    }
    if(screennum == 11)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("monkey");
    }
    if(screennum == 12)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","monkey","polar bear","pony","rat","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("ostrich");
    }
    if(screennum == 13)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","pony","rat","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("polar bear");
    }
    if(screennum == 14)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","rat","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("pony");
    }
    if(screennum == 15)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","pony","rhino","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("rat");
    }
    if(screennum == 16)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","pony","rat","squirrel","tiger","wolf","zebra",];
    myarrayjs.push("rhino");
    }
    if(screennum == 17)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","pony","rat","rhino","tiger","wolf","zebra",];
    myarrayjs.push("squirrel");
    }
    if(screennum == 18)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","wolf","zebra",];
    myarrayjs.push("tiger");
    }
    if(screennum == 19)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","zebra",];
    myarrayjs.push("wolf");
    }
    if(screennum == 20)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","wolf",];
    myarrayjs.push("zebra");
    }
    if(screennum == 21)    {
    var learne = ["frog","giraffe","gorilla","hedgehog","hippo","kangaroo","leopard","lion","lizard","mole","monkey","ostrich","polar bear","pony","rat","rhino","squirrel","tiger","wolf",];
    myarrayjs.push("zebra");
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
