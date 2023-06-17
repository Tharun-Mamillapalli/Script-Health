# Script-Health

* This webpage allows users to register their email address and receive a confirmation email containing their name.
* The registration process is handled by a server-side application built with Node.js and MySQL, along with Nodemailer for sending emails.

# Prerequisites
Before running the application, make sure you have the following prerequisites installed:

* MySQL database
* Gmail account (for sending confirmation emails)
* Node.js

# Installation
* Clone the repository or download the source code.
* Navigate to the project directory in your terminal.
* Install the dependencies by running the following command:
```npm install```

# Configuration
* Open the .env file in the project root directory.
* Provide your MySQL database connection details:
  
```DB_HOST=localhost```
```DB_USER=your_database_user```
```DB_PASSWORD=your_database_password```
```DB_NAME=your_database_name```


* Provide your Gmail account details for sending confirmation emails:

```EMAIL_USER=your_email@gmail.com```
```EMAIL_PASSWORD=your_email_password```


# Database Setup
* Create a new database in your MySQL server with the name specified in the .env file.
* Import the database.sql file located in the project root directory to set up the necessary table.

# Usage

* Start the application by running the following command:
  ```node server.js```
  or
  ```npm start```

* Open your web browser and navigate to http://localhost:3000 to access the user registration webpage.
* Fill in the registration form with your name and email address, then click the "Register" button.
* If the registration is successful, you will see an alert message confirming the registration.
* Check your email inbox for the confirmation email. It should contain your name and a confirmation message.

# Troubleshooting
* If you encounter any errors related to database connection or email sending, make sure your MySQL server is running and the provided database credentials are correct. Also, verify that your Gmail account settings allow less secure apps to access it.
* If you want to customize the webpage or modify the server-side logic, refer to the source code files in the project directory.
