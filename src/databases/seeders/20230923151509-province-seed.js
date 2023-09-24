'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('provinces', [
      {
         name: 'SUMATERA BARAT',
         createdAt: new Date,
         updatedAt: new Date
      },
      {
        name: 'JAWA BARAT',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'DKI JAKARTA',
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('provinces', null, {});
  }
};
