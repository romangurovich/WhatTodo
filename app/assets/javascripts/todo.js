window.TD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function (rootEl, tasks) {
    new TD.Routers.TasksRouter(rootEl, tasks);
    Backbone.history.start();

    console.log("Achievement Unlocked: JS Client code runs");
    console.log(tasks);
  }
};