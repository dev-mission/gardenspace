'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Attendees.init({
    GardenId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    date: DataTypes.DATE,
    hour: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Attendees',
  });
  return Attendees;
};