const express = require('express');
const app = express();
const port = 5000;
//백서버는 5000번
const bodyParser = require('body-parser');
const {User} = require("./models/User");
const config = require("./config/key")
//어플리케이션/x-www-form...
app.use(bodyParser.urlencoded({extended:true}));
//어플리케이션/json
app.use(bodyParser.json());


const mongoose = require('mongoose');
mongoose.connect(config.mongoURI)
  .then(()=>console.log(`mongodb connect`))
  .catch(err=> console.log(err))



app.get('/', (req, res)=>res.send('Hello World! zzz'));

app.post('/register', (req, res) => {
  // 회원가입 할때 필요한 정보를 client에서 가져오면 그것들을 db에 넣어준다.
  const user = new User(req.body);
  user.save((err, userInfo) => {
      if (err) return res.json({ Success: false, err });
      return res.status(200).json({ Success: true });
  });
});


app.listen(port, () => console.log(`Example app listing on port ${port}!`));