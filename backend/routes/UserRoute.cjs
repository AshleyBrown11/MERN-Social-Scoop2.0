const express = require("express");
const ctrl = require('../controllers/UserController.js')
const authMiddleWare = require('../middleware/AuthMiddleware.js');

const router = express.Router()

router.get('/:id', ctrl.getUser);
router.get('/', ctrl.getAllUsers)
router.put('/:id',authMiddleWare, ctrl.updateUser)
router.delete('/:id',authMiddleWare, ctrl.deleteUser)
router.put('/:id/follow',authMiddleWare, ctrl.followUser)
router.put('/:id/unfollow',authMiddleWare, ctrl.unfollowUser)

module.exports = router