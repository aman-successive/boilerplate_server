const nodemailer = require("nodemailer");
const mongoose = require('mongoose');
const Utils = require('../utils');
const Inbox = require('../models/inbox');

async function sendMail(req, res){
    const transport = nodemailer.createTransport(Utils.transporter);
    let info = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    };
    const inbox = new Inbox({
      _id: mongoose.Types.ObjectId(),
      from: req.body.from,
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.text,
    });
    const mail = await transport.sendMail(info);
    return inbox
    .save()
    .then(() => {
      return res.status(201).json(mail);
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: error.message,
      });
    });
}

module.exports = { sendMail };