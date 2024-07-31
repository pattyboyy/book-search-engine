const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;