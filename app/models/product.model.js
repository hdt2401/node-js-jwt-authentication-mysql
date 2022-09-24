module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("products", {
    // id: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true,
    // },
    name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    desc: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    categoryId: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
  });
  return Product;
};
