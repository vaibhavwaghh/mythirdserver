const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/send", (req, res) => {
  let name = req.body.name;
  let phone = req.body.phone;
  let query = req.body.query;
  let txt = "name :" + name + "phone :" + phone + "query :" + query;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vaibhavTester404@gmail.com",
      pass: "lbht iuoc zpre nhhk",
    },
  });
  let mailOptions = {
    from: "vaibhavTester404@gmail.com",
    to: "vaibhavwagh393@gmail.com",
    subject: "Enquiry from" + name,
    text: txt,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).json({ message: "server error" });
    } else {
      res.status(200).json({ message: "email sent" });
    }
  });
});
app.listen(9050, () => console.log("Ready at 9000"));
