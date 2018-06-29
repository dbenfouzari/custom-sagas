import { square } from "../src";

describe('Square method', () => {
  it('should return 9', () => {
    expect(square(3)).toBe(9)
  });
});
