const path = require('path')
const formidable = require('formidable');
const {imgparser}= require('./imgparser.js');
exports.upload = (req,res)=>{
    let form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname,'upload');
    form.parse(req,(err,fields,files)=>{
        res.json({fields: fields, files: files})
        // imgparser(files.qq.path,(err,data)=>{
        //     if(!err){
        //         res.json(data);
        //     }
        // })
    })
}