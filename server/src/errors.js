const err404 = (req, res, next) => {
  res.status(404).json({ errors: ["Resource not found"] });
}

module.exports = {
  err404
}
