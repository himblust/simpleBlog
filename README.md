### modules/logic.js
The program logic that is executed whenever the server receives a request should be contained in the modules/logic.js file and integrated into the server.js file.
The function with all instructions is assigned to the constant serverlogic. 
At the end of the file, the reference to the function is exported with module.exports and made usable in other files of the application.

### server.js
With the require() function we load the file modules/logic and assign the exported module in the server.js application main file to the constant serverlogic. 
Now we can use the module in the createServer() method and the server runs exactly as before.

and this is added
