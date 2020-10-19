const express = require("express");
const app = express();

const router = require("./routes/router");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
