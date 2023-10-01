const express = require("express");
const ctrl = require('../controllers/PostController.js')
const authMiddleWare = require('../middleware/AuthMiddleware.js')
const router = express.Router()

router.post('/', ctrl.createPost)
router.get('/:id', ctrl.getPost)
router.put('/:id', authMiddleWare, ctrl.updatePost)
router.delete('/:id', authMiddleWare, ctrl.deletePost)
router.put('/:id/like', authMiddleWare, ctrl.likePost)
router.get('/:id/timeline', ctrl.getTimeLinePosts)

module.exports = router
