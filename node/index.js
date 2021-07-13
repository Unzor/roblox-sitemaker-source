var _url_="YOUR URL HERE";
const axios = require('axios');
  var express = require('express')
var app = express()
const bodyParser = require('body-parser');

app.use(bodyParser());


app.get('/', function (req, res) {
  res.send('Make a POST request to /makeSite with the parameter HTML to create a site!');
})

app.post('/newSite', function (req, res) {
  function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}


   function randomStr(len, arr) {
            var ans = '';
            for (var i = len; i > 0; i--) {
                ans += 
                  arr[Math.floor(Math.random() * arr.length)];
            }
            return ans;
        }

   var _created_=randomStr(8, '1234567890abcdefg');
app.get('/page_' + _created_, function (reeq, res) {
    var html=req.body.html;
      html=replaceAll(html, '(DOUBLEQUOTE)', '"');
            html=replaceAll(html, '(NEWLINE)', '\n');
            html=replaceAll(html, '(SPACE)', ' ');
            console.log(html);
res.send(html);
});

res.json({site: _url_ + _created_});
});

var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("listening at http://%s:%s", host, port)  
})  
