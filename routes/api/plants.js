'use strict';

const express = require('express');
const HttpStatus = require('http-status-codes');

const interceptors = require('../interceptors');
const models = require('../../models');

const router = express.Router();

router.get('/', async function(req, res) {
  const plants = await models.Plant.findAll({
    order: [['name', 'ASC']]
  });
  res.json(plants);
});

router.post('/', interceptors.requireLogin, async function(req, res) {
  const plant = models.Plant.build(req.body);
  try {
    await plant.save();
    res.status(HttpStatus.CREATED).json(plant);
  } catch (error) {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
  }
});

router.get('/:id', async function(req, res) {
  const plant = await models.Plant.findByPk(req.params.id);
  if (plant) {
    res.json(plant);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.patch('/:id', interceptors.requireLogin, async function(req, res) {
  const plant = await models.Plant.findByPk(req.params.id);
  if (plant) {
    try {
      await plant.update(req.body);
      res.status(HttpStatus.OK).end();  
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
})

router.delete('/:id', interceptors.requireLogin, async function(req, res) {
  const plant = await models.Plant.findByPk(req.params.id);
  if (plant) {
    await plant.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
