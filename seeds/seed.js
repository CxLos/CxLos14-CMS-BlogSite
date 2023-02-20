// without json
const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedBlogs = require('./blog-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedBlogs();

  process.exit(0);
};

seedAll();

// With json
// const sequelize = require('../config/connection');
// const { User, Blog } = require('../models');

// const userData = require('./userData.json');
// const blogData = require('./blogData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const blog of blogData) {
//     await Blog.create({
//       ...blog,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

  // await Blog.bulkCreate(blogData, {
  //   individualHooks: true,
  //   returning: true,
  // });
// 
//   process.exit(0);
// };

// seedDatabase();