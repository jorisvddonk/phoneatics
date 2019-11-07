import Phoneatics from './main';
import random from 'lodash.random';

jest.mock('lodash.random');

describe("Phoneatics", () => {
  let phoneatics;
  beforeEach(() => {
    phoneatics = new Phoneatics();
  })

  it("should return a string when given a pattern", () => {
    random.mockReturnValueOnce(0);
    random.mockReturnValueOnce(0);
    expect(phoneatics.generate("Sv")).toBe("Pa");
  })

  it("should return a number between 0 and 9 when given a 'u' pattern character", () => {
    // todo: mock lodash random function
    random.mockReturnValueOnce(0);
    expect(phoneatics.generate("u")).toBe("0");
    expect(random).toHaveBeenCalledWith(0, 9);
  })

  it("should return a number between 1 and 9 when given a 'U' pattern character", () => {
    random.mockReturnValueOnce(4);
    expect(phoneatics.generate("U")).toBe("4");
    expect(random).toHaveBeenCalledWith(1, 9);
  })

  it("should return a literal string when given literal escape characters", () => {
    expect(phoneatics.generate("\\t\\e\\s\\t")).toBe("test");
  })
});