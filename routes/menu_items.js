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
       db.insert(item)
        .into('menu_items')
        .then(item =>{
            // console.log(req);
            res.status(201).json(item).send('Item added to database')
        })
        .catch(err => {
            res.send(err.message).status(500).json({error: "Item was not added to database"})
        })
   })
   
   router.route('/:id')
   .get((req, res) => {
       itemId = req.params;
       console.log(req.params)
       db('menu_items')
       .where(itemId)
       .first()
       .then(item => {
           if(!item){
               return res.status(404).send('Item not found')
           }else{
               return res.status(200).json(item)
           }
       })
       .catch(err => {
           res.send(err.message).status(500).json({error: 'Problem retrieving item'})
       })
    })

    .put((req, res) => {
        itemId = req.params;
        updatedItem = req.body;
        db('menu_items')
        .where(itemId)
        .update(updatedItem)
        .then(item => {
            res.status(201).json(item).send('Item updated')
        })
        .catch(err => {
            res.send(err.message).status(500).json({error: 'Unable to update item'})
        })
    })

       .delete((req, res) => {
           itemId = req.params;
           db('menu_items')
           .where(itemId)
           .del()
           .then(removedItem => {
               res.status(202).json(removedItem).send('Item deleted')
           })
           .catch(err => {
               res.send(err.message).status(500).json({error: 'Unable to delete item'})
           })
       })
    
   module.exports = router