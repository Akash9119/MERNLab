const ImageKit = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    privateKey : process.env.ImageKIT_PRIVATE_KEY,
})

const uploadFile = async (buffer) => {
    try{
        const response  = await imagekit.files.upload({
            file: buffer,
            fileName: "music.mp3"
        })
    return response
    }
    catch (err) {
        console.log(err)
        throw new Error("Failed to upload file")
    }
}

module.exports = uploadFile