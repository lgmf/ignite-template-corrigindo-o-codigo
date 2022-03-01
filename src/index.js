const express = require("express");
const { omit } = require("lodash");

const repositoriesRepository = require("./repositories/repositories");
const createRequestContext = require("./middlewares/create-request-context");
const ensureRepositoryExists = require("./middlewares/ensure-repository-exists");

const app = express();

app.use(express.json());
app.use(createRequestContext);

app.get("/repositories", (request, response) => {
  const repositories = repositoriesRepository.list();
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = repositoriesRepository.create({ title, url, techs });

  return response.status(201).json(repository);
});

app.put("/repositories/:id", ensureRepositoryExists, (request, response) => {
  const { id } = request.params;
  const updatePatch = omit(request.body, "likes");
  const repository = repositoriesRepository.update(id, updatePatch);

  return response.json(repository);
});

app.delete("/repositories/:id", ensureRepositoryExists, (request, response) => {
  const { id } = request.params;
  repositoriesRepository.remove(id);
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

    const updated = repositoriesRepository.update(id, repository);

    return response.json(updated);
  }
);

module.exports = app;
