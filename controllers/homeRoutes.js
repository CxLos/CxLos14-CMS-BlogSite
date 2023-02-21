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
      attributes: { exclude: ["password"]},
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    console.log("Issue fetching profile");
    res.status(500).json(err);
  }
});

router.get("/newblog", withAuth, async (req, res) => {

  try{
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"]},
      include: [{ model: Blog, User }],
    });

    const user = userData.get({ plain: true });

    res.render('new-blog', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log("Issue fetching profile");
    res.status(500).json(err);
  }

});

// router.get("/updateblog", withAuth, async (req, res) => {

//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ["password"]},
//       include: [{ model: Blog }],
//     });

//     const user = userData.get({ plain: true });

//     res.render("update-blog", {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     console.log("Issue fetching profile");
//     res.status(500).json(err);
//   }
// });

// Get blogs view
router.get("/blogs/:id", async (req, res) => {

  try{
    const blogData = await Blog.findByPk(req.params.id);
    const blog = blogData.get({ plain: true });
  
    res.render("blog-view", {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// update blog routes
router.get("/blogsu/:id", async (req, res) => {

  try{
    const blogData = await Blog.findByPk(req.params.id);
    const blog = blogData.get({ plain: true });
  
    res.render("update-blog", {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;