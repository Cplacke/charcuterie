import { SMTPClient } from "https://deno.land/x/denomailer/mod.ts";

const client = new SMTPClient({
    connection: {
        hostname: "smtp.example.com",
        port: 465,
        tls: true,
        auth: {
        username: "example",
        password: "password",
        },
    },
});

export const sendMail = async ({
    name,
    email,
    message
}) => {
    return client.send({
        from: "charcuterie-by-dylan@deno.dev",
        to: "you@example.com",
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
