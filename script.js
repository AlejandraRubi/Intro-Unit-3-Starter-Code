/* Declare variables below to save the different sections (divs) of your story*/
let homePage=document.querySelector(".story-opening");
let title=document.querySelector(".title");

let clothingButton=document.querySelector(".option-one");
let candyButton=document.querySelector(".option-two"); 

let foundMom=document.querySelector(".option-one-screen");
let securityGuard=document.querySelector(".option-two-screen");

let runButton=document.querySelector(".runFromMom");
let askButton=document.querySelector(".askMomHelp");

let runEnding=document.querySelector(".run-away-ending");
let askEnding=document.querySelector(".ask-help-ending");

let endToys=document.querySelector(".option-one-end");
let endIntercom=document.querySelector(".option-two-end");




clothingButton.onclick=function(){
title.style.display = "none"; 
homePage.style.display = "none";
clothingButton.style.display="block";
candyButton.style.display="block";
foundMom.style.display="block";

  
};

candyButton.onclick=function(){
title.style.display="none";
homePage.style.display="none";
clothingButton.style.display="none";
candyButton.style.display="none"; 
securityGuard.style.display="block";
  
};

runButton.onclick=function(){
title.style.display="none";
homePage.style.display="none";
runButton.style.display="none";
askButton.style.display="none";
endToys.style.display="block";
};

askButton.onclick=function(){
title.style.display="none";
homePage.style.display="none";
runButton.style.display="none";
askButton.style.display="none";
endToys.style.display="block";
}