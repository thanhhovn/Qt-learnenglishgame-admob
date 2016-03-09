function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["shorts","skirt","slipper","sock","suit","sweatshirt","swimming suit","swimming trunks","T-shirt","tank top","tie","tights","trouser","Y-fronts",];
    myarrayjs.push("shoes");
    }
    if(screennum == 2)    {
    var learne = ["shoes","skirt","slipper","sock","suit","sweatshirt","swimming suit","swimming trunks","T-shirt","tank top","tie","tights","trouser","Y-fronts",];
    myarrayjs.push("shorts");
    }
    if(screennum == 3)    {
    var learne = ["shoes","shorts","slipper","sock","suit","sweatshirt","swimming suit","swimming trunks","T-shirt","tank top","tie","tights","trouser","Y-fronts",];
    myarrayjs.push("skirt");
    }
    if(screennum == 4)    {
    var learne = ["shoes","shorts","skirt","sock","suit","sweatshirt","swimming suit","swimming trunks","T-shirt","tank top","tie","tights","trouser","Y-fronts",];
    myarrayjs.push("slipper");
    }
    if(screennum == 5)    {
    var learne = ["shoes","shorts","skirt","slipper","suit","sweatshirt","swimming suit","swimming trunks","T-shirt","tank top","tie","tights","trouser","Y-fronts",];
    myarrayjs.push("sock");
    }
    if(screennum == 6)    {
    var learne = ["shoes","shorts","skirt","slipper","sock","sweatshirt","swimming suit","swimming trunks","T-shirt","tank top","tie","tights","trouser","Y-fronts",];
    myarrayjs.push("suit");
    }
    if(screennum == 7)    {
    var learne = ["shoes","shorts","skirt","slipper","sock","suit","swimming suit","swimming trunks","T-shirt","tank top","tie","tights","trouser","Y-fronts",];
    myarrayjs.push("sweatshirt");
    }
    if(screennum == 8)    {
    var learne = ["shoes","shorts","skirt","slipper","sock","suit","sweatshirt","swimming trunks","T-shirt","tank top","tie","tights","trouser","Y-fronts",];
    myarrayjs.push("swimming suit");
    }
    if(screennum == 9)    {
    var learne = ["shoes","shorts","skirt","slipper","sock","suit","sweatshirt","swimming suit","T-shirt","tank top","tie","tights","trouser","Y-fronts",];
    myarrayjs.push("swimming trunks");
    }
    if(screennum == 10)    {
    var learne = ["shoes","shorts","skirt","slipper","sock","suit","sweatshirt","swimming suit","swimming trunks","tank top","tie","tights","trouser","Y-fronts",];
    myarrayjs.push("T-shirt");
    }
    if(screennum == 11)    {
    var learne = ["shoes","shorts","skirt","slipper","sock","suit","sweatshirt","swimming suit","swimming trunks","T-shirt","tie","tights","trouser","Y-fronts",];
    myarrayjs.push("tank top");
    }
    if(screennum == 12)    {
    var learne = ["shoes","shorts","skirt","slipper","sock","suit","sweatshirt","swimming suit","swimming trunks","T-shirt","tank top","tights","trouser","Y-fronts",];
    myarrayjs.push("tie");
    }
    if(screennum == 13)    {
    var learne = ["shoes","shorts","skirt","slipper","sock","suit","sweatshirt","swimming suit","swimming trunks","T-shirt","tank top","tie","trouser","Y-fronts",];
    myarrayjs.push("tights");
    }
    if(screennum == 14)    {
    var learne = ["shoes","shorts","skirt","slipper","sock","suit","sweatshirt","swimming suit","swimming trunks","T-shirt","tank top","tie","tights","Y-fronts",];
    myarrayjs.push("trouser");
    }
    if(screennum == 15)    {
    var learne = ["shoes","shorts","skirt","slipper","sock","suit","sweatshirt","swimming suit","swimming trunks","T-shirt","tank top","tie","tights","trouser",];
    myarrayjs.push("Y-fronts");
    }
    if(screennum == 16)    {
    var learne = ["shoes","shorts","skirt","slipper","sock","suit","sweatshirt","swimming suit","swimming trunks","T-shirt","tank top","tie","tights","trouser",];
    myarrayjs.push("Y-fronts");
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
    if((screennum >= 12) && (screennum <= 14))    {
       return genrand(screennum,8);
    }
    if((screennum >= 15) && (screennum <= 21))    {
       return genrand(screennum,11);
    }

}
