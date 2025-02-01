const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
        return;
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00D7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

inputBox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

listContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        saveData();
    }
    else if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        saveData(); 
    }
}, false);

function saveData(){
    localStorage.setItem('Data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('Data');
}

window.onload = showTask;


