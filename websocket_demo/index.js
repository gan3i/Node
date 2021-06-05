const http = require("http");
const WebSocketServer = require("websocket").server;
let connection = null;

const httpServer = http.createServer((req, res) => {
    console.log("we have received a request");
})

const webSocket = new WebSocketServer({
        "httpServer" : httpServer
})

webSocket.on("request", request => {
    
    connection = request.accept(null, request.origin);
    connection.on("open", e => console.log("Opened!!!"));
    connection.on("close", e => console.log("Closed!!!"));
    connection.on("message", message =>{
        console.log(`Received message ${message.utf8Data}`);
    })
    
    send_random();
})

httpServer.listen(8080, ()=>console.log("I am listening on 8080"));

function send_random(){
    connection.send(`Message ${Math.random()}`);
    setTimeout(send_random, 5000);
}

