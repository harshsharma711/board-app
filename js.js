
function openModal(status) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal').dataset.status = status;
}


function closeModal() {
    document.getElementById('modal').style.display = 'none';
}


function addTask() {
    const status = document.getElementById('modal').dataset.status;
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;

    
    const task = document.createElement('div');
    task.className = 'card';
    task.innerHTML = `<h3>${title}</h3><p>${description}</p>`;


    document.getElementById(status).appendChild(task);


    const countElement = document.getElementById(`${status}-count`);
    countElement.textContent = parseInt(countElement.textContent) + 1;

   
    closeModal();
}


function openDetailsPage(element) {
    const taskDetails = element.parentNode;
    const title = taskDetails.querySelector('h3').textContent;
    const description = taskDetails.querySelector('p').textContent;
    const status = taskDetails.parentNode.id;

    
    localStorage.setItem('currentTask', JSON.stringify({ title, description, status }));


    window.location.href = 'details.html';
}
