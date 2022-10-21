const fs = require('fs');

function generateHtml(card) {
  const template = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        />
        <title>Team Generator</title>
    </head>
    <body>
        <nav class="nav p-3 mb-2 bg-primary text-white  justify-content-center">
            <h1>My Team</h1>
        </nav>
        <div class="d-flex justify-content-center m-5 flex-wrap">
            ${card}
        </div>
    </body>
</html>
`;
  fs.writeFile('./public/index.html', template, (err) => {
    err ? console.log(err) : console.log('HTML created successfully!');
  });
}

module.exports = generateHtml;
