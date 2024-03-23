import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs';

inquirer
  .prompt([
    {
        type: "input",
        name: "url",
        message: "Enter the URL:"
    }
  ])
  .then((answers) => {
    fs.writeFile('url.txt', answers.url, (err) => {
        if (err) throw err;
    })
    var qr_png = qr.image(answers.url, { type: 'png'});
    qr_png.pipe(fs.createWriteStream('qr-code.png'))
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log(`Something else went wrong > ${error}`);
    }
  });
