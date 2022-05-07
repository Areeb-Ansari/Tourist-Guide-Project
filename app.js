const path = require('path');

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var Reviews = require('./models/reviews');
var Queries = require('./models/query');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

mongoose.connect("mongodb+srv://Kunal:Kunal@123@cluster0.hbgzc.mongodb.net/Review", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
    res.render("neon");
});

app.get("/homepage.html", (req, res, next) => {
    res.render("homepage");
});

app.get("/home.html", (req,res,next) => {
    res.render("home");
});

app.get("/review.html", (req,res,next) => {
    res.render("review");
})

app.get("/contact.html", (req,res,next) => {
    res.render("contact");
})

app.get("/north.html", (req, res, next) => {
    res.render("north");
});
app.get("/south.html", (req, res, next) => {
    res.render("south");
});
app.get("/east.html", (req, res, next) => {
    res.render("east");
});
app.get("/west.html", (req, res, next) => {
    res.render("west");
});

app.get("/about_northA.html", (req, res, next) => {
    res.render("about_northA");
})
app.get("/view_northA.html", (req, res, next) => {
    res.render("view_northA");
})
app.get("/location_northA.html", (req, res, next) => {
    res.render("location_northA");
})
app.get("/about_northB.html", (req, res, next) => {
    res.render("about_northB");
})
app.get("/about_northC.html", (req, res, next) => {
    res.render("about_northC");
})
app.get("/about_northD.html", (req, res, next) => {
    res.render("about_northD");
})

app.get("/about_southA.html", (req, res, next) => {
    res.render("about_southA");
})
app.get("/about_southB.html", (req, res, next) => {
    res.render("about_southB");
})
app.get("/about_southC.html", (req, res, next) => {
    res.render("about_southC");
})
app.get("/about_southD.html", (req, res, next) => {
    res.render("about_southD");
})

app.get("/about_westA.html", (req, res, next) => {
    res.render("about_westA");
})
app.get("/about_westB.html", (req, res, next) => {
    res.render("about_westB");
})
app.get("/about_westC.html", (req, res, next) => {
    res.render("about_westC");
})


app.get("/reviews",(req, res, next) => {
    Reviews.find({}, (err, allComments) => {
        if(err) {
            console.log(err);
        }
        else {
            res.render("review",{comment: allComments});
        }
    });
});

app.post("/reviews",(req, res, next) => {
    let name = req.body.name;
    let rating = req.body.rating;
    let review = req.body.review;
    let mon = req.body.monument;

    var newComment = {name: name, rating: rating, review: review, monument: mon};
    Reviews.create(newComment, (err, comment) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("added");
        }
    });
    res.redirect("/reviews");
});


app.post("/addquery",(req, res, next) => {
    let description = req.body.description;

    var newQuery = {description: description};
    Queries.create(newQuery, (err, query) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("added");
        }
    });
    res.redirect("/addquery");
});

app.listen(3000);