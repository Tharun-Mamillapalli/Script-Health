const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const nodemailer = require("nodemailer");

// Create a connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "your user_name",// please enter user name
  password: "password",// please enter password
  database: "db",// please enter the database which you have created on the workbench table
});

// Connect to the MySQL database
connection.connect(function (err) {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database!");
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the email confirmation page on the root URL
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// API endpoint to store user's email and send confirmation email
app.post("/users", (req, res) => {
  const { email, name } = req.body;

  // Insert user data into the MySQL database
  const query = "INSERT INTO users (email, name) VALUES (?, ?)";
  connection.query(query, [email, name], (err, results) => {
    if (err) {
      console.error("Error storing user data: ", err);
      res.status(500).json({ error: "Failed to store user data." });
    } else {
      sendConfirmationEmail(email, name); // Send confirmation email
      res.status(200).json({ message: "User data stored successfully." });
    }
  });
});

// Function to send confirmation email
function sendConfirmationEmail(email, name) {
  // Nodemailer configuration (you need to provide your email account details)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "email",
      pass: "password",
    },
  });

  // Email content
  const mailOptions = {
    from: "email",// please enter your email 
    to: "Confirmation Email",// please enter the email to which you are sending conformation email
    subject: "Confirmation Email",
    text: `Dear ${name},\n\nThank you for registering. Your email (${email}) has been confirmed.`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending confirmation email: ", error);
    } else {
      console.log("Confirmation email sent: ", info.response);
    }
  });
}

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
