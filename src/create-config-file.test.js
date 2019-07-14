jest.mock("fs", () => ({
  writeFile: jest.fn(),
  readFileSync: jest.fn()
}));
const fs = require("fs");
const secretService = require("@bbc/cps-mi6");
const secretWriter = require("./index");

test.skip("writes whole secret to fileSystem", () => {
  secretService.getSecrets = jest.fn(() => Promise.resolve({ foo: "bar" }));
  secretWriter.writeSecretToFileSystem("foo", "bar");

  expect(fs.writeFile).toBeCalledWith(1);
});
