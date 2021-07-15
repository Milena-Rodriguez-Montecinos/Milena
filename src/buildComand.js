const { exec } = require('child_process');

class BuildCommandImageFormat {
    constructor() {
        console.info('Instance created');
    }

    returnCommand(executablePath, imagePath, outputPath) {
        return executablePath + " " + imagePath + " " + outputPath; 
    }
}

module.export = BuildCommandImageFormat;


const command = new BuildCommandImageFormat();
const executablePath = 'E:/workspace/video-to-frames/src/thirdparty/magick/magick.exe';
const imagePath = "E:/workspace/video-to-frames/src/imagen.jpg";
const outputPath = "E:/workspace/video-to-frames/src";
console.log(command.returnCommand(executablePath, imagePath, outputPath)); 