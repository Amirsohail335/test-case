import { sum } from "../sum";

test("Check sum of 2 positive numbers", () => {
  expect(sum(2, 5)).toBe(7);
});



// test("check sum of 2 numbers ", () => {
//   expect(sum(2, 3)).toBe(5);
//   expect(sum(-2, 3)).toBe(1);
//   expect(sum()).toBe("Please check argument");
// });
