const imageKit = require('@imagekit/nodejs')
require('dotenv').config()

const client = new imageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function ImageKitStorage(buffer) {
    const response = await client.files.upload({
        file: buffer.toString('base64'),
        fileName: 'image.jpg'
    })

    return response
}

module.exports = ImageKitStorage