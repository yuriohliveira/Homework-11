const path = require("path"); 
const express = require("express"); 
const fs = require("fs"); 
const router = express.Router(); 
const dbPath = path.join(__dirname,"../db/db.json");
const uniqid = require('uniqid');

router.get("/notes",function(req,res) { 
    fs.readFile(dbPath,"utf8",function(error,fileData) {
        if(error) throw error; 
        console.log(fileData); 
        res.json(JSON.parse(fileData)); 
    }); 
}); 

router.post("/notes",function(req,res) {
    fs.readFile(dbPath,"utf8",function(error,fileData) {
        if(error) throw error; 
        req.body.id = uniqid(); 
        const arr = JSON.parse(fileData); 
        arr.push(req.body); 
        
        fs.writeFile(dbPath,JSON.stringify(arr),function(error) {
            if(error) throw error; 
            res.json(req.body); 
        }); 
        
    }); 
}); 

router.delete("/notes/:id",function(req,res) {
    const id = req.params.id;
    fs.readFile(dbPath,"utf8",function(error,fileData) {
        if(error) throw error; 
        req.body.id = uniqid(); 
        const array = JSON.parse(fileData); 
        
        for(let i = 0; i < array.length; i++) {
            if(array[i].id === id) {
                array.splice(i,1); 
            }
        }
        fs.writeFile(dbPath,JSON.stringify(array),function(error) {
            if(error) throw error; 
            res.json(req.params.id); 
        }); 
    });
}); 

//export routes 
module.exports = router; 