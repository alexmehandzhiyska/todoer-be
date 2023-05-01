'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    name: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    areaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        references: {
            model: 'areas',
            key: 'id',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        }
    },
  }, {
    sequelize,
    modelName: 'Category',
    underscored: true
  });
  return Category;
};