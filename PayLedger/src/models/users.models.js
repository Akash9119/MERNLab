const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, "User name is required to create an account"]
    },
    email: {
        type: String,
        required: [true, "Email is required to create an account"],
        trim: true,
        tolowercase: true,
        unique: [true, "Email is already in use"],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email is not valid"]
    },
    password: {
        type: String,
        required: [true, "Password is required to creat an account"],
        minlength: [6, "Password must be atleast 6 charcters"],
        select: false
    }
}, {
    timestamps: true
})

userSchema.pre('save', async function hashPassword() {
    if(!this.isModified('password')){
        return
    }
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    return
})

userSchema.methods.comparePassword = async function matchPassword (password) {
    return await bcrypt.compare(password, this.password)
}

const users = mongoose.model('users', userSchema)

module.exports = users