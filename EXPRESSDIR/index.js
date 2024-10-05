const express = require("express");
const app = express();

// console.log(app);

let port = 8080;

app.listen(port, ()=> {
    console.log(`the server is at port ${port}`);
});

app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    let {username, id} = req.params;
    let htmlStr = `Welcome to the root page ${username} and id ${id}`;
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    let {q} = req.query;
    res.send(`<h1>search results for query : ${q}</h1>`);
});
// app.get("/apple", (req, res) => {
//     res.send("you contacted to the apple page");
// });

// app.get("/banana", (req, res) => {
//     res.send("you contacted to the banana page");
// });

// app.get("*", (req, res) => {
//     res.send("this page doesn't exist!");
// });


// app.post("/", (req, res) => {
//     res.send("it's a post request");
// })

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request recieved");
//     res.send({
//         name: "apple",
//         color: "red"
//     });
// })