import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const date = new Date();
  var day = date.getDay();

  var dayType = "a weekday";
  var dayAdvice = "it's time to work hard";
  if (day === 0 || day === 6){
    dayType = "the weekend";
    dayAdvice = "it's time to have fun";
  }

  res.render(__dirname + "/views/index.ejs", {
    dayType: dayType,
    dayAdvice: dayAdvice
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
