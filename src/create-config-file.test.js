jest.mock("fs", () => ({
  writeFile: jest.fn(),
  readFileSync: jest.fn()
}));

const fs = require("fs");
const secretService = require("@bbc/cps-mi6");
const secretWriter = require("./index");

beforeEach(() => {
  jest.resetAllMocks();
});

test("writes whole secret to fileSystem", async () => {
  secretService.getSecrets = jest.fn(() => Promise.resolve({ foo: "bar" }));
  await secretWriter.writeSecretToFileSystem("foo", "bar");

  expect(fs.writeFile).toBeCalledTimes(1);
});

test("logs an error where exception thrown calling secret service", async () => {
  secretService.getSecrets = jest.fn(() => Promise.reject("foo"));
  global.console = {
    log: jest.fn()
  };

  await secretWriter.writeSecretToFileSystem("foo", "bar");

  expect(fs.writeFile).toBeCalledTimes(0);
  expect(global.console.log).toBeCalledWith("failed to retrieve bar", "foo");
});

test("logs error where exception thrown writing to fs", async () => {
  jest.mock("fs", () => ({
    writeFile: jest.fn(() => {}),
    readFileSync: jest.fn()
  }));

  secretService.getSecrets = jest.fn(() => Promise.resolve({ foo: "bar" }));
  await secretWriter.writeSecretToFileSystem("foo", "bar");

  expect(fs.writeFile).toBeCalledTimes(1);
});
