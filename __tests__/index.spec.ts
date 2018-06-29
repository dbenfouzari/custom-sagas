import {nothing, square} from "../src/index";

describe('Square method', () => {
  it('should return 9', () => {
    expect(square(3)).toBe(9)
  });

  it('should be ok', () => {
    expect(nothing(43)).toBe('coucou');
  })
});
