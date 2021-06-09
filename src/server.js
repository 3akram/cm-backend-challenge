const express    = require('express');
const bodyParser = require('body-parser');

const app = express();

/**
 * Middleware
 */
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => res.send(database));

// Register coffee machines endpoint
app.use('/coffee-machines', require('../routes/coffee-machine-routes'));
app.use('/coffee-pods',     require('../routes/coffee-pod-routes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`- Server started on port ${PORT}`);
});
