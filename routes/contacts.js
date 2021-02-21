const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Contact = require('../models/Contact');
const User = require('../models/User');

// @route     GET api/contact
// @desc      Get all users contacts
// @access    Private
router.get('/', auth, async (req, res, next) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/contact
// @desc      Add new contact
// @access    Private
router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmpty()]],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/contact
// @desc      Update a contact
// @access    Private
router.put('/:id', auth, (req, res, next) => {
  res.send('Update a contact');
});

// @route     DELETE api/contact
// @desc      Update a contact
// @access    Private
router.delete('/:id', auth, (req, res, next) => {
  res.send('Delete a contact');
});

module.exports = router;
