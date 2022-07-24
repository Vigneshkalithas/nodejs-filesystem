
const express = require('express');

const app = express();

app.use(express.json());



const fs = require("fs")


var timestamp = new Date()


// you give  any filename in postman tool it created at same name 




app.post('/datetime', (req, res) => {
    
    const result = req.body;

    // console.log(result)

    fs.writeFile(`${result.filename}`,`${timestamp}`,(err)=>{
        if(err)throw err;
        console.log("file created")
    
    })
    
    res.json({
        message:'file created successfully',
    })
})


app.listen(3001)