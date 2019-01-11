const secretService = require('@bbc/cps-mi6')
const fs = require('fs');

const writeSecretToFileSystem = async(path, secretsId, secret) => {
    try {
        const secretObject = await secretService.getSecrets(secretsId);
        const secretToWriteToFileSystem = secretObject[secret];
        fs.writeFile(path, secretToWriteToFileSystem, (error) => {
            if(error) {
                return console.log(error);
            }
            console.log(`${secret} value was written to ${path} successfully`);
        });
    } catch (error) {
        console.log(`failed to retrieve ${secret}`)
    }
}
 


module.exports = {
    writeSecretToFileSystem
}