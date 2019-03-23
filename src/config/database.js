const mongoose = require('mongoose')
mongoose.Promise = global.Promise //api de promise do mongoose usará api de promise do node


const URL = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/todo'
module.exports = mongoose.connect(URL)
