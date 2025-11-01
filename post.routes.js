const { verifyToken } = require('../middleware/authJwt');
const controller = require('../controllers/post.controller');

module.exports = function(app) {
  // Use the verifyToken middleware for all protected routes
  app.post('/api/posts', verifyToken, controller.createPost);
  app.put('/api/posts/:id', verifyToken, controller.editPost);
  // ... other routes
};
