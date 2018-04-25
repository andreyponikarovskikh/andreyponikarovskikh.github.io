var link = document.querySelector(".contacts-info .button-send");
var popup = document.querySelector(".modal-post");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-feedback-show");
	username.focus();
});

close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-feedback-show");
	popup.classList.remove("modal-feedback-error");
});

form.addEventListener("submit", function (event) {
	if (!username.value || !email.value || !message.value) {
		event.preventDefault();
		popup.classList.remove("modal-feedback-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-feedback-error");
	}
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-feedback-show")) {
		popup.classList.remove("modal-feedback-show");
		popup.classList.remove("modal-feedback-error");
		}
	}
});