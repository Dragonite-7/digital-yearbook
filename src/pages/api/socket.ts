import { Server } from 'socket.io';

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      socket.on('joined', (userDisplayData) => {
        console.log('New user joined - Backend');
        socket.broadcast.emit('joined', userDisplayData);
      });
      // socket.on('disconnected', (userDisplayData) => {
      //   console.log('user disconnected - Backend');
      //   socket.broadcast.emit('disconnected', userDisplayData);
      // });
    });
  }

  res.end();
};

export default SocketHandler;
