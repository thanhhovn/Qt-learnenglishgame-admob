function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["bull","calf","cat","chickens","cock","cow","dog","donkey","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("bear");
    }
    if(screennum == 2)    {
    var learne = ["bear","calf","cat","chickens","cock","cow","dog","donkey","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("bull");
    }
    if(screennum == 3)    {
    var learne = ["bear","bull","cat","chickens","cock","cow","dog","donkey","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("calf");
    }
    if(screennum == 4)    {
    var learne = ["bear","bull","calf","chickens","cock","cow","dog","donkey","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("cat");
    }
    if(screennum == 5)    {
    var learne = ["bear","bull","calf","cat","cock","cow","dog","donkey","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("chickens");
    }
    if(screennum == 6)    {
    var learne = ["bear","bull","calf","cat","chickens","cow","dog","donkey","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("cock");
    }
    if(screennum == 7)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","dog","donkey","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("cow");
    }
    if(screennum == 8)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","cow","donkey","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("dog");
    }
    if(screennum == 9)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","cow","dog","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("donkey");
    }
    if(screennum == 10)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","cow","dog","donkey","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("duck");
    }
    if(screennum == 11)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","cow","dog","donkey","duck","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("elephant");
    }
    if(screennum == 12)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","cow","dog","donkey","duck","elephant","goat","goldfish","goose","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("ewe");
    }
    if(screennum == 13)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","cow","dog","donkey","duck","elephant","ewe","goldfish","goose","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("goat");
    }
    if(screennum == 14)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","cow","dog","donkey","duck","elephant","ewe","goat","goose","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("goldfish");
    }
    if(screennum == 15)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","cow","dog","donkey","duck","elephant","ewe","goat","goldfish","guinea-pig","hamster","hen","horse","kitten",];
    myarrayjs.push("goose");
    }
    if(screennum == 16)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","cow","dog","donkey","duck","elephant","ewe","goat","goldfish","goose","hamster","hen","horse","kitten",];
    myarrayjs.push("guinea-pig");
    }
    if(screennum == 17)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","cow","dog","donkey","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hen","horse","kitten",];
    myarrayjs.push("hamster");
    }
    if(screennum == 18)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","cow","dog","donkey","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","horse","kitten",];
    myarrayjs.push("hen");
    }
    if(screennum == 19)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","cow","dog","donkey","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","kitten",];
    myarrayjs.push("horse");
    }
    if(screennum == 20)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","cow","dog","donkey","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","horse",];
    myarrayjs.push("kitten");
    }
    if(screennum == 21)    {
    var learne = ["bear","bull","calf","cat","chickens","cock","cow","dog","donkey","duck","elephant","ewe","goat","goldfish","goose","guinea-pig","hamster","hen","horse",];
    myarrayjs.push("kitten");
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
