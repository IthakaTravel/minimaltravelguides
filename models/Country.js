/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Country = sequelize.define('Country', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    currency_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Country',
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        Country.hasMany(models.City)
      }
    }
  });

  return Country;
};
