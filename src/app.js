const BuildCmdChangeImageFormat = require('./buildCmdChangeImageFormat');
const Compiler = require('./compiler')

const compiler = new Compiler();

const commandChangeImageFormat = new BuildCmdChangeImageFormat();
const executablePath = 'C:/Users/Usuario/Desktop/ffmpeg/magick.exe';
const imagePath = "C:/Users/Usuario/Desktop/ffmpeg/image.png";
const outputImagePath = "C:/Users/Usuario/Desktop/ffmpeg/imagen.jpg";
compiler.execute(commandChangeImageFormat.returnCommand(executablePath, imagePath, outputImagePath));