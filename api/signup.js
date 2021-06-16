const express = require('express');
const router = express.Router();

const User = require('../models/user-model');
const Profile = require('../models/profile-model');
const Follower = require('../models/follower-model');

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
router.post('/', async (req, res) => {
  const {
    user: {
      name,
      email,
      password,
      bio,
      facebook,
      youtube,
      twitter,
      instagram,
      username,
    },
  } = req.body;

  if (!isEmail(email)) {
    return res.status(401).send('Invalid Email');
  }

  if (password.length < 6) {
    return res.status(401).send('Password must be at least 6 characters');
  }

  try {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (user) {
      return res.status(401).send('User already registered');
    }

    // Добавить проверку username

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email: email.toLowerCase(),
      username: username.toLowerCase(),
      password: hashedPassword,
      profilePicUrl: req.body.profilePicUrl || userPng,
    });

    await newUser.save();

    const profileFields = {};

    profileFields.user = newUser._id;

    profileFields.bio = bio;

    profileFields.social = {};
    if (facebook) profileFields.social.facebook = facebook;
    if (youtube) profileFields.social.youtube = youtube;
    if (instagram) profileFields.social.instagram = instagram;
    if (twitter) profileFields.social.twitter = twitter;

    await new Profile(profileFields).save();
    await new Follower({
      user: newUser._id,
      followers: [],
      following: [],
    }).save();

    const payload = { userId: newUser._id };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '2d' },
      (err, token) => {
        if (err) {
          throw new Error(err.message);
        }
        res.send(200).json(token);
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
