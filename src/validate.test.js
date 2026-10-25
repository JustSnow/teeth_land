import { test } from "node:test";
import assert from "node:assert/strict";
import { isPhone, validate } from "./validate.js";

test("phone accepts +7 with 10 digits in any common formatting", () => {
  assert.ok(isPhone("+7 (900) 123-45-67"));
  assert.ok(isPhone("+79001234567"));
});

test("phone rejects 8-prefix, short and long numbers", () => {
  assert.ok(!isPhone("8 900 123 45 67"));
  assert.ok(!isPhone("+7 900 123 45"));
  assert.ok(!isPhone("+7 900 123 45 678"));
  assert.ok(!isPhone(""));
});

test("validate reports both fields when empty", () => {
  assert.deepEqual(Object.keys(validate({ name: " ", phone: "" })), ["name", "phone"]);
  assert.deepEqual(validate({ name: "Галина", phone: "+7 900 123-45-67" }), {});
});
