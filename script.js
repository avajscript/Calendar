window.addEventListener("DOMContentLoaded", () => {
  const colors = [
    "#F6F2FF",
    "#DCCCFF",
    "#E07BE0",
    "#932F6D",
    "#420039",
    "#FFFD82",
    "#FFFD82",
  ];

  (function () {
    for (let i = 1; i <= 7; i++) {
      document
        .getElementById(`day-${i}`)
        .addEventListener("keyup", function (event) {
          if (event.keyCode == 13) {
            append(event.target.id);
          }
        });
    }

    const headings = document.querySelectorAll(`.day h2`);
    const labels = document.querySelectorAll(`.day label`);

    headings.forEach((day) => {
      day.style.backgroundColor = colors[Array.from(headings).indexOf(day)];
    });

    labels.forEach((label) => {
      label.style.backgroundColor = colors[Array.from(labels).indexOf(label)];
    });

    function deleteTask(event) {
      event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    }

    function createEdit() {
      let editButton = document.createElement("button");
      editButton.style.backgroundColor = "#FFD166";
      editButton.addEventListener("click", editTask);
      editButton.innerText = "edit";
      return editButton;
    }

    function createDelete() {
      let deleteButton = document.createElement("button");
      deleteButton.style.backgroundColor = "#EF476F";
      deleteButton.addEventListener("click", deleteTask);
      deleteButton.innerText = "delete";
      return deleteButton;
    }

    function newAppend(event, inputBar, text) {
      text.innerText = inputBar.value;

      let deleteButton = createDelete();
      let editButton = createEdit();

      text.appendChild(editButton);
      text.appendChild(deleteButton);

      event.target.parentNode.removeChild(event.target);
    }

    function editTask(event) {
      let inputBar = document.createElement("input");
      let buttonTextNode = event.target.parentNode;
      inputBar.addEventListener("keyup", function (event) {
        if (event.keyCode == 13) {
          newAppend(event, inputBar, buttonTextNode);
        }
      });
      inputBar.style.width = "100%";
      event.target.parentNode.parentNode.parentNode.appendChild(inputBar);
    }

    function append(dayId) {
      let taskText = document.getElementById(dayId);
      let currentDay = document.querySelector(`#${dayId}-container ul`);

      let task = document.createElement("li");
      let itemText = document.createElement("p");
      itemText.innerText = taskText.value;

      let deleteButton = createDelete();
      let editButton = createEdit();

      task.appendChild(itemText);
      itemText.appendChild(editButton);
      itemText.appendChild(deleteButton);
      currentDay.appendChild(task);

      console.log(currentDay);

      taskText.value = "";
    }
  })();
});
