import Phoneatics from './main';

describe("Phoneatics", () => {
  let phoneatics;
  beforeEach(() => {
    phoneatics = new Phoneatics();
  })

  it("should return a string when given a pattern", () => {
    expect(phoneatics.generate("Sv")).toBeDefined();
  })

  it("should return a number between 0 and 9 when given a 'u' pattern character", () => {
    // todo: mock lodash random function
    expect(phoneatics.generate("u")).toMatch(/[0-9]/);
  })

  it("should return a number between 1 and 9 when given a 'U' pattern character", () => {
    // todo: mock lodash random function
    expect(phoneatics.generate("U")).toMatch(/[1-9]/);
  })

  it("should return a literal string when given literal escape characters", () => {
    expect(phoneatics.generate("\\t\\e\\s\\t")).toBe("test");
  })
});