const { hashPassword, comparePassword } = require('../../lib/bcrypt');
const { generateToken } = require('../../lib/jwt');

const registerUser = async (userData) => {
  // TODO: Implement register logic
};

const loginUser = async (credentials) => {
  // TODO: Implement login logic
};

const getUserProfile = async (userId) => {
  // TODO: Implement get profile logic
};

module.exports = { registerUser, loginUser, getUserProfile };
