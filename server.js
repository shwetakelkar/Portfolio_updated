const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.get("/",function(req,res){
    res.redirect("index");
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})