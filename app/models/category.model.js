module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("categories", {
    // id: {
    //   type: Sequelize.INTEGER,
    //   primaryKey: true,
    // },
    name: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    desc: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });
  return Category;
};
