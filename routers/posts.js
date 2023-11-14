const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');
const multer = require('multer');

// index
router.get('/', postsController.index);

// create
router.post('/', multer({ dest: 'public/imgs/posts' }).single('image'), postsController.create);
router.get('/create', postsController.create);

// show
router.get('/:slug', postsController.show);


// destroy
router.delete('/:slug', postsController.destroy);

// download
router.get('/:slug/download', postsController.download);

module.exports = router;
