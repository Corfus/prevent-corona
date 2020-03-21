#!/usr/bin/env node
'use strict';

const express = require('express');
const bodyParser  = require('body-parser');
const http = require('http');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const server = http.createServer(app);


app.use(express.static(path.join(__filename, '../client')));

app.get('*', (_, res) => {
  res.sendFile(path.join(__filename, '../client','/index.html'));
});

server.listen(8000, () => {
  console.log('server runs on port 8000');
});
