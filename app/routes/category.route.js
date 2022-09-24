const { authJwt } = require("../middlewares");
const controller = require("../controllers/category.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/category", controller.findAll);
  app.get("/api/category/:name", controller.findOne);
  app.post("/api/category/create", controller.create);
  app.put("/api/category/update/:id", controller.update);
  app.put("/api/category/lock/:id", controller.lock);
  app.put("/api/category/unlock/:id", controller.unlock);
};
