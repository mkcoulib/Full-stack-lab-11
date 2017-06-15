var fs = require ('fs');
var path = require ('path');
fs.readdir(process.argv[2],function(err, fileList){
    if (err){
        console.log(err);
    }else{
       for (i = 0; i,fileList.length; i++){
           if (path.extname(fileList[i])=== '.' + process.argv[3]){
               console.log(fileList[i]);
           }
       }
    }
});