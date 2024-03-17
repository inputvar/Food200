const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home/welcome");
});

router.get("/home/about-us", (req, res) => {
  res.render("home/aboutUs", { title: "About Us | FOOD200" });
});

router.get("/home/mission", (req, res) => {
  res.render("home/mission", { title: "Our mission | FOOD200" });
});

router.get("/home/contact-us", (req, res) => {
  res.render("home/contactUs", { title: "Contact us | FOOD200" });
});

router.get("/home/ngo", (req, res) => {
  res.render("home/ngo", { title: "NGO | FOOD200" });
});

router.get("/home/volunteer", (req, res) => {
  res.render("home/volunteer", { title: "Volunteer | FOOD200" });
});

module.exports = router;
