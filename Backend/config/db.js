const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.DB_URL;
    if (!uri) {
      throw new Error('MongoDB URI is not defined');
    }

    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;





// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (err) {
//     console.error(`Error: ${err.message}`);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;



// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/nodestakingapp', {
//     useNewUrlParser: true,
//     useUnifedTopology: true,
//     useCreateIndex: true
// }).then(() =>{
//     console.log('Database connected sucessfully');
// }).catch((error) =>{
//     console.log('Database connection error', error);
// });