const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.get('/', urlController.getAllUrls);
router.post('/submit', urlController.saveUrl);
router.get('/:shortId', urlController.redirectToUrl);
router.post('/delete/:shortId', urlController.deleteUrl);

module.exports = router;