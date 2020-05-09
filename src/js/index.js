/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  taskCounter(counter);
  addTask();
};

let counter = 0;

function addTask() {
  let input = document.getElementById("addToDo");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
      let ul = document.querySelector("ul");
      let newLi = document.createElement("li");
      newLi.className = "tasks text-muted";
      newLi.innerHTML = input.value + '<i class="fa fa-times"></i>';
      newLi.querySelector("i").addEventListener("click", function(event) {
        this.parentNode.remove();
        counter--;
        taskCounter(counter);
      });
      ul.insertBefore(newLi, document.querySelector(".taskCounter"));
      input.value = "";
      counter++;
      taskCounter(counter);
    }
  });
}

function taskCounter(x) {
  let lastLi = document.querySelector(".taskCounter");
  if (x === 0) {
    lastLi.innerHTML = "<p >" + "No tasks, add a task" + "</p>";
  } else if (x === 1) {
    lastLi.innerHTML = "<p>" + x + " item left" + "</p>";
  } else if (x > 1) {
    lastLi.innerHTML = "<p>" + x + " items left" + "</p>";
  }
}
