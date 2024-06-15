// Get all elements on the page
const allElements = document.querySelectorAll('*');

// Function to hide all elements
function hideAllElements() {
  allElements.forEach(element => {
    element.style.type = 'none';
  });
}

// Function to show all elements
function showAllElements() {
  allElements.forEach(element => {
    element.style.display = '';
  });
}

// Add event listener to a button
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', () => {
  hideAllElements();
  // Do something else here, like show a loading spinner or a message
  
  // After a short delay, show all elements again
  setTimeout(showAllElements, 2000);
});