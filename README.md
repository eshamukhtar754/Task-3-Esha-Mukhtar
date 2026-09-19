# DecodeLabs Project 3 - RESTful API

A simple RESTful API built with Node.js, Express, and MongoDB for user management.

## Features

- Create, Read, Update, Delete (CRUD) operations for users
- MongoDB database integration
- Express.js for routing and middleware
- Environment variable configuration
- Input validation and error handling

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your MongoDB connection string:
   ```
   MONGO_URI=mongodb://localhost:27017/your-database-name
   PORT=5000
   ```

## Running the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Users

- **GET /api/users** - Get all users
- **POST /api/users** - Create a new user
- **PUT /api/users/:id** - Update a user
- **DELETE /api/users/:id** - Delete a user

### User Schema

```json
{
  "name": "string (required)",
  "email": "string (required, unique)",
  "age": "number (required, min: 18)"
}
```

### Example Requests

**Create User:**
```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","age":25}'
```

**Get All Users:**
```bash
curl http://localhost:5000/api/users
```

**Update User:**
```bash
curl -X PUT http://localhost:5000/api/users/:id \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe"}'
```

**Delete User:**
```bash
curl -X DELETE http://localhost:5000/api/users/:id
```

## Project Structure

```
decodelabs-project3/
├── config/
│   └── db.js           # Database connection
├── controllers/
│   └── userController.js  # Business logic
├── models/
│   └── User.js         # Database schema
├── routes/
│   └── userRoutes.js   # API routes
├── .env                # Environment variables (not in git)
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies
├── server.js           # Main entry point
└── README.md           # Project documentation
```

## License

ISC