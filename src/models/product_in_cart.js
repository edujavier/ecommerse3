const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_in_cart', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cart',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "not_purchased"
    }
  }, {
    sequelize,
    tableName: 'product_in_cart',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_in_cart_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
