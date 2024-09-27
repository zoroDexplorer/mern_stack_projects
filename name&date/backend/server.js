const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/sample')
.then(() => {
    console.log("connected to database")
}).catch((err) => {
    console.log(err)
})

app.use('/api/users',userRouter)

app.listen(3000, () => {
    console.log("runnning in localhost:3000")
})