const http = require('http');
const fs = require('fs');
const port = 5000;


const server = http.createServer((req, res) => {
    fs.readFile('text.html', function(error, data){
        if(error){
            console.log('data not found');
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    })

});
server.listen(port, function (error) {
    if (error) {
        console.log('something went wrong');
    } else {
        console.log(`server is running at port ${port}`);
    }

});