// CHECKEAR LAS TAREAS
document.addEventListener("click", e => {
  if (e.target.classList.contains("check")) {
    e.target.classList.toggle("checked");
    e.target.parentElement.classList.toggle("active");
    e.target.parentElement.parentElement.children[1].classList.toggle("subrayar");

  }
});

// ELIMINAR ELEMENTOS DEL DOM
document.addEventListener("click", e => {
  if (e.target.className === "close") {
    e.target.parentElement.remove();
    countItems();
  }
});

// AGREGAR ELEMENTOS AL DOM (TASK)
const createElements = (descriptionTask) => {
  let htmlCode = `
     <div class="task">
        <div class="checkbox checkboxes">
          <img src="./images/icon-check.svg" alt="checkbox" class="check" />
        </div>
        <p class="description">${descriptionTask}</p>
        <img src="images/icon-cross.svg" alt="Icono de una equis" class="close" />
      </div>
  `;
  document.querySelector(".tasks").innerHTML += htmlCode;
  const inputTask = document.getElementById("inputTask").value = "";
};

// CONTAR LOS ELEMENTOS
const countItems = () => {
  const tasks = document.querySelector(".tasks").children;
  document.getElementById("count-items").textContent = `${tasks.length} Items left`;
}

// AGREGAR TEREA
document.getElementById("btnTask").addEventListener("click", () => {
  const inputTask = document.getElementById("inputTask").value;
  if (inputTask.length > 4) {
    createElements(inputTask);
    countItems();
  }
  else {
    Swal.fire ({
    icon: 'error',
    title: 'Oops...',
    text: 'Enter task correctly',
    });
  };
});

// AGREGAR TAREA CON LA TECLA ENTER
document.addEventListener("keyup", e => {
  if (e.key === "Enter") {
    const inputTask = document.getElementById("inputTask").value;
    if (inputTask.length > 4) {
        createElements(inputTask);
        countItems();
    }
    else {
       Swal.fire  ({
      icon: 'error',
      title: 'Oops...',
      text: 'Enter task correctly',
      });
    }
  }
});

// ELIMINAR TODAS LAS TAREAS
document.addEventListener("click", e => {
 if (e.target.id === "clear") {
  document.querySelector(".tasks").innerHTML = "";
  countItems();
 }
});

// COLOCAR TEMA DARK
document.addEventListener("click", e => {
  if (e.target.className === "icon") {
    if (document.body.className !== "dark") {
      document.querySelector(".icon").setAttribute("src", "./images/icon-sun.svg");
    } else {
      document.querySelector(".icon").setAttribute("src", "./images/icon-moon.svg");
    }
    document.body.classList.toggle("dark");
  }
});

// LISTAR LAS TAREAS YA HECHAS
document.querySelector(".no-completed").addEventListener("click", e => {
  checkOutTasksCompleted();
});

document.querySelector(".completed").addEventListener("click", e => {
  checkOutTasksNoCompleted();
});

document.querySelector(".all").addEventListener("click", e => {
  checkOutAllTask();
});

const checkOutTasksCompleted = () => {
  const tasks = document.querySelectorAll(".checkboxes");
  tasks.forEach(element => {
    if (element.classList.contains("active")) element.parentElement.style.display = "none";
    else element.parentElement.style.display = "flex";
  });
};

const checkOutTasksNoCompleted = () => {
  const tasks = document.querySelectorAll(".checkboxes");
  tasks.forEach(element => {
    if (element.classList.contains("active")) element.parentElement.style.display = "flex";
    else element.parentElement.style.display = "none";
  });
};

const checkOutAllTask = () => {
  const tasks = document.querySelectorAll(".checkboxes");
  tasks.forEach(element => {
    if (element.classList.contains("checkboxes")) element.parentElement.style.display = "flex";
  });
};
