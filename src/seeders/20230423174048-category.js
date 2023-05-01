'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
        { 
            name: 'High School',
            area_id: 2,
            created_at: '2023-04-21 00:00:00+02',
            updated_at: '2023-04-21 00:00:00+02'
        },
        { 
            name: 'University' ,
            area_id: 2,
            created_at: '2023-04-21 00:00:00+02',
            updated_at: '2023-04-21 00:00:00+02'
        },
        { 
            name: 'Sports',
            area_id: 4,
            created_at: '2023-04-21 00:00:00+02',
            updated_at: '2023-04-21 00:00:00+02'
        }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
