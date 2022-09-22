/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import { assetRouteHandler } from "./helpers/asset-resolution.ts";

import { Page } from './page.jsx'

function App() {
  return (
    <html>
      <head>
        <title> Charcuteire by Dylan </title>
        <link rel="stylesheet" href="./assets/styles/tailwind.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
      <body>
        <Page />
      </body>
    </html>
  );
}

const requestHandler = async (req) => {
  const { pathname } = new URL(req.url);

  // handle custom asset resolution
  if (pathname.includes("/assets/")) {
    return assetRouteHandler(pathname);
  }

  const html = renderSSR(<App />);
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
}

serve(requestHandler);
