/*
Rename Files
To rename a file with the File System module,  use the fs.rename() method.

The fs.rename() method renames the specified file:
*/

var fs = require ('fs');
fs.rename('FileWrite.txt', 'newFileRename.txt', function(err){
    if(err) throw err;
    console.log('The file has been renamed!');
});