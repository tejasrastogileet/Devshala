const mongoose = require('mongoose');
require('dotenv').config();

exports.connectDB = () => {
    const mongoUri = process.env.DATABASE_URL;
    
    if (!mongoUri) {
        console.error('ERROR: DATABASE_URL environment variable is not defined');
        process.exit(1);
    }

    console.log('[MongoDB] Connecting to:', mongoUri.replace(/\/\/[^:]*:[^@]*@/, '//***:***@'));
    
    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Database connected successfully');
        })
        .catch(error => {
            console.log(`Error while connecting server with Database`);
            console.log(error);
            process.exit(1);
        })
};

