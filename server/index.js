const express = require('express');
const cors = require('cors');
const router = require('./router');
const db = require('./model');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = 3001;

(async function () {
  try {
    await db;
    app.listen(PORT, () => {
      console.log(`server running at http://localhost:${PORT} 🚀`);
    });
  } catch (e) {
    console.log('index: ', e);
  }
})();