/* 

Version: 1.0.1
 _   _           _      ____                           
| \ | | ___   __| | ___/ ___|  ___ _ ____   _____ _ __ 
|  \| |/ _ \ / _` |/ _ \___ \ / _ \ '__\ \ / / _ \ '__|
| |\  | (_) | (_| |  __/___) |  __/ |   \ V /  __/ |   
|_| \_|\___/ \__,_|\___|____/ \___|_|    \_/ \___|_|   
                                                       
  __      _                _         _ 
 / _|_ __(_) ___ _ __   __| |___    / |
| |_| '__| |/ _ \ '_ \ / _` / __|   | |
|  _| |  | |  __/ | | | (_| \__ \   | |
|_| |_|  |_|\___|_| |_|\__,_|___/___|_|
                               |_____| 

*/

var server = require('http').createServer();
var io = require('socket.io')(server);
var receivedMsg = "";
console.log('Server started. Listening on port: 3233');
io.sockets.on('connection', function (socket) {
    console.log('socket connected');

    socket.on('disconnect', function () {
        console.log('socket disconnected');
    });

  
	 socket.on('textemit', function (textemit) {
    	//console.log('New client connected with message');
        console.log('Text received: ' + textemit);
        
		//socket.emit('text', 'Thx, message received. : ' + clientWelcome);
        // emmit cords back
		socket.emit('text', textemit);

    });


});

server.listen(3000);