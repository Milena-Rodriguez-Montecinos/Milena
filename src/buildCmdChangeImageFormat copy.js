const path = require('path');

class BuildCmdChangeImageFormat {
    constructor() {}

    returnCommand(executablePath, imagePath, outputPath, outputFormat) {        
        const MAGICK_SPACE = ' '; 

        const command =
            executablePath +
            MAGICK_SPACE +
            imagePath +
            MAGICK_SPACE +
            outputPath +
            //"/" +
            path.parse(imagePath).name +  
            outputFormat;
        return command;
    }
}

module.exports = BuildCmdChangeImageFormat;
const executablePath = 'C:/Users/Usuario/Desktop/ffmpeg/magick.exe';
const imagePath = "C:/Users/Usuario/Desktop/ffmpeg/image.png";
const outputImagePath = "C:/Users/Usuario/Desktop/ffmpeg/";
const com = new BuildCmdChangeImageFormat();
console.log(com.returnCommand(executablePath, imagePath, outputImagePath, ".mpg"));

