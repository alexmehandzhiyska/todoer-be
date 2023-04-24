'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(2000),
        allowNull: true
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'categories',
            key: 'id',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        }
    },
    isImportant: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isUrgent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Task',
    underscored: true
  });
  return Task;
};