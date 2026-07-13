🌐 Jupalle Venkat — Personal Portfolio Website
A modern, full-stack personal portfolio website built with HTML, CSS, and JavaScript on the frontend and a production-grade Node.js + Express + MongoDB backend featuring JWT authentication, Cloudinary image uploads, Nodemailer email delivery, and full REST API architecture.


📋 Table of Contents
About
Features
Project Structure
Tech Stack
How to Run
Environment Variables
API Endpoints
Contact Form Flow
Future Enhancements
Contact


📌 About
This is the personal portfolio of Jupalle Venkat — an Aspiring Data Analyst and Full Stack Developer. The portfolio showcases skills, projects, and services, and features a fully working backend with database storage, email notifications, JWT authentication, and Cloudinary image management.

The portfolio features a typewriter animation cycling through multiple roles:

📊 Aspiring Data Analyst
🚀 Full Stack Developer
📈 Power BI Enthusiast
🐍 Python Developer
🗄️ SQL Query Expert
💡 Problem Solver


✨ Features
Frontend
🍔 Hamburger Menu — Responsive mobile navigation with open/close toggle
✍️ Typewriter Effect — Animated role cycling on the hero section
🎨 Scroll Reveal Animations — Cards and sections animate on scroll using Intersection Observer
🔵 Active Nav Highlight — Navigation link highlights based on current scroll section
🌟 Cursor Glow Effect — Subtle glowing cursor effect on desktop
📱 Fully Responsive — Works perfectly on mobile, tablet, and desktop
🧭 Sticky Navbar — Navbar changes style on scroll for better UX
Backend
📬 Working Contact Form — Saves messages to MongoDB and sends real emails via Nodemailer
🔐 JWT Authentication — Secure token-based user authentication
🔒 Password Hashing — Bcrypt encryption for secure password storage
☁️ Cloudinary Integration — Image upload and cloud storage management
📁 Multer File Uploads — Handle multipart form data and file uploads
🗄️ MongoDB Database — Persistent contact message storage with Mongoose
🌐 CORS Enabled — Cross-origin resource sharing configured
⚙️ Environment Config — Secure dotenv-based configuration


📁 Project Structure
Github-Portfolio/

│

├── assets/

│   └── images/

│       ├── logo.png                  # JV logo (gold design)

│       └── profile.jpg               # Profile photo

│

├── server/                           # Backend Server

│   ├── config/

│   │   └── db.js                     # MongoDB connection setup

│   │

│   ├── controllers/

│   │   └── contactController.js      # Contact form business logic

│   │

│   ├── middleware/                   # Express middlewares

│   │

│   ├── models/

│   │   └── contact.js                # Contact Mongoose schema/model

│   │

│   ├── routes/

│   │   └── contactRoutes.js          # Contact API routes

│   │

│   ├── uploads/                      # Multer file upload directory

│   │

│   ├── utils/

│   │   └── sendEmail.js              # Nodemailer email utility

│   │

│   ├── app.js                        # Express app entry point

│   ├── .env                          # Environment variables (not committed)

│   ├── .gitignore                    # Git ignore rules

│   ├── package.json                  # Backend dependencies

│   └── package-lock.json             # Lockfile

│

├── index.html                        # Main frontend HTML file

├── style.css                         # All styles and animations

├── script.js                         # All frontend JavaScript

├── package.json                      # Frontend dependencies (Resend)

└── README.md                         # Project documentation


🛠️ Tech Stack
Frontend
Technology
Purpose
HTML5
Page structure and content
CSS3
Styling, animations, responsive design
JavaScript (ES6+)
Interactivity and dynamic effects
Intersection Observer API
Scroll reveal animations
Fetch API
Contact form submission to backend

Backend
Technology
Version
Purpose
Node.js
Latest
Backend JavaScript runtime
Express.js
^5.2.1
Web framework and REST API
MongoDB
Atlas
NoSQL database for storing contacts
Mongoose
^9.7.4
MongoDB ODM and schema modeling
Nodemailer
^9.0.3
Email sending utility
JSON Web Token
^9.0.3
Secure user authentication
Bcrypt
^6.0.0
Password hashing and encryption
Cloudinary
^2.10.0
Cloud image storage and management
Multer
^2.2.0
File upload middleware
CORS
^2.8.6
Cross-origin resource sharing
Dotenv
^17.4.2
Environment variable management
Nodemon
^3.1.14
Auto-restart during development

Deployment
Service
Purpose
Render
Backend API hosting
MongoDB Atlas
Cloud database hosting
Cloudinary
Image cloud storage



▶️ How to Run
Frontend Only (Quick Preview)
# Clone the repository

git clone https://github.com/Venkyjupalli/portfolio.git

# Open index.html directly in browser
Full Stack (Frontend + Backend)
Step 1 — Clone the repo

git clone https://github.com/Venkyjupalli/portfolio.git

cd portfolio

Step 2 — Setup Backend

cd server

npm install

Step 3 — Create .env file (see Environment Variables section below)

Step 4 — Start Backend Server

# Development mode (with auto-restart)

npm run dev

# Production mode

npm start

Server starts at http://localhost:5000

Step 5 — Open Frontend

Open index.html in your browser or use Live Server in VS Code


🔐 Environment Variables
Create a .env file inside the server/ folder with the following variables:

# Server

PORT=5000

# MongoDB

MONGO_URI=your_mongodb_connection_string

# JWT

JWT_SECRET=your_jwt_secret_key

# Nodemailer (Email)

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_email_app_password

# Cloudinary

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

⚠️ Never commit your .env file to GitHub — it is already added to .gitignore


🔌 API Endpoints
Contact
Method
Endpoint
Description
POST
/api/contact
Submit a contact message
GET
/
Health check — API running status

Request Body for Contact Form
{

  "name": "John Doe",

  "email": "john@example.com",

  "subject": "Hello Venkat",

  "message": "I would like to connect with you!"

}
Response — Success
{

  "success": true,

  "message": "Message sent successfully",

  "data": {

    "name": "John Doe",

    "email": "john@example.com",

    "subject": "Hello Venkat",

    "message": "I would like to connect with you!"

  }

}
Response — Error
{

  "success": false,

  "message": "All fields are required"

}


📬 Contact Form Flow
User fills Contact Form (Frontend)

        ↓

JavaScript collects name, email, subject, message

        ↓

Fetch POST → /api/contact (Backend)

        ↓

contactController.js validates all fields

        ↓

        ├── Saves message to MongoDB (Contact Model)

        │

        └── Sends email via Nodemailer (sendEmail utility)

                ↓

        Success Response → Frontend shows confirmation

        Error Response   → Frontend shows error message


🔮 Future Enhancements
🌙 Dark / Light Mode Toggle — Theme switcher for user preference
📊 Admin Dashboard — View and manage all contact form submissions
🏆 Certifications Section — Display earned certificates with images
📈 GitHub Stats Integration — Live GitHub contribution graph
🔔 Auto Reply Email — Automatic reply to users who submit contact form
📱 Mobile App — React Native version of the portfolio
💬 Chat Widget — Real-time visitor chat support


📞 Contact
Jupalle Venkat 📧 jupallivenkat634@gmail.com 💼 Aspiring Data Analyst | Full Stack Developer



⭐ If you like this portfolio, feel free to star the repo and connect!

