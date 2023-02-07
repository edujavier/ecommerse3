var DataTypes = require("sequelize").DataTypes;
var _cart = require("./cart");
var _order = require("./order");
var _product = require("./product");
var _product_in_cart = require("./product_in_cart");
var _product_in_order = require("./product_in_order");
var _users = require("./users");

function initModels(sequelize) {
  var cart = _cart(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_in_cart = _product_in_cart(sequelize, DataTypes);
  var product_in_order = _product_in_order(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  product_in_cart.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(product_in_cart, { as: "product_in_carts", foreignKey: "cart_id"});
  product_in_order.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(product_in_order, { as: "product_in_orders", foreignKey: "order_id"});
  product_in_cart.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_in_cart, { as: "product_in_carts", foreignKey: "product_id"});
  product_in_order.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_in_order, { as: "product_in_orders", foreignKey: "product_id"});
  cart.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(cart, { as: "carts", foreignKey: "user_id"});
  order.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(order, { as: "orders", foreignKey: "user_id"});
  product.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(product, { as: "products", foreignKey: "user_id"});

  return {
    cart,
    order,
    product,
    product_in_cart,
    product_in_order,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
