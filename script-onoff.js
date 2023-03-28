window.onload = function()
{   
var $onoff = document.querySelector(".button-onoff");

var ligaDesliga = function(){
this.classList.toggle("on");
this.classList.toggle("off");

};
$onoff.addEventListener("click", ligaDesliga);

var $onoff = document.querySelector(".button-onoff2");

var ligaDesliga = function(){
this.classList.toggle("on");
this.classList.toggle("off");

};
$onoff.addEventListener("click", ligaDesliga);
}
