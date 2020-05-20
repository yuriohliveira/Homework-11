const express = require("express");
const path = require("path");
const htmlRoutes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js"); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public")); 

app.use(htmlRoutes); 
app.use("/api", apiRoutes); 

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
