import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
    var password = req.body.password;
    if (password != "ILoveCoding") {
        res.redirect("/");
    } else {
        next();
    }
});

app.post("/check", (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
