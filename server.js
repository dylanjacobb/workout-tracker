const express = require('express');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true, useFindAndModify: false });

app.use(require('./routes/htmlRoutes'));
app.use(require('./routes/apiRoutes'));

app.listen(PORT, () => {
  console.log('App running on http://localhost:' + PORT);
});
