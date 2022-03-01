module.exports = (req, res, next) => {
  req.context = new Map();
  next();
};
