function genrand(screennum,numofwords) {
var myarrayjs = [];
    if(screennum == 1)    {
    var learne = ["lecturer","librarian","lifeguard","mechanics","model","nurse","optician","painter","pharmacist","photographer","pilot","plumber","policeman","politician","postman","receptionist","scientist","secretary",];
    myarrayjs.push("lawyer");
    }
    if(screennum == 2)    {
    var learne = ["lawyer","librarian","lifeguard","mechanics","model","nurse","optician","painter","pharmacist","photographer","pilot","plumber","policeman","politician","postman","receptionist","scientist","secretary",];
    myarrayjs.push("lecturer");
    }
    if(screennum == 3)    {
    var learne = ["lawyer","lecturer","lifeguard","mechanics","model","nurse","optician","painter","pharmacist","photographer","pilot","plumber","policeman","politician","postman","receptionist","scientist","secretary",];
    myarrayjs.push("librarian");
    }
    if(screennum == 4)    {
    var learne = ["lawyer","lecturer","librarian","mechanics","model","nurse","optician","painter","pharmacist","photographer","pilot","plumber","policeman","politician","postman","receptionist","scientist","secretary",];
    myarrayjs.push("lifeguard");
    }
    if(screennum == 5)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","model","nurse","optician","painter","pharmacist","photographer","pilot","plumber","policeman","politician","postman","receptionist","scientist","secretary",];
    myarrayjs.push("mechanics");
    }
    if(screennum == 6)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","nurse","optician","painter","pharmacist","photographer","pilot","plumber","policeman","politician","postman","receptionist","scientist","secretary",];
    myarrayjs.push("model");
    }
    if(screennum == 7)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","model","optician","painter","pharmacist","photographer","pilot","plumber","policeman","politician","postman","receptionist","scientist","secretary",];
    myarrayjs.push("nurse");
    }
    if(screennum == 8)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","model","nurse","painter","pharmacist","photographer","pilot","plumber","policeman","politician","postman","receptionist","scientist","secretary",];
    myarrayjs.push("optician");
    }
    if(screennum == 9)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","model","nurse","optician","pharmacist","photographer","pilot","plumber","policeman","politician","postman","receptionist","scientist","secretary",];
    myarrayjs.push("painter");
    }
    if(screennum == 10)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","model","nurse","optician","painter","photographer","pilot","plumber","policeman","politician","postman","receptionist","scientist","secretary",];
    myarrayjs.push("pharmacist");
    }
    if(screennum == 11)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","model","nurse","optician","painter","pharmacist","pilot","plumber","policeman","politician","postman","receptionist","scientist","secretary",];
    myarrayjs.push("photographer");
    }
    if(screennum == 12)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","model","nurse","optician","painter","pharmacist","photographer","plumber","policeman","politician","postman","receptionist","scientist","secretary",];
    myarrayjs.push("pilot");
    }
    if(screennum == 13)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","model","nurse","optician","painter","pharmacist","photographer","pilot","policeman","politician","postman","receptionist","scientist","secretary",];
    myarrayjs.push("plumber");
    }
    if(screennum == 14)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","model","nurse","optician","painter","pharmacist","photographer","pilot","plumber","politician","postman","receptionist","scientist","secretary",];
    myarrayjs.push("policeman");
    }
    if(screennum == 15)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","model","nurse","optician","painter","pharmacist","photographer","pilot","plumber","policeman","postman","receptionist","scientist","secretary",];
    myarrayjs.push("politician");
    }
    if(screennum == 16)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","model","nurse","optician","painter","pharmacist","photographer","pilot","plumber","policeman","politician","receptionist","scientist","secretary",];
    myarrayjs.push("postman");
    }
    if(screennum == 17)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","model","nurse","optician","painter","pharmacist","photographer","pilot","plumber","policeman","politician","postman","scientist","secretary",];
    myarrayjs.push("receptionist");
    }
    if(screennum == 18)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","model","nurse","optician","painter","pharmacist","photographer","pilot","plumber","policeman","politician","postman","receptionist","secretary",];
    myarrayjs.push("scientist");
    }
    if(screennum == 19)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","model","nurse","optician","painter","pharmacist","photographer","pilot","plumber","policeman","politician","postman","receptionist","scientist",];
    myarrayjs.push("secretary");
    }
    if(screennum == 20)    {
    var learne = ["lawyer","lecturer","librarian","lifeguard","mechanics","model","nurse","optician","painter","pharmacist","photographer","pilot","plumber","policeman","politician","postman","receptionist","scientist",];
    myarrayjs.push("secretary");
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
