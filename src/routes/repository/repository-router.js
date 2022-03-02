const { Router } = require("express");

const ensureRepositoryExists = require("./ensure-repository-exists-middleware");

const {
  createRepositoryController,
} = require("../../use-cases/create-repository");

const { likeRepositoryController } = require("../../use-cases/like-repository");

const { listRepositoryController } = require("../../use-cases/list-repository");

const {
  removeRepositoryController,
} = require("../../use-cases/remove-repository");

const {
  updateRepositoryController,
} = require("../../use-cases/update-repository");

const basePath = "/repositories";

const router = new Router();

router.get("/", (request, response) => {
  return listRepositoryController.handle(request, response);
});

router.post("/", (request, response) => {
  return createRepositoryController.handle(request, response);
});

router.delete("/:id", ensureRepositoryExists, (request, response) => {
  return removeRepositoryController.handle(request, response);
});

router.put("/:id", ensureRepositoryExists, (request, response) => {
  return updateRepositoryController.handle(request, response);
});

router.post("/:id/like", ensureRepositoryExists, (request, response) => {
  return likeRepositoryController.handle(request, response);
});

module.exports = {
  repositoryBasePath: basePath,
  repositoryRouter: router,
};
