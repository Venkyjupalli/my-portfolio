const Contact = require("../models/contact");
const sendEmail = require("../utils/sendEmail");
const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newcontact = await contact.create({
      name,
      email,
      subject,
      message,
    });

    await sendEmail({
  name,
  email,
  subject,
  message,
    });
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newcontact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createContact,
};