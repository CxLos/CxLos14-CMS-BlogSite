const sequelize = require("../config/connection");
const { Blog } = require("../models");

const blogData = [
  {
    title: "first blog",
    body: "This is what im thinking about"
  }
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
