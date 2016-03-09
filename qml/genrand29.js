function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["actor","architect","astronomer","author","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("accountant");
    }
    if(screennum == 2)    {
    var learne = ["accountant","architect","astronomer","author","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("actor");
    }
    if(screennum == 3)    {
    var learne = ["accountant","actor","astronomer","author","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("architect");
    }
    if(screennum == 4)    {
    var learne = ["accountant","actor","architect","author","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("astronomer");
    }
    if(screennum == 5)    {
    var learne = ["accountant","actor","architect","astronomer","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("author");
    }
    if(screennum == 6)    {
    var learne = ["accountant","actor","architect","astronomer","author","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("baker");
    }
    if(screennum == 7)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","butcher","carpenter","chef","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("bricklayer");
    }
    if(screennum == 8)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","bricklayer","carpenter","chef","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("butcher");
    }
    if(screennum == 9)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","bricklayer","butcher","chef","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("carpenter");
    }
    if(screennum == 10)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","bricklayer","butcher","carpenter","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("chef");
    }
    if(screennum == 11)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","bricklayer","butcher","carpenter","chef","dentist","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("cleaner");
    }
    if(screennum == 12)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","bricklayer","butcher","carpenter","chef","cleaner","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("dentist");
    }
    if(screennum == 13)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","soldier","tailor","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("designer");
    }
    if(screennum == 14)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","tailor","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("soldier");
    }
    if(screennum == 15)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","soldier","teacher","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("tailor");
    }
    if(screennum == 16)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","soldier","tailor","traffic warden","translator","veterinarian","waiter",];
    myarrayjs.push("teacher");
    }
    if(screennum == 17)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","soldier","tailor","teacher","translator","veterinarian","waiter",];
    myarrayjs.push("traffic warden");
    }
    if(screennum == 18)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","veterinarian","waiter",];
    myarrayjs.push("translator");
    }
    if(screennum == 19)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","translator","waiter",];
    myarrayjs.push("veterinarian");
    }
    if(screennum == 20)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian",];
    myarrayjs.push("waiter");
    }
    if(screennum == 21)    {
    var learne = ["accountant","actor","architect","astronomer","author","baker","bricklayer","butcher","carpenter","chef","cleaner","dentist","designer","soldier","tailor","teacher","traffic warden","translator","veterinarian",];
    myarrayjs.push("waiter");
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
