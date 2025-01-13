'use strict';

const tasksInput = document.getElementById('task__input');
const tasksAddButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
let taskRemoveButton;
let tasks;

function taskAdd(event) {
	event.preventDefault();
	if (tasksInput.value.trim()) {

		tasksList.insertAdjacentHTML(`beforeEnd`, `
            <div class="task">
            <div class="task__title">
                ${tasksInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
            </div>`);

		tasksInput.value = '';

		taskRemoveButton = document.getElementsByClassName(`task__remove`);
		tasks = document.getElementsByClassName(`task`);
	}
}

tasksAddButton.addEventListener(`click`, taskAdd);

tasksList.onclick = function(event) {
	let target = event.target;

	if (target.classList.contains('task__remove')) {
		target.closest('.task').remove();
	}
}