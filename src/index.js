const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server run in => ${port}`);
});

module.export = app;
