const jimp = require('jimp');

jimp.read('example_1.jpg')
    .then(image => {
        image
            .resize(250, 250)
            .write('small_image.jpg')
    })
    .catch(error => console.error(error));