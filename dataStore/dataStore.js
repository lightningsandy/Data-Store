const Data = {};
const fs = require("fs");
const path = require('path');
const get = require('get-value');
const set = require('set-value');
const utils = require('./utils');
  
class DataStore {
    
    constructor(fileName, path){
        this.fileName = fileName;
        this.path = utils.assignLocation(fileName, path);
        this.data = {};
    }

    //BASIC CRD FUNCTIONS

    create (key, value, timetolive=-1) {

        //validity check
        if(typeof key !== 'string'){
            console.log(` ${key} key should be a string`);
            return;
        }
        if(!utils.checkValidKey(key)){
            return;
        }
        if(!utils.checkValidValueSize(value)){
            return;
        }
        if(utils.checkKeyExist(this.data, key)){
            console.log(`${key} key already exist`);
            return;
        }
        if(!utils.checkFileSize(this.data)){
            return;
        }
        
        //setting function to set value
        set(this.data, key, value);
        this.writeFile();
        
        //setting timer
        if(timetolive != -1){
            const timeInMS = timetolive*1000;
            setTimeout(() => {
                delete this.data[key];
                this.writeFile();
                return this;
              }, timeInMS);
        }
        return this;
    }

     //reading the value method
    read (key, fallback) {
        if (typeof key === 'undefined') return this.data;
        if( typeof key !== 'string') return console.log(` ${key} key should be a string`);
        if (!utils.checkKeyExist(this.data, key)){
            return console.log(` ${key} key does not exist`);
       } 
        var value = get(this.data, key);
        value = JSON.stringify(value);
        if (typeof value === 'undefined') {
          return fallback;
        }
        return value;
      }

      
      //deleting key-value pair method
      del (key = '') {   
        if( typeof key !== 'string') return console.log(` ${key} key should be a string`);
        if (!key) return console.log("key is empty");
        if (!utils.checkKeyExist(this.data, key)){
            return console.log(` ${key} key does not exist`);
        } 
        delete this.data[key];
        this.writeFile();
        return this;
      }



      //HELPER FUNCTIONS


      writeFile() {
        const pathfile = path.dirname(this.path);
        utils.mkdir(pathfile);
        fs.writeFileSync(this.path, JSON.stringify(this.data, null, 2));
      } 

     //setter function
      set data(data) {
        this[Data] = data;
        this.writeFile();
      }
      
      //getter function
      get data() {
        let data = this[Data];
        if (!this.saved) {
          data = { ...this.defaults, ...data };
        }
        this[Data] = data;
        return data;
      }
    }
    

      
      module.exports = DataStore;

      