const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, "Name is required to create a account"]
    },
    email: {
        type: String,
        required: [true, "Email is required to create a account"],
        unique: [true, "Email already exists"],
        lowercase: true,
        trim: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required to create a account"],
        minlength: [6, "Password must be atleast 6 charcters"],
        select: false
    }
}, {
    timestamps: true
}
)

userSchema.pre("save", async function() {
    (!this.isModified('password'))
        return

    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    return
})

userSchema.method.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const userModel = new mongoose.model('user', userSchema)

module.exports = userModel