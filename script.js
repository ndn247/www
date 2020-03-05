function showPopup() {
	var popup = document.getElementById('popup');
	popup.classList.add('show');                               // adds code from class 'show' from CSS to element popup in HTML
}

function hidePopup() {
	var popup = document.getElementById('popup');
	popup.classList.remove('show');
}