const {
  findRepositoryByIdUseCase,
} = require("../../use-cases/find-repository-by-id");

module.exports = (req, res, next) => {
  const {
    context,
    params: { id },
  } = req;

  try {
    const repository = findRepositoryByIdUseCase.execute(id);
    context.set("repository", repository);
    next();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
