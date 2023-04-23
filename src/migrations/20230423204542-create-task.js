'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(2000),
        allowNull: true
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'categories',
            key: 'id',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        }
      },
      is_important: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      is_urgent: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      due_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};