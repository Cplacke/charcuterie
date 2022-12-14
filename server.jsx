/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { h, renderSSR, render, hydrate } from "https://deno.land/x/nano_jsx@v0.0.33/mod.ts";
import { assetRouteHandler } from "./helpers/asset-resolution.ts";
// import { sendMail } from "./helpers/mailer.ts";

import { Page } from './page.jsx'
import { YAMLtoJSON } from "https://deno.land/x/y2j/mod.ts";

console.info('loading deployment page content ...');
const content = JSON.parse(
    YAMLtoJSON(
      await Deno.readTextFile('./content.yaml')
    )
);
console.info('content loaded.');

function App({ path }) {
  return (
    <html>
      <head>
        <title> Charcuteire by Dylan </title>
        <script src="./client/client.js"></script> 
        <link rel="stylesheet" href="./assets/styles/tailwind.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Akaya+Kanadaka" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link rel="icon" type="image/png" sizes="32x32" href="./assets/img/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="./assets/img/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./assets/img/favicon-16x16.png" />
      </head>
      <body>
        <Page path={path} content={content}/>
      </body>
    </html>
  );
}

const requestHandler = async (req) => {
  const { pathname } = new URL(req.url);
  // console.info(pathname);

  // handle custom asset resolution
  if (pathname.includes("/assets/")) {
    return await assetRouteHandler(pathname);
  }
  if (pathname.includes("/client/")) {
    return await assetRouteHandler(pathname);
  }

  // if (pathname === '/email') {
  //   const emailRequestBody = await req.json();
  //   let res = await sendMail(emailRequestBody);
  //   return new Response(res, {
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   });
  // }

  const html = renderSSR(<App path={pathname}/>);
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
}

serve(requestHandler);
