const err404 = (req, res, next) => {
  res.status(404).json({ errors: ["Not Found"] });
}

const err401 = (req, res) => {
  res.status(401).json({ errors: ["Unauthorized"] });
}

const err403 = (req, res) => {
  res.status(403).json({ error: ["Forbidden"] });
}

module.exports = {
  err404,
  err401,
  err403
}
