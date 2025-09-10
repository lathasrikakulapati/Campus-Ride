Campus Ride - A Student-Centric Campus Ride Website
Project Overview
Erkab is a secure and affordable campus ride platform designed exclusively for college students to ease campus traffic and parking problems. It helps verified students share rides conveniently within their university community.

Features
Student verification through college ID and contact info for secure signups

Affordable rides cheaper than conventional options like Uber

Reduces campus traffic congestion and parking demand

Social aspect to connect and make friends through rides

Integration with Maps API and Twilio API for location and communication

Technologies Used
JavaScript, Node.js, Express.js

MongoDB for database

Passport.js for user authentication

EJS for server-side rendering

Bootstrap, jQuery for frontend UI

Maps API and Twilio API for location and notifications

Installation
Clone the repository:

bash
git clone (https://github.com/lathasrikakulapati/Campus-Ride)
Navigate to the project directory:
Install dependencies:

bash
npm install
Create a .env file in the project root and add your database and API keys:

text
MONGO_URI=your_mongodb_connection_string
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
Start MongoDB server if running locally.

Run the app:

bash
npm start
Open http://localhost:3000 in your browser.

Usage
Register using your college email and verified ID

Create or join campus rides with other students

View ride history and manage your profile easily

Contributing
Contributions are welcome! Please fork the repository and submit pull requests. Report issues for bugs or feature requests.

License
This project is licensed under the MIT License.
