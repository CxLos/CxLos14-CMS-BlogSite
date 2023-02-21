const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const blogsuRoutes = require('./blogsuRoutes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/blogsu', blogsuRoutes);

module.exports = router;
