// Changes text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('header').textContent = 'Text has been changed!';
});

// Modifying CSS styles 
document.getElementById('changeStyleButton').addEventListener('click', function() {
    document.getElementById('header').style.color = 'red';
    document.getElementById('header').style.fontSize = '3em';
});

// Adds or removes an element when a button is clicked
document.getElementById('addElementButton').addEventListener('click', function() {
    const container = document.getElementById('container');
    
    // Check if the new element already exists
    if (!document.getElementById('newElement')) {
        const newElement = document.createElement('p');
        newElement.id = 'newElement';
        newElement.textContent = 'This is a dynamically added element!';
        container.appendChild(newElement);
    } else {
        container.removeChild(document.getElementById('newElement'));
    }
});
