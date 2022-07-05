const express = require('express');
const mongoose = require('mongoose'); 
const router = require("./routes/book-routes");
const cors = require('cors');
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router)    //localhost:5000/books

app.use("/", (req, res, next) => {
    res.send("This is our starting app");
});

mongoose.connect(
    "mongodb+srv://admin:QkghT3aGaumqJ7NL@cluster0.wulqkja.mongodb.net/Book-Store-App?retryWrites=true&w=majority"
    ).then(()=>console.log("Connected to Database"))
        .then(()=>{
            app.listen(5000);
        })
        .catch((err)=>console.log(err));


// QkghT3aGaumqJ7NL ->pwd db 