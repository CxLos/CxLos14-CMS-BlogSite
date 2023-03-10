//
const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/:id', withAuth, async (req, res) => {

    try {
      console.log('yay updates')
      const blogData = await Blog.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!blogData[0]) {
        res.status(404).json({ message: 'No blog found with this id!' });
        return;
      }
      
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;