const async = require('async');

function performTask(taskNumber, callback) {
  // Simulate an asynchronous task, e.g., API call, file read, etc.
  setTimeout(() => {
    console.log(`Task ${taskNumber} completed`);
    callback(null, `Result of task ${taskNumber}`);
  }, Math.random() * 1000);
}

function executeTasksWithAsyncLibrary() {
  const tasks = Array.from({ length: 1000 }, (_, i) => (callback) => {
    performTask(i + 1, (error, result) => {
      if (error) {
        console.error(`Task ${i + 1} failed: ${error.message}`);
        callback(error);
      } else {
        // Handle the result as needed
        callback(null, result);
      }
    });
  });

  async.parallel(tasks, (error, results) => {
    if (error) {
      console.error('Error executing tasks:', error.message);
    } else {
      // Handle the results array
    }
  });
}

executeTasksWithAsyncLibrary();
