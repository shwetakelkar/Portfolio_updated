const express = require("express");
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const app = express();
const PORT = process.env.PORT || 3000;
var mailApiKey = process.env.SENDGRID_API_KEY
sgMail.setApiKey(mailApiKey);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index");
})

app.post("/sendmail",function(req,res){
    console.log(req.body.email);
    const msg = {
        to:"shweta4.gupta@gmail.com",
        from:req.body.email,
        html:req.body.message+" "+req.body.name
    }
    sgMail.send(msg).then(() => {
        res.send("success!")
      })
      .catch((err) => {
        console.error(err);
        res.send("An error occured");
      });;

})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}.`)
})