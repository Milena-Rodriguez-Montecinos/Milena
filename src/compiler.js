const { exec } = require('child_process')
const { stdout, stderr } = require('process')
const BuildCommandImageFormat = require('./buildCommandImageFormat.js');

class Compiler{
    constructor() {}

    execute(command) {
        exec(command, (err, stdout, stderr) => {
            if(err) {
                console.info(err);
                return;
            }
            console.info('stdout: ' + stdout);
            console.info('stderr: ' + stderr);
        });    
    }
}

module.exports = Compiler;


const compiler = new Compiler();
//compiler.execute('C:/Users/Usuario/Desktop/ffmpeg/ffmpeg.exe -i C:/Users/Usuario/Desktop/ffmpeg/No_te_olvides.mp4 -vf fps=fps=1 C:/Users/Usuario/Desktop/ffmpeg/%d.png');
/*const command = new BuildCommandImageFormat();
const executablePath = 'E:/workspace/video-to-frames/src/thirdparty/magick/magick.exe';
const imagePath = "E:/workspace/video-to-frames/src/imagen.jpg";
const outputPath = "E:/workspace/video-to-frames/src/1.png";*/
compiler.execute("E:/workspace/video-to-frames/src/thirdparty/magick/magick.exe E:/workspace/video-to-frames/src/imagen.jpg E:/workspace/video-to-frames/src/uno.png");