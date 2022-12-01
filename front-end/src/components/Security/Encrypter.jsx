var message, nonce, path, privateKey;
var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");

export function encryptAES(message)
{
    var ciphertext = CryptoJS.AES.encrypt(message, 'secret key 123').toString();
    return ciphertext
}

export function decryptAES(ciphertext)
{
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText
}





