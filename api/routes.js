const indexRouter = require("./index");
const bookRouter = require("./routes/books");
const gradeRouter = require('./routes/grades')
const activityRouter = require('./routes/activities')

const buildRoutes = (app) => {
  app.use("/", indexRouter);
  app.use("/book", bookRouter);
  app.use("/grade", gradeRouter);
  app.use("/activity", activityRouter);
};

module.exports = { buildRoutes };
