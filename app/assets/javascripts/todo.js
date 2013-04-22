window.TD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function (rootEl, tasksData) {
    var tasks = new TD.Collections.Tasks(tasksData);

    new TD.Routers.TasksRouter(rootEl, tasks);
    Backbone.history.start();

    console.log("Achievement Unlocked: JS Client code runs");
    console.log(tasks);
  }
};