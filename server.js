const express =  require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 8080;


const app  = express();

app.get('/',(req ,res)=>{
    res.send(' world')

})

app.get('/login',(req,res)=>{
    res.send('running')
})





app.listen(port)
console.log(`listing on port http://localhost:${port}`)