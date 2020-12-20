
const net = require("dgram")
const socket = net.createSocket("udp4")

socket.on('message', (msg,rinfo) =>{

    console.log('server got: ${msg} from ${rinfo.address}: port:${rinfo.port}' )
})

socket.bind(8080)