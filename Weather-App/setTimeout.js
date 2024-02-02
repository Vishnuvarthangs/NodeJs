//Basic asynchronous operations "setTimeout" is Node

console.log('Starting')

setTimeout(() => {
    console.log('Two seconds')
}, 2000) 

setTimeout(() => {
 console.log('Zero seconds')
}, 0)

console.log('Stopping')