const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// console.log(addTask);
// console.log(taskContainer);
// console.log(inputTask);

addTask.addEventListener('click', function() {

    let task = document.createElement('div');
    task.classList.add('task');

    let listItem = document.createElement('li');
    listItem.innerHTML = `${inputTask.value}`;
    task.appendChild(listItem);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<li class="fa fa-check"></li>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<li class="fa fa-trash"></li>`;
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === '') {
        alert('Please enter a task');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkButton.addEventListener('click', function() {
        checkButton.parentElement.style.textDecoration = 'line-through';
    });

    deleteButton.addEventListener('click', function() {
       task.remove();
    });

    // deleteButton.addEventListener('click', function(e) {
    //    let target = e.target;
    //    target.parentElement.parentElement.remove();
    //  });

});

