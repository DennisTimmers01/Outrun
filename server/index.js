const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');
const { readdirSync } = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const port = 3000;

// const getComponents = source =>
//   readdirSync(source, {withFileTypes: true,
// }).filter(dirent =>
//   dirent.isDirectory()).map(dirent => dirent.name
// );

// const components = getComponents(path.resolve(__dirname, '../components/vj'))
// console.log('Your components:\n', components, '');

let emit = null;

io.on('connection', socket => {
  socket.on('ground', (data) => {
    io.emit('ground', data);
  })
})

nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return nextHandler(req, res);
  })

  server.listen(port, err => {
    if (err) throw err;
    console.log(`ready on port ${port}`);
  })
})