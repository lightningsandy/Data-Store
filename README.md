# Data-Store
A file based key-value data store that supports basic CRD operations

## instruction:
1) clone the repository 
2) run npm install in cmd
3) import the library in your project
4) initiate the class and start using the available methods

```
const DataStore = require('./DataStore.js');

let file1 = new DataStore("santhosh", "."); // ==> object instatiation. syntax: Datastore(String filename, String path)

file1.create("details", {  //=> create method. syntax : create(String key, JSON value, INT timetolive)
    12 : 2,  
    "age": 21, 
    "language": ["JavaScript", "PHP", "Python"]  
  }, 2);

  file1.create("details1", {  
    "name": "lol",  
    "age": 21, 
    "language": ["JavaScript", "PHP", "Python"]  
  });

  file1.create("details2", {  
    "neme": "lol",  
    "age": 21, 
    "language": ["JavaScript", "PHP", "Python"]  
  }, 10);

  file1.create("details2", {  
    "neme": "lol",  
    "age": 21, 
    "language": ["JavaScript", "PHP", "Python"]  
  });


  file1.del("details3"); // => delete method. syntax : del(key)
  file1.del("details20"); 

  console.log(file1.read("details10")); // = >read method. syntax: read(key)
```
