const express = require("express");
const { omit } = require("lodash");

const repositoriesDb = require("./db/repositories.db");
const createRequestContext = require("./middlewares/create-request-context");
const ensureRepositoryExists = require("./middlewares/ensure-repository-exists");

const app = express();

app.use(express.json());
app.use(createRequestContext);

app.get("/repositories", (request, response) => {
  const repositories = repositoriesDb.list();
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = repositoriesDb.create({ title, url, techs });

  return response.status(201).json(repository);
});

app.put("/repositories/:id", ensureRepositoryExists, (request, response) => {
  const { id } = request.params;
  const updatePatch = omit(request.body, "likes");
  const repository = repositoriesDb.update(id, updatePatch);

  return response.json(repository);
});

app.delete("/repositories/:id", ensureRepositoryExists, (request, response) => {
  const { id } = request.params;
  repositoriesDb.remove(id);
  return response.status(204).send();
});

app.post(
  "/repositories/:id/like",
  ensureRepositoryExists,
  (request, response) => {
    const {
      context,
      params: { id },
    } = request;

    const repository = context.get("repository");
    repository.likes += 1;

    const updated = repositoriesDb.update(id, repository);

    return response.json(updated);
  }
);

module.exports = app;
