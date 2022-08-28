import express from 'express';
import cors from "cors";

const app = express(); 
app.use(express.json());
app.use(cors());

const tweets=[];
const users=[];


app.post('/sign-up', (req,res) => {
    const {username,avatar} = req.body;

    users.push(({
      id: users.length,
      username,
      avatar
    }));
    res.send("OK")
});

app.post('/tweets', (req,res) => {

    const tweet = {
      username: req.body.username,
      tweet: req.body.tweet,
      avatar: users.find((user) => user.username === req.body.username).avatar,
    };
    tweets.push(tweet);
    res.send("OK")
});

app.get('/sign-up', (req, res) => {
    res.send(users);
  });

app.get('/tweets', (req, res) => {
  var last10=[];
  tweets.reverse();
  if(tweets.length>10){
    for(let i=0 ; i < 10 ; i++){
      last10.push(tweets[i]);
    }
  }
  else{
    last10=tweets;
  }
  res.send(last10);
  tweets.reverse();
});

app.listen(5000 ,() => console.log("Executando na porta 5000"));