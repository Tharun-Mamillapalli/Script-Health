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
  
```DB_HOST=localhost
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name```


* Provide your Gmail account details for sending confirmation emails:

```EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_password```


# Database Setup
* Create a new database in your MySQL server with the name specified in the .env file.
* Import the database.sql file located in the project root directory to set up the necessary table.

# Usage

* Start the application by running the following command:
  ```node server.js```
  or
  ```npm start```
