'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('tasks', [
        {
            title: 'Send email to school counselor',
            description: 'Ask school counselor for letter of recommendation. It should be 200-250 words.',
            area: 'High School',
            is_important: true,
            is_urgent: true,
            due_date: '2023-04-25 00:00:00+02',
            created_at: '2023-04-22 00:00:00+02',
            updated_at: '2023-04-22 00:00:00+02'
        },
        {
            title: 'Write Math homework',
            description: 'Complete all even problems from unit 1',
            area: 'High School',
            is_important: false,
            is_urgent: true,
            due_date: '2023-04-30 00:00:00+02',
            created_at: '2023-04-21 00:00:00+02',
            updated_at: '2023-04-21 00:00:00+02'
        },
        {
            title: 'Apply for CS award',
            is_important: true,
            is_urgent: false,
            created_at: '2023-05-22 00:00:00+02',
            updated_at: '2023-05-22 00:00:00+02'
        },
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
