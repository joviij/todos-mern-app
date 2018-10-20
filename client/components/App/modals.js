import React from 'react';
import DeleteTodo from '../../containers/lib/modals/DeleteTodo';
import AddTodo from '../../containers/lib/modals/AddTodo';
import UIMessage from '../lib/modals/UIMessage';
import Todo from '../../containers/lib/modals/Todo';

export const constants = {
	todo: 1,
	addTodo: 2,
	deleteTodo: 3,
	message: 4
};

const modals = new Map([
	[constants.todo, <Todo key="todo"/>],
	[constants.addTodo, <AddTodo key="add-todo" />],
	[constants.deleteTodo, <DeleteTodo key="delete-todo" />],
	[constants.message, <UIMessage key="message" />]
]);

export default modals;
