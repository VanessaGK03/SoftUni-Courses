function extractFile(path){
    let file = path.split('\\').pop();
    let extentionInx = file.lastIndexOf('.');

    let extention = file.slice(extentionInx + 1);
    let fileName = file.slice(0, extentionInx)

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extention}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');