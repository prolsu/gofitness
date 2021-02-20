const path = require("path");

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    
    app.get("/stats", (req, res) => {
<<<<<<< HEAD
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}
=======
        res.sendFile(path.join(__dirname, "../public/stats.html")):
    });
};
>>>>>>> ebcd1c65ac6353131c52b3955a684519c19eb96d
