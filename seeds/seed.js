// without json
// const sequelize = require('../config/connection');
// const  = require('./Data');
// const  = require('./Data');

// const seedAll = async () => {
//   await sequelize.sync({ force: true });

//   await ();

//   process.exit(0);
// };

// seedAll();

// With json
const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();