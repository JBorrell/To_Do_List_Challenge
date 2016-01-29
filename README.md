To Do List Single Page Application
-----------------------------------

I've created a single page application which represents a forum for a user
to store tasks to be completed at a later date. Users can create tasks,
mark them as completed and delete them as they choose. Project was designed
upon the following user stories.

User Stories
------------

As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again

As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks


Setup
------

1. Clone this repo locally
2. Open the 'index.html' file
3. Navigate the browser according to prompts

Testing
-------
* Make sure npm & bower are installed

Unit Tests:
- Open Terminal or iTerm
- Ensure you are in the correct directory
- Run 'karma start test/karma.conf.js'

Feature Tests:
- Open Terminal or iTerm
- Ensure you are in the correct directory
* You will need 3 different tabs
- Open a local test server by running 'http-server'
- Run a web testing driver by running 'webdriver-manager start'
- Run tests using 'protractor test/e2e/conf.js'

* Testing will open a browser quickly to perform test for the front end
of the application. Do not be alarmed.

All tests should pass with 0 failures.

Further Extensions
------------------

- Adding filters to tasks
- Sorting tasks by importance
- Additional prompts when deleting incomplete tasks
- Hosting task list on an external database
 - (Adding user sign up to allow access to unique lists?)
- Deploying application to Heroku
