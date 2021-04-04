const router = require('express').Router();
const path = require('path');

// gets the main page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// get the exercise page
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// get the stats page
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, ('../public/stats.html')));
});

module.exports = router;