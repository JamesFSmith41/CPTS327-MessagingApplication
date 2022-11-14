import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

var message, nonce, path, privateKey;
const hashDigest = sha256(nonce + message);
//const hmacDigest = Base64.stringify(hmacSHA512(path + hashDigest, privateKey));
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");


export function encryptSHA256(message)
{
    var ciphertext = CryptoJS.AES.encrypt(message, 'secret key 123').toString();
    return ciphertext
}

export function decryptSHA256(ciphertext)
{
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText
}

