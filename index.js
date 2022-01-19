const express = require('express');
const app = express();
const port = 5000;
//백서버는 5000번

const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://alsrl9531:godls0825@mingplate.ynacw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  .then(()=>console.log(`mongodb connect`))
  .catch(err=> console.log(err))



app.get('/', (req, res)=>res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listing on port ${port}!`));