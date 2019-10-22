const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const menuItemRoutes = require('../routes/menu_items.js')


server.use(express.json());
server.use(cors());
server.use(helmet());

//configureRoutes(server);
server.get('/', (req, res) =>{res.send('You have reached the Angel Food API')});
server.use('/api/menu_items', menuItemRoutes);

module.exports = {
  server
};