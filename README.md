# todos-mern-app
> Todos app created using the MERN Stack

![Screenshot](https://raw.githubusercontent.com/estebanborai/todos-mern-app/master/docs/screenshot.png)

## Running the Project

1. Clone the repo
```bash
git clone https://github.com/estebanborai/todos-mern-app.git
```

2. Install dependencies
```bash
cd todos-mern-app
# using yarn
yarn
# using npm
npm i
```

3. Run mongodb and create a database called "TodosDB", 
	 then create a collection in the database called "todos".
	 Run the mongodb server.

4. Run the development server
```bash
# using yarn
yarn run server
# using npm 
npm run server
```

5. Run the development web server
```bash
# using yarn
yarn start
# using npm
npm start
```

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

### Visual Studio Code Workspace
If you are using Visual Studio Code as your favorite text editor, I recommend 
you to open the project using the defined workspace.
To accomplish that you'll want to go to `File/Open Workspace` and select
`todos-mern-app.code-workspace`.

## Contributions

Contributions to this project are welcome, feel free to improve the project,
learn from it and teach through it!
