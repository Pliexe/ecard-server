import WebSocket from 'ws';
import http from 'http';

const server = http.createServer();

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('CONNECTED');

    ws.on('message', (data) => {
        console.log(`Data received: ${data}`);
        ws.send(data);
    });

    ws.on('spawn', (data) => {
        console.log(`Data received: ${data}`);
        ws.send(data);
    });
});

server.listen(3000, () => {
    console.log('Listening to port');
});