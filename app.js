const express = require('express');
const app = express();

//get :-


app.get("", (req, res) => {
  
    console.log("Hello");
})

app.get("/books", (req, res) => {
    const data = {
        "books" : [
            "Five Point Someone",
            "One Indian Girl",
            "Three Mistakes Of My Life",
            "One Arranged Murder"
    ]
    }
    // res.send(data);
    console.log(data);
})


app.listen(8007, () => {
    console.log("Listening on port 8007.");
})