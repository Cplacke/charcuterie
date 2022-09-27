import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";
                    
console.info('configuring mailer ...');
const client  = new SmtpClient();
await client.connectTLS({
    hostname: "smtp.gmail.com",
    port: 465,
    username: 'placketaffy@gmail.com',
    password: Deno.env.get('DENO_MAIL_PASS'), // "deno-charcuterie" g-mail app credentials
});

console.info('mailer client online ...');
export const sendMail = async ({
    name,
    email,
    message
}) => {
    try { 
        return client.send({
            from: 'charcuterie-by-dylan.deno.dev',
            to: email,
            subject: `New Request from ${name}`,
            content: `<div>
                <h1> New inquiry from ${name} <h1/>
                <h3> ${Date()} <h3/>
                <h3> Requested Reply Email: ${email} <h3/>
                <p>
                    <h3> Message: </h3>
                    ${message}
                </p>
            </div>`,
        });
        console.info(`mail sent to ${name}:${email} - ${Date()}`);
    } catch (err) {
        console.error(err);
    }
}
