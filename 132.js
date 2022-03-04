import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

async function EnDe()
{
    try {
        let payload = {
            email : "email",
            puio : "picasso"
        };

    /* Generating token & encrypting it */
    let token = jwt.sign(payload, 'token');
    let cipheredText = CryptoJS.AES.encrypt(token, 'payload').toString();
    
    /* Decrypting the token & then decoding it to get the payload */
    let bytes = CryptoJS.AES.decrypt(cipheredText, 'payload');
    let original = bytes.toString(CryptoJS.enc.Utf8);
    
    let load = jwt.verify(original, 'token');
    console.log(load);

    } catch (error) {
        console.log(error);
    }
}

EnDe();