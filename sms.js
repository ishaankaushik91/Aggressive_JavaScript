import twilio from "twilio";

const accountSid = `AC896e81ba687df6a5972855b923c46601`;
const authToken = `57861a3de74762c3adec08de9a51312c`;
const client = new twilio(accountSid, authToken);

async function sendSMS(msg)
{
    try {
        let Response = await client.messages
        .create({
            body: msg,
            to: `+919560601357`,
            from: `+19377313145`
        })
    } catch (error) {
        console.log(error);
    }
}

export default sendSMS;