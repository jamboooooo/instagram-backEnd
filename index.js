const express = require('express')
const mongoose = require('mongoose')

const app = express()

const start = async() => {
    try {
        await mongoose.connect('', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('success connnect mongo');
    } catch (e) {
        console.log(e.message);
    }
}
start()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes/index'))

app.listen(3000, () => {
    console.log('success connect server');
})