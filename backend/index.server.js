const express = require ('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user');



//connecting mongodb
//mongodb+srv://kawsarbyherself:<password>@cluster0.3k7ja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.3k7ja.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    }
).then(() => {
    console.log('Database connected');
});



app.use(bodyParser());
app.use('/api', userRoutes);




app.listen(process.env.PORT, () => {
    console.log(`Server is runnning on port ${process.env.PORT}`);
});
