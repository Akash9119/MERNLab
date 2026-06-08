const user = require('../model/user.model')

const registerUser = async (req, res) => {
    const {user_name, email, password} = req.body
    const newUser = {
        user_name,
        email,
        password
    }
    try{
        const userData = await user.create(newUser)
        res.status(201).json({
            message: 'User resgistered successfully',
            data: userData
        })
    }
    catch(err) {
        console.log("Error in registering user", err)
        res.status(500).json({
            message: 'Error in registering user'
        })
    }
}


module.exports = {
    registerUser
}