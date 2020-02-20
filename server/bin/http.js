const app = require('../app.js')
const http = require('http')
const server = http.createServer(app)
const port = 3000
const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log('connected')

    socket.on('index', (payload)=>{
        io.emit('index', payload)
    })
})

server.listen(port, () => console.log(`konek ${port}`))