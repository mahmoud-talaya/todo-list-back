const mongoose = require ('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/todo', {useNewUrlParser: true, useUnifiedTopology: true })
        .catch(e => {console.log('connection error', e.message)})
db = mongoose.connection


module.exports = db
