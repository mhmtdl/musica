const express = require('express');
const router  = express.Router();
const User = require('../models/User')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/addplaylist',(req,res)=> {
 
  console.log(req.body)
  User.findByIdAndUpdate(req.body.id,
   
    {$push:{playlist:req.body.album}}
   )
  
  .then(response=>{
    res.status(200).json(response)
    
  })
  .catch(err=>{
    console.log(err)
  })

})




router.post('/removeplaylist',(req,res)=> {
 
  console.log(req.body)
  User.findByIdAndUpdate(req.body.id,
   
    {$pull:{playlist:{id:req.body.albumId}}}
   )
  
  .then(response=>{
    res.status(200).json(response)
    
  })
  .catch(err=>{
    console.log(err)
  })

})

router.get('/user/:id',(req,res)=> {
  
  User.findById({_id:req.params.id})
  .then(response=>{
    console.log(response)
    res.status(200).json(response)

  })
  .catch(err=> {
    console.log(err)
  })
})

module.exports = router;
