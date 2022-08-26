import express from 'express';

const app = express(); 
app.use(express.json());

const tweets=[];
const users=[];


app.post('/sign-up', (req,res) => {
    const user = req.body;
    users.push(user);
    res.send("OK")

});

app.post('/tweets', (req,res) => {
    const tweet = req.body;
    tweets.push(tweet);
    res.send("OK")

});

app.get('/sign-up', (req, res) => {
    res.send(users);
  });

  app.get('/tweets', (req, res) => {
    res.send(tweets);
  });

app.listen(5000 ,() => console.log("ola"));