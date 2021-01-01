const jsonSize = require('json-size');
const fs = require("fs");
 
const MAX_KEY_LENGTH = 32;
const MAX_VALUE_SIZE = 16000; //size in bytes. equal to 16KB
const MAX_FILE_SIZE = 1073741824; //size in bytes. equal to 1 GB


//assign default file location 
exports.assignLocation = (fileName, path) => {
    if(path){
        return `${path}/${fileName}.json`;
    }
    else {
        //default location set to home directory
        return `${os.homedir()}/${fileName}.json`;
    }
}


//checks if key exceeds certain character
exports.checkValidKey = key => {
    const currentkeySize = key.length;
    if(currentkeySize > MAX_KEY_LENGTH) {
        console.log(`key characters should not exceed ${MAX_KEY_LENGTH} length`);
        console.log(`current key characters is ${keySize}`);
        return false;
    }
    return true;
}


//checks if value exceeds certain size
exports.checkValidValueSize = value => {
    const currentValueSize = jsonSize(value);
      if(currentValueSize > MAX_VALUE_SIZE){
        console.log(`value size should not exceed ${MAX_VALUE_SIZE} bytes`);
        console.log(`current value size is ${currentValueSize}`);
        return false;
      }
      return true;
}


//checks if key exist
exports.checkKeyExist = (obj, key) => {
    if(obj.hasOwnProperty(key)){
        return true;
    }
    return false;
}


//checks if file size exceeds certain value
exports.checkFileSize = file => {
    const currentFileSize = jsonSize(file);
    if(currentFileSize > MAX_FILE_SIZE){
        console.log(`file size value exceed ${MAX_FILE_SIZE} bytes`);
        console.log(`current file size is ${currentFileSize}`);
        return false;
    }
    return true;
}


//create file
exports.mkdir = dirname => {
    if( typeof dirname !== 'string') return console.log('dirname should be a string');
    if (fs.statSync(dirname)) return;
  
    try {
      fs.mkdirSync(dirname);
    } catch (err) {
      console.log(err);
    }
  
    return;
  };    


  