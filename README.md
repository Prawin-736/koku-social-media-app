
# Koku – 🌐 Fullstack Social Media App

A full-stack social media application built with Node.js, Express.js, MongoDB Atlas, and Mongoose on the backend, and HTML, CSS, JavaScript, and Bootstrap on the frontend.

The application is deployed on AWS EC2, with media storage handled via AWS S3.

This app allows users to connect and interact through posts, likes, comments, and friend management, while integrating modern features like cloud storage, authentication, and real-world deployment.


## 🚀 Features

- ✅ **Custom Authentication** (Signup, Login, Logout from the current device or all devices, Forgot Password with OTP verification)
- 🖼️ **Post Images** with captions (uploaded to AWS S3)
- 👍 **Like and Comment** on posts
- 🗑️ **Post Management**
  - Edit or delete your own posts
- 🗑️ **Comment Management**
  - Delete your own comments
- 🧑‍🤝‍🧑 **Friend System**
  - Send, accept, reject, and cancel friend requests
  - Unfriend existing friends
- 🧑 **User Profile**
  - View and update user info (username, email, age)
  - Upload a profile picture or display user initials with a gradient background
- 🌙 **Dark/Light Mode Toggle**
- 🔐 **Logout Options**
  - Logout from the current device only
  - Logout from all devices simultaneously
- 💾 **MongoDB Atlas** for database
- ✉️ **Nodemailer** for sending OTP to email
- ☁️ **AWS S3** for storing images securely


## 🛠️ Tech Stack

### Frontend
- HTML, CSS, JavaScript
- Bootstrap (minimally used for responsive UI).
- js-cookie (for handling cookies on client side)

### Backend
- Node.js (JavaScript runtime)
- Express.js (web framework)
- bcrypt (password hashing)
- jsonwebtoken (JWT authentication)
- cookie-parser (parsing cookies)
- cors (enabling CORS)
- dotenv (environment variable management)
- express-validator (input validation)
- multer (file upload handling)

### Database
- MongoDB Atlas (cloud-hosted NoSQL database)
- Mongoose (MongoDB ODM for schema and querying)

### Cloud & Storage
- AWS S3 SDK (`@aws-sdk/client-s3`, `@aws-sdk/s3-request-presigner`) for secure media upload/storage

### Email Service
- Nodemailer (sending OTP and email notifications)


## 🚀 Getting Started / Installation

Follow these steps to run the project locally.

### 📦 Prerequisites 
- Node.js installed  
- MongoDB installed (or access to MongoDB Atlas)  
- AWS account with an S3 bucket created  
- Git installed

### 🔧 Installation
```bash
1. **Clone the repository**
   git clone https://github.com/Prawin-736/koku-social-media-app-.git

2. **Install backend dependencies**
cd server
npm install

3. **Set up environment variables**

## 🔧 Environment Variables

Create a `.env` file in the `server/` directory with the following content:

# ---------------- MongoDB ----------------
DB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/<your_db_name>
DB_NAME=<your_database_name>

# ---------------- JWT ----------------
JWT_SECRETKEY=<your_jwt_secret_key>
JWT_OTP_SECRETKEY=<your_jwt_otp_secret_key>
JWT_NEW_PASS_SECRETKEY=<your_jwt_new_pass_secret_key>

# ---------------- AWS ----------------
AWS_BUCKET_NAME=<your_aws_bucket_name>
AWS_REGION=ap-south-1
AWS_ACCESS_KEY=<your_aws_access_key>
AWS_SECRET_ACCESS_KEY=<your_aws_secret_access_key>

# ---------------- Nodemailer ----------------
NODEMAILER_EMAILID=<youremail@example.com>
NODEMAILER_PASS=<your_nodemailer_password>

4. **Start the backend server**
node server.js


## 📂 Project Structure (Simplified)

Koku App-project
├── client               # Frontend application
│   └── src
│       ├── assets       # Static assets like icons
│       │   └── icon
│       ├── main         # HTML, CSS, and frontend JS for the main page
│       └── user         # HTML, CSS, and frontend JS for the user section pages
└── server               # Backend of the application
    ├── aws              # AWS-related utilities
    ├── src
    │   ├── features     # Core business logic
    │   │   ├── comment  # Comment handling - includes controller, repository, router, and schema
    │   │   ├── main     # Main routes
    │   │   ├── post     # Post handling - includes controller, repository, router, and schema
    │   │   └── user     # User management - includes controller, repository, router, and schema
    │   └── middleware   # user validation, check expired user, error handling
    └── server.js      # root server file

## 🌍 Deployment

- Platform: AWS EC2  
- Backend: Running on Node.js with PM2  
- Frontend: Served with Nginx  
- Live Demo: http://<your-ec2-ip-or-domain>


## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## 👤 Author

**PRAWIN KUMAR S**
- GitHub: [@Prawin-736](https://github.com/Prawin-736)
- LinkedIn: [Prawin Kumar S](https://www.linkedin.com/in/prawin-kumar-s/)



