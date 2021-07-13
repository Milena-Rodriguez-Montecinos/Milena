const Jimp = require('jimp');
const jimp = require('jimp');

//Converter image png to jpg

    (async function(){

        const image = await jimp.read('Images/AtomHeartMother.png');
        image.resize(300, 300);
        image.resize(Jimp.AUTO, 300);
        image.write('ImagesConverter/AtomHeartMother.jpg');
    

    })();

    Jimp.read('Images/AtomHeartMother.png', function (err, image) {
    if (err) {
        console.log(err)
    } else {
        image.write('ImagesConverter/new-AtomHeartMother.jpg')
    }
    })

//Converter image jpg to png

    Jimp.read('Images/TheWall.jpg', function (err, image) {
        
        if(err){
            console.log(err)
        } else{
            image.write('ImagesConverter/TheWall.png')
        }
    })

//Converter Image jpg to jpeg
    Jimp.read('Images/TheWall.jpg', function(err, image){
        if(err){
            console.log(err)
        } else{
            image.write('ImagesConverter/TheWall.jpeg')
        }
    })
 
//Converter Image png to jpeg
     Jimp.read('Images/AtomHeartMother.png', function(err, image){
        if(err){
            console.log(err)
        } else{
            image.write('ImagesConverter/AtomHeartMother.jpeg')
        }
    })

//Converter Image png to bmp
Jimp.read('Images/AtomHeartMother.png', function(err, image){
    if(err){
        console.log(err)
    } else{
        image.write('ImagesConverter/AtomHeartMother.bmp')
    }
})

//Converter Image bmp to png
Jimp.read('Images/TheDarksideOfTheMoon.bmp', function(err, image){
    if(err){
        console.log(err)
    } else{
        image.write('ImagesConverter/TheDarkSideOfTheMoon.png')
    }
})

//Converter Image bmp to jpg
Jimp.read('Images/TheDarksideOfTheMoon.bmp', function(err, image){
    if(err){
        console.log(err)
    } else{
        image.write('ImagesConverter/TheDarkSideOfTheMoon.jpg')
    }
})

//Converter Image jpg to tiff
Jimp.read('Images/TheWall.jpg', function(err, image){
    if(err){
        console.log(err)
    } else{
        image.write('ImagesConverter/TheWall.tiff')
    }
})

//Converter Image tiff to png
Jimp.read('Images/Animals.tiff', function(err, image){
    if(err){
        console.log(err)
    } else{
        image.write('ImagesConverter/Animals.png')
    }
})

//Converter Image tiff to gif
Jimp.read('Images/Animals.tiff', function(err, image){
    if(err){
        console.log(err)
    } else{
        image.write('ImagesConverter/Animals.gif')
    }
})

//Converter Image gif to png***********
Jimp.read('Images/TheDivisionBell.gif', function(err, image){
    if(err){
        console.log(err)
    } else{
        image.write('ImagesConverter/TheDivisionBell.png')
    }
})



/*
class Converter{
     Jimp = require('jimp');
    // open a file called "lenna.png"
    converter (){
        Jimp.read('Images/AtomHeartMother.png', (err, AtomHeartMother) => {
            if (err) throw err;
            AtomHeartMother
                .resize(256, 256) // resize
                .quality(60) // set JPEG quality
                .greyscale() // set greyscale
                .write('ImagesConverter/AtomHeartMother-small-bw.jpg'); // save
    });
}*/
