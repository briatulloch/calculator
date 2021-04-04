//Set Global Variables 
const displayScreen=document.getElementById("input");
const container=document.getElementById("container");
const resultNum =document.getElementById("equalbtn");
const clearBtn=document.getElementById("clearbtn");


//make input form read only so input on screen cannot be changed (only responds to buttons)
document.getElementById("input").setAttribute("readonly", true);

//use event parameter of target to identify what's inside the id which are the buttons
container.addEventListener("click", function(e){
    getNumberValue(e.target.id);
});

resultNum.addEventListener("click", operate);

clearBtn.addEventListener("click", clear);

//use 'replace' so when buttons are clicked it removes preface(button) and the id is just a number in the string format
function getNumberValue(buttonId){
  if ((buttonId !="clearbtn") && (buttonId !="equalbtn")){
        let button=document.getElementById(buttonId);
        let tmp=buttonId;
        tmp=tmp.replace("button", "");
        concatenate(tmp);
    }
};

//concatenating values entered by pressing buttons within container
function concatenate(tmp){
    displayScreen.value += tmp; 
}

function operate (){
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
