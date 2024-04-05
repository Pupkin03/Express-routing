const express = require("express");
const { openings } = require("./data");

const app = express();
const port = 90;

//middleware
app.use(express.json());

//listening to port to start our server
app.listen(port, () => console.log("listening on port " + port));

console.log(openings);


app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/career", (req, res) => {
    res.send(openings);
});

app.get("/career/:career_id", (req, res) => {
    const {career_id} = req.params;
    const  newCareer = openings.find((career) => 
    career.job_name.toLowerCase().includes(career_id.toLowerCase())
    );

    if (newCareer) {
        res.status(200).send(newCareer);
    } else {
        res.send("No opening found!");
    }

});