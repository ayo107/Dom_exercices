/*let list = document.querySelector("#parentLi");
let childs = list.childNodes;   
removeChild(childs[1])*/

function myFunction() {
  const list = document.getElementById("parentLi");
  if (list.hasChildNodes()) {
    list.removeChild(list.children[1]);
  }
}
  
  
  /*$(document).ready(function(){
    $('li:nth-child(1).removeMe').hide();
});*/