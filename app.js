const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const dateTime = new Date();
  const finalResult = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
    100
  );
  response.send(
    `${finalResult.getDate()}/${
      finalResult.getMonth() + 1
    }/${finalResult.getFullYear()}`
  );
});
module.exports = app;
