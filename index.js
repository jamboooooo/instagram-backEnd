const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const upload = require('express-fileupload');
const path = require('path')
const {
    PORT,
    MongoLink
} = require('./config');

const app = express();

mongoose.connect(MongoLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Database connected...')
});

app.use(upload());
app.use(express.static(path.resolve(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/index'));

app.listen(PORT, () => {
    console.log('Server initialised...')
})