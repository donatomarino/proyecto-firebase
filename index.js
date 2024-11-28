//Me traigo mi db firestore
import { getTasks, insertTask, deleteTask, updateDescription } from "./utils.js";
//console.log(db);
//Extraigo todos los documentos de tasks y creo tarjetas con ellos
await getTasks();


//Obtenemos el form y capturamos el submit
const form = document.getElementById("task-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    const task = {
        title: form["task-title"].value,
        description: form["task-description"].value
    }

    insertTask(task);
})


const buttonsCardD = document.getElementsByName("delete");
buttonsCardD.forEach(element => {
    element.addEventListener("click", () => {
        var divDelete = element.parentNode.parentNode;
        document.body.removeChild(divDelete);
        console.log("Estoy borrando la tarea: "+element.id);
        deleteTask(element.id);
    })
});

//Obtenemos el form y capturamos el submit
const getForm = document.getElementById("task-form-id"); // Cogemos el segundo form
getForm.addEventListener("submit", e => { 
    e.preventDefault();
    const id = getForm["task-id"].value; // Cogemos el ID
    const task = {
        title: getForm["task-title"].value, // Cogemos el titulo
        description: getForm["task-description"].value // Cogemos la description
    }

    // Le pasamos todos los parametros a la función updateDescription
    updateDescription(id, task); 
})