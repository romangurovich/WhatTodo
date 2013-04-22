TD.Routers.TasksRouter = Backbone.Router.extend ({
  initialize: function (rootEl, tasks) {
    this.$rootEl = $(rootEl);
    this.tasks = tasks;
  },

  routes: {
    "": "index",
    "tasks/new": "new",
    "tasks/:id": "show"
  },

  index: function () {
    var that = this;
    that.$rootEl.html("<a href = '#/tasks/new'>Add task!</a>");
  },

  show: function (id) {
    console.log(id);
    console.log("I'm getting feisty");
    var that = this;

    var task = that.tasks.get(id);
    var taskDetailView = new TD.Views.TaskDetailView({
      model: task
    });

    that.$rootEl.html(taskDetailView.render().$el);
  },

  new: function () {
    console.log('in the new route action');
    var that = this;

    var newTaskView = new TD.Views.NewTaskView({
      collection: that.tasks
    });

    that.$rootEl.html(newTaskView.render().$el);
  }
});