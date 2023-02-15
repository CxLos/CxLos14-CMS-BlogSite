//
const router = require('express').Router();
const { User, Blog } = require('../models');
const withAuth = require('../utils/auth');

// getting w/o being logged in
router.get('/', (req, res) => {
  res.render('homepage');
});

// Rendering homepage with session
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

router.get("/profile", withAuth, async (req, res) => {

  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] }
      // include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      user,
      logged_in: true,
    });
  } catch (err) {
    console.log("Issue fetching profile");
    res.status(500).json(err);
  }
});

router.get("/blogs", withAuth, async (req, res) => {

  res.render('blogs', { 
    logged_in: req.session.logged_in
  });
});

router.get('/blogs/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    res.render('blogs', {
      logged_in: req.session.logged_in
    });
    console.log(blog);
  } catch (err) {
    res.status(500).json(err);
  }
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

// router.get('/login', (req, res) => {

//   // if session exists, redirect request to homepage.
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;