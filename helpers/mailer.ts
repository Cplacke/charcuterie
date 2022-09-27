// import { SmtpClient } from "https://deno.land/x/denomailer/mod.ts";
import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";

const connection = {
    connection: {
        hostname: 'smtp.gmail.com',
        port: 465,
        tls: true,
        auth: {
            user: 'placketaffy@gmail.com',
            pass: 'wdussmuxbahqueih', // "deno-charcuterie" app credentials
        },
    },
    debug: {
        log: true,
    }
};
                    
const client = new SmtpClient(connection);
console.info('mailer client connected');

export const sendMail = async ({
    name,
    email,
    message
}) => {
    try { 
        return client.send({
            from: 'placketaffy@gmail.com',
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
    } catch (err) {
        console.error(err);
    }
}

console.info('sending mail ...');
// try { 
//     await sendMail({ 
//         name: 'Colin Placke - TEST',
//         email: 'colin@placke.com',
//         message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//     })
// } catch (err) {
//     console.error(err);
// }

console.info('MAIL SENT!');