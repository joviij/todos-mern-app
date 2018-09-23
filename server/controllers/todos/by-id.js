const Todo = require('../../models').Todo;

module.exports = (req, res) => {
  const query = Todo.findById(req.params.id);
  query.exec((err, doc) => {
    if (err) {
      res.status = 400;
      res.send(err);
    }
    res.send(doc);
  });
};
