//Set Global Variables 
const display=document.getElementById("input");
const container=document.getElementById("container");
const resultNum=document.getElementById("equalbtn");
const clear=document.getElementById("clearbtn");

//make input form read only so input on screen cannot be changed (only responds to buttons)
document.getElementById("input").setAttribute("readonly", true);

container.addEventListener("click", function(e){
    buttonClick(e.target.id);
});

//use event parameter of target to identify what's inside the id which are the buttons

resultNum.addEventListener("click", operate);

clear.addEventListener("click", erase);

function getValue(buttonId){
    if ((buttonId !="clearbtn") && (buttonId !="equalbtn")){
        let button=document.getElementById(buttonId);
        let tmp=buttonId;
        tmp=tmp.replace("button", "");
        concatenate(tmp);
    }
};
//use 'replace' so when buttons are clicked it removes preface(button) and the id is just a number in the string format

function concatenate(tmp){
    display.value += tmp; 
}
//concatenating values entered by pressing buttons within container

function operate (){
    if(display.value=="."){
        alert("Oops! Please enter a math equation");
        return;
    }else{
    display.value=eval(display.value);
    }
};

function erase(){
    display.value="";
}
