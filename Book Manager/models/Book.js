const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name can not be more than 20 characters']
    },
    author:{
        type:String,
        required:[true,'must provide author'],
        trim:true,
        maxlength:[20,'name can not be more than 20 characters']
    },
    genre:{
        type:String,
        required:[true,'must provide genre'],
        trim:true,
        maxlength:[20,'name can not be more than 20 characters']
    },
    publicationYear:{
        type:Number,
        required:[true,'must provide year of publish'],
        trim:true,
    },
    ISBN:{
        type:Number,
        required:[true,'must provide ISBN'],
        trim:true,
    }
})

module.exports = mongoose.model('Books',BookSchema);