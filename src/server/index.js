var express = require("express");
var React = require("react");
var { renderToString } = require("react-dom/server");
var App = require("../client/app");

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>CronJ Blog</title>
        <script src="/bundle.js" defer></script>
      </head>
      <body>
        <div id="root">{renderToString(<App />)}</div>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is listening");
});