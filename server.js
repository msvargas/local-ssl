// Setting up local https support
var fs = require('fs');
var https = require('https');
const PORT = 3000;

var options = {
    key: fs.readFileSync('./vcs.key'),
    cert: fs.readFileSync('./vcs.crt'),
    passphrase: '901089033',
    requestCert: false,
    rejectUnauthorized: false
};

function handleRequest( request, response ){
    response.end( 'It Works!' );
}


// Start server
var server = https.createServer(options,handleRequest)

server.listen( PORT, "vcs.local", function(){
    console.log( "Server listening on %s", `https://vcs.local.com:${PORT}` );
});
