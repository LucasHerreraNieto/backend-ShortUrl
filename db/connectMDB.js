const mongoose = require('mongoose');

const access = process.env.DB_URI || '0.0.0.0'

const connectDB = async () => {
try{
    await mongoose.connect(access, {
        dbName: 'shortenerUrls',
        useNewUrlParser: true
    }
    );
    console.log("Database connected :D");
    
}catch(error){
    console.log(error);
}
};

module.exports = connectDB;