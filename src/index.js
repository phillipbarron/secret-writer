const secretService = require("@bbc/cps-mi6");
const fs = require("fs");

const writeSecretToFileSystem = async (path, secretsId, secret) => {
  try {
    const secretObject = await secretService.getSecrets(secretsId);
    const secretToWriteToFileSystem = secret
      ? secretObject[secret]
      : JSON.stringify(secretObject, null, 2);
    if (secretToWriteToFileSystem) {
      fs.writeFile(path, secretToWriteToFileSystem, error => {
        if (error) {
          return console.log(error);
        }
        console.log(
          `${secret || secretsId} value was written to ${path} successfully`
        );
      });
    }
  } catch (error) {
    console.log(`failed to retrieve ${secretsId}`, error);
  }
};

module.exports = {
  writeSecretToFileSystem
};
