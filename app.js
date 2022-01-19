require("dotenv").config()
// ! dotevn import must be above all other imports

const Express = require("express");
const app = Express()
/*
    * First we create a ariable to import express from node modules folder into our file using require() method.
    * creating top level function Express() to gain access to all of its methhods and properties:
        * HTTP request
        * middleware functionality
        * basic app settings 

*/

app.listen(process.env.PORT, () => {
    console.log(`[server]: app.js is listening on 4000`)
})

