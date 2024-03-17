const express = require('express');
const expressLayouts = require('express-ejs-layouts'); // Add this line
const session = require('express-session'); 
const passport = require('passport');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const donorRoutes = require('./routes/donor');
const adminRoutes = require('./routes/admin');
const agentRoutes = require('./routes/agent');

const app = express();
app.use(expressLayouts);
app.set("view engine", "ejs");
app.use("/assets", express.static(__dirname + "/assets"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  res.locals.warning = req.flash("warning");
  next();
});

// Routes
app.use(homeRoutes);
app.use(authRoutes);
app.use(donorRoutes);
app.use(adminRoutes);
app.use(agentRoutes);
app.use((req, res) => {
  res.status(404).render("404page", { title: "Page not found" });
});


const port = process.env.PORT || 5040;
app.listen(port, console.log(`Server is running at http://localhost:${port}`));
