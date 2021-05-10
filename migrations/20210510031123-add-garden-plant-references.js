'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('GardenPlants', {
      fields: ['GardenId'],
      type: 'FOREIGN KEY',
      references: {
        table: 'Gardens',
        field: 'id'
      }
    });
    await queryInterface.addConstraint('GardenPlants', {
      fields: ['PlantId'],
      type: 'FOREIGN KEY',
      references: {
        table: 'Plants',
        field: 'id'
      }
    });
    await queryInterface.addConstraint('GardenPlants', {
      fields: ['GardenId', 'PlantId'],
      type: 'UNIQUE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('GardenPlants', 'GardenPlants_GardenId_Gardens_fk');
    await queryInterface.removeConstraint('GardenPlants', 'GardenPlants_PlantId_Plants_fk');
    await queryInterface.removeConstraint('GardenPlants', 'GardenPlants_GardenId_PlantId_uk');
  }
};
