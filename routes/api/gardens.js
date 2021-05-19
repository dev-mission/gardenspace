'use strict';
const express = require('express')
const HttpStatus = require('http-status-codes');

const interceptors = require('../interceptors');
const router = express.Router();

const models = require('../../models');

router.get('/', async function (req,res) {
    const gardens = await models.Garden.findAll({
        order: [['name', 'ASC']]
    });
    res.json(gardens)
});

router.post('/', interceptors.requireLogin, async function(req, res) {
    const garden = models.Garden.build(req.body);
    try {
      await garden.save();
      res.status(HttpStatus.CREATED).json(gardeb);
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
});

router.get('/:id', async function(req, res) {
    const garden = await models.Garden.findByPk(req.params.id);
    if (garden) {
      res.json(garden);
    } else {
      res.status(HttpStatus.NOT_FOUND).end();
    }
});

router.patch('/:id', interceptors.requireLogin, async function(req, res) {
    const garen = await models.Garden.findByPk(req.params.id);
    if (garden) {
      try {
        await garden.update(req.body);
        res.status(HttpStatus.OK).end();  
      } catch (error) {
        res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
      }
    } else {
      res.status(HttpStatus.NOT_FOUND).end();
    }
})

router.delete('/:id', interceptors.requireLogin, async function(req, res) {
    const garden = await models.Garden.findByPk(req.params.id);
    if (garden) {
      await garden.destroy();
      res.status(HttpStatus.OK).end();
    } else {
      res.status(HttpStatus.NOT_FOUND).end();
    }
});

module.exports = router;
