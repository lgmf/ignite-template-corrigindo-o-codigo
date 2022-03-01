const express = require("express");

const createRequestContext = require("./middlewares/create-request-context");
const ensureRepositoryExists = require("./middlewares/ensure-repository-exists");

const createRepository = require("./usecases/create-repository");
const likeRepository = require("./usecases/like-repository");
const listRepository = require("./usecases/list-repository");
const removeRepository = require("./usecases/remove-repository");
const updateRepository = require("./usecases/update-repository");

const app = express();

app.use(express.json());
app.use(createRequestContext);

app.get("/repositories", (request, response) => {
  const repositories = listRepository.execute();
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  const repository = createRepository.execute({ title, url, techs });
  return response.status(201).json(repository);
});

app.put("/repositories/:id", ensureRepositoryExists, (request, response) => {
  const { id } = request.params;
  const repository = updateRepository.execute(id, request.body);
  return response.json(repository);
});

app.delete("/repositories/:id", ensureRepositoryExists, (request, response) => {
  const { id } = request.params;
  removeRepository.execute(id);
  return response.status(204).send();
});

app.post(
  "/repositories/:id/like",
  ensureRepositoryExists,
  (request, response) => {
    const { id } = request.params;
    const repository = likeRepository.execute(id);
    return response.json(repository);
  }
);

module.exports = app;
