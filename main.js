let form = document.querySelector(".task-form");
let inputVal = document.querySelector("#task-input");
let listOfTasks = document.querySelector(".listOfTasks");
let cancelTask;
form.addEventListener("submit", (e) => {
  e.preventDefault(); // pervent realoding on submit
  if (inputVal.value == "") alert("You entered nothing!!!");
  else {
    let task = `
                <li>
                    ${inputVal.value}
                    <span><i class="fa-sharp fa-solid fa-xmark fa-sm"></i></span>
                </li>
          `;
    addTask(task);
    inputVal.value = "";
    saveInlocalStorage();
  }
});

listOfTasks.addEventListener("click", (e) => {
  if (e.target.tagName == "I") {
    e.target.parentElement.parentElement.remove();
  }

  if (e.target.tagName == "LI") e.target.classList.toggle("checked");
  saveInlocalStorage();
});
function addTask(task) {
  listOfTasks.innerHTML += task;
  // save here
}

function saveInlocalStorage() {
  localStorage.setItem("item", listOfTasks.innerHTML);
}

function out() {
  listOfTasks.innerHTML = localStorage.getItem("item");
}
out();
