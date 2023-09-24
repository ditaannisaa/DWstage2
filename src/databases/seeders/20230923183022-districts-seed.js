'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('districts', [
      {
         district: 'PADANG SAGO',
         regencyId: 1,
         createdAt: new Date,
         updatedAt: new Date
      },
    ], {});
  },

    async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('districts', null, {});
    }
};
