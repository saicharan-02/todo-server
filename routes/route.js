const express = require("express");
const { addTodo, getAll, deleteTodo } = require("../controller/todo-controller");

const route = express.Router();

route.post("/create", addTodo);
route.get("/getAll", getAll);
route.post("/deleteTodo", deleteTodo);

module.exports = route;
