'use strict';

const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      helmet = require('helmet'),
      dotenv = require('dotenv').config(),
      app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error',()=>{
    console.log('An error occurred while connecting to mongodb')
});

/*  Express configuration */
app.set('port',process.env.PORT || 3000);
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));