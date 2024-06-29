import { getPositionsBetween } from "../src/modules/utils";

describe("getPositionsBetween", () => {
  test("Get positions given start position and end position", () => {
    expect(getPositionsBetween([0, 3], [0, 6])).toEqual([
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
    ]);
  });
});
