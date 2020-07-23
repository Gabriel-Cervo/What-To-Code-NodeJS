const ideaModel = require('../models/idea').Idea;

// Guardar no banco as infos...
exports.saveIdea = function(req, res, next) {
    const idea = new ideaModel({
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        likes: 0
    });

    idea.save(function (error, idea) {
        if (error) {
            next({
              status: "error",
              message: error
            });
          } else {
              next(null);
          }
      });
}