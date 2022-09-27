import { SMTPClient } from "https://deno.land/x/denomailer/mod.ts";

const client = new SMTPClient({
    connection: {
        hostname: 'smtp.gmail.com',
        port: 465,
        tls: true,
        auth: {
            user: 'placketaffy@gmail.com',
            pass: Deno.env.MAIL_PASS, // "deno-charcuterie" app credentials
        },
    },
});
console.info('mailer client connected');


export const sendMail = async ({
    name,
    email,
    message
}) => {
    return client.send({
        from: "charcuterie-by-dylan@deno.dev",
        to: "cplacke@gmail.com",
        subject: `New Request form ${name}`,
        // content: "...",
        html: `<div>
            <h1> New inquiry from ${name} <h1/>
            <h3> ${Date()} <h3/>
            <h3> Requested Reply Email: ${email} <h3/>
            <p>
                <span style="font-weight: 500"> Message: </span>
                ${message}
            </p>
        </div>`,
    });
}

console.info('sending mail ...');
await sendMail({ 
    name: 'Colin Placke - TEST',
    email: 'colin@placke.com',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
})

console.info('MAIL SENT!');