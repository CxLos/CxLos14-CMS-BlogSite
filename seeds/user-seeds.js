const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
  {
    username: "johndoe",
    email: "johndoe@gmail.com",
    password: "password123",
  }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
