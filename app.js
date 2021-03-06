const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express(); // результат функции express

app.use('/api/auth', require('./routes/auth_routes'))

const PORT = config.get('port') || 5000;

async function start(){
    try{
        await mongoose.connect(config.get('mongoUrl'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT,()=> console.log(`App has been started on port ${PORT}...`));
    }catch (e){
        console.log('Server ERROR',e.message);
        process.exit(1);
    }
}
start();