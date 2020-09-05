const indexRouter = require("./api/index");
const bookRouter = require("./api/book");
const gradeRouter = require('./api/grade')

const buildRoutes = (app) => {
  app.use("/", indexRouter);
  app.use("/books", bookRouter);
  app.use("/grades", gradeRouter);
};

module.exports = { buildRoutes };
