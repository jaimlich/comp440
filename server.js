/* 
    Require modules need to install for this progarm to work.
    npm install express
    npm install express-session
    npm install mysql2
    npm install bcrypt

    to run server in terminal type: node server.js
    to stop server control + c

*/

/* Var name and initalize to use the above modules */
const express =require('express');
const mysql=require('mysql2');
const session =require('express-session');
const bcrypt=require('bcrypt');
const app=express();
const port=3000;

/*My connection to the database with is required info to connect. */
const databaseConnect=mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '7A#i0py1',
    database: 'comp440project'
});
/* middleware that will retrive files in the public folder, in this case that holds style.css and script.js. */
app.use(express.static('public'));

/* middleware that will handle the json request.
 */
app.use(express.json());

/* usein the express-session for session create.
need for saving the user login
*/
app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized: false
}));

/* get function to get the index.html and display it when connecting to localhost:3000.
req will be the requested.
res will be what is sent back.
res.sendFile(__direname+ ) will need to be changed if index.html isnt in the same folder as server.js with this code. 
*/
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

/*  to have the server listen in on assiigned port and control+c to stop it. */
app.listen(port,()=>{});