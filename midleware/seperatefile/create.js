function fn(req,res,next){
    console.log('creating token...');

        req.token=true
        next()

    next()
    
    
}
module.exports=fn