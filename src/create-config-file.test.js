jest.mock("fs", () => ({
  writeFile: jest.fn(),
  readFileSync: jest.fn()
}));
const fs = require("fs");
const secretService = require("@bbc/cps-mi6");
const secretWriter = require("./index");

test("writes whole secret to fileSystem", async () => {
  secretService.getSecrets = jest.fn(() => Promise.resolve({ foo: "bar" }));
  await secretWriter.writeSecretToFileSystem("foo", "bar");

  expect(fs.writeFile).toBeCalledTimes(1);
});
