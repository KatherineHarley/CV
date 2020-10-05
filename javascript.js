
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", " nonactive");
  
  // current[0].className = current[0].className.replace(" active-sect", " inactive-sect");
  this.className = this.className.replace(" nonactive", " active")
  // console.log(this.href.split("#").pop())
  // var use = this.href.split("#").pop()
  // var toChange = document.getElementById(use).getElementsByClassName("content")[0]
  // toChange.className = toChange.className.replace(" inactive-sect", " active-sect");
  // console.log(document.getElementById(use).getElementsByClassName("content")[0].className)
});
}
