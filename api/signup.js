const express = require('express');
const router = express.Router();

const User = require('models/user-model');
const Profile = require('models/profile-model');
const Follower = require('models/follower-model');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const isEmail = require('validator/lib/isEmail');

const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

const userPng =
  'https://res.cloudinary.com/indersingh/image/upload/v1593464618/App/user_mklcpl.png';

// Проверка, существует ли username в базе
router.get('/:username', async (req, res) => {
  const { username } = req.params;

  try {
    if (username.length < 3 || !regexUserName.test(username)) {
      return res.status(401).send('Invalid input');
    }

    const user = await User.findOne({ username: username.toLowerCase() });

    if (user) {
      return res.status(401).send('Username already taken');
    }

    return res.status(200).send('Available');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
});

// Создание пользователя
router.post('/', async (req, res) => {});

module.exports = router;
