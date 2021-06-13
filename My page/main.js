const http = require('http');
const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express();
const port = 80;


app.use(express.urlencoded())

//static 
app.use('/static',express.static("static"));

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views',"views") // Set the views directory

app.get('/home',(req,res)=>{
    // res.setHeader("Content-Type","text\html");
    res.status(200).render("home");
})
app.get('/about',(req,res)=>{
    // res.setHeader("Content-Type","text\html");
    res.status(200).render("about");
})
app.get('/contact',(req,res)=>{
    // res.setHeader("Content-Type","text\html");
    res.status(200).render("contact");
})
app.get('/',(req,res)=>{
    // res.setHeader("Content-Type","text\html");
    res.status(200).render("home");
})

app.post('/',(req,res)=>{
    fname = req.body.fname
    age = req.body.age
    gender = req.body.gender
    email = req.body.email
    address = req.body.address

    let outputToWrite = `the name of the client is ${fname}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${email}`
   fs.appendFile('output.txt', outputToWrite);
    const massage = {"msg":"Thank u for contact us"};
    res.status(200).render("contact",massage)
})



app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})



