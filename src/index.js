const express = require("express");

const createRequestContext = require("./middlewares/create-request-context");
const { repositoryBasePath, repositoryRouter } = require("./routes/repository");

const app = express();

app.use(express.json());
app.use(createRequestContext);
app.use(repositoryBasePath, repositoryRouter);

module.exports = app;
