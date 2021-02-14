import WebSocket from 'ws';
import http from 'http';

const server = http.createServer();

const wss = new WebSocket.Server({ server });
const VERSION = 0.1;
const PORT = 3000;

wss.on('connection', (ws) => {
    console.log('CONNECTED');

    ws.on('message', (data) => {
        let obj = JSON.parse(data.toString());
        console.log(obj);

        if (obj == null) return;
        if (obj["name"] == null) return;

        switch (obj.name) {
            case "register":
                if (obj["version"] == null) return;
                break;
        }

        console.log(`Data received: ${obj}`);
        ws.send(JSON.stringify(obj));
    });

    ws.on('close', (code, reason) => {
        console.log("Disconnected");
    });
});

server.listen(PORT, () => {
    console.log('Listening to port: ' + PORT);
});