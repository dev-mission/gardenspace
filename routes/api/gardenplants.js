'use strict';

const express = require('express');
const HttpStatus = require('http-status-codes');

const interceptors = require('../interceptors');
const models = require('../../models');

const router = express.Router();

router.get('/', async function(req, res) {
  const gardenplants = await models.GardenPlant.findAll({
    order: [['position', 'ASC'], ['name', 'ASC']]
  });
  res.json(gardenplants);
});

router.post('/', interceptors.requireLogin, async function(req, res) {
  const gardenplant = models.GardenPlant.build(req.body);
  try {
    await gardenplant.save();
    res.status(HttpStatus.CREATED).json(gardenplant);
  } catch (error) {
    res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
  }
});

router.get('/:id', async function(req, res) {
  const gardenplant = await models.GardenPlant.findByPk(req.params.id);
  if (gardenplant) {
    res.json(gardenplant);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.patch('/:id', interceptors.requireLogin, async function(req, res) {
  const gardenplant = await models.GardenPlant.findByPk(req.params.id);
  if (gardenplant) {
    try {
      await gardenplant.update(req.body);
      res.status(HttpStatus.OK).end();  
    } catch (error) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
    }
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
})

router.delete('/:id', interceptors.requireLogin, async function(req, res) {
  const gardenplant = await models.GardenPlant.findByPk(req.params.id);
  if (gardenplant) {
    await gardenplant.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

module.exports = router;
