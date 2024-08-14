// TODO: add cursor
// TODO: add shortcuts (copy, paste, cut, etc...)
// Fix: text going out of the container
// Fix: delete br as well when deleting an empty line
// Fix: Text container not displaying correctly (CSS)

const textContainer = document.getElementById("text-container");
const selectionObj = window.getSelection();

window.addEventListener("keypress", (e) => {
	switch (e.key) {
		case "Enter":
			textContainer.innerHTML += `<br>`;
			break;

		default:
			textContainer.innerText += e.key;
			break;
	}
});

window.addEventListener("keydown", (e) => {
	if (e.key === "Backspace") {
		if (selectionObj.isCollapsed) {
			textContainer.innerText = textContainer.innerText.slice(
				0,
				textContainer.innerText.length - 1,
			);
		} else {
			selectionObj.deleteFromDocument();
		}
	}
});
