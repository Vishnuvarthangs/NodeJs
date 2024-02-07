/*
To delete a file with the File System module,  use the fs.unlink() method.

The fs.unlink() method deletes the specified file:
*/

var fs = require('fs');

fs.unlink('newFileRename.txt', function(err){
    if(err) throw err;
    console.log('The file has been deleted!');
});