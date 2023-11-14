const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

let tasks = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.json({ success: true });
});

app.put('/tasks/:index', (req, res) => {
  const index = req.params.index;
  const updatedTask = req.body.task;

  if (index >= 0 && index < tasks.length) {
    tasks[index] = updatedTask;
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, error: 'Task not found' });
  }
});

app.delete('/tasks/:index', (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, error: 'Task not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
