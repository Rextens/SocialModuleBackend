var express = require('express');
var router = express.Router();

let keyWords=["Chleb","Masło","Papież"]

let includesIgnoreCase = (pool, word) =>
{
  for(let i = 0; i < pool.length; ++i)
  {
    if(pool[i].toLowerCase() === word.toLowerCase())
    {
      return true;
    }
  }

  return false;
}

/* GET users listing. */
router.get('/', function(req, res, next) {

  let tempStr = req.body.text
  let words=tempStr.split(/\s+/)
  let foundKeyWords= new Map()
  
  for (let i=0;i<words.length;++i){
    if(foundKeyWords.has(words[i].toLowerCase()))
    {
      foundKeyWords.set(words[i].toLowerCase(), foundKeyWords.get(words[i].toLowerCase()) +1) 
    }
    else if(includesIgnoreCase(keyWords, words[i].toLowerCase())){
      foundKeyWords.set(words[i].toLowerCase(), 1)
    }
  }

  foundKeyWords.forEach((item, key) => {
    console.log(item + " " + key)
  })

  res.send('respond with a resource');
});

module.exports = router;
