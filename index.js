// ! each special key ==> it's file and function
// TODO: add cursor
// TODO: add shortcuts (copy, paste, cut, ctrl+a etc...)
// TODO: add edge cases (tab, shift etc...)
// Fix: CTRL key doesn't work

const textContainer = document.getElementById("text-container");
const selectionObj = window.getSelection();
const img = `<img id="text-cursor" src="./text-cursor.svg" alt="Text Cursor" />`;
const tabLevel = 4;

window.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "Enter":
			textContainer.innerHTML += `<br>`;
			break;

		case " ":
			textContainer.innerHTML += "&nbsp;";
			break;

		case "Backspace":
			if (selectionObj.isCollapsed) {
				textContainer.innerText = textContainer.innerText.slice(
					0,
					textContainer.innerText.length - 1,
				);
			} else {
				selectionObj.deleteFromDocument();
			}
			break;

		case "CapsLock":
			break;
		case "Tab":
			let count = 0;
			while (count !== tabLevel) {
				textContainer.innerHTML += "&nbsp;";
				count++;
			}
			break;

		default:
			textContainer.innerText += e.key;
			break;
	}
});
