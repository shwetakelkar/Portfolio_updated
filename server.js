const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index");
})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}.`)
})