// const ImageKit = require('@imagekit/nodejs')
// require('dotenv').config()

// const client = new ImageKit({
//     privateKey: process.env.IMAGEKIT_KEY
// })

// const uploadImageToImageKit = async (fileBuffer, fileName) => {
//     const response = await client.files.upload({
//         file: fileBuffer.toString('base64'),
//         fileName: fileName
//     })
//     return response
// }

// module.exports = uploadImageToImageKit

const ImageKit = require('@imagekit/nodejs')
require('dotenv').config()

const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_KEY
})

const uploadImageToImageKit = async (fileBuffer, fileName) => {
    const response = await client.files.upload({
        file: fileBuffer.toString('base64'),
        fileName: fileName
    })
    return response
}

module.exports = uploadImageToImageKit