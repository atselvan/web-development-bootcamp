import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

function authMiddleware(req, res, next) {
  console.log("Authenticated successfully")
  next();
}

app.use(morgan("combined"));
app.use(authMiddleware);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({extended: true}))

app.post("/submit", (req, res) => {
  console.log(req.body)
  res.send("Success")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
