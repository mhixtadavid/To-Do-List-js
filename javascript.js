let inputToDo = document.querySelector('#inputToDo'); // getting text from input
let displayToDo = document.querySelector('#todolist'); // container containing list of to do's


const addToDo = function(){
  // adding a child element to the div containing to do's
  var paragraph = document.createElement('li');
  //setting the child element to equal the input firld on submit
  paragraph.innerText = inputToDo.value;
  // append the child element to the div
  displayToDo.appendChild(paragraph)
  // reset input field to empty after submit
  inputToDo.value =('')
}

// adding event listener, click function
  document.getElementById("addtodo").addEventListener('click', addToDo);
