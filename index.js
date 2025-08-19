const exp = require('express');
const app = exp();

const mongoose = require('mongoose');
const cors = require('cors');

// import controller
const {ByProduct} = require('./controller/ByProduct');

//  Middleware
app.use(cors());
app.use(exp.json());

// routs
app.get('/',(req,res) =>{
    res.send('welcome to the server');
});

// product routs
app.post('/ByProduct/:Id/:userId', ByProduct);

// error handling
app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message:'somthing went worng!',
        error: err.message
    });
});

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});