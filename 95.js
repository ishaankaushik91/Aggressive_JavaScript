import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

let Payload = {
    email: "IP11@gmail.com",
    mobile: "+919441362545",
    fname: "Hello There"
}

let Token = jwt.sign(Payload, `Token`, { expiresIn: 60 * 4 });
var ciphertext = CryptoJS.AES.encrypt(Token, 'Tok').toString();
console.log(ciphertext);

console.log("\n\n");

var bytes  = CryptoJS.AES.decrypt(ciphertext, 'Tok');
var originalText = bytes.toString(CryptoJS.enc.Utf8);
console.log(originalText);