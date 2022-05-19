var myCountriesSelect = document.querySelector("#mySelect");
function selectcoun() {
var countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela","Spain"];
// your code here
for (var i = 0; i < countries.length; i++) {
    var opt = countries[i];
    var el = document.createElement("option");
    el.innerHTML = opt;
    el.value = opt;
    myCountriesSelect.appendChild(el);
  }

}
myCountriesSelect.addEventListener("change", function(event){
    alert(event.target.value)

});
