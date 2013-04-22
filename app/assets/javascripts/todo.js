window.TD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function (rootEl, tasks) {

    var tasksListView = new TD.Views.TasksListView({
      collection: tasks
    });

    $(rootEl).html(tasksListView.render().$el);
    console.log("Achievement Unlocked: JS Client code runs");
    console.log(tasks);
  }
};