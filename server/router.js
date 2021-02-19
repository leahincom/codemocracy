const router = require('express').Router();

const controller = require('./controller')

router.get('/topics', controller.listAll);
router.post('/topics', controller.createPost);
router.delete('/topics/:id', controller.deletePost);
router.put('/topics/:id/up', controller.upPost);
router.put('/topics/:id/down', controller.downPost);

module.exports = router;