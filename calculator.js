//Set Global Variables 
const input=document.getElementById("input");
const container=document.getElementById("container");
const calc =document.getElementById("button=");
const clear=document.getElementById("buttonc");

//make input form read only so input on screen cannot be changed (only responds to buttons)
document.getElementById("input").setAttribute("readonly", true);

container.addEventListener("click", function(e){
    buttonClick(e.target.id);
});

//use event parameter of target to identify what's inside the id which are the buttons

calc.addEventListener("click", operate);

clear.addEventListener("click", erase);

function buttonClick(buttonId){
    if ((buttonId !="buttonc") && (buttonId !="button=")){
        let button=document.getElementById(buttonId);
        let tmp=buttonId;
        tmp=tmp.replace("button", "");
        entries(tmp);
    }
};
//use 'replace' so when buttons are clicked it removes preface(button) and the id is just a number in the string format

function entries(tmp){
    input.value += tmp; 
}
//concatenating values entered by pressing buttons within container

function operate (){
    if(input.value=="."){
        alert("Oops! Please enter a math equation");
        return;
    }else{
    input.value=eval(input.value);
    }
};

function erase(){
    input.value="";
}