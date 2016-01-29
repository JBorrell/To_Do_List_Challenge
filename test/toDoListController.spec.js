describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));


  it('initializes with 1 task: Finish Challenge', function(){
    expect(ctrl.taskList).toEqual([{task: 'Finish Challenge', completed: true}]);
  });

describe('Creating a new task', function(){
  it('is able to receive a task and store it in task list', function(){
    ctrl.addTask("Clean Room");
    expect(ctrl.taskList[1].task).toEqual("Clean Room");
  });

  it('new tasks are not completed', function(){
    ctrl.addTask("Clean Room");
    expect(ctrl.taskList[1].completed).toEqual(false)
  })
});

describe('Completing a task', function(){
  it('is able to mark task as completed', function(){
    ctrl.addTask("Clean Room");
    ctrl.taskDone(1);
    expect(ctrl.taskList[1].completed).toEqual(true)
  });
});

describe('Deleting tasks', function(){
  it('is able to remove a single task from to do list', function(){
    ctrl.addTask("Clean Room");
    ctrl.deleteTask(1);
    ctrl.deleteTask(0);
    expect(ctrl.taskList[0]).toBeUndefined();
  });

  it('is able clear all tasks from to do list', function(){
    ctrl.addTask("Clean Room");
    ctrl.addTask("Wash Dishes");
    ctrl.addTask("Walk Dog");
    ctrl.clearList();
    expect(ctrl.taskList).toEqual([]);
  });

});

});
