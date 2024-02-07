function performTask(taskNumber, callback) {
    // Simulate an asynchronous task, e.g., API call, file read, etc.
    setTimeout(() => {
      console.log(`Task ${taskNumber} completed`);
      callback(null, `Result of task ${taskNumber}`);
    }, Math.random() * 1000);
  }
  
  function executeTasksWithCallbacks() {
    for (let i = 1; i <= 1000; i++) {
      performTask(i, (error, result) => {
        if (error) {
          console.error(`Task ${i} failed: ${error.message}`);
        } else {
          // Handle the result as needed
        }
      });
    }
  }
  
  executeTasksWithCallbacks();
  