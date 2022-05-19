// Your code here
//add task function
function addTask(){
  let ul = document.querySelector("ul")
  var value = document.getElementById("addToDo").value
  const newLi = document.createElement("li")
  newLi.innerHTML = `<span><i class="fa fa-trash"></i></span>${value}`
  //delete task option
  newLi.addEventListener("click", function (event){
    li.parentNode.removeChild(this);
  })
  ul.appendChild(newLi);
  document.getElementById("addToDo").value =""
  }
  //task event
  window.onchange = function onchange (){
  let input = document.getElementById("addToDo")
  input.addEventListener("change", addTask())
  console.log(ul)
  }
  
  //event delete button option
  let lista = document.querySelectorAll("li");
  for (var li of lista){
  li.addEventListener("click", function (event){
    li.parentNode.removeChild(this);
  });
  };
