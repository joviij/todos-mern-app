# todos-mern-app
> Todos app created using the MERN Stack

## Motivation
Create a basic todo app making use of the "MERN" stack.
The MERN stack is compound of JavaScript technologies such as
- MongoDB
- Express
- React
- Node.js

## API

### Controllers

Method | API | Description | Request (Body) | Response (Body)
--- | --- | --- | --- | ---
GET | `/api/todos` | Get all todos | None | `Array<Todo>`
GET | `/api/todos/{id:String}` | Get todo by id | None | `Todo`
POST | `/api/todos/` | Add todo | `Todo` | `Todo`
PUT | `/api/todos/{id:String}` | Update a todo | `Todo` | `Todo`
DELETE | `/api/todos/{id:String}` | Remove a todo | None | None
