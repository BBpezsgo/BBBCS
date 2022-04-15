function onDragStart(event) {
    event.dataTransfer
        .setData('text/plain', event.target.id);

    event.currentTarget.classList.add('draggable-active');
}

function onDragEnd(event) {
    event.preventDefault();
    event.currentTarget.classList.remove('draggable-active');
}

function onDragOver(event) {
    event.preventDefault();
    event.currentTarget.classList.add('dropzone-active');
}

function onDragLeave(event) {
    event.currentTarget.classList.remove('dropzone-active');
}

function onDragEnd2(event) {
    event.currentTarget.classList.remove('dropzone-active');
}

function onDrop(event) {
    const id = event.dataTransfer
        .getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    dropzone.classList.remove('dropzone-active');
    event
        .dataTransfer
        .clearData();
}