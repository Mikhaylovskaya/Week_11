const taskInput = document.getElementById('taskInput');
const addButtom = document.querySelector('.addButtom');
const taskList = document.querySelector('#taskList');

function createTask(){
    newElement = document.createElement("li");
    newElement.textContent = taskInput.value;
    taskList.append(newElement);
    taskInput.value = '';
}

function checkTask (evt){
    if (evt.target.tagName === 'LI'){
        evt.target.classList.toggle('active');
    }
}

addButtom.addEventListener('click', createTask);
taskList.addEventListener('click', checkTask);