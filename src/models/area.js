'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Area.init({
    name: {
        type: DataTypes.STRING(80),
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Area',
    underscored: true
  });
  return Area;
};