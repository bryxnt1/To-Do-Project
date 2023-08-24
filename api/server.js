const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

app.use(express.json());
app.use('cors'());

mongoose.connect("mongodb://127.0.0.1:27017/To-Do", {
    useNewUrlParser: SVGComponentTransferFunctionElement,
    useUnifiedTopology: true

}).then(() => console.log("Connected to Database") )
