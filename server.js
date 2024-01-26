require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");


const app = express();
// Require controllers here
//
//
//

// from GA CLASS TO LOOK UP LATER: add in when the app is ready to be deployed
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger("dev"));
app.use(express.json());

app.use(require("./config/auth"));

// Mount routes here
// app.use('/', routerNamer)

if (process.env.IS_PRODUCTION) {
    console.log('PRODUCTION')
}

// "catch all" routes
if (process.env.IS_PRODUCTION) {
    // don't think I need PWA features so this might not be needed?
    const manifest = require('./dist/manifest.json');
    app.use(express.static(path.join(__dirname, "dist")));
    // "catch all" route
    app.get('/*', function (req, res) {
        res.render(path.join(__dirname, 'dist', 'index.ejs'), { manifest });
        // res.render(path.join(__dirname, 'dist', 'index.ejs'),);
    });
}
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './', 'index.html'));
});


const port = process.env.PORT || 3001;

const { PORT = 8000 } = process.env;
app.listen(PORT, () => {
    console.log();
    console.log(`  App running in port ${PORT}`);
    console.log();
    console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});