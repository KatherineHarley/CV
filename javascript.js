
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  var current = document.getElementsByClassName("active-sect");
  current[0].className = current[0].className.replace(" active-sect", " inactive-sect");
  this.className += " active";
  console.log(this.text)
  if (this.text == "m&s"){
      var use = "mns";
  }
  else{
      var use = this.text;
  }
  var toChange = document.getElementById(use).getElementsByClassName("content")[0]
  toChange.className = toChange.className.replace(" inactive-sect", " active-sect");
  console.log(document.getElementById(use).getElementsByClassName("content")[0].className)
});
}
