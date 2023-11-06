//import express library and assogn to variable
import express from "express";

//create instance of express application
const app = express();

//set the port the application will be running on
const port = process.env.PORT || 3001;

// set up a response for the root path of the application
    app.get('/', (req, res) => {
    res.send("draw someone or something you love")
})

// set the application to listen on the specified port
app.listen(port, () => {
    console.log(`example at listening on port ${port}`)
})



