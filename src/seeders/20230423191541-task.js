'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tasks', [
        {
            title: 'Send email to school counselor',
            description: 'Ask school counselor for letter of recommendation. It should be 200-250 words.',
            category_id: 1,
            is_important: true,
            is_urgent: true,
            due_date: '2023-04-25 00:00:00+02',
            created_at: '2023-04-22 00:00:00+02',
            updated_at: '2023-04-22 00:00:00+02'
        },
        {
            title: 'Write Math homework',
            description: 'Complete all even problems from unit 1',
            category_id: 1,
            is_important: false,
            is_urgent: true,
            due_date: '2023-04-30 00:00:00+02',
            created_at: '2023-04-21 00:00:00+02',
            updated_at: '2023-04-21 00:00:00+02'
        },
        {
            title: 'Buy gym card',
            category_id: 3,
            is_important: true,
            is_urgent: false,
            created_at: '2023-05-22 00:00:00+02',
            updated_at: '2023-05-22 00:00:00+02'
        },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
  }
};
