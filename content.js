const deleteButton = document.querySelector('.more-item--delete');

// hacky way to check if this is the current user
if (deleteButton) {
	const ul = document.querySelector('.metadata-list')
	const buttonLi = document.createElement("li");
	buttonLi.className = 'metadata-item';
	buttonLi.style.marginLeft = "auto";

	const button = deleteButton.cloneNode(true)
	button.innerText = 'Delete Visible Scrobbles'
	button.style.borderRadius = '.5em';

	button.addEventListener("click", function() {
		scrobblesDeleteBtns = document.querySelectorAll('form button.more-item--delete')
		scrobblesDeleteBtns.forEach(element => {
			element.click()
		});
	});

	buttonLi.appendChild(button)
	ul.appendChild(buttonLi);
}