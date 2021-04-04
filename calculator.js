//Set Global Variables 
<<<<<<< HEAD
const displayScreen=document.getElementById("input");
const container=document.getElementById("container");
const resultNum =document.getElementById("equalbtn");
const clearBtn=document.getElementById("clearbtn");
=======
const display=document.getElementById("input");
const container=document.getElementById("container");
const resultNum=document.getElementById("equalbtn");
const clear=document.getElementById("clearbtn");
>>>>>>> 8fe625386bf39ad1c16262b5fa7577378ecb2e68

//make input form read only so input on screen cannot be changed (only responds to buttons)
document.getElementById("input").setAttribute("readonly", true);

container.addEventListener("click", function(e){
<<<<<<< HEAD
    getNumberValue(e.target.id);
=======
    getValue(e.target.id);
>>>>>>> 8fe625386bf39ad1c16262b5fa7577378ecb2e68
});

//use event parameter of target to identify what's inside the id which are the buttons

resultNum.addEventListener("click", operate);

clearBtn.addEventListener("click", clear);

<<<<<<< HEAD
function getNumberValue(buttonId){
=======
function getValue(buttonId){
>>>>>>> 8fe625386bf39ad1c16262b5fa7577378ecb2e68
    if ((buttonId !="clearbtn") && (buttonId !="equalbtn")){
        let button=document.getElementById(buttonId);
        let tmp=buttonId;
        tmp=tmp.replace("button", "");
        concatenate(tmp);
    }
};
//use 'replace' so when buttons are clicked it removes preface(button) and the id is just a number in the string format

function concatenate(tmp){
<<<<<<< HEAD
    displayScreen.value += tmp; 
=======
    display.value += tmp; 
>>>>>>> 8fe625386bf39ad1c16262b5fa7577378ecb2e68
}
//concatenating values entered by pressing buttons within container

function operate (){
<<<<<<< HEAD
    if(displayScreen.value=="."){
        alert("Oops! Please enter a math equation");
        return;
    }else{
    displayScreen.value=eval(displayScreen.value);
    }
};

function clear(){
    displayScreen.value="";
}
=======
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
>>>>>>> 8fe625386bf39ad1c16262b5fa7577378ecb2e68
