'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Garden extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Garden.hasMany(models.GardenPlant);
      Garden.belongsToMany(models.Plant, { through: models.GardenPlant });
    }
  };
  Garden.init({
    UserId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    hourOpenings: DataTypes.JSONB,
    location: DataTypes.STRING,
    lat: DataTypes.INTEGER,
    long: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Garden',
  });
  return Garden;
};