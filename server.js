const express = require('express');
const path = require('path');
const { features } = require('process');

const app = express();
const PORT = process.env.PORT || 3000;

// set ejs as the view engine

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

// server static files from public dic

app.use(express.static(path.join(__dirname,'public')));

// routs

app.get('/', (req,res)=>{
    res.render('index',{
        title: 'welcome to our platform',
        tagline: 'build amazing things with us',
        features: [
            'fast & reliable',
            'beautiful design',
            'secure & private',
            'responsive layout'
        ]
    });
});

// start server

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});