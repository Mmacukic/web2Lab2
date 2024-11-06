const { createServer } = require('node:http');
const express = require('express');
const app = express();

app.use(express.json());


const hostname = '127.0.0.1';
const port = 3000;



app.get('/', async(req, res) => {
  try{
    res.sendFile('./index.html', {root: __dirname });
    

  }catch(error){
    res.status(500).send(error)
  }

});

app.listen(port, () => {
  console.log(`server running on port (${port})`);
});
