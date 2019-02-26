var express = require("express"),
    app = express();


//allows express to track files as .ejs
app.use(express.static("public"));
app.set("view engine", "ejs");


// landing page
app.get("/", function (req, res) {
    res.render("home");
});





//-----------------LISTENING TO APP SERVER
const hostname = '127.0.0.1';
const port = 3000;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});