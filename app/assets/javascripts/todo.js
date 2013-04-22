window.TD = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($sidebar, $content, tasksData) {
    var tasks = new TD.Collections.Tasks(tasksData);

    this.installSidebar($sidebar, tasks);

    new TD.Routers.TasksRouter($content, tasks);
    Backbone.history.start();

    console.log("Achievement Unlocked: JS Client code runs");
    console.log(tasks);
  },

  installSidebar: function ($sidebar, tasks) {
    var that = this;

    var tasksListView = new TD.Views.TasksListView ({
      collection: tasks
    });

    $sidebar.html(tasksListView.render().$el)
  }
};