const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_in_order', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order',
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
      allowNull: true,
      defaultValue: 0
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "is_purchased"
    }
  }, {
    sequelize,
    tableName: 'product_in_order',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_in_order_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
