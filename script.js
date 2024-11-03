// script.js

// Function to toggle the visibility of an element
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Function to change the text content of an element
function changeText(elementId, newText) {
    const element = document.getElementById(elementId);
    element.textContent = newText;
}

// Function to add a new item to a list
function addItemToList(listId, newItemText) {
    const list = document.getElementById(listId);
    const newItem = document.createElement('li');
    newItem.textContent = newItemText;
    list.appendChild(newItem);
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggleButton').addEventListener('click', () => {
        toggleVisibility('toggleElement');
    });

    document.getElementById('changeTextButton').addEventListener('click', () => {
        changeText('textElement', 'New Text Content');
    });

    document.getElementById('addItemButton').addEventListener('click', () => {
        addItemToList('itemList', 'New List Item');
    });
});