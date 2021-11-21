const mongoose = require('mongoose');
//require('dotenv').config({ path: __dirname + '/.env' });

const db = 'mongodb://127.0.0.1:27017/sleep-tracker';
console.log("db",db);

  try {
     mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('Database Connected.');
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  };
