const express = require('express');
const db = require('../data/dbConfig.js');

const router = express.Router();


router.route('/')
   .get((req, res) =>{
        db('menu_items')
        .then(items => {
            res.status(200).json(items)
        })
        .catch(err => {
            res.send(err.message).status(500).json({error:"Could not retrieve items"})
        })
   })
   
   .post((req, res) => {
       const item = req.body;
       db(menu_items).insert(item)
        .into('menu_items')
        .then(id =>{
            res.status(201).json(id).send('Item added to database')
        })
        .catch(err => {
            res.send(err.message).status(500).json({error: "Item was not added to database"})
        })
   })
   
   module.exports = router