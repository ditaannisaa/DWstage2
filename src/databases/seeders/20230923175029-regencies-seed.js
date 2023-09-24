'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('regencies', [
      {
         regency: 'KABUPATEN PADANG PARIAMAN',
         provinceId: 5,
         createdAt: new Date,
         updatedAt: new Date
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('regencies', null, {});
  }
};
