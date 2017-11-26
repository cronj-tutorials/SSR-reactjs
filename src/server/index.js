var express =  require("express");


const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.send(`
      <!DOCTYPE html>
      <head>
        <title>Cronj Tutorials</title>
      </head>
      <body>
        <div>Here I am from serve</div>
      </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is listening");
});