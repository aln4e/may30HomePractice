'use strict';
module.exports = function(sequelize, DataTypes) {
  var Favorites = sequelize.define('Favorites', {
    firstName: DataTypes.STRING,
    favoriteFood: DataTypes.STRING,
    favoriteNumber: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Favorites;
};