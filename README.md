### modules/logic.js
modules/logic.js is a module and contain a function that is executed whenever the server receives a request. This function is exported with the name serverlogic 
used by the module.exports instruction at the end of the file 

### server.js
With the require() function we load the file modules/logic and assign the exported module serverlogic to the constant serverlogic. Now we can use the module in 
the createServer() method with createServer(serverlogic) and the server runs the code when it was started.
