'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('areas', [
        {
            name: 'General',
            created_at: '2023-04-21 00:00:00+02',
            updated_at: '2023-04-21 00:00:00+02'
        },
        { 
            name: 'Studying',
            created_at: '2023-04-21 00:00:00+02',
            updated_at: '2023-04-21 00:00:00+02'
        },
        { 
            name: 'Work',
            created_at: '2023-04-21 00:00:00+02',
            updated_at: '2023-04-21 00:00:00+02'
        },
        { 
            name: 'LifeOS',
            created_at: '2023-04-21 00:00:00+02',
            updated_at: '2023-04-21 00:00:00+02'
        }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('areas', null, {});
  }
};
