class BuildCommandImageFormat {
    constructor() {}

    returnCommand(executablePath, imagePath, outputPath) {        
        const MAGICK_SPACE = ' '; 

        const command =
            executablePath +
            MAGICK_SPACE +
            imagePath +
            MAGICK_SPACE +
            outputPath;
        return command;
    }
}

module.exports = BuildCommandImageFormat;