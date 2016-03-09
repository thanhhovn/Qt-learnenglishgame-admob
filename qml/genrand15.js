function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["crying","cutting","dancing","drawing","dreaming","drinking","driving","eating","giving","going","hearing","hitting","jumping","keeping","kicking","laughing","listening",];
    myarrayjs.push("cooking");
    }
    if(screennum == 2)    {
    var learne = ["cooking","cutting","dancing","drawing","dreaming","drinking","driving","eating","giving","going","hearing","hitting","jumping","keeping","kicking","laughing","listening",];
    myarrayjs.push("crying");
    }
    if(screennum == 3)    {
    var learne = ["cooking","crying","dancing","drawing","dreaming","drinking","driving","eating","giving","going","hearing","hitting","jumping","keeping","kicking","laughing","listening",];
    myarrayjs.push("cutting");
    }
    if(screennum == 4)    {
    var learne = ["cooking","crying","cutting","drawing","dreaming","drinking","driving","eating","giving","going","hearing","hitting","jumping","keeping","kicking","laughing","listening",];
    myarrayjs.push("dancing");
    }
    if(screennum == 5)    {
    var learne = ["cooking","crying","cutting","dancing","dreaming","drinking","driving","eating","giving","going","hearing","hitting","jumping","keeping","kicking","laughing","listening",];
    myarrayjs.push("drawing");
    }
    if(screennum == 6)    {
    var learne = ["cooking","crying","cutting","dancing","drawing","drinking","driving","eating","giving","going","hearing","hitting","jumping","keeping","kicking","laughing","listening",];
    myarrayjs.push("dreaming");
    }
    if(screennum == 7)    {
    var learne = ["cooking","crying","cutting","dancing","drawing","dreaming","driving","eating","giving","going","hearing","hitting","jumping","keeping","kicking","laughing","listening",];
    myarrayjs.push("drinking");
    }
    if(screennum == 8)    {
    var learne = ["cooking","crying","cutting","dancing","drawing","dreaming","drinking","eating","giving","going","hearing","hitting","jumping","keeping","kicking","laughing","listening",];
    myarrayjs.push("driving");
    }
    if(screennum == 9)    {
    var learne = ["cooking","crying","cutting","dancing","drawing","dreaming","drinking","driving","giving","going","hearing","hitting","jumping","keeping","kicking","laughing","listening",];
    myarrayjs.push("eating");
    }
    if(screennum == 10)    {
    var learne = ["cooking","crying","cutting","dancing","drawing","dreaming","drinking","driving","eating","going","hearing","hitting","jumping","keeping","kicking","laughing","listening",];
    myarrayjs.push("giving");
    }
    if(screennum == 11)    {
    var learne = ["cooking","crying","cutting","dancing","drawing","dreaming","drinking","driving","eating","giving","hearing","hitting","jumping","keeping","kicking","laughing","listening",];
    myarrayjs.push("going");
    }
    if(screennum == 12)    {
    var learne = ["cooking","crying","cutting","dancing","drawing","dreaming","drinking","driving","eating","giving","going","hitting","jumping","keeping","kicking","laughing","listening",];
    myarrayjs.push("hearing");
    }
    if(screennum == 13)    {
    var learne = ["cooking","crying","cutting","dancing","drawing","dreaming","drinking","driving","eating","giving","going","hearing","jumping","keeping","kicking","laughing","listening",];
    myarrayjs.push("hitting");
    }
    if(screennum == 14)    {
    var learne = ["cooking","crying","cutting","dancing","drawing","dreaming","drinking","driving","eating","giving","going","hearing","hitting","keeping","kicking","laughing","listening",];
    myarrayjs.push("jumping");
    }
    if(screennum == 15)    {
    var learne = ["cooking","crying","cutting","dancing","drawing","dreaming","drinking","driving","eating","giving","going","hearing","hitting","jumping","kicking","laughing","listening",];
    myarrayjs.push("keeping");
    }
    if(screennum == 16)    {
    var learne = ["cooking","crying","cutting","dancing","drawing","dreaming","drinking","driving","eating","giving","going","hearing","hitting","jumping","keeping","laughing","listening",];
    myarrayjs.push("kicking");
    }
    if(screennum == 17)    {
    var learne = ["cooking","crying","cutting","dancing","drawing","dreaming","drinking","driving","eating","giving","going","hearing","hitting","jumping","keeping","kicking","listening",];
    myarrayjs.push("laughing");
    }
    if(screennum == 18)    {
    var learne = ["cooking","crying","cutting","dancing","drawing","dreaming","drinking","driving","eating","giving","going","hearing","hitting","jumping","keeping","kicking","laughing",];
    myarrayjs.push("listening");
    }
    if(screennum == 19)    {
    var learne = ["cooking","crying","cutting","dancing","drawing","dreaming","drinking","driving","eating","giving","going","hearing","hitting","jumping","keeping","kicking","laughing",];
    myarrayjs.push("listening");
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
