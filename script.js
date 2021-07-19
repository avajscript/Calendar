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

    function editTask(event) {
      let inputField = document.createElement("input");
      let input = document.getElementById(`${event.target.id}`);
      console.log(input);
    }

    function append(dayId) {
      let dayText = document.getElementById(dayId);
      let currentDay = document.querySelector(`#${dayId}-container ul`);
      let task = document.createElement("li");
      let deleteButton = document.createElement("button");
      deleteButton.style.backgroundColor = "#EF476F";
      let editButton = document.createElement("button");
      editButton.style.backgroundColor = "#FFD166";
      deleteButton.addEventListener("click", deleteTask);
      deleteButton.innerText = "delete";
      editButton.addEventListener("click", editTask);
      editButton.innerText = "edit";
      task.innerText = dayText.value;
      task.appendChild(editButton);
      task.appendChild(deleteButton);
      currentDay.appendChild(task);

      console.log(currentDay);

      dayText.value = "";
    }
  })();
});
