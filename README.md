# Data-Store
A file based key-value data store that supports basic CRD operations

## instruction:
1) clone the repository 
2) run npm install in cmd
3) import the library in your project
4) initiate the class and start using the available methods

```

//require the library in your project

 const DataStore = require('./DataStore.js');




/*
   Constructor initialize the DataStore with default storage location at home directory
   syntax: const file = new DataStore(String filename, String path)

   @param filename
                  the name of the file to save the data

    @param path(optional)
                   Location path to save file
*/

const file1 = new DataStore("santhosh", "."); 


/*  
  CREATE
   Method to create a pair in the dataStore
   Syntax: file.create(String key, JSONobject value, Int timeToLive);

    @param key
                  the key of the element

    @param value
                   The value of the element

     @param timeToLIve(optional)
                   Time limit of element in seconds
*/

file.create("details", {    
    "age": 21, 
    "language": ["JavaScript", "PHP", "Python"]  
  }, 2);


/*  
  READ
   Method to read a pair in the dataStore
   Syntax: file.read(String key);

    @param key
                  the key of the element

*/

console.log(file.read("details"));



/*  
  DELETE
   Method to delete a pair in the dataStore
   Syntax: file.del(String key);

    @param key
                  the key of the element

*/

  file.del("details");
 

 
```
