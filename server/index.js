const app = require('./src/server');
const { PORT=3000, NODE_ENV='development' } = process.env;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;
