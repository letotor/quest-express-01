const express= require('express');
const movies = require("./movies");

const app = express();
const port = 8080;
app.listen(port, err => err ? console.error('error server') : console.log(`Server running on port ${port}`))

app.get("/",(req,res)=>res.status(200).send("Welcome to my favourite movie list"))
app.get("/api/movies", (req, res) => res.status(200).json({"data": { movies }}))



app.get("/api/movies/:id", (req, res) => {
   let movie = movies.find(elt => elt.id == req.params.id)
   return !!movie ? res.status(200).json({ "data": movie }) : res.status(404).send("Not Found")
}) 
