// server.js
import express from "express";
import { createRequestHandler } from "@remix-run/express";
import { createRequestHandler as createRemixHandler } from "@remix-run/express";
import { broadcastDevReady } from "@remix-run/node";
import { installGlobals } from "@remix-run/node";
import path from "path";

installGlobals();

const app = express();

app.use(express.static("public"));

// 👇 Custom handlers for Chrome DevTools and favicon.ico
app.get("/.well-known/appspecific/com.chrome.devtools.json", (req, res) => {
    return res.status(204).end();
});

app.get("/favicon.ico", (req, res) => {
    return res.status(204).end();
});

// Let Remix handle everything else
app.all(
    "*",
    createRemixHandler({
        build: await import("./build/server/index.js"),
        mode: process.env.NODE_ENV,
    })
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`✅ Express server running on http://localhost:${port}`);
});