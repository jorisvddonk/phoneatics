import Phoneatics from './main';
import random from 'lodash.random';

jest.mock('lodash.random');

describe("Phoneatics", () => {
  let phoneatics;
  beforeEach(() => {
    phoneatics = new Phoneatics();
  })

  it("should return a string when given a pattern", () => {
    random.mockReturnValue(0);

    expect(phoneatics.generate("Sv")).toBe("Pa");
    expect(phoneatics.generate("ovcsafnlgr")).toBe("aabpjfmlwq");
  })

  it("should support the repeating character 'p'", () => {
    random.mockReturnValue(1);

    expect(phoneatics.generate("SppP")).toBe("TttT");
    expect(phoneatics.generate("sppP")).toBe("tttT");
    expect(phoneatics.generate("spPp")).toBe("ttTt");
    expect(phoneatics.generate("GpGP")).toBe("WhhWhH");
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