describe('To Do List Application', function() {
  beforeEach(function() {
      browser.get('http://localhost:8080');
    })
  var newTaskBox = element(by.model('tdlCtrl.taskname'))
  var addTaskBtn = element(by.id('add'))
  var clearListBtn = element(by.className('clearList'))
  var taskCount = element(by.id('count'));

  describe('Titles', function(){
    it('website has a title', function() {
      expect(browser.getTitle()).toEqual('To Do List');
    });
    it('webpage shows title', function(){
      expect(element(by.css(".title h1")).getText()).toEqual("What needs doing??")
    });
  });

  describe('Task counter', function(){
    it('displays amount of tasks remaining', function(){
      expect(taskCount.getText()).toEqual('1 Thing to do');
    });
    it('tasks remaining count increases & pluralizes after adding a new task', function(){
      newTaskBox.sendKeys('Clean Room');
      addTaskBtn.click();
      expect(taskCount.getText()).toEqual('2 Things to do');
    });
    it("shows you have 'Nothing to do' if no tasks left", function(){
      clearListBtn.click();
      expect((taskCount).getText()).toEqual('Nothing to do!');
    });
  });

  describe('Adding/deleting/completing tasks', function(){
    var deleteTaskBtn = element(by.id('del'));
    var completeTaskBtn = element(by.className('check'));
    it('allows user to add a task to the list', function(){
      clearListBtn.click();
      newTaskBox.sendKeys('Walk Dog');
      addTaskBtn.click();
      expect(element(by.className('completed-false')).getText()).toEqual("Walk Dog")
    })
    it('allows user to delete individual task', function(){
      deleteTaskBtn.click();
      expect(taskCount.getText()).toEqual('Nothing to do!');
    });
    it('allows user to mark task as completed', function(){
      clearListBtn.click();
      newTaskBox.sendKeys('Walk Dog');
      addTaskBtn.click();
      completeTaskBtn.click();
      expect(element(by.className('completed-false')).isPresent()).toBeFalsy();
      expect(element(by.className('completed-true')).getText()).toEqual("Walk Dog")
    });
  });

  describe('Clearing all tasks', function(){
    it('Deletes all tasks upon clicking "Clear List" button', function(){
      newTaskBox.sendKeys('Walk Dog');
      addTaskBtn.click();
      newTaskBox.sendKeys('Get Groceries');
      addTaskBtn.click();
      clearListBtn.click();
      expect(taskCount.getText()).toEqual("Nothing to do!")
      expect(element(by.model('ng-repeat')).isPresent()).toBeFalsy();
    });
  });

});
