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
    area: {
        type: DataTypes.STRING(70),
        allowNull: true
    },
    isImportant: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    isUrgent: {
        type: DataTypes.BOOLEAN,
        allowNull: false
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