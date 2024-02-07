function performTask(taskNumber) {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous task, e.g., API call, file read, etc.
      setTimeout(() => {
        console.log(`Task ${taskNumber} completed`);
        resolve(`Result of task ${taskNumber}`);
        debugger;
      }, Math.random() * 10);
    });
  }
  
  async function executeTasksWithPromises() {
    for (let i = 1; i <= 10; i++) {
      try {
        debugger;
        const result = await performTask(i);
        // Handle the result as needed
      } catch (error) {
        console.error(`Task ${i} failed: ${error.message}`);
      }
    }
  }
  
  executeTasksWithPromises();
  