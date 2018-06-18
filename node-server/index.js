if (process.env.NODE_ENV !== 'production') require('dotenv').load();
const app = require('./src/server');

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
