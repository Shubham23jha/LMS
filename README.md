# Coursify - Learning Management System (LMS)

Coursify is a comprehensive Learning Management System designed to facilitate online learning and course management. It features a robust React-based frontend and a powerful Node.js/Express backend.

## Project Structure

```text
coursify/
├── client/           # React frontend (Vite/React, Redux, Tailwind)
├── server/           # Node.js Express backend (MongoDB, JWT)
├── docker-compose.yml # Orchestration for local development
└── README.md         # Project documentation (this file)
```

## Key Features

- **Course Management**: Create, update, and manage online courses.
- **User Authentication**: Secure login and registration with JWT.
- **Payments**: Integrated Razorpay for course subscriptions.
- **Media Uploads**: Cloudinary integration for video and image hosting.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS and DaisyUI.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- Docker & Docker Compose (optional, for containerized setup)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd coursify
   ```

2. Setup Backend:
   ```bash
   cd server
   npm install
   # Create a .env file based on .env.example (if available)
   ```

3. Setup Frontend:
   ```bash
   cd ../client
   npm install
   ```

## Running the Application

You can start the application using either **Docker** (recommended for consistency) or **Locally** (for faster development feedback).

### Method 1: Docker (Recommended)
This approach handles dependencies and environment setup automatically.

```bash
# From the root directory
docker-compose up --build
```
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5014

### Method 2: Local Development
Use this method if you want to run the services individually without Docker.

1.  **Start the Backend**:
    ```bash
    cd server
    npm run dev
    ```
2.  **Start the Frontend**:
    ```bash
    cd ../client
    npm start
    ```
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5014/api/v1 (standard path)

## Tech Stack

- **Frontend**: React, Redux Toolkit, Tailwind CSS, DaisyUI
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Services**: Cloudinary (Media), Razorpay (Payments), Nodemailer (Email)
- **Deployment**: Docker, Container-ready
