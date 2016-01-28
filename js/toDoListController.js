toDoList.controller('ToDoListController', [function(){
    var self = this;

    self.taskList = [];

    self.addTask = function(taskname){
      self.taskList.push({task: taskname, completed: false})
    };

    self.taskDone = function(tasknumber){
      self.taskList[tasknumber].completed = !self.taskList[tasknumber].completed
    }

}]);
