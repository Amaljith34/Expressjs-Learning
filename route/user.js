const express=require('express')
const router=express.Router()


router.get('/',(req,res)=>{
    res.send('this is user')
})
router.post('/',(req,res)=>{
    res.send('this is user')
})
router.put('/',(req,res)=>{
    res.send('this is user')
})
router.delete('/',(req,res)=>{
    res.send('this is user')
})

router.get('/details',(req,res)=>{
    res.send('this is user details')
})
module.exports=router