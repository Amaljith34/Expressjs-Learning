const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('this is product page 1234567890')
})
router.post('/',(req,res)=>{
    res.send('this is product post')
})
router.put('/',(req,res)=>{
    res.send('this is product put')
})
router.delete('/',(req,res)=>{
    res.send('this is product delete')
})
router.get('/details',(req,res)=>{
    res.send('this is details page')
})

module.exports=router