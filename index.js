var path = require('path'), 
	fs=require('fs'),
	replaceExt = require('replace-ext');

function changeExtension(startPath,filter, changeto){

    if (!fs.existsSync(startPath)){
        console.log("wrong path ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter); 
        }
        else if (filename.indexOf(filter)>=0) {
        	console.log('-- found: ',filename);
        	
			var mypath = startPath+'/'+filename;
			var newPath = replaceExt(mypath, changeto);

			fs.rename(mypath, newPath, function(err) {
				if ( err ) console.log('ERROR: ' + err);

				console.log('-- change: ',newPath);
			});

            
        };
    };
};




