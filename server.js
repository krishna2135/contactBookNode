import express from 'express';
import connectDB from './config/db.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// import cors from 'cors';
var cors = require('cors')
connectDB();

import contactRoutes from './router/contact.js';
import authRoutes from './router/auth.js';
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/contact',cors(), contactRoutes);
app.use('/auth', authRoutes);

app.get("/data", async (req, res) => {
    // const url = "http://45.79.111.106/interview.json"
    // const resData = await fetch(url);
    // const json = await resData.json();
    // console.log(json)
    res.send({
        data: "krishna singh is good man"
    })


})
const PORT = 5000;
app.listen(PORT, console.log(`Server is running on ${PORT}`));
