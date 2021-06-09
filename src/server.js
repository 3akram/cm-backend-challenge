const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');

const app = express();

/**
 * Middleware
 */
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => res.send(database));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`- Server started on port ${PORT}`);
});
