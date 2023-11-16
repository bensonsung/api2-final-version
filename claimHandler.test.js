// claimHandler.test.js
const { countKeywords, processClaim } = require("./claimHandler");

// Test
test("countKeywords should correctly count keywords in a description", () => {
  const description =
    "Some random people crash their car into mine , so i decided to smash their house";
  const keyWords = ["collide", "crash", "scratch", "bump", "smash"];
  const result = countKeywords(description, keyWords);
  expect(result).toBe(2);
});

//The default risk level is 1 and goes all the way up to 5
// Test 1
test("risk level 3", () => {
  const description =
    "A car crash occurred on the highway. the two vehicles collide on the side of the street";
  const keyWords = ["collide", "crash", "scratch", "bump", "smash"];
  const result = processClaim(description, keyWords);
  expect(result).toBe(3); // Adjust this based on your specific logic
});
// Test 2
test(" ", () => {
  const description = " ";
  const keyWords = ["collide", "crash", "scratch", "bump", "smash"];
  const result = processClaim(description, keyWords);
  expect(result).toBe(1); // Adjust this based on your specific logic
});

// Test 3
test("我撞爛了我的車，還我一台新車。", () => {
  const description = " ";
  const keyWords = ["collide", "crash", "scratch", "bump", "smash"];
  const result = processClaim(description, keyWords);
  expect(result).toBe(1); // Adjust this based on your specific logic
});
// Test 4
test("*##$%^@&*@@", () => {
  const description = " ";
  const keyWords = ["collide", "crash", "scratch", "bump", "smash"];
  const result = processClaim(description, keyWords);
  expect(result).toBe(1); // Adjust this based on your specific logic
});
