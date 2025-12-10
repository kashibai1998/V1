import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router-dom/server";
import routes from "./app/routes";

const app = express();
app.use(express.static("public"));

app.get("*", async (req, res) => {
  try {
    const handler = createStaticHandler(routes);
    const context = await handler.query(
      new Request(`http://localhost:3000${req.url}`, {
        method: req.method,
        headers: req.headers as any,
      })
    );

    const router = createStaticRouter(routes, context);

    const html = ReactDOMServer.renderToString(
      <React.StrictMode>
        <StaticRouterProvider router={router} context={context} />
      </React.StrictMode>
    );

    res.status(context.statusCode || 200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>React Router v7 SSR + Flat Routes</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script type="module" src="/main.js"></script>
        </body>
      </html>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
