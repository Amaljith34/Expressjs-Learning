function fn1(req,res,next){

    if(req.token){
        console.log(' token approved');
        next()
    }
    else{
        console.log('no token');
        
    }
    
    
}
module.exports=fn1