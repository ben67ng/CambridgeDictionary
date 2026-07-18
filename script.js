document
.getElementById("cambridge-widget")
.addEventListener("submit",function(e){

e.preventDefault();

const word =
document
.getElementById("search")
.value
.trim();

if(word==="") return;

const url =
"https://dictionary.cambridge.org/vi/dictionary/english-vietnamese/" +
encodeURIComponent(word);

window.open(url,"_blank");

});
