var express = require('express');
var app = express();
var server = require('http').createServer(app);
var webRTC = require('webrtc.io').listen(server);

server.listen(8000);

app.use( express.static(__dirname + '/www') );




webRTC.rtc.on('connect', function(rtc) {
  console.log('Client '+ rtc.sockets[0].id +' connected');
});

webRTC.rtc.on('join_room', function(rtc) {
  console.log('Client joined room '+ rtc.room );
});

webRTC.rtc.on('send answer', function(rtc) {
  console.log('Answer sent');
});

webRTC.rtc.on('disconnect', function(rtc) {
  console.log('Client disconnected');
});


webRTC.rtc.on('chat_msg', function(data, socket) {
  console.log('Chat message');
  console.log( data );

  var roomList = webRTC.rtc.rooms[data.room] || [];

  for (var i = 0; i < roomList.length; i++) {
    var socketId = roomList[i];

    if (socketId !== socket.id) {
      var soc = webRTC.rtc.getSocket(socketId);

      if (soc) {
        soc.send(JSON.stringify({
          "eventName": "receive_chat_msg",
          "data": {
            "messages": data.messages,
            "color": data.color
          }
        }), function(error) {
          if (error) {
            console.log(error);
          }
        });
      }
    }
  }
});
