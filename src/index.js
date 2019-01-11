const secretService = require('@bbc/cps-mi6')

const writeSecretToFileSystem = async(path, secret) => {
    try {
        const secretObject = await secretService.getSecrets(secret);
        console.log('secrectObject', secretObject);
    } catch (error) {
        console.log(`failed to retrieve ${secret}`)
    }
}

module.exports = {
    writeSecretToFileSystem
}