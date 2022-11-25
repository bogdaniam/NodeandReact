const path = require('path');
const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(process.cwd()+"/client/build/"));

app.use(require('./routes/routes'));


const port = 5000;


app.listen(port, () => console.log(`Express: Server running...`));