const express = require("express");
const routes = require("./routes/main");
const app = express();

const port = 3000;

app.get("/", (req, res) =>
{
    res.send("<html></html>");
})

app.get("/test/", routes.main);


app.listen(port, ()=>
{
    console.log("Running");
});