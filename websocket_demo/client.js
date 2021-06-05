// run in browser console

let ws = new WebSocket("ws://localhost:8080")

ws.onmessage = message => console.log(`we received a message from server ${message.data}`)