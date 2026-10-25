export const PHONE_HINT = "Введите номер в формате +7 (900) 000-00-00";
export const NAME_HINT = "Введите ваше имя";

export function isName(value) {
  return value.trim().length >= 2;
}

// +7 followed by exactly 10 digits; spaces, brackets and dashes allowed.
export function isPhone(value) {
  const v = value.trim();
  return v.startsWith("+7") && /^7\d{10}$/.test(v.replace(/\D/g, ""));
}

export function validate({ name, phone }) {
  const errors = {};
  if (!isName(name)) errors.name = NAME_HINT;
  if (!isPhone(phone)) errors.phone = PHONE_HINT;
  return errors;
}
