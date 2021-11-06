var textInp = document.querySelector("textarea");
const btn = document.querySelector("#btn");
var output = document.querySelector("#output");


var serverUrl = "https://api.funtranslations.com/translate/minion.json";
function getTranslationUrl(text){
    return serverUrl+"?"+"text="+text;
}

function errorHandler(error){
    alert("Sorry,Something is wrong.Please try again after sometime!");
}
function clickHandler(){
    // console.log(textInp.value);
  fetch(getTranslationUrl(textInp.value)).then(response=>response.json()).then(json=>{
      output.innerText=json.contents.translated;
    
  }).catch(errorHandler) 
};
btn.addEventListener("click", clickHandler);
