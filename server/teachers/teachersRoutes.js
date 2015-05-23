var teacherController = require('./teachersController.js');
module.exports = function (app) {
  // app === userRouter injected from middlware.js
  app.get('/getClass', teacherController.getClass);
  app.get('/getStudentList', teacherController.getStudentList);
  
  app.post('/getClassInfo', teacherController.getClassInfo);
  app.post('/addClass', teacherController.addClass);
  app.post('/removeClass', teacherController.removeClass);
};
