var http = require('http');
var fs = require('fs');
var path = require('path');
var folder = "." // задаем папку//
const isDirectory = fileName => { //задали если деректория то выдает название деректории//
    return fs.lstatSync(fileName).isDirectory()
  }
  var entries = fs.readdirSync(folder) //читаем папку//
  
  var results = []; //сюда сохраняются результаты//

  var File =path.join(folder) //функция от переменной папки//
    fs.writeFile(File, function(err, result){ //функция чтения// 
      if(err) console.log('error', err)
      });
       
      
    for (var i in entries) { //для каждого файла из прочитанной папки//
      
      var fPath = path.join(folder, entries[i]) //переменная для отдельных папок//
      
      if (fs.lstatSync(fPath).isDirectory()){  //читаем fPath в случае если это директории//
      
        var text = fs.readFileSync(path.join(folder, entries[i], "index.json" )) //читаем папку подпапку и файл// 
        var doc = JSON.parse(text) //сохраняем//
        
        htmlString += <a ref="name"> "name" </a> 
        fs.appendFile(File, htmlString, function(err, result){ //добавляем к File часть текста//
          if(err) console.log('error', err)
         
    })}}
// function dirAsHtml(dir){
//     var htmlString = "<html><head><title> LS ROOT DIR </title></head><pre>"
    
//     var results = [];

//     fs.readdirSync(dir).forEach(function(file) {

//         file = dir+'/'+file;
//         var stat = filesystem.statSync(file);

//         if (stat && stat.isDirectory()) {
//             results = results.concat(dirAsHtml(file))
//         } else results.push(file);

//     });

//     return results;

// for () {
//     htmlString += <a ref="name"> "name" </a>
// }


//     htmlString += "</per><hr></body></html>"
//     return htmlString

// }
http.createServer(function (request, response) {
    console.log('request ', request.url);

    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');