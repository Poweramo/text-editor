const textArea = document.getElementById("text-container")

document.querySelector("form").addEventListener("submit", () => {
	textArea.value = "<pre>" + textArea.value + "</pre>"
})
