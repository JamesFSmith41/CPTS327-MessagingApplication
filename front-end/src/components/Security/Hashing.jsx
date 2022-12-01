import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';

var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");


export function SHA256(message)
{
    var hash = SHA256(message);
    return hash
}
