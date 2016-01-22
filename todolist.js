var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem');

//This code writes down the item you need and saves it in your list
form.addEventListener( 'submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div class="border">' + text + '</div>';
  evt.preventDefault();
}, false);

//This allows you to be able to cross out items and delete them from your list
todo.addEventListener( 'click', function(evt) {
   var tar = evt.target;
  if(tar.style.textDecoration === "line-through"){
   tar.parentNode.removeChild(tar);
}else{
    tar.style.textDecoration = "line-through";
}
  evt.preventDefault();
  
}, false);

