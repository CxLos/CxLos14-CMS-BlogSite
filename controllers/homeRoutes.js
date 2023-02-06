//
const router = require('express').Router();
// const { User } = require('../models');
// const withAuth = require('../utils/auth');

// getting w/o being logged in
router.get('/', (req, res) => {
  res.render('homepage');
});

// prevent not-logged in users from viewing the page
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,

//       // pass loggedin flag to the template
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {

  // if session exists, redirect request to homepage.
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;