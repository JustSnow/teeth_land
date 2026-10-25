import "./style.css";
import { validate } from "./validate.js";

const dialog = document.getElementById("booking-dialog");
const toast = document.getElementById("toast");
const toastText = toast.querySelector(".toast__text");
const header = document.querySelector(".site-header");
let toastTimer;

document.documentElement.classList.add("js");

for (const cta of document.querySelectorAll("[data-open-booking]")) {
  cta.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
  });
}
dialog.querySelector("[data-close-booking]").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});

function showToast() {
  toastText.textContent = "Заявка отправлена. Перезвоним в течение 15 минут";
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hideToast, 5000);
}
function hideToast() {
  toast.hidden = true;
  toastText.textContent = "";
}
toast.querySelector(".toast__close").addEventListener("click", hideToast);

function setError(form, field, message) {
  const input = form.elements[field];
  const error = form.querySelector(`[data-error-for="${field}"]`);
  error.textContent = message || "";
  input.setAttribute("aria-invalid", message ? "true" : "false");
}

for (const form of document.querySelectorAll("[data-booking-form]")) {
  form.noValidate = true;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const errors = validate({ name: form.elements.name.value, phone: form.elements.phone.value });
    setError(form, "name", errors.name);
    setError(form, "phone", errors.phone);
    const firstInvalid = Object.keys(errors)[0];
    if (firstInvalid) {
      form.elements[firstInvalid].focus();
      return;
    }
    // Placeholder capture: nothing is sent anywhere (portfolio demo).
    form.reset();
    if (form.closest("dialog")) dialog.close();
    showToast();
  });
}

const onScroll = () => header.classList.toggle("is-compact", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
