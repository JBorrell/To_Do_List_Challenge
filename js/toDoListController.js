toDoList.controller('ToDoListController', [function(){
    var self = this;

    self.taskList = [{task: "Finish Challenge", completed: true}];

    self.addTask = function(taskname){
      self.taskList.push({task: taskname, completed: false})
    };

    self.taskDone = function(tasknumber){
      self.taskList[tasknumber].completed = !self.taskList[tasknumber].completed
    }

    self.deleteTask = function(tasknumber){
      self.taskList.splice(tasknumber, 1)
    }

    self.clearList = function(){
      self.taskList = [];
    }

}]);
