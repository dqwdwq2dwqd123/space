// Function to display the message in the popup
function showMessage(title, message) {
    const popup = document.getElementById('popup');
    const titleElement = document.getElementById('planet-title');
    const messageElement = document.getElementById('planet-message');
    titleElement.innerText = title;
    messageElement.innerText = message;
    popup.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function showStarMessage(message) {
    const popup = document.getElementById('popup');
    const titleElement = document.getElementById('planet-title');
    const messageElement = document.getElementById('planet-message');
    titleElement.innerText = 'A Starry Message';
    messageElement.innerText = message;
    popup.style.display = 'flex';
}