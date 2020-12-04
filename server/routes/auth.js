const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const bcryptSalt = 10



router.post('/signup', async (req,res) => {
    const {username,email,password} = req.body

    if(!username || !email || !password ){
        res.status(400).json({message:"Please provide credentials"})
        return
    }

    try {
        const userFound = await User.findOne({username,email})
        if(userFound){
            res.status(400).json({message: 'This username, email already exist'})
            return
        }
        //encrypt the password
        const salt = bcrypt.genSaltSync(bcryptSalt)
        const hashPass = bcrypt.hashSync(password,salt)

        const user = await User.create({username: username,email:email,password:hashPass})

        req.session.user = user
        res.status(200).json(user)

        return 
    }
    catch(err){
        if (error instanceof mongoose.Error.ValidationError) {
            res.status(500).json({ message: "Something went wrong"})
        }else if (error.code === 11000) {
            res.status(500).json({ message: "Something went wrong"}) 
        }
         else {
            next(error);
        }
    }


    


} )


router.post('/login' , async (req,res) => {
    const {username,email,password} = req.body

    console.log(req.body);
    if(!username || !email || !password){
        res.status(400).json({message:'Please provide creditials'})
        return
    }
    try {
        const user = await User.findOne({username,email})
        if(user){
            const passwordCorrect = await bcrypt.compare(password,user.password)
            if(passwordCorrect){
                req.session.user = user
                res.status(200).json(user)
            }
        } else {
            res.status(400).json({message:'Please provide the right creditials'})
        }
    } catch(err){
        console.log(err)
        res.status(500).json({message:'Something went wrong'})
    }

})

router.put('/edit',(req,res)=>{
    const {username,email} = req.body;
    User.findByIdAndUpdate(req.params.id,{username,email})
    .then(user=>{
        res.json({message:`${user.username} was updated succesfully`})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/logout',(req,res)=>{
    req.session.destroy()
    res.status(200).json({message:'User is logged out'})
})

router.get('/loggedin',(req,res)=> {
    if(req.session.user){
        res.status(200).json(req.session
            .user)
    } else {
        res.status(400).json({message:'No user in session'})
    }
})





module.exports = router;