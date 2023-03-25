const tasks = require("../database/db");

const addTodo = async (req, res) => {
  const data = req.body;
  await tasks.add(data);
  res.send({ message: "Task added" });
};

const getAll = async (req, res) => {
  const snapshot = await tasks.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
};

const deleteTodo = async (req, res) => {
  const id = req.body.id;
  await tasks.doc(id).delete();
  res.send({ message: "Task Deleted" });
};

module.exports = { addTodo, getAll, deleteTodo };
