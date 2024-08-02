# Bajaj Finserv API

This project is a Node.js API built for Bajaj Finserv. It provides endpoints for processing data and retrieving operation codes.


## Technologies Used

### Frontend

![NextJS](https://img.shields.io/badge/NextJS-000000?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) 

### Deployment

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) ![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

## Live Demo

Experience the application live [https://bajajfinserv-task.vercel.app/](https://bajajfinserv-task.vercel.app/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

   ```sh
   git clone https://github.com/Balaganesh003/bajajfinserv.git
   ```

2. **Navigate to the project directory**

   ```sh
   cd bajajfinserv
   ```

3. **Install dependencies**
   - **Backend**
     ```sh
     cd backend
     npm install
     ```
   - **Frontend**
     ```sh
     cd frontend
     npm install
     ```

## Environment Variables

### Backend

- `ORIGIN_1`
- `PORT`



### Frontend

- `NEXT_PUBLIC_MAPBOX_TOKEN`
- `NEXT_PUBLIC_SERVER_URL`

## Setup

To run this project, create a `.env` file in the root directory for the backend and another `.env` file in the root directory for the frontend with the necessary environment variables listed above.

4. **Run the application**
   - **Backend**
     ```sh
     cd backend
     npm start
     ```
   - **Frontend**
     ```sh
     cd frontend
     npm start
     ```

## Usage

Once the application is up and running, open your browser and navigate to:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## Project Structure

```plaintext
bento-clone/
├── backend/
│   ├── controllers/
│   ├── routes/
│   └── app.js
├── frontend/
│   ├── public/
│   ├── app/
│   │   ├── page.js/
│   │   └── layout.js
└── README.md
```
