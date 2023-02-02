// Dependencies
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Creates Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Creates listener which starts the server 
app.listen(PORT, function() {
    console.log(`App is listening on Port ${PORT}`);
})