var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

// You can store key-value pairs in express, here we store the port setting
app.set('port', (process.env.PORT || 8000));

// bodyParser needs to be configured for parsing JSON from HTTP body
app.use(bodyParser.json());
app.use(cors());

// Simple hello world route
app.get('/', function(req, res) {
    res.send("Hello world");
});

var posts = [
        {
            id: 0,
            user: {
                id: 1,
                username: "dtrump",
                profileImageSmall: "http://core0.staticworld.net/images/article/2015/11/111915blog-donald-trump-100629006-primary.idge.jpg"
            },
            image: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
            imageThumbnail: "http://media1.fdncms.com/sacurrent/imager/u/original/2513252/donald_trump4.jpg",
            likes: 892,
            caption: "Always winning #elections",
            tags: ['elections'],
            comments: [
                {
                    id: 0,
                    user: {
                        id: 2,
                        username: "POTUS"
                    },
                    comment: "You're never going to make it don #losing",
                    userRefs: [],
                    tags: ["losing"]
                },
                {
                    id: 1,
                    user: {
                        id: 3,
                        username: "HillaryC"
                    },
                    comment: "Damn right @POTUS",
                    userRefs: ["POTUS"],
                    tags: []
                },
            ]

        }
    ];

    var users = [{
            id: "txgw35",
            username: "test",
            password: "pwd"
        },
        {
            id: "xvj2f2",
            username: "john",
            password: "doe"
        }];

app.get('/posts/relevant', function(req, res) {
    res.json(posts);
});

app.get('/posts/:id', function(req, res) {
    res.json(posts[req.params.id]);
});

// start listening for incoming HTTP connections
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

app.post('/login', function(req,res){
    console.log("test");
    console.log(req.body);
    var u = users.find(function(element){
         return (element.username === req.body.username) && (element.password === req.body.password);
    });

    if(u !== undefined)
    {
        return res.json({id: u.id, username: u.username});
        console.log("It worked");
    }
    else
    {
        return res.sendStatus(401);
        console.log("Nope");
    }
});

app.post('/register', function(req,res){
  res.send() ;
  console.log(req.body.username);
  console.log(req.body.password);
  var randomId = Math.random().toString(36).slice(-6);
  var registerData = {
    //id: 4,
    username: req.body.username,
    password: req.body.password,
    //fullName: "Oscar Stravosky",
    //profileImageSmall: "https://pbs.twimg.com/profile_images/750300510264107008/G8-PA5KA.jpg"
  }
  console.log(registerData);
  console.log("-----------------------");
  //users.push(randomId, req.body.username, req.body.password);
  users.push(registerData);
  for (var i = 0 ; i < posts.users.length ; i++)
    console.log(users[i].username);


});
